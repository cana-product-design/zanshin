import { useState, useEffect, useCallback, useRef } from 'react';
import {
  Palette,
  Theme,
  PaletteTokens,
  APCAPair,
  FOUNDATION_TOKENS,
  KINTSUGI_TOKENS,
  AIZOME_LIGHT_TOKENS,
  AIZOME_DARK_TOKENS,
} from '../tokens';

// ─── Types ────────────────────────────────────────────────────────────────────

export interface UseZanshinPaletteOptions {
  /**
   * Initial palette mode.
   * @default 'kintsugi'
   */
  defaultPalette?: Palette;
  /**
   * Initial dark/light theme.
   * Defaults to the user's OS preference via prefers-color-scheme.
   */
  defaultTheme?: Theme;
  /**
   * Element to apply data-palette and data-theme attributes to.
   * @default document.documentElement
   */
  target?: HTMLElement | null;
  /**
   * Persist selection to localStorage under this key.
   * Pass null to disable persistence.
   * @default 'zanshin-palette'
   */
  storageKey?: string | null;
  /**
   * Emit console warnings when a CSS token is used in a context
   * that fails the APCA interactive threshold.
   * @default true
   */
  warnOnAPCAFailures?: boolean;
}

export interface UseZanshinPaletteReturn {
  /** Active palette mode */
  palette: Palette;
  /** Active theme */
  theme: Theme;
  /** Is dark mode active */
  isDark: boolean;
  /** Toggle between kintsugi ↔ aizome */
  togglePalette: () => void;
  /** Set palette explicitly */
  setPalette: (p: Palette) => void;
  /** Toggle between light ↔ dark */
  toggleTheme: () => void;
  /** Set theme explicitly */
  setTheme: (t: Theme) => void;
  /**
   * APCA-validated pairs for the current mode.
   * Includes both passing and flagged-failing pairs.
   */
  validatedPairs: APCAPair[];
  /**
   * Only the failing pairs — use to drive runtime accessibility warnings
   * or a dev-mode contrast audit overlay.
   */
  apcaFailures: APCAPair[];
  /**
   * Resolved CSS custom property value for a given token name.
   * Reads from the live DOM — works after tokens are applied.
   * @example getToken('--accent-primary') → '#4DB3CC'
   */
  getToken: (name: string) => string;
  /**
   * Full token map for the current palette + theme combination.
   * Useful for styled-components, CSS-in-JS, or passing to canvas/SVG renderers.
   */
  tokens: PaletteTokens;
}

// ─── Storage helpers ──────────────────────────────────────────────────────────

function readStorage(key: string): { palette?: Palette; theme?: Theme } {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function writeStorage(key: string, value: object) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // Silently fail — storage may be unavailable (SSR, private mode)
  }
}

// ─── OS theme detection ───────────────────────────────────────────────────────

