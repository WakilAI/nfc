# Verification and release handoff

## Zone-Tech Pro page — 2026-11-01

- Added the thirteenth type, Repair Center, with `stores/repair-center/index.html`, and Zone-Tech Pro at `stores/repair-center/zone-tech-pro/` as the eleventh store. Repair Center has one store; Travel Agency, Shoes Store, Dental Clinic and Jewelry Store remain empty.
- Confirmed links, in order: Google reviews, Instagram, Facebook, TikTok, WhatsApp, mobile, landline, official website, e-mail and Google Maps. WhatsApp and mobile use `0560989890` (`+213 560 98 98 90`); the landline is `023 78 90 50` (`tel:+21323789050`). All ten entries are active; the website sits after the landline as requested.
- The official logo was supplied as a 732×732 JPEG. It is preserved in `references/`; its trimmed transparent WebP serves the page hero, and a square white-background card serves the directory and favicon.
- Bespoke French page follows Apple’s black-and-white identity: white canvas, black icon tiles, white cards with soft depth and a restrained entrance animation that respects reduced motion. Apple-repair positioning remains in the page metadata and README. No external fonts or network requests.
- `node check.cjs` passed: 13 categories, 11 unique stores, 10 Zone-Tech Pro links, safe destinations, per-store checks and an 85-file deployment artifact. Search checks cover Zone-Tech Pro and Repair Center scoping.
- Chromium passed **150 viewport/route views** and 50 generated screenshots, covering the new type, search, link order, assets, 48px targets, keyboard focus, natural scrolling, no horizontal overflow, navigation/refresh/Back and no-JS fallbacks.
- The prepared `_site/` contains the Repair Center category page, the store page, CSS, scripts and both logo assets; README files and `references/` are not published.
- **Live-verified:** commit `825c12d` deployed via [Actions run 41256743816](https://github.com/WakilAI/nfc/actions/runs/41256743816). `https://wakilai.github.io/nfc/repair-center/zone-tech-pro/` returns 200 with ten links including Instagram and TikTok, the official logo, homepage search returning the store, and no failed requests.

## Prestige Optic page — 2026-10-31

- Added the twelfth type, Optic, with `stores/optic/index.html`, and Prestige Optic at `stores/optic/prestige-optic/` as the tenth store. Optic has one store; Travel Agency, Shoes Store, Dental Clinic and Jewelry Store remain empty.
- Confirmed links: Google reviews, Instagram, Facebook, WhatsApp, telephone and Google Maps. WhatsApp reuses `0542532782` (`+213 542 53 27 82`, `https://wa.me/213542532782`). The configured TikTok entry has an empty destination and is not rendered.
- The supplied logo (1254×1254 PNG) is preserved in `references/`; a 512×512 WebP copy serves the directory card and favicon, and an alpha-keyed variant is used on the lavender page hero. Both supplied plates remain in `references/` and are not published.
- Bespoke French page: lavender canvas, plum logo and rules, italic serif tagline, service line and white rounded cards. The Optic directory page and glasses category icon follow the existing directory model. No external fonts or network requests.
- `node check.cjs` passed: 12 categories, 10 unique stores, safe destinations, per-store checks and a 78-file deployment artifact. Search checks cover Prestige Optic and Optic scoping.
- Chromium passed **138 viewport/route views** and 46 generated screenshots, covering the new type, search, link order, image loading, 48px targets, keyboard focus, natural scrolling, no horizontal overflow, navigation/refresh/Back and no-JS fallbacks.
- The prepared `_site/` contains the Optic category page, the store page, CSS, scripts and both logo variants; `references/` and README files are not published.
- The temporary `stores-not-implemented/Optic/` folder was removed after migration.
- **Live-verified:** commit `825c12d` deployed via [Actions run 41256743816](https://github.com/WakilAI/nfc/actions/runs/41256743816). `https://wakilai.github.io/nfc/optic/prestige-optic/` returns 200 with six links, both logo variants, homepage search returning the store, and no failed requests.

## OVYX store page — 2026-10-31

- Added OVYX at `stores/clothing-store/ovyx/` and to the shared registry as the ninth store. Clothing Store now has two stores; Travel Agency, Shoes Store, Dental Clinic and Jewelry Store remain empty.
- Confirmed links: Google reviews, Instagram, Facebook, TikTok, WhatsApp, telephone and Google Maps. Phone is `+213 778 07 96 03` (`tel:+213778079603`); WhatsApp reuses it (`https://wa.me/213778079603`).
- The supplied logo (1254×1254 PNG) is preserved in `references/`; a 512×512 WebP copy serves the directory card and favicon, and its alpha-keyed variant is used on the dark page hero. The supplied NFC display plate stays in `references/` and is not published.
- Bespoke French page: near-black canvas, silver hairlines, wide-tracked uppercase labels, sharp outline cards and the gazelle-horn mark supplied in the logo. No external fonts or network requests.
- `node check.cjs` passed: 11 categories, 9 unique stores, safe destinations, per-store checks and a 71-file deployment artifact. Search checks now cover OVYX and Clothing Store scoping.
- Chromium passed **126 viewport/route views** and 42 generated screenshots, covering link order, image loading, 48px targets, keyboard focus, natural scrolling, no horizontal overflow, search/navigation/refresh/Back and no-JS fallbacks.
- The prepared `_site/` contains the OVYX page, CSS, scripts and both logo variants; its `references/` and README are not published.
- The temporary `stores-not-implemented/Clothing Store/` folder was removed after migration.
- **Live-verified:** commit `38b70aa` deployed via [Actions run 41238020879](https://github.com/WakilAI/nfc/actions/runs/41238020879). `https://wakilai.github.io/nfc/clothing-store/ovyx/` returns 200 with seven links including WhatsApp, the tightened logo/tagline spacing, both logo variants, homepage search returning the store, and no failed requests.

## Pixel Store page — 2026-10-31

- Added Pixel Store at `stores/phone-store/pixel-store/` and to the shared registry as the eighth store. Phone Store now has two stores; Travel Agency, Shoes Store, Dental Clinic and Jewelry Store remain empty.
- Confirmed links: Google reviews, Instagram, TikTok, WhatsApp and Google Maps. Instagram and TikTok share-tracking parameters were removed in favour of canonical profile URLs. Facebook and Téléphone remain configured with empty destinations and are not rendered. WhatsApp uses `+213 553 66 92 56` (`https://wa.me/213553669256`).
- The official logo was supplied separately as a 1080×1080 image. It is preserved in `references/` and its 512×512 WebP copy (3 366 octets) serves as the directory card and favicon; the page hero keeps the typographic `pixel store` lockup. The promotional NFC card remains in `references/` and is not published.
- Bespoke French page: blue-black canvas, electric-cyan wordmark, diagonal neon ribbons, NFC signal mark, dark glow-bordered link cards and cyan focus states. No external fonts or network requests.
- `node check.cjs` passed: 11 categories, 8 unique stores, safe destinations, per-store checks and a 65-file deployment artifact. Search checks now cover Pixel Store and Phone Store scoping.
- Chromium passed **120 viewport/route views** and 40 generated screenshots, covering link order, image loading, 48px targets, keyboard focus, natural scrolling, no horizontal overflow, search/navigation/refresh/Back and no-JS fallbacks.
- The prepared `_site/` contains the Pixel Store page, CSS, scripts and logo image; its `references/` and README are not published.
- The temporary `stores-not-implemented/Phone Store/` folder was removed after migration.
- **Live-verified:** commit `4116ce9` deployed via [Actions run 41233988435](https://github.com/WakilAI/nfc/actions/runs/41233988435), then the official logo shipped with `38b70aa` ([run 41238020879](https://github.com/WakilAI/nfc/actions/runs/41238020879)). `https://wakilai.github.io/nfc/phone-store/pixel-store/` returns 200 with five links, both removed decorations gone, the official logo asset loading, homepage search returning the store, and no failed requests.

## COSMABENT store page — 2026-10-31

- Added COSMABENT at `stores/cosmetic-store/cosmabent/` and to the shared registry as the seventh store. Cosmetic Store now has one store; Travel Agency, Shoes Store, Dental Clinic and Jewelry Store remain empty.
- Confirmed links: Google reviews, Instagram, Facebook, TikTok, WhatsApp, telephone and Google Maps. Phone is `+213 778 07 96 03` (`tel:+213778079603`); WhatsApp reuses it (`https://wa.me/213778079603`).
- Bespoke French page uses an ivory/fuchsia palette, satin halo, serif headings and the supplied logo. The hero shows the logo uncropped and unframed on a soft dark halo, with a “Cosmabent Cosmetics” lockup in a Trajan-like serif; no square card or logo tile remains. The logo master (1080×1080 PNG) is preserved in `references/`; the transparent 512×512 WebP (129 410 octets) is used on the page and the opaque 512×512 WebP (33.6 KB) remains the directory card image. Four supplied plate mockups are stored in `references/` and are not published.
- `node check.cjs` passed: 11 categories, 7 unique stores, safe destinations, per-store checks and a 60-file deployment artifact. Search checks now cover `COSMABENT` and Cosmetic Store scoping.
- Chromium passed **114 viewport/route views** and 38 generated screenshots with the existing external `playwright-core`/Chromium installation, covering the new page's link order, image loading, 48px targets, keyboard focus, natural scrolling and no horizontal overflow.
- The prepared `_site/` contains the COSMABENT page, CSS, scripts, configuration and WebP logo, with no plate references or documentation.
- The temporary COSMABENT folder was removed after migration; the other pending stores remain untouched in `stores-not-implemented/`.
- **Live-verified:** commit `8443156` (with title follow-up `014f49a`) deployed via [Actions run 41214995020](https://github.com/WakilAI/nfc/actions/runs/41214995020) and [run 41215085657](https://github.com/WakilAI/nfc/actions/runs/41215085657); the latest deployment `38b70aa` ([run 41238020879](https://github.com/WakilAI/nfc/actions/runs/41238020879)) serves seven links including WhatsApp. `https://wakilai.github.io/nfc/cosmetic-store/cosmabent/` and its CSS/JS/assets return 200; the live page title, brand lockup, links and 512px logo render correctly, the homepage search returns the COSMABENT card, and no requests or page scripts failed.

## Complete category-folder grouping — 2026-10-31

Moved all eleven category folders under `stores/`, including landing pages and the legacy redirect, as clarified by the user. No category folder remains at the repository root. Updated preparation and source-path assertions. All Node/store/search/artifact checks passed; SHA-256 comparison confirms that every deployed file and public path is byte-identical before and after this source-only move. No design changes were made; browser tests were not repeated for identical runtime output.

## Previous design restored — 2026-10-31

At the user's request, restored only the immediately preceding directory design from `2fb3bda`: ivory canvas, previous heading/introduction/navigation, original icon sizing and artwork, and location labels. English navigation, search, categories and store pages remain intact. Store projects remain grouped under `stores/<type>/<store>/`; the source-to-public mapping and all published URLs are unchanged. Earlier orange-layout evidence below is historical.

## Orange layout and source organization — 2026-10-31

- Homepage title is centered **NFC Store Links**. Removed its introduction, top directory label and navigation divider. Directory canvas is the requested Wakil Orange `#FF6B00`, with white cards and a white backing behind the supplied orange logo.
- Category icons align with the name/count block, with a 58px slot and at least 24px horizontal spacing. Decorative arrows are omitted below 401px to preserve readable text and spacing. Travel Agency uses a recognizable filled airplane.
- Store locations and their unused registry fields were removed at the user's request; this is no longer a release gate. Supplied Maps buttons inside individual store pages are unchanged.
- All six store projects are grouped under `stores/<type>/<store>/`. Category landing pages remain at the top level. The preparation script maps source assets to the original public paths, keeping all store URLs and the legacy Sallon redirect stable.
- Node/store/search/artifact checks passed. Chromium passed **108 viewport/route views**, including computed title centering, orange background, absent intro/divider/location, icon height/top alignment, minimum 24px gap, search, navigation, asset loading and legacy redirect. Fresh desktop, portrait, landscape and search screenshots were captured.
- Visual review identified one secondary-text contrast issue on the new orange canvas. Increasing black text opacity to `.75` yields approximately **4.56:1**; targeted recapture and reviewer verdict marked the fix resolved. No remaining material findings within that review scope.
- Earlier sections below describe previous versions; the old location confirmation requirement is superseded by removal.

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
- **Published and live-verified:** [Wakil AI Store Directory](https://wakilai.github.io/nfc/). [Actions run 41200170061](https://github.com/WakilAI/nfc/actions/runs/41200170061) for implementation commit `dc85985` passed both build and deploy jobs.
- Live Chromium verification passed the homepage, all eleven category URLs and all six direct store URLs, including a refresh of each (**18 pages**). All **54 runtime assets** returned HTTP 200. Homepage search found Sallon by a plain apostrophe spelling, Clothing Store search excluded it, Home Goods search found it, and the legacy URL redirected to its new page. No local-page JavaScript or asset-response errors were observed.

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

## Previously deferred locations — superseded by removal

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

- Location metadata is no longer a release gate: the user requested removing location display and the unused fields.
- Hosting-policy suitability for the commercial NFC service. GitHub's [Pages usage limits](https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits#usage-limits) restrict online-business/e-commerce and commercial SaaS hosting; suitability is not confirmed.
- Physical-device and Safari acceptance are unverified; Chromium emulation does not establish them.

Do not encode or print final NFC/QR destinations until the live URLs are confirmed.
External accounts, WhatsApp availability and destination ownership were not independently validated.
`RTK.md` referenced by the supplied instructions was not present in the workspace or located applicable parent guidance.
