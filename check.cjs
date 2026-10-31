const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { execFileSync } = require('node:child_process');
const { root, registry, publicFiles, prepare } = require('./scripts/prepare.cjs');
const { checkStore, configured } = require('./scripts/check-store.cjs');
const { categories, stores } = registry();
const slug = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
assert.ok(categories.length && stores.length);
assert.equal(new Set(categories.map(c => c.slug)).size, categories.length);
const urls = new Set();
for (const category of categories) {
  assert.match(category.slug, slug);
  assert.ok(category.name.trim());
  assert.ok(stores.some(s => s.category === category.slug));
  assert.ok(fs.existsSync(path.join(root, category.slug, 'index.html')));
}
for (const store of stores) {
  assert.match(store.slug, slug);
  assert.ok(store.name.trim());
  assert.ok(categories.some(c => c.slug === store.category));
  const url = `${store.category}/${store.slug}/`;
  assert.ok(!urls.has(url)); urls.add(url);
  assert.ok(typeof store.logo === 'string' && fs.statSync(path.join(root, store.logo)).isFile());
  for (const key of ['commune', 'wilaya']) assert.ok(store[key] === null || (typeof store[key] === 'string' && store[key].trim()));
  assert.equal(store.commune === null, store.wilaya === null, 'Location must be complete or pending');
  if (process.argv.includes('--release')) assert.ok(store.commune && store.wilaya, `${store.name}: commune and wilaya still require confirmation`);
  const folder = path.join(root, url);
  assert.ok(fs.existsSync(path.join(folder, 'index.html')));
  checkStore(folder);
  for (const link of configured(folder)) {
    if (!link.url.trim()) continue;
    const destination = new URL(link.url.trim());
    assert.ok(['https:', 'mailto:', 'tel:'].includes(destination.protocol));
    assert.ok(!destination.username && !destination.password);
  }
  execFileSync(process.execPath, [path.join(folder, 'check.cjs')], { stdio: 'inherit' });
}
const expected = publicFiles();
const built = prepare();
assert.deepEqual(built, expected);
const actual = fs.readdirSync(path.join(root, '_site'), { recursive: true, withFileTypes: true })
  .filter(entry => entry.isFile()).map(entry => path.relative(path.join(root, '_site'), path.join(entry.parentPath, entry.name)).split(path.sep).join('/')).sort();
assert.deepEqual(actual, [...expected, '.nojekyll'].sort());
assert.ok(!actual.some(f => /(?:check\.cjs|README|PLAN|\.md$|\.original\.|logo-4k|design vegas|\.github|node_modules)/i.test(f)));
for (const file of expected.filter(f => /\.(js|cjs)$/.test(f))) execFileSync(process.execPath, ['--check', path.join(root, file)]);
console.log(`PASS directory: ${categories.length} categories, ${stores.length} unique stores, metadata, safe links, ${built.length} runtime files.`);
const pending = stores.filter(s => !s.commune || !s.wilaya);
if (pending.length) console.log(`OPEN RELEASE GATE: confirmed locations for ${pending.map(s => s.name).join(', ')}. Run node check.cjs --release after confirmation.`);
