---
title: >-
  Qolve Website Architecture, Fluid Design System, and Celestial Engine Specification
category: synthesis
tags: [frontend, design-system, responsive-architecture, ascii-rendering, scroll-lock]
sources:
  - conversation:2026-08-21
created: 2026-08-21T20:10:00Z
updated: 2026-08-21T20:10:00Z
summary: >-
  Comprehensive architecture and design specification for the Qolve website, including 1:1 dynamic proportional scaling, ASCII celestial shaders, locked scrolling, and component hierarchy.
provenance:
  extracted: 0.95
  inferred: 0.05
base_confidence: 0.95
lifecycle: production
---

# Qolve Website — Architecture, Design System & Layout Specification

## 1. Executive Summary & Core Philosophy
The Qolve website is a high-performance, single-page application built on **React 18 + Vite + Framer Motion**, styled with a custom **Fluid Proportional Design System**. The site combines minimal black-and-white brutalist aesthetic principles with high-tech interactive elements:
- Continuous 3D ASCII Starfield background across all desktop views.
- Real-time rotating ASCII Celestial Spheres (Earth in About section, Moon in Services section).
- 1:1 Pure Proportional Viewport Scaling engine (`calc(100vw / 120)`).
- Presentation-grade locked section scrolling with a floating status HUD.
- Dedicated lightweight mobile experience with isolated branch workflows (`mobile-view`).

---

## 2. Dynamic 1:1 Proportional Resolution Engine

### 2.1 The Mathematical Model
To guarantee that cards, typography, image heights, and celestial bodies maintain **100% visual parity** across 1080p, 1366 × 720, 1440 × 900, 2K, and 4K displays without breaking out of containers:

```css
/* Desktop & Tablet: Base 1rem = calc(100vw / 120) */
@media screen and (min-width: 768px) {
  html {
    font-size: calc(100vw / 120);
  }
}

/* Dedicated Mobile Breakpoint: Fixed baseline for touch ergonomics */
@media screen and (max-width: 767px) {
  html {
    font-size: 15px;
  }
}
```

### 2.2 Viewport Resolution Metrics Table

| Resolution | Width × Height | Root `rem` Base | Visual Scale Ratio | UI & Celestial Integrity |
| :--- | :--- | :--- | :--- | :--- |
| **4K UHD** | 3840 × 2160 | `32.00px` | `2.00×` | Perfectly crisp, proportional spacing |
| **2K QHD** | 2560 × 1440 | `21.33px` | `1.33×` | Exactly identical framing to 1080p |
| **Full HD 1080p** | 1920 × 1080 | `16.00px` | `1.00×` (Reference) | Master design reference standard |
| **MacBook Desktop** | 1440 × 900 | `12.00px` | `0.75×` | Proportional compact fit, 0 overflow |
| **Laptop 768p** | 1366 × 768 | `11.38px` | `0.71×` | Cards fit within single viewport |
| **Laptop 720p** | 1366 × 720 | `11.38px` | `0.71×` | Exact visual clone of 1080p |

---

## 3. Celestial Spheres & ASCII Shaders

### 3.1 ASCII Earth (`AsciiEarth.jsx`)
- **Location**: Section `#about` (`AboutSection.jsx`).
- **Matrix Dimension**: `size={47}` (scaled +12% for bold planetary presence).
- **Font Scaling**: `fontSize: '0.70vw'`, `lineHeight: '0.63vw'`.
- **Framing Coordinates**:
  ```jsx
  style={{
    position: 'absolute',
    right: '-20vw',
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: 1,
    pointerEvents: 'none',
    userSelect: 'none',
  }}
  ```
- **Visual Weight**: Exactly ~60% of the Earth sphere is visible emerging from the right border, framing the 4 bento cards.

### 3.2 ASCII Moon (`AsciiMoon.jsx`)
- **Location**: Section `#services` (`ServicesSection.jsx`).
- **Matrix Dimension**: `size={38}`.
- **Font Scaling**: `fontSize: '0.58vw'`, `lineHeight: '0.52vw'`.
- **Framing Coordinates**:
  ```jsx
  style={{
    position: 'absolute',
    left: '-11vw',
    top: '1.5vw',
    zIndex: 1,
    pointerEvents: 'none',
    userSelect: 'none',
  }}
  ```
