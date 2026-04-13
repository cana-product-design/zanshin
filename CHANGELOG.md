# Changelog

All notable changes to `@zanshin/ui` are documented here.

Format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

---

## [1.0.0] — 2024

### Added

**Core infrastructure**
- `useZanshinPalette` hook — APCA-validated palette/theme management with localStorage persistence and OS preference detection
- `ZanshinProvider` — React context provider exposing palette/theme state to the component tree
- `useZanshin` — Context consumer hook
- `PaletteToggle` and `ThemeToggle` — Minimal unstyled toggle components

**Design tokens**
- `tokens.ts` — APCA-validated token maps for kintsugi (warm gold), aizome light, and aizome dark
- `FOUNDATION_TOKENS` — Shared foundation: surfaces, spacing, border radius, motion, typography
- `KINTSUGI_TOKENS`, `AIZOME_LIGHT_TOKENS`, `AIZOME_DARK_TOKENS` — Palette-specific overrides
- Full `APCAPair` typing with `label`, `fg`, `bg`, `lc`, `threshold`, `passes`, `minSize`

**APCA engine**
- `apca.ts` — Zero-dependency APCA-W3 implementation (SA = 1.75)
- `computeAPCA(fg, bg)` — Returns signed Lc value
- `meetsThreshold(lc, threshold)` — Boolean threshold check
- `hexToRGB(hex)` — Hex to RGB conversion

**Components (12)**
- `Button` — primary/ghost/danger variants, sm/md/lg sizes, loading state, zanshin transitions
- `Input` — kinari border, aiiro focus ring, error/hint states, placeholder in hai italic
- `Badge` — primary/accent/success/warning/error variants, uppercase xs labels
- `Card` — washi surface, kinari border, interactive hover bloom with top-border gradient
- `Nav` — light/dark/transparent variants, sliding underline animation, `aria-current` support
- `Divider` — default (kinari fade) and accent (aiiro-to-asagi) gradient variants
- `Tooltip` — hover/focus, 150ms delay, kachiiro bg, shironeri text, four placements, arrow
- `Modal` — gradient-ma backdrop, focus trap, ESC close, kamae entry animation
- `Select` — custom trigger, washi dropdown, full keyboard navigation (↑↓ Enter Esc)
- `Toast` + `useToast` — success/warning/error/info variants, auto-dismiss, stack up to 3
- `Tabs` — asagi underline, kamae content entry, left/right arrow keyboard navigation
- `Table` — striped rows, sortable headers, compact/comfortable density, empty state

**Storybook**
- Storybook 8 with `@storybook/react-vite` framework
- Custom toolbar: Palette switcher (kintsugi/aizome) and Theme switcher (light/dark)
- `ZanshinProvider` decorator wraps all stories
- MDX docs: Introduction, Design Tokens, Accessibility
- Component stories with Playground + Variants for all 12 components

**CI**
- `apca-ci.yml` — Vitest APCA suite on every push, 29 tests required to pass
- `storybook-pages.yml` — Deploy Storybook to GitHub Pages on push to main

### APCA Coverage

29 tests across three modes:
- Kintsugi light: 5 tests (annotation accuracy, regression detection, spot-checks)
- Aizome light: 5 tests (annotation accuracy, regression detection, spot-checks)
- Aizome dark: 4 tests (passing-pairs only, annotation accuracy, prohibited pair checks)
- APCA engine: 5 self-tests (black/white reference values, polarity, identical colors)
