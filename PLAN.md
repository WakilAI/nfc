# NFC store directory — implementation plan

Status: Implemented, committed, pushed, deployed and live-verified on 2026-10-31, including the follow-up Wakil AI branding, English navigation, search and category adjustments. Location confirmation remains deferred by the user; hosting-policy suitability and physical-device/Safari acceptance remain open. See `VERIFICATION.md` for evidence.

## Goal and confirmed decisions

Create a public English directory for Algerian stores whose customers scan NFC plates or QR codes. Directory visitors browse **store categories → store cards → store pages** or search by store name. Individual store pages keep their existing French copy and design. NFC scans open the individual store page directly.

- Include all six existing stores at launch.
- Use static HTML, CSS, and JavaScript without added dependencies or a framework.
- Use the supplied Wakil AI design system and logo from `wakil-ai-assests`; preserve each store's existing design.
- Show each store's logo, name, and confirmed commune + wilaya on its card.
- Maintain stores through their folders and one shared registry; no browser admin interface.
- Hide buttons with empty destinations, retaining their entries in configuration.
- No existing NFC or QR URLs need migration. Keep the chosen store URLs stable after launch.

## Existing repository and target hosting

- **https://github.com/WakilAI/nfc already exists and is PUBLIC. Do not create another repository or change its visibility.**
- Last verified repository state: empty, with no default branch. Recheck before the first push.
- The authenticated account, `Mehdix17`, has WRITE access as a collaborator.
- Initialize Git in this local directory if necessary, connect it to the existing remote, and use `main`.
- Expected GitHub Pages address: `https://wakilai.github.io/nfc/`. Verify the actual address after activation.
- Configuring Pages requires maintainer/admin permissions. If current access is insufficient, finish and push the implementation and workflow, then report the precise owner action required.
- GitHub Pages' suitability for this commercial NFC service remains an unresolved release consideration. Do not represent it as confirmed compliant. Reference: https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits#usage-limits

## Store organization and directory behavior

Group all category folders under `stores/<type>/`, including category landing pages and projects at `stores/<type>/<store>/`. Keep runtime assets and documentation together. Preparation preserves these public paths:

- `food/ino-burger/`
- `clothing-store/maison-allure/`
- `home-goods/sallon-dor/` (curtains and interior decoration; preserve the old clothing-store URL with a redirect)
- `perfume-store/midho-prive/`
- `computer-store/myb-hardware/`
- `phone-store/vegas-phone/`

Create an English root directory with Wakil AI branding, SVG category icons and store counts. Category labels match their URL slugs in title case (for example, Clothing Store → `clothing-store/`). Each category has its own `index.html` containing its store cards and navigation back to the homepage. The complete store card is a normal link that opens the store page in the same tab.

Store-name search on the homepage spans all stores; search inside a category is scoped to that category. Support case, accent and apostrophe differences, clearing and useful no-result messages. The directory has eleven types: Food, Clothing Store, Perfume Store, Computer Store, Phone Store, Home Goods, Travel Agency, Cosmetic Store, Shoes Store, Dental Clinic and Jewelry Store. Upcoming types show zero stores with an honest empty state.

Use one shared `stores.js` registry containing categories and each store's name, category, slug, confirmed location, and logo path. Derive store URLs from category and slug. Share the directory's CSS and rendering JavaScript; keep individual store pages independent of directory rendering. Provide a useful JavaScript-disabled message and ordinary navigation links.

Resolve location labels from the existing supplied Maps destinations. Ask for confirmation when results are ambiguous; never infer an address from the store name. Confirm all six labels before treating directory content as release-ready.

Use relative paths compatible with the `/nfc/` deployment prefix. Support mobile portrait, touch landscape, and desktop with natural vertical scrolling, readable text, visible keyboard focus, and comfortable touch targets. Preserve logo proportions and avoid broken images.

## Existing store pages and maintenance

- Standardize Midho Privé, MYB Hardware, and Vegas Phone with editable `links.js` files and meaningful checks, following the newer projects' approach.
- Preserve all existing valid destinations, their order, artwork, and visual designs during extraction and moves. Repair paths and any issues preventing correct or safe operation.
- Preserve the newer projects' existing configuration conventions; avoid an unnecessary configuration rewrite.
- Update all six pages so empty destinations produce no public button. Retain empty configuration entries for future completion.
- Known empty entries from inspection: Maison Allure's WhatsApp and telephone; Sallon d'or's Google reviews. Re-read configuration before implementation in case the user has filled them.
- Preserve safe destination handling and accessible labels. Use text rendering for editable labels and appropriate protection for external links.
- Keep useful original artwork and documentation in Git. Ignore disposable verification artifacts, caches, and local tooling files; inspect files before publishing them to the public repository.
- Document adding a store: create the folder with the `nfc-linktree` skill, add its registry entry, run checks, and push.

## Deployment

Add a dependency-free preparation script that stages only public runtime files: directory pages/assets, store HTML/CSS/JavaScript, and required store assets. Exclude tests, documentation, unused reference artwork, master images, and local tooling. Include any reference image actually used at runtime, such as Ino Burger's current logo, unless its reference is deliberately updated to a preserved runtime copy.

Add a GitHub Actions workflow that runs checks, prepares the deployment artifact, and deploys to GitHub Pages on pushes to `main`, with manual dispatch available. Deploy only after checks pass. A maintainer/admin must select GitHub Actions as the Pages source if it is not already configured.

After local verification, commit the intended work coherently and push to the existing `WakilAI/nfc` repository. Do not overwrite unexpected remote history or unrelated local work. Report permission or organization-policy blockers precisely, without claiming publication succeeded.

## Verification and acceptance

- Run the existing store checks; adapt assertions for intentionally hidden empty buttons and moved paths.
- Add meaningful checks for the three standardized older pages.
- Add a root check covering registry validity, unique store URLs, required metadata, existing store pages/logos, safe configured destinations, and deployment asset completeness.
- Verify homepage → category → store navigation, back navigation, and direct opening of every store URL.
- Review directory pages and all six stores at 320, 360, 390, and 430px portrait widths, 844×390 touch landscape, and a desktop viewport. Inspect portrait and landscape screenshots.
- Check logo loading, horizontal overflow, keyboard focus, touch targets, natural scrolling to the last link, preserved link destinations/order, and omission of empty links. Respect reduced motion if animation is present.
- Verify the deployment artifact excludes development material and contains every required runtime asset.
- After deployment, check the live homepage, all eleven category URLs, all six store URLs and the legacy Sallon d’or redirect, including direct refreshes and asset loading beneath `/nfc/`.
- Encode or print final NFC/QR destinations only after the live URLs are confirmed.

Completion requires reporting local checks separately from live deployment checks. Browser emulation does not establish physical-device or Safari acceptance.

## Assumptions, exclusions, and release gates

Defaults: English directory labels, existing French store pages, the category assignments above, confirmed commune + wilaya location text, same-tab directory navigation, and no custom domain initially.

Excluded: admin interface, accounts, analytics, a framework, added application dependencies, and store redesigns. Search was added by the user's follow-up request.

Open release gates: confirmed location labels; any maintainer/admin or organization setup needed for Pages; hosting-policy suitability; successful deployment and live verification. Repository creation and visibility changes are **not** required.
