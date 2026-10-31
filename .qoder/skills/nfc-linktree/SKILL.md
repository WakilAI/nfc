---
name: nfc-linktree
description: Build and update French NFC store link pages and the directory in this repository. Use when adding a store, editing its links or design, or verifying and deploying the site.
---

# NFC Linktree

## Store page workflow

- Create `stores/<category>/<slug>/` with `index.html`, `styles.css`, `links.js`, `page.js`, `check.cjs`, `README.md`, `assets/` and source-only `references/`.
- Reuse an existing store's `page.js` and `check.cjs`; keep the safe renderer contract and empty-URL behavior.
- Register the store in `stores.js`, add its no-JS link to the category page, and extend `scripts/check-search.cjs`.
- Keep `references/` out of HTML/CSS/JS. Run `node check.cjs` and the browser check.
- Update store counts in `README.md`, `PRODUCT.md`, `PLAN.md` and `VERIFICATION.md`.

## Contacts

When given only a phone number, populate both Téléphone (`tel:`) and WhatsApp (`https://wa.me/`). Assume Algeria: use `+213` and drop the leading `0` (e.g. `0778 07 96 03` → `https://wa.me/213778079603`).

## Verify and deploy

- Node checks: `node check.cjs`.
- Browser checks: set `PLAYWRIGHT_MODULE` and `CHROMIUM_PATH`, then run `node scripts/check-browser.cjs`.
- Deploy by pushing to `main`; the Pages workflow builds and deploys automatically. After it is green, verify the live page, assets and directory search.

## Reporting

End every implementation report with the direct way to open the page:

- Local: `stores/<category>/<slug>/index.html` or `file:///C:/Users/mehdi/OneDrive/Bureau/dev/wakil/nfc-linktree/stores/<category>/<slug>/index.html`
- Live (after deployment): `https://wakilai.github.io/nfc/<category>/<slug>/`
