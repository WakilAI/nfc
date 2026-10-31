const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');

const config = fs.readFileSync(path.join(__dirname, 'links.js'), 'utf8');
const script = fs.readFileSync(path.join(__dirname, 'page.js'), 'utf8');
const context = { window: {} };
vm.runInNewContext(config, context);

function render(links) {
  const element = () => ({
    children: [],
    append(...children) { this.children.push(...children); },
    setAttribute() {},
  });
  const list = element();
  const status = element();
  vm.runInNewContext(script, {
    window: { INO_LINKS: links }, URL,
    document: {
      getElementById: (id) => id === 'links' ? list : status,
      createElement: element,
    },
    console: { error() {} },
  });
  return { list, status };
}

const { list, status } = render(context.window.INO_LINKS);
assert.equal(list.children.length, context.window.INO_LINKS.filter(link => link.url.trim()).length);
assert.equal(render([{ label: 'Vide', detail: '', url: '' }]).list.children.length, 0);
assert.equal(status.hidden, true);
assert.equal(list.children[3].children[0].href, 'https://wa.me/213560041045');
assert.equal(list.children[4].children[0].href, 'tel:+213560041045');
assert.equal(list.children[4].children[0].target, undefined);
assert.equal(list.children[0].children[0].rel, 'noopener noreferrer');
for (const invalid of [undefined, [], [{ label: 'Unsafe', detail: '', url: 'javascript:alert(1)' }],
  [{ label: 'Broken', detail: '', url: 'bad url' }],
  [context.window.INO_LINKS[0], { url: 'https://example.com' }]]) {
  const result = render(invalid);
  assert.equal(result.list.children.length, 0);
  assert.match(result.status.textContent, /indisponibles/);
}
const special = render([{ label: '<b>Texte</b>', detail: 'Exemple', url: 'https://example.com', icon: 'unknown' }]);
assert.equal(special.list.children[0].children[0].children[1].children[0].textContent, '<b>Texte</b>');
console.log('PASS: six links, WhatsApp, phone, safe new tabs, invalid config and text handling.');
