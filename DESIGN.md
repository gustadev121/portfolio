---
name: Gustavo Sequeiros Portfolio
description: Modern developer portfolio featuring layered ambient atmosphere, glassmorphism surfaces, and tactile micro-interactions
colors:
  primary: "#0380d4"
  primary-foreground: "#e46707"
  secondary: "#205695"
  secondary-foreground: "#0d2b72"
  tertiary: "#0363d0"
  accent: "#0a6fe3"
  muted: "#7b7b7c"
  button: "#c9d2f7"
  button-foreground: "#02286e"
  dark-primary: "#020f58"
  dark-primary-foreground: "#ffd62c"
  dark-secondary: "#04428e"
  dark-secondary-foreground: "#ffffff"
  dark-tertiary: "#395dff"
  dark-accent: "#ea780e"
  dark-muted: "#ffd69c"
  dark-button: "#02183a"
  dark-button-foreground: "#0088ff"
typography:
  display:
    fontFamily: "'Fredoka Variable', sans-serif"
    fontSize: "clamp(2.5rem, 5vw, 3.75rem)"
    fontWeight: 500
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "'Fredoka Variable', sans-serif"
    fontSize: "clamp(1.75rem, 3.5vw, 2.25rem)"
    fontWeight: 500
    lineHeight: 1.2
  title:
    fontFamily: "'Fredoka Variable', sans-serif"
    fontSize: "1.5rem"
    fontWeight: 500
    lineHeight: 1.3
  body:
    fontFamily: "'Figtree Variable', sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "'Figtree Variable', sans-serif"
    fontSize: "0.875rem"
    fontWeight: 500
    lineHeight: 1.4
rounded:
  sm: "8px"
  md: "12px"
  lg: "16px"
  full: "9999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  xxl: "48px"
components:
  button-primary:
    backgroundColor: "{colors.button}"
    textColor: "{colors.button-foreground}"
    rounded: "{rounded.full}"
    padding: "8px 16px"
  card-surface:
    backgroundColor: "rgba(32, 86, 149, 0.15)"
    textColor: "{colors.secondary-foreground}"
    rounded: "{rounded.lg}"
    padding: "24px"
---

# Design System: Gustavo Sequeiros Portfolio

## Overview

**Creative North Star: "The Modern Craftsperson's Sanctuary"**

The visual language balances technical precision with friendly, tactile warmth. Grounded in deep celestial blues with luminous amber accents, the interface combines frosted glassmorphism, responsive ambient glows, and snappy micro-interactions that make every tap feel immediate and rewarding.

**Key Characteristics:**
- Layered ambient depth through subtle backdrop glows that adapt between light and dark themes.
- Tactile, physics-inspired press feedback (`scale(0.97)`) on all interactive triggers.
- High-contrast, expressive typography pairing Fredoka display headings with Figtree body text.
- Glassmorphism containers with subtle borders and balanced internal padding.

## Colors

A dynamic dual-mode palette centered around deep atmospheric blues and vibrant energetic accents.

### Primary
- **Cerulean Ocean** (`#0380d4` in light mode, `#020f58` in dark mode): Defines brand authority and major surface accents.
- **Tangerine Spark / Golden Sun** (`#e46707` in light, `#ffd62c` in dark): Used for primary text highlights, section titles, and active branding marks.

### Secondary
- **Deep Slate Blue** (`#205695` in light, `#04428e` in dark): The foundation for card backgrounds and container structures.

### Neutral & Text
- **Navy Indigo / Pure White** (`#0d2b72` in light, `#ffffff` in dark): Primary reading text with optimal contrast against glass backdrops.
- **Periwinkle / Deep Midnight** (`#c9d2f7` in light, `#02183a` in dark): Distinctive pill backgrounds for navigation docks and buttons.

### Named Rules
**The High Contrast Rule.** Text highlights must always maintain WCAG AAA contrast against both light glass backgrounds and dark atmospheric surfaces.

