const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const { plateFiles, previewHTML, previewPages } = require('./previews.cjs');
const { root: projectRoot, registry, sourceFile, publicFiles, prepare } = require('./prepare.cjs');

const root = fs.mkdtempSync(path.join(os.tmpdir(), 'nfc-previews-'));
try {
  const store = { name: 'Test <&" commerce', category: 'food', slug: 'test', logo: 'food/test/logo.svg' };
  const folder = path.join(root, 'stores/food/test/plates');
  const page = () => previewPages(root, [store]).get('food/test/preview.html');
  assert.deepEqual(plateFiles(folder), []);
  assert.match(page(), /Aucune plaque disponible/);
  fs.mkdirSync(folder, { recursive: true });
  fs.writeFileSync(path.join(folder, '.gitkeep'), '');
  fs.writeFileSync(path.join(folder, 'notes.txt'), 'not a plate');
  fs.mkdirSync(path.join(folder, 'nested.png'));
  assert.deepEqual(plateFiles(folder), []);
  for (const file of ['01 été & avis #1.svg', "02 l'avis.PNG", '03.webp', '04.jpeg', '05.avif', '06.jpg']) {
    fs.writeFileSync(path.join(folder, file), '<svg xmlns="http://www.w3.org/2000/svg"/>');
  }
  const plates = plateFiles(folder);
  assert.equal(plates.length, 6);
  const html = page();
  assert.equal((html.match(/class="plate-link"/g) || []).length, 6);
  assert.ok(html.includes('plates/' + encodeURIComponent(plates[0])));
  assert.ok(html.includes('02%20l%27avis.PNG'));
  assert.ok(!html.includes('Test <&" commerce'));
  assert.match(html, /href="index.html"/);
  assert.match(html, /<footer>/);
  assert.ok(!html.includes('<script'));
  assert.ok(!html.includes('Aucune plaque disponible'));
  for (const file of plates.slice(1)) fs.unlinkSync(path.join(folder, file));
  assert.equal((page().match(/class="plate-link"/g) || []).length, 1);
  fs.writeFileSync(path.join(folder, plates[0]), 'replacement');
  assert.equal(fs.readFileSync(path.join(folder, plateFiles(folder)[0]), 'utf8'), 'replacement');
  fs.unlinkSync(path.join(folder, plates[0]));
  assert.match(page(), /Aucune plaque disponible/);
  assert.match(previewHTML(store, []), /lang="fr"/);
  const files = publicFiles();
  for (const store of registry().stores) assert.ok(files.includes(`${store.category}/${store.slug}/preview.html`));
  assert.ok(!files.some(file => file.endsWith('.gitkeep')));
  console.log('PASS previews: missing/empty folders, one/many plates, supported types, escaped filenames, add/replace/remove, all store routes.');
} finally {
  assert.equal(path.dirname(root), path.resolve(os.tmpdir()));
  assert.ok(path.basename(root).startsWith('nfc-previews-'));
  fs.rmSync(root, { recursive: true, force: true });
}

// Exercise real discovery and publication without retaining synthetic plate designs.
const store = registry().stores[0];
const base = `${store.category}/${store.slug}`;
const filename = `preview-check-${process.pid}-été & l'avis #1.SVG`;
const relative = `${base}/plates/${filename}`;
const fixture = sourceFile(relative);
assert.ok(!fs.existsSync(fixture));
try {
  fs.writeFileSync(fixture, '<svg xmlns="http://www.w3.org/2000/svg" width="800" height="400"/>');
  assert.ok(prepare().includes(relative));
  const published = path.join(projectRoot, '_site', relative);
  assert.equal(fs.readFileSync(published, 'utf8'), fs.readFileSync(fixture, 'utf8'));
  fs.writeFileSync(fixture, '<svg xmlns="http://www.w3.org/2000/svg" width="300" height="600"/>');
  prepare();
  assert.equal(fs.readFileSync(published, 'utf8'), fs.readFileSync(fixture, 'utf8'));
  fs.unlinkSync(fixture);
  assert.ok(!prepare().includes(relative));
  assert.ok(!fs.existsSync(published));
  console.log('PASS plate publication: encoded filenames, uppercase extensions, image replacement and stale image removal.');
} finally {
  if (fs.existsSync(fixture)) fs.unlinkSync(fixture);
  prepare();
}
