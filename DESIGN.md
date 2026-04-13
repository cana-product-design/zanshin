# Unified Japanese Design System
### *Zen Aesthetics × Aizome Kendo — A Common Path*

> Two sources, one root. The Zen portfolio system (*design.md*) provides the philosophical structure, spatial logic, and content strategy. The Aizome Kendo system (*kendo-aesthetics-design.md*) provides the color depth, APCA-validated accessibility, and interaction discipline. Where they meet is the foundation of this document.

**The unifying insight:** Both systems are built from the same cultural bedrock — restraint, intentionality, and the belief that emptiness carries meaning. Their only real divergence is *surface*: warm gold for the contemplative portfolio voice, cold indigo for the disciplined product interface. This document resolves that divergence with a palette mode system, then merges everything else into one coherent language.

---

## Merged Philosophy — Nine Principles

The Zen system's seven principles absorb Kendo's two additions as natural extensions, not additions. Together they form a complete practice.

| Principle | Kanji | Source | Design Expression |
|---|---|---|---|
| **Ma** | 間 | Zen | Whitespace as charged potential. Minimum 80px between sections. Negative space has visual weight. |
| **Wabi-Sabi** | 侘寂 | Both | Imperfection embraced. Subtle texture, irregular rhythms, honest process shown alongside polish. |
| **Shibui** | 渋い | Zen | Quiet elegance. Max 2 typefaces, 1 accent color, every element earns its place with a "why". |
| **Yūgen** | 幽玄 | Zen | Mystery beneath the surface. Progressive disclosure, slow scroll reveals, content that rewards return. |
| **Kanso** | 簡素 | Zen | Elimination until only truth remains. Four words instead of seven. Max 3 hierarchy levels per page. |
| **Ensō** | 円相 | Zen | Continuous flow. No dead-end pages. One uninterrupted narrative from landing to contact. |
| **Kintsugi** | 金継ぎ | Zen | Repair as beauty. Failure shown honestly in case studies. Gold accent marks the seam. |
| **Zanshin** | 残心 | Kendo | Lingering awareness. Interactions leave a trace — transitions don't snap, focus states breathe. |
| **Sumi-e** | 墨絵 | Kendo | Ink-wash economy. A single brushstroke defines form. No decoration that doesn't encode meaning. |

---

## Color System — Dual Palette Modes

The only genuine conflict between both systems is the accent color. The resolution is explicit: two named modes sharing one set of foundations. A single CSS attribute switch (`data-palette`) governs which mode is active. Everything below the accent layer is unified.

### Unified Foundation (Both Modes)

These tokens are identical across Zen and Kendo contexts.

```css
:root {
  /* === Shared Ground — derived from both systems === */
  --color-shironeri:  #F5F4EF;  /* Raw silk white — base background (Zen: #f2efe6 ≈ same) */
  --color-fiber:      #DDD9CE;  /* Natural fiber — card surface (between washi and zen taupe) */
  --color-kinari:     #D9D5C7;  /* Unbleached cloth — borders */
  --color-sumi:       #1C1C1E;  /* Ink black — primary text (APCA Lc +99 on shironeri) */
  --color-hai:        #6B7280;  /* Ash gray — secondary text */

  /* === Spacing — Zen scale, Kendo sub-tokens coexist === */
  --space-xs:   8px;
  --space-sm:   16px;
  --space-md:   24px;
  --space-lg:   40px;
  --space-xl:   64px;
  --space-2xl:  96px;
  --space-3xl:  128px;

  /* Fine-grained sub-tokens (Kendo) */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-6: 24px;
  --space-8: 32px;

  /* === Motion — both easings coexist === */
  --ease-zen:    cubic-bezier(0.4, 0.0, 0.2, 1);   /* default — deliberate, Zen reveals */
  --ease-kendo:  cubic-bezier(0.25, 0.46, 0.45, 0.94); /* micro-interactions, controlled */
  --ease-strike: cubic-bezier(0.0, 0.0, 0.2, 1);   /* fast in, soft out — decisive actions */

  --duration-short:  300ms;  /* Zen minimum */
  --duration-medium: 500ms;
  --duration-long:   800ms;
  --duration-slow:   400ms;  /* Kendo component transitions */

  /* === Border radius — Kendo values, within Zen's organic intent === */
  --radius-sm: 2px;
  --radius-md: 4px;
  --radius-lg: 8px;   /* Hard ceiling — nothing rounder */

  /* === Typography === */
  --font-display: 'Noto Serif JP', 'Cormorant Garamond', Georgia, serif;
  --font-body:    'Inter', 'Noto Sans JP', system-ui, sans-serif;
  --font-mono:    'JetBrains Mono', 'Fira Code', monospace;
}
```

