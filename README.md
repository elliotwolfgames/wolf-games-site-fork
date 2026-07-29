# wolfgames.net — partner site

Built to `wolfgames-site-copy-FINAL.md` (canonical copy and build spec).
Plain HTML, CSS and JS. No build step, no framework, no dependencies.

Its one job: get a qualified partner to start a pilot conversation.
It is not a player destination. Players go to the vault.

> **Audience rule.** This site addresses every partner type: brands, streamers,
> media companies, publishers, IP holders, creators. **Nothing here may assume
> the reader is a news publisher.** If a line only makes sense to a newspaper,
> it is wrong.

## Routes

| Route | File | Purpose |
|---|---|---|
| `/` | `index.html` | The pitch |
| `/the-case` | `problem.html` | The long argument |
| `/how-it-works` | `how-it-works.html` | The mechanism |
| `/demo` | `demo.html` | The playable proof |
| `/about` | `about.html` | Who we are |
| `/contact` | `contact.html` | The ask |
| `/legal` | `legal.html` | Data, privacy, claims |

Pretty routes are served by `vercel.json` rewrites. Links in the markup point at
the `.html` files so the site also works from a plain static server with no
rewrite layer.

## Editing copy without touching markup

Every string carries `data-copy="some.key"`. All 245 of them live in one file.

```bash
node tools/sync-copy.js --extract   # HTML  ->  content/site.json
node tools/sync-copy.js --apply     # content/site.json  ->  HTML
node tools/sync-copy.js             # report, no writes
```

Keys are global: `nav.*` and `foot.*` appear on every page and are edited once.

The HTML stays the served artifact, which is why copy is synced into it rather
than injected at runtime. That is what keeps the site readable with JavaScript
disabled.

## Things pending clearance

Everything not yet cleared is switched from one file, `content/config.json`.

```bash
node tools/apply-config.js          # report what is currently exposed
node tools/apply-config.js --apply  # write the HTML
```

| Flag | Default | Owner | What it gates |
|---|---|---|---|
| `namedProof` | **ON** | Elliot | Naming Law & Order: Clue Hunter and Peacock. Off swaps in unnamed wording. |
| `liveFigures` | **ON** | Elliot | The 60%+ / 20%+ / 6 min+ figures. Off withholds them in place. |
| `partnerLogos` | **OFF** | Elliot / Andrew | The logo strip. Built and deliberately empty. |
| `demoBundle` | **OFF** | Product | The playable frame on `/demo`. |

Toggling is reversible: the "on" text is captured into `data-on` the first time a
flag is switched off, so flipping it back restores the original exactly.

**`namedProof` and `liveFigures` ship ON because the spec supplies that copy.
Neither is cleared yet.** Flip them off before anything goes public if clearance
has not landed.

## The demo frame

The game bundle does not exist. `/demo` renders a visible placeholder that says
so, and still demonstrates the thing the page has to prove: change the world,
and the edition rewrites. To drop the real bundle in:

1. `content/config.json` → `flags.demoBundle.value = true`
2. `content/config.json` → `demoBundle.src = "<bundle url>"`
3. `node tools/apply-config.js --apply`

The contract the bundle must satisfy is documented inline in `demo.html`:
loads in an iframe, accepts `?world=<id>`, repaints within one second.

## Hard constraints, and where they are enforced

| Constraint | Where |
|---|---|
| Renders with JavaScript disabled | `.r` reveals default to visible; the `.js` class (set inline in `<head>`) opts *into* animation. The demo picker and side-by-side are written out in HTML and only wired up by script. |
| No browser storage APIs | Nothing on the partner pages touches `localStorage`, `sessionStorage`, `indexedDB` or `document.cookie`. |
| Survives print to PDF | Global `@media print` block in `css/wg.css`. Chrome, decoration and CTAs drop out; type goes black on white; cards and table rows avoid breaking. |
| Three claim chips, equal weight | `.chip.proven` / `.chip.expect` / `.chip.bet` share size, padding, border width, weight and tracking. Only color differs. `Our bet` is never lighter. |
| No em dashes | None in any page, stylesheet, script or content file. |
| First-party analytics only, no consent wall | No third-party scripts are loaded. |

## Structure

