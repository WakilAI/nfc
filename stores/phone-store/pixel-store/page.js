(() => {
  "use strict";

  const icons = {
    star: '<path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9Z"/>',
    instagram: '<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M17.5 6.5h.01"/>',
    facebook: '<path d="M14 21v-8h3l.5-4H14V7c0-1 .5-2 2-2h2V2h-3c-3 0-5 2-5 5v2H7v4h3v8"/>',
    tiktok: '<path d="M14 3v12.5a4.5 4.5 0 1 1-4-4.47M14 3c0 3 2 5 6 5"/>',
    message: '<path d="M21 11.5a9 9 0 0 1-13.4 7.9L3 21l1.6-4.6A9 9 0 1 1 21 11.5Z"/><path d="M8 10h8M8 14h5"/>',
    phone: '<path d="m8 3 3 5-3 2c1 3 3 5 6 6l2-3 5 3-1 4c-1 3-8 0-12-4S1 5 4 4Z"/>',
    pin: '<path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z"/><circle cx="12" cy="10" r="2.5"/>',
    globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.7 4 5.8 4 9s-1.5 6.3-4 9c-2.5-2.7-4-5.8-4-9s1.5-6.3 4-9Z"/>',
  };
  const list = document.getElementById("links");
  const status = document.getElementById("link-status");
  const empty = document.getElementById("links-empty");

  try {
    if (!Array.isArray(window.LINKTREE_LINKS) || !window.LINKTREE_LINKS.length) {
      throw new Error("La liste des liens est vide ou manquante.");
    }

    const links = window.LINKTREE_LINKS.map((link) => {
      if (!link || typeof link.label !== "string" || !link.label.trim() || typeof link.url !== "string" ||
          (link.detail !== undefined && typeof link.detail !== "string")) {
        throw new Error("Format de lien invalide.");
      }
      const url = link.url.trim() ? new URL(link.url.trim()) : null;
      if (url && !["https:", "tel:", "mailto:"].includes(url.protocol)) {
        throw new Error("Protocole invalide.");
      }
      return { ...link, url };
    });

    let rendered = 0;
    for (const link of links) {
      if (!link.url) continue;
      const item = document.createElement("li");
      const control = document.createElement("a");
      control.className = "link";
      control.href = link.url.href;
      if (link.url.protocol === "https:") {
        control.target = "_blank";
        control.rel = "noopener noreferrer";
      }

      const icon = document.createElement("span");
      icon.className = "link-icon";
      icon.setAttribute("aria-hidden", "true");
      const drawing = Object.hasOwn(icons, link.icon) ? icons[link.icon] : icons.star;
      icon.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${drawing}</svg>`;

      const text = document.createElement("span");
      text.className = "link-text";
      const label = document.createElement("span");
      label.className = "link-label";
      label.textContent = link.label;
      text.append(label);
      if (link.detail) {
        const detail = document.createElement("span");
        detail.className = "link-detail";
        detail.textContent = link.detail;
        text.append(detail);
      }

      const arrow = document.createElement("span");
      arrow.className = "link-arrow";
      arrow.setAttribute("aria-hidden", "true");
      arrow.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14m-5-5 5 5-5 5"/></svg>';

      control.append(icon, text, arrow);
      item.append(control);
      list.append(item);
      rendered += 1;
    }

    status.hidden = true;
    if (empty) empty.hidden = rendered > 0;
  } catch (error) {
    status.hidden = false;
    status.textContent = "Les liens sont momentanément indisponibles. Réessayez en actualisant la page.";
    if (empty) empty.hidden = true;
    console.error("PIXEL STORE : vérifiez links.js.", error);
  }
})();