---

### Palette Mode: Kintsugi (Zen / Portfolio)

*Warm amber accent. Contemplative, editorial, personal. Use for portfolio surfaces, case studies, about pages.*

```css
[data-palette="kintsugi"] {
  /* Surfaces */
  --surface-base:    #F5F4EF;  /* shironeri */
  --surface-raised:  #DDD9CE;  /* natural fiber */
  --surface-overlay: #FFFFFF;
  --border-default:  #D9D5C7;  /* kinari */
  --border-strong:   #B7B0A2;  /* zen mid taupe */

  /* Text */
  --text-primary:    #1C1C1E;  /* sumi */
  --text-secondary:  #6B7280;  /* hai */
  --text-muted:      #7C776E;  /* zen warm gray */

  /* Accent — kintsugi gold */
  --accent-primary:  #C9A84C;  /* warm amber */
  --accent-hover:    #A8863B;  /* deepened amber */
  --accent-subtle:   rgba(201, 168, 76, 0.12);
  --accent-border:   rgba(201, 168, 76, 0.35);

  /* Semantic */
  --color-success: #2D6A4F;
  --color-warning: #B45309;
  --color-error:   #9B1C1C;
}
```

**WCAG / APCA for Kintsugi accent:**
- Sumi on Kintsugi gold (`#C9A84C`): WCAG ratio 5.1:1 — AA body text. Lc ≈ +55 — interactive threshold.
- Kintsugi gold on Shironeri: WCAG ratio 2.4:1 — does not meet AA for body text. Restrict to 24px+ decorative or use only as border/underline. **Never as body link text.**
- For interactive links on light surfaces in Kintsugi mode: use sumi (`#1C1C1E`) or aged bronze (`#8B7355`, WCAG 4.7:1).

---

### Palette Mode: Aizome (Kendo / Product / Dark)

*Indigo accent. Disciplined, product-focused, dark-ground contexts.*

```css
[data-palette="aizome"] {
  /* Surfaces — light mode */
  --surface-base:    #F5F4EF;  /* shironeri */
  --surface-raised:  #EAE8E0;  /* washi */
  --surface-overlay: #FFFFFF;
  --border-default:  #D9D5C7;
  --border-strong:   #6B7280;

  /* Text */
  --text-primary:   #1C1C1E;
  --text-secondary: #6B7280;
  --text-muted:     #9CA3AF;

  /* Accent — aiiro indigo */
  --accent-primary: #2B5BA8;
  --accent-hover:   #1A2744;
  --accent-subtle:  rgba(43, 91, 168, 0.10);
  --accent-border:  rgba(43, 91, 168, 0.30);
}

/* Dark ground — kachiiro base */
[data-palette="aizome"][data-theme="dark"] {
  --surface-base:    #1B2A4A;  /* kachiiro */
  --surface-raised:  #1A2744;  /* nōkon */
  --surface-overlay: #222C42;
  --border-default:  rgba(75, 179, 204, 0.15);
  --border-strong:   rgba(75, 179, 204, 0.35);

  --text-primary:   #F5F4EF;
  --text-secondary: #4DB3CC;   /* asagi — APCA Lc −48.9, interactive threshold */
  --text-muted:     #A8D8EA;

  --accent-primary: #4DB3CC;   /* asagi */
  --accent-hover:   #3B82C4;
  --accent-subtle:  rgba(75, 179, 204, 0.12);
}
```

---

### Semantic Colors (Both Modes)

Semantic colors are mode-agnostic. Grounded in natural materials common to both traditions:

| Role | Hex | Source material |
|---|---|---|
| Success | `#2D6A4F` | Bamboo green |
| Warning | `#B45309` | Lacquer amber |
| Error | `#9B1C1C` | Iron oxide red |
| Info | `#2563EB` | Clear sky |

---

## Typography — Unified System

The merged recommendation lands on the pairing both systems converge toward independently:

```
Display: Noto Serif JP (weight 600–700)
Body:    Inter (weight 400–500)
Code:    JetBrains Mono
```

Noto Serif JP satisfies Zen's cultural fidelity requirement and includes full Japanese glyph support. Inter is Kendo's body choice and Zen's humanist fallback. They share the same x-height family — optically compatible at all sizes.

### Type Scale (Zen scale with Kendo annotations)

