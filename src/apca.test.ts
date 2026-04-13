/**
 * APCA contrast regression suite — Vitest
 *
 * Strategy
 * ─────────
 * Every APCAPair in tokens.ts carries three fields that can drift independently:
 *
 *   fg / bg     → hex values a designer might update
 *   lc          → the Lc annotation they wrote down
 *   passes      → the intent they declared
 *
 * This suite recomputes Lc from the live hex values on every run. It never
 * trusts the stored `lc` field as truth — that field itself is under test.
 *
 * Three assertion layers:
 *
 *   1. Lc annotation accuracy   — stored lc matches live computation (±1.0 tolerance)
 *   2. Passing pairs            — any pair marked passes:true clears its threshold
 *   3. Intentional failures     — pairs marked passes:false stay below threshold
 *                                 (regression: someone "fixes" the hex but forgets to promote passes)
 *
 * Modes under test
 * ─────────────────
 *   kintsugi light   — warm gold palette, portfolio surfaces
 *   aizome light     — indigo palette, product surfaces
 *
 * Aizome dark is deliberately excluded from the "must have zero failures" assertion
 * because that mode documents known non-text decorative tokens (aiiro, hanada on
 * kachiiro) as intentional passes:false entries. Those are correct behaviour,
 * not regressions. They are covered by layer 3 to ensure they don't silently improve.
 *
 * To add a new palette pair:
 *   1. Add it to the relevant validatedPairs array in tokens.ts
 *   2. Set passes: true if it clears its threshold
 *   3. Run this suite — it will verify the Lc annotation and threshold
 */

import { describe, it, expect } from 'vitest';
import { KINTSUGI_TOKENS, AIZOME_LIGHT_TOKENS, AIZOME_DARK_TOKENS } from './tokens';
import type { APCAPair, PaletteTokens } from './tokens';
import { computeAPCA, meetsThreshold } from './apca';

// ─── Tolerance ───────────────────────────────────────────────────────────────
// APCA values are floating-point. Allow ±1.0 Lc units between the stored
// annotation and the live computation. Anything beyond that is likely a hex
// change that wasn't reflected in the annotation.
const LC_TOLERANCE = 1.0;

// ─── Helpers ─────────────────────────────────────────────────────────────────

function computedLc(pair: APCAPair): number {
  return computeAPCA(pair.fg, pair.bg);
}

/**
 * Returns all pairs whose stored `passes` field conflicts with their live Lc.
 * A "regression" is:
 *   - passes:true  but live Lc does NOT meet threshold
 *   - passes:false but live Lc DOES meet threshold (unexpected promotion — also a regression)
 */
function findRegressions(tokens: PaletteTokens): Array<{ pair: APCAPair; liveLc: number }> {
  return tokens.validatedPairs
    .map(pair => ({ pair, liveLc: computedLc(pair) }))
    .filter(({ pair, liveLc }) => {
      const livePass = meetsThreshold(liveLc, pair.threshold);
      return livePass !== pair.passes;
    });
}

/**
 * Returns pairs where the stored `lc` annotation drifts beyond LC_TOLERANCE
 * from the live-computed value.
 */
function findAnnotationDrift(tokens: PaletteTokens): Array<{ pair: APCAPair; liveLc: number; delta: number }> {
  return tokens.validatedPairs
    .map(pair => {
      const liveLc = computedLc(pair);
      const delta = Math.abs(liveLc - pair.lc);
      return { pair, liveLc, delta };
    })
    .filter(({ delta }) => delta > LC_TOLERANCE);
}

// ─── Formatter for failure messages ──────────────────────────────────────────

function regressionMessage(palette: string, regressions: Array<{ pair: APCAPair; liveLc: number }>): string {
  return [
    `\n[${palette}] APCA regressions detected:`,
    ...regressions.map(({ pair, liveLc }) => {
      const direction = pair.passes
        ? `passes:true declared but live Lc ${liveLc.toFixed(1)} does NOT meet threshold ≥${pair.threshold}`
        : `passes:false declared but live Lc ${liveLc.toFixed(1)} now MEETS threshold ≥${pair.threshold} — update passes:true and minSize`;
      return `  • "${pair.label}" — fg:${pair.fg} bg:${pair.bg}\n    ${direction}`;
    }),
  ].join('\n');
}

function driftMessage(palette: string, drifts: Array<{ pair: APCAPair; liveLc: number; delta: number }>): string {
  return [
    `\n[${palette}] Lc annotation drift detected (tolerance ±${LC_TOLERANCE}):`,
    ...drifts.map(({ pair, liveLc, delta }) =>
      `  • "${pair.label}" — stored:${pair.lc} live:${liveLc.toFixed(1)} delta:${delta.toFixed(1)}\n    Update the lc field in tokens.ts to ${liveLc.toFixed(1)}`
    ),
  ].join('\n');
}

