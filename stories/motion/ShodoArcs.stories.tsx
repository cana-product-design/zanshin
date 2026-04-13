/**
 * ShodoArcs.stories.tsx
 *
 * Interactive Storybook demos for the four Shodo motion arcs,
 * rendered on the ao-sumi dark ground (#141820).
 *
 * Each story is self-contained and re-triggers its animation when
 * the user clicks the "Strike again" button (simulating re-mount).
 */

import type { Meta, StoryObj } from '@storybook/react';
import React, { useState, useCallback } from 'react';

// ─── Shared styles injected once ─────────────────────────────────────────────

const KEYFRAMES = `
  @keyframes hiki-fude {
    from { opacity: 0; transform: translateX(-20px); }
    to   { opacity: 1; transform: translateX(0); }
  }
  @keyframes tate-fude {
    from { opacity: 0; transform: translateY(-14px) scaleY(0.96); transform-origin: top center; }
    to   { opacity: 1; transform: translateY(0) scaleY(1); }
  }
  @keyframes fude-okoshi {
    from { opacity: 0; transform: translateY(10px) scale(0.99); }
    to   { opacity: 1; transform: translateY(0) scale(1); }
  }
  @keyframes zanshin-hiki {
    from { opacity: 1; transform: translateY(0) scale(1); }
    to   { opacity: 0; transform: translateY(-8px) scale(0.995); }
  }
  @keyframes fude-stagger-in {
    from { opacity: 0; transform: translateY(12px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @media (prefers-reduced-motion: reduce) {
    [class*="arc-"] { animation-duration: 1ms !important; }
  }
`;

function injectStyles() {
  if (typeof document === 'undefined') return;
  if (document.getElementById('shodo-keyframes')) return;
  const style = document.createElement('style');
  style.id = 'shodo-keyframes';
  style.textContent = KEYFRAMES;
  document.head.appendChild(style);
}

// ─── Ao-sumi canvas wrapper ───────────────────────────────────────────────────

const AO_SUMI_BG: React.CSSProperties = {
  background: '#141820',
  minHeight: '320px',
  borderRadius: '4px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  padding: '48px 56px',
  gap: '24px',
  position: 'relative',
  fontFamily: "'Cormorant Garamond', 'Noto Serif JP', Georgia, serif",
};

const LABEL_STYLE: React.CSSProperties = {
  fontFamily: 'Inter, system-ui, sans-serif',
  fontSize: '11px',
  letterSpacing: '0.14em',
  textTransform: 'uppercase',
  color: '#4A4860',
  marginBottom: '4px',
};

const STRIKE_BTN: React.CSSProperties = {
  marginTop: '32px',
  padding: '8px 20px',
  background: 'transparent',
  border: '1px solid rgba(91,143,168,0.35)',
  borderRadius: '4px',
  color: '#5B8FA8',
  fontFamily: 'Inter, system-ui, sans-serif',
  fontSize: '12px',
  letterSpacing: '0.08em',
  cursor: 'pointer',
  transition: 'border-color 300ms cubic-bezier(0.4,0.0,0.2,1), color 300ms cubic-bezier(0.4,0.0,0.2,1)',
};

// ─── Hook: re-mount key for animation replay ──────────────────────────────────

function useStrike() {
  const [key, setKey] = useState(0);
  const strike = useCallback(() => setKey(k => k + 1), []);
  return { key, strike };
}

// ─── 1. Hiki-fude — directional pull ─────────────────────────────────────────

function HikiFudeDemo() {
  injectStyles();
  const { key, strike } = useStrike();

  return (
    <div style={AO_SUMI_BG}>
      <p style={LABEL_STYLE}>Hiki-fude 引き筆 — The drawn line</p>
      <div key={key} style={{
        animation: 'hiki-fude 700ms cubic-bezier(0.25, 0.46, 0.45, 0.94) both',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
      }}>
        <h2 style={{ fontSize: '36px', fontWeight: 300, color: '#E8EBF0', lineHeight: 1.2, margin: 0 }}>
          残心
        </h2>
        <p style={{ fontSize: '16px', color: '#8AAFC0', margin: 0, fontFamily: 'Inter, system-ui, sans-serif', fontWeight: 300 }}>
          Lingering awareness — the panel enters from the left.
        </p>
        <div style={{
          marginTop: '4px',
          height: '1px',
          width: '200px',
          background: 'linear-gradient(90deg, #5B8FA8, transparent)',
        }} />
      </div>
      <p style={{
        ...LABEL_STYLE,
        position: 'absolute',
        bottom: '24px',
        right: '24px',
        margin: 0,
        opacity: 0.6,
      }}>
        ease-kendo · 700ms
      </p>
      <button style={STRIKE_BTN} onClick={strike}>Strike again</button>
    </div>
  );
}

