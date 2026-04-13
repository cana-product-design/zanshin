import React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Label text */
  label?: string;
  /** Error message — sets aria-invalid */
  error?: string;
  /** Helper text below the input */
  hint?: string;
  /** Input wrapper class */
  wrapperClassName?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      hint,
      wrapperClassName,
      id,
      style,
      onFocus,
      onBlur,
      ...props
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = React.useState(false);
    const inputId = id ?? React.useId();
    const hintId = hint ? `${inputId}-hint` : undefined;
    const errorId = error ? `${inputId}-error` : undefined;

    const inputStyle: React.CSSProperties = {
      display: 'block',
      width: '100%',
      background: 'var(--surface-base)',
      border: error
        ? '1px solid var(--color-error)'
        : isFocused
        ? '1px solid var(--accent-primary)'
        : '1px solid var(--border-default)',
      borderRadius: 'var(--radius-sm)',
      padding: 'var(--space-3) var(--space-4)',
      color: 'var(--text-primary)',
      fontFamily: 'var(--font-body)',
      fontSize: '1rem',
      lineHeight: '1.5',
      boxShadow: error
        ? '0 0 0 3px rgba(155, 28, 28, 0.1)'
        : isFocused
        ? '0 0 0 3px rgba(43, 91, 168, 0.15)'
        : 'none',
      transition:
        'border-color var(--duration-medium) var(--ease-kendo), ' +
        'box-shadow var(--duration-medium) var(--ease-kendo)',
      outline: 'none',
      boxSizing: 'border-box',
      ...style,
    };

    return (
      <div className={wrapperClassName} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-1)' }}>
        {label && (
          <label
            htmlFor={inputId}
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
        <input
          ref={ref}
          id={inputId}
          aria-invalid={!!error}
          aria-describedby={errorId ?? hintId}
          style={inputStyle}
          onFocus={(e) => {
            setIsFocused(true);
            onFocus?.(e);
          }}
          onBlur={(e) => {
            setIsFocused(false);
            onBlur?.(e);
          }}
          {...props}
        />
        {error && (
          <span
            id={errorId}
            role="alert"
            style={{
              color: 'var(--color-error)',
              fontFamily: 'var(--font-body)',
              fontSize: '0.75rem',
              lineHeight: '1.25rem',
            }}
          >
            {error}
          </span>
        )}
        {hint && !error && (
          <span
            id={hintId}
            style={{
              color: 'var(--text-muted)',
              fontFamily: 'var(--font-body)',
              fontSize: '0.75rem',
              fontStyle: 'italic',
              lineHeight: '1.25rem',
            }}
          >
            {hint}
          </span>
        )}
        <style>{`
          input::placeholder {
            color: var(--color-hai, #6B7280);
            font-style: italic;
          }
          @media (prefers-reduced-motion: reduce) {
            input {
              transition-duration: 0.01ms !important;
            }
          }
        `}</style>
      </div>
    );
  }
);

Input.displayName = 'Input';
