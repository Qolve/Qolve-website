---
name: Obsidian Grove
colors:
  surface: '#121413'
  surface-dim: '#121413'
  surface-bright: '#383a38'
  surface-container-lowest: '#0d0f0e'
  surface-container-low: '#1a1c1b'
  surface-container: '#1e201f'
  surface-container-high: '#282a29'
  surface-container-highest: '#333534'
  on-surface: '#e2e3e0'
  on-surface-variant: '#c1c8c3'
  inverse-surface: '#e2e3e0'
  inverse-on-surface: '#2f3130'
  outline: '#8b928d'
  outline-variant: '#424844'
  surface-tint: '#adcebd'
  primary: '#adcebd'
  on-primary: '#18362a'
  primary-container: '#2d4b3e'
  on-primary-container: '#99baa9'
  inverse-primary: '#466557'
  secondary: '#c6c7c5'
  on-secondary: '#2f3130'
  secondary-container: '#454746'
  on-secondary-container: '#b5b5b3'
  tertiary: '#c3c7c4'
  on-tertiary: '#2d312f'
  tertiary-container: '#414643'
  on-tertiary-container: '#afb3b0'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#c8ead8'
  primary-fixed-dim: '#adcebd'
  on-primary-fixed: '#012116'
  on-primary-fixed-variant: '#2f4d40'
  secondary-fixed: '#e2e3e0'
  secondary-fixed-dim: '#c6c7c5'
  on-secondary-fixed: '#1a1c1b'
  on-secondary-fixed-variant: '#454746'
  tertiary-fixed: '#e0e3df'
  tertiary-fixed-dim: '#c3c7c4'
  on-tertiary-fixed: '#181d1a'
  on-tertiary-fixed-variant: '#434845'
  background: '#121413'
  on-background: '#e2e3e0'
  surface-variant: '#333534'
typography:
  display-lg:
    fontFamily: Hanken Grotesk
    fontSize: 64px
    fontWeight: '600'
    lineHeight: 72px
    letterSpacing: -0.04em
  headline-xl:
    fontFamily: Hanken Grotesk
    fontSize: 48px
    fontWeight: '500'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '500'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: 0em
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
  stack-xl: 120px
  stack-md: 64px
---

## Brand & Style

The design system embodies an **Eco-Luxury Minimalist** aesthetic, merging the raw textures of deep forest environments with high-end digital precision. It targets a sophisticated audience seeking a premium, serene, and sustainable digital experience.

The visual narrative is defined by:
- **Liquid Glass:** Extensive use of semi-transparent layers that mimic the properties of water and glass, creating a sense of depth and fluidity.
- **Organic Structure:** A strict mathematical grid juxtaposed with organic imagery and textures (dark pine, charcoal stone, and oak).
- **Atmospheric Depth:** Heavy reliance on background blurs and "air" (whitespace) to create a calm, focused environment.
- **High-Precision Detail:** Ultra-thin borders and subtle light leaks that suggest quality craftsmanship and exclusivity.

## Colors

The palette is rooted in the "Dark Forest" concept, utilizing low-luminance greens and mineral charcoals to reduce eye strain and evoke luxury.

- **Primary (Forest Deep):** A muted, dark evergreen used for subtle highlights and primary action states.
- **Secondary (Charcoal):** The core surface color for containers and secondary elements.
- **Neutral (Obsidian):** The base background color, providing a pure, deep canvas.
- **Tertiary (Mist):** A desaturated, light grey used for high-readability text and icons.
- **Glass Overlay:** A translucent white with high-frequency background blur (32px+) to create the signature "Liquid Glass" effect.

## Typography

This design system uses a combination of **Hanken Grotesk** for high-end, sharp displays and **Inter** for functional, utilitarian clarity.

- **Display & Headlines:** Set in Hanken Grotesk with tight letter-spacing to evoke a modern, editorial feel. Large headers should be used sparingly against expansive whitespace.
- **Body & Functional Text:** Set in Inter for maximum legibility. Line heights are generous (1.5x) to maintain the airy, premium feel.
- **Labels:** Always use uppercase with slight tracking (letter-spacing) to differentiate functional metadata from narrative content.

## Layout & Spacing

The layout philosophy follows a **Fixed-Fluid Hybrid** model. Content is contained within a 1280px central track on desktop, while background elements and glass textures bleed to the edge of the viewport.

- **The 8px Grid:** All internal spacing (padding/margins) must be multiples of 8px to ensure mathematical harmony.
- **Vertical Rhythm:** Sections are separated by large "Stack" values (120px) to give the content room to breathe, mimicking the "Apple-inspired" whitespace.
- **Grid:** Use a 12-column grid for desktop with 24px gutters. On mobile, transition to a 4-column grid with 20px side margins.
- **Safe Zones:** Use internal padding of 32px-48px within glass containers to ensure content never feels crowded against the glass edges.

## Elevation & Depth

Depth is not communicated through shadows, but through **Tonal Stacking** and **Refractive Blurs**.

- **Level 0 (Base):** Obsidian (#0D0F0E) - The deep, "infinite" background.
- **Level 1 (Sub-surface):** Charcoal (#1A1C1B) - Solid containers for secondary information.
- **Level 2 (Glass):** Semi-transparent white (3% - 8% opacity) with a `backdrop-filter: blur(40px)`. This is the primary interactive layer.
- **Outlines:** All glass elements feature a 0.5px or 1px solid border in a slightly lighter grey (`rgba(255,255,255,0.1)`) to simulate a "beveled glass" edge that catches the light. Shadows should be avoided or kept extremely faint and large (e.g., 60px blur, 5% opacity).

## Shapes

The shape language is "Soft-Modern." It avoids the playfulness of fully circular pills in favor of structured, elegant rounded rectangles.

- **Standard Elements:** Use `0.5rem` (8px) for buttons and inputs to maintain a crisp, professional look.
- **Glass Cards:** Use `rounded-xl` (1.5rem / 24px) to emphasize the "liquid" feel of the containers. 
- **Icons:** Use linear, 1.5pt stroke icons with rounded caps to match the typography's weight and the corner radius of the UI components.

## Components

### Buttons
- **Primary:** Solid Forest Green (#2D4B3E) with Mist text. Subtle 1px inner light border.
- **Ghost/Glass:** Transparent background with a 1px Mist border. On hover, increase background opacity to 10% and apply a 20px blur.

### Glass Cards
The signature component. Must feature a `backdrop-filter: blur(40px)`, a `background: rgba(255,255,255,0.03)`, and a 1px border `rgba(255,255,255,0.1)`.

### Input Fields
Minimalist underlines or very subtle 3% white fills. Use Inter (Body-md) for input text. Focus state is indicated by a Forest Green 1px border.

### Chips/Tags
Small, `rounded-lg` elements with a 10% Forest Green fill and Label-sm typography. Used for categorizing eco-materials or product features.

### Navigation
A fixed "floating" glass bar at the top of the viewport. Must have the liquid glass effect to allow background photography to peek through as the user scrolls.

### Textures
Integrate high-resolution, low-contrast photography of pine needles, dark wood grain, or charcoal stone as background elements behind glass layers to ground the digital UI in physical "eco-luxury."