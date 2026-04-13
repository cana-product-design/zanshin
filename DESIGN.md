# Zanshin Design System
### *Zen Aesthetics × Aizome Kendo — A Common Path*

> Two sources, one root. The Zen portfolio system provides the philosophical structure, spatial logic, and content strategy. The Aizome Kendo system provides the color depth, APCA-validated accessibility, and interaction discipline. Where they meet is the foundation of this document.

**The unifying insight:** Both systems are built from the same cultural bedrock — restraint, intentionality, and the belief that emptiness carries meaning. Their only real divergence is *surface*: warm gold for the contemplative portfolio voice, cold indigo for the disciplined product interface. This document resolves that divergence with a palette mode system, then merges everything else into one coherent language.

**GitHub:** https://github.com/cana-product-design/zanshin  
**Storybook:** https://cana-product-design.github.io/zanshin/  
**Version:** 2.1 — Aizome Refinement + Motion System  
**Last Updated:** April 2026

---

## Nine Principles

| Principle | Kanji | Design Expression |
|---|---|---|
| **Ma** | 間 | Whitespace as charged potential. 80px minimum between sections. Negative space has visual weight. |
| **Wabi-Sabi** | 侘寂 | Imperfection embraced. Subtle texture, irregular rhythms, honest process shown alongside polish. |
| **Shibui** | 渋い | Quiet elegance. Max 2 typefaces, 1 accent color per mode, every element earns its place. |
| **Yūgen** | 幽玄 | Mystery beneath the surface. Progressive disclosure, slow scroll reveals, content that rewards return. |
| **Kanso** | 簡素 | Elimination until only truth remains. Four words instead of seven. Max 3 hierarchy levels per page. |
| **Ensō** | 円相 | Continuous flow. No dead-end pages. One uninterrupted narrative from landing to contact. |
| **Kintsugi** | 金継ぎ | Repair as beauty. Failure shown honestly. Gold accent marks the seam. |
| **Zanshin** | 残心 | Lingering awareness. Interactions leave a trace — transitions don't snap, focus states breathe. |
| **Sumi-e** | 墨絵 | Ink-wash economy. A single brushstroke defines form. No decoration that doesn't encode meaning. |

---

## Aizome Color Spectrum

Natural indigo (藍) dye is a living process — *Polygonum tinctorium* leaves fermented for months in earthenware vats. Each immersion deepens the hue. The color at any stage carries the time invested. This is not metaphor; it is the production history of every kendo-gi and hakama ever worn.

**Fabric reference:** Authentic kendo-gi uses *sashiko* weave (刺子 — rice-grain pattern, 390g/m² cotton). Hakama use *hishisashi* diamond weave on the lower panel. Both are dyed with natural fermented indigo, never synthetic. The color this produces has a slight **purple cast** from plant chemistry and a **grey-blue muted quality** that synthetic `#4DB3CC` cannot replicate. That's why asagi was revised.

### The Spectrum — 10 Named Stages

| Name | Kanji | Dye Stage | Hex | UI Role | Notes |
|---|---|---|---|---|---|
| Aijiro | 藍白 | 1st dip | `#E8EEF5` | Surface tint, hover bg | Barely blue — first breath of indigo |
| Asagi | 浅葱 | ~5 dips | `#5B8FA8` | Accent (dark mode), non-text on light | **Revised** — warmer, grey-blue; was synthetic `#4DB3CC` |
| Mizuasagi | 水浅葱 | water-diluted | `#8AAFC0` | Muted text on dark, labels | Lc −58 on kachiiro ✔ ≥18px |
| Hanada | 縹 | ~15 dips | `#2E6B8A` | Deep hover, active states | Mid blue silk — halfway to depth |
| Aiiro | 藍色 | ~25 dips | `#2B5BA8` | Primary links (light mode) | Japan Blue; Lc +77 on shironeri ✔ |
| Kon | 紺 | ~35 dips | `#1E3A6E` | Dark navy emphasis | Deep dip — Lc +91 on shironeri ✔ |
| Nokon | 濃紺 | ~40 dips | `#1A2744` | Near-black navy | Almost saturated |
| Kachiiro | 褐色 | deepest dip | `#1B2A4A` | Dark mode base, victory color | 褐色 lit. "victory color" — worn by champions |
| Shikon | 紫紺 | aged/oxidized | `#2A2438` | Aged purple-navy of old bogu | Plant chemistry purple cast, extreme age |
| Ainezumi | 藍鼠 | worn/washed | `#4A4860` | Decorative faint text on dark | Mousy indigo — decades of washing and sun |