```css
:root {
  /* Sizes */
  --text-h1:   clamp(48px, 6vw, 64px);  /* line-height: 1.1, letter-spacing: -0.02em */
  --text-h2:   clamp(32px, 4vw, 40px);  /* line-height: 1.2, letter-spacing: -0.01em */
  --text-h3:   clamp(24px, 3vw, 28px);  /* line-height: 1.3, letter-spacing: 0 */
  --text-body: clamp(16px, 1.25vw, 18px); /* line-height: 1.7–1.8, letter-spacing: 0.01em */
  --text-sm:   14px;                    /* line-height: 1.6, letter-spacing: 0.02em */
  --text-xs:   12px;                    /* captions, labels — floor */
}
```

**Vertical ma:** Body line-height 1.7–1.8 (Zen) is the governing rule. Kendo's 1.625 falls within this as a lower bound for UI density contexts.

---

## Layout & Spacing

### Grid

- 12-column, asymmetric. Off-center by 5–10% (fukinsei).
- Gutters: 24–32px.
- Content breaks grid occasionally (datsuzoku) — deliberate, not accidental.
- 40–60% of any viewport remains empty (ma).

### Section Spacing

```css
.section + .section {
  padding-top: var(--space-2xl); /* 96px — Zen minimum between major sections */
}

.content-block {
  padding: var(--space-lg) var(--space-xl); /* 40-64px — Zen inner padding */
}
```

---

## Interaction & Animation — Merged Rules

| Rule | Value | Source |
|---|---|---|
| Minimum transition duration | 300ms | Zen |
| Default easing | `ease-zen` — `cubic-bezier(0.4, 0.0, 0.2, 1)` | Zen |
| Micro-interaction easing | `ease-kendo` — `cubic-bezier(0.25, 0.46, 0.45, 0.94)` | Kendo |
| Decisive actions | `ease-strike` — `cubic-bezier(0.0, 0.0, 0.2, 1)` | Kendo |
| Hover opacity | 0.70–0.85 — never full toggle | Zen |
| Hover scale | 1.0 → 1.02 maximum | Zen |
| Focus style | 3px outline, `--accent-primary`, 3px offset | Kendo (zanshin) |
| Scroll reveals | 600–800ms fade, ease-out | Zen (yūgen) |
| Reduced motion | `prefers-reduced-motion: reduce` — all durations → 0.01ms | Both |

```css
/* Zanshin focus — interaction leaves a trace */
:focus-visible {
  outline: 3px solid var(--accent-primary);
  outline-offset: 3px;
  transition: outline-offset var(--duration-short) var(--ease-kendo);
}

/* Yūgen reveal — content surfaces slowly */
@keyframes yugen-reveal {
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: translateY(0); }
}

.reveal {
  animation: yugen-reveal var(--duration-long) var(--ease-zen) both;
}

/* Seijaku hover — opacity shift only, no color aggression */
.card, .nav-link, .project-thumb {
  transition: opacity var(--duration-short) var(--ease-zen),
              box-shadow var(--duration-slow) var(--ease-kendo);
}

.card:hover, .project-thumb:hover {
  opacity: 0.85;
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## Navigation — Shinto Pathway + Zanshin Presence

Zen's shrine architecture model governs structure. Kendo's zanshin governs the interactive feel of each threshold.

```
Landing (Outer torii) → Project listing (Sandō) → Case study (Inner shrine) → Contact (Sacred space)
```

```css
/* Nav — kachiiro in aizome mode, transparent over shironeri in kintsugi mode */
.nav {
  padding: var(--space-sm) var(--space-xl);
  border-bottom: 1px solid var(--border-default);
  background: var(--surface-base);
}

/* Active link — asagi underline (aizome) or amber (kintsugi) — zanshin lingers */
.nav-link {
  color: var(--text-secondary);
  text-decoration: none;
  font-size: 13px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  position: relative;
  transition: color var(--duration-slow) var(--ease-zen);
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 1px;                            /* sumi-e — one stroke */
  background: var(--accent-primary);
  transition: width var(--duration-long) var(--ease-kendo); /* zanshin — lingers */
}

