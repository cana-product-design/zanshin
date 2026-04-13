import React from 'react';

export interface ModalProps {
  /** Controls open state */
  open: boolean;
  /** Called when the modal should close */
  onClose: () => void;
  /** Modal title */
  title?: string;
  /** Footer content (e.g. action buttons) */
  footer?: React.ReactNode;
  /** Width of the modal panel */
  width?: number | string;
  children: React.ReactNode;
}

export function Modal({
  open,
  onClose,
  title,
  footer,
  width = 520,
  children,
}: ModalProps) {
  const [mounted, setMounted] = React.useState(false);
  const [visible, setVisible] = React.useState(false);
  const modalRef = React.useRef<HTMLDivElement>(null);
  const titleId = React.useId();

  // Mount/unmount with animation
  React.useEffect(() => {
    if (open) {
      setMounted(true);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setVisible(true));
      });
    } else {
      setVisible(false);
      const t = setTimeout(() => setMounted(false), 350);
      return () => clearTimeout(t);
    }
  }, [open]);

  // ESC to close
  React.useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [open, onClose]);

  // Focus trap
  React.useEffect(() => {
    if (!visible || !modalRef.current) return;
    const focusable = modalRef.current.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    if (focusable.length > 0) focusable[0].focus();

    const handleTab = (e: KeyboardEvent) => {
      if (e.key !== 'Tab' || !modalRef.current) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey ? document.activeElement === first : document.activeElement === last) {
        e.preventDefault();
        (e.shiftKey ? last : first)?.focus();
      }
    };
    document.addEventListener('keydown', handleTab);
    return () => document.removeEventListener('keydown', handleTab);
  }, [visible]);

  // Prevent body scroll
  React.useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  if (!mounted) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        aria-hidden="true"
        onClick={onClose}
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 9000,
          background: 'linear-gradient(180deg, rgba(27,42,74,0.85) 0%, rgba(27,42,74,0.6) 50%, rgba(27,42,74,0.3) 100%)',
          opacity: visible ? 1 : 0,
          transition: 'opacity 300ms var(--ease-kendo)',
        }}
      />

      {/* Modal panel */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? titleId : undefined}
        ref={modalRef}
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 9001,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 'var(--space-md)',
          pointerEvents: 'none',
        }}
      >
        <div
          style={{
            width: typeof width === 'number' ? `${width}px` : width,
            maxWidth: '100%',
            maxHeight: '90vh',
            background: 'var(--surface-base)',
            border: '1px solid var(--border-default)',
            borderRadius: 'var(--radius-lg)',
            boxShadow: '0 24px 48px rgba(27, 42, 74, 0.2), 0 8px 16px rgba(27, 42, 74, 0.12)',
            display: 'flex',
            flexDirection: 'column',
            pointerEvents: 'auto',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(12px)',
            transition: 'opacity 350ms var(--ease-strike), transform 350ms var(--ease-strike)',
            overflow: 'hidden',
          }}
        >
          {/* Header */}
          {(title) && (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: 'var(--space-6) var(--space-8)',
                borderBottom: '1px solid var(--border-default)',
                flexShrink: 0,
              }}
            >
              {title && (
                <h2
                  id={titleId}
                  style={{
                    margin: 0,
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.125rem',
                    fontWeight: 600,
                    color: 'var(--text-primary)',
                    letterSpacing: '-0.01em',
                  }}
                >
                  {title}
                </h2>
              )}
              <button
                onClick={onClose}
                aria-label="Close modal"
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--text-secondary)',
                  cursor: 'pointer',
                  padding: 'var(--space-1)',
                  borderRadius: 'var(--radius-sm)',
                  fontSize: '1.25rem',
                  lineHeight: 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'color var(--duration-slow) var(--ease-kendo)',
                }}
              >
                ✕
              </button>
            </div>
          )}

          {/* Body */}
          <div
            style={{
              padding: 'var(--space-8)',
              overflowY: 'auto',
              flex: 1,
              fontFamily: 'var(--font-body)',
              color: 'var(--text-primary)',
              lineHeight: 1.6,
            }}
          >
            {children}
          </div>

          {/* Footer */}
          {footer && (
            <div
              style={{
                padding: 'var(--space-4) var(--space-8)',
                borderTop: '1px solid var(--border-default)',
                display: 'flex',
                justifyContent: 'flex-end',
                gap: 'var(--space-3)',
                flexShrink: 0,
              }}
            >
              {footer}
            </div>
          )}
        </div>
      </div>
      <style>{`
        @media (prefers-reduced-motion: reduce) {
          * { transition-duration: 0.01ms !important; }
        }
      `}</style>
    </>
  );
}

Modal.displayName = 'Modal';