### CSS Primitives

```css
:root {
  --aizome-aijiro:    #E8EEF5; /* 1st dip */
  --aizome-asagi:     #5B8FA8; /* natural sky — revised from synthetic #4DB3CC */
  --aizome-mizuasagi: #8AAFC0; /* water-asagi */
  --aizome-hanada:    #2E6B8A; /* mid blue silk */
  --aizome-aiiro:     #2B5BA8; /* Japan Blue */
  --aizome-kon:       #1E3A6E; /* dark navy */
  --aizome-nokon:     #1A2744; /* near-black navy */
  --aizome-kachiiro:  #1B2A4A; /* victory color */
  --aizome-shikon:    #2A2438; /* aged purple-navy */
  --aizome-ainezumi:  #4A4860; /* mousy indigo */
}
```

---

## APCA Accessibility Audit

All pairs validated with APCA-W3 (Advanced Perceptual Contrast Algorithm). Threshold: **Lc ≥ 45** for interactive elements.

### Light Mode (Shironeri `#F5F4EF` base)

| Pair | Lc Value | Threshold | Status | Use |
|---|---|---|---|---|
| Sumi `#1C1C1E` on shironeri | +99.0 | Lc 75 | ✔ PASS | Body text |
| Aiiro `#2B5BA8` on shironeri | +77.0 | Lc 60 | ✔ PASS | Body links, interactive |
| Kon `#1E3A6E` on shironeri | +91.0 | Lc 60 | ✔ PASS | Hover state for links |
| Asagi `#5B8FA8` on shironeri | +44.8 | Lc 15 | ✔ NON-TEXT | Decorative borders, icons only |
| Gold `#C9A84C` on shironeri | +40.4 | Lc 15 | ✔ NON-TEXT | Decorative accent only |

### Dark Mode (Kachiiro `#1B2A4A` base)

| Pair | Lc Value | Threshold | Status | Use |
|---|---|---|---|---|
| Shironeri `#EEF0F4` on kachiiro | −95.0 | Lc 75 | ✔ PASS | Body text |
| Asagi `#5B8FA8` on kachiiro | −47.5 | Lc 45 | ✔ PASS | Interactive ≥16px bold |
| Mizuasagi `#8AAFC0` on kachiiro | −58.0 | Lc 45 | ✔ PASS | Labels ≥18px |
| Gold `#C9A84C` on kachiiro | +40.4 | Lc 15 | ✔ NON-TEXT | Decorative only |

### PROHIBITED Pairs

| Pair | Lc Value | Reason |
|---|---|---|
| Aiiro `#2B5BA8` on kachiiro `#1B2A4A` | −15.1 | Both dark — near invisible. Never use. |
| Asagi on shironeri as body text | +44.8 | Below Lc 60 threshold for body text. Non-text only. |
| Gold on shironeri as body text | +40.4 | Below Lc 60. Decorative/non-text only. |

---

## Palette Modes

The only genuine conflict between Zen and Kendo contexts is the accent color. The resolution: two named modes sharing one foundation. A `data-palette` attribute governs which is active.

### Kintsugi Mode — Zen / Portfolio

*Warm amber accent. Contemplative, editorial, personal. Portfolio surfaces, case studies.*

```css
[data-palette="kintsugi"] {
  --accent-primary: #C9A84C;               /* kintsugi gold */
  --accent-hover:   #A8863B;               /* deepened amber */
  --accent-subtle:  rgba(201, 168, 76, 0.12);
}
```

### Aizome Mode — Kendo / Product

*Indigo accent. Disciplined, product-focused. Dashboards, dark-ground contexts.*

```css
[data-palette="aizome"] {
  --accent-primary: #2B5BA8;               /* aiiro — Japan Blue */
  --accent-hover:   #1E3A6E;               /* kon — deeper dip */
  --accent-subtle:  rgba(43, 91, 168, 0.10);
}

[data-palette="aizome"][data-theme="dark"] {
  --color-bg:            #1B2A4A;          /* kachiiro */
  --color-surface:       #1F3154;          /* raised — slightly lighter */
  --color-surface-2:     #243460;          /* overlay ground */
  --color-border:        rgba(91, 143, 168, 0.15); /* natural asagi seam */
  --color-border-strong: rgba(91, 143, 168, 0.35); /* sashiko stitch line */
  --color-text:          #EEF0F4;          /* bleached cotton */
  --color-text-muted:    #8AAFC0;          /* mizuasagi — Lc −58 ✔ */
  --color-text-faint:    #4A4860;          /* ainezumi — decorative only */
  --accent-primary:      #5B8FA8;          /* natural asagi */
  --accent-hover:        #2E6B8A;          /* hanada */
}
```

