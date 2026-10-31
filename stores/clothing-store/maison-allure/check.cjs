const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');
const config = { window: {} };
vm.runInNewContext(fs.readFileSync(path.join(__dirname, 'links.js'), 'utf8'), config);
const script = fs.readFileSync(path.join(__dirname, 'page.js'), 'utf8');
function render(links) {
  const element = tag => ({ tag, children: [], attributes: {}, append(...items) { this.children.push(...items); }, setAttribute(k, v) { this.attributes[k] = v; } });
  const list = element('ul');
  const status = element('p');
  vm.runInNewContext(script, {
    window: { LINKTREE_LINKS: links }, URL,
    document: { getElementById: id => id === 'links' ? list : status, createElement: element },
    console: { error() {} },
  });
  return { list, status };
}
const configured = config.window.LINKTREE_LINKS.filter(link => link.url.trim());
assert.ok(Array.isArray(configured) && configured.length > 0);
const current = render(configured);
assert.equal(current.status.hidden, true, 'La configuration doit être valide.');
assert.equal(current.list.children.length, configured.length);
configured.forEach((link, i) => {
  const control = current.list.children[i].children[0];
  assert.equal(control.tag, link.url.trim() ? 'a' : 'span');
  if (!link.url.trim()) {
    assert.equal(control.attributes['aria-disabled'], 'true');
    assert.equal(control.href, undefined);
  }
});
const sample = render([
  { label: '<b>Texte</b>', url: 'https://example.com', icon: 'toString' },
  { label: 'Appel', url: 'tel:+33123456789' },
  { label: 'Courriel', url: 'mailto:hello@example.com' },
  { label: 'En attente', url: '' },
]);
assert.equal(sample.list.children[0].children[0].children[1].children[0].textContent, '<b>Texte</b>');
assert.equal(sample.list.children[0].children[0].rel, 'noopener noreferrer');
assert.equal(sample.list.children[1].children[0].target, undefined);
assert.equal(sample.list.children[2].children[0].target, undefined);
assert.equal(sample.list.children.length, 3);
for (const invalid of [undefined, [], [{ label: 'X', url: 'javascript:alert(1)' }], [{ label: 'X', url: 'bad url' }], [configured[0], null]]) {
  const result = render(invalid);
  assert.equal(result.list.children.length, 0);
  assert.match(result.status.textContent, /indisponibles/);
}
console.log(`PASS : ${configured.length} boutons, destinations vides masquées, protocoles, texte et erreurs.`);
