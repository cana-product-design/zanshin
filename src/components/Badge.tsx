import React from 'react';

export type BadgeVariant = 'primary' | 'accent' | 'success' | 'warning' | 'error';

export interface BadgeProps {
  variant?: BadgeVariant;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const variantStyles: Record<BadgeVariant, React.CSSProperties> = {
  primary: {
    background: 'rgba(43, 91, 168, 0.12)',
    color: 'var(--accent-primary)',
    border: '1px solid rgba(43, 91, 168, 0.25)',
  },
  accent: {
    background: 'rgba(75, 179, 204, 0.12)',
    color: '#2A8FA0', // asagi darkened for AA contrast on light
    border: '1px solid rgba(75, 179, 204, 0.3)',
  },
  success: {
    background: 'rgba(45, 106, 79, 0.12)',
    color: 'var(--color-success)',
    border: '1px solid rgba(45, 106, 79, 0.25)',
  },
  warning: {
    background: 'rgba(180, 83, 9, 0.12)',
    color: 'var(--color-warning)',
    border: '1px solid rgba(180, 83, 9, 0.25)',
  },
  error: {
    background: 'rgba(155, 28, 28, 0.12)',
    color: 'var(--color-error)',
    border: '1px solid rgba(155, 28, 28, 0.25)',
  },
};

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ variant = 'primary', children, className, style }, ref) => {
    const baseStyle: React.CSSProperties = {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-1)',
      padding: '2px var(--space-2)',
      borderRadius: 'var(--radius-sm)',
      fontFamily: 'var(--font-body)',
      fontSize: '0.75rem',
      fontWeight: 600,
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      lineHeight: '1.25rem',
      whiteSpace: 'nowrap',
      ...variantStyles[variant],
      ...style,
    };

    return (
      <span ref={ref} className={className} style={baseStyle}>
        {children}
      </span>
    );
  }
);

Badge.displayName = 'Badge';
