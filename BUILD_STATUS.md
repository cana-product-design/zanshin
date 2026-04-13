# Build Status

Last run: 2024

---

## Step Results

| Step | Status | Notes |
|---|---|---|
| Project scaffold | ✅ PASS | package.json, tsconfig.json, LICENSE, directory structure |
| Core files renamed | ✅ PASS | tokens.ts, apca.ts, apca.test.ts copied; useZanshinPalette, ZanshinProvider renamed |
| Components (12) | ✅ PASS | Button, Input, Badge, Card, Nav, Divider, Tooltip, Modal, Select, Toast, Tabs, Table |
| Storybook config | ✅ PASS | main.ts + preview.tsx with toolbar addon (Palette + Theme) |
| Stories (12 + 3 MDX) | ✅ PASS | All component stories + Introduction, DesignTokens, Accessibility docs |
| README.md | ✅ PASS | Philosophy, install, quick start, palette table, component list, APCA section |
| CHANGELOG.md | ✅ PASS | Complete v1.0.0 entry with all additions |
| GitHub Actions | ✅ PASS | apca-ci.yml + storybook-pages.yml |
| npm install | ✅ PASS | 277 packages (--legacy-peer-deps for Storybook peer resolution) |
| **APCA test suite** | ✅ **29/29 PASS** | All 29 Vitest tests passing |
| **Storybook build** | ✅ **PASS** | Clean build, 0 errors, output: storybook-static/ |

---

## APCA Test Results

```
✓ src/apca.test.ts (29 tests) 11ms

Test Files  1 passed (1)
     Tests  29 passed (29)
   Duration  309ms
```

**Test groups:**
- kintsugi (light mode): 5 tests — regression detection, annotation accuracy, spot-checks
- aizome light mode: 5 tests — regression detection, annotation accuracy, spot-checks
- aizome dark mode (annotation + passing pairs only): 4 tests
- APCA engine self-test (reference values): 5 tests

---

## Storybook Build Results

```
info => Building manager..   ✓  313ms
info => Building preview..   ✓  7.39s
info => Output directory: storybook-static/
```

- 0 errors
- 2 eval warnings in Storybook's own bundle (upstream, not Zanshin code)
- Chunk size warnings for Storybook vendor bundles (upstream)
- All 15 stories compiled (12 component + 3 MDX docs)

---

## Renaming Checklist

| Old name | New name | Status |
|---|---|---|
| `useJapanesePalette` | `useZanshinPalette` | ✅ |
| `PaletteProvider` | `ZanshinProvider` | ✅ |
| `usePalette` | `useZanshin` | ✅ |
| `use-japanese-palette` | `@zanshin/ui` | ✅ |
| `jp-palette` (localStorage) | `zanshin-palette` | ✅ |
| `[useJapanesePalette]` (console) | `[zanshin]` | ✅ |

---

## File Structure

```
zanshin/
  package.json                   @zanshin/ui v1.0.0
  tsconfig.json
  LICENSE                        MIT
  README.md
  CHANGELOG.md
  BUILD_STATUS.md
  src/
    tokens.ts                    APCA-validated token maps (3 palettes)
    apca.ts                      APCA-W3 algorithm
    apca.test.ts                 29-test Vitest suite
    hooks/
      useZanshinPalette.ts       Core palette/theme hook
    providers/
      ZanshinProvider.tsx        Context provider + PaletteToggle + ThemeToggle
    components/
      Button.tsx
      Input.tsx
      Badge.tsx
      Card.tsx
      Nav.tsx
      Divider.tsx
      Tooltip.tsx
      Modal.tsx
      Select.tsx
      Toast.tsx
      Tabs.tsx
      Table.tsx
      index.ts
    index.ts                     Public barrel export
  .storybook/
    main.ts
    preview.tsx                  ZanshinProvider decorator + toolbar globals
  stories/
    docs/
      Introduction.mdx
      DesignTokens.mdx
      Accessibility.mdx
    components/
      Button.stories.tsx
      Input.stories.tsx
      Badge.stories.tsx
      Card.stories.tsx
      Nav.stories.tsx
      Divider.stories.tsx
      Tooltip.stories.tsx
      Modal.stories.tsx
      Select.stories.tsx
      Toast.stories.tsx
      Tabs.stories.tsx
      Table.stories.tsx
  .github/
    workflows/
      apca-ci.yml
      storybook-pages.yml
  storybook-static/              Built Storybook output
  node_modules/
```
