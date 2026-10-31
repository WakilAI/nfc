---
name: Nos commerces — Directory
description: Light French category and store navigation; independent store identities remain local.
colors:
  ink: "#243a32"
  background: "#f7f8f4"
  surface: "#fff"
  muted: "#516257"
  border: "#d9dfd7"
  hover: "#edf3eb"
  sage: "#81998b"
  focus: "#296248"
  selection: "#d7e6d9"
  selection-ink: "#183c2d"
typography:
  display:
    fontFamily: 'Georgia, "Times New Roman", serif'
    fontSize: "clamp(2.5rem, 7vw, 4.5rem)"
    fontWeight: 400
    lineHeight: 1.12
    letterSpacing: "-.025em"
  body:
    fontFamily: '"Segoe UI", Arial, sans-serif'
    fontSize: "1rem"
  intro:
    fontFamily: '"Segoe UI", Arial, sans-serif'
    fontSize: "1.125rem"
    lineHeight: 1.65
  card-title:
    fontFamily: '"Segoe UI", Arial, sans-serif'
    fontSize: "1.3rem"
    fontWeight: 600
    lineHeight: 1.35
  footer:
    fontSize: ".875rem"
    lineHeight: 1.6
rounded:
  card: "12px"
spacing:
  tight: "8px"
  compact: "12px"
  standard: "16px"
  mobile-card: "20px"
  shell: "24px"
  desktop-card: "28px"
  section: "32px"
  footer: "48px"
components:
  category-card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    padding: "28px"
  store-card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    padding: "28px"
  card-hover:
    backgroundColor: "{colors.hover}"
  navigation:
    textColor: "{colors.ink}"
---

# Design System: Nos commerces — Directory

## Overview

**Creative North Star: "A calm local directory"**

The French directory is light, minimal and easy to scan: generous serif headings introduce restrained category and store cards. Muted green-gray surfaces leave the store names and original logos prominent.

Scope is the root homepage and the five category pages using `directory.css` and `directory.js`. This records the implemented, code-led direction; no visual comps were approved. Each individual store keeps its independent identity. Store-local styles and design documents govern store pages, including existing Maison Allure and Ino Burger `DESIGN.md` files.

**Key Characteristics:**
- Light neutral surfaces with green-gray text and focus accents.
- Georgia display headings with Segoe UI body text.
- Whole-card navigation, proportioned logos and natural scrolling.

## Colors

The palette uses one restrained green family against pale neutral surfaces. The frontmatter contains the normative values extracted from `directory.css`.

### Primary

- **Forest focus** (`focus`): keyboard outline.
- **Green-gray ink** (`ink`): headings, navigation and directional arrows.

### Neutral

- **Pale paper** (`background`): the page canvas.
- **White surface** (`surface`): category and store cards.
- **Muted foliage** (`muted`): introduction, metadata and footer.
- **Soft edge** (`border`): card outlines, navigation and footer dividers.
- **Pale leaf** (`hover`): immediate card hover surface.
- **Sage** (`sage`): hover border and scrollbar thumb.
- **Selection leaf / deep selection ink** (`selection`, `selection-ink`): selected text.

## Typography

Georgia, with Times New Roman and serif fallbacks, gives display headings a welcoming character. Segoe UI, with Arial and sans-serif fallbacks, keeps navigation and metadata direct.

The fluid display role is reserved for the page heading. Introduction copy has a maximum measure of 52ch. Card titles use the frontmatter desktop role, reducing to 1.125rem at widths of 700px or less. Card descriptions use a line height of 1.5; navigation branding uses weight 650. Long titles can wrap anywhere.

## Layout

A centered shell has a maximum width of 1060px including its padding. Safe-area-aware outer padding is at least 24px horizontally and at the top, with 36px at the bottom. At widths of 360px or less, horizontal padding becomes at least 16px.

Cards use two equal columns with a 16px gap; at 700px or less they become one column with a 12px gap. Desktop cards have a minimum height of 144px, 28px padding and 24px internal gaps; mobile cards use 112px, 20px and 16px respectively. Store cards at 360px or less use 16px padding and a 12px gap.

Navigation wraps naturally. Header spacing is 52px above and 32px below, with its top reduced to 36px on mobile. The footer follows content with a 48px margin. All pages scroll naturally; no fixed-height viewport composition or directory animation is implemented.

## Elevation & Depth

Depth comes from white surfaces, subtle one-pixel borders and a pale hover fill. Directory cards have no shadows, gradients or overlays; hover changes are immediate.

## Shapes

Cards use gently rounded corners from the card radius token. Direction is conveyed by a crisp 24px inline SVG arrow with a 1.5 stroke. Logos retain their proportions using contained image fitting inside square slots: 96px on desktop, 72px on mobile, and 60px in store cards at 360px or less.

## Components

**Category cards:** A complete same-tab anchor contains a category title, store count and decorative arrow. No category illustration or icon is added.

**Store cards:** The same anchor structure adds the store's original logo, name and location. Unconfirmed locations read “Localisation à confirmer”; do not invent location metadata. Logos have empty alternative text because the adjacent visible name identifies the destination.

**Navigation and fallback links:** Text links have a minimum height of 48px; full cards exceed that target. Keyboard focus uses a 3px outline with a 5px offset. Ordinary links and French no-JavaScript fallback lists preserve navigation.

## Do's and Don'ts

### Do:
- Do apply this system only to the directory homepage and category pages.
- Do preserve each store's logo proportions and independent visual design.
- Do keep complete cards clickable, keyboard focus visible and touch targets at least 48px high.
- Do let content wrap and scroll naturally across mobile, landscape and desktop.

### Don't:
- Don't propagate directory fonts, colors or card styles into individual store pages.
- Don't crop or recolor store logos to fit the directory palette.
- Don't add directory animations or decorative components absent from the implemented system.
- Don't present unconfirmed locations as established facts.

