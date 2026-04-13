/**
 * UXWriting.stories.tsx
 *
 * Live, interactive UX writing examples for the Zanshin Design System.
 * Three pillars: Shinto thresholds, Buddhist error states, Smart Brevity CTAs.
 *
 * Stories
 * ────────
 *   ShintoThresholds  — CTAs, labels, tooltips as gates (torii)
 *   BuddhistErrors    — error, empty state, loading, toast copy
 *   SmartBrevityCTAs  — before/after: lead with the finding
 *   MicrocopyPatterns — success, loading, empty state, notifications
 *   CopyAudit         — 6 side-by-side anti-pattern / Zanshin pairs
 */

import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';

// ─── Token constants ──────────────────────────────────────────────────────────
const T = {
  AO_SUMI:    '#141820',
  SUMI_NURI:  '#1E2230',
  SUMI_USUI:  '#252840',
  WASHI:      '#E8EBF0',
  MIZUASAGI:  '#8AAFC0',
  AINEZUMI:   '#4A4860',
  ASAGI:      '#5B8FA8',
  GOLD:       '#C9A84C',
  ERROR:      '#F87171',
  SUCCESS:    '#86EFAC',
  WARNING:    '#FCD34D',
  SHIRONERI:  '#F5F4EF',
  SUMI_INK:   '#1C1C1E',
  HAI:        '#6B7280',
  BORDER:     'rgba(91,143,168,0.15)',
  BORDER_ERR: 'rgba(248,113,113,0.3)',
  BORDER_OK:  'rgba(134,239,172,0.3)',
};

// ─── Shared typography ────────────────────────────────────────────────────────
const SERIF: React.CSSProperties = { fontFamily: "'Cormorant Garamond','Noto Serif JP',Georgia,serif" };
const SANS:  React.CSSProperties = { fontFamily: "Inter,'Noto Sans JP',system-ui,sans-serif" };
const MONO:  React.CSSProperties = { fontFamily: "'JetBrains Mono','Fira Code',monospace" };

const CANVAS: React.CSSProperties = {
  background: T.AO_SUMI,
  minHeight: '100vh',
  padding: '48px',
  boxSizing: 'border-box',
};

// ─── Sub-components ───────────────────────────────────────────────────────────

