# Verification and release handoff

## Wakil AI directory adjustments — 2026-10-31

- English directory homepage and eleven category pages use the supplied Wakil AI logo/design system, locally hosted Space Grotesk and Plus Jakarta Sans, brand colors and SVG category icons. Store pages retain their existing designs and French copy.
- Category labels exactly match their slug words in title case. Five upcoming empty types are usable pages with explicit empty states; Home Goods contains Sallon d’or.
- Sallon d’or was moved with all artwork, configuration and documentation to `home-goods/sallon-dor/`; `clothing-store/sallon-dor/` redirects and includes an ordinary fallback link. Store destinations and order remain unchanged.
- Homepage search spans all stores; category search stays within the chosen type. Node and browser assertions cover case, accents, apostrophes, whitespace, no results, clearing, focus restoration, root result links and category isolation.
- Node/store/search/artifact checks passed. Chromium passed **108 viewport/route views**, all store navigation/refresh/Back flows, legacy redirect and no-JavaScript fallback navigation.
- Captured **36 page screenshots plus 7 desktop/search/empty-state screenshots**. Browser emulation still does not establish physical-device or Safari acceptance.
- Deployment preparation now includes **54 runtime files plus `.nojekyll`**, including the brand logo, two self-hosted fonts and their OFL license files. Brand source documentation stays outside the deployed artifact.
- Earlier baseline evidence below describes the initial version. The existing deferred location and hosting/release gates remain open unless subsequently verified.
- GitHub Pages API now confirms `build_type: workflow` and `https://wakilai.github.io/nfc/`. The initial Pages activation blocker below is resolved; current deployment and live checks are recorded separately after pushing.
- Independent visual review disposition: **ship**, no material findings. Design documents now reflect the supplied brand system. Application whitespace checks passed; the imported brand source and OFL licenses retain their original Markdown/license whitespace.

## Local implementation — 2026-10-31

- Implemented all six store moves and the homepage + five category pages.
- Kept existing store brands, artwork and link order. Compared all 34 nonempty store destinations with the original files; only surrounding whitespace was normalized.
- Maison Allure's two empty destinations and Sallon d’or's empty Google reviews entry remain configured and produce no button. All six renderers omit empty entries, render editable labels as text, reject unsafe protocols and validate the entire list before displaying links.
- `node check.cjs` passed: all existing store checks, meaningful checks for the three older pages, renderer error cases, registry metadata, unique URLs, safe destinations, runtime syntax and deployment artifact completeness.
- Preparation produces **41 runtime files plus `.nojekyll`**, with no tests, documentation, masters, unused reference artwork or local tooling. Ino Burger's runtime `references/logo.jpg` is deliberately retained.
- Chromium emulation passed **72 views**: homepage, five categories and six stores at 320, 360, 390 and 430px portrait, 844×390 touch landscape and 1440×1000 desktop.
- Passed logo/image loading, local asset responses under `/nfc/`, horizontal overflow, 48px touch targets, visible keyboard focus, natural scrolling and last-link reachability, expected link count/order/destinations, reduced-motion rendering, direct store loads and refreshes, category/store navigation and browser Back.
- All twelve pages expose useful no-JavaScript content; directory fallback links reach categories and stores.
- Captured and visually reviewed 24 portrait/landscape screenshots. Independent Impeccable finish review: **ship locally**, no material findings. Existing decorative effects were retained in accordance with the plan.
- No additional application dependencies. Browser checks used an existing external `playwright-core` and installed Chromium. Evidence in `.local/` and `.impeccable/review/` is intentionally excluded from Git and the Pages artifact.

## Deferred locations

User explicitly requested skipping location confirmation for now. All six registry entries therefore have `commune: null, wilaya: null` and display **Localisation à confirmer**.
Supplied Maps destinations remain unchanged. Do not treat directory locations as release-ready.
After confirmation, update both fields and run `node check.cjs --release`.

## Initial GitHub permissions and owner action — historical

Live API inspection confirmed `WakilAI/nfc` is public, initially empty, and the authenticated collaborator has push access but neither maintain nor admin access.
Pages inspection and creation with `build_type=workflow` returned **HTTP 404**; Actions policy inspection returned **HTTP 403**.
These responses do not establish that organization policies allow or prohibit deployment.

The implementation was committed and pushed to `main`. In [Actions run 41197780448](https://github.com/WakilAI/nfc/actions/runs/41197780448),
the Ubuntu build job passed `node check.cjs`, artifact preparation and upload.
The deployment job failed at `actions/configure-pages@v5` with **Get Pages site failed** / **Not Found**,
requesting that Pages be enabled and configured for GitHub Actions. A second Pages creation attempt
after the first push also returned HTTP 404. No successful publication or live twelve-page verification is claimed.

The initial owner/administrator handoff was:

1. Open [WakilAI/nfc → Settings → Pages](https://github.com/WakilAI/nfc/settings/pages).
2. Under **Build and deployment**, select **Source: GitHub Actions** and save.
3. In [Actions → Check and deploy Pages](https://github.com/WakilAI/nfc/actions/workflows/pages.yml), run the workflow on `main` or rerun the failed deployment job.
4. Only if blocked by an explicit policy error, allow the five official actions named in the workflow, Pages deployment and its `pages: write` / `id-token: write` job permissions; approve the `github-pages` environment if protection rules require it.

## Open release gates

- Confirm all six commune + wilaya labels (deferred by user).
- Successful latest workflow deployment and any further organization/environment policy approval required by that deployment. Pages source activation is now complete.
- Hosting-policy suitability for the commercial NFC service. GitHub's [Pages usage limits](https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits#usage-limits) restrict online-business/e-commerce and commercial SaaS hosting; suitability is not confirmed.
- Successful Pages deployment, actual published URL and live checks of all twelve URLs including refreshes and asset loading under `/nfc/`.
- Physical-device and Safari acceptance are unverified; Chromium emulation does not establish them.

Do not encode or print final NFC/QR destinations until the live URLs are confirmed.
External accounts, WhatsApp availability and destination ownership were not independently validated.
`RTK.md` referenced by the supplied instructions was not present in the workspace or located applicable parent guidance.
