(() => {
  "use strict";
  const icons = {"0": "<svg\n              xmlns=\"http://www.w3.org/2000/svg\"\n              viewBox=\"0 0 24 24\"\n              fill=\"none\"\n              stroke=\"currentColor\"\n              stroke-width=\"1.8\"\n              stroke-linecap=\"round\"\n              stroke-linejoin=\"round\"\n            >\n              <polygon\n                points=\"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2\"\n              />\n            </svg>", "1": "<svg\n              xmlns=\"http://www.w3.org/2000/svg\"\n              viewBox=\"0 0 24 24\"\n              fill=\"none\"\n              stroke=\"currentColor\"\n              stroke-width=\"1.8\"\n              stroke-linecap=\"round\"\n              stroke-linejoin=\"round\"\n            >\n              <rect width=\"20\" height=\"20\" x=\"2\" y=\"2\" rx=\"5\" ry=\"5\" />\n              <circle cx=\"12\" cy=\"12\" r=\"4\" />\n              <circle\n                cx=\"17.5\"\n                cy=\"6.5\"\n                r=\"0.5\"\n                fill=\"currentColor\"\n                stroke=\"none\"\n              />\n            </svg>", "2": "<svg\n              xmlns=\"http://www.w3.org/2000/svg\"\n              viewBox=\"0 0 24 24\"\n              fill=\"currentColor\"\n            >\n              <g transform=\"translate(-1, 0)\">\n                <path\n                  d=\"M16.6 5.82s.51.5 0 0A4.278 4.278 0 0 1 15.54 3h-3.09v12.4a2.592 2.592 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6 0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64 0 3.33 2.76 5.7 5.69 5.7 3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48z\"\n                />\n              </g>\n            </svg>", "3": "<svg\n              xmlns=\"http://www.w3.org/2000/svg\"\n              viewBox=\"0 0 24 24\"\n              fill=\"currentColor\"\n            >\n              <path\n                d=\"M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.69 8.23-8.23 8.23-1.48 0-2.93-.39-4.19-1.14l-.3-.18-3.12.82.83-3.04-.2-.32a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24zm-3.52 3.66c-.16 0-.43.06-.66.31-.23.25-.86.84-.86 2.04 0 1.2.87 2.36.99 2.52.12.17 1.59 2.46 4.03 3.51.58.25 1.03.4 1.39.51.58.18 1.11.16 1.53.1.47-.07 1.44-.59 1.64-1.16.2-.57.2-1.05.14-1.16-.06-.1-.22-.16-.46-.28-.24-.12-1.44-.71-1.66-.79-.22-.08-.38-.12-.54.12-.16.24-.63.79-.77.95-.14.17-.28.19-.52.07-.24-.12-1.01-.37-1.93-1.19-.71-.64-1.19-1.42-1.33-1.66-.14-.24-.02-.37.1-.49.11-.11.24-.29.36-.43.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.43-.06-.12-.54-1.31-.74-1.79-.2-.47-.4-.4-.55-.41l-.47-.01z\"\n              />\n            </svg>", "4": "<svg\n              xmlns=\"http://www.w3.org/2000/svg\"\n              viewBox=\"0 0 24 24\"\n              fill=\"none\"\n              stroke=\"currentColor\"\n              stroke-width=\"1.8\"\n              stroke-linecap=\"round\"\n              stroke-linejoin=\"round\"\n            >\n              <path d=\"M20 10c0 5.5-8 12-8 12s-8-6.5-8-12a8 8 0 1 1 16 0z\" />\n              <circle cx=\"12\" cy=\"10\" r=\"3\" />\n            </svg>"};
  const arrow = "<svg\n              xmlns=\"http://www.w3.org/2000/svg\"\n              viewBox=\"0 0 24 24\"\n              fill=\"none\"\n              stroke=\"currentColor\"\n              stroke-width=\"2\"\n              stroke-linecap=\"round\"\n              stroke-linejoin=\"round\"\n            >\n              <path d=\"M9 18l6-6-6-6\" />\n            </svg>";
  const list = document.getElementById("links");
  const status = document.getElementById("link-status");
  try {
    if (!Array.isArray(window.LINKTREE_LINKS) || !window.LINKTREE_LINKS.length) throw new Error("Liste vide ou manquante.");
    const links = window.LINKTREE_LINKS.map(link => {
      if (!link || typeof link.label !== "string" || !link.label.trim() || typeof link.url !== "string") throw new Error("Format invalide.");
      const url = link.url.trim() ? new URL(link.url.trim()) : null;
      if (url && !["https:", "tel:", "mailto:"].includes(url.protocol)) throw new Error("Protocole invalide.");
      return { ...link, url };
    });
    for (const link of links) {
      if (!link.url) continue;
      const a = document.createElement("a");
      a.className = "card";
      a.href = link.url.href;
      if (link.url.protocol === "https:") { a.target = "_blank"; a.rel = "noopener noreferrer"; }
      const icon = document.createElement("span");
      icon.className = "card-ico";
      icon.setAttribute("aria-hidden", "true");
      icon.innerHTML = Object.hasOwn(icons, link.icon) ? icons[link.icon] : icons["0"];
      const label = document.createElement("span");
      label.className = "card-title";
      label.textContent = link.label;
      const end = document.createElement("span");
      end.className = "card-arrow";
      end.setAttribute("aria-hidden", "true");
      end.innerHTML = arrow;
      const body = document.createElement("span"); body.className = "card-body"; body.append(label); a.append(icon, body, end); list.append(a);
    }
    status.hidden = true;
  } catch (error) {
    status.textContent = "Les liens sont momentanément indisponibles. Réessayez en actualisant la page.";
    console.error("Vérifiez links.js.", error);
  }
})();
