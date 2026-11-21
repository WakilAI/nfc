# Agent notes

- Reply concisely: 1–3 sentences or a short bullet list.
- No long technical reports, check logs or file-by-file narration unless asked.
- Report only what changed, whether checks passed, and the next decision needed.
- End each store-page report with the direct path/link to its `index.html` (and live URL if deployed).
- When given only a phone number, add both Téléphone and WhatsApp: Algeria `+213`, drop the leading `0`.
- Store-page button order: Avis Google first, Site web immediately after it when present, then Instagram, other social links, WhatsApp before Téléphone, and Localisation always last. Keep only supplied destinations.
- Always include a footer at the bottom of each store page, in normal document flow.
- Keep the design simple: nothing between the logo and the buttons, a minimal footer (name · activity), no decorative elements unless the user asks. Preserve supplied logos and readable, accessible layouts.
- Always show Avis Google (first) and Localisation (last) buttons, even without a link: an empty URL renders a disabled « Bientôt disponible » placeholder instead of dropping the button. Never assume a location or reviews link — leave it empty until the owner supplies it.
- When `node check.cjs` passes after a store change, commit and push to `main` directly; the Pages workflow deploys automatically, then verify the live URL.
- Give the complete path starting with `C:/` so the user can paste it into a browser.