```
index.html  problem.html  how-it-works.html  demo.html
contact.html  legal.html  about.html
css/wg.css            design system: tokens, components, print
js/site.js            progressive enhancement only
content/site.json     all 245 strings
content/config.json   everything pending clearance
tools/sync-copy.js    copy <-> HTML
tools/apply-config.js flags -> HTML
api/                  Vercel functions for lead capture
vault.html profile.html   player pages, not linked from the partner nav
deck/                 internal pitch decks (CONFIDENTIAL, keep private)
```

## anime.js

The hero reveal uses **anime.js v4** (`animate` + `onScroll`). v4 has **no
default export**: it is `import { animate, onScroll } from 'animejs'`, never
`anime()`.

There is no bundler here and `node_modules/` is gitignored, so a bare
`'animejs'` specifier would neither resolve in the browser nor survive deploy.
Two things bridge that, and both are deliberate:

1. The ESM bundle is **vendored** to `js/vendor/anime.esm.min.js` and committed.
   `npm install` re-copies it via the `postinstall` hook, so the served copy
   cannot drift from the installed one. To upgrade: `npm install animejs@latest`.
2. An **import map** in `index.html` points `animejs` at that file, so
   `js/hero-anim.js` uses the documented bare specifier rather than a brittle
   relative path into `dist/`.

```html
<script type="importmap">
{ "imports": { "animejs": "/js/vendor/anime.esm.min.js" } }
</script>
```

The hero hands its reveal to anime.js, so it carries `.hero-anim` rather than
the CSS `.r` classes and its section is not `.obs`. Two systems animating the
same opacity would fight. The hidden start state is scoped to `.js`, so the
hero still renders with scripting off, and `prefers-reduced-motion` unhides it
and skips the animation entirely.

## Local preview

```bash
python3 -m http.server 8766
```

## Design system

Tokens are sampled from the live wolfgames.net so the partner site and the
player site read as one brand:

| Token | Value | Sampled from |
|---|---|---|
| `--bg` | `#181818` | live site canvas |
| `--panel` | `#111111` | live site cards |
| `--yellow` | `#FAFF00` | CTAs, eyebrows, rules |
| `--cyan` | `#45CDFF` | live site secondary accent |
| `--r` / `--r-lg` / `--r-pill` | `8px` / `16px` / `100px` | live site radii |
| `--r-arch` | `1000px 1000px 10px 10px` | the arch on portrait imagery |

The arch is the live site's signature portrait treatment. Here it carries the
host archetypes on the homepage, which is what the "the host comes from who you
are" pillar is arguing.

Type is Inter Tight + Inter with IBM Plex Mono for eyebrows and tags. The live
site uses Messina Sans, which is commercially licensed and cannot be embedded
here; Inter Tight is the closest open neo-grotesque.

## Deviations from the spec, all deliberate

0. **The canvas is `#181818`, not pure black.** The spec says "Background: pure
   black," but the live wolfgames.net canvas is `#181818` and the brief was to
   pull the real site's styling in. Matching the brand won. One token flips it
   back if that call is wrong.
1. **Page titles use `·` rather than an em dash.** The spec supplies titles like
   `Wolf Games — a vault of daily games`, but copy rule 1 bans em dashes
   anywhere. The rule won. Middot is already the spec's own separator elsewhere.
2. **`legal.c1.head` reads "What runs on your properties"**, not "on your
   surfaces". Copy rule 3 bans the phrase "on your surface".
3. **Nana's Bakery has no art.** Its shelf tile is a visible "art pending"
   placeholder rather than a borrowed screen from another title.
4. **The "one mechanic, three worlds" section uses three existing scene
   assets** as a stand-in. Definitive art is open item 5.

## Open items still blocking

| # | Item | Owner |
|---|---|---|
| 1 | Clearance to name Law & Order: Clue Hunter publicly | Elliot |
| 2 | Clearance on 60%+ / 20%+ / 6 min+ | Elliot |
| 3 | Written permission for every partner logo | Elliot / Andrew |
| 4 | The demo bundle | Product |
| 5 | Art for "one mechanic, three worlds" | Leo |
| 6 | Channel slate confirmation (Nana's Bakery art) | Product |
| 7 | CMS decision (`tools/sync-copy.js` is the interim answer) | Eng |
| 8 | Form endpoint (posts to `/api/partner-lead`, fails soft) | Eng |

Two deviations from the PRD carried over from the spec, both still needing
sign-off: the attention ladder is on `/the-case` only, not the homepage, and
there is no calculator.
