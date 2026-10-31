const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const root = path.resolve(__dirname, '..');

function registry() {
  const context = { window: {} };
  vm.runInNewContext(fs.readFileSync(path.join(root, 'stores.js'), 'utf8'), context);
  return context.window.STORE_DIRECTORY;
}

// Store projects are grouped in source; their existing public URLs stay stable.
function sourceFile(file) {
  const store = registry().stores.find(s => file.startsWith(`${s.category}/${s.slug}/`));
  return path.resolve(root, store ? 'stores' : '.', file);
}

// Follow local runtime references rather than publishing whole store folders.
function publicFiles() {
  const data = registry();
  const files = new Set();
  const queue = ['index.html', 'clothing-store/sallon-dor/index.html',
    'wakil-ai-assests/fonts/space-grotesk-OFL.txt', 'wakil-ai-assests/fonts/plus-jakarta-sans-OFL.txt',
    ...data.categories.map(c => `${c.slug}/index.html`),
    ...data.stores.flatMap(s => [`${s.category}/${s.slug}/index.html`, s.logo])];
  while (queue.length) {
    const file = path.posix.normalize(queue.pop());
    if (files.has(file)) continue;
    const absolute = sourceFile(file);
    if (!absolute.startsWith(root + path.sep) || !fs.statSync(absolute).isFile() || fs.lstatSync(absolute).isSymbolicLink()) {
      throw new Error(`Unsafe or missing runtime file: ${file}`);
    }
    if (!/\.(html|css|js|svg|png|jpg|jpeg|webp|ico|woff2)$/.test(file) && !file.endsWith('-OFL.txt')) throw new Error(`Unexpected runtime type: ${file}`);
    files.add(file);
    if (!/\.(html|css|js|svg)$/.test(file)) continue;
    const source = fs.readFileSync(absolute, 'utf8');
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
  const files = publicFiles(); // Validate everything before replacing the old artifact.
  if (fs.existsSync(output) && fs.lstatSync(output).isSymbolicLink()) throw new Error('Staging directory cannot be a symlink');
  fs.rmSync(output, { recursive: true, force: true });
  for (const file of files) {
    const destination = path.join(output, file);
    fs.mkdirSync(path.dirname(destination), { recursive: true });
    fs.copyFileSync(sourceFile(file), destination);
  }
  fs.writeFileSync(path.join(output, '.nojekyll'), '');
  console.log(`Prepared ${files.length} runtime files in _site/.`);
  return files;
}
module.exports = { root, registry, sourceFile, publicFiles, prepare };
if (require.main === module) prepare();