function getSystemTheme(): Theme {
  if (typeof window === 'undefined') return 'light';
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

// ─── Token application ────────────────────────────────────────────────────────

function resolveTokens(palette: Palette, theme: Theme): PaletteTokens {
  if (palette === 'kintsugi') return KINTSUGI_TOKENS;
  return theme === 'dark' ? AIZOME_DARK_TOKENS : AIZOME_LIGHT_TOKENS;
}

function applyTokens(target: HTMLElement, tokens: PaletteTokens) {
  const all: Record<string, string> = {
    ...FOUNDATION_TOKENS,
    ...tokens.surfaces,
    ...tokens.text,
    ...tokens.accent,
    ...tokens.semantic,
  };
  for (const [prop, value] of Object.entries(all)) {
    target.style.setProperty(prop, value);
  }
}

function clearTokens(target: HTMLElement) {
  const all = {
    ...FOUNDATION_TOKENS,
    ...KINTSUGI_TOKENS.surfaces,
    ...KINTSUGI_TOKENS.text,
    ...KINTSUGI_TOKENS.accent,
    ...AIZOME_DARK_TOKENS.surfaces,
    ...AIZOME_DARK_TOKENS.text,
    ...AIZOME_DARK_TOKENS.accent,
  };
  for (const prop of Object.keys(all)) {
    target.style.removeProperty(prop);
  }
}

// ─── Hook ─────────────────────────────────────────────────────────────────────

export function useZanshinPalette({
  defaultPalette = 'kintsugi',
  defaultTheme,
  target = null,
  storageKey = 'zanshin-palette',
  warnOnAPCAFailures = true,
}: UseZanshinPaletteOptions = {}): UseZanshinPaletteReturn {

  // Resolve initial state — storage > prop > system
  const [palette, setPaletteState] = useState<Palette>(() => {
    if (storageKey) {
      const stored = readStorage(storageKey);
      if (stored.palette) return stored.palette;
    }
    return defaultPalette;
  });

  const [theme, setThemeState] = useState<Theme>(() => {
    if (storageKey) {
      const stored = readStorage(storageKey);
      if (stored.theme) return stored.theme;
    }
    return defaultTheme ?? getSystemTheme();
  });

  // Stable ref to the target element — defaults to <html>
  const targetRef = useRef<HTMLElement | null>(
    target ?? (typeof document !== 'undefined' ? document.documentElement : null)
  );

  // Sync target ref when prop changes
  useEffect(() => {
    if (target !== null) targetRef.current = target;
  }, [target]);

  // Apply data attributes + CSS tokens whenever palette/theme changes
  useEffect(() => {
    const el = targetRef.current;
    if (!el) return;

    el.setAttribute('data-palette', palette);
    el.setAttribute('data-theme', theme);

    const resolved = resolveTokens(palette, theme);
    applyTokens(el, resolved);

    // APCA failure warnings in development
    if (warnOnAPCAFailures && process.env.NODE_ENV !== 'production') {
      const failures = resolved.validatedPairs.filter(p => !p.passes);
      failures.forEach(pair => {
        console.warn(
          `[zanshin] APCA failure in "${palette}" (${theme}) mode:\n` +
          `  ${pair.label}\n` +
          `  fg: ${pair.fg}  bg: ${pair.bg}  Lc: ${pair.lc}  threshold: Lc ≥ ${pair.threshold}\n` +
          `  → ${pair.minSize ?? 'Do not use for text'}`
        );
      });
    }

    // Persist
    if (storageKey) {
      writeStorage(storageKey, { palette, theme });
    }

    return () => {
      // Cleanup only if the element still exists
      if (el.isConnected) {
        clearTokens(el);
        el.removeAttribute('data-palette');
        el.removeAttribute('data-theme');
      }
    };
  }, [palette, theme, storageKey, warnOnAPCAFailures]);

  // Listen for OS theme changes and sync if no explicit override was stored
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mq = window.matchMedia('(prefers-color-scheme: dark)');

    const handler = (e: MediaQueryListEvent) => {
      // Only auto-sync if the user hasn't manually set a preference
      if (storageKey) {
        const stored = readStorage(storageKey);
        if (stored.theme) return; // user has overridden — respect it
      }
      setThemeState(e.matches ? 'dark' : 'light');
    };

    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, [storageKey]);

  // Public setters — stable references via useCallback
  const setPalette = useCallback((p: Palette) => {
    setPaletteState(p);
  }, []);

  const togglePalette = useCallback(() => {
    setPaletteState(prev => prev === 'kintsugi' ? 'aizome' : 'kintsugi');
  }, []);

  const setTheme = useCallback((t: Theme) => {
    setThemeState(t);
  }, []);

  const toggleTheme = useCallback(() => {
    setThemeState(prev => prev === 'light' ? 'dark' : 'light');
  }, []);

  // Read a resolved CSS custom property from the live DOM
  const getToken = useCallback((name: string): string => {
    const el = targetRef.current;
    if (!el) return '';
    return getComputedStyle(el).getPropertyValue(name).trim();
  }, []);

  const tokens = resolveTokens(palette, theme);
  const apcaFailures = tokens.validatedPairs.filter(p => !p.passes);

  return {
    palette,
    theme,
    isDark: theme === 'dark',
    togglePalette,
    setPalette,
    toggleTheme,
    setTheme,
    validatedPairs: tokens.validatedPairs,
    apcaFailures,
    getToken,
    tokens,
  };
}