// ─── 2. Tate-fude — vertical descent ─────────────────────────────────────────

function TateFudeDemo() {
  injectStyles();
  const { key, strike } = useStrike();

  return (
    <div style={AO_SUMI_BG}>
      <p style={LABEL_STYLE}>Tate-fude 縦筆 — The vertical drop</p>
      <div key={key} style={{
        animation: 'tate-fude 500ms cubic-bezier(0.0, 0.0, 0.2, 1) both',
        background: '#1E2230',
        border: '1px solid rgba(91,143,168,0.15)',
        borderRadius: '4px',
        padding: '28px 32px',
        width: '100%',
        maxWidth: '360px',
      }}>
        <p style={{ ...LABEL_STYLE, marginBottom: '12px' }}>Dropdown · Modal · Banner</p>
        <p style={{ fontSize: '20px', fontWeight: 300, color: '#E8EBF0', margin: '0 0 12px 0' }}>
          The brush descends.
        </p>
        <p style={{ fontSize: '13px', color: '#8AAFC0', margin: 0, fontFamily: 'Inter, system-ui, sans-serif', lineHeight: 1.6 }}>
          Fast entry — ink meets paper with intent. Decisive, not aggressive.
        </p>
      </div>
      <p style={{
        ...LABEL_STYLE,
        position: 'absolute',
        bottom: '24px',
        right: '24px',
        margin: 0,
        opacity: 0.6,
      }}>
        ease-strike · 500ms
      </p>
      <button style={STRIKE_BTN} onClick={strike}>Strike again</button>
    </div>
  );
}

// ─── 3. Fude-okoshi — reveal in place ────────────────────────────────────────

function FudeOkoshiDemo() {
  injectStyles();
  const { key, strike } = useStrike();

  return (
    <div style={AO_SUMI_BG}>
      <p style={LABEL_STYLE}>Fude-okoshi 筆起こし — The brush awakening</p>
      <div key={key} style={{
        animation: 'fude-okoshi 700ms cubic-bezier(0.4, 0.0, 0.2, 1) both',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        width: '100%',
        maxWidth: '400px',
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
        }}>
          <div style={{
            width: '36px',
            height: '36px',
            borderRadius: '4px',
            background: 'rgba(91,143,168,0.12)',
            border: '1px solid rgba(91,143,168,0.22)',
            flexShrink: 0,
          }} />
          <div>
            <p style={{ fontSize: '15px', color: '#E8EBF0', margin: '0 0 4px 0', fontFamily: 'Inter, system-ui, sans-serif', fontWeight: 500 }}>
              Scroll reveal
            </p>
            <p style={{ fontSize: '12px', color: '#4A4860', margin: 0, fontFamily: 'Inter, system-ui, sans-serif' }}>
              fude-okoshi · ease-zen · 700ms
            </p>
          </div>
        </div>
        <p style={{ fontSize: '18px', fontWeight: 300, color: '#8AAFC0', margin: 0, lineHeight: 1.5 }}>
          The mark appears as if it was always there, gradually becoming visible.
        </p>
      </div>
      <button style={STRIKE_BTN} onClick={strike}>Strike again</button>
    </div>
  );
}

// ─── 4. Zanshin-hiki — lingering exit ────────────────────────────────────────