---

## Unified Foundation Tokens

```css
:root {
  /* Surfaces */
  --color-bg:            #F5F4EF; /* shironeri — raw silk white */
  --color-surface:       #EDEAE2; /* natural fiber */
  --color-surface-2:     #E3DED5; /* deeper washi */
  --color-border:        #D4D0C4; /* kinari */
  --color-border-strong: #B7B0A2; /* taupe selvedge */

  /* Text */
  --color-text:          #1C1C1E; /* sumi — Lc +99 ✔ */
  --color-text-muted:    #4A5568; /* cooler hai — Lc +72 ✔ */
  --color-text-faint:    #718096; /* muted slate */
  --color-text-inverse:  #F5F4EF;

  /* Type */
  --font-display: 'Cormorant Garamond', 'Noto Serif JP', Georgia, serif;
  --font-body:    'Satoshi', 'Inter', system-ui, sans-serif;
  --font-mono:    'JetBrains Mono', 'Fira Code', monospace;

  /* Type scale */
  --text-xs:   clamp(0.75rem,  0.7rem + 0.25vw, 0.875rem);
  --text-sm:   clamp(0.875rem, 0.8rem + 0.35vw, 1rem);
  --text-base: clamp(1rem,     0.95rem + 0.25vw, 1.125rem); /* 16px floor */
  --text-lg:   clamp(1.125rem, 1rem + 0.75vw, 1.5rem);
  --text-xl:   clamp(1.5rem,   1.2rem + 1.25vw, 2.25rem);
  --text-2xl:  clamp(2rem,     1.2rem + 2.5vw, 3.5rem);
  --text-3xl:  clamp(2.5rem,   1rem + 4vw, 5rem);

  /* Spacing — 4px base, ma-informed intervals */
  --space-1: 0.25rem;  --space-2: 0.5rem;   --space-3: 0.75rem;
  --space-4: 1rem;     --space-6: 1.5rem;   --space-8: 2rem;
  --space-10: 2.5rem;  --space-12: 3rem;    --space-16: 4rem;
  --space-20: 5rem;    --space-24: 6rem;

  /* Radius — sashiko geometry, hard ceiling 8px (folded cotton corner) */
  --radius-sm: 2px;
  --radius-md: 4px;
  --radius-lg: 8px;   /* HARD CEILING — nothing rounder */

  /* Shadows — deep indigo base */
  --shadow-sm: 0 1px 3px rgba(27,42,74,0.06);
  --shadow-md: 0 4px 16px rgba(27,42,74,0.08);
  --shadow-lg: 0 12px 40px rgba(27,42,74,0.12);
}
```

---

## Motion System — Three Traditions

Motion in Zanshin is not decoration. It is drawn from three living practices, each contributing a distinct layer of meaning.

### The Traditions

**Ma 間 (Shinto)**
The charged pause between actions. In Shinto, the threshold between the profane and sacred is marked by a gate and a moment of stillness — not transition, but preparation. In UI, *ma* is the 80ms pre-delay before a modal appears, the held breath after a toast enters, the space between one section and the next. You feel it even when you cannot name it.

**Mujō 無常 (Buddhist)**
Impermanence — nothing persists unchanged. Every entrance has a corresponding exit. Every reveal has a corresponding dissolution. In UI, this means entrances and exits are mirrors: if a modal slides in from above, it fades and sinks on close. The form that arrives is not permanent; it returns to formlessness. *Mujō* prohibits one-way animations.

**Seme → Strike → Zanshin 攻め→打つ→残心 (Kendo)**
The three-phase arc of every action in kendo. *Seme* is the controlled approach — pressure applied before contact, opponent's balance broken. *Strike* is the decisive moment — committed, irreversible, sharp. *Zanshin* is the sustained awareness after — the practitioner holds form, maintains posture, remains present. The technique is not complete until zanshin is established. In UI, a button press is: scale-down seme → 1px translateY snap → slow float back.

