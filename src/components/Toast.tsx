import React from 'react';

export type ToastVariant = 'success' | 'warning' | 'error' | 'info';

export interface ToastItem {
  id: string;
  message: React.ReactNode;
  variant?: ToastVariant;
  duration?: number;
}

export interface ToastProps {
  toasts: ToastItem[];
  onDismiss: (id: string) => void;
  /** Maximum visible toasts */
  maxVisible?: number;
}

const variantConfig: Record<ToastVariant, { bg: string; color: string; icon: string }> = {
  success: { bg: 'rgba(45, 106, 79, 0.95)',  color: 'var(--color-bg, #F5F4EF)', icon: '✓' },
  warning: { bg: 'rgba(180, 83, 9, 0.95)',   color: 'var(--color-bg, #F5F4EF)', icon: '⚠' },
  error:   { bg: 'rgba(155, 28, 28, 0.95)',  color: 'var(--color-bg, #F5F4EF)', icon: '✕' },
  info:    { bg: 'rgba(43, 91, 168, 0.95)',  color: 'var(--color-bg, #F5F4EF)', icon: 'ℹ' },
};

export function Toast({ toasts, onDismiss, maxVisible = 3 }: ToastProps) {
  const visible = toasts.slice(-maxVisible);

  return (
    <div
      aria-live="polite"
      aria-atomic="false"
      style={{
        position: 'fixed',
        bottom: 'var(--space-8)',
        right: 'var(--space-8)',
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-2)',
        alignItems: 'flex-end',
        pointerEvents: 'none',
      }}
    >
      {visible.map((toast, index) => (
        <ToastItemComponent
          key={toast.id}
          toast={toast}
          index={index}
          onDismiss={onDismiss}
        />
      ))}
      <style>{`
        /* Seme approach — slides in from right (like a iai draw) */
        @keyframes zanshin-toast-enter {
          from { opacity: 0; transform: translateX(16px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        /* Mujō departure — message lingers, then fades + sinks */
        @keyframes zanshin-toast-exit {
          from { opacity: 1; transform: translateY(0) scale(1); }
          to   { opacity: 0; transform: translateY(8px) scale(0.96); }
        }
        @media (prefers-reduced-motion: reduce) {
          * { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; }
        }
      `}</style>
    </div>
  );
}

Toast.displayName = 'Toast';

function ToastItemComponent({
  toast,
  onDismiss,
}: {
  toast: ToastItem;
  index: number;
  onDismiss: (id: string) => void;
}) {
  const [exiting, setExiting] = React.useState(false);
  const variant = toast.variant ?? 'info';
  const config = variantConfig[variant];

  const dismiss = React.useCallback(() => {
    setExiting(true);
    // Zanshin hold — let the exit animation complete before removing (400ms)
    setTimeout(() => onDismiss(toast.id), 400);
  }, [onDismiss, toast.id]);

  // Auto-dismiss — message holds, then zanshin linger begins
  React.useEffect(() => {
    const duration = toast.duration ?? 5000;
    if (duration <= 0) return;
    const t = setTimeout(dismiss, duration);
    return () => clearTimeout(t);
  }, [toast.id, toast.duration, dismiss]);

  return (
    <div
      role="status"
      aria-live="polite"
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: 'var(--space-3)',
        padding: 'var(--space-4) var(--space-6)',
        background: config.bg,
        color: config.color,
        borderRadius: 'var(--radius-md)',
        boxShadow: '0 4px 20px rgba(27,42,74,0.25)',
        fontFamily: 'var(--font-body)',
        fontSize: '0.875rem',
        lineHeight: 1.5,
        maxWidth: '360px',
        minWidth: '280px',
        pointerEvents: 'auto',
        // Enter: seme slide from right (var(--ease-strike) — decisive)
        // Exit:  zanshin fade (var(--ease-zanshin) — slow linger)
        animation: exiting
          ? `zanshin-toast-exit var(--duration-long) var(--ease-zanshin) forwards`
          : `zanshin-toast-enter var(--duration-short) var(--ease-strike) both`,
      }}
    >
      <span
        aria-hidden="true"
        style={{ flexShrink: 0, fontWeight: 700, fontSize: '0.875rem', lineHeight: '1.5' }}
      >
        {config.icon}
      </span>

      <span style={{ flex: 1 }}>{toast.message}</span>

      <button
        onClick={dismiss}
        aria-label="Dismiss notification"
        style={{
          background: 'none',
          border: 'none',
          color: config.color,
          cursor: 'pointer',
          opacity: 0.7,
          padding: 0,
          fontSize: '0.875rem',
          lineHeight: 1,
          flexShrink: 0,
          transition: `opacity var(--duration-short) var(--ease-zen)`,
        }}
        onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.opacity = '1'; }}
        onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.opacity = '0.7'; }}
      >
        ✕
      </button>
    </div>
  );
}

// ─── useToast hook ────────────────────────────────────────────────────────────

export function useToast() {
  const [toasts, setToasts] = React.useState<ToastItem[]>([]);

  const add = React.useCallback((message: React.ReactNode, variant?: ToastVariant, duration?: number) => {
    const id = `toast-${Date.now()}-${Math.random().toString(36).slice(2)}`;
    setToasts(prev => [...prev, { id, message, variant, duration }]);
    return id;
  }, []);

  const dismiss = React.useCallback((id: string) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  }, []);

  const dismissAll = React.useCallback(() => {
    setToasts([]);
  }, []);

  return { toasts, add, dismiss, dismissAll };
}
