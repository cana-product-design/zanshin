import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Toast, useToast } from '../../src/components/Toast';
import { Button } from '../../src/components/Button';
import type { ToastVariant } from '../../src/components/Toast';

const meta: Meta = {
  title: 'Components/Toast',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Notification toasts. Four variants (success, warning, error, info). Auto-dismiss after 5s. Enter animation from bottom using kamae keyframe. Stacks up to 3.',
      },
    },
  },
};

export default meta;
type Story = StoryObj;

function ToastDemo() {
  const { toasts, add, dismiss } = useToast();

  const variants: ToastVariant[] = ['success', 'warning', 'error', 'info'];
  const messages = {
    success: 'Deployment succeeded — all 12 components shipped.',
    warning: 'Attention: APCA contrast annotation may be stale.',
    error: 'Build failed — check the CI workflow output.',
    info: 'Storybook is available at localhost:6006.',
  };

  return (
    <div>
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
        {variants.map((v) => (
          <Button
            key={v}
            variant="ghost"
            size="sm"
            onClick={() => add(messages[v], v)}
          >
            {v.charAt(0).toUpperCase() + v.slice(1)}
          </Button>
        ))}
      </div>
      <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.8125rem', color: 'var(--text-secondary)', marginTop: '12px' }}>
        Toasts auto-dismiss after 5 seconds. Stacks up to 3 visible at once.
      </p>
      <Toast toasts={toasts} onDismiss={dismiss} />
    </div>
  );
}

export const Playground: Story = {
  render: () => <ToastDemo />,
};

export const AllVariants: Story = {
  render: () => {
    const { toasts, add, dismiss } = useToast();
    React.useEffect(() => {
      add('Deployment succeeded.', 'success', 0);
      add('Attention: check contrast.', 'warning', 0);
      add('Build failed.', 'error', 0);
      add('Storybook running.', 'info', 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
      <div>
        <p style={{ fontFamily: 'var(--font-body)', color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
          Four variants shown simultaneously (no auto-dismiss).
        </p>
        <Toast toasts={toasts} onDismiss={dismiss} maxVisible={4} />
      </div>
    );
  },
};