### Easings

```css
:root {
  --ease-zen:     cubic-bezier(0.4, 0.0, 0.2, 1);      /* balanced, meditative */
  --ease-kendo:   cubic-bezier(0.25, 0.46, 0.45, 0.94); /* seme — controlled approach */
  --ease-strike:  cubic-bezier(0.0, 0.0, 0.2, 1);      /* decisive entry, snap in */
  --ease-zanshin: cubic-bezier(0.0, 0.0, 0.1, 1);      /* slow release, linger */
  --ease-ma:      cubic-bezier(0.4, 0.0, 0.6, 1);      /* symmetric breath, focus pulse */
}
```

| Token | Curve | When to use |
|---|---|---|
| `ease-zen` | Balanced S-curve | Default for all transitions. Section reveals, color changes, nav. |
| `ease-kendo` | Fast start, gentle end | Hover states, dropdown open, controlled approach. |
| `ease-strike` | Instant start, gentle end | Button active, modal snap-in, decisive user actions. |
| `ease-zanshin` | Very slow end | Exit fades, release after button press, toast departure. |
| `ease-ma` | Symmetric | Focus ring pulse, breathing glows, skeleton shimmer. |

### Durations

```css
:root {
  --duration-instant: 150ms;  /* micro only — icon swap, checkbox (kendo snap) */
  --duration-short:   300ms;  /* minimum breath — ALL transitions use this floor */
  --duration-medium:  500ms;  /* standard — dropdown, hover, badge state change */
  --duration-long:    700ms;  /* entrance — section reveal (yūgen) */
  --duration-slow:    1000ms; /* dramatic — hero entrance, full zanshin hold only */
  --duration-ma:      80ms;   /* pre-transition pause — the ma interval */
}
```

**Rules:**
- `--duration-instant` (150ms) is only for micro-interactions (icon swap, checkbox check). Never for color, background, or border transitions.
- `--duration-short` (300ms) is the floor for all transitions on interactive elements. Nothing slower for user-initiated color/border changes.
- `--duration-slow` (1000ms) is reserved for hero entrances and dramatic one-shot reveals. Never for hover or repeated interactions.
- `--duration-ma` (80ms) is a delay prefix, not a transition duration — it's the pause before the transition begins.

### Keyframes — Full Library

```css
/* Section reveal — 12px drift, yūgen fade */
@keyframes zanshin-reveal {
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* Hero entrance — 20px drift, slow zanshin hold */
@keyframes zanshin-hero-in {
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* Fade only — overlays, backdrops */
@keyframes zanshin-fade-in  { from { opacity: 0; } to { opacity: 1; } }
@keyframes zanshin-fade-out { from { opacity: 1; } to { opacity: 0; } }

/* Modal — Seme→Strike→Zanshin arc */
@keyframes zanshin-modal-in {
  0%   { opacity: 0; transform: translateY(-16px); }
  60%  { opacity: 1; transform: translateY(2px); }   /* micro-overshoot = strike */
  100% { opacity: 1; transform: translateY(0); }
}
@keyframes zanshin-modal-out {
  from { opacity: 1; transform: translateY(0) scale(1); }
  to   { opacity: 0; transform: translateY(8px) scale(0.98); }
}

/* Toast — seme slide from right → zanshin linger on exit */
@keyframes zanshin-toast-enter {
  from { opacity: 0; transform: translateX(16px); }
  to   { opacity: 1; transform: translateX(0); }
}
@keyframes zanshin-toast-exit {
  from { opacity: 1; transform: translateY(0) scale(1); }
  to   { opacity: 0; transform: translateY(8px) scale(0.96); }
}

/* Ma pulse — breathing glow for focus rings */
@keyframes zanshin-ma-pulse {
  0%, 100% { box-shadow: 0 0 0 0 rgba(43, 91, 168, 0); }
  50%       { box-shadow: 0 0 0 4px rgba(43, 91, 168, 0.18); }
}

/* Spin — loading state */
@keyframes zanshin-spin { to { transform: rotate(360deg); } }

/* Shimmer — skeleton loader (sashiko weave shimmer) */
@keyframes zanshin-shimmer {
  0%   { background-position: -400px 0; }
  100% { background-position:  400px 0; }
}
```

### Component Choreography