function ZanshinHikiDemo() {
  injectStyles();
  const [visible, setVisible] = useState(true);

  const dismiss = () => setVisible(false);
  const reset   = () => setVisible(true);

  return (
    <div style={AO_SUMI_BG}>
      <p style={LABEL_STYLE}>Zanshin-hiki 残心引き — The lingering exit</p>

      {visible ? (
        <div style={{
          animation: 'fude-okoshi 500ms cubic-bezier(0.4, 0.0, 0.2, 1) both',
          background: '#1E2230',
          border: '1px solid rgba(91,143,168,0.22)',
          borderRadius: '4px',
          padding: '20px 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px',
          width: '100%',
          maxWidth: '400px',
        }}>
          <p style={{ fontSize: '14px', color: '#8AAFC0', margin: 0, fontFamily: 'Inter, system-ui, sans-serif' }}>
            The brush is still present after the stroke.
          </p>
          <button
            onClick={dismiss}
            style={{
              background: 'transparent',
              border: '1px solid rgba(91,143,168,0.22)',
              borderRadius: '2px',
              color: '#4A4860',
              fontFamily: 'Inter, system-ui, sans-serif',
              fontSize: '11px',
              padding: '4px 10px',
              cursor: 'pointer',
              letterSpacing: '0.06em',
              flexShrink: 0,
            }}
          >
            Dismiss
          </button>
        </div>
      ) : (
        <div style={{
          animation: 'zanshin-hiki 1000ms cubic-bezier(0.0, 0.0, 0.1, 1) both',
          background: '#1E2230',
          border: '1px solid rgba(91,143,168,0.22)',
          borderRadius: '4px',
          padding: '20px 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px',
          width: '100%',
          maxWidth: '400px',
          pointerEvents: 'none',
        }}>
          <p style={{ fontSize: '14px', color: '#8AAFC0', margin: 0, fontFamily: 'Inter, system-ui, sans-serif' }}>
            The brush is still present after the stroke.
          </p>
          <div style={{
            width: '52px',
            height: '25px',
            background: 'rgba(91,143,168,0.06)',
            borderRadius: '2px',
          }} />
        </div>
      )}

      <p style={{
        ...LABEL_STYLE,
        position: 'absolute',
        bottom: '24px',
        right: '24px',
        margin: 0,
        opacity: 0.6,
      }}>
        ease-zanshin · 1000ms
      </p>

      {!visible && (
        <button style={{ ...STRIKE_BTN, marginTop: '16px' }} onClick={reset}>
          Restore
        </button>
      )}
    </div>
  );
}

// ─── 5. Stagger — composed composition ───────────────────────────────────────

const STAGGER_ITEMS = [
  { kanji: '攻', romaji: 'Seme', label: 'Approach', color: '#5B8FA8' },
  { kanji: '打', romaji: 'Utte', label: 'Strike',   color: '#2E6B8A' },
  { kanji: '残', romaji: 'Zan',  label: 'Linger',   color: '#8AAFC0' },
  { kanji: '心', romaji: 'Shin', label: 'Awareness', color: '#E8EBF0' },
];

