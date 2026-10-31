(() => {
  "use strict";
  const { categories, stores } = window.STORE_DIRECTORY;
  const categorySlug = document.body.dataset.category;
  const prefix = categorySlug ? "../" : "./";
  const category = categories.find(item => item.slug === categorySlug);
  const list = document.getElementById("directory");
  const title = document.querySelector("h1");
  const intro = document.getElementById("intro");
  const selection = category ? stores.filter(store => store.category === categorySlug) : categories;
  if (category) {
    title.textContent = category.name;
    document.title = `${category.name} — Nos commerces`;
  }
  intro.textContent = category
    ? "Choisissez un commerce pour retrouver ses liens utiles."
    : "Les bonnes adresses, à portée de main. Choisissez une catégorie pour découvrir les commerces.";
  const text = (tag, value) => {
    const node = document.createElement(tag);
    node.textContent = value;
    return node;
  };
  for (const item of selection) {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.className = category ? "store-card" : "category-card";
    a.href = `${item.slug}/`;
    if (category) {
      const img = document.createElement("img");
      img.src = prefix + item.logo;
      img.alt = "";
      img.width = 96;
      img.height = 96;
      a.append(img);
    }
    const copy = document.createElement("div");
    copy.append(text("h2", item.name));
    const count = stores.filter(store => store.category === item.slug).length;
    copy.append(text("p", category
      ? (item.commune && item.wilaya ? `${item.commune}, ${item.wilaya}` : "Localisation à confirmer")
      : `${count} commerce${count > 1 ? "s" : ""}`));
    a.append(copy);
    const arrow = document.createElement("span");
    arrow.className = "arrow";
    arrow.setAttribute("aria-hidden", "true");
    arrow.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 12h14m-6-6 6 6-6 6"/></svg>';
    a.append(arrow);
    li.append(a);
    list.append(li);
  }
  document.getElementById("directory-status").hidden = true;
})();