**Button — Seme→Strike→Zanshin arc**
```
Hover:    background ease-kendo 500ms + box-shadow ease-zanshin 700ms (approach)
Active:   scale(0.97) translateY(1px) ease-strike 300ms (strike)
Release:  scale(1) translateY(0) ease-zanshin 700ms (linger back)
Focus:    zanshin-ma-pulse 1600ms ease-ma infinite (breathing ring)
```

**Modal — slow entrance, mirrored exit**
```
Open:     80ms ma delay → zanshin-modal-in 700ms ease-zanshin (drift + snap + settle)
Backdrop: zanshin-fade-in 500ms ease-kendo
Close:    zanshin-modal-out 500ms ease-kendo (fades + sinks — mujō)
```

**Toast — decisive arrival, lingering departure**
```
Enter:    zanshin-toast-enter 300ms ease-strike (seme slide from right)
Hold:     message present for duration (ma hold)
Exit:     zanshin-toast-exit 700ms ease-zanshin (slow mujō departure)
```

**Section reveal — scroll-triggered yūgen**
```
Trigger:  IntersectionObserver at 8% visibility
Reveal:   opacity 0→1 + translateY 12px→0 over 700ms ease-zanshin
Stagger:  80ms delay between child elements (ma intervals)
```

**Hero entrance — one-shot page load sequence**
```
Kicker:   zanshin-reveal 500ms  @ 80ms  delay
Heading:  zanshin-hero-in 1000ms @ 200ms delay
Subtitle: zanshin-reveal 700ms  @ 400ms delay
CTAs:     zanshin-reveal 700ms  @ 560ms delay
Badges:   zanshin-reveal 700ms  @ 700ms delay
```

### Scroll Reveal — data attributes

```html
<!-- Single element reveal -->
<section data-reveal>...</section>

<!-- Staggered children (80ms ma intervals) -->
<ul data-reveal-stagger>
  <li>...</li>
  <li>...</li>
</ul>
```

JavaScript (IntersectionObserver) adds `.is-revealed` when element enters viewport. CSS handles the transition. `prefers-reduced-motion` collapses all to instant.

---

## Typography

### Display — Cormorant Garamond

Portfolio headlines, section titles, price amounts, modal titles.

- Weight: 300 (light) — matches `canabrava.me` editorial voice
- Letter-spacing: −0.02em at large sizes
- Line-height: 1.05–1.15 for display, 1.4 for body serif
- Use case: anything that should feel contemplative, unhurried, editorial

### Body — Satoshi / Inter

UI labels, body copy, navigation, buttons, code descriptions.

- Weight: 400 (regular), 500 (medium for buttons/labels)
- Letter-spacing: 0 for body, 0.04–0.12em for uppercase labels
- Line-height: 1.7 (generous ma — vertical breathing room)
- Minimum body size: 16px — never below

---

## Layout

- 12-column, asymmetric — off-center by 5–10% (fukinsei)
- Gutters: 24–32px
- Content breaks grid occasionally (datsuzoku) — deliberate, never accidental
- 40–60% of any viewport remains empty (ma)
- Section spacing: minimum 80px between major sections
- No pure `#FFFFFF` — use `--color-bg` (shironeri `#F5F4EF`)

---

## Component Library (12 components)

All components are in `/src/components/`. All use CSS custom properties exclusively — no hardcoded hex values.

| Component | Motion | Key tokens |
|---|---|---|
| `Button` | Seme→Strike→Zanshin arc, ma-pulse focus | `--ease-strike`, `--ease-zanshin`, `--duration-medium` |
| `Modal` | 80ms ma delay, modal-in/out arc, backdrop fade | `--ease-zanshin`, `--duration-long`, `--duration-ma` |
| `Toast` | Slide-in from right (strike), zanshin linger exit | `--ease-strike`, `--ease-zanshin`, `--duration-long` |
| `Input` | Border ease-kendo on focus, shadow ease-zen | `--ease-kendo`, `--duration-medium` |
| `Tabs` | Underline reveal ease-kendo, color ease-kendo | `--ease-kendo`, `--duration-medium` |
| `Select` | Dropdown zanshin-reveal, option hover | `--ease-strike`, `--duration-short` |
| `Card` | Hover lift translateY(-2px), shadow ease-kendo | `--ease-kendo`, `--duration-medium` |
| `Badge` | Static by default; state changes ease-zen | `--ease-zen`, `--duration-medium` |
| `Divider` | No animation — structural, static | — |
| `Nav` | Underline width ease-kendo (zanshin linger) | `--ease-kendo`, `--duration-long` |
| `Table` | Sort icon ease-kendo, row hover bg | `--ease-kendo`, `--duration-medium` |
| `Tooltip` | Fade + translateY 300ms ease-kendo | `--ease-kendo`, `--duration-short` |