## Typography

**Display Font:** Fredoka Variable (with sans-serif fallback)
**Body Font:** Figtree Variable (with sans-serif fallback)

**Character:** Friendly and modern with geometric warmth. Fredoka provides distinctive character to headings, while Figtree ensures clean, legible reading comfort for descriptions and body copy.

### Hierarchy
- **Display** (500, `clamp(2.5rem, 5vw, 3.75rem)`, 1.1): Hero name and primary branding.
- **Headline** (500, `clamp(1.75rem, 3.5vw, 2.25rem)`, 1.2): Section titles with ornamental hr divider accents.
- **Title** (500, `1.5rem`, 1.3): Project card titles and subtitle roles.
- **Body** (400, `1rem` to `1.25rem`, 1.6): Project descriptions, bio narratives, and paragraphs (max 65ch width).
- **Label** (500, `0.75rem` to `0.875rem`, 1.4): Tag badges, navigation labels, and floating tooltips.

## Layout

- **Spatial Model**: Centered container layout (`max-w-6xl`) with generous vertical rhythm (`my-14` to `my-28`).
- **Floating Island Navigation**: A floating pill dock (`size-max`) centered on desktop and accessible on mobile edges.
- **Responsive Grid**: Adaptive project cards (`grid-cols-1 md:grid-cols-2`) and centered wrapping tech chips.

## Elevation & Depth

Surfaces use glassmorphism with subtle borders and layered ambient lighting rather than heavy opaque drop shadows.

### Shadow Vocabulary
- **Nav Shadow** (`box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.3)`): Grounds the floating navigation dock.
- **Container Shadow** (`box-shadow: 0px 0px 6px 4px rgba(0, 0, 0, 0.3)`): Soft diffuse glow for cards and avatars.

### Named Rules
**The Glass and Border Rule.** Every elevated card or dock combines translucent backgrounds (`backdrop-blur-xl bg-navbar/85`) with subtle hairline borders (`border-white/10` or `border-secondary/25`) to separate from ambient lighting.

## Shapes

- **Corner Language**: Generous, smooth radii with `rounded-2xl` (16px) for cards, `rounded-xl` (12px) for menu containers, and `rounded-full` (9999px) for buttons and tag chips.
- **Avatar & Images**: Circular profile framing and 16:9 (`aspect-video`) card media with smooth overflow clipping.

## Components

### Buttons
- **Shape:** Pill (`rounded-full`) with 1px border.
- **Colors:** `bg-button` with `text-button-foreground` transitioning to `hover:border-accent hover:text-accent`.
- **Tactile State:** Active press scales down to `scale(0.97)` within 150ms with custom cubic-bezier easing.

### Project Cards
- **Corner Style:** `rounded-2xl` (16px) with `backdrop-blur-xs`.
- **Image Container:** Framed `aspect-video` with gentle hover scale (`scale(1.05)`).
- **CTA Row:** Bottom-aligned with border divider and preview/source action buttons.

### Navigation Dock
- **Style:** Frosted glass pill container with active section indicator (`bg-accent/15 text-accent stroke-accent`).
- **Interactive:** Smooth hit-area expansion and scale transitions on hover and active click.

### Tech Chips
- **Shape:** `rounded-2xl` square badges with backdrop blur.
- **Tooltips:** Floating dark/glass tooltips with smooth vertical fade-in.

## Do's and Don'ts

### Do:
- **Do** maintain bilingual translations (`es` / `en`) for all new UI copy.
- **Do** use `@tabler/icons-astro` components directly with `stroke="currentColor"`.
- **Do** include tactile press states (`active:scale-[0.97]`) on clickable UI elements.
- **Do** preserve glassmorphism borders on translucent cards.

### Don't:
- **Don't** add artificial pulsating badges or generic AI aesthetic clichés.
- **Don't** import raw SVG files into `src/assets/icons/`.
- **Don't** use opaque flat containers that obstruct the ambient lighting background.
