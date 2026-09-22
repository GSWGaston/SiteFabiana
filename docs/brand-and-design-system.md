# Brand & Design System — Fabiana Gaston Neuropsicopedagoga

> **Document Purpose**: Defines the visual identity, brand rationale, and component standards for all current and future developers maintaining this project.

---

## 1. Brand Mission & Personality

### Mission Statement
To establish Fabiana Gaston as the most trustworthy and warm neuropsychopedagogy specialist in Porto Alegre and the greater metropolitan area, serving a multi-generational clientele while maintaining the highest scientific standards.

### Brand Archetypes
| Archetype | Expression |
|---|---|
| **The Caregiver** | Empathy, warmth, safety — communicates that patients are in good hands |
| **The Sage** | Scientific authority, evidence-based, credentialed expertise |
| **The Innocent** | Child-friendly warmth, non-threatening, accessible language |

### Personality Traits
- **Warm but credentialed**: Never cold or clinical, yet always scientifically grounded
- **Approachable for families**: Plain language, no intimidating jargon in copy
- **Multi-generational**: Explicitly serves ages 0–100+ — avoids feeling exclusively pediatric
- **Locally rooted**: Strong Porto Alegre identity reinforces trust and proximity

### Why This Balance Matters
Neuropsychopedagogy serves children (requiring pediatric warmth to attract families) AND adults/seniors (requiring clinical authority to be taken seriously). The color palette and copy intentionally walk the line between both: purple establishes authority, blue adds optimism, and the copy always leads with empathy before credentials.

---

## 2. Color Palette

### Primary Brand Colors

| Token | Hex | Name | Semantic Role |
|---|---|---|---|
| `grape` | `#4F4878` | Dusty Grape | H1/H2 headings, footer background, deep card accents, primary text |
| `pacific` | `#06A1BC` | Pacific Blue | Primary CTA buttons, active nav states, key icons, links |
| `neon-pink` | `#F52C75` | Neon Pink | Children's section accent, badges, notification pills, heart motifs |
| `orange` | `#FD8303` | Princeton Orange | Feature tags, star ratings, warm highlights, adult/senior accents |
| `moss` | `#82B42D` | Lime Moss | Checkmarks, success states, green "growth" badges, families section |

### Background Colors

| Token | Hex | Name | Usage |
|---|---|---|---|
| `white` | `#FFFFFF` | Pure White | Page base, card backgrounds |
| `surface` | `#FAF9FC` | Soft Lavender-Gray | Section alternating backgrounds, secondary card fills |
| `surface-dark` | `#4F4878` | Dusty Grape | Final CTA banner background |
| `dark-footer` | `#1a1830` | Near-Black Purple | Footer background — deeper than grape, prevents harshness |

### Why No Pure Black (`#000000`)
Pure black creates harshness that conflicts with the warm, empathetic brand personality. All dark text uses `#4F4878` (grape) or `#374151` (slate-700), which are perceptually warm and brand-consistent.

### Color Accessibility
- All body text on white backgrounds: WCAG AA compliant (≥ 4.5:1 contrast ratio)
- CTA buttons (`#06A1BC` with white text): WCAG AA compliant
- Avoid placing `#F52C75` (neon pink) text on white for body copy — use for decorative accents only

---

## 3. Typography

### Font Stack

| Role | Font Family | Fallback |
|---|---|---|
| **Headings** | Poppins | system-ui, sans-serif |
| **Body / UI** | Inter | system-ui, sans-serif |

Both fonts are loaded from Google Fonts via the `<head>` of `index.html` using `display=swap` for performance.

### Type Hierarchy