---

## Palette Switching

| Context | Mode | Rationale |
|---|---|---|
| Portfolio landing, about, contact | `kintsugi` | Warm, personal, gold accent invites dwelling |
| Case study headers, project heroes | `kintsugi` | Editorial warmth, kintsugi narrative fits |
| Product UI mockups, dashboards | `aizome` | Indigo precision for product surfaces |
| Dark presentations, late-night work | `aizome` dark | Kachiiro ground with natural asagi interaction |
| Code and technical documentation | `aizome` | Cooler, more focused reading environment |

```html
<!-- Portfolio pages -->
<body data-palette="kintsugi">

<!-- Product/UI contexts -->
<body data-palette="aizome">

<!-- Dark product UI -->
<body data-palette="aizome" data-theme="dark">
```

---

## Anti-Patterns

| Avoid | Why it fails |
|---|---|
| Accent color as body text on light surfaces | Gold (Lc +40) and asagi (Lc +44.8) are below Lc 60 body text threshold |
| Aiiro as text on kachiiro background | Lc −15.1 — near invisible — **PROHIBITED** |
| Corner radius > 8px | Contradicts budo geometry and Zen structural honesty |
| Transitions < 300ms | Breaks seijaku and zanshin — no lingering awareness |
| Bounce or elastic easings | Playfulness is decorative noise in both traditions |
| `--duration-slow` for hover transitions | 1000ms hover transitions feel unresponsive — use `--duration-medium` |
| `--duration-slow` (1000ms) on repeated interactions | Reserved for hero one-shot reveals only |
| Pure `#FFFFFF` background | Use shironeri — purity through warmth, not sterility |
| Synthetic `#4DB3CC` asagi | Replaced by natural `#5B8FA8` — less teal, more grey-blue |
| Parallax scrolling | Breaks tranquility (Zen) and zanshin continuity (Kendo) |
| Auto-playing media | All interactions must be user-initiated |
| Multiple accent colors simultaneously | Violates kanso — one accent per mode |

---

## Implementation Checklist

- [ ] `data-palette` set to `kintsugi` or `aizome` at `<body>`
- [ ] Foundation tokens loaded before palette mode tokens
- [ ] Cormorant Garamond (display) + Satoshi/Inter (body) loaded
- [ ] `prefers-reduced-motion` block present and tested
- [ ] APCA validated: all interactive text clears Lc ≥ 45
- [ ] No accent color as body text on light surfaces
- [ ] Focus ring: 3px solid `--accent-primary`, 3px offset
- [ ] All keyframes use `zanshin-*` naming convention
- [ ] No `--duration-slow` on hover or repeated transitions
- [ ] Button has seme→strike→zanshin arc (scale + translateY + release)
- [ ] Modal has 80ms ma delay before entrance animation
- [ ] Toast exits with zanshin linger (ease-zanshin, not ease-strike)
- [ ] Scroll reveals use `data-reveal` / `data-reveal-stagger`
- [ ] Hero has staggered entrance sequence with ma intervals
- [ ] Lighthouse Accessibility: 95+
- [ ] Reduced motion: all animations collapse to 0.01ms

---

## Testing Lens

*Ask both questions before shipping any surface:*

**Zen:** Does this feel calm, not empty? Can a user dwell here without being rushed? Does each element earn its place?

**Kendo:** Does each interaction leave a trace of awareness? Is every mark intentional? Could a single element be removed and the form become clearer?

If either lens reveals clutter, simplify. If either reveals emptiness without charge, add presence — not decoration.

---

*"The dojo and the shrine share the same threshold — a space where intention becomes form. Cross it with purpose."*

---

**Document Version:** 2.1 — Aizome Refinement + Motion System  
**Sources:** `design.md` v1.0 (Zen Aesthetics) + `kendo-aesthetics-design.md` v1.0 (Aizome Kendo)  
**Last Updated:** April 2026  
**GitHub:** https://github.com/cana-product-design/zanshin
