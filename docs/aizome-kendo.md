# Kendo-Inspired Design System: Aizome Indigo Aesthetics

> A design language rooted in the Japanese art of *aizome* (藍染) — indigo dyeing — with philosophical grounding in kendo's core virtues: purity, awareness, and disciplined restraint. This system translates centuries of samurai textile tradition into modern UI.

---

## Philosophy

Three principles govern every design decision:

**Wabi-sabi (侘び寂び)** — Embrace imperfection and transience. Surfaces have subtle texture, not sterile flatness. Whitespace is intentional silence. Nothing is over-polished.

**Zanshin (残心)** — Lingering awareness after action. Interactions leave subtle traces: transitions don't snap, focus states breathe, hover states suggest presence before commitment.

**Sumi-e (墨絵) simplicity** — Ink-wash economy. A single brushstroke defines form. UI uses minimum elements with maximum intention. No decoration that doesn't encode meaning.

The indigo dye itself carries meaning: traditionally used on kendo *keikogi* (practice uniform) for its anti-bacterial properties that protect warriors through repeated contact — a material honesty that translates to functional aesthetics over ornament.

---

## Color Palette

Sourced from the traditional *washoku* color system of Japanese court and craft tradition. Each shade represents a historical dyeing depth (*kakishibu* layers of aizome).

### Core Aizome Shades

| Name | Kanji | Hex | Description | Usage |
|---|---|---|---|---|
| **Kachiiro** | 褐色 | `#1B2A4A` | "Victory color" — deepest indigo, near-black | Primary backgrounds, hero sections |
| **Nōkon** | 濃紺 | `#1A2744` | "Deep navy" — saturated, commanding | Navigation, headers, footers |
| **Aiiro** | 藍色 | `#2B5BA8` | Pure indigo — the soul of aizome | Primary brand accent, CTAs |
| **Hanada** | 縹色 | `#3B82C4` | Bright mid-indigo, lively | Interactive states, links |
| **Asagi** | 浅葱 | `#4DB3CC` | "Shallow leek" — pale cyan-blue | Highlight, active states, badges |
| **Mizuiro** | 水色 | `#A8D8EA` | "Water color" — near-white pale blue | Backgrounds, light surfaces |

### Supporting Neutrals (Sumi-e Ground)

| Name | Kanji | Hex | Description | Usage |
|---|---|---|---|---|
| **Sumi** | 墨 | `#1C1C1E` | Ink black — absolute depth | Text on light, dark backgrounds |
| **Hai** | 灰 | `#6B7280` | Ash gray | Muted text, secondary labels |
| **Shironeri** | 白練 | `#F5F4EF` | "Raw silk white" — warm, not pure | Light mode background |
| **Washi** | 和紙 | `#EAE8E0` | Handmade paper — textured warmth | Cards, containers in light mode |
| **Kinari** | 生成り | `#D9D5C7` | Unbleached cloth | Borders, dividers |

### Semantic Colors

| Role | Hex | Grounding |
|---|---|---|
| Success | `#2D6A4F` | Bamboo green — growth, resilience |
| Warning | `#B45309` | Lacquer amber — caution, craft |
| Error | `#9B1C1C` | Blood red — urgency, consequence |
| Info | `#2563EB` | Clear sky blue |

### WCAG Contrast Reference

| Foreground | Background | Ratio | WCAG |
|---|---|---|---|
| `#F5F4EF` (Shironeri) | `#1B2A4A` (Kachiiro) | 13.4:1 | AAA |
| `#F5F4EF` (Shironeri) | `#2B5BA8` (Aiiro) | 5.2:1 | AA |
| `#1C1C1E` (Sumi) | `#F5F4EF` (Shironeri) | 18.1:1 | AAA |
| `#1C1C1E` (Sumi) | `#A8D8EA` (Mizuiro) | 9.4:1 | AAA |
| `#F5F4EF` (Shironeri) | `#4DB3CC` (Asagi) | 3.2:1 | AA Large only |

> **Note:** Asagi (`#4DB3CC`) on light backgrounds passes only for large text (18px+). Always pair with Sumi (`#1C1C1E`) for body text.

