// Core hooks and providers
export { useZanshinPalette } from './hooks/useZanshinPalette';
export type { UseZanshinPaletteOptions, UseZanshinPaletteReturn } from './hooks/useZanshinPalette';

export { ZanshinProvider, useZanshin, PaletteToggle, ThemeToggle } from './providers/ZanshinProvider';
export type { ZanshinProviderProps } from './providers/ZanshinProvider';

// Token types
export type { Palette, Theme, PaletteTokens, APCAPair } from './tokens';

// Token maps — exposed for CSS-in-JS, testing, or Storybook
export {
  FOUNDATION_TOKENS,
  KINTSUGI_TOKENS,
  AIZOME_LIGHT_TOKENS,
  AIZOME_DARK_TOKENS,
} from './tokens';

// Components
export * from './components';
