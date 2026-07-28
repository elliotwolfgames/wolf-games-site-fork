# wolfgames.net — Partner Site

The publisher-facing site for the Wolf Games game vault, built to the
[wolfgames.net PRD v0.1](#prd-traceability). Plain HTML/CSS/JS — no build step.

Its one job: make a publisher ask for a pilot.

> **Split of concerns.** `wolfgames.net` is the **partner** site (this repo's
> public pages). `wolf.games` is the **player** showroom. Per PRD TR-8 each
> links to the other exactly once — here that is the "Players — enter the vault"
> item in the menu and one line in the footer.

## Structure

### Partner pages (PRD Phase 1)
| File | PRD § | Job |
|---|---|---|
| `index.html` | 8.1 | The lock and the key. Attention ladder, what's proven vs. what's a bet, live proof. |
| `problem.html` | 8.2 | The eight pains, the ladder with metrics, and the ad-inventory model. |
| `how-it-works.html` | 8.3 | The pipeline, the channel set, the three axes, the serial cadence. |
| `demo.html` | 8.4 | The real build in a frame, the town picker, and the side-by-side view. |
| `contact.html` | 8.10 | Lead capture. Six fields, market count, direct calendar link. |
| `legal.html` | 8.11 | Terms, privacy and cookies, written to be read in three minutes. |
| `about.html` | — | Company page, carried over. |

### Player pages (kept in-repo, not linked from the partner nav)
- `vault.html` — the Vault (loads its catalog from `data/vault.json`)
- `profile.html` — player profile and streak state

### Shared
- `css/wg.css` — design tokens, shell, and shared components. **Every partner
  page links this**; page-specific CSS stays inline in that page's `<style>`.
- `js/site.js` — cache-busting, scroll reveals, hamburger menu, particles
- `js/vault-state.js`, `js/track.js` — player state and event instrumentation
- `api/partner-lead.js`, `api/player-lead.js` — Vercel functions for lead capture
- `assets/` — images, logos, press logos
- `deck/` — internal pitch decks (CONFIDENTIAL — keep private)

## Claim rules (PRD §13) — read before editing copy

The site is a procurement document. A publisher's legal team will read it.
Three tier chips are defined in `css/wg.css` and used throughout:

| Chip | Class | Meaning |
|---|---|---|
| Proven | `.tier.proven` | A plain fact. Say it plainly. |
| We expect | `.tier.expect` | A design target. Must carry "we expect" or "our design target is". |
| Our bet | `.tier.bet` | Not measured. Stated openly as a bet, never as a benefit. |

Hard rules:
- **Do not publish a retention lift number** until a pilot measures one.
- **Do not publish a market size number.**
- **Every named partner, title, and logo needs written permission**, re-verified
  each quarter and on the day of publication.
- **No internal shorthand** on public pages. Write the plain phrase.

## Known gaps before this can ship

- [ ] **Partner and press logos** (`index.html`) — `WOLF ENTERTAINMENT`,
      `NBCUniversal`, `ADVANCE`, and the seven press logos are inherited from the
      previous site and are **not yet permission-verified** under PRD §13.6.
- [ ] **Law & Order: Clue Hunter reference** — PRD §17 Q3 flags this as an open
      question. Confirm it is live and clear to name publicly.
- [ ] **Demo town content** (`demo.html`) — the four markets are **sample fill**,
      marked as such on the page. Replace the `TOWNS` / `INTERESTS` block with the
      real per-market corpus (PRD §12, items 1 and 2).
- [ ] **Calendar link** (`contact.html`) — points at a placeholder Calendly URL.
- [ ] **Phase 2 pages** — proof and references (8.5), reliability and integration
      (8.6), privacy and data (8.7), commercial models (8.8), FAQ (8.9).

## Local preview
```bash
python3 -m http.server 8765
```
Then open `http://localhost:8765/index.html`.

## Deploy (Vercel)
No configuration needed — the repo root is the site root. Import the repo
and deploy as-is (static site, no build command). The two `api/` functions
deploy as serverless endpoints; each no-ops safely when its webhook env var
(`PARTNER_LEAD_WEBHOOK` / `PLAYER_LEAD_WEBHOOK`) is unset.

## PRD traceability
Source: `wolfgames-net-prd (1).md` v0.1, July 2026. This repo implements the
PRD's Phase 1 release plan (§16). Phase 2 and 3 pages are listed under
"Known gaps" above.
