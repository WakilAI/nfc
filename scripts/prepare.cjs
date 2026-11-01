const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const { previewPages } = require('./previews.cjs');
const root = path.resolve(__dirname, '..');
const directoryFiles = new Set(['directory.css', 'directory.js', 'search.js', 'stores.js']);

function registry() {
  const context = { window: {} };
  vm.runInNewContext(fs.readFileSync(path.join(root, 'directory/stores.js'), 'utf8'), context);
  return context.window.STORE_DIRECTORY;
}

// All category folders live under stores/; their public URLs stay stable.
function sourceFile(file) {
  if (directoryFiles.has(file)) return path.join(root, 'directory', file);
  const category = registry().categories.find(c => file.startsWith(`${c.slug}/`));
  return path.resolve(root, category ? 'stores' : '.', file);
}

// Follow local runtime references rather than publishing whole store folders.
function publicFiles(generated = previewPages(root, registry().stores)) {
  const data = registry();
  const files = new Set();
  const queue = ['index.html', 'clothing-store/sallon-dor/index.html',
    'wakil-ai-assests/fonts/space-grotesk-OFL.txt', 'wakil-ai-assests/fonts/plus-jakarta-sans-OFL.txt',
    ...generated.keys(), ...data.categories.map(c => `${c.slug}/index.html`),
    ...data.stores.flatMap(s => [`${s.category}/${s.slug}/index.html`, s.logo])];
  while (queue.length) {
    const file = path.posix.normalize(queue.pop());
    if (files.has(file)) continue;
    const absolute = sourceFile(file);
    if (!absolute.startsWith(root + path.sep) || (!generated.has(file) && (!fs.statSync(absolute).isFile() || fs.lstatSync(absolute).isSymbolicLink()))) {
      throw new Error(`Unsafe or missing runtime file: ${file}`);
    }
    if (!/\.(html|css|js|svg|png|jpg|jpeg|webp|avif|ico|woff2)$/i.test(file) && !file.endsWith('-OFL.txt')) throw new Error(`Unexpected runtime type: ${file}`);
    files.add(file);
    if (!/\.(html|css|js|svg)$/i.test(file)) continue;
    const source = generated.get(file) ?? fs.readFileSync(absolute, 'utf8');
    const references = [...source.matchAll(/(?:src|href)\s*=\s*["']([^"']+)["']|url\(\s*["']?([^\s)"']+)|["']([^"'\s<>]+\.(?:png|jpg|jpeg|webp|svg|woff2|ico))["']/g)];
    for (const match of references) {
      const ref = match[1] || match[2] || match[3];
      if (/^(?:[a-z][a-z\d+.-]*:|\/\/|#)/i.test(ref)) continue;
      if (ref.startsWith('/')) throw new Error(`Root-relative reference breaks /nfc/: ${file}: ${ref}`);
      const clean = decodeURIComponent(ref.split(/[?#]/)[0]);
      const target = path.posix.normalize(path.posix.join(path.posix.dirname(file), clean));
      queue.push(target.endsWith('/') || !path.posix.extname(target) ? `${target.replace(/\/$/, '')}/index.html` : target);
    }
  }
  return [...files].sort();
}

function prepare() {
  const output = path.resolve(root, '_site');
  if (path.dirname(output) !== root || path.basename(output) !== '_site') throw new Error('Unexpected staging directory');
  const generated = previewPages(root, registry().stores);
  const files = publicFiles(generated); // Validate everything before replacing the old artifact.
  if (fs.existsSync(output) && fs.lstatSync(output).isSymbolicLink()) throw new Error('Staging directory cannot be a symlink');
  fs.rmSync(output, { recursive: true, force: true });
  for (const file of files) {
    const destination = path.join(output, file);
    fs.mkdirSync(path.dirname(destination), { recursive: true });
    if (generated.has(file)) fs.writeFileSync(destination, generated.get(file));
    else fs.copyFileSync(sourceFile(file), destination);
  }
  fs.writeFileSync(path.join(output, '.nojekyll'), '');
  console.log(`Prepared ${files.length} runtime files in _site/.`);
  return files;
}
module.exports = { root, registry, sourceFile, publicFiles, prepare };
if (require.main === module) prepare();
