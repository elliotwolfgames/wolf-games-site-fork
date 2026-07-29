#!/usr/bin/env node
/* ============================================================
   sync-copy.js

   No CMS is chosen yet, so every string on the site lives in one
   structured file: content/site.json. Copy can be edited there
   without touching markup.

   The HTML is still the served artifact, so the site renders with
   JavaScript disabled. This script moves copy between the two.

   USAGE
     node tools/sync-copy.js --extract    HTML  ->  content/site.json
     node tools/sync-copy.js --apply      content/site.json  ->  HTML
     node tools/sync-copy.js              report only

   HOW A STRING OPTS IN
     Put data-copy="some.key" on the element that holds it.
     Keys are global: the same key on two pages (nav, footer) is
     one entry in site.json and updates both.
   ============================================================ */
'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const STORE = path.join(ROOT, 'content', 'site.json');
const PAGES = ['index.html', 'problem.html', 'how-it-works.html', 'demo.html',
               'contact.html', 'legal.html', 'about.html'];

const mode = process.argv.includes('--extract') ? 'extract'
           : process.argv.includes('--apply')   ? 'apply'
           : 'report';

const RE = /<([a-zA-Z0-9]+)((?:[^>"']|"[^"]*"|'[^']*')*?\sdata-copy="([^"]+)"(?:[^>"']|"[^"]*"|'[^']*')*)>([\s\S]*?)<\/\1>/g;

function norm(s) { return s.replace(/\s+/g, ' ').trim(); }

/* ---------------- extract ---------------- */
if (mode === 'extract') {
  const store = {};
  const conflicts = [];
  for (const page of PAGES) {
    const file = path.join(ROOT, page);
    if (!fs.existsSync(file)) continue;
    const src = fs.readFileSync(file, 'utf8');
    let m;
    RE.lastIndex = 0;
    while ((m = RE.exec(src)) !== null) {
      const key = m[3];
      const val = norm(m[4]);
      if (key in store && store[key] !== val) conflicts.push({ key, page });
      store[key] = val;
    }
  }
  const ordered = {};
  Object.keys(store).sort().forEach(k => { ordered[k] = store[k]; });
  fs.writeFileSync(STORE, JSON.stringify(ordered, null, 2) + '\n', 'utf8');
  console.log(`\nExtracted ${Object.keys(ordered).length} strings to content/site.json`);
  if (conflicts.length) {
    console.log('\nShared keys that differ between pages (last one wins):');
    conflicts.forEach(c => console.log(`  ${c.key}  (${c.page})`));
  }
  console.log('');
  process.exit(0);
}

/* ---------------- apply ---------------- */
if (mode === 'apply') {
  if (!fs.existsSync(STORE)) {
    console.error('content/site.json not found. Run --extract first.');
    process.exit(1);
  }
  const store = JSON.parse(fs.readFileSync(STORE, 'utf8'));
  let changed = 0, missing = [];

  for (const page of PAGES) {
    const file = path.join(ROOT, page);
    if (!fs.existsSync(file)) continue;
    let src = fs.readFileSync(file, 'utf8');
    const before = src;

    src = src.replace(RE, (full, tag, attrs, key, inner) => {
      if (!(key in store)) { missing.push(`${page}: ${key}`); return full; }
      if (norm(inner) === store[key]) return full;
      changed++;
      return `<${tag}${attrs}>${store[key]}</${tag}>`;
    });

    if (src !== before) fs.writeFileSync(file, src, 'utf8');
  }

  console.log(`\nApplied content/site.json. ${changed} string(s) updated.`);
  if (missing.length) {
    console.log('\nKeys in the HTML with no entry in site.json (left untouched):');
    [...new Set(missing)].forEach(k => console.log(`  ${k}`));
  }
  console.log('');
  process.exit(0);
}

/* ---------------- report ---------------- */
let total = 0;
const perPage = {};
for (const page of PAGES) {
  const file = path.join(ROOT, page);
  if (!fs.existsSync(file)) continue;
  const src = fs.readFileSync(file, 'utf8');
  let m, n = 0;
  RE.lastIndex = 0;
  while ((m = RE.exec(src)) !== null) n++;
  perPage[page] = n;
  total += n;
}
console.log('\nKeyed strings per page');
console.log('-'.repeat(46));
Object.keys(perPage).forEach(p => console.log(`  ${p.padEnd(22)} ${perPage[p]}`));
console.log('-'.repeat(46));
console.log(`  ${'total'.padEnd(22)} ${total}`);
console.log('\n  --extract  HTML -> content/site.json');
console.log('  --apply    content/site.json -> HTML\n');
