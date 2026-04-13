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

  // Mount/unmount with Ma-informed animation timing
  // Open: 80ms ma delay → then panel animates in (zanshin-modal-in)
  // Close: panel fades out over 400ms (mujō — impermanence mirrors entrance)
  React.useEffect(() => {
    if (open) {
      setMounted(true);
      // Ma interval: 80ms pause before transition begins
      const maDelay = setTimeout(() => {
        requestAnimationFrame(() => {
          requestAnimationFrame(() => setVisible(true));
        });
      }, 80);
      return () => clearTimeout(maDelay);
    } else {
      setVisible(false);
      // Zanshin hold: wait for exit animation to complete
      const t = setTimeout(() => setMounted(false), 400);
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
      {/* Backdrop — slow fade (ma awareness) */}
      <div
        aria-hidden="true"
        onClick={onClose}
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 9000,
          // Kachiiro ground — deep indigo veil, not solid black
          background: 'linear-gradient(180deg, rgba(27,42,74,0.88) 0%, rgba(27,42,74,0.65) 50%, rgba(27,42,74,0.35) 100%)',
          opacity: visible ? 1 : 0,
          transition: `opacity var(--duration-medium) var(--ease-kendo)`,
          animation: visible
            ? `zanshin-backdrop-in var(--duration-medium) var(--ease-kendo) both`
            : undefined,
        }}
      />

      {/* Modal panel wrapper */}
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
          padding: 'var(--space-6)',
          pointerEvents: 'none',
        }}
      >
        <div
          style={{
            width: typeof width === 'number' ? `${width}px` : width,
            maxWidth: '100%',
            maxHeight: '90vh',
            background: 'var(--color-surface)',
            border: '1px solid var(--color-border-strong)',
            borderRadius: 'var(--radius-lg)',
            // Deep indigo shadow — matches kachiiro theme
            boxShadow: '0 24px 48px rgba(27,42,74,0.22), 0 8px 16px rgba(27,42,74,0.14)',
            display: 'flex',
            flexDirection: 'column',
            pointerEvents: 'auto',
            overflow: 'hidden',
            // Seme→Strike→Zanshin arc:
            // Enter: slow drift from above → snap to position → micro-settle
            // Exit:  mirrors entrance (mujō) — fades + slides down
            animation: visible
              ? `zanshin-modal-in var(--duration-long) var(--ease-zanshin) both`
              : `zanshin-modal-out var(--duration-medium) var(--ease-kendo) both`,
          }}
        >
          {/* Header */}
          {title && (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: 'var(--space-6) var(--space-8)',
                borderBottom: '1px solid var(--color-border)',
                flexShrink: 0,
              }}
            >
              <h2
                id={titleId}
                style={{
                  margin: 0,
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.125rem',
                  fontWeight: 600,
                  color: 'var(--color-text)',
                  letterSpacing: '-0.01em',
                }}
              >
                {title}
              </h2>
              <button
                onClick={onClose}
                aria-label="Close modal"
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--color-text-muted)',
                  cursor: 'pointer',
                  padding: 'var(--space-1)',
                  borderRadius: 'var(--radius-sm)',
                  fontSize: '1.25rem',
                  lineHeight: 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  // Medium ease-kendo — controlled approach
                  transition: `color var(--duration-medium) var(--ease-kendo)`,
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
              color: 'var(--color-text)',
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
                borderTop: '1px solid var(--color-border)',
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
        @keyframes zanshin-backdrop-in {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        /* Seme→Strike→Zanshin arc for modal panel */
        @keyframes zanshin-modal-in {
          0%   { opacity: 0; transform: translateY(-16px); }
          60%  { opacity: 1; transform: translateY(2px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes zanshin-modal-out {
          from { opacity: 1; transform: translateY(0) scale(1); }
          to   { opacity: 0; transform: translateY(8px) scale(0.98); }
        }
        @media (prefers-reduced-motion: reduce) {
          * { transition-duration: 0.01ms !important; animation-duration: 0.01ms !important; }
        }
      `}</style>
    </>
  );
}

Modal.displayName = 'Modal';
