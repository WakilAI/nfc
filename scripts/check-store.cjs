const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

function configured(folder) {
  const context = { window: {} };
  vm.runInNewContext(fs.readFileSync(path.join(folder, 'links.js'), 'utf8'), context);
  return context.window.LINKTREE_LINKS || context.window.INO_LINKS;
}

function render(folder, links) {
  function element(tag) {
    return { tag, children: [], attributes: {}, style: { setProperty() {} }, classList: { add() {} },
      append(...items) { this.children.push(...items); },
      appendChild(item) { this.children.push(item); },
      setAttribute(k, v) { this.attributes[k] = v; },
      set innerHTML(value) { this.markup = value; this.firstChild = element('svg'); }
    };
  }
  const list = element('ul');
  const status = element('p');
  vm.runInNewContext(fs.readFileSync(path.join(folder, 'page.js'), 'utf8'), {
    window: { LINKTREE_LINKS: links, INO_LINKS: links }, URL,
    document: { getElementById: id => id === 'link-status' ? status : list, createElement: element },
    console: { error() {} }
  });
  const nodes = [];
  function visit(node) { nodes.push(node); node.children.forEach(visit); }
  visit(list);
  return { anchors: nodes.filter(n => n.tag === 'a'), nodes, status };
}

function checkStore(folder) {
  const links = configured(folder);
  assert.ok(Array.isArray(links) && links.length);
  const expected = links.filter(link => link.url.trim());
  const current = render(folder, links);
  assert.equal(current.status.hidden, true, `${folder}: configuration error`);
  assert.equal(current.anchors.length, expected.length);
  expected.forEach((link, i) => {
    const anchor = current.anchors[i];
    const url = new URL(link.url.trim());
    assert.equal(anchor.href, url.href, 'Destination and order must match configuration');
    if (url.protocol === 'https:') {
      assert.equal(anchor.target, '_blank');
      assert.match(anchor.rel, /noopener/);
      assert.match(anchor.rel, /noreferrer/);
    } else assert.equal(anchor.target, undefined);
    assert.ok(current.nodes.some(node => node.textContent === link.label));
  });
  const sample = render(folder, [
    { label: '<b>Texte</b>', detail: '', url: 'https://example.com', icon: 'toString' },
    { label: 'Vide', detail: '', url: '  ' },
    { label: 'Appel', detail: '', url: 'tel:+213123456789' },
    { label: 'Courriel', detail: '', url: 'mailto:hello@example.com' }
  ]);
  assert.equal(sample.status.hidden, true);
  assert.equal(sample.anchors.length, 3, 'Empty buttons must be omitted');
  assert.ok(sample.nodes.some(node => node.textContent === '<b>Texte</b>'));
  assert.equal(sample.anchors[1].target, undefined);
  assert.equal(sample.anchors[2].target, undefined);
  for (const invalid of [undefined, [], [null], [{ label: 'X', url: 42 }],
    [{ label: 'X', url: 'javascript:alert(1)' }], [{ label: 'X', url: 'http://example.com' }],
    [{ label: 'X', url: 'bad url' }], [links[0], null]]) {
    const result = render(folder, invalid);
    assert.equal(result.anchors.length, 0, 'Validate the entire list before rendering');
    assert.match(result.status.textContent, /indisponibles/);
  }
  assert.equal(render(folder, [{ label: 'Vide', detail: '', url: '' }]).anchors.length, 0);
  console.log(`PASS ${path.basename(folder)}: ${expected.length} links, order, empty entries, safe protocols, text and invalid configuration.`);
}
module.exports = { configured, checkStore };
