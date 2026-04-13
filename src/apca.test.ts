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
 * Four assertion layers:
 *
 *   1. Lc annotation accuracy   — stored lc matches live computation (±1.0 tolerance)
 *   2. Passing pairs            — any pair marked passes:true clears its threshold
 *   3. Intentional failures     — pairs marked passes:false stay below threshold
 *                                 (regression: someone "fixes" the hex but forgets to promote passes)
 *   4. Named-pair integrity lock — specific prohibited pairs are pinned by label.
 *                                 passes:false is asserted unconditionally, regardless
 *                                 of live Lc or threshold. Changing the label breaks
 *                                 the test by name — no silent promotion is possible.
 *
 * Modes under test
 * ─────────────────
 *   kintsugi light      — warm gold palette, portfolio surfaces
 *   aizome light        — indigo palette, product surfaces
 *   aizome dark         — kachiiro ground (legacy/deep mode)
 *   sumi-e dark         — ao-sumi ground (#141820) — goshoku ink-wash stack
 *
 * Sumi-e dark note
 * ─────────────────
 * The ao-sumi ground (#141820) is significantly darker than kachiiro (#1B2A4A).
 * This has a critical implication: asagi (#5B8FA8) which passed the interactive
 * threshold on kachiiro (Lc −47.5) falls to Lc −39.6 on ao-sumi. It does NOT
 * meet the ≥45 interactive threshold on this darker ground. Use mizuasagi
 * (#8AAFC0, Lc −55.8) for interactive elements on ao-sumi instead.
 *
 * To add a new palette pair:
 *   1. Add it to the relevant validatedPairs array in tokens.ts
 *   2. Set passes: true if it clears its threshold
 *   3. Run this suite — it will verify the Lc annotation and threshold
 *
 * To promote a Layer 4 locked pair:
 *   1. You must change the pair's hex values so live Lc clears the threshold
 *   2. You must set passes: true in tokens.ts
 *   3. You must update the Layer 4 describe block to remove or amend the lock
 *   4. All three steps are required — skipping any one leaves a failing test
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

// ─── Sumi-e dark tokens — defined inline rather than exported from tokens.ts
// so the test suite is fully self-contained and doesn't require a new export.
// Hex values must match style.css and tokens.ts AIZOME_DARK_TOKENS exactly.
const SUMI_BG   = '#141820'; // ao-sumi 青墨
const SUMI_NURI = '#1E2230'; // sumi-nuri 墨塗
const SUMI_USUI = '#252840'; // sumi-usui 墨薄
const WASHI     = '#E8EBF0'; // washi 和紙 — text on dark
const MIZUASAGI = '#8AAFC0'; // water-asagi — muted accent
const ASAGI     = '#5B8FA8'; // natural asagi — primary aizome accent
const HANADA    = '#2E6B8A'; // mid-blue silk — hover/border
const AIIRO     = '#2B5BA8'; // Japan Blue — PROHIBITED on ao-sumi
const AINEZUMI  = '#4A4860'; // mousy indigo — decorative ghost
const GOLD      = '#C9A84C'; // kintsugi gold

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

    it('retired synthetic asagi (#4DB3CC) stays below Lc 45 — non-text-only contract', () => {
      // Synthetic asagi #4DB3CC was retired in favour of natural asagi #5B8FA8.
      // The retired color remains documented as a non-text-only pair.
      // If someone attempts to restore it, this test catches the regression.
      const lc = computeAPCA('#4DB3CC', '#F5F4EF');
      expect(Math.abs(lc)).toBeLessThan(45);
    });

    it('natural asagi (#5B8FA8) achieves Lc ≥ 45 on shironeri — bold/large text ok', () => {
      // Natural asagi (revised from synthetic #4DB3CC) passes Lc 45 at Lc ~57.7.
      // Safe for ≥18px bold or ≥24px normal weight. Not for body prose.
      const lc = computeAPCA('#5B8FA8', '#F5F4EF');
      expect(Math.abs(lc)).toBeGreaterThanOrEqual(45);
    });

    it('hai on shironeri (muted secondary) achieves Lc ≥ 60', () => {
      const lc = computeAPCA('#6B7280', '#F5F4EF');
      expect(Math.abs(lc)).toBeGreaterThanOrEqual(60);
    });
  });

  // ── Aizome dark (kachiiro ground) — annotation + threshold integrity ────────
  // Dark mode has known intentional failures (aiiro, hanada on kachiiro).
  // We do NOT assert apcaFailures is empty here — that would be wrong.
  // We assert: annotations are accurate and passing pairs actually pass.

  describe('aizome dark mode — kachiiro ground (annotation + passing pairs only)', () => {

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

  // ── Sumi-e dark (ao-sumi ground) — full coverage ───────────────────────────
  //
  // The ao-sumi ground (#141820) is the deepest ink in the goshoku stack.
  // This describe block fully covers all three surface layers and all aizome
  // foreground colors, including their documented constraints and prohibitions.
  //
  // CRITICAL DIFFERENCE from kachiiro dark mode:
  //   Asagi (#5B8FA8) on kachiiro = Lc −47.5  → passes interactive Lc 45 ✔
  //   Asagi (#5B8FA8) on ao-sumi  = Lc −39.6  → FAILS interactive Lc 45 ✗
  //   On ao-sumi, use mizuasagi (#8AAFC0, Lc −55.8) for interactive elements.

  describe('sumi-e dark mode — ao-sumi ground (#141820)', () => {

    // ── Surface stack — all three layers must support body text ──────────────

    it('washi on ao-sumi (body text) achieves Lc ≥ 75', () => {
      const lc = computeAPCA(WASHI, SUMI_BG);
      expect(Math.abs(lc)).toBeGreaterThanOrEqual(75);
    });

    it('washi on sumi-nuri (raised surface body text) achieves Lc ≥ 75', () => {
      const lc = computeAPCA(WASHI, SUMI_NURI);
      expect(Math.abs(lc)).toBeGreaterThanOrEqual(75);
    });

    it('washi on sumi-usui (overlay body text) achieves Lc ≥ 75', () => {
      const lc = computeAPCA(WASHI, SUMI_USUI);
      expect(Math.abs(lc)).toBeGreaterThanOrEqual(75);
    });

    it('text Lc is negative on all sumi-e surfaces (WoB polarity)', () => {
      expect(computeAPCA(WASHI, SUMI_BG)).toBeLessThan(0);
      expect(computeAPCA(WASHI, SUMI_NURI)).toBeLessThan(0);
      expect(computeAPCA(WASHI, SUMI_USUI)).toBeLessThan(0);
    });

    // ── Surface-to-surface — each layer lightens from the last ───────────────

    it('sumi-nuri is lighter than ao-sumi (|Lc| decreases for body text)', () => {
      // Washi on ao-sumi should have higher contrast than washi on sumi-nuri.
      // If this fails, the surface stack order has been inverted.
      const lcBase    = Math.abs(computeAPCA(WASHI, SUMI_BG));
      const lcRaised  = Math.abs(computeAPCA(WASHI, SUMI_NURI));
      expect(lcBase).toBeGreaterThan(lcRaised);
    });

    it('sumi-usui is lighter than sumi-nuri (correct goshoku progression)', () => {
      const lcRaised  = Math.abs(computeAPCA(WASHI, SUMI_NURI));
      const lcOverlay = Math.abs(computeAPCA(WASHI, SUMI_USUI));
      expect(lcRaised).toBeGreaterThan(lcOverlay);
    });

    // ── Mizuasagi — the interactive aizome color on ao-sumi ──────────────────
    // Mizuasagi (#8AAFC0) clears Lc 45 on ao-sumi. It is the recommended
    // foreground for interactive elements (buttons, nav links, focus states).

    it('mizuasagi on ao-sumi achieves interactive threshold Lc ≥ 45', () => {
      const lc = computeAPCA(MIZUASAGI, SUMI_BG);
      expect(Math.abs(lc)).toBeGreaterThanOrEqual(45);
    });

    it('mizuasagi on sumi-nuri achieves interactive threshold Lc ≥ 45', () => {
      const lc = computeAPCA(MIZUASAGI, SUMI_NURI);
      expect(Math.abs(lc)).toBeGreaterThanOrEqual(45);
    });

    it('mizuasagi on ao-sumi achieves large-text threshold Lc ≥ 45 at ≥18px', () => {
      // Lc ~55.8 — comfortably above 45, suitable for labels and secondary text
      const lc = computeAPCA(MIZUASAGI, SUMI_BG);
      expect(Math.abs(lc)).toBeGreaterThanOrEqual(45);
    });

    // ── Asagi — accent color, large text / non-text only on ao-sumi ──────────
    // CRITICAL: Asagi (#5B8FA8) does NOT meet interactive threshold on ao-sumi.
    // Lc −39.6 < −45. Use for large headings (≥24px), borders, or icons only.

    it('asagi on ao-sumi does NOT meet interactive threshold — large text only', () => {
      const lc = computeAPCA(ASAGI, SUMI_BG);
      // This is intentional. Asagi on ao-sumi is large-text / non-text only.
      // If a future palette change brings this above 45, the constraint must
      // be updated in tokens.ts to reflect the new safe usage.
      expect(Math.abs(lc)).toBeLessThan(45);
    });

    it('asagi on ao-sumi meets decorative threshold Lc ≥ 30', () => {
      const lc = computeAPCA(ASAGI, SUMI_BG);
      expect(Math.abs(lc)).toBeGreaterThanOrEqual(30);
    });

    it('asagi on sumi-nuri meets decorative threshold Lc ≥ 30', () => {
      const lc = computeAPCA(ASAGI, SUMI_NURI);
      expect(Math.abs(lc)).toBeGreaterThanOrEqual(30);
    });

    // ── Hanada — border / icon only on ao-sumi ────────────────────────────────

    it('hanada on ao-sumi meets non-text threshold Lc ≥ 15', () => {
      const lc = computeAPCA(HANADA, SUMI_BG);
      expect(Math.abs(lc)).toBeGreaterThanOrEqual(15);
    });

    it('hanada on ao-sumi does NOT meet interactive threshold — border/icon only', () => {
      const lc = computeAPCA(HANADA, SUMI_BG);
      expect(Math.abs(lc)).toBeLessThan(45);
    });

    // ── Gold — decorative / large text on ao-sumi ─────────────────────────────
    // Gold (#C9A84C) reads at Lc −56.9 on ao-sumi — significantly better than
    // on light surfaces (Lc +40.4). Suitable for ≥18px or non-text decorative.

    it('gold on ao-sumi achieves large-text threshold Lc ≥ 45', () => {
      const lc = computeAPCA(GOLD, SUMI_BG);
      expect(Math.abs(lc)).toBeGreaterThanOrEqual(45);
    });

    // ── Prohibitions ──────────────────────────────────────────────────────────

    it('aiiro on ao-sumi remains prohibited — Lc stays below 45', () => {
      // Aiiro (#2B5BA8) and ao-sumi (#141820): same indigo hue family.
      // Lc −20.3 — even worse than on kachiiro (Lc −15.1).
      // This prohibition is absolute. Never use aiiro text on ao-sumi.
      const lc = computeAPCA(AIIRO, SUMI_BG);
      expect(Math.abs(lc)).toBeLessThan(45);
    });

    it('ainezumi on ao-sumi is below non-text threshold — decorative ghost only', () => {
      // Ainezumi (#4A4860) on ao-sumi: Lc −13.2. Fails even the Lc 15 non-text
      // threshold. Use only for the faintest decorative marks — never for UI state.
      const lc = computeAPCA(AINEZUMI, SUMI_BG);
      expect(Math.abs(lc)).toBeLessThan(15);
    });

    // ── Annotation integrity (spot-check live vs. stored values) ─────────────

    it('washi on ao-sumi: stored Lc −91.4 matches live computation within ±1.0', () => {
      const live = computeAPCA(WASHI, SUMI_BG);
      expect(Math.abs(live - (-91.4))).toBeLessThanOrEqual(LC_TOLERANCE);
    });

    it('mizuasagi on ao-sumi: stored Lc −55.8 matches live computation within ±1.0', () => {
      const live = computeAPCA(MIZUASAGI, SUMI_BG);
      expect(Math.abs(live - (-55.8))).toBeLessThanOrEqual(LC_TOLERANCE);
    });

    it('asagi on ao-sumi: stored Lc −39.6 matches live computation within ±1.0', () => {
      const live = computeAPCA(ASAGI, SUMI_BG);
      expect(Math.abs(live - (-39.6))).toBeLessThanOrEqual(LC_TOLERANCE);
    });

    it('aiiro on ao-sumi: stored Lc −20.3 matches live computation within ±1.0', () => {
      const live = computeAPCA(AIIRO, SUMI_BG);
      expect(Math.abs(live - (-20.3))).toBeLessThanOrEqual(LC_TOLERANCE);
    });

    it('gold on ao-sumi: stored Lc −56.9 matches live computation within ±1.0', () => {
      const live = computeAPCA(GOLD, SUMI_BG);
      expect(Math.abs(live - (-56.9))).toBeLessThanOrEqual(LC_TOLERANCE);
    });

    // ── Regression guard against AIZOME_DARK_TOKENS (now pointing to ao-sumi) ─

    it('AIZOME_DARK_TOKENS passing pairs still achieve their declared thresholds', () => {
      const failures = findRegressions(AIZOME_DARK_TOKENS)
        .filter(({ pair }) => pair.passes === true);

      expect(failures, regressionMessage('aizome-dark-sumi', failures)).toHaveLength(0);
    });

    it('AIZOME_DARK_TOKENS Lc annotations match live computation within ±1.0', () => {
      const drifts = findAnnotationDrift(AIZOME_DARK_TOKENS);
      expect(drifts, driftMessage('aizome-dark-sumi', drifts)).toHaveLength(0);
    });
  });

  // ── Layer 4: named-pair integrity locks (sumi-e dark prohibitions) ──────────
  //
  // Layer 3 (intentional-failure guard) catches the case where a hex change
  // silently pushes a pair past its threshold. But it operates generically
  // over the whole validatedPairs array — it cannot prevent a designer from
  // removing the pair entirely, renaming it, or flipping passes:true on
  // a pair that physically cannot pass its threshold without the test knowing.
  //
  // Layer 4 closes that gap for the two hardest prohibitions in the sumi-e
  // dark ground:
  //
  //   • asagi-on-ao-sumi   (#5B8FA8 on #141820, Lc −39.6)
  //       — fails interactive threshold (Lc 45) on ao-sumi
  //       — passed on kachiiro (Lc −47.5) — ground-dependent prohibition
  //       — the subtlety makes accidental promotion likely
  //
  //   • aiiro-on-ao-sumi   (#2B5BA8 on #141820, Lc −20.3)
  //       — same indigo hue family — insufficient for any text use
  //       — also prohibited on kachiiro (Lc −15.1) but even worse here
  //
  // Mechanism — each lock asserts three independent things:
  //
  //   A. The pair exists in AIZOME_DARK_TOKENS.validatedPairs (by label fragment).
  //      Rename or delete it and assertion A fails by name.
  //
  //   B. Its `passes` field is false.
  //      Flip passes:true without touching this block and assertion B fails.
  //
  //   C. Its live Lc from the APCA engine is physically below its threshold.
  //      Change the hex so the pair now actually clears the threshold and
  //      assertion C fails, forcing a deliberate review.
  //
  //   D. Its declared `threshold` is still 45 (interactive).
  //      Downgrade threshold to 30 to silence layer 3 and assertion D fails.
  //
  // Promotion protocol (for future maintainers)
  // ─────────────────────────────────────────────────────────────────────────
  //   1. Verify live Lc clears 45 via computeAPCA()
  //   2. Set passes: true in AIZOME_DARK_TOKENS.validatedPairs in tokens.ts
  //   3. Remove or amend the corresponding lock in Layer 4 below
  //   4. Add a new passing spot-check in the sumi-e dark describe block above
  //
  //   All four steps are required. Skipping any one leaves a failing test.

  describe('Layer 4: named-pair integrity locks', () => {

    // Helper: find a pair by label substring — substring match so minor
    // wording tweaks surface a clear "not found" error, not an undefined crash.
    function requirePair(fragment: string): APCAPair {
      const pair = AIZOME_DARK_TOKENS.validatedPairs.find(p =>
        p.label.toLowerCase().includes(fragment.toLowerCase())
      );
      if (!pair) {
        throw new Error(
          `[zanshin] Layer 4 integrity lock: no pair matching "${fragment}" found in ` +
          `AIZOME_DARK_TOKENS.validatedPairs.\n` +
          `  If the pair was renamed, update the label fragment in apca.test.ts Layer 4.\n` +
          `  If it was deleted, restore it or explicitly remove the lock.`
        );
      }
      return pair;
    }

    // ── Lock A: asagi as interactive on ao-sumi ───────────────────────────────
    //
    // Asagi (#5B8FA8) clears Lc 45 on kachiiro (#1B2A4A, Lc −47.5) but
    // falls to Lc −39.6 on ao-sumi (#141820). The prohibition is
    // ground-dependent — the most likely kind to be accidentally promoted.

    describe('asagi-on-ao-sumi: prohibited as interactive element', () => {

      it('pair exists in AIZOME_DARK_TOKENS (label: "Asagi as interactive on ao-sumi — PROHIBITED")', () => {
        // If this fails, the pair was renamed or removed.
        // Restore it, or update the label fragment above and remove the lock.
        expect(() => requirePair('asagi as interactive on ao-sumi')).not.toThrow();
      });

      it('asagi-on-ao-sumi passes field is false — pair is not promotable without updating this lock', () => {
        const pair = requirePair('asagi as interactive on ao-sumi');
        expect(
          pair.passes,
          `[zanshin] Layer 4 lock violated: "${pair.label}" has passes:true.\n` +
          `  Asagi (${pair.fg}) on ao-sumi (${pair.bg}) achieves Lc ` +
          `${computeAPCA(pair.fg, pair.bg).toFixed(1)} — below the interactive threshold (≥45).\n` +
          `  Use mizuasagi (#8AAFC0, Lc −55.8) for interactive elements on ao-sumi.\n` +
          `  Promotion protocol: (1) verify live Lc ≥ 45, (2) set passes:true in tokens.ts, ` +
          `(3) remove this lock, (4) add a passing spot-check above.`
        ).toBe(false);
      });

      it('asagi-on-ao-sumi fg is #5B8FA8 and bg is #141820 — hex pinned to prohibition baseline', () => {
        const pair = requirePair('asagi as interactive on ao-sumi');
        expect(
          pair.fg,
          `[zanshin] Layer 4: asagi-on-ao-sumi fg changed from #5B8FA8 to ${pair.fg}.\n` +
          `  Recompute Lc with the new hex and re-evaluate whether the prohibition still holds.`
        ).toBe('#5B8FA8');
        expect(
          pair.bg,
          `[zanshin] Layer 4: asagi-on-ao-sumi bg changed from #141820 to ${pair.bg}.\n` +
          `  If ao-sumi was lightened, recompute Lc — the prohibition may no longer apply.`
        ).toBe('#141820');
      });

      it('asagi-on-ao-sumi live Lc is below interactive threshold Lc 45 — prohibition is physically grounded', () => {
        // Physics assertion: the APCA engine must confirm asagi cannot clear
        // Lc 45 on ao-sumi regardless of what tokens.ts declares.
        // If this fails, the palette changed and the prohibition needs review.
        const pair = requirePair('asagi as interactive on ao-sumi');
        const liveLc = computeAPCA(pair.fg, pair.bg);
        expect(
          Math.abs(liveLc),
          `[zanshin] Layer 4: asagi (${pair.fg}) on ao-sumi (${pair.bg}) now achieves ` +
          `Lc ${liveLc.toFixed(1)}, clearing the interactive threshold (≥45).\n` +
          `  Prohibition may be stale. Promotion protocol: (1) set passes:true, ` +
          `(2) update minSize, (3) remove this lock, (4) add a passing spot-check.`
        ).toBeLessThan(45);
      });

      it('asagi-on-ao-sumi threshold is 45 (interactive) — not silently downgraded', () => {
        // Guard against threshold demotion: keeping passes:false but lowering
        // threshold to 30 so layer 3 stops catching it as a failure.
        const pair = requirePair('asagi as interactive on ao-sumi');
        expect(
          pair.threshold,
          `[zanshin] Layer 4: asagi-on-ao-sumi threshold changed from 45 to ${pair.threshold}.\n` +
          `  The threshold must remain 45 (interactive) to preserve the prohibition's meaning.`
        ).toBe(45);
      });
    });

    // ── Lock B: aiiro on ao-sumi ──────────────────────────────────────────────
    //
    // Aiiro (#2B5BA8) on ao-sumi (#141820): Lc −20.3. Same indigo hue family
    // as the background. Insufficient for any text or interactive purpose.
    // Worse than on kachiiro (Lc −15.1). Absolute prohibition.

    describe('aiiro-on-ao-sumi: prohibited for all text and interactive use', () => {

      it('pair exists in AIZOME_DARK_TOKENS (label: "Aiiro on ao-sumi — PROHIBITED")', () => {
        expect(() => requirePair('aiiro on ao-sumi')).not.toThrow();
      });

      it('aiiro-on-ao-sumi passes field is false — pair is not promotable without updating this lock', () => {
        const pair = requirePair('aiiro on ao-sumi');
        expect(
          pair.passes,
          `[zanshin] Layer 4 lock violated: "${pair.label}" has passes:true.\n` +
          `  Aiiro (${pair.fg}) on ao-sumi (${pair.bg}) achieves Lc ` +
          `${computeAPCA(pair.fg, pair.bg).toFixed(1)} — same indigo hue family as the ground.\n` +
          `  This pair is insufficient for any text or interactive use.\n` +
          `  Promotion protocol: (1) verify live Lc ≥ 45, (2) set passes:true in tokens.ts, ` +
          `(3) remove this lock, (4) add a passing spot-check above.`
        ).toBe(false);
      });

      it('aiiro-on-ao-sumi fg is #2B5BA8 and bg is #141820 — hex pinned to prohibition baseline', () => {
        const pair = requirePair('aiiro on ao-sumi');
        expect(
          pair.fg,
          `[zanshin] Layer 4: aiiro-on-ao-sumi fg changed from #2B5BA8 to ${pair.fg}.\n` +
          `  Recompute Lc with the new hex and re-evaluate whether the prohibition still holds.`
        ).toBe('#2B5BA8');
        expect(
          pair.bg,
          `[zanshin] Layer 4: aiiro-on-ao-sumi bg changed from #141820 to ${pair.bg}.\n` +
          `  If ao-sumi was lightened, recompute Lc — the prohibition may no longer apply.`
        ).toBe('#141820');
      });

      it('aiiro-on-ao-sumi live Lc is below interactive threshold Lc 45 — prohibition is physically grounded', () => {
        const pair = requirePair('aiiro on ao-sumi');
        const liveLc = computeAPCA(pair.fg, pair.bg);
        expect(
          Math.abs(liveLc),
          `[zanshin] Layer 4: aiiro (${pair.fg}) on ao-sumi (${pair.bg}) now achieves ` +
          `Lc ${liveLc.toFixed(1)}, clearing the interactive threshold (≥45).\n` +
          `  Promotion protocol: (1) set passes:true, (2) update minSize, ` +
          `(3) remove this lock, (4) add a passing spot-check.`
        ).toBeLessThan(45);
      });

      it('aiiro-on-ao-sumi threshold is 45 (interactive) — not silently downgraded', () => {
        const pair = requirePair('aiiro on ao-sumi');
        expect(
          pair.threshold,
          `[zanshin] Layer 4: aiiro-on-ao-sumi threshold changed from 45 to ${pair.threshold}.\n` +
          `  The threshold must remain 45 (interactive) to preserve the prohibition's meaning.`
        ).toBe(45);
      });
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

    it('Lc polarity: washi on ao-sumi is negative (WoB)', () => {
      expect(computeAPCA(WASHI, SUMI_BG)).toBeLessThan(0);
    });

    it('ao-sumi is darker than kachiiro (washi contrast is higher on ao-sumi)', () => {
      const lcAoSumi   = Math.abs(computeAPCA(WASHI, SUMI_BG));    // ~91.4
      const lcKachiiro = Math.abs(computeAPCA('#EEF0F4', '#1B2A4A')); // ~89.0
      // ao-sumi (#141820) should yield higher text contrast than kachiiro (#1B2A4A)
      expect(lcAoSumi).toBeGreaterThan(lcKachiiro);
    });
  });
});
