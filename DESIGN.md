---
name: Wakil AI — Store Directory
description: A warm, precise directory that keeps each store's identity intact.
colors:
  background: "#fcfaf7"
  surface: "#fff"
  panel: "#f8f7f4"
  border: "#e8e4de"
  ink: "#111"
  muted: "rgba(17, 17, 17, .70)"
  orange: "#ff6b00"
  primary: "#a04100"
typography:
  display:
    fontFamily: '"Space Grotesk", Arial, sans-serif'
    fontSize: "60px"
    fontWeight: 700
    lineHeight: 1.13
    letterSpacing: "-.03em"
  display-mobile:
    fontFamily: '"Space Grotesk", Arial, sans-serif'
    fontSize: "38px"
    fontWeight: 700
    lineHeight: "44px"
    letterSpacing: "-.02em"
  headline:
    fontFamily: '"Space Grotesk", Arial, sans-serif'
    fontSize: "24px"
    fontWeight: 600
    lineHeight: "32px"
    letterSpacing: "-.01em"
  card-title:
    fontFamily: '"Space Grotesk", Arial, sans-serif'
    fontSize: "20px"
    fontWeight: 600
    lineHeight: "28px"
    letterSpacing: "-.005em"
  body:
    fontFamily: '"Plus Jakarta Sans", Arial, sans-serif'
    fontSize: "16px"
  intro:
    fontFamily: '"Plus Jakarta Sans", Arial, sans-serif'
    fontSize: "18px"
    lineHeight: "28px"
  metadata:
    fontFamily: '"Plus Jakarta Sans", Arial, sans-serif'
    fontSize: "14px"
    lineHeight: "22px"
rounded:
  field: "8px"
  card: "16px"
spacing:
  compact: "8px"
  label: "12px"
  standard: "16px"
  mobile-card: "20px"
  desktop-card: "24px"
  section: "32px"
  search: "40px"
  header: "56px"
components:
  category-card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    padding: "24px"
  store-card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    padding: "24px"
  card-hover:
    backgroundColor: "{colors.panel}"
  search-field:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.field}"
    height: "64px"
    padding: "16px 64px 16px 56px"
---

# Design System: Wakil AI — Store Directory

## Overview

**Creative North Star: "Warm Tactile Precision"**

The supplied `wakil-ai-assests/design-system.md` governs the directory identity: white-first warmth, clear geometric typography and purposeful Wakil Orange. This document records its implemented subset from `directory.css`; unused agency tokens are omitted. No separate visual comp governs the work.

Scope is the English root directory and eleven category pages. The supplied Wakil AI logo identifies this shared shell. Individual store pages retain their local brands, French copy and store-local design guidance.

**Key Characteristics:**
- Warm white canvas, white cards and delicate borders.
- Geometric headings and navigation paired with readable body text.
- SVG category icons, proportioned store logos and whole-card navigation.

## Colors

The frontmatter preserves the actual CSS token names and values.

### Primary

- **Wakil Orange** (`orange`): card hover borders, text selection and search focus.
- **Deep orange** (`primary`): category/search icons, link/button focus and scrollbar thumb.

### Neutral

- **Warm white** (`background`): page canvas.
- **White** (`surface`): cards and search input.
- **Soft panel** (`panel`): card hover fill and clear-search button.
- **Warm delicate border** (`border`): outlines, dividers and clear-button hover fill.
- **Black ink** (`ink`): headings, navigation, arrows and input text.
- **Secondary ink** (`muted`): introduction, metadata, placeholders, status and footer.

**The White-First Rule.** Warmth comes from the canvas and orange accents, without stacking decorative beige layers.

## Typography

Space Grotesk serves headings and navigation; Plus Jakarta Sans serves body text. Both are self-hosted variable WOFF2 fonts with Arial and sans-serif fallbacks and swap loading. The shipped weight ranges are 400–700 and 400–600 respectively.

Use display for page headings, balanced within 15ch, and display-mobile at the mobile breakpoint. Introduction copy stays within 56ch. Section headings use headline, reducing to (20px/28px) on mobile; card names use card-title at every size. Navigation branding is (22px, 700), while search labels are (14px, 600) in Space Grotesk. Preserve wrapping for long store names.

## Layout

The centered shell is (1200px) maximum including padding. Desktop horizontal padding is (40px), becoming (32px) at widths up to (1100px), then (20px) up to (767px). Safe-area insets are respected. Top padding is (24px), reducing to (16px) on mobile; bottom padding is at least (40px).

The directory grid uses three equal columns with (24px) gaps, two columns with (20px) gaps up to (1100px), and one column with (16px) gaps up to (767px). Header spacing is (56px) above and (32px) below, with mobile top spacing (40px). Search is at most (720px) wide. The footer follows content with a (56px) margin. Pages scroll naturally, including touch landscape.

## Elevation & Depth

The implemented directory has no shadows, gradients, animation or transitions. White surfaces, one-pixel warm borders and immediate hover fill changes establish separation.

## Shapes

Cards and empty-state panels use the card radius; the search field and its clear button use the field radius. Category symbols are (32px) inline stroke SVGs; directional arrows are (20px). Store logos use contained fitting in (72px) square slots, reducing to (64px) on mobile and (52px) in store cards up to (360px). Keep original artwork proportions and colors.

## Components

**Store previews:** Cards and search results open a generated French `preview.html`. It inherits the directory shell, original store logo and typography, with a prominent links-page button before the plate gallery. The heading uses a fluid 32–48px size to leave room for the action. Plates retain their proportions in two columns on desktop and one on mobile; filename captions identify designs and each image opens full size. Missing plates show a quiet empty state. The footer stays in normal flow. Independent links pages keep their own designs and direct NFC URLs.

**Category cards:** Whole-card same-tab anchors combine an SVG symbol, English category name, store count and arrow. Desktop minimum height is (144px); mobile uses (112px). Padding follows desktop-card or mobile-card. Hover changes the border to orange and the fill to panel.

**Store cards:** The same frame uses the original logo and name. Category pages show location; global search also shows the category. Unconfirmed locations read “Location to be confirmed”. At widths up to (360px), store cards use (16px) padding and (12px) internal gaps. Decorative logos have empty alternative text because the adjacent name labels the link.

**Search:** A visible label precedes the field, with an inset search SVG and a (48px) clear button. Root search finds store names across all categories; category search stays within its category. Matching ignores case, accents, apostrophes and repeated spaces. Clearing restores the category or store listing and returns focus to the input. Result counts announce politely. Search appears only after JavaScript initializes; ordinary fallback links remain available without JavaScript.

**Empty states:** A bordered white panel distinguishes “No stores found” after a query from “No stores here yet” in an unpopulated category. Guidance suggests another name or clearing search when relevant.

**Navigation and focus:** The header pairs the supplied logo with the Wakil AI name; category pages offer “All store types”. Navigation wraps, with minimum (48px) link targets. Links and buttons use a deep-orange (3px) outline offset (5px); input focus uses an orange (2px) outline offset (2px).

## Do's and Don'ts

### Do:
- Do apply this shared system only to the root directory and category pages.
- Do preserve the supplied Wakil AI logo and each store's original artwork.
- Do preserve visible keyboard focus, comfortable targets and natural scrolling.
- Do keep English directory copy separate from French store-page copy.

### Don't:
- Don't propagate directory branding into independent store pages.
- Don't crop, recolor or fabricate store logos or location facts.
- Don't add shadows or motion to a system that currently implements neither.