| Level | Font | Weight | Size (Desktop) | Color |
|---|---|---|---|---|
| H1 (Hero) | Poppins | 800 | `clamp(2rem, 5vw, 3.25rem)` | `#4F4878` |
| H2 (Section) | Poppins | 800 | `clamp(1.75rem, 4vw, 2.6rem)` | `#4F4878` |
| H3 (Card title) | Poppins | 700 | `1.15–1.25rem` | `#4F4878` |
| Subtitle/Lead | Inter | 400 | `1.05rem` | `#64748b` (slate-500) |
| Body | Inter | 400 | `0.9–0.96rem` | `#4a5568` (slate-600) |
| Caption/Meta | Inter | 500–600 | `0.78–0.82rem` | `#8b8ba8` |

### Line Heights
- Headings: `1.15–1.2`
- Subtitles: `1.7`
- Body paragraphs: `1.75–1.8`
- List items: `1.55`

---

## 4. Component Standards

### Buttons

| Variant | Background | Border | Radius | Usage |
|---|---|---|---|---|
| **Primary** | `linear-gradient(135deg, #06A1BC, #057f95)` | None | `9999px` (pill) | Main CTAs (WhatsApp) |
| **Ghost** | `transparent` | `2px solid rgba(79,72,120,0.3)` | `9999px` | Secondary actions |
| **Banner CTA** | `#FFFFFF` | None | `9999px` | On dark grape backgrounds |

**Hover States:**
- Primary: `translateY(-3px)` + elevated shadow
- Ghost: Fill `rgba(79,72,120,0.06)` + darken border
- Banner CTA: Background → `#06A1BC`, text → `#fff`

**Transitions**: `0.25s ease` for all button interactions.

### Cards

- **Background**: `#fff` (on surface sections) or `#FAF9FC` (on white sections)
- **Border**: `1px solid rgba(79,72,120,0.07)`
- **Border Radius**: `20px` (standard) or `16px` (compact)
- **Shadow (resting)**: `0 10px 30px -10px rgba(79,72,120,0.10)`
- **Shadow (hover)**: `0 20px 40px -10px rgba(79,72,120,0.20)`
- **Hover Transform**: `translateY(-6px)`
- **Transition**: `transform 0.3s ease, box-shadow 0.3s ease`

### Badge Pills
- **Background**: `rgba(color, 0.08–0.12)`
- **Border**: `1px solid rgba(color, 0.15–0.2)`
- **Radius**: `9999px`
- **Font**: Poppins, 700, uppercase, `0.78rem`, `letter-spacing: 0.05em`

### Accent Top Bars (on audience cards)
- Height: `5px`
- Background: `linear-gradient(90deg, colorA, colorB)`
- Used to quickly communicate which audience segment the card serves

### Section Alternation
| Odd sections | Even sections |
|---|---|
| `#fff` (white) | `#FAF9FC` (surface) |

This creates a subtle visual rhythm without harsh dividers.

---

## 5. Spacing & Layout

### Container Max-Widths
- Standard sections: `max-width: 1200px`
- FAQ (centered text): `max-width: 800px`
- Conversion banner: `max-width: 750px`

### Grid System
All grids use CSS Grid with responsive breakpoints:
- **Mobile (default)**: `1fr` (single column)
- **Tablet (768px+)**: `repeat(2, 1fr)` or `repeat(4, 1fr)` for credentials
- **Desktop (900px+)**: `repeat(3, 1fr)` or `1fr 1.2fr` (about section)

### Padding Scale
- Mobile: `5rem 1.25rem`
- Tablet: `6rem 2rem`
- Desktop: `7rem 4rem`

---

## 6. Decorative Language

The site uses a set of consistent decorative micro-elements to add warmth without clutter:

- **Floating SVG tags** over portrait images (pills with emoji + text, `animation: float`)
- **Radial gradient blobs** as section background decorations
- **Dot grids** (3×3 arrays of small colored circles) as corner accents
- **Large faded step numbers** (opacity 0.08) as watermark backgrounds in service cards
- **Colored left-border accent bars** on step cards (4px wide, vertical gradient)
- **Quote marks** in `Georgia` serif at large size, low opacity, as pull-quote decorations