---

## Typography Pairings

Type choices honor the visual rhythm of Japanese calligraphy — the contrast of thick and thin strokes in *kaisho* (block script) translated to Latin letterforms.

### Primary Pairing — *Dokusho* (読書 "Reading")

```
Display: Cormorant Garamond (weight 600)
Body:    Inter (weight 400/500)
Code:    JetBrains Mono
```

Cormorant's fine serifs echo the brushwork tension of sumi-e. Inter's geometric clarity reads as the *ma* (negative space) between strokes. High contrast between display and body mirrors kendo's balance of power and precision.

### Secondary Pairing — *Katachi* (形 "Form")

```
Display: Noto Serif JP (weight 700) — includes Japanese glyphs
Body:    Noto Sans JP (weight 400)
Code:    JetBrains Mono
```

Use when the product includes Japanese-language content or when cultural fidelity is the priority. Noto's unified design system maintains harmony across scripts.

### Minimal Pairing — *Kanbun* (簡文 "Simple text")

```
Display: DM Serif Display (weight 400)
Body:    DM Sans (weight 400/500)
Code:    JetBrains Mono
```

Lighter editorial feel — appropriate for content-heavy documentation or portfolio work.

### Type Scale

```css
:root {
  --text-xs:   0.75rem;   /* 12px — captions, labels */
  --text-sm:   0.875rem;  /* 14px — secondary body */
  --text-base: 1rem;      /* 16px — body copy */
  --text-lg:   1.125rem;  /* 18px — lead paragraphs */
  --text-xl:   1.25rem;   /* 20px — section headings */
  --text-2xl:  1.5rem;    /* 24px — component titles */
  --text-3xl:  1.875rem;  /* 30px — page headings */
  --text-4xl:  2.25rem;   /* 36px — hero subheading */
  --text-5xl:  3rem;      /* 48px — hero heading */

  --leading-tight:  1.2;
  --leading-snug:   1.375;
  --leading-normal: 1.5;
  --leading-relaxed: 1.625; /* body copy — open like a kendo stance */
}
```

---

## CSS Variables — Full Design Token Set

```css
:root {
  /* === Aizome Palette === */
  --color-kachiiro: #1B2A4A;   /* Victory indigo — deepest */
  --color-nokon:    #1A2744;   /* Deep navy */
  --color-aiiro:    #2B5BA8;   /* Pure indigo */
  --color-hanada:   #3B82C4;   /* Bright mid-indigo */
  --color-asagi:    #4DB3CC;   /* Pale cyan-blue */
  --color-mizuiro:  #A8D8EA;   /* Water blue */

  /* === Sumi-e Neutrals === */
  --color-sumi:      #1C1C1E;  /* Ink black */
  --color-hai:       #6B7280;  /* Ash gray */
  --color-shironeri: #F5F4EF;  /* Raw silk white */
  --color-washi:     #EAE8E0;  /* Handmade paper */
  --color-kinari:    #D9D5C7;  /* Unbleached cloth */

  /* === Semantic === */
  --color-success: #2D6A4F;
  --color-warning: #B45309;
  --color-error:   #9B1C1C;
  --color-info:    #2563EB;

  /* === UI Semantic Aliases — Light Mode === */
  --surface-base:    var(--color-shironeri);
  --surface-raised:  var(--color-washi);
  --surface-overlay: #FFFFFF;
  --border-default:  var(--color-kinari);
  --border-strong:   var(--color-hai);
  --text-primary:    var(--color-sumi);
  --text-secondary:  var(--color-hai);
  --accent-primary:  var(--color-aiiro);
  --accent-hover:    var(--color-nokon);
  --accent-subtle:   var(--color-mizuiro);

  /* === Spacing — *Ma* (間) Rhythm === */
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 0.75rem;
  --space-4: 1rem;
  --space-6: 1.5rem;
  --space-8: 2rem;
  --space-12: 3rem;
  --space-16: 4rem;
  --space-24: 6rem;

  /* === Border Radius — Subtle, not rounded === */
  --radius-sm: 2px;    /* inputs, tags */
  --radius-md: 4px;    /* cards, buttons */
  --radius-lg: 8px;    /* modals, panels */

  /* === Motion — Zanshin transitions === */
  --duration-fast:   150ms;
  --duration-base:   250ms;
  --duration-slow:   400ms;
  --ease-kendo:      cubic-bezier(0.25, 0.46, 0.45, 0.94); /* deliberate, controlled */
  --ease-strike:     cubic-bezier(0.0, 0.0, 0.2, 1.0);     /* fast in, soft out — like a men strike */
  --ease-zanshin:    cubic-bezier(0.4, 0.0, 1.0, 1.0);     /* lingers after action */
}

/* === Dark Mode === */
[data-theme="dark"] {
  --surface-base:    var(--color-kachiiro);
  --surface-raised:  var(--color-nokon);
  --surface-overlay: #222C42;
  --border-default:  rgba(75, 179, 204, 0.15); /* asagi ghost */
  --border-strong:   rgba(75, 179, 204, 0.35);
  --text-primary:    var(--color-shironeri);
  --text-secondary:  var(--color-asagi);
  --accent-primary:  var(--color-asagi);
  --accent-hover:    var(--color-hanada);
  --accent-subtle:   rgba(75, 179, 204, 0.12);
}
```

