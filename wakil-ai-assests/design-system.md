---
name: Wakil AI

colors:
  # Core surfaces — intentionally simplified to avoid beige/white gradients.
  background: "#FCFAF7"
  surface: "#FFFFFF"
  surface-panel: "#F8F7F4"
  surface-subtle: "#F3F0EB"
  surface-dim: "#E9E5DF"

  # Structural borders.
  border-warm-delicate: "#E8E4DE"
  border-subtle: "#F0EDE8"

  # Typography.
  text-black-high: "#111111"
  text-black-medium: rgba(17, 17, 17, 0.70)
  text-black-low: rgba(17, 17, 17, 0.48)

  # Brand.
  primary: "#A04100"
  primary-container: "#FF6B00"
  on-primary: "#FFFFFF"
  on-primary-container: "#111111"
  inverse-primary: "#FFB693"
  charcoal-elevated: "#18181B"
  pure-white: "#FFFFFF"
  orange-glow: rgba(255, 107, 0, 0.22)

  # Semantic states.
  success-green: "#12B76A"
  warning-amber: "#F79009"
  error-red: "#F04438"
  info-blue: "#0BA5EC"

  # Compatibility aliases.
  surface-bright: "#FFFFFF"
  surface-container-lowest: "#FFFFFF"
  surface-container-low: "#F8F7F4"
  surface-container: "#F3F0EB"
  surface-container-high: "#ECE9E3"
  surface-container-highest: "#E5E2DC"
  on-surface: "#111111"
  on-surface-variant: rgba(17, 17, 17, 0.70)
  inverse-surface: "#18181B"
  inverse-on-surface: "#FFFFFF"
  outline: "#B9AFA7"
  outline-variant: "#E8E4DE"
  surface-tint: "#A04100"
  secondary: "#111111"
  on-secondary: "#FFFFFF"
  secondary-container: "#F3F0EB"
  on-secondary-container: "#111111"
  tertiary: "#5E5F5C"
  on-tertiary: "#FFFFFF"
  tertiary-container: "#E5E2DC"
  on-tertiary-container: "#111111"
  error: "#BA1A1A"
  on-error: "#FFFFFF"
  error-container: "#FFDAD6"
  on-error-container: "#93000A"
  primary-fixed: "#FFDBCC"
  primary-fixed-dim: "#FFB693"
  on-primary-fixed: "#351000"
  on-primary-fixed-variant: "#7A3000"
  secondary-fixed: "#F3F0EB"
  secondary-fixed-dim: "#E5E2DC"
  on-secondary-fixed: "#111111"
  on-secondary-fixed-variant: rgba(17, 17, 17, 0.70)
  tertiary-fixed: "#E5E2DC"
  tertiary-fixed-dim: "#D8D5D0"
  on-tertiary-fixed: "#111111"
  on-tertiary-fixed-variant: rgba(17, 17, 17, 0.70)
  surface-variant: "#E5E2DC"
  background-alias: "#FCFAF7"

typography:
  display-xl:
    fontFamily: Space Grotesk
    fontSize: 60px
    fontWeight: "700"
    lineHeight: 68px
    letterSpacing: -0.03em
  display-xl-mobile:
    fontFamily: Space Grotesk
    fontSize: 38px
    fontWeight: "700"
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 36px
    fontWeight: "600"
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Space Grotesk
    fontSize: 28px
    fontWeight: "600"
    lineHeight: 36px
    letterSpacing: -0.015em
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: "600"
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Space Grotesk
    fontSize: 20px
    fontWeight: "600"
    lineHeight: 28px
    letterSpacing: -0.005em
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: "400"
    lineHeight: 28px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: "400"
    lineHeight: 24px
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: "400"
    lineHeight: 20px
  label-technical:
    fontFamily: Space Grotesk
    fontSize: 11px
    fontWeight: "600"
    lineHeight: 16px
    letterSpacing: 0.08em
  label-md:
    fontFamily: Space Grotesk
    fontSize: 14px
    fontWeight: "600"
    lineHeight: 20px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Space Grotesk
    fontSize: 12px
    fontWeight: "500"
    lineHeight: 16px
    letterSpacing: 0.02em
  caption-timestamp:
    fontFamily: Space Grotesk
    fontSize: 11px
    fontWeight: "500"
    lineHeight: 16px

rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px

spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 2.5rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system expresses high-order engineering capability with tactile, luminous executive warmth. It is designed for Wakil AI as an AI and digital solutions agency, balancing technical credibility with a clean, approachable visual identity.

The aesthetic philosophy bridges **Luminous Minimalist Architecture** and **Warm Tactile Precision**.

The V2 system makes one important correction: **warmth comes from subtle undertones and Wakil Orange, not from stacking many nearly identical beige surfaces.** The interface should read as white-first, warm-second.

- **White-First Foundation**: The main canvas is a very light warm white (`#FCFAF7`). Cards and primary content surfaces are pure white (`#FFFFFF`). The difference must remain visible but restrained.
- **Controlled Warm Neutrality**: Only two secondary surface levels are normally used: `#F8F7F4` for structural panels and `#F3F0EB` for recessed areas. Do not create additional beige gradients by mixing many intermediate neutrals.
- **Authoritative Monochromatic Contrast**: Typography uses `#111111` as its base color. Hierarchy comes from weight and opacity, not gray text colors.
- **Wakil Orange Synergy**: Wakil Orange (`#FF6B00`) is the visual energy of the system. Use it for primary actions, active states, highlights, indicators, and selected brand moments.
- **Architectural Typographic Dualism**: Space Grotesk handles headings, technical labels, metrics, and navigation. Plus Jakarta Sans handles narrative and body copy.

## Colors

The palette is intentionally compact.

### Core Surface Hierarchy

Use these four levels as the default surface system:

1. **Canvas — `#FCFAF7`**
   - Global page background.
   - Gives the interface a subtle warm character.
   - Should occupy large areas.
   - Never use it as a card fill beside pure white if the contrast becomes visually imperceptible.

2. **Card — `#FFFFFF`**
   - Primary cards.
   - Hero content panels.
   - Forms and inputs.
   - Modals.
   - Product/device presentation areas.
   - This is the cleanest surface in the system.

3. **Panel — `#F8F7F4`**
   - Navigation areas.
   - Secondary sections.
   - Recessed structural containers.
   - Use sparingly.

4. **Subtle — `#F3F0EB`**
   - Small recessed modules.
   - Code/workflow backgrounds.
   - Secondary table headers.
   - Supporting visual zones.

### Brand Colors

- **Wakil Orange — `#FF6B00`**: Primary visual accent and main CTA color.
- **Deep Orange — `#A04100`**: Darker orange for text accents or contexts where `#FF6B00` needs more contrast.
- **Secondary Black — `#111111`**: Primary typography, navigation, dark buttons, and strong structural elements.
- **Elevated Charcoal — `#18181B`**: Dark surfaces that need slightly more depth than pure black.

### Borders

- **Warm Border — `#E8E4DE`**: Standard card and structural border.
- **Subtle Border — `#F0EDE8`**: Very light separators.
- Borders should remain quiet. Never use dark gray borders around normal cards.

### Universal Text Rule

Typography is based on `#111111`:

- Primary text: `#111111`
- Secondary text: `rgba(17, 17, 17, 0.70)`
- Metadata/captions: `rgba(17, 17, 17, 0.48)`

Do not introduce unrelated gray text colors.

## Neutral Usage Rules

The following rules are mandatory to prevent the previous gradient-like appearance:

- Do not use more than **four surface levels** on a single page.
- Do not place `#FCFAF7`, `#F8F7F4`, and `#F3F0EB` as large adjacent blocks unless the hierarchy requires it.
- Large page areas should use either `#FCFAF7` or `#FFFFFF`.
- `#F8F7F4` and `#F3F0EB` are supporting surfaces, not primary backgrounds.
- Never use warm beige gradients as a decorative background.
- Never create a gradient between `#FCFAF7` and `#FFFFFF` simply to add depth.
- Depth should come from spacing, borders, shadows, imagery, and orange highlights.
- If a page starts looking beige rather than white, remove a surface layer before changing the brand orange.

