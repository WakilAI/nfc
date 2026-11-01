const fs = require('node:fs');
const path = require('node:path');

const escape = value => String(value).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);

function plateFiles(folder) {
  if (!fs.existsSync(folder)) return [];
  if (fs.lstatSync(folder).isSymbolicLink()) throw new Error(`Plate folder cannot be a symlink: ${folder}`);
  return fs.readdirSync(folder, { withFileTypes: true })
    .filter(entry => entry.isFile() && /\.(png|jpe?g|webp|avif|svg)$/i.test(entry.name))
    .map(entry => entry.name).sort();
}

function previewHTML(store, plates) {
  const name = escape(store.name);
  const gallery = plates.length ? `<ul class="plate-gallery">${plates.map((file, index) => {
    const url = 'plates/' + encodeURIComponent(file).replaceAll("'", '%27');
    return `<li><a class="plate-link" href="${url}" aria-label="Agrandir la plaque ${index + 1} de ${name}"><img src="${url}" alt="Plaque ${index + 1} — ${name}" loading="lazy"></a></li>`;
  }).join('\n')}</ul>` : '<div class="empty-state"><p>Aucune plaque disponible pour le moment.</p></div>';
  return `<!doctype html>
<html lang="fr">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
  <meta name="theme-color" content="#FCFAF7">
  <title>${name} — Plaques NFC | Wakil AI</title>
  <link rel="icon" href="../../wakil-ai-assests/logo.png" type="image/png">
  <link rel="stylesheet" href="../../directory.css">
</head>
<body>
  <div class="shell">
    <nav class="top-nav" aria-label="Navigation principale"><a class="home-link" href="../../"><img src="../../wakil-ai-assests/logo.png" alt="" width="56" height="56">Wakil AI</a><a href="../">Retour à la catégorie</a></nav>
    <main>
      <header class="preview-header">
        <img class="preview-logo" src="../../${escape(store.logo)}" alt="" width="88" height="88">
        <div><h1>${name}</h1></div>
        <a class="links-page-button" href="index.html">Ouvrir la page de liens</a>
      </header>
      <section aria-labelledby="plates-title">
        <div class="listing-header"><h2 id="plates-title">Plaques NFC</h2></div>
        ${gallery}
      </section>
    </main>
    <footer>${name} · Plaques NFC et liens utiles.</footer>
  </div>
</body>
</html>
`;
}

function previewPages(root, stores) {
  return new Map(stores.map(store => {
    const base = `${store.category}/${store.slug}`;
    const plates = plateFiles(path.join(root, 'stores', base, 'plates'));
    return [`${base}/preview.html`, previewHTML(store, plates)];
  }));
}

module.exports = { plateFiles, previewHTML, previewPages };
