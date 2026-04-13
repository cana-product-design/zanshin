/**
 * APCA-validated design tokens for the Unified Japanese Design System.
 *
 * All color pairings annotated with their Lc value and minimum safe size.
 * Lc thresholds:
 *   ≥ 75  — body text at any size
 *   ≥ 60  — large text (24px+) / Fluent UI labels
 *   ≥ 45  — interactive elements (buttons, links, nav)
 *   ≥ 30  — decorative / incidental
 *   < 30  — non-text only (borders, icons, dividers)
 */

// ─── Palette identifiers ──────────────────────────────────────────────────────
export type Palette = 'kintsugi' | 'aizome';
export type Theme   = 'light' | 'dark';

// ─── Token shape ──────────────────────────────────────────────────────────────
export interface PaletteTokens {
  /** CSS custom property key → value pairs applied to :root / [data-palette] */
  surfaces: Record<string, string>;
  text: Record<string, string>;
  accent: Record<string, string>;
  semantic: Record<string, string>;
  /** APCA-validated pairings for runtime safety checks */
  validatedPairs: APCAPair[];
}

export interface APCAPair {
  label: string;
  fg: string;
  bg: string;
  /** Signed Lc — negative = WoB (light on dark), positive = BoW (dark on light) */
  lc: number;
  /** Minimum pass threshold for this usage */
  threshold: 75 | 60 | 45 | 30 | 15;
  passes: boolean;
  minSize?: string; // e.g. '16px bold' for 45–59 range
}

// ─── Shared foundation (palette-agnostic) ────────────────────────────────────
export const FOUNDATION_TOKENS: Record<string, string> = {
  // Surfaces
  '--color-shironeri':  '#F5F4EF',
  '--color-fiber':      '#DDD9CE',
  '--color-kinari':     '#D9D5C7',
  '--color-sumi':       '#1C1C1E',
  '--color-hai':        '#6B7280',

  // Spacing
  '--space-xs':  '8px',
  '--space-sm':  '16px',
  '--space-md':  '24px',
  '--space-lg':  '40px',
  '--space-xl':  '64px',
  '--space-2xl': '96px',
  '--space-3xl': '128px',
  '--space-1': '4px',
  '--space-2': '8px',
  '--space-3': '12px',
  '--space-4': '16px',
  '--space-6': '24px',
  '--space-8': '32px',

  // Border radius (hard ceiling: 8px)
  '--radius-sm': '2px',
  '--radius-md': '4px',
  '--radius-lg': '8px',

  // Motion
  '--ease-zen':    'cubic-bezier(0.4, 0.0, 0.2, 1)',
  '--ease-kendo':  'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
  '--ease-strike': 'cubic-bezier(0.0, 0.0, 0.2, 1)',
  '--duration-short':  '300ms',
  '--duration-medium': '500ms',
  '--duration-long':   '800ms',
  '--duration-slow':   '400ms',

  // Typography
  '--font-display': "'Noto Serif JP', 'Cormorant Garamond', Georgia, serif",
  '--font-body':    "'Inter', 'Noto Sans JP', system-ui, sans-serif",
  '--font-mono':    "'JetBrains Mono', 'Fira Code', monospace",

  // Semantic (mode-agnostic)
  '--color-success': '#2D6A4F',
  '--color-warning': '#B45309',
  '--color-error':   '#9B1C1C',
  '--color-info':    '#2563EB',
};

// ─── Kintsugi palette (warm, portfolio, editorial) ───────────────────────────
export const KINTSUGI_TOKENS: PaletteTokens = {
  surfaces: {
    '--surface-base':    '#F5F4EF',  // shironeri
    '--surface-raised':  '#DDD9CE',  // natural fiber
    '--surface-overlay': '#FFFFFF',
    '--border-default':  '#D9D5C7',  // kinari
    '--border-strong':   '#B7B0A2',  // zen mid taupe
  },
  text: {
    '--text-primary':   '#1C1C1E',  // sumi   — Lc +99.0 on shironeri ✔ body
    '--text-secondary': '#6B7280',  // hai    — Lc +68.0 on shironeri ✔ ≥18px
    '--text-muted':     '#7C776E',  // zen warm gray
  },
  accent: {
    '--accent-primary': '#C9A84C',  // kintsugi gold
    '--accent-hover':   '#A8863B',  // deepened amber
    '--accent-subtle':  'rgba(201, 168, 76, 0.12)',
    '--accent-border':  'rgba(201, 168, 76, 0.35)',
  },
  semantic: {
    '--color-success': '#2D6A4F',
    '--color-warning': '#B45309',
    '--color-error':   '#9B1C1C',
    '--color-info':    '#2563EB',
  },
  validatedPairs: [
    // ✔ Safe pairs
    { label: 'Body text', fg: '#1C1C1E', bg: '#F5F4EF', lc: 99.0, threshold: 75, passes: true },
    { label: 'Secondary text (≥18px)', fg: '#6B7280', bg: '#F5F4EF', lc: 68.0, threshold: 60, passes: true, minSize: '18px' },
    // ⚠ Gold accent — decorative only on light backgrounds
    { label: 'Gold on shironeri — decorative border/underline only', fg: '#C9A84C', bg: '#F5F4EF', lc: 40.4, threshold: 45, passes: false, minSize: 'Non-text only' },
    // ✔ Gold background with dark text (badges)
    { label: 'Sumi on gold (badge)', fg: '#1C1C1E', bg: '#C9A84C', lc: 62.2, threshold: 45, passes: true, minSize: '16px bold' },
  ],
};

