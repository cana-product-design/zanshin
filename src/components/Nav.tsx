import React from 'react';

export interface NavItem {
  label: string;
  href: string;
  current?: boolean;
}

export interface NavProps {
  items: NavItem[];
  /** Brand/logo content */
  brand?: React.ReactNode;
  /** Actions area (right side) */
  actions?: React.ReactNode;
  /** Use kachiiro background (aizome dark style) or transparent */
  variant?: 'dark' | 'light' | 'transparent';
  className?: string;
  style?: React.CSSProperties;
  /** Called when a nav item is clicked */
  onNavigate?: (href: string) => void;
}

export const Nav = React.forwardRef<HTMLElement, NavProps>(
  (
    {
      items,
      brand,
      actions,
      variant = 'light',
      className,
      style,
      onNavigate,
    },
    ref
  ) => {
    const bgStyle: React.CSSProperties =
      variant === 'dark'
        ? {
            background: '#1A2744', // nōkon / kachiiro
            borderBottom: '1px solid rgba(75, 179, 204, 0.2)',
          }
        : variant === 'transparent'
        ? {
            background: 'transparent',
            borderBottom: '1px solid var(--border-default)',
          }
        : {
            background: 'var(--surface-base)',
            borderBottom: '1px solid var(--border-default)',
          };

    return (
      <nav
        ref={ref}
        className={className}
        aria-label="Main navigation"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: 'var(--space-sm) var(--space-xl)',
          ...bgStyle,
          ...style,
        }}
      >
        {/* Brand */}
        {brand && (
          <div style={{ flexShrink: 0 }}>
            {brand}
          </div>
        )}

        {/* Nav items */}
        <ul
          role="list"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--space-sm)',
            margin: 0,
            padding: 0,
            listStyle: 'none',
          }}
        >
          {items.map((item) => (
            <NavLink
              key={item.href}
              item={item}
              variant={variant}
              onNavigate={onNavigate}
            />
          ))}
        </ul>

        {/* Actions */}
        {actions && (
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)', flexShrink: 0 }}>
            {actions}
          </div>
        )}
      </nav>
    );
  }
);

Nav.displayName = 'Nav';

// ─── NavLink sub-component ────────────────────────────────────────────────────

interface NavLinkProps {
  item: NavItem;
  variant: NonNullable<NavProps['variant']>;
  onNavigate?: (href: string) => void;
}

function NavLink({ item, variant, onNavigate }: NavLinkProps) {
  const [isHovered, setIsHovered] = React.useState(false);

  const isDark = variant === 'dark';
  const isActive = item.current;

  const linkStyle: React.CSSProperties = {
    position: 'relative',
    display: 'inline-block',
    color: isDark
      ? isActive
        ? '#4DB3CC' // asagi
        : isHovered
        ? '#F5F4EF' // shironeri
        : 'rgba(245, 244, 239, 0.7)'
      : isActive || isHovered
      ? 'var(--text-primary)'
      : 'var(--text-secondary)',
    textDecoration: 'none',
    fontFamily: 'var(--font-body)',
    fontSize: '13px',
    letterSpacing: '0.05em',
    textTransform: 'uppercase',
    padding: 'var(--space-2) var(--space-3)',
    transition: 'color var(--duration-medium) var(--ease-kendo)',
    outline: 'none',
    cursor: 'pointer',
    background: 'none',
    border: 'none',
  };

  const underlineStyle: React.CSSProperties = {
    position: 'absolute',
    bottom: '-1px',
    left: 0,
    width: isActive || isHovered ? '100%' : '0%',
    height: '2px',
    background: isDark ? '#4DB3CC' : 'var(--accent-primary)',
    transition: `width var(--duration-long) var(--ease-kendo)`,
  };

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate?.(item.href);
  };

  return (
    <li>
      <a
        href={item.href}
        aria-current={item.current ? 'page' : undefined}
        style={linkStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={onNavigate ? handleClick : undefined}
      >
        {item.label}
        <span aria-hidden="true" style={underlineStyle} />
      </a>
      <style>{`
        @media (prefers-reduced-motion: reduce) {
          a span { transition-duration: 0.01ms !important; }
          a { transition-duration: 0.01ms !important; }
        }
      `}</style>
    </li>
  );
}
