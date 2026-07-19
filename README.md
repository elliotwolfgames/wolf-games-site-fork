# Wolf Games — Marketing Site

Static marketing site for Wolf Games (partner-agnostic), plus a player-facing
Game Vault. Built as plain HTML/CSS/JS — no build step.

## Structure
- `index.html` — homepage: player-first above the fold, partner case on scroll
- `vault.html` — the Vault (loads its catalog from `data/vault.json`)
- `profile.html` — player profile: streak, today's editions, history
- `save-progress.html` — player email capture (progress sync at account launch)
- `about.html` — About Us
- `js/vault-state.js` — anonymous player state in localStorage (streaks, plays)
- `js/track.js` — shell event instrumentation (console/dataLayer stub)
- `api/partner-lead.js` — Vercel function; forwards to `PARTNER_LEAD_WEBHOOK` if set
- `api/player-lead.js` — Vercel function; forwards to `PLAYER_LEAD_WEBHOOK` if set
- `assets/` — images, logos, press logos
- `data/vault.json` — curated game catalog for the Vault
- `deck/` — internal pitch decks (CONFIDENTIAL — keep private)

## Local preview
```bash
python3 -m http.server 8765
# → http://localhost:8765/index.html
```

## Deploy (Vercel)
No configuration needed — the repo root is the site root. Import the repo
and deploy as-is (static site, no build command).