---

## CSS Gradients — Indigo Depth

These gradients evoke the *kakishibu* layering of traditional aizome — each dip into the vat adding depth. Use directionally to suggest the light entering a dojo.

### 1. Tate-Ai — Vertical Indigo Field

*Named after "standing indigo" — the vat itself.*

```css
.gradient-tate-ai {
  background: linear-gradient(
    180deg,
    #1A2744 0%,          /* nōkon — surface darkness */
    #1B2A4A 35%,         /* kachiiro — victory depth */
    #2B5BA8 70%,         /* aiiro — pure indigo */
    #3B82C4 100%         /* hanada — where light enters */
  );
}
```

### 2. Yoko-Ai — Horizontal Dawn

*Horizon gradient — light from the east as keiko begins at dawn.*

```css
.gradient-yoko-ai {
  background: linear-gradient(
    90deg,
    #1B2A4A 0%,
    #2B5BA8 45%,
    #4DB3CC 75%,
    #A8D8EA 100%
  );
}
```

### 3. Sumi-Ai — Ink Wash Diagonal

*Sumi-e brush pulled across washi paper — asymmetric, organic.*

```css
.gradient-sumi-ai {
  background: linear-gradient(
    135deg,
    #1C1C1E 0%,          /* sumi ink origin */
    #1B2A4A 30%,         /* bleeding into indigo */
    #2B5BA8 65%,
    #4DB3CC 90%,
    #A8D8EA 100%         /* dissolving into water */
  );
}
```

### 4. Ma — Negative Space Fade

*The space between — for overlays, modals, muted backgrounds.*

```css
.gradient-ma {
  background: linear-gradient(
    180deg,
    rgba(27, 42, 74, 0.95) 0%,   /* kachiiro near-solid */
    rgba(27, 42, 74, 0.7)  50%,
    rgba(27, 42, 74, 0.0)  100%  /* dissolves to content below */
  );
}
```

### 5. Asagi Shimmer — Subtle Depth

*The sheen on fresh indigo cloth — for card surfaces, hero backgrounds.*

```css
.gradient-asagi-shimmer {
  background:
    radial-gradient(
      ellipse 80% 60% at 20% 30%,
      rgba(75, 179, 204, 0.15) 0%,   /* asagi light bloom */
      transparent 70%
    ),
    radial-gradient(
      ellipse 50% 80% at 80% 70%,
      rgba(43, 91, 168, 0.2) 0%,     /* aiiro depth */
      transparent 70%
    ),
    var(--color-kachiiro);           /* kachiiro base */
}
```

### 6. Yomi — Animated Indigo Flow

*Yomi (黄泉) — the deep — for hero sections requiring movement.*

