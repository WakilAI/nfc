// Match names without case, accent, apostrophe or repeated-space differences.
(() => {
  "use strict";
  const normalize = value => value.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase().replace(/['’]/g, "").trim();
  window.searchStores = (stores, query) => {
    const words = normalize(query).split(/\s+/).filter(Boolean);
    return stores.filter(store => words.every(word => normalize(store.name).includes(word)));
  };
})();
