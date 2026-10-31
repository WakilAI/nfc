---
name: Ino Burger
description: A French retro link page in cream, red and yellow.
colors:
  cream: "#fff4d9"
  paper: "#fffaf0"
  red: "#a51e1b"
  wine: "#690b08"
  yellow: "#ffce35"
  ink: "#4d2018"
  muted: "#7a4b3a"
  line: "#d9bda1"
  brand-background: "#480000"
  link-hover: "#ffe9af"
typography:
  body:
    fontFamily: '"Trebuchet MS", Arial, sans-serif'
    fontSize: "13px"
    lineHeight: 1.4
  label:
    fontFamily: '"Trebuchet MS", Arial, sans-serif'
    fontSize: "16px"
    fontWeight: 700
    lineHeight: 1.3
rounded:
  page: "18px"
  link: "12px"
spacing:
  link-gap: "10px"
  icon-gap: "14px"
components:
  link:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.link}"
    padding: "13px 16px"
  link-featured:
    backgroundColor: "{colors.red}"
    textColor: "{colors.cream}"
    rounded: "{rounded.link}"
    padding: "13px 16px"
---

# Design System: Ino Burger

## Overview

**Creative North Star: "Retro Ino"**

Warm cream, burger-sign red and yellow frame the supplied logo. The French page feels welcoming and direct.

**Key Characteristics:**
- Supplied logo and retro checkerboard.
- Six generous vertical link controls.

## Colors

Red emphasizes the first link; yellow accents the logo frame and featured icon. Cream and paper soften the page, wine surrounds it on desktop, and brown text keeps the palette warm.

## Typography

Georgia supplies the italic footer. Trebuchet MS supplies 16px link labels and 13px supporting text with 1.4 line height.

## Layout

Phones are the primary surface. Buttons appear directly beneath the 200px logo, with 18px top spacing and no intro. The centered page caps at 480px; main padding is 18px 26px 28px. At 520px and below, or on coarse-pointer devices including landscape phones, outer margins, rounding and shadow disappear and the page fills at least the viewport height. Horizontal main padding is at least 18px and respects safe-area insets; top and bottom safe areas are also respected. Desktop retains 32px outer vertical margins.

## Elevation & Depth

One desktop page shadow (`0 18px 64px #27030055`); link controls use thin borders. Hover lifts a link by 2px and press lowers it by 1px.

## Shapes

Soft page and link corners pair with a square checkerboard footer and a yellow rule beneath the logo.

## Components

Six stacked links have a 70px minimum height, leading icon, bold label, smaller detail and trailing arrow. The first link is red with cream text and a yellow icon. Other links use paper with brown text and red icons. Hover warms paper or deepens the featured red; keyboard focus uses a 3px wine outline with 4px offset. State transitions take 0.2s; the logo reveals over 0.8s. Reduced motion disables both.

## Do's and Don'ts

- Do retain the supplied logo and French copy.
- Do keep the six link controls in their supplied order.
- Don't replace the established cream, red and yellow direction.
