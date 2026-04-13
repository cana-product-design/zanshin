# 残心 ZANSHIN

**A Japanese-inspired React design system with APCA-validated accessibility**

---

## Philosophy

### Wabi-sabi (侘び寂び)
Beauty in imperfection and transience. Surfaces carry subtle texture rather than sterile flatness. Whitespace is intentional silence — charged potential, not emptiness. The warm shironeri (`#F5F4EF`) background and kinari (`#D9D5C7`) borders acknowledge the organic nature of craft rather than imposing sterile precision.

### Zanshin (残心)
Lingering awareness after action — the name of this system, and its governing interaction principle. Every transition leaves a trace: hover states suggest presence before commitment, focus states breathe with a 3px outline, active buttons remember being pressed with a receding shadow and 1px downward shift. Transitions never snap; they use deliberate easings with minimum 300ms duration.

### Sumi-e (墨絵)
Ink-wash economy. A single brushstroke defines form; UI uses minimum elements with maximum intention. No decoration that doesn't encode meaning. Corner radii never exceed 8px — soft forms contradict budo geometry. The Divider component is a literal brushstroke: a gradient that fades to nothing at both ends, like ink absorbed into washi paper.

---

## Install

```bash
npm install @zanshin/ui
```

Peer dependencies: `react ^18`, `react-dom ^18`

---

## Quick Start

```tsx
import { ZanshinProvider, Button, Card } from '@zanshin/ui';

function App() {
  return (
    <ZanshinProvider defaultPalette="aizome" defaultTheme="light">
      <Card title="Zanshin" description="Lingering awareness after action." interactive>
        <Button variant="primary" size="md">
          Take action
        </Button>
      </Card>
    </ZanshinProvider>
  );
}
```

---

## Palette Modes

Zanshin provides two named color modes switchable at runtime:

| Palette | Character | Accent | Best For |
|---|---|---|---|
| `kintsugi` | Warm, contemplative | Gold `#C9A84C` | Portfolio, editorial, personal |
| `aizome` | Disciplined, focused | Indigo `#2B5BA8` | Product UI, dashboards, documentation |

Both share a common foundation: shironeri surfaces, kinari borders, sumi text.

```tsx
// Set palette at provider level
<ZanshinProvider defaultPalette="aizome" defaultTheme="dark">

// Or toggle at runtime
const { togglePalette, toggleTheme } = useZanshin();
```

### Theme + Palette Combinations

| Combination | Surface | Text | Accent |
|---|---|---|---|
| kintsugi light | `#F5F4EF` shironeri | `#1C1C1E` sumi | `#C9A84C` gold |
| aizome light | `#F5F4EF` shironeri | `#1C1C1E` sumi | `#2B5BA8` aiiro |
| aizome dark | `#1B2A4A` kachiiro | `#F5F4EF` shironeri | `#4DB3CC` asagi |

---

## Components

| Component | Description |
|---|---|
| `Button` | Primary, ghost, danger variants. Three sizes. Zanshin hover/active transitions. |
| `Input` | Text input with kinari border, aiiro focus ring. Error state via `aria-invalid`. |
| `Badge` | Inline status label. Five variants: primary, accent, success, warning, error. |
| `Card` | Washi surface with kinari border. Interactive variant reveals aiiro bloom on hover. |
| `Nav` | Navigation bar with sliding underline (zanshin easing). `aria-current` support. |
| `Divider` | Brushstroke gradient rule. Default (kinari fade) and accent (aiiro-to-asagi) variants. |
| `Tooltip` | Hover/focus tooltip. Kachiiro background, shironeri text, arrow, four placements. |
| `Modal` | Focus-trapped overlay with gradient-ma backdrop. ESC to close. Kamae animation. |
| `Select` | Custom select with washi dropdown. Full keyboard navigation (↑↓ Enter Esc). |
| `Toast` | Notification toasts (success/warning/error/info). Auto-dismiss after 5s. |
| `Tabs` | Horizontal tabs with asagi underline. Kamae content entry. Arrow key navigation. |
| `Table` | Striped rows, sortable headers, compact/comfortable density. |

---

## Hooks & Provider

```tsx
import { ZanshinProvider, useZanshin, useZanshinPalette } from '@zanshin/ui';

// Context-based (recommended)
const { palette, theme, togglePalette, toggleTheme, isDark } = useZanshin();

// Standalone hook (without provider)
const { palette, theme, tokens } = useZanshinPalette({
  defaultPalette: 'aizome',
  storageKey: 'my-app-palette',
});
```

---

## APCA Accessibility

Zanshin uses the **Advanced Perceptual Contrast Algorithm (APCA)** — the contrast model proposed for WCAG 3.0. The APCA test suite runs on every CI push with 29 tests.

```bash
npm run test:apca
```

**Key validated pairs:**

| Pair | Lc | Grade |
|---|---|---|
| Sumi on Shironeri (body) | +99.0 | ✅ Body text |
| Aiiro on Shironeri (links) | +77.0 | ✅ Body text |
| Shironeri on Kachiiro (dark body) | −91.4 | ✅ Body text |
| Asagi on Kachiiro (interactive) | −48.9 | ✅ Interactive |
| Asagi on Shironeri | +43.1 | ❌ Non-text only |

See the [Accessibility docs](./stories/docs/Accessibility.mdx) and Storybook for the full audit.

---

## Scripts

```bash
npm run dev               # Storybook dev server (port 6006)
npm run build:storybook   # Build Storybook static site
npm run test:apca         # Run 29-test APCA suite
npm run typecheck         # TypeScript type check
```

---

## Design Token Usage

All components use CSS custom properties exclusively:

```css
/* Surfaces */
var(--surface-base)       /* Page background */
var(--surface-raised)     /* Cards, panels */
var(--border-default)     /* Kinari borders */

/* Text */
var(--text-primary)       /* Body text */
var(--text-secondary)     /* Muted labels */

/* Accent */
var(--accent-primary)     /* CTAs, links */
var(--accent-hover)       /* Hover state */

/* Motion */
var(--ease-zen)           /* Deliberate reveals */
var(--ease-kendo)         /* Micro-interactions */
var(--ease-strike)        /* Decisive actions */
```

---

## License

MIT — Copyright (c) 2024 Zanshin Design System

---

*"The dojo and the shrine share the same threshold — a space where intention becomes form. Cross it with purpose."*
