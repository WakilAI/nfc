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
    "perfume-store": '<rect x="5" y="9" width="14" height="12" rx="3"/><path d="M10 9V6h4v3M9 3h6v3H9z"/><rect x="9" y="13" width="6" height="4" rx="1"/>',
    "computer-store": '<rect x="4" y="4" width="16" height="12" rx="1.5"/><path d="m4 16-2 4h20l-2-4M10 18h4"/>',
    "phone-store": '<rect x="6" y="2" width="12" height="20" rx="2"/><path d="M10 5h4m-3 14h2"/>',
    "home-goods": '<path d="m3 10 9-7 9 7v11H3V10Zm6 11v-8h6v8"/>',
    "travel-agency": '<path d="M12 2c-1 0-1.5 1-1.5 2.5V8L3 12v2l7.5-2v5.5L8 19v2l4-1 4 1v-2l-2.5-1.5V12l7.5 2v-2l-7.5-4V4.5C13.5 3 13 2 12 2Z"/>',
    "cosmetic-store": '<path d="M8 11h8v10H8zM9 11V6l6-3v8M8 17h8"/>',
    "shoes-store": '<path d="m3 7 4 3 3-2 5 5 4.5 1.3A3.5 3.5 0 0 1 22 17.7V20H2V10l1-3ZM2 17h19.9M11 9l-2 2m5 1-2 2"/>',
    "dental-clinic": '<path d="M12 5C6-1 1 5 5 12c2 4 0 9 3 9 2 0 2-7 4-7s2 7 4 7c3 0 1-5 3-9 4-7-1-13-7-7Z"/>',
    "jewelry-store": '<path d="M6 3h12l4 6-10 13L2 9l4-6Zm-4 6h20M6 3l6 19 6-19M9 3 6 9m9-6 3 6"/>',
    optic: '<rect x="2" y="10" width="8" height="7" rx="3"/><rect x="14" y="10" width="8" height="7" rx="3"/><path d="M10 12a2 2 0 0 1 4 0M2 13V8a2 2 0 0 1 2-2h1m17 7V8a2 2 0 0 0-2-2h-1"/>',
    "repair-center": '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76Z"/>'
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
      a.href = showStores ? `${category ? "" : item.category + "/"}${item.slug}/preview.html` : `${item.slug}/`;
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
        const location = item.commune && item.wilaya ? `${item.commune}, ${item.wilaya}` : "Location to be confirmed";
        copy.append(text("p", category ? location : categories.find(c => c.slug === item.category).name));
        if (!category) copy.append(text("p", location));
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
