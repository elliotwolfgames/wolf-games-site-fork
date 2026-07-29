#!/usr/bin/env node
/* ============================================================
   apply-config.js

   Everything on this site that is pending clearance is marked in
   the HTML with a data-flag, and switched from one place:
   content/config.json.

   Because this rewrites the HTML rather than acting at runtime,
   the site still reads correctly with JavaScript disabled.

   USAGE
     node tools/apply-config.js            report what is exposed
     node tools/apply-config.js --apply    write the HTML

   HOW AN ELEMENT OPTS IN
     data-flag="liveFigures"
       Hidden when the flag is false, shown when it is true.

     data-flag="liveFigures" data-alt="fallback text"
       Text is swapped for the fallback when the flag is false.
       The original is captured into data-on on first apply, so
       flipping the flag back restores it.
   ============================================================ */
'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const CONFIG = path.join(ROOT, 'content', 'config.json');
const PAGES = ['index.html', 'problem.html', 'how-it-works.html', 'demo.html',
               'contact.html', 'legal.html', 'about.html'];

const apply = process.argv.includes('--apply');

const cfg = JSON.parse(fs.readFileSync(CONFIG, 'utf8'));
const flags = {};
Object.keys(cfg.flags).forEach(k => { flags[k] = cfg.flags[k].value === true; });

function attr(tag, name) {
  const m = tag.match(new RegExp(`\\s${name}="([^"]*)"`));
  return m ? m[1] : null;
}

let totalChanged = 0;
const report = [];

for (const page of PAGES) {
  const file = path.join(ROOT, page);
  if (!fs.existsSync(file)) continue;

  const src = fs.readFileSync(file, 'utf8');
  const lines = src.split('\n');
  let changed = 0;

  const out = lines.map((line) => {
    if (line.indexOf('data-flag=') === -1) return line;

    // the opening tag that carries the flag
    const tagMatch = line.match(/<([a-zA-Z0-9]+)([^>]*\sdata-flag="[^"]+"[^>]*)>/);
    if (!tagMatch) return line;

    const tagName = tagMatch[1];
    const tagAttrs = tagMatch[2];
    const fullTag = tagMatch[0];
    const flag = attr(tagAttrs, 'data-flag');
    if (!(flag in flags)) {
      report.push({ page, flag, state: 'UNKNOWN FLAG', note: 'not present in config.json' });
      return line;
    }

    const on = flags[flag];
    const alt = attr(tagAttrs, 'data-alt');
    let newLine = line;

    if (alt !== null) {
      // text swap. capture the "on" text once so the swap is reversible
      const inner = new RegExp(`(${fullTag.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})([\\s\\S]*?)(</${tagName}>)`);
      const m = newLine.match(inner);
      if (m) {
        let savedOn = attr(tagAttrs, 'data-on');
        let tag = fullTag;
        if (savedOn === null) {
          savedOn = m[2].replace(/"/g, '&quot;');
          tag = fullTag.replace(/\sdata-alt="/, ` data-on="${savedOn}" data-alt="`);
        }
        const want = on ? savedOn.replace(/&quot;/g, '"') : alt;
        const rebuilt = tag + want + m[3];
        if (rebuilt !== m[0]) { newLine = newLine.replace(m[0], rebuilt); changed++; }
        else if (tag !== fullTag) { newLine = newLine.replace(fullTag, tag); changed++; }
      }
      report.push({ page, flag, state: on ? 'SHOWN' : 'FALLBACK TEXT', el: `<${tagName}>` });
    } else {
      // visibility toggle
      const hasHidden = /\shidden(?=[\s>])/.test(fullTag);
      let tag = fullTag;
      if (on && hasHidden) tag = fullTag.replace(/\shidden(?=[\s>])/, '');
      if (!on && !hasHidden) tag = fullTag.replace(/>$/, ' hidden>');
      if (tag !== fullTag) { newLine = newLine.replace(fullTag, tag); changed++; }
      report.push({ page, flag, state: on ? 'SHOWN' : 'HIDDEN', el: `<${tagName}>` });
    }

    return newLine;
  });

  if (apply && changed) {
    fs.writeFileSync(file, out.join('\n'), 'utf8');
    totalChanged += changed;
  }
}

/* ---- report ---- */
const W = s => String(s).padEnd(20);
console.log('\nFlag states from content/config.json');
console.log('-'.repeat(66));
Object.keys(cfg.flags).forEach(k => {
  const f = cfg.flags[k];
  console.log(`  ${W(k)} ${f.value ? 'ON ' : 'OFF'}   owner: ${f.owner}`);
});

console.log('\nFlagged elements in the pages');
console.log('-'.repeat(66));
if (!report.length) {
  console.log('  none found');
} else {
  const seen = {};
  report.forEach(r => {
    const key = `${r.page}|${r.flag}|${r.state}`;
    seen[key] = (seen[key] || 0) + 1;
  });
  Object.keys(seen).sort().forEach(k => {
    const [page, flag, state] = k.split('|');
    console.log(`  ${W(page)} ${W(flag)} ${state}${seen[k] > 1 ? ` x${seen[k]}` : ''}`);
  });
}

console.log('\n' + '-'.repeat(66));
if (apply) {
  console.log(`Applied. ${totalChanged} element(s) rewritten.\n`);
} else {
  console.log('Dry run. Re-run with --apply to write these changes to the HTML.\n');
}