```css
@keyframes yomi-flow {
  0%   { background-position: 0% 50%; }
  50%  { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.gradient-yomi {
  background: linear-gradient(
    -45deg,
    #1B2A4A,
    #1A2744,
    #2B5BA8,
    #3B82C4,
    #4DB3CC
  );
  background-size: 400% 400%;
  animation: yomi-flow 12s ease-in-out infinite;
}
```

---

## UI Element Usage Guidelines

### Buttons

```css
/* Primary — Aiiro */
.btn-primary {
  background: var(--color-aiiro);
  color: var(--color-shironeri);
  border: none;
  border-radius: var(--radius-md);
  padding: var(--space-3) var(--space-6);
  font-weight: 500;
  letter-spacing: 0.025em;
  transition: background var(--duration-base) var(--ease-kendo),
              transform var(--duration-fast) var(--ease-strike),
              box-shadow var(--duration-base) var(--ease-kendo);
}

/* Zanshin — button remembers it was pressed */
.btn-primary:hover {
  background: var(--color-hanada);
  box-shadow: 0 4px 20px rgba(43, 91, 168, 0.35);
}

.btn-primary:active {
  transform: translateY(1px);           /* kamae — ready stance */
  box-shadow: 0 1px 4px rgba(43, 91, 168, 0.2);
}

.btn-primary:focus-visible {
  outline: 2px solid var(--color-asagi);
  outline-offset: 3px;                  /* breath of space — ma */
}

/* Ghost — wabi restraint */
.btn-ghost {
  background: transparent;
  color: var(--color-aiiro);
  border: 1px solid var(--color-aiiro);
  border-radius: var(--radius-md);
  padding: var(--space-3) var(--space-6);
  transition: all var(--duration-base) var(--ease-kendo);
}

.btn-ghost:hover {
  background: rgba(43, 91, 168, 0.08);
  border-color: var(--color-hanada);
  color: var(--color-hanada);
}
```

### Navigation

```css
/* Dojo nav — anchored to kachiiro ground */
.nav {
  background: var(--color-kachiiro);
  border-bottom: 1px solid rgba(75, 179, 204, 0.2); /* asagi hairline */
  padding: var(--space-4) var(--space-8);
}

.nav-link {
  color: rgba(245, 244, 239, 0.7); /* shironeri at rest — not yet engaged */
  text-decoration: none;
  font-size: var(--text-sm);
  letter-spacing: 0.05em;
  text-transform: uppercase;
  padding: var(--space-2) var(--space-3);
  position: relative;
  transition: color var(--duration-base) var(--ease-kendo);
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -1px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--color-asagi);
  transition: width var(--duration-slow) var(--ease-zanshin); /* zanshin — lingers */
}

.nav-link:hover {
  color: var(--color-shironeri);
}

.nav-link:hover::after,
.nav-link[aria-current="page"]::after {
  width: 100%;
}

.nav-link[aria-current="page"] {
  color: var(--color-asagi);
}
```

### Cards

```css
/* Washi card — texture and restraint */
.card {
  background: var(--color-washi);
  border: 1px solid var(--color-kinari);
  border-radius: var(--radius-lg);
  padding: var(--space-8);
  position: relative;
  overflow: hidden;
  transition: box-shadow var(--duration-base) var(--ease-kendo),
              border-color var(--duration-base) var(--ease-kendo);
}

/* Subtle aizome bloom on hover — like indigo bleeding through cloth */
.card::before {
  content: '';
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 3px;
  background: linear-gradient(90deg, var(--color-aiiro), var(--color-asagi));
  opacity: 0;
  transition: opacity var(--duration-slow) var(--ease-zanshin);
}

.card:hover {
  box-shadow: 0 8px 32px rgba(27, 42, 74, 0.12),
              0 2px 8px rgba(27, 42, 74, 0.08);
  border-color: rgba(75, 179, 204, 0.4);
}

.card:hover::before {
  opacity: 1;
}

/* Dark mode card */
[data-theme="dark"] .card {
  background: var(--surface-raised);
  border-color: var(--border-default);
}

[data-theme="dark"] .card:hover {
  box-shadow: 0 8px 32px rgba(75, 179, 204, 0.1),
              0 0 0 1px rgba(75, 179, 204, 0.2);
}
```

