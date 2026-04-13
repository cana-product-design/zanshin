import React from 'react';

export interface CardProps {
  children: React.ReactNode;
  /** Card title */
  title?: string;
  /** Card subtitle / description */
  description?: string;
  /** Footer content */
  footer?: React.ReactNode;
  /** Make the card interactive (hover effects) */
  interactive?: boolean;
  className?: string;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    {
      children,
      title,
      description,
      footer,
      interactive = false,
      className,
      style,
      onClick,
    },
    ref
  ) => {
    const [isHovered, setIsHovered] = React.useState(false);

    const cardStyle: React.CSSProperties = {
      background: 'var(--surface-raised)',
      border: isHovered && interactive
        ? '1px solid rgba(75, 179, 204, 0.4)'
        : '1px solid var(--border-default)',
      borderRadius: 'var(--radius-lg)',
      padding: 'var(--space-8)',
      position: 'relative',
      overflow: 'hidden',
      transition:
        'box-shadow var(--duration-medium) var(--ease-kendo), ' +
        'border-color var(--duration-medium) var(--ease-kendo)',
      boxShadow: isHovered && interactive
        ? '0 8px 32px rgba(27, 42, 74, 0.12), 0 2px 8px rgba(27, 42, 74, 0.08)'
        : 'none',
      cursor: onClick ? 'pointer' : 'default',
      ...style,
    };

    const topBarStyle: React.CSSProperties = {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '3px',
      background: 'linear-gradient(90deg, var(--accent-primary), #4DB3CC)',
      opacity: isHovered && interactive ? 1 : 0,
      transition: 'opacity var(--duration-long) var(--ease-zen)',
      pointerEvents: 'none',
    };

    return (
      <div
        ref={ref}
        className={className}
        style={cardStyle}
        onClick={onClick}
        onMouseEnter={() => interactive && setIsHovered(true)}
        onMouseLeave={() => interactive && setIsHovered(false)}
        role={onClick ? 'button' : undefined}
        tabIndex={onClick ? 0 : undefined}
        onKeyDown={onClick ? (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onClick(e as unknown as React.MouseEvent<HTMLDivElement>);
          }
        } : undefined}
      >
        {/* Top accent bar */}
        {interactive && <div aria-hidden="true" style={topBarStyle} />}

        {/* Header */}
        {(title || description) && (
          <div style={{ marginBottom: children ? 'var(--space-4)' : 0 }}>
            {title && (
              <h3
                style={{
                  margin: 0,
                  fontFamily: 'var(--font-display)',
                  fontWeight: 600,
                  fontSize: '1.125rem',
                  color: 'var(--text-primary)',
                  lineHeight: 1.3,
                }}
              >
                {title}
              </h3>
            )}
            {description && (
              <p
                style={{
                  margin: title ? 'var(--space-1) 0 0' : 0,
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.875rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.5,
                }}
              >
                {description}
              </p>
            )}
          </div>
        )}

        {/* Body */}
        {children && (
          <div
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.9375rem',
              color: 'var(--text-primary)',
              lineHeight: 1.6,
            }}
          >
            {children}
          </div>
        )}

        {/* Footer */}
        {footer && (
          <div
            style={{
              marginTop: 'var(--space-6)',
              paddingTop: 'var(--space-4)',
              borderTop: '1px solid var(--border-default)',
            }}
          >
            {footer}
          </div>
        )}

        <style>{`
          @media (prefers-reduced-motion: reduce) {
            div {
              transition-duration: 0.01ms !important;
            }
          }
        `}</style>
      </div>
    );
  }
);

Card.displayName = 'Card';