function PageHeader({ title, kanji, sub }: { title: string; kanji?: string; sub: string }) {
  return (
    <div style={{ marginBottom: '48px' }}>
      <p style={{ ...SANS, fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase', color: T.AINEZUMI, margin: '0 0 10px 0' }}>
        UX Writing · Zanshin Voice
      </p>
      <h1 style={{ ...SERIF, fontSize: '38px', fontWeight: 300, color: T.WASHI, margin: 0, lineHeight: 1.15 }}>
        {title}
        {kanji && <span style={{ ...SERIF, fontSize: '24px', color: T.AINEZUMI, marginLeft: '16px', fontWeight: 300 }}>{kanji}</span>}
      </h1>
      <p style={{ ...SANS, fontSize: '14px', color: T.MIZUASAGI, margin: '12px 0 0', lineHeight: 1.65, maxWidth: '560px' }}>
        {sub}
      </p>
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p style={{
      ...SANS, fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase',
      color: T.AINEZUMI, margin: '0 0 20px 0',
      borderBottom: `1px solid rgba(74,72,96,0.35)`, paddingBottom: '8px',
    }}>
      {children}
    </p>
  );
}

function PillarTag({ label }: { label: 'Shinto' | 'Buddhism' | 'Smart Brevity' }) {
  const colors: Record<string, string> = {
    'Shinto': T.GOLD,
    'Buddhism': T.MIZUASAGI,
    'Smart Brevity': T.ASAGI,
  };
  return (
    <span style={{
      ...SANS, fontSize: '10px', fontWeight: 600, letterSpacing: '0.1em',
      textTransform: 'uppercase', color: T.AO_SUMI,
      background: colors[label],
      padding: '2px 8px', borderRadius: '2px',
    }}>
      {label}
    </span>
  );
}

/** Side-by-side comparison: Zanshin copy vs anti-pattern */
function CopyPair({
  pillar,
  label,
  zanshin,
  antiPattern,
  note,
  renderZanshin,
  renderAnti,
}: {
  pillar: 'Shinto' | 'Buddhism' | 'Smart Brevity';
  label: string;
  zanshin: string;
  antiPattern: string;
  note?: string;
  renderZanshin?: React.ReactNode;
  renderAnti?: React.ReactNode;
}) {
  return (
    <div style={{
      display: 'flex', flexDirection: 'column', gap: '0',
      flex: '1 1 340px', minWidth: '300px', maxWidth: '480px',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
        <PillarTag label={pillar} />
        <span style={{ ...SANS, fontSize: '12px', color: T.MIZUASAGI, fontWeight: 500 }}>{label}</span>
      </div>

      {/* Zanshin side */}
      <div style={{
        background: T.SUMI_NURI, border: `1px solid ${T.BORDER_OK}`,
        borderRadius: '4px 4px 0 0', padding: '20px 24px', overflow: 'hidden',
      }}>
        <p style={{ ...SANS, fontSize: '10px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: T.SUCCESS, margin: '0 0 10px 0' }}>
          Zanshin
        </p>
        {renderZanshin ?? (
          <p style={{ ...SANS, fontSize: '14px', color: T.WASHI, margin: 0, lineHeight: 1.6 }}>
            {zanshin}
          </p>
        )}
      </div>

      {/* Anti-pattern side */}
      <div style={{
        background: T.SUMI_USUI, border: `1px solid ${T.BORDER_ERR}`,
        borderTop: 'none', borderRadius: '0 0 4px 4px', padding: '20px 24px',
      }}>
        <p style={{ ...SANS, fontSize: '10px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: T.ERROR, margin: '0 0 10px 0' }}>
          Anti-pattern
        </p>
        {renderAnti ?? (
          <p style={{ ...SANS, fontSize: '14px', color: `${T.WASHI}99`, margin: 0, lineHeight: 1.6 }}>
            {antiPattern}
          </p>
        )}
        {note && (
          <p style={{ ...SANS, fontSize: '11px', color: T.AINEZUMI, margin: '10px 0 0', lineHeight: 1.5, fontStyle: 'italic' }}>
            {note}
          </p>
        )}
      </div>
    </div>
  );
}

// ─── Shared interactive button ─────────────────────────────────────────────
function ZanshinButton({ label, variant = 'primary', onClick }: { label: string; variant?: 'primary' | 'ghost'; onClick?: () => void }) {
  const [hover, setHover] = useState(false);
  const [active, setActive] = useState(false);
  const base: React.CSSProperties = {
    ...SANS,
    display: 'inline-block',
    padding: '10px 24px',
    borderRadius: '4px',
    fontSize: '13px',
    fontWeight: 500,
    letterSpacing: '0.06em',
    cursor: 'pointer',
    border: 'none',
    transition: 'all 300ms cubic-bezier(0.25,0.46,0.45,0.94)',
    transform: active ? 'scale(0.97) translateY(1px)' : hover ? 'scale(1.01)' : 'scale(1)',
    userSelect: 'none',
  };
  const styles: Record<string, React.CSSProperties> = {
    primary: {
      ...base,
      background: T.MIZUASAGI,
      color: T.AO_SUMI,
      boxShadow: hover ? `0 4px 16px rgba(138,175,192,0.25)` : 'none',
    },
    ghost: {
      ...base,
      background: 'transparent',
      color: T.MIZUASAGI,
      border: `1px solid rgba(138,175,192,0.35)`,
      boxShadow: hover ? `0 2px 8px rgba(138,175,192,0.12)` : 'none',
    },
  };

  return (
    <button
      style={styles[variant]}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setHover(false); setActive(false); }}
      onMouseDown={() => setActive(true)}
      onMouseUp={() => setActive(false)}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

// ─── Toast component ───────────────────────────────────────────────────────
function Toast({ message, kind, visible }: { message: string; kind: 'success' | 'error' | 'warn'; visible: boolean }) {
  const accent = kind === 'success' ? T.SUCCESS : kind === 'error' ? T.ERROR : T.WARNING;
  return (
    <div style={{
      position: 'fixed', bottom: '32px', right: '32px',
      background: T.SUMI_NURI,
      border: `1px solid ${accent}40`,
      borderLeft: `3px solid ${accent}`,
      borderRadius: '4px',
      padding: '14px 20px',
      display: 'flex', alignItems: 'center', gap: '12px',
      maxWidth: '340px',
      opacity: visible ? 1 : 0,
      transform: visible ? 'translateX(0)' : 'translateX(24px)',
      transition: 'all 400ms cubic-bezier(0.0,0.0,0.1,1)',
      pointerEvents: visible ? 'auto' : 'none',
      zIndex: 100,
    }}>
      <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: accent, flexShrink: 0 }} />
      <span style={{ ...SANS, fontSize: '13px', color: T.WASHI, lineHeight: 1.5 }}>{message}</span>
    </div>
  );
}

// ─── Story 1: Shinto Thresholds ───────────────────────────────────────────────
function ShintoThresholdsPage() {
  return (
    <div style={CANVAS}>
      <PageHeader
        title="Shinto Thresholds"
        kanji="鳥居"
        sub="Buttons, labels, and CTAs are torii gates — they mark passage, they do not narrate it. The shorter the copy, the more charged the threshold."
      />

      <SectionLabel>CTAs — the gate says one word</SectionLabel>
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', marginBottom: '48px' }}>
        <CopyPair
          pillar="Shinto"
          label="Primary CTA"
          zanshin="Begin"
          antiPattern="Click here to get started with your journey"
          note="'Click here' violates kotodama — the name describes nothing. 'Journey' is decoration at the gate."
          renderZanshin={<ZanshinButton label="Begin" />}
          renderAnti={
            <button style={{ ...SANS, fontSize: '13px', color: `${T.WASHI}70`, background: 'transparent', border: `1px solid rgba(255,255,255,0.1)`, borderRadius: '4px', padding: '10px 24px', cursor: 'not-allowed' }}>
              Click here to get started with your journey
            </button>
          }
        />
        <CopyPair
          pillar="Shinto"
          label="Destructive action"
          zanshin="Remove"
          antiPattern="Yes, delete this item permanently"
          note="Confirm dialogs already carry the weight of permanence. The button does not repeat it."
          renderZanshin={
            <ZanshinButton label="Remove" variant="ghost" />
          }
          renderAnti={
            <button style={{ ...SANS, fontSize: '13px', color: `${T.WASHI}70`, background: 'transparent', border: `1px solid rgba(255,255,255,0.1)`, borderRadius: '4px', padding: '10px 24px', cursor: 'not-allowed' }}>
              Yes, delete this item permanently
            </button>
          }
        />
        <CopyPair
          pillar="Shinto"
          label="Palette switcher tooltip"
          zanshin={'Two modes, one root.\nKintsugi for warmth. Aizome for discipline.\nSet data-palette on <body> to begin.'}
          antiPattern={'This feature allows you to toggle between the two available theme modes in the Zanshin Design System. The Kintsugi mode uses warm gold tones while the Aizome mode uses indigo tones.'}
          note="Smart Brevity structure: finding → why → action. The anti-pattern restates what the user can see."
        />
      </div>

      <SectionLabel>Labels — kotodama (言霊) in practice</SectionLabel>
      <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '48px' }}>
        {[
          { good: 'Save', bad: 'Save changes' },
          { good: 'Apply theme', bad: 'Apply your new theme settings' },
          { good: 'Connect', bad: 'Connect your account' },
          { good: 'Confirm', bad: 'Yes, I confirm' },
          { good: 'Try again', bad: 'Please try again' },
          { good: 'Dismiss', bad: 'Close this notification' },
        ].map(({ good, bad }) => (
          <div key={good} style={{
            background: T.SUMI_NURI, border: `1px solid ${T.BORDER}`, borderRadius: '4px',
            padding: '16px 20px', display: 'flex', flexDirection: 'column', gap: '10px', minWidth: '160px',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ ...SANS, fontSize: '12px', color: T.SUCCESS, fontWeight: 600 }}>✓</span>
              <span style={{ ...SANS, fontSize: '14px', color: T.WASHI, fontWeight: 500 }}>{good}</span>
            </div>
            <div style={{ height: '1px', background: `rgba(74,72,96,0.35)` }} />
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ ...SANS, fontSize: '12px', color: T.ERROR }}>✗</span>
              <span style={{ ...SANS, fontSize: '13px', color: `${T.WASHI}55` }}>{bad}</span>
            </div>
          </div>
        ))}
      </div>

      <SectionLabel>Empty states — silence is valid</SectionLabel>
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        {[
          { ctx: 'No components', z: 'No components. Add the first one.', a: "There's nothing here yet! Get started by adding your first component." },
          { ctx: 'No test results', z: 'No results. Run npm run test:apca.', a: 'Looks like you haven\'t run any tests yet. No worries — you can run them anytime!' },
          { ctx: 'All pairs clear', z: 'All pairs clear.', a: 'Great news! No accessibility issues were found in your color pairs.' },
        ].map(({ ctx, z, a }) => (
          <CopyPair key={ctx} pillar="Shinto" label={ctx} zanshin={z} antiPattern={a} />
        ))}
      </div>
    </div>
  );
}

// ─── Story 2: Buddhist Error States ──────────────────────────────────────────
function BuddhistErrorsPage() {
  const [toastVisible, setToastVisible] = useState(false);
  const [toastMsg, setToastMsg] = useState('');
  const [toastKind, setToastKind] = useState<'success'|'error'|'warn'>('success');

  function fireToast(msg: string, kind: 'success'|'error'|'warn') {
    setToastMsg(msg);
    setToastKind(kind);
    setToastVisible(true);
    setTimeout(() => setToastVisible(false), 3200);
  }

  return (
    <div style={CANVAS}>
      <PageHeader
        title="Buddhist Error States"
        kanji="無常"
        sub="Errors are temporary states (anicca — impermanence). Acknowledge what happened. Name what to do. No apology, no drama. The state will change."
      />

      <SectionLabel>Error messages — factual + actionable</SectionLabel>
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', marginBottom: '48px' }}>
        <CopyPair
          pillar="Buddhism"
          label="Build error"
          zanshin="Build failed — 3 TypeScript errors."
          antiPattern="Oops! Your build has encountered some errors. Don't worry, this happens sometimes!"
          note="'Oops' infantilizes. 'Don't worry' creates the worry. The fact is the only thing that helps."
        />
        <CopyPair
          pillar="Buddhism"
          label="Network failure"
          zanshin="Couldn't save. Check your connection and try again."
          antiPattern="We're sorry — something went wrong while trying to save your work. Please try again later."
          note="'We're sorry' is the system attaching to the failure. State the condition, offer the action."
        />
        <CopyPair
          pillar="Buddhism"
          label="APCA violation"
          zanshin={"Asagi on ao-sumi — prohibited.\nLc −39.6, below interactive threshold (45).\nUse mizuasagi (#8AAFC0, Lc −55.8)."}
          antiPattern="This color combination may not meet accessibility guidelines. Consider using a different color."
          note="Exact values, named pair, named replacement. 'May not' hedges what is definitively false."
        />
        <CopyPair
          pillar="Buddhism"
          label="Token not found"
          zanshin="Token not found in tokens.ts. Check the key name."
          antiPattern="We couldn't find that token. You may have entered it incorrectly."
          note="'You may have' shifts responsibility vaguely. The error names the location; the user resolves it."
        />
      </div>

      <SectionLabel>Live toasts — zanshin completes the cycle</SectionLabel>
      <p style={{ ...SANS, fontSize: '13px', color: T.MIZUASAGI, margin: '0 0 20px 0', lineHeight: 1.6 }}>
        Toasts are the <em>zanshin</em> of an action. They close the cycle — not celebrate it.
        Past tense. Subject + verb. One sentence maximum.
      </p>
      <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '48px' }}>
        {[
          { label: 'Save action', msg: 'Saved to workspace.', kind: 'success' as const },
          { label: 'Push to GitHub', msg: 'Pushed to main.', kind: 'success' as const },
          { label: 'Test failure', msg: '2 tests failed — npm run test:apca for details.', kind: 'error' as const },
          { label: 'APCA warning', msg: 'Asagi on ao-sumi fails Lc 45 — use mizuasagi.', kind: 'warn' as const },
          { label: 'Notion created', msg: 'Notion page created.', kind: 'success' as const },
        ].map(({ label, msg, kind }) => (
          <div key={label} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <span style={{ ...SANS, fontSize: '11px', color: T.AINEZUMI, letterSpacing: '0.06em' }}>{label}</span>
            <ZanshinButton label={`Fire: "${msg.slice(0,28)}${msg.length > 28 ? '...' : ''}"`} variant="ghost" onClick={() => fireToast(msg, kind)} />
          </div>
        ))}
      </div>

      <SectionLabel>Loading states — present-tense observation</SectionLabel>
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        {[
          { z: 'Building Storybook...', a: 'Please wait while we build your Storybook. This may take a moment...' },
          { z: 'Loading tokens...', a: 'Hang tight! We\'re loading your design tokens for you!' },
          { z: 'Computing Lc values...', a: 'We\'re working hard to compute your contrast values!' },
        ].map(({ z, a }) => (
          <CopyPair key={z} pillar="Buddhism" label="Loading state" zanshin={z} antiPattern={a} />
        ))}
      </div>

      <Toast message={toastMsg} kind={toastKind} visible={toastVisible} />
    </div>
  );
}

