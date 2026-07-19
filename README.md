# Wolf Games — Marketing Site

Static marketing site for Wolf Games (partner-agnostic), plus a player-facing
Game Vault. Built as plain HTML/CSS/JS — no build step.

## Structure
- `index.html` — homepage (this repo's root is the web root)
- `vault.html` — the Vault (loads its catalog from `data/vault.json`)
- `about.html` — About Us
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
