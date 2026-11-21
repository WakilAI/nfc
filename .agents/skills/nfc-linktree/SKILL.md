---
name: nfc-linktree
description: Build and update French NFC store link pages and the directory in this repository. Use when adding a store, editing its links or design, or verifying and deploying the site.
---

# NFC Linktree

## Store page workflow

- Create `stores/<category>/<slug>/` with `index.html`, `styles.css`, `links.js`, `page.js`, `check.cjs`, `README.md`, `assets/` and source-only `references/`.
- Reuse an existing store's `page.js` and `check.cjs`; keep the safe renderer contract: real destinations render as anchors with safe protocols, and never create an anchor for an empty URL.
- Avis Google (first) and Localisation (last) are always shown, even without a link: keep the entry with an empty URL and render it as a disabled, non-clickable placeholder (« Bientôt disponible »). For Localisation without a Maps link, use a provisional Google Maps search URL (`https://www.google.com/maps/search/?api=1&query=<Store+Name>`) and note it for replacement.
- Keep the design simple: nothing between the logo and the buttons (no taglines, dividers or decorative motifs), a minimal footer (name · activity), colors sampled from the logo. Only add decorative elements when the user asks.
- Preserve supplied logos: keep sources untouched in `references/`, publish an optimized WebP copy in `assets/` for the page and the registry. When image reading is unavailable, sample palette colors with local Python PIL (`Image.quantize` on a white-flattened copy).
- Register the store in `directory/stores.js`, add its no-JS link (`<slug>/preview.html`) to the category page, and extend `scripts/check-search.cjs`.
- Keep `references/` out of HTML/CSS/JS. Run `node check.cjs` and the browser check.
- Update store counts in `README.md`, `docs/PRODUCT.md`, `docs/PLAN.md` and `docs/VERIFICATION.md`.

## Contacts

When given only a phone number, populate both Téléphone (`tel:`) and WhatsApp (`https://wa.me/`). Assume Algeria: use `+213` and drop the leading `0` (e.g. `0778 07 96 03` → `https://wa.me/213778079603`).

## Verify and deploy

- Node checks: `node check.cjs` (includes category no-JS fallback coverage).
- Browser checks: set `PLAYWRIGHT_MODULE` and `CHROMIUM_PATH`, then run `node scripts/check-browser.cjs`.
- After checks pass, commit and push to `main` directly without asking; the Pages workflow builds and deploys automatically. Once it is green, verify the live page, assets and directory search, then record the live verification in `docs/VERIFICATION.md`.

## Reporting

End every implementation report with the direct way to open the page:

- Local: `stores/<category>/<slug>/index.html` or `file:///C:/Users/mehdi/OneDrive/Bureau/dev/wakil/nfc-linktree/stores/<category>/<slug>/index.html`
- Live (after deployment): `https://wakilai.github.io/nfc/<category>/<slug>/`