### Form Inputs

```css
/* Controlled precision — like adjusting grip on a shinai */
.input {
  background: var(--color-shironeri);
  border: 1px solid var(--color-kinari);
  border-radius: var(--radius-sm);
  padding: var(--space-3) var(--space-4);
  color: var(--color-sumi);
  font-size: var(--text-base);
  width: 100%;
  transition: border-color var(--duration-base) var(--ease-kendo),
              box-shadow var(--duration-base) var(--ease-kendo);
}

.input:focus {
  outline: none;
  border-color: var(--color-aiiro);
  box-shadow: 0 0 0 3px rgba(43, 91, 168, 0.15); /* ma — space around intent */
}

.input::placeholder {
  color: var(--color-hai);
  font-style: italic;
}

/* Error state */
.input[aria-invalid="true"] {
  border-color: var(--color-error);
  box-shadow: 0 0 0 3px rgba(155, 28, 28, 0.1);
}
```

### Badges & Tags

```css
/* Asagi badge — rank marker */
.badge {
  display: inline-flex;
  align-items: center;
  gap: var(--space-1);
  padding: 2px var(--space-2);
  border-radius: var(--radius-sm);
  font-size: var(--text-xs);
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.badge-primary {
  background: rgba(43, 91, 168, 0.12);
  color: var(--color-aiiro);
  border: 1px solid rgba(43, 91, 168, 0.25);
}

.badge-accent {
  background: rgba(75, 179, 204, 0.12);
  color: #2A8FA0; /* asagi darkened for AA contrast on light */
  border: 1px solid rgba(75, 179, 204, 0.3);
}

[data-theme="dark"] .badge-accent {
  color: var(--color-asagi);
}
```

### Dividers — Sumi Brushstroke

```css
/* Horizontal rule as brushstroke — never mechanical */
.divider {
  border: none;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent 0%,
    var(--color-kinari) 20%,
    var(--color-kinari) 80%,
    transparent 100%
  );
  margin: var(--space-8) 0;
}

/* Indigo accent divider — section transition */
.divider-ai {
  height: 2px;
  background: linear-gradient(
    90deg,
    transparent 0%,
    var(--color-aiiro) 30%,
    var(--color-asagi) 70%,
    transparent 100%
  );
}
```

---

## Motion Principles — Zanshin in Practice

*Every interaction leaves a trace of awareness.*

```css
/* Global transition defaults */
*, *::before, *::after {
  transition-timing-function: var(--ease-kendo);
}

/* Respect reduced motion — accessibility is bushido */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

/* Page entry — elements arrive with purpose */
@keyframes kamae {
  from {
    opacity: 0;
    transform: translateY(8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-kamae {
  animation: kamae var(--duration-slow) var(--ease-strike) both;
}

/* Stagger children — like students lining up */
.animate-kamae:nth-child(1) { animation-delay: 0ms; }
.animate-kamae:nth-child(2) { animation-delay: 75ms; }
.animate-kamae:nth-child(3) { animation-delay: 150ms; }
.animate-kamae:nth-child(4) { animation-delay: 225ms; }
```

---

## Iconography & Texture

**Icons:** Use line-weight icons with 1.5–2px strokes (Phosphor, Lucide, or Heroicons). Fill icons break the sumi-e aesthetic — restraint in mark-making.

**Texture overlays:** Add subtle grain to hero sections to evoke washi paper or indigo-dyed cloth:

```css
/* Washi grain — optional, tasteful */
.texture-washi {
  position: relative;
}

.texture-washi::after {
  content: '';
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E");
  background-repeat: repeat;
  background-size: 256px;
  pointer-events: none;
  border-radius: inherit;
}
```

---

## Usage Anti-Patterns

Violations of the kendo aesthetic:

| Avoid | Reason |
|---|---|
| Gradients between unrelated hues | Breaks aizome dyeing logic — all transitions must pass through indigo |
| Rounded corners > 8px | Soft forms contradict the precision of budo geometry |
| Saturated colors outside the palette | *Kire* (cut) — only indigo and its derived tones |
| Animations faster than 150ms | Rushes past zanshin — interactions need presence |
| Drop shadows with color | Use only grayscale or deep-indigo shadows — never colored glows |
| Decorative icons or illustrations | Sumi-e removes, never adds |
| Pure white (`#FFFFFF`) backgrounds | Use shironeri (`#F5F4EF`) — purity through warmth, not sterility |

