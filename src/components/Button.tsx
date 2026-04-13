import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style variant */
  variant?: 'primary' | 'ghost' | 'danger';
  /** Size */
  size?: 'sm' | 'md' | 'lg';
  /** Shows loading spinner and disables interaction */
  loading?: boolean;
  children: React.ReactNode;
}

const sizeStyles: Record<NonNullable<ButtonProps['size']>, React.CSSProperties> = {
  sm: {
    padding: 'var(--space-1) var(--space-3)',
    fontSize: '0.75rem',
    lineHeight: '1.25rem',
  },
  md: {
    padding: 'var(--space-2) var(--space-6)',
    fontSize: '0.875rem',
    lineHeight: '1.5rem',
  },
  lg: {
    padding: 'var(--space-3) var(--space-8)',
    fontSize: '1rem',
    lineHeight: '1.75rem',
  },
};

const variantStyles: Record<NonNullable<ButtonProps['variant']>, React.CSSProperties> = {
  primary: {
    background: 'var(--accent-primary)',
    color: '#FFFFFF',
    border: 'none',
  },
  ghost: {
    background: 'transparent',
    color: 'var(--accent-primary)',
    border: '1px solid var(--accent-primary)',
  },
  danger: {
    background: 'var(--color-error)',
    color: '#FFFFFF',
    border: 'none',
  },
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      loading = false,
      disabled,
      children,
      style,
      onMouseEnter,
      onMouseLeave,
      onMouseDown,
      onMouseUp,
      ...props
    },
    ref
  ) => {
    const [isHovered, setIsHovered] = React.useState(false);
    const [isActive, setIsActive] = React.useState(false);

    const baseStyle: React.CSSProperties = {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 'var(--space-2)',
      borderRadius: 'var(--radius-md)',
      fontFamily: 'var(--font-body)',
      fontWeight: 500,
      letterSpacing: '0.025em',
      cursor: disabled || loading ? 'not-allowed' : 'pointer',
      opacity: disabled || loading ? 0.5 : 1,
      transition:
        'background var(--duration-slow) var(--ease-kendo), ' +
        'transform var(--duration-short) var(--ease-strike), ' +
        'box-shadow var(--duration-slow) var(--ease-kendo), ' +
        'border-color var(--duration-slow) var(--ease-kendo)',
      outline: 'none',
      ...sizeStyles[size],
      ...variantStyles[variant],
    };

    // Hover state
    if (isHovered && !disabled && !loading) {
      if (variant === 'primary') {
        baseStyle.background = 'var(--accent-hover)';
        baseStyle.boxShadow = '0 4px 20px rgba(43, 91, 168, 0.35)';
      } else if (variant === 'ghost') {
        baseStyle.background = 'var(--accent-subtle)';
        baseStyle.borderColor = 'var(--accent-hover)';
        baseStyle.color = 'var(--accent-hover)';
      } else if (variant === 'danger') {
        baseStyle.opacity = 0.9;
        baseStyle.boxShadow = '0 4px 20px rgba(155, 28, 28, 0.3)';
      }
    }

    // Active state
    if (isActive && !disabled && !loading) {
      baseStyle.transform = 'translateY(1px)';
      baseStyle.boxShadow = '0 1px 4px rgba(43, 91, 168, 0.2)';
    }

    return (
      <button
        ref={ref}
        disabled={disabled || loading}
        aria-disabled={disabled || loading}
        aria-busy={loading}
        style={{ ...baseStyle, ...style }}
        onMouseEnter={(e) => {
          setIsHovered(true);
          onMouseEnter?.(e);
        }}
        onMouseLeave={(e) => {
          setIsHovered(false);
          setIsActive(false);
          onMouseLeave?.(e);
        }}
        onMouseDown={(e) => {
          setIsActive(true);
          onMouseDown?.(e);
        }}
        onMouseUp={(e) => {
          setIsActive(false);
          onMouseUp?.(e);
        }}
        {...props}
      >
        {loading && (
          <span
            aria-hidden="true"
            style={{
              width: '0.875em',
              height: '0.875em',
              border: '2px solid currentColor',
              borderTopColor: 'transparent',
              borderRadius: '50%',
              display: 'inline-block',
              animation: 'zanshin-spin 0.6s linear infinite',
            }}
          />
        )}
        {children}
        <style>{`
          @keyframes zanshin-spin {
            to { transform: rotate(360deg); }
          }
          button:focus-visible {
            outline: 3px solid var(--accent-primary);
            outline-offset: 3px;
          }
          @media (prefers-reduced-motion: reduce) {
            button {
              transition-duration: 0.01ms !important;
              animation-duration: 0.01ms !important;
            }
          }
        `}</style>
      </button>
    );
  }
);

Button.displayName = 'Button';