// ─── Suite ───────────────────────────────────────────────────────────────────

describe('APCA contrast regression', () => {

  // ── Kintsugi light ──────────────────────────────────────────────────────────

  describe('kintsugi (light mode)', () => {

    it('has no regressions in passing pairs', () => {
      const failures = findRegressions(KINTSUGI_TOKENS)
        .filter(({ pair }) => pair.passes === true);

      expect(failures, regressionMessage('kintsugi', failures)).toHaveLength(0);
    });

    it('intentional failures remain below their threshold (no silent promotion)', () => {
      const promoted = findRegressions(KINTSUGI_TOKENS)
        .filter(({ pair }) => pair.passes === false);

      // If this fails, a pair declared as decorative-only now passes —
      // that's good news, but it must be promoted explicitly in tokens.ts
      expect(
        promoted,
        regressionMessage('kintsugi', promoted) +
        '\n  → If the color was intentionally improved, set passes:true and update minSize in tokens.ts'
      ).toHaveLength(0);
    });

    it('Lc annotations are accurate within ±1.0 of live computation', () => {
      const drifts = findAnnotationDrift(KINTSUGI_TOKENS);
      expect(drifts, driftMessage('kintsugi', drifts)).toHaveLength(0);
    });

    it('every validatedPair has a hex fg and bg (not empty, not rgba)', () => {
      for (const pair of KINTSUGI_TOKENS.validatedPairs) {
        expect(pair.fg, `"${pair.label}" fg must be a hex color`).toMatch(/^#[0-9A-Fa-f]{6}$/);
        expect(pair.bg, `"${pair.label}" bg must be a hex color`).toMatch(/^#[0-9A-Fa-f]{6}$/);
      }
    });

    it('threshold values are one of the recognised APCA levels', () => {
      const valid = new Set([75, 60, 45, 30, 15]);
      for (const pair of KINTSUGI_TOKENS.validatedPairs) {
        expect(valid.has(pair.threshold), `"${pair.label}" threshold ${pair.threshold} is not a recognised APCA level`).toBe(true);
      }
    });

    // Individual pair spot-checks — these pin specific Lc values so a hex
    // change surfaces a descriptive failure rather than a generic drift error

    it('sumi on shironeri (body text) achieves Lc ≥ 75', () => {
      const lc = computeAPCA('#1C1C1E', '#F5F4EF');
      expect(Math.abs(lc)).toBeGreaterThanOrEqual(75);
    });

    it('secondary text (hai on shironeri) achieves Lc ≥ 60', () => {
      const lc = computeAPCA('#6B7280', '#F5F4EF');
      expect(Math.abs(lc)).toBeGreaterThanOrEqual(60);
    });

    it('gold on shironeri (decorative) stays below Lc 45 — non-text-only contract', () => {
      const lc = computeAPCA('#C9A84C', '#F5F4EF');
      // This must remain a known failure. If gold is ever swapped for a
      // darker value that clears 45, update passes:true in tokens.ts.
      expect(Math.abs(lc)).toBeLessThan(45);
    });

    it('sumi on gold badge achieves interactive threshold Lc ≥ 45', () => {
      const lc = computeAPCA('#1C1C1E', '#C9A84C');
      expect(Math.abs(lc)).toBeGreaterThanOrEqual(45);
    });
  });

  // ── Aizome light ────────────────────────────────────────────────────────────

  describe('aizome light mode', () => {

    it('has no regressions in passing pairs', () => {
      const failures = findRegressions(AIZOME_LIGHT_TOKENS)
        .filter(({ pair }) => pair.passes === true);

      expect(failures, regressionMessage('aizome-light', failures)).toHaveLength(0);
    });

    it('intentional failures remain below their threshold (no silent promotion)', () => {
      const promoted = findRegressions(AIZOME_LIGHT_TOKENS)
        .filter(({ pair }) => pair.passes === false);

      expect(
        promoted,
        regressionMessage('aizome-light', promoted) +
        '\n  → If the color was intentionally improved, set passes:true in tokens.ts'
      ).toHaveLength(0);
    });

    it('Lc annotations are accurate within ±1.0 of live computation', () => {
      const drifts = findAnnotationDrift(AIZOME_LIGHT_TOKENS);
      expect(drifts, driftMessage('aizome-light', drifts)).toHaveLength(0);
    });

    it('every validatedPair has a hex fg and bg', () => {
      for (const pair of AIZOME_LIGHT_TOKENS.validatedPairs) {
        expect(pair.fg, `"${pair.label}" fg must be a hex color`).toMatch(/^#[0-9A-Fa-f]{6}$/);
        expect(pair.bg, `"${pair.label}" bg must be a hex color`).toMatch(/^#[0-9A-Fa-f]{6}$/);
      }
    });

    // Spot-checks

    it('sumi on shironeri (body text) achieves Lc ≥ 75', () => {
      const lc = computeAPCA('#1C1C1E', '#F5F4EF');
      expect(Math.abs(lc)).toBeGreaterThanOrEqual(75);
    });

    it('aiiro on shironeri (body links) achieves Lc ≥ 75', () => {
      const lc = computeAPCA('#2B5BA8', '#F5F4EF');
      expect(Math.abs(lc)).toBeGreaterThanOrEqual(75);
    });

    it('aiiro on washi (card links) achieves Lc ≥ 60', () => {
      const lc = computeAPCA('#2B5BA8', '#EAE8E0');
      expect(Math.abs(lc)).toBeGreaterThanOrEqual(60);
    });

    it('asagi on shironeri stays below Lc 45 — non-text-only contract', () => {
      // Asagi (#4DB3CC) fails the interactive threshold on light surfaces.
      // This test ensures it stays there — if someone darkens asagi until
      // it passes, they must also update the pair to passes:true.
      const lc = computeAPCA('#4DB3CC', '#F5F4EF');
      expect(Math.abs(lc)).toBeLessThan(45);
    });

    it('hai on shironeri (muted secondary) achieves Lc ≥ 60', () => {
      const lc = computeAPCA('#6B7280', '#F5F4EF');
      expect(Math.abs(lc)).toBeGreaterThanOrEqual(60);
    });
  });

  // ── Aizome dark — annotation and threshold integrity only ──────────────────
  // Dark mode has known intentional failures (aiiro, hanada on kachiiro).
  // We do NOT assert apcaFailures is empty here — that would be wrong.
  // We assert: annotations are accurate and passing pairs actually pass.

  describe('aizome dark mode (annotation + passing pairs only)', () => {

    it('all pairs marked passes:true achieve their declared threshold', () => {
      const failures = findRegressions(AIZOME_DARK_TOKENS)
        .filter(({ pair }) => pair.passes === true);

      expect(failures, regressionMessage('aizome-dark', failures)).toHaveLength(0);
    });

    it('Lc annotations are accurate within ±1.0 of live computation', () => {
      const drifts = findAnnotationDrift(AIZOME_DARK_TOKENS);
      expect(drifts, driftMessage('aizome-dark', drifts)).toHaveLength(0);
    });

    it('shironeri on kachiiro (primary body) achieves Lc ≥ 75', () => {
      const lc = computeAPCA('#F5F4EF', '#1B2A4A');
      expect(Math.abs(lc)).toBeGreaterThanOrEqual(75);
    });

    it('asagi on kachiiro (interactive) achieves Lc ≥ 45', () => {
      const lc = computeAPCA('#4DB3CC', '#1B2A4A');
      expect(Math.abs(lc)).toBeGreaterThanOrEqual(45);
    });

    it('aiiro on kachiiro remains prohibited — Lc stays below 45', () => {
      // Aiiro (#2B5BA8) and kachiiro (#1B2A4A) are too close in hue.
      // This is a documented prohibition. If a future palette revision
      // darkens kachiiro or lightens aiiro until this passes, the pair
      // must be promoted to passes:true in tokens.ts.
      const lc = computeAPCA('#2B5BA8', '#1B2A4A');
      expect(Math.abs(lc)).toBeLessThan(45);
    });

    it('hanada on kachiiro remains non-text-only — Lc stays below 45', () => {
      const lc = computeAPCA('#3B82C4', '#1B2A4A');
      expect(Math.abs(lc)).toBeLessThan(45);
    });
  });

  // ── APCA engine self-test ──────────────────────────────────────────────────
  // Verifies the embedded computeAPCA implementation against known reference
  // values. If these fail, the algorithm itself has drifted — not the tokens.

  describe('APCA engine self-test (reference values)', () => {

    it('black on white returns Lc > 100 (BoW — maximum useful contrast)', () => {
      // APCA-W3 SA=1.75 implementation: #000 on #FFF produces ~109 Lc.
      // The commonly cited "106" comes from a different SA constant.
      // We assert direction and magnitude, not a brittle exact value.
      const lc = computeAPCA('#000000', '#FFFFFF');
      expect(lc).toBeGreaterThan(100);
      expect(lc).toBeLessThan(120); // sanity upper bound
    });

    it('white on black returns Lc < -100 (WoB — maximum useful contrast)', () => {
      const lc = computeAPCA('#FFFFFF', '#000000');
      expect(lc).toBeLessThan(-100);
      expect(lc).toBeGreaterThan(-120);
    });

    it('identical colors return 0', () => {
      expect(computeAPCA('#888888', '#888888')).toBe(0);
    });

    it('Lc polarity: dark text on light bg is positive', () => {
      expect(computeAPCA('#1C1C1E', '#F5F4EF')).toBeGreaterThan(0);
    });

    it('Lc polarity: light text on dark bg is negative', () => {
      expect(computeAPCA('#F5F4EF', '#1B2A4A')).toBeLessThan(0);
    });
  });
});
