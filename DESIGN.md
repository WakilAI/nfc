---
name: Wakil AI — Store Directory
description: An orange directory with white cards that keeps each store's identity intact.
colors:
  background: "#ff6b00"
  surface: "#fff"
  panel: "#ff6b00"
  border: "#e8e4de"
  ink: "#111"
  muted: "rgba(17, 17, 17, .75)"
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
  logo: "12px"
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

The supplied `wakil-ai-assests/design-system.md` remains the brand reference for geometric typography and Wakil Orange. The user’s explicit orange-canvas direction supersedes its white-first rule. This document records the current `directory.css` implementation; unused agency tokens are omitted.

Scope is the English root directory and eleven category pages. The supplied Wakil AI logo identifies this shared shell. Individual store pages retain their local brands, French copy and store-local design guidance. Their source projects live under `stores/<type>/<store>/`; preparation preserves the existing public URLs.

**Key Characteristics:**
- Wakil Orange canvas, white cards and delicate borders.
- Geometric headings and navigation paired with readable body text.
- SVG category icons, proportioned store logos and whole-card navigation.

## Colors

The frontmatter preserves the actual CSS token names and values.

### Primary

- **Wakil Orange** (`background`, `panel`, `orange`): page canvas, immediate card hover fill, clear-search button and card hover borders.
- **Deep orange** (`primary`): category/search icons at rest, input caret and scrollbar thumb.

### Neutral

- **White** (`surface`): cards and search input.
- **Warm delicate border** (`border`): card/input outlines, footer divider and clear-button hover fill.
- **Black ink** (`ink`): headings, navigation, arrows, input text and keyboard focus; category icons also use it on hover. Text selection uses white on black.
- **Secondary ink** (`muted`): category introduction, counts, store types in root search, placeholders, status and footer. Its opacity preserves readable secondary text on the orange canvas.

**The Orange Canvas Rule.** Keep the shared directory canvas orange and cards white at rest. This confirmed override takes precedence over the supplied brand reference’s white-first guidance.

## Typography

Space Grotesk serves headings and navigation; Plus Jakarta Sans serves body text. Both are self-hosted variable WOFF2 fonts with Arial and sans-serif fallbacks and swap loading. The shipped weight ranges are 400–700 and 400–600 respectively.

Use display for page headings and display-mobile at the mobile breakpoint. The root heading reads “NFC Store Links”, centered without a width cap, introductory copy or an upper directory label. Category headings stay balanced within 15ch; their introduction copy stays within 56ch. Section headings use headline, reducing to (20px/28px) on mobile; card names use card-title at every size. Navigation branding is (22px, 700), while search labels are (14px, 600) in Space Grotesk. Preserve wrapping for long store names.

## Layout

The centered shell is (1200px) maximum including padding. Desktop horizontal padding is (40px), becoming (32px) at widths up to (1100px), then (20px) up to (767px). Safe-area insets are respected. Top padding is (24px), reducing to (16px) on mobile; bottom padding is at least (40px).

The directory grid uses three equal columns with (24px) gaps, two columns with (20px) gaps up to (1100px), and one column with (16px) gaps up to (767px). Header spacing is (56px) above and (32px) below, with mobile top spacing (40px). Search is at most (720px) wide. The footer follows content with a (56px) margin. Pages scroll naturally, including touch landscape.

## Elevation & Depth

The implemented directory has no shadows, gradients, animation or transitions. White surfaces against the orange canvas, one-pixel warm borders and immediate orange hover fill changes establish separation.

## Shapes

Cards and empty-state panels use the card radius; the search field and its clear button use the field radius. Category symbols occupy (58px) wide slots with a minimum height of (58px), stretching to match the name-and-count block. Inline SVGs use strokes except for the recognizable filled travel airplane. Directional arrows are (20px); decorative category arrows disappear at widths up to (400px). The navigation logo uses a (56px) square white background with (12px) corners. Store logos use contained fitting in (72px) square slots, reducing to (64px) on mobile and (52px) in store cards up to (360px). Keep original artwork proportions and colors.

## Components

**Category cards:** Whole-card same-tab anchors combine an SVG symbol, English category name, store count and arrow. Desktop minimum height is (144px); mobile uses (112px). A centered grid row places the symbol, name/count block and arrow with (24px) column gaps. Category labels follow their slugs. Padding follows desktop-card or mobile-card. Hover changes the border and fill to orange and the icon to black.

**Store cards:** The same frame uses the original logo and name. No card displays a location. Root search results retain the store type; category-page cards show only the store name. At widths up to (360px), store cards use (16px) padding and (12px) internal gaps. Decorative logos have empty alternative text because the adjacent name labels the link.

**Search:** A visible label precedes the field, with an inset search SVG and a (48px) clear button. Root search finds store names across all categories; category search stays within its category. Matching ignores case, accents, apostrophes and repeated spaces. Clearing restores the category or store listing and returns focus to the input. Result counts announce politely. Search appears only after JavaScript initializes; ordinary fallback links remain available without JavaScript.

**Empty states:** A bordered white panel distinguishes “No stores found” after a query from “No stores here yet” in an unpopulated category. Guidance suggests another name or clearing search when relevant.

**Navigation and focus:** The navigation pairs the supplied logo with the Wakil AI name, without a navigation divider; category pages offer “All store types”. Navigation wraps, with minimum (48px) link targets. Links and buttons use a black (3px) outline offset (5px); input focus uses a black (2px) outline offset (2px).

## Do's and Don'ts

### Do:
- Do apply this shared system only to the root directory and category pages.
- Do preserve the supplied Wakil AI logo and each store's original artwork.
- Do preserve visible keyboard focus, comfortable targets and natural scrolling.
- Do keep English directory copy separate from French store-page copy.

### Don't:
- Don't propagate directory branding into independent store pages.
- Don't crop, recolor or fabricate store logos, or add location labels to directory cards.
- Don't add shadows or motion to a system that currently implements neither.
