(() => {
  "use strict";
  const icons = {"0": "<svg viewBox=\"0 0 24 24\">\n                  <path\n                    fill=\"#111111\"\n                    d=\"M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z\"\n                  />\n                  <path\n                    fill=\"#111111\"\n                    d=\"M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z\"\n                  />\n                  <path\n                    fill=\"#111111\"\n                    d=\"M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z\"\n                  />\n                  <path\n                    fill=\"#111111\"\n                    d=\"M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z\"\n                  />\n                </svg>", "1": "<svg\n                  viewBox=\"0 0 24 24\"\n                  fill=\"none\"\n                  stroke=\"#111111\"\n                  stroke-width=\"1.5\"\n                >\n                  <rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"5\" />\n                  <circle cx=\"12\" cy=\"12\" r=\"4.2\" />\n                  <circle\n                    cx=\"17.2\"\n                    cy=\"6.8\"\n                    r=\"1.1\"\n                    fill=\"#111111\"\n                    stroke=\"none\"\n                  />\n                </svg>", "2": "<svg viewBox=\"0 0 24 24\">\n                  <circle cx=\"12\" cy=\"12\" r=\"11\" fill=\"#111111\" />\n                  <path\n                    d=\"M13.6 20.5v-6.9h2.3l.35-2.7h-2.65V9.2c0-.78.22-1.32 1.34-1.32h1.43V5.46c-.25-.03-1.1-.11-2.1-.11-2.08 0-3.5 1.27-3.5 3.6v2.02H8.5v2.7h2.28v6.9h2.82z\"\n                    fill=\"#FFFFFF\"\n                  />\n                </svg>", "3": "<svg viewBox=\"0 0 24 24\" fill=\"#111111\">\n                  <path\n                    d=\"M15.6 3.5c.4 1.9 1.7 3.2 3.6 3.4v2.5c-1.3.1-2.5-.3-3.6-1v6.2c0 3-2.4 5.1-5.2 5.1-2.9 0-5.2-2.3-5.2-5.1 0-2.9 2.5-5.2 5.4-5.1v2.6c-1.4-.2-2.7.9-2.7 2.5 0 1.4 1.1 2.5 2.5 2.5s2.6-1.1 2.6-2.5V3.5h2.6z\"\n                  />\n                </svg>", "4": "<svg viewBox=\"0 0 24 24\">\n                  <path\n                    fill=\"#111111\"\n                    d=\"M12 2C6.48 2 2 6.48 2 12c0 1.82.49 3.53 1.34 5L2 22l5.16-1.31c1.42.8 3.05 1.31 4.84 1.31 5.52 0 10-4.48 10-10S17.52 2 12 2z\"\n                  />\n                  <path\n                    fill=\"#FFFFFF\"\n                    d=\"M16.8 13.9c-.25-.13-1.48-.73-1.71-.81-.23-.08-.4-.13-.57.13-.17.25-.65.81-.8 1-.15.17-.3.19-.55.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.25-1.5-1.4-1.75-.15-.25-.02-.38.11-.5.11-.11.25-.29.38-.44.13-.15.17-.25.25-.42.08-.17.04-.32-.02-.45-.06-.13-.57-1.37-.78-1.88-.2-.5-.41-.43-.57-.44-.15-.01-.32-.01-.49-.01-.17 0-.45.06-.68.32-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.77 2.7 4.29 3.78.6.26 1.07.41 1.44.53.61.19 1.16.16 1.6.1.49-.07 1.48-.6 1.69-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.17-.48-.29z\"\n                  />\n                </svg>", "5": "<svg\n                  viewBox=\"0 0 24 24\"\n                  fill=\"none\"\n                  stroke=\"#111111\"\n                  stroke-width=\"1.5\"\n                  stroke-linecap=\"round\"\n                  stroke-linejoin=\"round\"\n                >\n                  <circle cx=\"12\" cy=\"12\" r=\"10\" />\n                  <line x1=\"2\" y1=\"12\" x2=\"22\" y2=\"12\" />\n                  <path\n                    d=\"M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z\"\n                  />\n                </svg>", "6": "<svg\n                  viewBox=\"0 0 24 24\"\n                  fill=\"none\"\n                  stroke=\"#111111\"\n                  stroke-width=\"1.5\"\n                >\n                  <path\n                    d=\"M12 21s-6.5-6.1-6.5-11A6.5 6.5 0 0 1 18.5 10c0 4.9-6.5 11-6.5 11z\"\n                    stroke-linejoin=\"round\"\n                  />\n                  <circle cx=\"12\" cy=\"10\" r=\"2.3\" />\n                </svg>"};
  const arrow = "<svg\n                  viewBox=\"0 0 28 14\"\n                  fill=\"none\"\n                  stroke=\"#111111\"\n                  stroke-width=\"1.5\"\n                  stroke-linecap=\"round\"\n                  stroke-linejoin=\"round\"\n                >\n                  <line x1=\"0\" y1=\"7\" x2=\"25\" y2=\"7\" />\n                  <polyline points=\"19,1.5 26,7 19,12.5\" />\n                </svg>";
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
      a.className = "social-btn";
      a.href = link.url.href;
      if (link.url.protocol === "https:") { a.target = "_blank"; a.rel = "noopener noreferrer"; }
      const icon = document.createElement("span");
      icon.className = "social-btn__icon";
      icon.setAttribute("aria-hidden", "true");
      icon.innerHTML = Object.hasOwn(icons, link.icon) ? icons[link.icon] : icons["0"];
      const label = document.createElement("span");
      label.className = "social-btn__label";
      label.textContent = link.label;
      const end = document.createElement("span");
      end.className = "social-btn__arrow";
      end.setAttribute("aria-hidden", "true");
      end.innerHTML = arrow;
      const sep = document.createElement("span"); sep.className = "social-btn__sep"; sep.setAttribute("aria-hidden", "true"); a.append(icon, sep, label, end); const li = document.createElement("li"); li.append(a); list.append(li);
    }
    status.hidden = true;
  } catch (error) {
    status.textContent = "Les liens sont momentanément indisponibles. Réessayez en actualisant la page.";
    console.error("Vérifiez links.js.", error);
  }
})();