// ─── Aizome palette — light mode ─────────────────────────────────────────────
export const AIZOME_LIGHT_TOKENS: PaletteTokens = {
  surfaces: {
    '--surface-base':    '#F5F4EF',  // shironeri
    '--surface-raised':  '#EAE8E0',  // washi
    '--surface-overlay': '#FFFFFF',
    '--border-default':  '#D9D5C7',  // kinari
    '--border-strong':   '#6B7280',
  },
  text: {
    '--text-primary':   '#1C1C1E',  // sumi   — Lc +99.0 ✔ body
    '--text-secondary': '#6B7280',  // hai    — Lc +68.0 ✔ ≥18px
    '--text-muted':     '#9CA3AF',
  },
  accent: {
    '--accent-primary': '#2B5BA8',  // aiiro  — Lc +77.0 on shironeri ✔ body links
    '--accent-hover':   '#1A2744',  // nōkon
    '--accent-subtle':  'rgba(43, 91, 168, 0.10)',
    '--accent-border':  'rgba(43, 91, 168, 0.30)',
  },
  semantic: {
    '--color-success': '#2D6A4F',
    '--color-warning': '#B45309',
    '--color-error':   '#9B1C1C',
    '--color-info':    '#2563EB',
  },
  validatedPairs: [
    { label: 'Body text', fg: '#1C1C1E', bg: '#F5F4EF', lc: 99.0, threshold: 75, passes: true },
    { label: 'Aiiro link on shironeri', fg: '#2B5BA8', bg: '#F5F4EF', lc: 77.0, threshold: 75, passes: true },
    { label: 'Secondary text (≥18px)', fg: '#6B7280', bg: '#F5F4EF', lc: 68.0, threshold: 60, passes: true, minSize: '18px' },
    { label: 'Card link on washi', fg: '#2B5BA8', bg: '#EAE8E0', lc: 70.7, threshold: 60, passes: true, minSize: '18px' },
    // ✘ Flagged failures
    { label: 'Asagi on shironeri — PROHIBITED as text', fg: '#4DB3CC', bg: '#F5F4EF', lc: 43.1, threshold: 45, passes: false, minSize: 'Non-text only' },
  ],
};

// ─── Aizome palette — dark mode (kachiiro ground) ────────────────────────────
export const AIZOME_DARK_TOKENS: PaletteTokens = {
  surfaces: {
    '--surface-base':    '#1B2A4A',  // kachiiro
    '--surface-raised':  '#1A2744',  // nōkon
    '--surface-overlay': '#222C42',
    '--border-default':  'rgba(75, 179, 204, 0.15)',
    '--border-strong':   'rgba(75, 179, 204, 0.35)',
  },
  text: {
    '--text-primary':   '#F5F4EF',  // shironeri — Lc −91.4 ✔ body
    '--text-secondary': '#4DB3CC',  // asagi     — Lc −48.9 ✔ interactive
    '--text-muted':     '#A8D8EA',  // mizuiro   — Lc −71.3 ✔ ≥18px labels
  },
  accent: {
    '--accent-primary': '#4DB3CC',  // asagi     — Lc −48.9 on kachiiro ✔ interactive
    '--accent-hover':   '#3B82C4',  // hanada
    '--accent-subtle':  'rgba(75, 179, 204, 0.12)',
    '--accent-border':  'rgba(75, 179, 204, 0.35)',
  },
  semantic: {
    '--color-success': '#2D6A4F',
    '--color-warning': '#B45309',
    '--color-error':   '#9B1C1C',
    '--color-info':    '#2563EB',
  },
  validatedPairs: [
    { label: 'Body text on kachiiro', fg: '#F5F4EF', bg: '#1B2A4A', lc: -91.4, threshold: 75, passes: true },
    { label: 'Body text on nōkon', fg: '#F5F4EF', bg: '#1A2744', lc: -92.5, threshold: 75, passes: true },
    { label: 'Asagi interactive on kachiiro', fg: '#4DB3CC', bg: '#1B2A4A', lc: -48.9, threshold: 45, passes: true, minSize: '16px bold' },
    { label: 'Asagi interactive on nōkon', fg: '#4DB3CC', bg: '#1A2744', lc: -50.0, threshold: 45, passes: true, minSize: '16px bold' },
    { label: 'Mizuiro label (≥18px)', fg: '#A8D8EA', bg: '#1B2A4A', lc: -71.3, threshold: 60, passes: true, minSize: '18px' },
    // ✘ Flagged failures
    { label: 'Aiiro on kachiiro — PROHIBITED', fg: '#2B5BA8', bg: '#1B2A4A', lc: -15.1, threshold: 45, passes: false },
    { label: 'Hanada on kachiiro — borders only', fg: '#3B82C4', bg: '#1B2A4A', lc: -29.6, threshold: 45, passes: false, minSize: 'Non-text only' },
  ],
};