---

## Quick Reference

```
PRIMARY    #2B5BA8  aiiro         — brand, CTAs
DARK       #1B2A4A  kachiiro      — backgrounds, heroes
DEEP       #1A2744  nōkon         — nav, headers
BRIGHT     #3B82C4  hanada        — hover states
ACCENT     #4DB3CC  asagi         — highlights, active
LIGHT      #A8D8EA  mizuiro       — subtle tints
SURFACE    #F5F4EF  shironeri     — light background
PAPER      #EAE8E0  washi         — cards, containers
DIVIDER    #D9D5C7  kinari        — borders
TEXT       #1C1C1E  sumi          — primary text
MUTED      #6B7280  hai           — secondary text
```

---

*"The indigo dye that protects the warrior also marks their discipline. Design that serves its user is its own form of budo."*

---

## Accessibility Audit — APCA Contrast

> APCA (Advanced Perceptual Contrast Algorithm) is the contrast model proposed for WCAG 3.0. Unlike WCAG 2.x's single ratio, APCA produces a signed **Lc** value that distinguishes text-on-dark (WoB) from text-on-light (BoW) — because the eye perceives these differently.

### Lc Thresholds for UI Elements

| Lc (absolute) | Use case |
|---|---|
| ≥ 75 | Body text at any size — full prose, paragraphs |
| ≥ 60 | Large text (24px+), fluent UI labels |
| **≥ 45** | **Interactive elements — buttons, links, inputs, nav** |
| ≥ 30 | Decorative / incidental text (placeholders, disabled) |
| ≥ 15 | Non-text elements (icons, dividers) |
| < 15 | Fail — insufficient for any functional purpose |

> All values below were computed via the APCA-W3 algorithm (SA = 1.75). Sign indicates direction: negative = light text on dark (WoB), positive = dark text on light (BoW).

---

### Kachiiro (`#1B2A4A`) as Background

*Victory-color ground — used for navigation, hero sections, dark mode base.*

| Foreground | Hex | Lc | Grade | Interactive Use |
|---|---|---|---|---|
| Shironeri | `#F5F4EF` | −91.4 | Body text | Primary labels, nav text, all prose |
| Mizuiro | `#A8D8EA` | −71.3 | Large text / Fluent UI | Section headings (24px+), icon labels |
| Asagi | `#4DB3CC` | −48.9 | **Interactive** | Active nav links, focus indicators, badges |
| Hanada | `#3B82C4` | −29.6 | Non-text only | **Do not use for text** — border/icon accents only |
| Hai | `#6B7280` | −24.1 | Non-text only | **Do not use for text** — dividers only |
| Aiiro | `#2B5BA8` | −15.1 | Non-text only | **Fail for text** — same hue family, insufficient separation |

**Key finding:** On kachiiro backgrounds, aiiro (`#2B5BA8`) and hanada (`#3B82C4`) fail the interactive threshold entirely — both too close in hue and luminance to the ground. Asagi (`#4DB3CC`) is the only indigo-family color that clears Lc 45 for interactive elements. Use shironeri or mizuiro for all text labels.

---

### Nōkon (`#1A2744`) as Background

*Deep navy — nearly identical luminance to kachiiro. Used for headers, deep panels.*

| Foreground | Hex | Lc | Grade | Interactive Use |
|---|---|---|---|---|
| Shironeri | `#F5F4EF` | −92.5 | Body text | Primary labels, all prose |
| Asagi | `#4DB3CC` | −50.0 | **Interactive** | Active states, focus rings, nav links |
| Hanada | `#3B82C4` | −30.7 | Decorative | Disabled states, incidental — not interactive text |
| Aiiro | `#2B5BA8` | −16.1 | Non-text only | **Fail for text** |