- **Surface Detail & Texture**:
  - **Feature `1`**: Dark basaltic Lunar Maria (*Mare Tranquillitatis*, *Oceanus Procellarum*).
  - **Feature `2`**: High-albedo impact crater rims with bright ejecta rays (*Tycho*, *Copernicus*, *Kepler*).
  - **Feature `3`**: Deep central crater floor shadows.
  - **Feature `4`**: Rugged highland topography rendered with procedural spherical perturbations.

---

## 4. Presentation-Grade Locked Section Scrolling

### 4.1 Architecture (`SmoothScrollProvider.jsx`)
- **Sections Sequence**:
  1. `0: #home` — Hero Overview
  2. `1: #about` — About Qolve & Global Lab
  3. `2: #services` — Services & White-Label Solutions
  4. `3: #capabilities` — Sticky Scroll Capabilities
  5. `4: #expertise` — Core Expertise & Telemetry
  6. `5: #pricing` — SLA & Pricing Tiers
  7. `6: #testimonials` — Reviews & Metrics
  8. `7: #blog` — Industry Insights
  9. `8: #contact` — CTA & Contact Routing
- **Interaction Model**:
  - **Wheel & Trackpad Interceptor**: Absorbs rapid trackpad inertia (`650ms` lock cooldown), smoothly animating the viewport with cubic-bezier easing to the exact `offsetTop` of the target section.
  - **Keyboard Support**: <kbd>↓</kbd> / <kbd>↑</kbd>, <kbd>PageDown</kbd> / <kbd>PageUp</kbd>, and <kbd>Space</kbd>.
  - **Floating HUD**: Fixed on the right viewport edge (`right: 1.75rem`), displaying active section badges and enabling direct click-to-glide navigation.

---

## 5. Component Hierarchy & Section Structure

```
App.jsx
 ├── SmoothScrollProvider
 │    ├── ScrollProgress
 │    ├── Navbar (Logo, NavLinks, CTA Button)
 │    ├── main.main-wrapper
 │    │    ├── HeroSection (#home)
 │    │    │    ├── Ascii3DStarfield (theme: dark, variant: hero)
 │    │    │    └── Hero Text, Badges, Actions
 │    │    ├── AboutSection (#about)
 │    │    │    ├── Ascii3DStarfield (variant: about)
 │    │    │    ├── AsciiEarth (size=47, right: -20vw)
 │    │    │    └── Bento Cards Grid (4 uniform compact cards)
 │    │    ├── ServicesSection (#services)
 │    │    │    ├── Ascii3DStarfield (variant: services)
 │    │    │    ├── AsciiMoon (size=38, left: -11vw, top: 1.5vw)
 │    │    │    └── Service Cards (3 interactive image cards)
 │    │    ├── StickyScrollLock (#capabilities)
 │    │    │    └── Pin & Reveal Capabilities Deck
 │    │    ├── ExpertiseSection (#expertise)
 │    │    │    ├── Ascii3DStarfield (variant: expertise)
 │    │    │    └── 3 Dark-Glass Telemetry & Pipeline Cards
 │    │    ├── PricingSection (#pricing)
 │    │    │    └── 3 Transparent & Filled Pricing Cards
 │    │    ├── TestimonialsSection (#testimonials)
 │    │    │    └── Customer Feedback & Metric Carousel
 │    │    ├── BlogSection (#blog)
 │    │    │    └── Thought Leadership Articles
 │    │    └── CtaSection (#contact)
 │    │         └── Dark Final CTA Card with Ambient Light
 │    └── Footer
```

---

## 6. Git Branching & Deployment Strategy

- **`main`**: Production trunk deployed to Vercel production edge.
- **`mobile-view`**: Development and staging branch for mobile-specific optimizations and locked scrolling iterations.
- **`feat/eco-liquid-glass`**: Feature branch synchronized with core releases.
- **Repository URL**: `https://github.com/Qolve/Qolve-website.git`
