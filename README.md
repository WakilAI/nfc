# Wakil AI Store Directory

Static English directory for Algerian stores with NFC plates or QR codes. Browse store types or search by name, then open a store’s existing page of useful links. Individual store pages keep their own French copy and visual identity.

## Edit and check

- `stores.js`: store types, names, logos and locations. Type labels are their URL slug words in title case. Keep slugs stable after launch.
- `directory.js`, `search.js`, `directory.css`: shared directory rendering, name matching and Wakil AI styling.
- `wakil-ai-assests/design-system.md` and `logo.png`: supplied brand authority. `DESIGN.md` records the implemented directory subset. Fonts are hosted locally with their Google Fonts OFL licenses in `wakil-ai-assests/fonts/`.
- `stores/<type>/<store>/links.js`: editable store labels, destinations and order. Ino Burger retains `window.INO_LINKS`; other stores use `window.LINKTREE_LINKS`.
- Empty destinations are retained in configuration and omitted publicly. Only `https:`, `tel:` and `mailto:` are accepted. Editable labels render as text.
- Cards show the previous location label again. Pending locations remain explicitly unconfirmed; supplied Maps destinations are unchanged.

```powershell
node check.cjs
node scripts/prepare.cjs
```

No application dependencies or framework are required. Checks cover all eight stores, search normalization and category scope, registry validity, unique URLs, safe destinations, the legacy redirect and the deployment artifact. The remaining hosting and device acceptance gates are recorded in `VERIFICATION.md`.

Preparation stages only required runtime files in ignored `_site/`, including fonts and their license files. Tests, docs, unused artwork, masters and local verification material stay outside the deployed artifact. Useful originals remain in the public source repository.

## Source layout

All eleven category folders live under `stores/`, including their landing pages, individual store projects and the legacy redirect. For example, `stores/clothing-store/index.html` and `stores/clothing-store/maison-allure/`. Preparation publishes them at the existing `<type>/` and `<type>/<store>/` URLs; no `/stores/` segment is added publicly.

## Search and store types

Homepage search finds stores across all types. Category search stays within its type. Matching ignores case, accents, apostrophe style and repeated spaces. Clear search restores the default list; no matches and categories with no stores have explicit empty states. Search requires JavaScript; ordinary fallback links still allow browsing with JavaScript disabled.

Eleven types are registered: Food, Clothing Store, Perfume Store, Computer Store, Phone Store, Home Goods, Travel Agency, Cosmetic Store, Shoes Store, Dental Clinic and Jewelry Store. The four upcoming types currently have no stores.

Sallon d’or sells curtains and interior decoration, so its page lives at `home-goods/sallon-dor/`. The previous `clothing-store/sallon-dor/` URL redirects and includes a normal fallback link.

## Browser verification

Use an existing Playwright installation without adding it to the website. Set `PLAYWRIGHT_MODULE` to its `playwright-core` path and, if needed, `CHROMIUM_PATH` to an installed Chromium executable, then run:

```powershell
node scripts/check-browser.cjs
```

The script serves `_site/` locally under `/nfc/`, checks 120 page/viewport combinations plus search/navigation/legacy-redirect flows, and saves ignored screenshots in `.impeccable/review/`. Node checks do not require Playwright. Use a static server for `_site/` to preview the complete site. The `stores/` source folder is mapped to existing public URLs during preparation. Individual store pages can still be opened directly.

## Add a store

1. Use the `nfc-linktree` skill to create the folder under `stores/<type>/`; preserve supplied artwork and documentation.
2. Fill `links.js`, add the store to `stores.js` with its logo, and add a direct link to the type page’s `noscript` fallback.
3. For a new type, add its registry entry, matching SVG icon in `directory.js`, category page on the existing model and homepage fallback link. Empty types are supported.
4. Run Node checks, browser checks and release checks, then commit the intended paths and push to `main` in `WakilAI/nfc`.

## Deployment

[WakilAI/nfc](https://github.com/WakilAI/nfc) is the existing public repository. `.github/workflows/pages.yml` checks, prepares, uploads and deploys on pushes to `main` or manual dispatch. GitHub Pages is configured to use GitHub Actions. Published and verified site: [Wakil AI Store Directory](https://wakilai.github.io/nfc/).

See `VERIFICATION.md` for observed deployment status and open release gates. Confirm live URLs before programming NFC plates or printing QR codes. The commercial service’s suitability under [GitHub Pages usage limits](https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits#usage-limits) remains unresolved.
