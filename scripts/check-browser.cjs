// Use an existing Playwright installation; no package is added to the website.
// PLAYWRIGHT_MODULE may be an absolute path to playwright-core.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const http = require('node:http');
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright-core');
const { root, registry, sourceFile, prepare } = require('./prepare.cjs');
const { configured } = require('./check-store.cjs');
const { previewHTML } = require('./previews.cjs');

(async () => {
  prepare();
  const publicRoot = path.join(root, '_site');
  const types = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.webp': 'image/webp', '.avif': 'image/avif' };
  const sample = registry().stores[0];
  const fixturePlates = ['01 été & avis #1.svg', "02 l'avis.svg"];
  const fixtures = new Map([
    ['/nfc/__preview-fixture/store/one.html', previewHTML(sample, fixturePlates.slice(0, 1))],
    ['/nfc/__preview-fixture/store/many.html', previewHTML(sample, fixturePlates)],
    ...fixturePlates.map((name, index) => [`/nfc/__preview-fixture/store/plates/${name}`, `<svg xmlns="http://www.w3.org/2000/svg" width="${index ? 300 : 800}" height="400"><rect width="100%" height="100%" fill="#fcfaf7"/><text x="24" y="80" font-size="32">Test plaque ${index + 1}</text></svg>`])
  ]);
  const server = http.createServer((req, res) => {
    const pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
    if (fixtures.has(pathname)) { res.setHeader('Content-Type', types[path.extname(pathname)]); res.end(fixtures.get(pathname)); return; }
    const file = path.resolve(publicRoot, '.' + pathname.replace(/^\/nfc(?=\/)/, ''));
    if (!pathname.startsWith('/nfc/') || (file !== publicRoot && !file.startsWith(publicRoot + path.sep))) { res.writeHead(404).end(); return; }
    const target = pathname.endsWith('/') ? path.join(file, 'index.html') : file;
    try { res.setHeader('Content-Type', types[path.extname(target)] || 'application/octet-stream'); res.end(fs.readFileSync(target)); }
    catch { res.writeHead(404).end(); }
  });
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  let browser;
  try {
    const base = `http://127.0.0.1:${server.address().port}/nfc/`;
    browser = await chromium.launch({ headless: true, ...(process.env.CHROMIUM_PATH ? { executablePath: process.env.CHROMIUM_PATH } : {}) });
    const { categories, stores } = registry();
    const routes = [{ url: '', name: 'home' }, ...categories.map(c => ({ url: c.slug + '/', name: c.slug })),
      ...stores.map(s => ({ url: `${s.category}/${s.slug}/`, name: s.slug, store: s })),
      ...stores.map(s => ({ url: `${s.category}/${s.slug}/preview.html`, name: s.slug + '-preview', preview: s })),
      { url: '__preview-fixture/store/one.html', name: 'one-plate', preview: sample, plateCount: 1 },
      { url: '__preview-fixture/store/many.html', name: 'many-plates', preview: sample, plateCount: 2 }];
    const viewports = [{ width: 320, height: 780 }, { width: 360, height: 800 }, { width: 390, height: 844 }, { width: 430, height: 932 }, { width: 844, height: 390 }, { width: 1440, height: 1000 }];
    const screenshots = path.join(root, '.impeccable/review');
    fs.mkdirSync(screenshots, { recursive: true });
    const reports = [];
    for (const viewport of viewports) {
      const context = await browser.newContext({ viewport, hasTouch: viewport.width < 1000, reducedMotion: 'reduce' });
      const page = await context.newPage();
      const failures = [];
      page.on('pageerror', error => failures.push(error.message));
      page.on('response', response => { if (response.url().startsWith(base) && response.status() >= 400) failures.push(`${response.status()} ${response.url()}`); });
      for (const route of routes) {
        await page.goto(base + route.url);
        if (!route.preview) await page.waitForFunction(() => document.querySelector('#link-status, #directory-status')?.hidden);
        await page.evaluate(() => Promise.all(Array.from(document.images, img => img.decode())));
        await page.evaluate(() => document.fonts.ready);
        const metrics = await page.evaluate(() => ({
          overflow: document.documentElement.scrollWidth > innerWidth || document.body.scrollWidth > innerWidth,
          broken: Array.from(document.images).filter(img => !img.complete || !img.naturalWidth).map(img => img.src),
          links: Array.from(document.querySelectorAll('a')).map(a => ({ href: a.href, text: a.textContent.trim(), width: a.getBoundingClientRect().width, height: a.getBoundingClientRect().height })),
          nestedScroll: Array.from(document.querySelectorAll('body, main, .page')).filter(el => ['auto', 'scroll'].includes(getComputedStyle(el).overflowY) && el.scrollHeight > el.clientHeight).length
        }));
        assert.equal(metrics.overflow, false, `${route.name} ${viewport.width}: overflow`);
        assert.deepEqual(metrics.broken, []);
        assert.equal(metrics.nestedScroll, 0, `${route.name}: nested scroll`);
        assert.ok(metrics.links.every(link => link.width >= 48 && link.height >= 48), `${route.name}: small touch target ${JSON.stringify(metrics.links)}`);
        if (route.store) {
          const links = configured(path.dirname(sourceFile(route.url + 'index.html'))).filter(link => link.url.trim());
          assert.deepEqual(metrics.links.map(link => link.href), Array.from(links, link => new URL(link.url.trim()).href));
          const last = page.locator('a').last();
          await last.scrollIntoViewIfNeeded();
          assert.ok(await last.isVisible());
          const rect = await last.boundingBox();
          assert.ok(rect.y >= 0 && rect.y + rect.height <= viewport.height + 1, `${route.name}: last link unreachable`);
        } else if (route.preview) {
          assert.equal(await page.locator('html').getAttribute('lang'), 'fr');
          assert.ok(await page.locator('footer').isVisible());
          assert.equal(await page.locator('.links-page-button').getAttribute('href'), 'index.html');
          if (route.plateCount) {
            assert.equal(await page.locator('.plate-link').count(), route.plateCount);
            assert.equal(await page.locator('.plate-image img').evaluateAll(images => images.every(img => getComputedStyle(img).objectFit === 'contain')), true);
          } else if (!await page.locator('.plate-link').count()) {
            assert.equal(await page.locator('.empty-state').innerText(), 'Aucune plaque disponible pour le moment.');
          }
        } else {
          assert.ok(metrics.links.every(link => link.href.startsWith(base)));
          const count = route.url ? stores.filter(s => s.category === route.url.slice(0, -1)).length : categories.length;
          assert.equal(await page.locator('#directory > li').count(), count);
        }
        await page.evaluate(() => window.scrollTo(0, 0));
        await page.keyboard.press('Tab');
        assert.ok(await page.evaluate(() => document.activeElement?.tagName === 'A' && getComputedStyle(document.activeElement).outlineStyle !== 'none'), `${route.name}: focus missing`);
        await page.locator('a').first().evaluate(a => a.blur());
        if (!route.store && !route.preview) {
          assert.equal(await page.locator('html').getAttribute('lang'), 'en');
          assert.equal(await page.locator('.home-link img').getAttribute('src'), route.url ? '../wakil-ai-assests/logo.png' : './wakil-ai-assests/logo.png');
          const search = page.getByRole('searchbox');
          assert.ok(await search.isVisible());
          const sample = route.url ? stores.find(s => s.category === route.url.slice(0, -1)) : stores.find(s => s.slug === 'midho-prive');
          await search.fill(sample ? sample.name.toUpperCase() : 'unknown store');
          assert.equal(await page.locator('#directory > li').count(), sample ? 1 : 0);
          if (sample) {
            assert.equal(await page.locator('#directory a').getAttribute('href'), route.url ? sample.slug + '/preview.html' : `${sample.category}/${sample.slug}/preview.html`);
            await page.evaluate(() => Promise.all(Array.from(document.images, img => img.decode())));
          }
          const box = await search.boundingBox();
          assert.ok(box.width >= 48 && box.height >= 48);
          await search.fill('<img src=x onerror=alert(1)>');
          assert.equal(await page.locator('#directory > li').count(), 0);
          assert.ok(await page.locator('#empty-state').isVisible());
          assert.equal(await page.locator('#empty-state h3').textContent(), 'No stores found');
          await page.getByRole('button', { name: 'Clear search' }).click();
          assert.ok(await search.evaluate(el => el === document.activeElement));
          assert.equal(await page.locator('#directory > li').count(), route.url ? stores.filter(s => s.category === route.url.slice(0, -1)).length : categories.length);
          if (route.url === 'clothing-store/') {
            await search.fill('sallon');
            assert.equal(await page.locator('#directory > li').count(), 0, 'Search must stay within its category');
            await page.getByRole('button', { name: 'Clear search' }).click();
          }
          if (!route.url) assert.equal(await page.locator('.category-icon svg').count(), categories.length);
          await search.evaluate(el => el.blur());
        }
        if (viewport.width === 390 || viewport.width === 844) {
          await page.evaluate(() => window.scrollTo(0, 0));
          await page.screenshot({ path: path.join(screenshots, `${route.name}-${viewport.width}.png`), fullPage: true });
        }
        reports.push({ route: route.url, viewport, links: metrics.links.length, result: 'pass' });
      }
      assert.deepEqual(failures, []);
      await context.close();
    }
    // Exercise ordinary link navigation, browser Back, direct refresh, and no-JS navigation.
    const page = await browser.newPage();
    await page.goto(base + '__preview-fixture/store/many.html');
    await page.locator('.plate-link').last().click();
    assert.ok(page.url().endsWith('/plates/02%20l%27avis.svg'));
    await page.goBack();
    assert.ok(await page.locator('.links-page-button').isVisible());
    for (const store of stores) {
      await page.goto(base);
      await page.locator(`#directory a[href="${store.category}/"]`).click();
      await page.locator(`#directory a[href="${store.slug}/preview.html"]`).click();
      assert.equal(page.url(), base + `${store.category}/${store.slug}/preview.html`);
      await page.reload();
      await page.locator('.links-page-button').click();
      await page.waitForFunction(() => document.getElementById('link-status').hidden);
      assert.equal(page.url(), base + `${store.category}/${store.slug}/index.html`);
      await page.reload();
      await page.waitForFunction(() => document.getElementById('link-status').hidden);
      await page.goBack();
      assert.equal(page.url(), base + `${store.category}/${store.slug}/preview.html`);
      await page.goBack();
      assert.equal(page.url(), base + store.category + '/');
      await page.goBack();
      assert.equal(page.url(), base);
    }
    await page.goto(base + 'clothing-store/sallon-dor/');
    await page.waitForURL(base + 'home-goods/sallon-dor/');
    await page.waitForFunction(() => document.getElementById('link-status').hidden);
    assert.equal(page.url(), base + 'home-goods/sallon-dor/');
    const nojs = await browser.newContext({ javaScriptEnabled: false });
    const fallback = await nojs.newPage();
    for (const route of routes) {
      await fallback.goto(base + route.url);
      if (route.preview) {
        assert.ok(await fallback.locator('.links-page-button').isVisible());
        continue;
      }
      assert.ok(await fallback.locator('noscript').innerText());
      if (!route.store) {
        assert.ok(await fallback.locator('noscript a').count());
        if (route.url) {
          const hrefs = await fallback.locator('noscript a').evaluateAll(links => links.map(a => a.getAttribute('href')));
          for (const store of stores.filter(store => route.url === store.category + '/')) assert.ok(hrefs.includes(`${store.slug}/preview.html`));
        }
      }
    }
    await fallback.goto(base + sample.category + '/');
    await fallback.locator(`noscript a[href="${sample.slug}/preview.html"]`).click();
    assert.ok(await fallback.locator('.links-page-button').isVisible());
    await fallback.locator('.links-page-button').click();
    assert.equal(fallback.url(), base + `${sample.category}/${sample.slug}/index.html`);
    await nojs.close();
    fs.mkdirSync(path.join(root, '.local'), { recursive: true });
    fs.writeFileSync(path.join(root, '.local/browser-report.json'), JSON.stringify(reports, null, 2));
    console.log(`PASS browser: ${reports.length} viewport/route views, ${routes.length * 2} screenshots, store previews, empty/one/many plates, full-size images, search/category scope, all store flows, legacy URL, refreshes, Back, no-JS navigation, assets, targets, focus, natural scrolling and link order.`);
  } finally {
    if (browser) await browser.close();
    await new Promise(resolve => server.close(resolve));
  }
})().catch(error => { console.error(error); process.exitCode = 1; });
