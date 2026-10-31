(() => {
  "use strict";
  const { categories, stores } = window.STORE_DIRECTORY;
  const categorySlug = document.body.dataset.category;
  const category = categories.find(item => item.slug === categorySlug);
  const prefix = category ? "../" : "./";
  const list = document.getElementById("directory");
  const input = document.getElementById("store-search");
  const clear = document.getElementById("clear-search");
  const empty = document.getElementById("empty-state");
  const status = document.getElementById("results-status");
  const title = document.getElementById("listing-title");
  const icons = {
    food: '<path d="M4 3v6a3 3 0 0 0 6 0V3M7 3v18M20 21V3c-4 2-5 7-5 10h5"/>',
    "clothing-store": '<path d="m8 3-6 4 3 5 3-2v11h8V10l3 2 3-5-6-4a4 4 0 0 1-8 0Z"/>',
    "perfume-store": '<rect x="6" y="9" width="12" height="12" rx="2"/><path d="M9 3h6v6M9 6h6M9 14h6"/>',
    "computer-store": '<rect x="3" y="3" width="18" height="13" rx="2"/><path d="M8 21h8m-4-5v5"/>',
    "phone-store": '<rect x="6" y="2" width="12" height="20" rx="2"/><path d="M10 5h4m-3 14h2"/>',
    "home-goods": '<path d="m3 10 9-7 9 7v11H3V10Zm6 11v-8h6v8"/>',
    "travel-agency": '<path d="M21 16v-2L13 9V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5L21 16Z" fill="currentColor" stroke="none"/>',
    "cosmetic-store": '<path d="M8 11h8v10H8zM9 11V6l6-3v8M8 17h8"/>',
    "shoes-store": '<path d="m4 4 5 2v5l4 3 7 2 1 5H3V10l1-6Zm-1 13h9m-2-7 3 1m0 1 2 1"/>',
    "dental-clinic": '<path d="M12 5C6-1 1 5 5 12c2 4 0 9 3 9 2 0 2-7 4-7s2 7 4 7c3 0 1-5 3-9 4-7-1-13-7-7Z"/>',
    "jewelry-store": '<path d="M6 3h12l4 6-10 13L2 9l4-6Zm-4 6h20M6 3l6 19 6-19M9 3 6 9m9-6 3 6"/>'
  };
  const text = (tag, value) => {
    const node = document.createElement(tag);
    node.textContent = value;
    return node;
  };
  function icon(drawing, className) {
    const node = document.createElement("span");
    node.className = className;
    node.setAttribute("aria-hidden", "true");
    node.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">${drawing}</svg>`;
    return node;
  }
  function render() {
    const query = input.value;
    const searching = Boolean(query.trim());
    const showStores = Boolean(category || searching);
    const candidates = category ? stores.filter(store => store.category === categorySlug) : stores;
    const selection = showStores ? window.searchStores(candidates, query) : categories;
    list.replaceChildren();
    for (const item of selection) {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.className = showStores ? "store-card" : "category-card";
      a.href = showStores && !category ? `${item.category}/${item.slug}/` : `${item.slug}/`;
      if (showStores) {
        const img = document.createElement("img");
        img.src = prefix + item.logo;
        img.alt = "";
        img.width = 80;
        img.height = 80;
        a.append(img);
      } else a.append(icon(icons[item.slug], "category-icon"));
      const copy = document.createElement("div");
      copy.append(text("h3", item.name));
      if (showStores) {
        if (!category) copy.append(text("p", categories.find(c => c.slug === item.category).name));
      } else {
        const count = stores.filter(store => store.category === item.slug).length;
        copy.append(text("p", `${count} store${count === 1 ? "" : "s"}`));
      }
      a.append(copy, icon('<path d="M5 12h14m-6-6 6 6-6 6"/>', "arrow"));
      li.append(a);
      list.append(li);
    }
    title.textContent = searching ? "Search results" : category ? "Stores" : "Browse store types";
    status.textContent = showStores ? `${selection.length} store${selection.length === 1 ? "" : "s"}${searching ? " found" : ""}` : `${categories.length} store types`;
    empty.hidden = selection.length > 0;
    empty.querySelector("h3").textContent = searching ? "No stores found" : "No stores here yet";
    empty.querySelector("p").textContent = searching ? "Try another store name or clear your search." : "Stores in this category will appear here.";
    clear.hidden = !input.value;
  }
  input.addEventListener("input", render);
  clear.addEventListener("click", () => { input.value = ""; render(); input.focus(); });
  render();
  document.getElementById("search-form").hidden = false;
  document.getElementById("directory-status").hidden = true;
})();
