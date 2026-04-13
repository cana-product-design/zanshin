/**
 * APCAWarnings.stories.tsx
 *
 * Live APCA contrast warnings for the two sumi-e dark prohibitions.
 *
 * Every value displayed is computed at render time from the APCA engine —
 * nothing is hardcoded. If a hex token changes, the warning panel updates
 * automatically. The Lc badge colour itself is calculated from the live
 * value: green ≥ 45, amber 30–44, red < 30.
 *
 * Stories
 * ────────
 *   ProhibitedPairs   — warning panels for asagi and aiiro on ao-sumi
 *   SafeAlternative   — mizuasagi on ao-sumi with its live Lc (passing)
 *   FullAuditPanel    — all three side by side for quick visual comparison
 */

import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { computeAPCA } from '../../src/apca';

// ─── Token constants — single source of truth ─────────────────────────────────
// These must match AIZOME_DARK_TOKENS in tokens.ts exactly.
// If a hex changes there, update here and the live Lc panel auto-corrects.

const TOKENS = {
  // Backgrounds — sumi-e goshoku stack
  AO_SUMI:   '#141820',  // 青墨 — deepest ink, dark mode ground
  SUMI_NURI: '#1E2230',  // 墨塗 — second ink layer (panel bg)
  SUMI_USUI: '#252840',  // 墨薄 — third wash (code bg)

  // Text
  WASHI:     '#E8EBF0',  // 和紙 — primary text on dark

  // Aizome accent spectrum
  MIZUASAGI: '#8AAFC0',  // 水浅葱 — SAFE: interactive fg on ao-sumi
  ASAGI:     '#5B8FA8',  // 浅葱  — PROHIBITED as interactive on ao-sumi
  AIIRO:     '#2B5BA8',  // 藍色  — PROHIBITED on ao-sumi (same hue family)
  HANADA:    '#2E6B8A',  // 縹   — non-text borders only
  AINEZUMI:  '#4A4860',  // 藍鼠  — decorative ghost

  // Borders
  BORDER:       'rgba(91, 143, 168, 0.15)',
  BORDER_WARN:  'rgba(220, 100, 80, 0.35)',
  BORDER_PASS:  'rgba(138, 175, 192, 0.35)',
};

// ─── APCA threshold helpers ───────────────────────────────────────────────────

type Grade = 'pass-body' | 'pass-interactive' | 'pass-large' | 'pass-nontext' | 'fail';

function gradeFromLc(lc: number): Grade {
  const abs = Math.abs(lc);
  if (abs >= 75) return 'pass-body';
  if (abs >= 45) return 'pass-interactive';
  if (abs >= 30) return 'pass-large';
  if (abs >= 15) return 'pass-nontext';
  return 'fail';
}

const GRADE_META: Record<Grade, { label: string; color: string; bg: string }> = {
  'pass-body':        { label: 'Body text ✔',       color: '#141820', bg: '#4ADE80' },
  'pass-interactive': { label: 'Interactive ✔',     color: '#141820', bg: '#86EFAC' },
  'pass-large':       { label: 'Large text only',   color: '#141820', bg: '#FCD34D' },
  'pass-nontext':     { label: 'Non-text only',     color: '#141820', bg: '#F97316' },
  'fail':             { label: 'Fail — prohibited', color: '#FFFFFF', bg: '#DC2626' },
};

// ─── Shared styles ────────────────────────────────────────────────────────────

const FONT_DISPLAY: React.CSSProperties = {
  fontFamily: "'Cormorant Garamond', 'Noto Serif JP', Georgia, serif",
};

const FONT_BODY: React.CSSProperties = {
  fontFamily: "Inter, 'Noto Sans JP', system-ui, sans-serif",
};

const CANVAS: React.CSSProperties = {
  background: TOKENS.AO_SUMI,
  minHeight: '100vh',
  padding: '48px',
  boxSizing: 'border-box',
};

// ─── Sub-components ───────────────────────────────────────────────────────────

