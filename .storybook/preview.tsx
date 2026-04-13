import React from 'react';
import type { Preview, Decorator } from '@storybook/react';
import { ZanshinProvider } from '../src/providers/ZanshinProvider';
import type { Palette, Theme } from '../src/tokens';

// ─── Global styles injected into storybook-root ─────────────────────────────

const globalStyles = `
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: var(--font-body, 'Inter', system-ui, sans-serif);
    background: var(--surface-base, #F5F4EF);
    color: var(--text-primary, #1C1C1E);
  }

  #storybook-root {
    padding: 24px;
    min-height: 100vh;
    background: var(--surface-base);
    transition: background 400ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }

  @keyframes kamae {
    from { opacity: 0; transform: translateY(8px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      transition-duration: 0.01ms !important;
    }
  }
`;

// ─── Toolbar globals definition ──────────────────────────────────────────────

const PALETTE_PARAM = 'zanshinPalette';
const THEME_PARAM = 'zanshinTheme';

// ─── Decorator ───────────────────────────────────────────────────────────────

const withZanshinProvider: Decorator = (Story, context) => {
  const palette = (context.globals[PALETTE_PARAM] ?? 'aizome') as Palette;
  const theme = (context.globals[THEME_PARAM] ?? 'light') as Theme;

  // Apply to storybook-root element
  React.useEffect(() => {
    const root = document.getElementById('storybook-root');
    if (root) {
      root.setAttribute('data-palette', palette);
      root.setAttribute('data-theme', theme);
    }
  }, [palette, theme]);

  return (
    <>
      <style>{globalStyles}</style>
      <ZanshinProvider
        defaultPalette={palette}
        defaultTheme={theme}
        storageKey={null}
        warnOnAPCAFailures={false}
      >
        <Story />
      </ZanshinProvider>
    </>
  );
};

const preview: Preview = {
  decorators: [withZanshinProvider],

  globalTypes: {
    [PALETTE_PARAM]: {
      description: 'Active color palette',
      defaultValue: 'aizome',
      toolbar: {
        title: 'Palette',
        icon: 'paintbrush',
        items: [
          { value: 'kintsugi', title: '金継ぎ Kintsugi', right: 'Warm gold' },
          { value: 'aizome', title: '藍染 Aizome', right: 'Indigo blue' },
        ],
        dynamicTitle: true,
      },
    },
    [THEME_PARAM]: {
      description: 'Light or dark theme',
      defaultValue: 'light',
      toolbar: {
        title: 'Theme',
        icon: 'circlehollow',
        items: [
          { value: 'light', title: '☀ Light', right: 'Shironeri ground' },
          { value: 'dark', title: '◑ Dark', right: 'Kachiiro ground' },
        ],
        dynamicTitle: true,
      },
    },
  },

  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      theme: undefined,
    },
  },
};

export default preview;