.nav-link:hover { color: var(--text-primary); }
.nav-link:hover::after,
.nav-link[aria-current="page"]::after { width: 100%; }
```

---

## Content Strategy — Case Studies

From Zen. Unchanged — already complete and philosophically grounded.

1. **Title + one sentence** (20 words max)
2. **Hero image** — full-width, WebP, natural/unmanipulated
3. **Context** — 2–3 paragraphs: problem, constraints, approach
4. **Process** — iterations, failures, pivots — kintsugi thinking
5. **Solution** — visual-first: mockups, prototypes, final designs
6. **Reflection** — 1–2 paragraphs: what was learned, what would change

**Writing rule:** Four words instead of seven. Yūgen — never explain everything.

---

## Visual Assets — Shared Rules

| Element | Rule | Source |
|---|---|---|
| Icons | Line only, 1.5–2px stroke, monochrome, max 24×24px | Both (identical) |
| Photography | Natural, unmanipulated, subtle grain at 2–3% opacity | Zen |
| Shadow | 0–4px blur, 0.1–0.2 opacity, grayscale or deep-indigo only | Both |
| Texture | Washi grain overlay at 2–5% opacity on hero surfaces | Both |
| Corner radius | Max 8px — hard ceiling | Kendo |
| Image format | WebP, 1920×1080 minimum for heroes | Zen |

---

## Palette Switching — When to Use Which

| Context | Mode | Rationale |
|---|---|---|
| Portfolio landing, about, contact | `kintsugi` | Warm, personal, gold accent invites dwelling |
| Case study headers, project heroes | `kintsugi` | Editorial warmth, kintsugi narrative fits |
| Product UI mockups, dashboards | `aizome` | Indigo precision for product surfaces |
| Dark-mode presentations | `aizome` dark | Kachiiro ground with asagi interaction |
| Code and technical documentation | `aizome` | Cooler, more focused reading environment |
| Accessibility audit contexts | `aizome` | APCA-validated pairings are documented for this mode |

```html
<!-- Portfolio pages -->
<body data-palette="kintsugi">

<!-- Product/UI contexts -->
<body data-palette="aizome">

<!-- Dark product UI -->
<body data-palette="aizome" data-theme="dark">
```

---

## Unified Anti-Patterns

Drawn from both systems — any violation breaks the philosophy regardless of mode:

| Avoid | Why it fails |
|---|---|
| Accent color as body text on light backgrounds | Kintsugi gold and asagi both fail APCA interactive threshold on light surfaces |
| Corner radius > 8px | Soft forms contradict budo geometry and Zen structural honesty |
| Transitions < 300ms | Breaks seijaku and zanshin — no lingering awareness |
| Bounce or elastic easings | Playfulness is decorative noise in both traditions |
| Pure white `#FFFFFF` backgrounds | Use shironeri — purity through warmth, not sterility |
| Multiple accent colors active simultaneously | Violates kanso — one accent per mode, never both at once |
| Parallax scrolling | Breaks tranquility (Zen) and zanshin continuity (Kendo) |
| Auto-playing media | All interactions must be user-initiated |
| Perfect symmetry | Fukinsei — natural balance, never mechanical centering |
| Decorative elements without purpose | Sumi-e — every mark encodes meaning |
| Cherry blossom imagery without philosophy | Surface-level cultural reference without grounding |

---

## Implementation Checklist

- [ ] `data-palette` attribute set to `kintsugi` or `aizome` at `<body>`
- [ ] Shared foundation tokens loaded before palette mode tokens
- [ ] Noto Serif JP + Inter loaded via CDN
- [ ] `prefers-reduced-motion` block present
- [ ] APCA validated: all interactive text clears Lc ≥ 45 (see Kendo APCA Audit section)
- [ ] No accent color used as body text on light surfaces
- [ ] Focus ring: `var(--accent-primary)`, 3px, 3px offset
- [ ] Section spacing: minimum 80–96px between major sections
- [ ] Nav: maximum 4 items, no hamburger on desktop
- [ ] Hover: opacity shift only, no color flash, no scale > 1.02
- [ ] All animations ease-out for reveals, ease-in for exits
- [ ] Lighthouse Accessibility Score: 95+
- [ ] WCAG AA minimum — APCA Lc ≥ 45 for interactive elements
- [ ] Semantic HTML5 structure
- [ ] Reduced motion respected

---

## Testing Lens

*Ask both questions before shipping any surface:*

**Zen:** Does this feel calm, not empty? Can a user dwell here without being rushed? Does each element earn its place? Would this be more beautiful in 5 years?

**Kendo:** Does each interaction leave a trace of awareness? Is every mark intentional? Could a single element be removed and the form become clearer?

If either lens reveals clutter, simplify. If either reveals emptiness without charge, add presence — not decoration.

---

## Version Control

**Document Version:** 2.0 — Unified  
**Sources:** `design.md` v1.0 (Zen Aesthetics) + `kendo-aesthetics-design.md` v1.0 (Aizome Kendo)  
**Last Updated:** April 12, 2026  
**Review Cycle:** Quarterly

---

*"The dojo and the shrine share the same threshold — a space where intention becomes form. Cross it with purpose."*
