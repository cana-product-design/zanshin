import React from 'react';

export interface TabItem {
  id: string;
  label: React.ReactNode;
  content: React.ReactNode;
  disabled?: boolean;
}

export interface TabsProps {
  tabs: TabItem[];
  defaultTab?: string;
  activeTab?: string;
  onChange?: (id: string) => void;
  className?: string;
  style?: React.CSSProperties;
}

export const Tabs = React.forwardRef<HTMLDivElement, TabsProps>(
  (
    {
      tabs,
      defaultTab,
      activeTab: controlledActive,
      onChange,
      className,
      style,
    },
    ref
  ) => {
    const [internalActive, setInternalActive] = React.useState(
      defaultTab ?? tabs[0]?.id ?? ''
    );
    const activeTab = controlledActive !== undefined ? controlledActive : internalActive;

    const tabListRef = React.useRef<HTMLDivElement>(null);

    const activateTab = (id: string) => {
      if (controlledActive === undefined) setInternalActive(id);
      onChange?.(id);
    };

    // Keyboard navigation
    const handleKeyDown = (e: React.KeyboardEvent) => {
      const enabledTabs = tabs.filter(t => !t.disabled);
      const currentIdx = enabledTabs.findIndex(t => t.activeTab === activeTab || t.id === activeTab);

      if (e.key === 'ArrowRight') {
        e.preventDefault();
        const next = enabledTabs[(currentIdx + 1) % enabledTabs.length];
        if (next) {
          activateTab(next.id);
          const btn = tabListRef.current?.querySelector(`[data-tab="${next.id}"]`) as HTMLElement;
          btn?.focus();
        }
      }
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        const prev = enabledTabs[(currentIdx - 1 + enabledTabs.length) % enabledTabs.length];
        if (prev) {
          activateTab(prev.id);
          const btn = tabListRef.current?.querySelector(`[data-tab="${prev.id}"]`) as HTMLElement;
          btn?.focus();
        }
      }
    };

    const activeContent = tabs.find(t => t.id === activeTab)?.content;

    return (
      <div ref={ref} className={className} style={style}>
        {/* Tab list */}
        <div
          ref={tabListRef}
          role="tablist"
          onKeyDown={handleKeyDown}
          style={{
            display: 'flex',
            borderBottom: '1px solid var(--border-default)',
            gap: 0,
          }}
        >
          {tabs.map((tab) => {
            const isActive = tab.id === activeTab;
            return (
              <button
                key={tab.id}
                role="tab"
                id={`tab-${tab.id}`}
                aria-selected={isActive}
                aria-controls={`tabpanel-${tab.id}`}
                data-tab={tab.id}
                disabled={tab.disabled}
                onClick={() => !tab.disabled && activateTab(tab.id)}
                style={{
                  position: 'relative',
                  padding: 'var(--space-3) var(--space-6)',
                  background: 'none',
                  border: 'none',
                  borderBottom: isActive ? '2px solid var(--accent-primary)' : '2px solid transparent',
                  color: isActive
                    ? 'var(--accent-primary)'
                    : tab.disabled
                    ? 'var(--text-muted)'
                    : 'var(--text-secondary)',
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.875rem',
                  fontWeight: isActive ? 600 : 400,
                  letterSpacing: '0.02em',
                  cursor: tab.disabled ? 'not-allowed' : 'pointer',
                  opacity: tab.disabled ? 0.4 : 1,
                  transition:
                    'color var(--duration-medium) var(--ease-kendo), ' +
                    'border-color var(--duration-long) var(--ease-kendo)',
                  outline: 'none',
                  marginBottom: '-1px',
                  whiteSpace: 'nowrap',
                }}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Tab panel */}
        <div
          role="tabpanel"
          id={`tabpanel-${activeTab}`}
          aria-labelledby={`tab-${activeTab}`}
          style={{
            padding: 'var(--space-6) 0',
            animation: 'zanshin-reveal 300ms var(--ease-strike) both',
          }}
        >
          {activeContent}
        </div>

        <style>{`
          @keyframes zanshin-reveal {
            from { opacity: 0; transform: translateY(6px); }
            to   { opacity: 1; transform: translateY(0); }
          }
          button[role="tab"]:focus-visible {
            outline: 3px solid var(--accent-primary);
            outline-offset: -3px;
            border-radius: var(--radius-sm);
          }
          @media (prefers-reduced-motion: reduce) {
            * { transition-duration: 0.01ms !important; animation-duration: 0.01ms !important; }
          }
        `}</style>
      </div>
    );
  }
);

Tabs.displayName = 'Tabs';