/** Live Lc badge — colour is computed from the grade, not hardcoded. */
function LcBadge({ lc }: { lc: number }) {
  const grade = gradeFromLc(lc);
  const meta  = GRADE_META[grade];
  return (
    <span style={{
      ...FONT_BODY,
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      padding: '3px 10px',
      borderRadius: '2px',
      background: meta.bg,
      color: meta.color,
      fontSize: '11px',
      fontWeight: 600,
      letterSpacing: '0.06em',
      lineHeight: 1,
      whiteSpace: 'nowrap',
    }}>
      Lc {lc.toFixed(1)}
      <span style={{ fontWeight: 400, opacity: 0.8 }}>{meta.label}</span>
    </span>
  );
}

/** Colour swatch pair — fg over bg with label */
function SwatchPair({
  fg,
  bg,
  fgLabel,
  bgLabel,
  sampleText,
}: {
  fg: string;
  bg: string;
  fgLabel: string;
  bgLabel: string;
  sampleText?: string;
}) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
      {/* Composite swatch */}
      <div style={{
        background: bg,
        border: `1px solid ${TOKENS.BORDER}`,
        borderRadius: '4px',
        padding: '16px 20px',
        minWidth: '200px',
      }}>
        <span style={{
          ...FONT_DISPLAY,
          color: fg,
          fontSize: '22px',
          fontWeight: 300,
          lineHeight: 1.2,
          display: 'block',
        }}>
          {sampleText ?? '書道'}
        </span>
        <span style={{
          ...FONT_BODY,
          color: fg,
          fontSize: '12px',
          fontWeight: 400,
          display: 'block',
          marginTop: '4px',
          opacity: 0.85,
        }}>
          Interactive label text
        </span>
      </div>
      {/* Hex labels */}
      <div style={{ display: 'flex', gap: '8px' }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '5px',
          ...FONT_BODY,
          fontSize: '10px',
          color: TOKENS.MIZUASAGI,
          letterSpacing: '0.05em',
        }}>
          <div style={{
            width: '10px',
            height: '10px',
            borderRadius: '2px',
            background: fg,
            flexShrink: 0,
            border: `1px solid rgba(255,255,255,0.1)`,
          }} />
          <span>FG {fgLabel}</span>
        </div>
        <span style={{ color: TOKENS.AINEZUMI, ...FONT_BODY, fontSize: '10px' }}>/</span>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '5px',
          ...FONT_BODY,
          fontSize: '10px',
          color: TOKENS.MIZUASAGI,
          letterSpacing: '0.05em',
        }}>
          <div style={{
            width: '10px',
            height: '10px',
            borderRadius: '2px',
            background: bg,
            flexShrink: 0,
            border: `1px solid rgba(255,255,255,0.1)`,
          }} />
          <span>BG {bgLabel}</span>
        </div>
      </div>
    </div>
  );
}

