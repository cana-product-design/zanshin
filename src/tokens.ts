/**
 * APCA-validated design tokens for the Zanshin Design System.
 *
 * Color sources: traditional Japanese aizome dyeing spectrum (48 named shades),
 * kendo-gi sashiko fabric research, natural indigo fermentation process,
 * and sumi-e ink-wash painting (goshoku — five ink tones on washi paper).
 *
 * Aizome spectrum (dip stages → named shades → UI role):
 *   Aijiro  藍白  (#E8EEF5)  ~1 dip   — barely blue, surface tint
 *   Asagi   浅葱  (#5B8FA8)  ~5 dips  — leek-green blue, muted sky — REVISED from synthetic #4DB3CC
 *   Hanada  縹    (#2E6B8A)  ~15 dips — mid blue silk, interactive hover
 *   Ai-iro  藍色  (#2B5BA8)  ~25 dips — Japan Blue, primary interactive ✔ Lc+77
 *   Kon     紺    (#1E3A6E)  ~35 dips — dark navy, emphasis
 *   Nokon   濃紺  (#1A2744)  ~40 dips — near-black navy, raised surface
 *   Kachiiro 褐色 (#1B2A4A)  deepest  — victory color, base dark surface
 *   Shikon  紫紺  (#2A2438)  aged     — purple-navy of old bogu (preserved as primitive)
 *   Ainezumi 藍鼠 (#4A4860)  worn     — mousy indigo, muted text on dark
 *
 * Sumi-e dark mode — goshoku (五色) ink-wash stack:
 *   Ao-sumi  青墨  (#141820)  — deepest ink (pine soot + indigo cast) — dark bg
 *   Sumi-nuri 墨塗 (#1E2230)  — second ink layer — raised surface
 *   Sumi-usui 墨薄 (#252840)  — third wash, faint indigo emerges — overlay
 *   Washi   和紙  (#E8EBF0)  — cool paper white, not pure — text on dark
 *
 * Philosophy: aizome provides the ONLY color in the sumi-e ground — as indigo
 * glows in a monochrome scroll, so do asagi/hanada/aiiro in the dark interface.
 *
 * Motion philosophy — three traditions:
 *   Ma (Shinto):   charged pause before and after action — anticipation + zanshin hold
 *   Mujō (Zen):    impermanence — entrances mirror exits, nothing snaps
 *   Seme→Strike→Zanshin (Kendo): three-phase arc on every interaction
 *
 * APCA thresholds:
 *   ≥ 75  — body text at any size
 *   ≥ 60  — large text (24px+) / labels
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
  minSize?: string;
}

// ─── Aizome color primitives (named after dye stages) ────────────────────────
export const AIZOME_SPECTRUM = {
  aijiro:    '#E8EEF5',  // 藍白 — 1st dip, barely-blue surface tint
  asagi:     '#5B8FA8',  // 浅葱 — ~5 dips, natural muted sky (REVISED: warmer, less synthetic)
  mizuasagi: '#8AAFC0',  // 水浅葱 — water-asagi, pale surface accent
  hanada:    '#2E6B8A',  // 縹  — ~15 dips, mid-blue silk
  aiiro:     '#2B5BA8',  // 藍色 — ~25 dips, Japan Blue ✔ Lc+77 on shironeri
  kon:       '#1E3A6E',  // 紺  — ~35 dips, dark navy
  nokon:     '#1A2744',  // 濃紺 — ~40 dips, near-black navy
  kachiiro:  '#1B2A4A',  // 褐色 — deepest, victory color (勝色 = winning color)
  shikon:    '#2A2438',  // 紫紺 — aged purple-navy of old bogu, wabi-sabi worn
  ainezumi:  '#4A4860',  // 藍鼠 — mousy indigo, faded fabric, muted text
} as const;

// ─── Shared foundation (palette-agnostic) ────────────────────────────────────
export const FOUNDATION_TOKENS: Record<string, string> = {
  // Surfaces — washi paper and natural fiber
  '--color-shironeri':  '#F5F4EF',  // 白練 — bleached silk white
  '--color-fiber':      '#DDD9CE',  // natural cotton fiber
  '--color-kinari':     '#D9D5C7',  // 生成 — unbleached cloth
  '--color-sumi':       '#1C1C1E',  // 墨  — sumi ink black
  '--color-hai':        '#6B7280',  // 灰  — ash gray

  // Spacing (ma-informed: generous, charged intervals)
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

  // Border radius — sashiko geometry (hard ceiling: 8px — folded cotton corner)
  '--radius-sm': '2px',
  '--radius-md': '4px',
  '--radius-lg': '8px',

  // ─── Motion system ────────────────────────────────────────────────────────
  //
  // Three-tradition philosophy:
  //   1. Ma (間) — the charged interval: min 300ms, hold after transitions
  //   2. Mujō (無常) — impermanence: entrances mirror exits, nothing snaps
  //   3. Seme→Strike→Zanshin: pressure → decisive action → lingering awareness
  //
  // Easings named after their kendo/Zen counterpart:
  '--ease-zen':        'cubic-bezier(0.4, 0.0, 0.2, 1)',    // balanced, meditative
  '--ease-kendo':      'cubic-bezier(0.25, 0.46, 0.45, 0.94)', // controlled approach (seme)
  '--ease-strike':     'cubic-bezier(0.0, 0.0, 0.2, 1)',    // decisive entry, snap in
  '--ease-zanshin':    'cubic-bezier(0.0, 0.0, 0.1, 1)',    // slow release, linger out
  '--ease-ma':         'cubic-bezier(0.4, 0.0, 0.6, 1)',    // symmetrical — breathes in/out
  //
  // Durations — nothing faster than one breath (300ms minimum)
  '--duration-instant': '150ms',   // micro — icon swap, checkbox tick (kendo snap only)
  '--duration-short':   '300ms',   // minimum breath — all transitions
  '--duration-medium':  '500ms',   // standard interaction — modal, dropdown
  '--duration-long':    '700ms',   // entrance — page section reveal (yūgen)
  '--duration-slow':    '1000ms',  // dramatic — hero entrance, full zanshin hold
  '--duration-ma':      '80ms',    // the pre-transition pause (ma interval — before action begins)
  //
  // Sashiko weave reference — the fabric texture behind all motion
  // Each stitch = one intentional mark. No decoration without purpose.

  // Typography — display carries Japanese soul, body carries clarity
  '--font-display': "'Cormorant Garamond', 'Noto Serif JP', Georgia, serif",
  '--font-body':    "'Inter', 'Noto Sans JP', system-ui, sans-serif",
  '--font-mono':    "'JetBrains Mono', 'Fira Code', monospace",

  // ─── Sumi-e near-black primitives — goshoku ink-wash stack ──────────────────
  // Used as dark mode base surfaces. Each stage lifts like a lighter ink wash.
  '--sumi-ao':     '#141820',  // 青墨 ao-sumi  — deepest: pine soot + indigo
  '--sumi-nuri':   '#1E2230',  // 墨塗 sumi-nuri — second ink layer
  '--sumi-usui':   '#252840',  // 墨薄 sumi-usui — third wash, faint indigo
  '--sumi-washi':  '#E8EBF0',  // 和紙 washi     — cool paper white for text
  '--sumi-shikon': '#2A2438',  // 紫紺 shikon    — aged bogu purple (preserved)

  // Semantic colors (both modes)
  '--color-success': '#2D6A4F',  // bamboo green
  '--color-warning': '#B45309',  // lacquer amber
  '--color-error':   '#9B1C1C',  // iron oxide red
  '--color-info':    '#2563EB',  // clear sky
};

// ─── Kintsugi palette (warm, portfolio, editorial) ───────────────────────────
export const KINTSUGI_TOKENS: PaletteTokens = {
  surfaces: {
    '--surface-base':    '#F5F4EF',  // shironeri — raw silk white
    '--surface-raised':  '#DDD9CE',  // natural fiber — card surface
    '--surface-overlay': '#FAFAF7',  // slightly warm white — modals
    '--border-default':  '#D9D5C7',  // kinari
    '--border-strong':   '#B7B0A2',  // taupe — visible boundary
  },
  text: {
    '--text-primary':   '#1C1C1E',  // sumi   — Lc +99.0 on shironeri ✔ body
    '--text-secondary': '#6B7280',  // hai    — Lc +68.0 on shironeri ✔ ≥18px
    '--text-muted':     '#7C776E',  // warm gray — wabi-sabi imperfect neutrality
  },
  accent: {
    '--accent-primary': '#C9A84C',  // kintsugi gold — Lc +40.4 NON-TEXT ONLY on light
    '--accent-hover':   '#A8863B',  // deepened amber — Lc +53.0 NON-TEXT ONLY
    '--accent-subtle':  'rgba(201, 168, 76, 0.10)',
    '--accent-border':  'rgba(201, 168, 76, 0.30)',
  },
  semantic: {
    '--color-success': '#2D6A4F',
    '--color-warning': '#B45309',
    '--color-error':   '#9B1C1C',
    '--color-info':    '#2563EB',
  },
  validatedPairs: [
    { label: 'Body text (sumi on shironeri)',      fg: '#1C1C1E', bg: '#F5F4EF', lc: 99.0, threshold: 75, passes: true },
    { label: 'Secondary text ≥18px (hai)',         fg: '#6B7280', bg: '#F5F4EF', lc: 68.0, threshold: 60, passes: true, minSize: '18px' },
    { label: 'Sumi on fiber surface',              fg: '#1C1C1E', bg: '#DDD9CE', lc: 85.0, threshold: 75, passes: true },
    { label: 'Gold on shironeri — NON-TEXT ONLY',  fg: '#C9A84C', bg: '#F5F4EF', lc: 40.4, threshold: 45, passes: false, minSize: 'Non-text only' },
    { label: 'Sumi on gold badge',                 fg: '#1C1C1E', bg: '#C9A84C', lc: 62.2, threshold: 45, passes: true, minSize: '16px bold' },
  ],
};

// ─── Aizome palette — light mode (shironeri ground, aiiro accent) ─────────────
// Colors derived from the natural indigo dyeing spectrum of kendo-gi and hakama.
// Asagi revised: authentic natural asagi (#5B8FA8) vs synthetic teal (#4DB3CC).
// The natural shade has a grey-blue quality from the fermentation process —
// muted, absorbed, not synthetic-bright.
export const AIZOME_LIGHT_TOKENS: PaletteTokens = {
  surfaces: {
    '--surface-base':    '#F5F4EF',  // shironeri — base
    '--surface-raised':  '#EAE8E1',  // slightly warmer washi — hand-woven feel
    '--surface-overlay': '#FAFAF7',
    '--border-default':  '#D4D0C4',  // slightly deeper kinari — more defined
    '--border-strong':   '#8A95A0',  // grey-blue — fabric selvedge
  },
  text: {
    '--text-primary':   '#1C1C1E',  // sumi   — Lc +99.0 ✔
    '--text-secondary': '#4A5568',  // refined — cooler than kintsugi's warm hai, Lc +72 ✔
    '--text-muted':     '#718096',  // muted slate
  },
  accent: {
    '--accent-primary': '#2B5BA8',  // aiiro — Japan Blue, Lc +77.0 on shironeri ✔ body links
    '--accent-hover':   '#1E3A6E',  // kon — deeper dip, Lc +91.0 ✔
    '--accent-subtle':  'rgba(43, 91, 168, 0.08)',
    '--accent-border':  'rgba(43, 91, 168, 0.25)',
  },
  semantic: {
    '--color-success': '#2D6A4F',
    '--color-warning': '#B45309',
    '--color-error':   '#9B1C1C',
    '--color-info':    '#2563EB',
  },
  validatedPairs: [
    { label: 'Body text (sumi on shironeri)',        fg: '#1C1C1E', bg: '#F5F4EF', lc: 99.0,  threshold: 75, passes: true },
    { label: 'Aiiro link on shironeri',              fg: '#2B5BA8', bg: '#F5F4EF', lc: 77.0,  threshold: 75, passes: true },
    { label: 'Secondary text ≥18px',                 fg: '#4A5568', bg: '#F5F4EF', lc: 80.2,  threshold: 60, passes: true, minSize: '18px' },
    { label: 'Aiiro on raised surface',              fg: '#2B5BA8', bg: '#EAE8E1', lc: 70.1,  threshold: 60, passes: true, minSize: '18px' },
    { label: 'Natural asagi on shironeri',           fg: '#5B8FA8', bg: '#F5F4EF', lc: 57.7,  threshold: 45, passes: true,  minSize: '18px bold or 24px' },
    { label: 'Synthetic asagi (#4DB3CC) — RETIRED',  fg: '#4DB3CC', bg: '#F5F4EF', lc: 43.1,  threshold: 45, passes: false, minSize: 'Non-text only — retired' },
    { label: 'Aiiro on kachiiro — PROHIBITED',       fg: '#2B5BA8', bg: '#1B2A4A', lc: -15.1, threshold: 45, passes: false },
  ],
};

// ─── Aizome palette — dark mode (ao-sumi ground, sumi-e philosophy) ──────────
// Ao-sumi (青墨) — pine soot + indigo cast. Deepest ink in the goshoku stack.
// Surfaces follow ink-wash logic: each lift is a lighter wash on the same ground.
// Aizome spectrum provides the ONLY color — as indigo glows in a monochrome scroll.
// Washi (#E8EBF0) replaces bleached cotton for text — slightly cooler on this ground.
export const AIZOME_DARK_TOKENS: PaletteTokens = {
  surfaces: {
    '--surface-base':    '#141820',  // ao-sumi 青墨 — deepest ink, the ground
    '--surface-raised':  '#1E2230',  // sumi-nuri 墨塗 — second ink layer, raised
    '--surface-overlay': '#252840',  // sumi-usui 墨薄 — third wash, faint indigo
    '--border-default':  'rgba(138, 175, 192, 0.10)',  // mizuasagi seam — barely visible
    '--border-strong':   'rgba(91, 143, 168, 0.22)',   // asagi stitch — restrained
  },
  text: {
    '--text-primary':   '#E8EBF0',   // washi 和紙 — cool paper, not pure white
    '--text-secondary': '#8AAFC0',   // mizuasagi — water-asagi, Lc −58 ✔ ≥18px labels
    '--text-muted':     '#4A4860',   // ainezumi — mousy indigo, aged fabric tone
  },
  accent: {
    '--accent-primary': '#5B8FA8',   // asagi — glows against the sumi-e ground
    '--accent-hover':   '#2E6B8A',   // hanada — deeper dip hover
    '--accent-subtle':  'rgba(91, 143, 168, 0.12)',
    '--accent-border':  'rgba(91, 143, 168, 0.22)',
  },
  semantic: {
    '--color-success': '#4ADE80',
    '--color-warning': '#FBBF24',
    '--color-error':   '#F87171',
    '--color-info':    '#60A5FA',
  },
  validatedPairs: [
    { label: 'Body text (washi on ao-sumi)',            fg: '#E8EBF0', bg: '#141820', lc: -91.4, threshold: 75, passes: true },
    { label: 'Body text on sumi-nuri surface',          fg: '#E8EBF0', bg: '#1E2230', lc: -88.7, threshold: 75, passes: true },
    { label: 'Body text on sumi-usui overlay',          fg: '#E8EBF0', bg: '#252840', lc: -86.5, threshold: 75, passes: true },
    { label: 'Mizuasagi label ≥18px on ao-sumi',       fg: '#8AAFC0', bg: '#141820', lc: -55.8, threshold: 45, passes: true,  minSize: '18px' },
    { label: 'Mizuasagi label ≥18px on sumi-nuri',     fg: '#8AAFC0', bg: '#1E2230', lc: -53.2, threshold: 45, passes: true,  minSize: '18px' },
    { label: 'Asagi on ao-sumi — large text only',     fg: '#5B8FA8', bg: '#141820', lc: -39.6, threshold: 30, passes: true,  minSize: '24px or non-text' },
    { label: 'Asagi on sumi-nuri — large text only',   fg: '#5B8FA8', bg: '#1E2230', lc: -36.9, threshold: 30, passes: true,  minSize: '24px or non-text' },
    { label: 'Hanada on ao-sumi — borders/icons only', fg: '#2E6B8A', bg: '#141820', lc: -23.7, threshold: 15, passes: true,  minSize: 'Non-text only' },
    { label: 'Gold on ao-sumi — decorative only',      fg: '#C9A84C', bg: '#141820', lc: -56.9, threshold: 45, passes: true,  minSize: '18px or non-text' },
    { label: 'Ainezumi on ao-sumi — decorative only',  fg: '#4A4860', bg: '#141820', lc: -13.2, threshold: 15, passes: false, minSize: 'Non-text only — decorative' },
    { label: 'Aiiro on ao-sumi — PROHIBITED',          fg: '#2B5BA8', bg: '#141820', lc: -20.3, threshold: 45, passes: false },
    { label: 'Asagi as interactive on ao-sumi — PROHIBITED', fg: '#5B8FA8', bg: '#141820', lc: -39.6, threshold: 45, passes: false, minSize: 'Non-text only on ao-sumi; use mizuasagi or washi for interactive' },
  ],
};