## Typography

Typography delivers geometric precision in functional displays combined with effortless reading flow.

- **Space Grotesk** governs headers, navigation, metrics, labels, status indicators, and technical UI.
- **Plus Jakarta Sans** handles body copy, descriptions, forms, and longer reading passages.
- Display and major headers use full `#111111`.
- Body copy uses `#111111` or 70% opacity.
- Metadata uses 48% opacity.
- Avoid decorative typography that makes the agency feel like a generic SaaS template.

## Layout & Spacing

A structured 8px baseline rhythm aligns components across form factors.

- **Desktop (1280px+)**: 12-column grid, 24px gutters, 40px outer margins.
- **Tablet (768px–1279px)**: 8-column grid, 20px gutters, 32px margins.
- **Mobile (<768px)**: 4-column grid, 16px gutters, 20px canvas padding.

### Rhythm Scale

- `space-xs` (4px): micro-offsets and icon gaps.
- `space-sm` (8px): compact controls and button internals.
- `space-md` (16px): standard card padding and input spacing.
- `space-lg` (24px): card-to-card spacing.
- `space-xl` (40px): major section spacing.

Whitespace is a primary part of the brand. Prefer generous spacing over decorative backgrounds.

## Elevation & Depth

Depth should feel soft, clean, and physical rather than glossy.

### Level 0 — Canvas

- Background: `#FCFAF7`
- No shadow.
- Used for page-level structure.

### Level 1 — Cards

- Background: `#FFFFFF`
- Border: `1px solid #E8E4DE`
- Shadow:
  `0 2px 8px rgba(17, 17, 17, 0.03), 0 12px 28px rgba(17, 17, 17, 0.04)`

### Level 2 — Focused Modules

- Background: `#FFFFFF` or `#18181B`
- Use stronger shadow only when the element genuinely floats above the page.
- Dark modules are reserved for workflows, product simulations, code, or premium hardware presentations.

### Kinetic Glow

Primary interactive elements may emit a subtle Wakil Orange bloom:

`box-shadow: 0 4px 18px rgba(255, 107, 0, 0.28)`

Do not use orange glow as a permanent background effect.

## Shapes

The system uses a Level 2 rounded geometry.

- Controls: 8px radius.
- Cards: 16px radius.
- Larger hero/media containers: up to 24px radius.
- Pills and badges: fully rounded.
- Avoid excessive rounding on every element. The interface should remain architectural and precise.

## Components

### Buttons

#### Primary Action

- Background: `#FF6B00`
- Label/icon: `#111111`
- Font: Space Grotesk, 600
- Radius: 8px
- No border.
- Hover: `box-shadow: 0 4px 18px rgba(255, 107, 0, 0.32)`
- Pressed: scale to `0.98`

#### Secondary Action

- Background: `#111111`
- Label/icon: `#FFFFFF`
- Radius: 8px
- Hover: `#18181B` with subtle warm border.

#### Tertiary Action

- Background: `#FFFFFF`
- Border: `1px solid #E8E4DE`
- Label: `#111111`
- Hover: border becomes `#111111`

## Navigation & Structural Panels

- Navigation can use `#F8F7F4` when separation from the canvas is necessary.
- Otherwise keep navigation on `#FCFAF7`.
- Use `#E8E4DE` for structural borders.
- Active navigation can use a black pill with white text or a white inset item with an orange indicator.
- Avoid orange-filled navigation bars.

## Cards & Containers

- Default surface: `#FFFFFF`
- Border: `1px solid #E8E4DE`
- Radius: 16px
- Shadow: subtle Level 1 shadow.
- Headers: `#111111`
- Body: `rgba(17, 17, 17, 0.70)`
- Metadata: `rgba(17, 17, 17, 0.48)`