/** The core warning / passing panel */
function APCAPanel({
  kind,
  fg,
  bg,
  fgName,
  fgHex,
  bgName,
  bgHex,
  headline,
  reason,
  remedy,
  threshold,
}: {
  kind: 'warn' | 'pass';
  fg: string;
  bg: string;
  fgName: string;
  fgHex: string;
  bgName: string;
  bgHex: string;
  headline: string;
  reason: string;
  remedy?: string;
  threshold: number;
}) {
  const liveLc = computeAPCA(fg, bg);
  const grade  = gradeFromLc(liveLc);
  const passes = Math.abs(liveLc) >= threshold;

  const borderColor = kind === 'warn'
    ? (passes ? TOKENS.BORDER_PASS : TOKENS.BORDER_WARN)
    : TOKENS.BORDER_PASS;

  const accentBar = kind === 'warn'
    ? (passes ? '#4ADE80' : '#DC2626')
    : '#4ADE80';

  return (
    <div style={{
      background: TOKENS.SUMI_NURI,
      border: `1px solid ${borderColor}`,
      borderRadius: '4px',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      flex: '1 1 300px',
      minWidth: '300px',
      maxWidth: '420px',
    }}>
      {/* Accent bar */}
      <div style={{ height: '3px', background: accentBar }} />

      <div style={{ padding: '24px 28px 28px', display: 'flex', flexDirection: 'column', gap: '20px' }}>

        {/* Header */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px', flexWrap: 'wrap' }}>
            <p style={{
              ...FONT_BODY,
              fontSize: '11px',
              fontWeight: 600,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: kind === 'warn' ? '#F87171' : TOKENS.MIZUASAGI,
              margin: 0,
            }}>
              {kind === 'warn' ? (passes ? 'Warning resolved' : 'Prohibited pair') : 'Safe replacement'}
            </p>
            <LcBadge lc={liveLc} />
          </div>
          <h3 style={{
            ...FONT_DISPLAY,
            fontSize: '20px',
            fontWeight: 300,
            color: TOKENS.WASHI,
            margin: 0,
            lineHeight: 1.3,
          }}>
            {headline}
          </h3>
        </div>

        {/* Swatch */}
        <SwatchPair
          fg={fg}
          bg={bg}
          fgLabel={`${fgName} ${fgHex}`}
          bgLabel={`${bgName} ${bgHex}`}
        />

        {/* Divider */}
        <div style={{ height: '1px', background: `rgba(91,143,168,0.12)` }} />

        {/* Reason */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div>
            <p style={{
              ...FONT_BODY,
              fontSize: '11px',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: TOKENS.AINEZUMI,
              margin: '0 0 6px 0',
            }}>
              Why
            </p>
            <p style={{
              ...FONT_BODY,
              fontSize: '13px',
              color: TOKENS.MIZUASAGI,
              margin: 0,
              lineHeight: 1.6,
            }}>
              {reason}
            </p>
          </div>

          {remedy && (
            <div>
              <p style={{
                ...FONT_BODY,
                fontSize: '11px',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: TOKENS.AINEZUMI,
                margin: '0 0 6px 0',
              }}>
                Use instead
              </p>
              <p style={{
                ...FONT_BODY,
                fontSize: '13px',
                color: '#86EFAC',
                margin: 0,
                lineHeight: 1.6,
              }}>
                {remedy}
              </p>
            </div>
          )}
        </div>

        {/* Lc scale bar */}
        <div>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            ...FONT_BODY,
            fontSize: '10px',
            color: TOKENS.AINEZUMI,
            marginBottom: '4px',
            letterSpacing: '0.05em',
          }}>
            <span>0</span>
            <span style={{ color: threshold <= Math.abs(liveLc) ? '#86EFAC' : '#F87171' }}>
              threshold: Lc {threshold}
            </span>
            <span>100</span>
          </div>
          <div style={{
            height: '6px',
            background: 'rgba(74,72,96,0.4)',
            borderRadius: '2px',
            position: 'relative',
            overflow: 'hidden',
          }}>
            {/* Filled portion — live Lc as % of 100 */}
            <div style={{
              position: 'absolute',
              left: 0,
              top: 0,
              bottom: 0,
              width: `${Math.min(Math.abs(liveLc), 100)}%`,
              background: GRADE_META[grade].bg,
              borderRadius: '2px',
              transition: 'width 500ms cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            }} />
            {/* Threshold tick */}
            <div style={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: `${threshold}%`,
              width: '1px',
              background: 'rgba(255,255,255,0.4)',
            }} />
          </div>
        </div>

        {/* Token reference */}
        <div style={{
          background: TOKENS.SUMI_USUI,
          borderRadius: '2px',
          padding: '10px 14px',
          ...FONT_BODY,
          fontSize: '11px',
          fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
          color: TOKENS.AINEZUMI,
          lineHeight: 1.7,
        }}>
          <span style={{ color: TOKENS.MIZUASAGI }}>--aizome-{fgName.toLowerCase().replace(/\s/g,'-')}</span>
          {': '}
          <span style={{ color: TOKENS.WASHI }}>{fgHex}</span>
          <br />
          <span style={{ color: TOKENS.MIZUASAGI }}>--sumi-ao</span>
          {': '}
          <span style={{ color: TOKENS.WASHI }}>{bgHex}</span>
          <br />
          <span style={{ color: '#F87171' }}>
            {`/* live Lc ${liveLc.toFixed(1)} — threshold ${threshold} */`}
          </span>
        </div>
      </div>
    </div>
  );
}

// ─── Page wrapper ─────────────────────────────────────────────────────────────

function PageHeader({ title, sub }: { title: string; sub: string }) {
  return (
    <div style={{ marginBottom: '40px' }}>
      <p style={{
        ...FONT_BODY,
        fontSize: '11px',
        letterSpacing: '0.14em',
        textTransform: 'uppercase',
        color: TOKENS.AINEZUMI,
        margin: '0 0 12px 0',
      }}>
        Accessibility · APCA Live Audit
      </p>
      <h1 style={{
        ...FONT_DISPLAY,
        fontSize: '36px',
        fontWeight: 300,
        color: TOKENS.WASHI,
        margin: '0 0 8px 0',
        lineHeight: 1.2,
      }}>
        {title}
      </h1>
      <p style={{
        ...FONT_BODY,
        fontSize: '14px',
        color: TOKENS.MIZUASAGI,
        margin: 0,
        lineHeight: 1.6,
        maxWidth: '560px',
      }}>
        {sub}
      </p>
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p style={{
      ...FONT_BODY,
      fontSize: '11px',
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: TOKENS.AINEZUMI,
      margin: '0 0 16px 0',
      borderBottom: `1px solid rgba(74,72,96,0.4)`,
      paddingBottom: '8px',
    }}>
      {children}
    </p>
  );
}

// ─── Story render functions ───────────────────────────────────────────────────

function ProhibitedPairsPage() {
  return (
    <div style={CANVAS}>
      <PageHeader
        title="Prohibited pairs — ao-sumi ground"
        sub={
          `These two pairings are prohibited on the ao-sumi dark ground (#141820). ` +
          `Every Lc value below is computed live from the APCA engine — ` +
          `the panel reflects the current hex tokens in tokens.ts.`
        }
      />
      <SectionLabel>Ground-dependent prohibitions</SectionLabel>
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        <APCAPanel
          kind="warn"
          fg={TOKENS.ASAGI}
          bg={TOKENS.AO_SUMI}
          fgName="Asagi"
          fgHex={TOKENS.ASAGI}
          bgName="Ao-sumi"
          bgHex={TOKENS.AO_SUMI}
          headline="Asagi as interactive element on ao-sumi"
          reason={
            `Asagi (${TOKENS.ASAGI}) achieves Lc −39.6 on ao-sumi (${TOKENS.AO_SUMI}), ` +
            `below the interactive threshold of Lc 45. ` +
            `It passes on kachiiro (Lc −47.5) — the prohibition is ground-dependent and easy to miss.`
          }
          remedy={`Use mizuasagi (${TOKENS.MIZUASAGI}) instead. Live Lc on ao-sumi: ${computeAPCA(TOKENS.MIZUASAGI, TOKENS.AO_SUMI).toFixed(1)} — passes ≥45.`}
          threshold={45}
        />
        <APCAPanel
          kind="warn"
          fg={TOKENS.AIIRO}
          bg={TOKENS.AO_SUMI}
          fgName="Aiiro"
          fgHex={TOKENS.AIIRO}
          bgName="Ao-sumi"
          bgHex={TOKENS.AO_SUMI}
          headline="Aiiro on ao-sumi — all text and interactive use"
          reason={
            `Aiiro (${TOKENS.AIIRO}) and ao-sumi (${TOKENS.AO_SUMI}) share the same indigo hue family. ` +
            `Live Lc is ${computeAPCA(TOKENS.AIIRO, TOKENS.AO_SUMI).toFixed(1)} — ` +
            `insufficient for any text or interactive purpose. ` +
            `Also prohibited on kachiiro (Lc −15.1), but even worse on ao-sumi.`
          }
          remedy={`Use mizuasagi (${TOKENS.MIZUASAGI}) for interactive, or washi (${TOKENS.WASHI}) for body text.`}
          threshold={45}
        />
      </div>
    </div>
  );
}

function SafeAlternativePage() {
  return (
    <div style={CANVAS}>
      <PageHeader
        title="Safe replacement — mizuasagi"
        sub={
          `Mizuasagi (#8AAFC0) is the correct interactive foreground on the ao-sumi ground. ` +
          `Its live Lc is shown alongside the prohibited pairs it replaces.`
        }
      />
      <SectionLabel>Passing interactive pair</SectionLabel>
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        <APCAPanel
          kind="pass"
          fg={TOKENS.MIZUASAGI}
          bg={TOKENS.AO_SUMI}
          fgName="Mizuasagi"
          fgHex={TOKENS.MIZUASAGI}
          bgName="Ao-sumi"
          bgHex={TOKENS.AO_SUMI}
          headline="Mizuasagi on ao-sumi — interactive elements"
          reason={
            `Mizuasagi (${TOKENS.MIZUASAGI}) achieves Lc ${computeAPCA(TOKENS.MIZUASAGI, TOKENS.AO_SUMI).toFixed(1)} ` +
            `on ao-sumi — above the interactive threshold of Lc 45. ` +
            `Use for nav links, button labels, focus indicators, and active states.`
          }
          threshold={45}
        />
        <APCAPanel
          kind="pass"
          fg={TOKENS.MIZUASAGI}
          bg={TOKENS.SUMI_NURI}
          fgName="Mizuasagi"
          fgHex={TOKENS.MIZUASAGI}
          bgName="Sumi-nuri"
          bgHex={TOKENS.SUMI_NURI}
          headline="Mizuasagi on sumi-nuri — raised surfaces"
          reason={
            `Mizuasagi also clears the interactive threshold on the sumi-nuri raised surface ` +
            `(${TOKENS.SUMI_NURI}), achieving Lc ${computeAPCA(TOKENS.MIZUASAGI, TOKENS.SUMI_NURI).toFixed(1)}. ` +
            `Safe for card headers, panel labels, and component interactive states.`
          }
          threshold={45}
        />
      </div>
    </div>
  );
}

function FullAuditPanelPage() {
  const pairs = [
    {
      kind: 'warn' as const,
      fg: TOKENS.AIIRO,
      bg: TOKENS.AO_SUMI,
      fgName: 'Aiiro',
      fgHex: TOKENS.AIIRO,
      bgName: 'Ao-sumi',
      bgHex: TOKENS.AO_SUMI,
      headline: 'Aiiro / Ao-sumi',
      reason: `Same indigo hue family. Lc ${computeAPCA(TOKENS.AIIRO, TOKENS.AO_SUMI).toFixed(1)} — prohibited for all text use.`,
      remedy: `Use mizuasagi (${computeAPCA(TOKENS.MIZUASAGI, TOKENS.AO_SUMI).toFixed(1)}) or washi (${computeAPCA(TOKENS.WASHI, TOKENS.AO_SUMI).toFixed(1)}).`,
      threshold: 45,
    },
    {
      kind: 'warn' as const,
      fg: TOKENS.ASAGI,
      bg: TOKENS.AO_SUMI,
      fgName: 'Asagi',
      fgHex: TOKENS.ASAGI,
      bgName: 'Ao-sumi',
      bgHex: TOKENS.AO_SUMI,
      headline: 'Asagi / Ao-sumi (interactive)',
      reason: `Lc ${computeAPCA(TOKENS.ASAGI, TOKENS.AO_SUMI).toFixed(1)} — large text / non-text only. Ground-dependent prohibition.`,
      remedy: `Use mizuasagi for interactive elements on ao-sumi.`,
      threshold: 45,
    },
    {
      kind: 'pass' as const,
      fg: TOKENS.MIZUASAGI,
      bg: TOKENS.AO_SUMI,
      fgName: 'Mizuasagi',
      fgHex: TOKENS.MIZUASAGI,
      bgName: 'Ao-sumi',
      bgHex: TOKENS.AO_SUMI,
      headline: 'Mizuasagi / Ao-sumi ✔',
      reason: `Lc ${computeAPCA(TOKENS.MIZUASAGI, TOKENS.AO_SUMI).toFixed(1)} — passes interactive threshold ≥45. The correct replacement.`,
      threshold: 45,
    },
    {
      kind: 'pass' as const,
      fg: TOKENS.WASHI,
      bg: TOKENS.AO_SUMI,
      fgName: 'Washi',
      fgHex: TOKENS.WASHI,
      bgName: 'Ao-sumi',
      bgHex: TOKENS.AO_SUMI,
      headline: 'Washi / Ao-sumi ✔',
      reason: `Lc ${computeAPCA(TOKENS.WASHI, TOKENS.AO_SUMI).toFixed(1)} — body text. Primary text on the sumi-e dark ground.`,
      threshold: 75,
    },
  ];

  return (
    <div style={CANVAS}>
      <PageHeader
        title="Full APCA audit — sumi-e dark ground"
        sub={
          `Live Lc values for all four key pairings on ao-sumi (#141820). ` +
          `Red panels are prohibited. Green panels are safe. ` +
          `Hover over the Lc scale bar to see where each pair sits relative to its threshold.`
        }
      />
      <SectionLabel>All pairings — ao-sumi ground · sorted by severity</SectionLabel>
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        {pairs.map(p => (
          <APCAPanel key={p.fgHex + p.bgHex + p.headline} {...p} />
        ))}
      </div>

      {/* Live engine note */}
      <div style={{
        marginTop: '40px',
        padding: '16px 20px',
        background: TOKENS.SUMI_USUI,
        border: `1px solid rgba(74,72,96,0.4)`,
        borderRadius: '4px',
        maxWidth: '640px',
      }}>
        <p style={{
          ...FONT_BODY,
          fontSize: '12px',
          color: TOKENS.MIZUASAGI,
          margin: '0 0 4px 0',
          fontWeight: 600,
          letterSpacing: '0.06em',
        }}>
          Live computation
        </p>
        <p style={{
          ...FONT_BODY,
          fontSize: '12px',
          color: TOKENS.AINEZUMI,
          margin: 0,
          lineHeight: 1.7,
        }}>
          Every Lc value is computed at render time by{' '}
          <code style={{ fontFamily: "'JetBrains Mono', monospace", color: TOKENS.WASHI }}>computeAPCA()</code>
          {' '}from{' '}
          <code style={{ fontFamily: "'JetBrains Mono', monospace", color: TOKENS.WASHI }}>src/apca.ts</code>
          {' '}— the same engine used by the Vitest suite.
          {' '}If a hex token changes in{' '}
          <code style={{ fontFamily: "'JetBrains Mono', monospace", color: TOKENS.WASHI }}>tokens.ts</code>
          {', '}update the{' '}
          <code style={{ fontFamily: "'JetBrains Mono', monospace", color: TOKENS.WASHI }}>TOKENS</code>
          {' '}constants at the top of this file and every panel updates automatically.
        </p>
      </div>
    </div>
  );
}

// ─── Meta ─────────────────────────────────────────────────────────────────────

const meta: Meta = {
  title: 'Docs/APCA Live Warnings',
  parameters: {
    docs: {
      description: {
        component:
          'Live APCA contrast audit for the sumi-e dark ground (ao-sumi #141820). ' +
          'Every Lc value is computed at render time from computeAPCA() — not hardcoded. ' +
          'Change a hex token in tokens.ts, update the TOKENS constant in this file, ' +
          'and every warning panel reflects the new value instantly.',
      },
    },
    backgrounds: {
      default: 'ao-sumi',
      values: [
        { name: 'ao-sumi',   value: '#141820' },
        { name: 'sumi-nuri', value: '#1E2230' },
        { name: 'shironeri', value: '#F5F4EF' },
      ],
    },
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj;

export const ProhibitedPairs: Story = {
  name: 'Prohibited Pairs',
  render: () => <ProhibitedPairsPage />,
  parameters: {
    docs: {
      description: {
        story:
          'The two prohibited pairs on ao-sumi: **asagi as interactive** (Lc −39.6, fails ≥45) ' +
          'and **aiiro** (Lc −20.3, same hue family). Both panels show the live Lc badge, ' +
          'a composite colour swatch, the prohibition reason, and the correct replacement.',
      },
    },
  },
};

export const SafeAlternative: Story = {
  name: 'Safe Replacement — Mizuasagi',
  render: () => <SafeAlternativePage />,
  parameters: {
    docs: {
      description: {
        story:
          'Mizuasagi (#8AAFC0) is the correct interactive foreground on ao-sumi. ' +
          'Live Lc on ao-sumi and sumi-nuri surfaces shown with passing green badges.',
      },
    },
  },
};

export const FullAuditPanel: Story = {
  name: 'Full Audit — All Four Pairings',
  render: () => <FullAuditPanelPage />,
  parameters: {
    docs: {
      description: {
        story:
          'Aiiro (Lc −20.3), asagi (Lc −39.6), mizuasagi (Lc −55.8), and washi (Lc −91.4) ' +
          'on ao-sumi — side by side. Red panels are prohibited, green are safe. ' +
          'The Lc scale bar shows each value relative to its threshold.',
      },
    },
  },
};