// ─── Story 3: Smart Brevity CTAs ─────────────────────────────────────────────
function SmartBrevityCTAsPage() {
  return (
    <div style={CANVAS}>
      <PageHeader
        title="Smart Brevity CTAs"
        kanji="簡素"
        sub="Lead with the finding. One idea per unit. Active voice. The reader decides in the first sentence. Make that sentence earn its place."
      />

      <SectionLabel>The five rules — applied</SectionLabel>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '48px', maxWidth: '760px' }}>
        {[
          {
            rule: '1 — Lead with the finding',
            z: 'Two modes, one root. Kintsugi for warmth. Aizome for discipline.',
            a: 'The Zanshin Design System was built with two complementary color modes in mind, each drawing from a different Japanese aesthetic tradition...',
          },
          {
            rule: '2 — One idea per unit',
            z: 'Set data-palette on <body>.',
            a: 'To activate a palette mode, you will need to add the data-palette attribute to your body element, selecting either "kintsugi" or "aizome" as the value depending on your desired visual context.',
          },
          {
            rule: '3 — Active voice',
            z: 'Run npm run test:apca to validate.',
            a: 'Your APCA tokens can be validated by running the test suite.',
          },
          {
            rule: '4 — Cut the throat-clearing',
            z: 'Asagi fails on ao-sumi. Use mizuasagi.',
            a: 'Before we get into the details, it\'s worth noting that the asagi color token, while valid in some contexts, does not pass the APCA interactive threshold when used on the ao-sumi dark ground...',
          },
          {
            rule: '5 — Make it scan',
            z: '**Asagi on ao-sumi — prohibited.** Lc −39.6. Use mizuasagi.',
            a: 'The asagi color has a contrast ratio of approximately Lc negative 39.6 when placed on the ao-sumi background color, which means it falls below the required Lc 45 threshold for interactive elements...',
          },
        ].map(({ rule, z, a }) => (
          <div key={rule} style={{
            display: 'grid', gridTemplateColumns: '160px 1fr 1fr', gap: '0',
            background: T.SUMI_NURI, border: `1px solid ${T.BORDER}`, borderRadius: '4px', overflow: 'hidden',
          }}>
            <div style={{ background: T.SUMI_USUI, padding: '16px', borderRight: `1px solid rgba(74,72,96,0.35)` }}>
              <p style={{ ...SANS, fontSize: '11px', color: T.GOLD, fontWeight: 600, margin: 0, lineHeight: 1.5 }}>{rule}</p>
            </div>
            <div style={{ padding: '16px', borderRight: `1px solid rgba(74,72,96,0.35)` }}>
              <p style={{ ...SANS, fontSize: '11px', color: T.SUCCESS, fontWeight: 600, letterSpacing: '0.08em', margin: '0 0 6px 0' }}>ZANSHIN</p>
              <p style={{ ...SANS, fontSize: '13px', color: T.WASHI, margin: 0, lineHeight: 1.6 }}>{z}</p>
            </div>
            <div style={{ padding: '16px' }}>
              <p style={{ ...SANS, fontSize: '11px', color: T.ERROR, fontWeight: 600, letterSpacing: '0.08em', margin: '0 0 6px 0' }}>AVOID</p>
              <p style={{ ...SANS, fontSize: '13px', color: `${T.WASHI}55`, margin: 0, lineHeight: 1.6 }}>{a}</p>
            </div>
          </div>
        ))}
      </div>

      <SectionLabel>Onboarding — three-line structure</SectionLabel>
      <p style={{ ...SANS, fontSize: '13px', color: T.MIZUASAGI, margin: '0 0 20px 0', lineHeight: 1.6 }}>
        Smart Brevity onboarding: <strong style={{ color: T.WASHI }}>what it is</strong> → <strong style={{ color: T.WASHI }}>why it matters</strong> → <strong style={{ color: T.WASHI }}>what to do</strong>.
        Three sentences maximum. The third is always an action.
      </p>
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        {[
          {
            label: 'Palette switcher',
            lines: [
              { kind: 'what', text: 'Two modes, one root.' },
              { kind: 'why', text: 'Kintsugi for editorial warmth. Aizome for product discipline.' },
              { kind: 'do', text: 'Set data-palette on <body> to begin.' },
            ],
          },
          {
            label: 'APCA suite',
            lines: [
              { kind: 'what', text: 'Every color pair has a live Lc value.' },
              { kind: 'why', text: 'APCA measures perceived contrast — not the same as WCAG ratios.' },
              { kind: 'do', text: 'Run npm run test:apca to validate all pairs.' },
            ],
          },
          {
            label: 'Storybook',
            lines: [
              { kind: 'what', text: 'Twelve components, four palette/theme states.' },
              { kind: 'why', text: 'Every story renders against a live token stack — no static screenshots.' },
              { kind: 'do', text: 'Use the toolbar to switch palette and theme.' },
            ],
          },
        ].map(({ label, lines }) => (
          <div key={label} style={{
            background: T.SUMI_NURI, border: `1px solid ${T.BORDER}`,
            borderRadius: '4px', padding: '24px 28px',
            flex: '1 1 260px', minWidth: '260px', maxWidth: '360px',
            display: 'flex', flexDirection: 'column', gap: '0',
          }}>
            <p style={{ ...SANS, fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase', color: T.AINEZUMI, margin: '0 0 16px 0' }}>
              {label}
            </p>
            {lines.map(({ kind, text }, i) => {
              const kindColor: Record<string, string> = { what: T.WASHI, why: T.MIZUASAGI, do: T.GOLD };
              const kindLabel: Record<string, string> = { what: 'What', why: 'Why', do: 'Do' };
              return (
                <div key={kind} style={{ display: 'flex', gap: '12px', paddingBottom: i < 2 ? '12px' : '0', marginBottom: i < 2 ? '12px' : '0', borderBottom: i < 2 ? `1px solid rgba(74,72,96,0.25)` : 'none' }}>
                  <span style={{ ...SANS, fontSize: '10px', fontWeight: 700, color: kindColor[kind], letterSpacing: '0.06em', textTransform: 'uppercase', minWidth: '30px', paddingTop: '2px' }}>
                    {kindLabel[kind]}
                  </span>
                  <span style={{ ...SANS, fontSize: '13px', color: T.WASHI, lineHeight: 1.6 }}>{text}</span>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Story 4: Microcopy Patterns ──────────────────────────────────────────────
function MicrocopyPatternsPage() {
  const [successVisible, setSuccessVisible] = useState(false);
  const [toastVisible, setToastVisible] = useState(false);

  function triggerSave() {
    setSuccessVisible(true);
    setToastVisible(true);
    setTimeout(() => setToastVisible(false), 3000);
  }

  return (
    <div style={CANVAS}>
      <PageHeader
        title="Microcopy Patterns"
        kanji="細書"
        sub="The full pattern library: buttons, placeholders, form hints, confirmations, and notifications. Each follows one of the three pillars."
      />

      <SectionLabel>Interactive form — live copy demo</SectionLabel>
      <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap', marginBottom: '48px' }}>
        <div style={{
          background: T.SUMI_NURI, border: `1px solid ${T.BORDER}`, borderRadius: '4px',
          padding: '28px 32px', flex: '1 1 320px', maxWidth: '420px',
          display: 'flex', flexDirection: 'column', gap: '20px',
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <label style={{ ...SANS, fontSize: '11px', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: T.MIZUASAGI }}>Token name</label>
            <input
              placeholder="e.g. --color-text-muted"
              style={{
                ...MONO, fontSize: '13px', color: T.WASHI,
                background: T.SUMI_USUI, border: `1px solid rgba(91,143,168,0.2)`,
                borderRadius: '4px', padding: '10px 14px', outline: 'none',
                width: '100%', boxSizing: 'border-box',
              }}
            />
            <p style={{ ...SANS, fontSize: '11px', color: T.AINEZUMI, margin: 0 }}>CSS custom property key, including the --</p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <label style={{ ...SANS, fontSize: '11px', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: T.MIZUASAGI }}>Value</label>
            <input
              placeholder="#E8EBF0"
              style={{
                ...MONO, fontSize: '13px', color: T.WASHI,
                background: T.SUMI_USUI, border: `1px solid rgba(91,143,168,0.2)`,
                borderRadius: '4px', padding: '10px 14px', outline: 'none',
                width: '100%', boxSizing: 'border-box',
              }}
            />
            <p style={{ ...SANS, fontSize: '11px', color: T.AINEZUMI, margin: 0 }}>Hex, rgb, or hsl. Will be APCA-validated on save.</p>
          </div>

          <div style={{ display: 'flex', gap: '12px' }}>
            <ZanshinButton label="Save token" onClick={triggerSave} />
            <ZanshinButton label="Cancel" variant="ghost" onClick={() => setSuccessVisible(false)} />
          </div>

          {successVisible && (
            <div style={{
              display: 'flex', alignItems: 'center', gap: '10px',
              padding: '10px 14px', background: `rgba(134,239,172,0.08)`,
              border: `1px solid rgba(134,239,172,0.25)`, borderRadius: '4px',
            }}>
              <span style={{ fontSize: '12px', color: T.SUCCESS }}>●</span>
              <span style={{ ...SANS, fontSize: '13px', color: T.SUCCESS }}>Token saved.</span>
            </div>
          )}
        </div>

        {/* Annotation column */}
        <div style={{ flex: '1 1 280px', maxWidth: '360px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <p style={{ ...SANS, fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase', color: T.AINEZUMI, margin: '0 0 4px 0' }}>Copy decisions</p>
          {[
            { pillar: 'Shinto' as const, note: 'Label: "Token name" not "Please enter the name of your CSS custom property token"' },
            { pillar: 'Shinto' as const, note: 'Placeholder shows the format, not an instruction: "e.g. --color-text-muted"' },
            { pillar: 'Buddhism' as const, note: 'Hint is factual: "CSS custom property key, including the --" — no please, no sorry' },
            { pillar: 'Smart Brevity' as const, note: 'CTA: "Save token" — verb + object, no ceremony' },
            { pillar: 'Buddhism' as const, note: 'Success: "Token saved." — past tense, one word, period. Done.' },
          ].map(({ pillar, note }, i) => (
            <div key={i} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
              <PillarTag label={pillar} />
              <p style={{ ...SANS, fontSize: '12px', color: T.MIZUASAGI, margin: 0, lineHeight: 1.55 }}>{note}</p>
            </div>
          ))}
        </div>
      </div>

      <SectionLabel>Pattern reference</SectionLabel>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '16px' }}>
        {[
          {
            category: 'Placeholders',
            pairs: [
              { z: 'e.g. --color-text-muted', a: 'Enter token name here...' },
              { z: 'Search tokens', a: 'Search for a token...' },
              { z: '#141820', a: 'Enter a color value' },
            ],
          },
          {
            category: 'Form hints',
            pairs: [
              { z: 'CSS custom property, including the --', a: 'Please make sure to include the double hyphen prefix.' },
              { z: 'Hex, rgb, or hsl.', a: 'You can enter color values in hex, RGB, or HSL format.' },
              { z: 'Optional.', a: 'This field is not required.' },
            ],
          },
          {
            category: 'Confirmation dialogs',
            pairs: [
              { z: 'Remove token?', a: 'Are you sure you want to delete this token?' },
              { z: 'This cannot be undone.', a: 'Please note that this action is permanent and irreversible.' },
              { z: 'Remove', a: 'Yes, remove it' },
            ],
          },
          {
            category: 'Notifications',
            pairs: [
              { z: 'Build failed — 2 errors.', a: 'Your build encountered some errors.' },
              { z: 'Pushed to main.', a: 'Your code has been successfully pushed!' },
              { z: 'Palette updated.', a: 'The palette settings have been updated successfully.' },
            ],
          },
        ].map(({ category, pairs }) => (
          <div key={category} style={{
            background: T.SUMI_NURI, border: `1px solid ${T.BORDER}`, borderRadius: '4px', overflow: 'hidden',
          }}>
            <div style={{ background: T.SUMI_USUI, padding: '10px 16px', borderBottom: `1px solid rgba(74,72,96,0.35)` }}>
              <p style={{ ...SANS, fontSize: '11px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: T.GOLD, margin: 0 }}>{category}</p>
            </div>
            <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {pairs.map(({ z, a }, i) => (
                <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                    <span style={{ ...SANS, fontSize: '11px', color: T.SUCCESS, fontWeight: 700, paddingTop: '1px' }}>✓</span>
                    <span style={{ ...SANS, fontSize: '13px', color: T.WASHI, lineHeight: 1.5 }}>{z}</span>
                  </div>
                  <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                    <span style={{ ...SANS, fontSize: '11px', color: T.ERROR, fontWeight: 700, paddingTop: '1px' }}>✗</span>
                    <span style={{ ...SANS, fontSize: '12px', color: `${T.WASHI}45`, lineHeight: 1.5 }}>{a}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <Toast message="Token saved." kind="success" visible={toastVisible} />
    </div>
  );
}

// ─── Story 5: Copy Audit ──────────────────────────────────────────────────────
function CopyAuditPage() {
  return (
    <div style={CANVAS}>
      <PageHeader
        title="Copy Audit"
        kanji="校正"
        sub="Six common anti-patterns rewritten in Zanshin voice. Use this as a reference when reviewing existing copy in the system or product."
      />

      <SectionLabel>Before / after — six patterns</SectionLabel>
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', marginBottom: '40px' }}>
        {[
          {
            pillar: 'Buddhism' as const,
            label: 'Oops pattern',
            zanshin: "Couldn't connect. Check your network and try again.",
            antiPattern: "Oops! Something went wrong. Please try again later.",
            note: "Oops infantilizes. 'Later' is vague when now is what the user needs.",
          },
          {
            pillar: 'Shinto' as const,
            label: 'Don\'t worry pattern',
            zanshin: "Token validation failed. Fix the Lc value in tokens.ts.",
            antiPattern: "Don't worry — we found a small issue with your token. You can fix it easily!",
            note: "'Don't worry' creates the worry. 'Small' and 'easily' are editorializing.",
          },
          {
            pillar: 'Smart Brevity' as const,
            label: 'Simply / Just pattern',
            zanshin: "Set data-palette on <body> to activate a mode.",
            antiPattern: "You can simply just add the data-palette attribute to your body tag to get started.",
            note: "Simply + just = the writer's anxiety. Cut both. The instruction stands on its own.",
          },
          {
            pillar: 'Shinto' as const,
            label: 'Click here pattern',
            zanshin: "Read the APCA guide.",
            antiPattern: "Click here to learn more about APCA contrast guidelines.",
            note: "Click here describes the interaction, not the destination. Name the threshold.",
          },
          {
            pillar: 'Buddhism' as const,
            label: 'Passive error pattern',
            zanshin: "Build failed — check the TypeScript errors below.",
            antiPattern: "An error was encountered while processing your build request.",
            note: "Passive voice hides the subject. The build failed. Own it.",
          },
          {
            pillar: 'Smart Brevity' as const,
            label: 'Effort narrative pattern',
            zanshin: "Storybook is building. This takes ~8 seconds.",
            antiPattern: "We're working hard to build your Storybook! Hang tight — it'll be ready soon.",
            note: "Users want the result. The effort narrative is the writer's anxiety, not useful information.",
          },
        ].map(({ pillar, label, zanshin, antiPattern, note }) => (
          <CopyPair key={label} pillar={pillar} label={label} zanshin={zanshin} antiPattern={antiPattern} note={note} />
        ))}
      </div>

      {/* Checklist */}
      <SectionLabel>Pre-publish checklist</SectionLabel>
      <div style={{
        background: T.SUMI_NURI, border: `1px solid ${T.BORDER}`, borderRadius: '4px',
        padding: '24px 28px', maxWidth: '640px',
        display: 'flex', flexDirection: 'column', gap: '10px',
      }}>
        {[
          { pillar: 'Smart Brevity' as const, check: 'First sentence states the essential information' },
          { pillar: 'Smart Brevity' as const, check: 'Active voice throughout' },
          { pillar: 'Buddhism' as const, check: 'Errors: factual + temporary, no apology' },
          { pillar: 'Buddhism' as const, check: 'Success: past tense, no exclamation' },
          { pillar: 'Buddhism' as const, check: 'Loading: present progressive, no ceremony' },
          { pillar: 'Shinto' as const, check: 'Labels: verb + object only' },
          { pillar: 'Shinto' as const, check: 'No forbidden patterns: Oops / Simply / Just / Click here / Don\'t worry' },
          { pillar: 'Shinto' as const, check: 'APCA copy uses exact Lc values and names the pair' },
          { pillar: 'Smart Brevity' as const, check: 'Nothing could be cut without losing meaning' },
        ].map(({ pillar, check }, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <input type="checkbox" style={{ accentColor: T.MIZUASAGI, width: '14px', height: '14px', flexShrink: 0 }} />
            <PillarTag label={pillar} />
            <span style={{ ...SANS, fontSize: '13px', color: T.WASHI, lineHeight: 1.5 }}>{check}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Meta ─────────────────────────────────────────────────────────────────────
const meta: Meta = {
  title: 'Docs/UX Writing',
  parameters: {
    docs: {
      description: {
        component:
          'Live UX writing examples for the Zanshin Design System. ' +
          'Three pillars: Shinto threshold copy, Buddhist error states, Smart Brevity CTAs. ' +
          'Every story renders Zanshin copy alongside its anti-pattern for direct comparison.',
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

export const ShintoThresholds: Story = {
  name: 'Shinto Thresholds — 鳥居',
  render: () => <ShintoThresholdsPage />,
  parameters: {
    docs: {
      description: {
        story:
          'CTAs, labels, and empty states as torii gates. ' +
          'The button is a threshold — it marks passage, it does not narrate it. ' +
          'Kotodama: once a label is established, changing it breaks the ritual.',
      },
    },
  },
};

export const BuddhistErrors: Story = {
  name: 'Buddhist Errors — 無常',
  render: () => <BuddhistErrorsPage />,
  parameters: {
    docs: {
      description: {
        story:
          'Error messages, loading states, and toasts under the impermanence principle. ' +
          'Acknowledge what happened. Name what to do. No apology, no drama. ' +
          'Fire the live toasts to see zanshin (残心) copy in action.',
      },
    },
  },
};

export const SmartBrevityCTAs: Story = {
  name: 'Smart Brevity CTAs — 簡素',
  render: () => <SmartBrevityCTAsPage />,
  parameters: {
    docs: {
      description: {
        story:
          'The five Smart Brevity rules applied to Zanshin copy. ' +
          'Lead with the finding. One idea per unit. Active voice. ' +
          'Onboarding structure: what it is → why it matters → what to do.',
      },
    },
  },
};

export const MicrocopyPatterns: Story = {
  name: 'Microcopy Patterns — 細書',
  render: () => <MicrocopyPatternsPage />,
  parameters: {
    docs: {
      description: {
        story:
          'Full microcopy pattern library: labels, placeholders, form hints, confirmation dialogs, notifications. ' +
          'Interact with the live form — save the token to see the success state and toast.',
      },
    },
  },
};

export const CopyAudit: Story = {
  name: 'Copy Audit — 校正',
  render: () => <CopyAuditPage />,
  parameters: {
    docs: {
      description: {
        story:
          'Six common anti-patterns rewritten in Zanshin voice. ' +
          'Use as a reference when reviewing existing copy. ' +
          'Interactive pre-publish checklist at the bottom.',
      },
    },
  },
};
