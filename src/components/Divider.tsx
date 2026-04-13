import React from 'react';

export interface DividerProps {
  /** Visual variant */
  variant?: 'default' | 'accent';
  /** Vertical spacing above and below */
  spacing?: 'sm' | 'md' | 'lg';
  /** Accessible label (for screen readers) */
  label?: string;
  className?: string;
  style?: React.CSSProperties;
}

const spacingMap = {
  sm: 'var(--space-4)',
  md: 'var(--space-8)',
  lg: 'var(--space-xl)',
};

export const Divider = React.forwardRef<HTMLHRElement, DividerProps>(
  ({ variant = 'default', spacing = 'md', label, className, style }, ref) => {
    const dividerStyle: React.CSSProperties = {
      border: 'none',
      height: variant === 'accent' ? '2px' : '1px',
      background:
        variant === 'accent'
          ? 'linear-gradient(90deg, transparent 0%, var(--accent-primary) 30%, #4DB3CC 70%, transparent 100%)'
          : 'linear-gradient(90deg, transparent 0%, var(--border-default) 20%, var(--border-default) 80%, transparent 100%)',
      margin: `${spacingMap[spacing]} 0`,
      ...style,
    };

    return (
      <hr
        ref={ref}
        className={className}
        style={dividerStyle}
        role={label ? 'separator' : undefined}
        aria-label={label}
      />
    );
  }
);

Divider.displayName = 'Divider';
