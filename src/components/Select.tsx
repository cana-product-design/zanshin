import React from 'react';

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SelectProps {
  options: SelectOption[];
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  label?: string;
  disabled?: boolean;
  error?: string;
  id?: string;
  className?: string;
  style?: React.CSSProperties;
}

export const Select = React.forwardRef<HTMLDivElement, SelectProps>(
  (
    {
      options,
      value: controlledValue,
      defaultValue,
      onChange,
      placeholder = 'Select an option',
      label,
      disabled = false,
      error,
      id,
      className,
      style,
    },
    ref
  ) => {
    const [open, setOpen] = React.useState(false);
    const [internalValue, setInternalValue] = React.useState(defaultValue ?? '');
    const [focusedIndex, setFocusedIndex] = React.useState(-1);
    const selectId = id ?? React.useId();
    const listboxId = `${selectId}-listbox`;
    const containerRef = React.useRef<HTMLDivElement>(null);

    const value = controlledValue !== undefined ? controlledValue : internalValue;
    const selectedOption = options.find(o => o.value === value);

    const selectOption = (opt: SelectOption) => {
      if (opt.disabled) return;
      if (controlledValue === undefined) setInternalValue(opt.value);
      onChange?.(opt.value);
      setOpen(false);
    };

    // Close on outside click
    React.useEffect(() => {
      if (!open) return;
      const handler = (e: MouseEvent) => {
        if (!containerRef.current?.contains(e.target as Node)) {
          setOpen(false);
        }
      };
      document.addEventListener('mousedown', handler);
      return () => document.removeEventListener('mousedown', handler);
    }, [open]);

    // Keyboard navigation
    const handleKeyDown = (e: React.KeyboardEvent) => {
      if (disabled) return;
      const enabledOptions = options.filter(o => !o.disabled);
      switch (e.key) {
        case 'Enter':
        case ' ':
          e.preventDefault();
          if (open && focusedIndex >= 0) {
            selectOption(enabledOptions[focusedIndex]);
          } else {
            setOpen(o => !o);
          }
          break;
        case 'ArrowDown':
          e.preventDefault();
          if (!open) setOpen(true);
          setFocusedIndex(i => Math.min(i + 1, enabledOptions.length - 1));
          break;
        case 'ArrowUp':
          e.preventDefault();
          setFocusedIndex(i => Math.max(i - 1, 0));
          break;
        case 'Escape':
          setOpen(false);
          break;
        case 'Tab':
          setOpen(false);
          break;
      }
    };

    return (
      <div
        ref={ref}
        className={className}
        style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-1)', ...style }}
      >
        {label && (
          <label
            htmlFor={selectId}
            style={{
              color: 'var(--text-primary)',
              fontFamily: 'var(--font-body)',
              fontSize: '0.875rem',
              fontWeight: 500,
              letterSpacing: '0.02em',
            }}
          >
            {label}
          </label>
        )}

        <div ref={containerRef} style={{ position: 'relative' }}>
          {/* Trigger */}
          <button
            id={selectId}
            role="combobox"
            aria-haspopup="listbox"
            aria-expanded={open}
            aria-controls={listboxId}
            aria-invalid={!!error}
            disabled={disabled}
            onClick={() => !disabled && setOpen(o => !o)}
            onKeyDown={handleKeyDown}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
              padding: 'var(--space-3) var(--space-4)',
              background: 'var(--surface-base)',
              border: error
                ? '1px solid var(--color-error)'
                : open
                ? '1px solid var(--accent-primary)'
                : '1px solid var(--border-default)',
              borderRadius: 'var(--radius-sm)',
              color: selectedOption ? 'var(--text-primary)' : 'var(--text-muted)',
              fontFamily: 'var(--font-body)',
              fontSize: '1rem',
              cursor: disabled ? 'not-allowed' : 'pointer',
              opacity: disabled ? 0.5 : 1,
              transition: 'border-color var(--duration-slow) var(--ease-kendo)',
              boxShadow: open ? '0 0 0 3px rgba(43, 91, 168, 0.15)' : 'none',
              outline: 'none',
              boxSizing: 'border-box',
            }}
          >
            <span>{selectedOption?.label ?? placeholder}</span>
            <span
              aria-hidden="true"
              style={{
                display: 'inline-block',
                transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: 'transform var(--duration-slow) var(--ease-kendo)',
                fontSize: '0.75em',
                opacity: 0.6,
                marginLeft: 'var(--space-2)',
              }}
            >
              ▼
            </span>
          </button>

          {/* Dropdown */}
          {open && (
            <ul
              id={listboxId}
              role="listbox"
              aria-label={label}
              style={{
                position: 'absolute',
                top: 'calc(100% + 4px)',
                left: 0,
                right: 0,
                zIndex: 1000,
                background: 'var(--surface-base)',
                border: '1px solid var(--border-default)',
                borderRadius: 'var(--radius-md)',
                boxShadow: '0 8px 24px rgba(27, 42, 74, 0.12), 0 2px 8px rgba(27, 42, 74, 0.08)',
                margin: 0,
                padding: 'var(--space-1) 0',
                listStyle: 'none',
                maxHeight: '240px',
                overflowY: 'auto',
                animation: 'kamae 200ms var(--ease-strike) both',
              }}
            >
              {options.map((opt, idx) => {
                const enabledOptions = options.filter(o => !o.disabled);
                const enabledIdx = enabledOptions.indexOf(opt);
                const isFocused = enabledIdx === focusedIndex;
                const isSelected = opt.value === value;

                return (
                  <li
                    key={opt.value}
                    role="option"
                    aria-selected={isSelected}
                    aria-disabled={opt.disabled}
                    onClick={() => selectOption(opt)}
                    onMouseEnter={() => !opt.disabled && setFocusedIndex(enabledIdx)}
                    style={{
                      padding: 'var(--space-2) var(--space-4)',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.9375rem',
                      color: opt.disabled
                        ? 'var(--text-muted)'
                        : isSelected
                        ? 'var(--accent-primary)'
                        : 'var(--text-primary)',
                      background: isFocused || isSelected
                        ? 'var(--accent-subtle)'
                        : 'transparent',
                      cursor: opt.disabled ? 'not-allowed' : 'pointer',
                      fontWeight: isSelected ? 600 : 400,
                      transition: 'background 150ms var(--ease-kendo)',
                    }}
                  >
                    {opt.label}
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        {error && (
          <span
            role="alert"
            style={{
              color: 'var(--color-error)',
              fontFamily: 'var(--font-body)',
              fontSize: '0.75rem',
            }}
          >
            {error}
          </span>
        )}

        <style>{`
          @keyframes kamae {
            from { opacity: 0; transform: translateY(4px); }
            to   { opacity: 1; transform: translateY(0); }
          }
          @media (prefers-reduced-motion: reduce) {
            * { transition-duration: 0.01ms !important; animation-duration: 0.01ms !important; }
          }
        `}</style>
      </div>
    );
  }
);

Select.displayName = 'Select';