Cards should feel like clean objects placed on a warm white canvas — not like beige blocks.

## Input Fields

- Background: `#FFFFFF`
- Border: `1px solid #E8E4DE`
- Radius: 8px
- Text: `#111111`
- Placeholder: `rgba(17, 17, 17, 0.48)`
- Focus border: `1.5px solid #FF6B00`
- Focus ring:
  `box-shadow: 0 0 0 3px rgba(255, 107, 0, 0.15)`

## Chips & Badges

### Technical / Status Chip

- Surface: `#FFFFFF`
- Border: `1px solid #E8E4DE`
- Radius: 9999px
- Text: `#111111` at 70% opacity.
- Active indicator: 6px Wakil Orange dot.

### Selected Filter

- Background: `#111111`
- Text: `#FFFFFF`
- Radius: 9999px

## Checkboxes, Radios & Switches

### Checkbox / Radio

- Size: 20px
- Border: `1.5px solid #E8E4DE`
- Checked fill: `#FF6B00`
- Glyph: `#111111`

### Switch

- Size: 44px × 24px
- Inactive track: `#E8E4DE`
- Thumb: `#FFFFFF`
- Active track: `#FF6B00`
- Active thumb: `#FFFFFF` or `#111111`

## Wakil AI Visual Direction

Wakil AI should visually communicate:

**Smart. Precise. Modern. Human.**

The brand should not look like a generic AI startup with glowing gradients, dark futuristic dashboards everywhere, or excessive neon effects.

### Preferred Visual Ingredients

- Warm white space.
- Pure white product cards.
- Black typography.
- Wakil Orange highlights.
- Realistic laptops, phones, NFC products, and business environments.
- Clean workflow diagrams.
- Subtle technical labels.
- Soft physical shadows.
- Clear modular grids.
- Strong but simple headlines.

### Avoid

- Beige-on-beige interfaces.
- Large warm gradients.
- Excessive glassmorphism.
- Neon blue/purple AI visuals.
- Heavy dark SaaS dashboards as the default.
- Excessive orange backgrounds.
- Too many cards competing for attention.
- Gray typography that weakens contrast.
- Decorative elements without a functional or brand purpose.

## Instagram & Marketing Design Guidance

Instagram graphics should translate the same system into a stronger editorial composition.

- Canvas: primarily `#FCFAF7` or `#FFFFFF`.
- Use black for dominant headlines.
- Use orange selectively for one key phrase, CTA, icon, or object.
- Use dark `#111111` panels for contrast on selected technical/automation posts.
- Product/NFC posts can use richer photography while retaining the same typography and orange accents.
- Keep copy short and visually dominant.
- Use generous negative space.
- Avoid filling the entire canvas with decorative UI cards.

## Website Page Guidance

Website pages should feel like a coherent digital product rather than a collection of marketing sections.

### Homepage

Recommended hierarchy:

1. Minimal navigation.
2. Strong value proposition.
3. One clear primary CTA.
4. Realistic product/automation visual.
5. Service overview.
6. Selected work or use cases.
7. Process / how we work.
8. Final CTA.

### Service Pages

Each service page should use:

- Small technical eyebrow label.
- Strong Space Grotesk headline.
- Short Plus Jakarta Sans explanation.
- One primary CTA.
- One focused visual: workflow, website, dashboard, chatbot, or NFC product.
- Supporting capabilities as concise modules.
- A practical outcome section.
- Final CTA.

### About Page

Keep the page human and direct:

- Who we are.
- What we build.
- How we work.
- Values.
- Selected proof / projects.
- Contact CTA.

## Brand Principle

The final visual balance should be approximately:

**70% warm white / white space  
20% black structure and typography  
10% Wakil Orange energy**

Orange is the signature, not the wallpaper.

The goal is not to make Wakil AI look colorful. The goal is to make the brand feel **clean enough to trust, technical enough to impress, and warm enough to remember.**
