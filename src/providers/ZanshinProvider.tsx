import React, {
  createContext,
  useContext,
  type ReactNode,
} from 'react';
import {
  useZanshinPalette,
  UseZanshinPaletteOptions,
  UseZanshinPaletteReturn,
} from '../hooks/useZanshinPalette';

// ─── Context ──────────────────────────────────────────────────────────────────

const ZanshinContext = createContext<UseZanshinPaletteReturn | null>(null);

// ─── Provider ─────────────────────────────────────────────────────────────────

export interface ZanshinProviderProps extends UseZanshinPaletteOptions {
  children: ReactNode;
}

/**
 * Wraps the app (or a subtree) and exposes palette/theme state via context.
 * Tokens are applied to document.documentElement by default.
 * Pass `target` prop to scope to a specific element.
 */
export function ZanshinProvider({ children, ...options }: ZanshinProviderProps) {
  const value = useZanshinPalette(options);
  return (
    <ZanshinContext.Provider value={value}>
      {children}
    </ZanshinContext.Provider>
  );
}

// ─── Consumer hook ────────────────────────────────────────────────────────────

export function useZanshin(): UseZanshinPaletteReturn {
  const ctx = useContext(ZanshinContext);
  if (!ctx) {
    throw new Error('useZanshin must be used inside <ZanshinProvider>');
  }
  return ctx;
}

// ─── Convenience toggle components ───────────────────────────────────────────

/**
 * Minimal unstyled toggle button — style via CSS custom properties.
 * Uses only APCA-validated token pairings from the active palette.
 */
export function PaletteToggle({
  className,
  label,
}: {
  className?: string;
  label?: (palette: string, theme: string) => string;
}) {
  const { palette, theme, togglePalette } = useZanshin();
  const defaultLabel = palette === 'kintsugi'
    ? '藍染 Aizome'
    : '金継ぎ Kintsugi';

  return (
    <button
      onClick={togglePalette}
      className={className}
      aria-label={`Switch to ${palette === 'kintsugi' ? 'Aizome' : 'Kintsugi'} palette`}
      style={{
        /* APCA-safe: sumi on surface-base (Lc +99) */
        color:      'var(--text-primary)',
        background: 'var(--surface-raised)',
        border:     '1px solid var(--border-default)',
        borderRadius: 'var(--radius-md)',
        padding:    'var(--space-2) var(--space-4)',
        fontFamily: 'var(--font-body)',
        fontSize:   '13px',
        letterSpacing: '0.05em',
        cursor: 'pointer',
        transition: 'background var(--duration-slow) var(--ease-kendo), border-color var(--duration-slow) var(--ease-kendo)',
      }}
    >
      {label ? label(palette, theme) : defaultLabel}
    </button>
  );
}

export function ThemeToggle({
  className,
}: {
  className?: string;
}) {
  const { theme, toggleTheme } = useZanshin();

  return (
    <button
      onClick={toggleTheme}
      className={className}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      style={{
        color:      'var(--text-primary)',
        background: 'transparent',
        border:     '1px solid var(--border-default)',
        borderRadius: 'var(--radius-md)',
        padding:    'var(--space-2) var(--space-4)',
        fontFamily: 'var(--font-body)',
        fontSize:   '13px',
        letterSpacing: '0.05em',
        cursor: 'pointer',
        transition: 'border-color var(--duration-slow) var(--ease-kendo)',
      }}
    >
      {theme === 'light' ? '◑ Dark' : '◐ Light'}
    </button>
  );
}
