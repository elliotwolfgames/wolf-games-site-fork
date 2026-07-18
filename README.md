# Wolf Games — Marketing Site

Static marketing site for Wolf Games (partner-agnostic), plus a player-facing
Game Vault. Built as plain HTML/CSS/JS — no build step.

## Structure
- `site/` — the deployable site (this is the web root)
  - `index.html` — homepage
  - `vault.html` — the Vault (loads its catalog from `data/vault.json`)
  - `about.html` — About Us
  - `assets/` — images, logos, press logos
  - `data/vault.json` — curated game catalog for the Vault
- `deck/` — internal pitch decks (CONFIDENTIAL — keep private)

## Local preview
```bash
python3 -m http.server 8765
# → http://localhost:8765/site/index.html
```

## Deploy (Vercel)
Set the project **Root Directory** to `site`. No build command needed
(static site). The Vault's `/data/vault.json` resolves to `site/data/vault.json`.
