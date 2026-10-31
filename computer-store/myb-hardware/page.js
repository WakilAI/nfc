(() => {
        "use strict";

        const CONFIG = { name: "MYB Hardware", tagline: "Informatique · Laptops · High Tech", logo: "public/MYB-Hardware-logo.svg" };
        /* Modern monochrome blue SVG icons */
        const ICONS = {
          google:
            '<svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M21.35 11.1h-9.17v2.98h5.27c-.23 1.25-.94 2.31-2 3.02v2.51h3.24c1.89-1.74 2.98-4.31 2.98-7.39 0-.72-.06-1.42-.18-2.12z"/><path d="M12.18 21c2.7 0 4.96-.89 6.62-2.42l-3.24-2.51c-.9.6-2.05.95-3.38.95-2.6 0-4.8-1.76-5.59-4.12H3.25v2.59C4.9 18.73 8.28 21 12.18 21z"/><path d="M6.59 12.9c-.2-.6-.31-1.24-.31-1.9s.11-1.3.31-1.9V6.51H3.25C2.58 7.84 2.2 9.37 2.2 11s.38 3.16 1.05 4.49l3.34-2.59z"/><path d="M12.18 4.75c1.47 0 2.79.5 3.82 1.49l2.87-2.87C17.13 1.77 14.87 1 12.18 1 8.28 1 4.9 3.27 3.25 6.51l3.34 2.59c.79-2.36 2.99-4.12 5.59-4.12z"/></svg>',
          instagram:
            '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5.5" ry="5.5"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>',
          facebook:
            '<svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>',
          whatsapp:
            '<svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M19.05 4.91A9.816 9.816 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01zm-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.188 8.188 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.82 2.42a8.188 8.188 0 0 1 2.41 5.83c0 4.55-3.7 8.24-8.23 8.24zm4.53-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.78.97-.15.17-.29.19-.54.07-.25-.13-1.06-.39-2.03-1.25-.75-.67-1.26-1.5-1.41-1.75-.15-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.12-.56-1.34-.76-1.84-.2-.49-.4-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1s.9 2.44 1.02 2.61c.13.17 1.77 2.71 4.3 3.8 2.52 1.09 2.52.73 2.98.68.45-.04 1.47-.6 1.68-1.18.21-.59.21-1.09.15-1.18-.06-.1-.23-.16-.48-.28z"/></svg>',
          pin: '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/><circle cx="12" cy="9" r="2.5"/></svg>',
          arrow:
            '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
        };

        /* Helpers */
        const h = (t, c, x) => {
          const e = document.createElement(t);
          if (c) e.className = c;
          if (x != null) e.textContent = x;
          return e;
        };
        const icon = (k) => {
          const w = document.createElement("div");
          w.innerHTML = Object.hasOwn(ICONS, k) ? ICONS[k] : ICONS.google;
          return w.firstChild;
        };

        const app = document.getElementById("app");
        const status = document.getElementById("link-status");
        try {
        if (!Array.isArray(window.LINKTREE_LINKS) || !window.LINKTREE_LINKS.length) throw new Error("Liste vide.");
        const links = window.LINKTREE_LINKS.map(link => {
          if (!link || typeof link.label !== "string" || !link.label.trim() || typeof link.url !== "string") throw new Error("Format invalide.");
          const url = link.url.trim() ? new URL(link.url.trim()) : null;
          if (url && !["https:", "tel:", "mailto:"].includes(url.protocol)) throw new Error("Protocole invalide.");
          return { ...link, url };
        });
        let n = 0;
        const rv = (e) => {
          e.classList.add("rv");
          e.style.setProperty("--d", n++);
          return e;
        };

        /* === Top: Logo & Tagline (clean, no electronics) === */
        const logo = h("img", "logo");
        logo.src = CONFIG.logo;
        logo.alt = CONFIG.name;
        logo.width = 265;
        logo.height = 133;
        app.append(rv(logo));
        app.append(rv(h("p", "tag", CONFIG.tagline)));

        /* === Links === */
        const ul = h("ul", "list");
        links.forEach((l) => {
          if (!l.url) return;
          const a = h("a", "lk");
          a.href = l.url.href;
          if (l.url.protocol === "https:") { a.target = "_blank"; a.rel = "noopener noreferrer nofollow"; }

          const ic = h("span", "ic");
          ic.setAttribute("aria-hidden", "true");
          ic.appendChild(icon(l.icon));
          const tx = h("span", "tx", l.label);
          const ar = h("span", "ar");
          ar.setAttribute("aria-hidden", "true");
          ar.appendChild(icon("arrow"));

          a.append(ic, tx, ar);
          const li = h("li");
          li.append(a);
          ul.append(rv(li));
        });
        app.append(ul);

        /* === Enhanced Footer: Clear greeting & brand line === */
        const ft = h("div", "footer-area");
        const ftGreet = h("p", "footer-greeting", "Soyez les bienvenus");
        const ftBrand = h("p", "footer-brand", "MYB Hardware");
        ft.append(ftGreet, ftBrand);
        app.append(rv(ft));
        status.hidden = true;
        } catch (error) {
          status.textContent = "Les liens sont momentanément indisponibles. Réessayez en actualisant la page.";
          console.error("Vérifiez links.js.", error);
        }
      })();
