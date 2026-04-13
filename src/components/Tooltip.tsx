import React from 'react';

export type TooltipPlacement = 'top' | 'bottom' | 'left' | 'right';

export interface TooltipProps {
  /** The tooltip text content */
  content: React.ReactNode;
  /** Where the tooltip appears relative to the trigger */
  placement?: TooltipPlacement;
  /** Delay before showing (ms) */
  delay?: number;
  children: React.ReactElement;
}

export function Tooltip({
  content,
  placement = 'top',
  delay = 150,
  children,
}: TooltipProps) {
  const [visible, setVisible] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);
  const timeoutRef = React.useRef<ReturnType<typeof setTimeout>>();
  const id = React.useId();
  const tooltipId = `zanshin-tooltip-${id.replace(/:/g, '')}`;

  const show = () => {
    timeoutRef.current = setTimeout(() => {
      setMounted(true);
      requestAnimationFrame(() => setVisible(true));
    }, delay);
  };

  const hide = () => {
    clearTimeout(timeoutRef.current);
    setVisible(false);
    setTimeout(() => setMounted(false), 200);
  };

  React.useEffect(() => {
    return () => clearTimeout(timeoutRef.current);
  }, []);

  const arrowSize = 6;

  const placementStyles: Record<TooltipPlacement, React.CSSProperties> = {
    top: {
      bottom: '100%',
      left: '50%',
      transform: `translateX(-50%) translateY(${visible ? '-6px' : '0px'})`,
      marginBottom: `${arrowSize}px`,
    },
    bottom: {
      top: '100%',
      left: '50%',
      transform: `translateX(-50%) translateY(${visible ? '6px' : '0px'})`,
      marginTop: `${arrowSize}px`,
    },
    left: {
      right: '100%',
      top: '50%',
      transform: `translateY(-50%) translateX(${visible ? '-6px' : '0px'})`,
      marginRight: `${arrowSize}px`,
    },
    right: {
      left: '100%',
      top: '50%',
      transform: `translateY(-50%) translateX(${visible ? '6px' : '0px'})`,
      marginLeft: `${arrowSize}px`,
    },
  };

  const arrowStyles: Record<TooltipPlacement, React.CSSProperties> = {
    top: {
      bottom: -arrowSize,
      left: '50%',
      transform: 'translateX(-50%)',
      borderLeft: `${arrowSize}px solid transparent`,
      borderRight: `${arrowSize}px solid transparent`,
      borderTop: `${arrowSize}px solid #1A2744`,
    },
    bottom: {
      top: -arrowSize,
      left: '50%',
      transform: 'translateX(-50%)',
      borderLeft: `${arrowSize}px solid transparent`,
      borderRight: `${arrowSize}px solid transparent`,
      borderBottom: `${arrowSize}px solid #1A2744`,
    },
    left: {
      right: -arrowSize,
      top: '50%',
      transform: 'translateY(-50%)',
      borderTop: `${arrowSize}px solid transparent`,
      borderBottom: `${arrowSize}px solid transparent`,
      borderLeft: `${arrowSize}px solid #1A2744`,
    },
    right: {
      left: -arrowSize,
      top: '50%',
      transform: 'translateY(-50%)',
      borderTop: `${arrowSize}px solid transparent`,
      borderBottom: `${arrowSize}px solid transparent`,
      borderRight: `${arrowSize}px solid #1A2744`,
    },
  };

  const tooltipStyle: React.CSSProperties = {
    position: 'absolute',
    zIndex: 9999,
    background: '#1A2744', // kachiiro/nōkon
    color: '#F5F4EF', // shironeri
    padding: 'var(--space-2) var(--space-3)',
    borderRadius: 'var(--radius-md)',
    fontFamily: 'var(--font-body)',
    fontSize: '0.8125rem',
    lineHeight: 1.4,
    whiteSpace: 'nowrap',
    pointerEvents: 'none',
    opacity: visible ? 1 : 0,
    transition:
      'opacity var(--duration-short) var(--ease-kendo), transform var(--duration-short) var(--ease-kendo)',
    maxWidth: '280px',
    ...placementStyles[placement],
  };

  const trigger = React.cloneElement(children, {
    'aria-describedby': visible ? tooltipId : undefined,
    onMouseEnter: (e: React.MouseEvent) => {
      show();
      children.props.onMouseEnter?.(e);
    },
    onMouseLeave: (e: React.MouseEvent) => {
      hide();
      children.props.onMouseLeave?.(e);
    },
    onFocus: (e: React.FocusEvent) => {
      show();
      children.props.onFocus?.(e);
    },
    onBlur: (e: React.FocusEvent) => {
      hide();
      children.props.onBlur?.(e);
    },
  });

  return (
    <span style={{ position: 'relative', display: 'inline-flex' }}>
      {trigger}
      {mounted && (
        <span
          id={tooltipId}
          role="tooltip"
          style={tooltipStyle}
        >
          {content}
          {/* Arrow */}
          <span
            aria-hidden="true"
            style={{
              position: 'absolute',
              width: 0,
              height: 0,
              ...arrowStyles[placement],
            }}
          />
        </span>
      )}
      <style>{`
        @media (prefers-reduced-motion: reduce) {
          [role="tooltip"] { transition-duration: 0.01ms !important; }
        }
      `}</style>
    </span>
  );
}

Tooltip.displayName = 'Tooltip';