function StaggerDemo() {
  injectStyles();
  const { key, strike } = useStrike();

  return (
    <div style={{ ...AO_SUMI_BG, gap: '0' }}>
      <p style={{ ...LABEL_STYLE, marginBottom: '32px' }}>
        Stagger — the composed composition (80ms ma interval)
      </p>
      <div key={key} style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
        {STAGGER_ITEMS.map((item, i) => (
          <div
            key={item.kanji}
            style={{
              animation: `fude-stagger-in 700ms cubic-bezier(0.4, 0.0, 0.2, 1) both`,
              animationDelay: `${i * 80}ms`,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '8px',
              minWidth: '72px',
            }}
          >
            <span style={{
              fontSize: '48px',
              fontWeight: 300,
              color: item.color,
              lineHeight: 1,
              display: 'block',
            }}>
              {item.kanji}
            </span>
            <span style={{
              fontSize: '11px',
              color: '#4A4860',
              fontFamily: 'Inter, system-ui, sans-serif',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}>
              {item.romaji}
            </span>
            <span style={{
              fontSize: '10px',
              color: 'rgba(74,72,96,0.6)',
              fontFamily: 'Inter, system-ui, sans-serif',
            }}>
              +{i * 80}ms
            </span>
          </div>
        ))}
      </div>
      <button style={STRIKE_BTN} onClick={strike}>Strike again</button>
    </div>
  );
}

// ─── 6. All arcs — side by side comparison ───────────────────────────────────

function AllArcsDemo() {
  injectStyles();
  const { key, strike } = useStrike();

  const arcs = [
    {
      name: 'Hiki-fude',
      kanji: '引き筆',
      animation: 'hiki-fude 700ms cubic-bezier(0.25, 0.46, 0.45, 0.94) both',
      desc: 'ease-kendo · 700ms',
      delay: '0ms',
    },
    {
      name: 'Tate-fude',
      kanji: '縦筆',
      animation: 'tate-fude 500ms cubic-bezier(0.0, 0.0, 0.2, 1) both',
      desc: 'ease-strike · 500ms',
      delay: '80ms',
    },
    {
      name: 'Fude-okoshi',
      kanji: '筆起こし',
      animation: 'fude-okoshi 700ms cubic-bezier(0.4, 0.0, 0.2, 1) both',
      desc: 'ease-zen · 700ms',
      delay: '160ms',
    },
    {
      name: 'Zanshin-hiki',
      kanji: '残心引き',
      animation: 'zanshin-hiki 1000ms cubic-bezier(0.0, 0.0, 0.1, 1) both',
      desc: 'ease-zanshin · 1000ms',
      delay: '240ms',
    },
  ];

  return (
    <div style={{ ...AO_SUMI_BG, flexDirection: 'column', gap: '0', padding: '40px 48px' }}>
      <p style={{ ...LABEL_STYLE, marginBottom: '32px' }}>All four arcs — sequential composition</p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px', width: '100%' }}>
        {arcs.map((arc) => (
          <div
            key={arc.name}
            style={{
              background: '#1E2230',
              border: '1px solid rgba(91,143,168,0.12)',
              borderRadius: '4px',
              padding: '24px',
              overflow: 'hidden',
              position: 'relative',
            }}
          >
            <div key={key} style={{
              animation: arc.animation,
              animationDelay: arc.delay,
            }}>
              <p style={{ fontSize: '28px', fontWeight: 300, color: '#5B8FA8', margin: '0 0 8px 0' }}>
                {arc.kanji}
              </p>
              <p style={{
                fontSize: '14px',
                fontWeight: 500,
                color: '#E8EBF0',
                margin: '0 0 4px 0',
                fontFamily: 'Inter, system-ui, sans-serif',
              }}>
                {arc.name}
              </p>
              <p style={{
                fontSize: '11px',
                color: '#4A4860',
                margin: 0,
                fontFamily: 'Inter, system-ui, sans-serif',
                letterSpacing: '0.06em',
              }}>
                {arc.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
      <button style={STRIKE_BTN} onClick={strike}>Strike again</button>
    </div>
  );
}

// ─── Meta ─────────────────────────────────────────────────────────────────────

const meta: Meta = {
  title: 'Motion/Shodo Arcs',
  parameters: {
    docs: {
      description: {
        component:
          'Ink-brush entry animations derived from Shodo calligraphy. Each arc maps a physical brush action to a UI motion pattern, rendered on the ao-sumi dark ground (#141820). See Docs/Shodo Motion for the full philosophical context.',
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
  },
};

export default meta;
type Story = StoryObj;

export const HikiFude: Story = {
  name: 'Hiki-fude (Directional Pull)',
  render: () => <HikiFudeDemo />,
  parameters: {
    docs: {
      description: {
        story:
          'The brush pulls across the paper in a single confident stroke. Use for panels sliding in, toasts entering from an edge, navigation expanding. **Easing:** `--ease-kendo` (controlled deceleration).',
      },
    },
  },
};

export const TateFude: Story = {
  name: 'Tate-fude (Vertical Drop)',
  render: () => <TateFudeDemo />,
  parameters: {
    docs: {
      description: {
        story:
          'The brush descends — ink falls from tip to paper. Use for dropdown menus, modal sheets, notification banners. **Easing:** `--ease-strike` (fast entry, hard deceleration).',
      },
    },
  },
};

export const FudeOkoshi: Story = {
  name: 'Fude-okoshi (Reveal in Place)',
  render: () => <FudeOkoshiDemo />,
  parameters: {
    docs: {
      description: {
        story:
          'The brush is placed and pressed before moving — the mark begins as a dot that blossoms. Use for scroll-triggered reveals, on-load card appearances. **Easing:** `--ease-zen` (balanced, meditative).',
      },
    },
  },
};

export const ZanshinHiki: Story = {
  name: 'Zanshin-hiki (Lingering Exit)',
  render: () => <ZanshinHikiDemo />,
  parameters: {
    docs: {
      description: {
        story:
          'When the brush lifts, it does not vanish. Use for **all exits** — closing modals, dismissed toasts, collapsing panels. **Easing:** `--ease-zanshin` (extreme deceleration — the element nearly stops before it disappears).',
      },
    },
  },
};

export const StaggerComposition: Story = {
  name: 'Stagger (Composed Composition)',
  render: () => <StaggerDemo />,
  parameters: {
    docs: {
      description: {
        story:
          'A shodo composition is not a single stroke — it is a sequence. Each element enters 80ms (`--duration-ma`) after the previous, reading as one intentional composition.',
      },
    },
  },
};

export const AllArcs: Story = {
  name: 'All Arcs — Side by Side',
  render: () => <AllArcsDemo />,
  parameters: {
    docs: {
      description: {
        story:
          'All four motion arcs in a single view. Use this story for visual regression testing and to compare easing curves against the ao-sumi ground.',
      },
    },
  },
};