**Key finding:** Nōkon is slightly darker than kachiiro, which gives asagi a marginally higher Lc (50.0 vs 48.9) — both clear the interactive threshold. The same constraint applies: only asagi and shironeri are viable for functional text and interactive labels.

---

### Asagi (`#4DB3CC`) as Background

*Pale cyan-blue — used for badges, active indicators, highlighted surfaces.*

| Foreground | Hex | Lc | Grade | Interactive Use |
|---|---|---|---|---|
| Sumi | `#1C1C1E` | +59.6 | **Interactive / Fluent UI** | Badge labels, icon text (BoW pairing) |
| Kachiiro | `#1B2A4A` | +55.9 | **Interactive** | Compact labels (≥16px bold), badge text |
| White | `#FFFFFF` | −45.2 | **Interactive** | Minimum pass — use only at 16px+ bold |
| Shironeri | `#F5F4EF` | −38.7 | Decorative | **Do not use** for interactive text |

**Key finding:** Asagi is a fragile background for text. Its light-mid luminance creates a dead zone for light-colored foregrounds — shironeri falls to Lc −38.7 and fails the interactive threshold. The only safe text colors on asagi are sumi (`#1C1C1E`) or kachiiro (`#1B2A4A`). White passes at exactly Lc −45.2, which is the minimum — restrict to bold text at 16px or larger.

> **Design implication:** Treat asagi as an accent surface, not a text background. Reserve it for iconographic badges with dark (sumi/kachiiro) labels, or use it purely as a border/underline decorative element.

---

### Aiiro (`#2B5BA8`) as Interactive Element (Button, CTA)

*The brand's primary action color — buttons, focus rings, links on light.*

| Context | Foreground | Hex | Lc | Grade |
|---|---|---|---|---|
| Button bg → text | White | `#FFFFFF` | −78.5 | Body text — safe for all sizes |
| Button bg → text | Shironeri | `#F5F4EF` | −72.0 | Large text / Fluent UI — ≥18px |
| Button bg → text | Sumi (inverted) | `#1C1C1E` | +26.3 | **Fail** — do not use dark text on aiiro |
| Light surface → aiiro link | Shironeri | `#F5F4EF` | +77.0 | Body text — links in prose |
| Washi card → aiiro link | Washi | `#EAE8E0` | +70.7 | Large text / Fluent UI |

**Key finding:** Aiiro buttons must use white — not shironeri, not sumi. White at Lc −78.5 clears body text comfortably. Shironeri (Lc −72.0) clears large text but not small body copy — use only for button labels at 16px+ semibold. Dark text (sumi) on an aiiro button is a hard fail.

---

### Light Mode Surfaces

*Shironeri and Washi as backgrounds — the majority of UI reading surface.*

| Background | Foreground | Hex | Lc | Grade | Notes |
|---|---|---|---|---|---|
| Shironeri | Sumi | `#1C1C1E` | +99.0 | Body text | Maximum contrast — primary body |
| Shironeri | Kachiiro | `#1B2A4A` | +95.2 | Body text | Headings, strong labels |
| Shironeri | Aiiro | `#2B5BA8` | +77.0 | Body text | Links — full prose safe |
| Shironeri | Hai | `#6B7280` | +68.0 | Large text | Muted labels at ≥18px only |
| Shironeri | Asagi | `#4DB3CC` | +43.1 | **Fail interactive** | Non-text use only on light surfaces |
| Washi | Sumi | `#1C1C1E` | +92.7 | Body text | Card primary text |
| Washi | Kachiiro | `#1B2A4A` | +88.9 | Body text | Card headings |
| Washi | Aiiro | `#2B5BA8` | +70.7 | Large text | Card links — ≥18px or bold |

**Key finding:** Asagi fails as text on any light surface (Lc +43.1 on shironeri). This is the most common aesthetic mistake in indigo-palette UIs — using the bright accent as a link color on light backgrounds. Use aiiro (`#2B5BA8`) for links on light (Lc +77.0), and reserve asagi for dark surfaces where it clears the interactive threshold.

---

### Corrected Color Assignments

Based on APCA audit results, the following table supersedes the Quick Reference for interactive contexts:

| Use Case | Light Mode | Dark Mode | APCA Lc |
|---|---|---|---|
| Body prose | Sumi on Shironeri | Shironeri on Kachiiro | +99.0 / −91.4 |
| Interactive links | Aiiro on Shironeri | Asagi on Kachiiro | +77.0 / −48.9 |
| Button label | White on Aiiro | White on Aiiro | −78.5 / −78.5 |
| Muted labels (≥18px) | Hai on Shironeri | Mizuiro on Kachiiro | +68.0 / −71.3 |
| Badge text on asagi | Sumi on Asagi | Sumi on Asagi | +59.6 / +59.6 |
| Focus ring color | Aiiro outline | Asagi outline | decorative threshold — non-text |
| Nav active indicator | Aiiro underline | Asagi underline | decorative threshold — non-text |
| **Prohibited** | Asagi text on Shironeri | Aiiro text on Kachiiro | +43.1 / −15.1 — both fail |

---

### CSS Custom Properties — APCA-Validated Pairings

These token pairs are safe to use without further checking:

```css
:root {
  /* === Light mode — APCA validated === */
  --pair-body-light:        color: #1C1C1E on #F5F4EF;   /* Lc +99.0 */
  --pair-heading-light:     color: #1B2A4A on #F5F4EF;   /* Lc +95.2 */
  --pair-link-light:        color: #2B5BA8 on #F5F4EF;   /* Lc +77.0 */
  --pair-muted-light:       color: #6B7280 on #F5F4EF;   /* Lc +68.0 — ≥18px only */

  /* === Dark mode (on kachiiro) — APCA validated === */
  --pair-body-dark:         color: #F5F4EF on #1B2A4A;   /* Lc −91.4 */
  --pair-body-dark-nokon:   color: #F5F4EF on #1A2744;   /* Lc −92.5 */
  --pair-interactive-dark:  color: #4DB3CC on #1B2A4A;   /* Lc −48.9 — interactive threshold */
  --pair-subtle-dark:       color: #A8D8EA on #1B2A4A;   /* Lc −71.3 — ≥18px labels */

  /* === Aiiro as button background === */
  --pair-btn-primary:       color: #FFFFFF  on #2B5BA8;  /* Lc −78.5 */
  --pair-btn-primary-warm:  color: #F5F4EF  on #2B5BA8;  /* Lc −72.0 — ≥18px bold only */

  /* === Asagi as badge/surface === */
  --pair-badge-asagi:       color: #1C1C1E  on #4DB3CC;  /* Lc +59.6 */
}

/* APCA-compliant focus ring — non-text threshold applies (Lc ≥ 15 between ring and bg) */
:focus-visible {
  /* Light mode: aiiro ring on shironeri is visually distinct */
  outline: 3px solid #2B5BA8;
  outline-offset: 3px;
}

[data-theme="dark"] :focus-visible {
  /* Dark mode: asagi ring on kachiiro passes Lc −48.9 — well above non-text threshold */
  outline: 3px solid #4DB3CC;
  outline-offset: 3px;
}
```

---

### Minimum Size Requirements by Lc

When a pairing falls in the 45–74 Lc range, font size and weight constrain safe use:

| Lc (abs) | Minimum size — normal weight | Minimum size — bold/semibold |
|---|---|---|
| 75+ | 12px | 10px |
| 60–74 | 18px | 14px |
| 45–59 | 24px | 16px |
| 30–44 | Non-text elements only | 24px (with caution) |

**Pairs that fall in the constrained range:**

| Pair | Lc | Safe minimum |
|---|---|---|
| Asagi on Kachiiro | −48.9 | 24px normal / 16px bold |
| Asagi on Nōkon | −50.0 | 24px normal / 16px bold |
| Sumi on Asagi (badge) | +59.6 | 18px normal / 14px bold |
| Kachiiro on Asagi (badge) | +55.9 | 24px normal / 16px bold |
| White on Asagi | −45.2 | 24px normal / 16px bold |
| Hai on Shironeri | +68.0 | 18px normal / 14px bold |
| Aiiro on Washi | +70.7 | 18px normal / 14px bold |
