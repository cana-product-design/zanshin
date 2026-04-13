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
    color: 'var(--color-bg)',
    border: 'none',
  },
  ghost: {
    background: 'transparent',
    color: 'var(--accent-primary)',
    border: '1px solid var(--accent-primary)',
  },
  danger: {
    background: 'var(--color-error)',
    color: 'var(--color-bg)',
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
      // Seme→Strike→Zanshin arc:
      // background uses ease-kendo (controlled approach)
      // transform uses ease-strike (decisive snap on press)
      // box-shadow uses ease-zanshin (slow linger after)
      transition:
        'background var(--duration-medium) var(--ease-kendo), ' +
        'transform var(--duration-short) var(--ease-strike), ' +
        'box-shadow var(--duration-long) var(--ease-zanshin), ' +
        'border-color var(--duration-medium) var(--ease-kendo), ' +
        'color var(--duration-medium) var(--ease-kendo)',
      outline: 'none',
      transformOrigin: 'center bottom',
      ...sizeStyles[size],
      ...variantStyles[variant],
    };

    // Hover state — seme (approach with pressure)
    if (isHovered && !disabled && !loading) {
      if (variant === 'primary') {
        baseStyle.background = 'var(--accent-hover)';
        baseStyle.boxShadow = '0 4px 20px rgba(43, 91, 168, 0.28)';
      } else if (variant === 'ghost') {
        baseStyle.background = 'var(--accent-subtle)';
        baseStyle.borderColor = 'var(--accent-hover)';
        baseStyle.color = 'var(--accent-hover)';
      } else if (variant === 'danger') {
        baseStyle.opacity = 0.9;
        baseStyle.boxShadow = '0 4px 20px rgba(155, 28, 28, 0.28)';
      }
    }

    // Active state — strike (snap contact, 1px translateY like shinai on Men)
    if (isActive && !disabled && !loading) {
      baseStyle.transform = 'scale(0.97) translateY(1px)';
      baseStyle.boxShadow = '0 1px 4px rgba(43, 91, 168, 0.15)';
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
              // zanshin-spin matches the keyframe name in the motion system
              animation: 'zanshin-spin 600ms linear infinite',
            }}
          />
        )}
        {children}
        <style>{`
          @keyframes zanshin-spin {
            to { transform: rotate(360deg); }
          }
          /* Ma pulse on focus — breathing ring (Shinto interval) */
          button:focus-visible {
            outline: 3px solid var(--accent-primary, var(--accent-blue));
            outline-offset: 3px;
            animation: zanshin-ma-pulse 1600ms var(--ease-ma, cubic-bezier(0.4,0,0.6,1)) infinite;
          }
          @keyframes zanshin-ma-pulse {
            0%, 100% { box-shadow: 0 0 0 0 rgba(43, 91, 168, 0); }
            50%       { box-shadow: 0 0 0 4px rgba(43, 91, 168, 0.18); }
          }
          @media (prefers-reduced-motion: reduce) {
            button {
              transition-duration: 0.01ms !important;
              animation: none !important;
            }
          }
        `}</style>
      </button>
    );
  }
);

Button.displayName = 'Button';
