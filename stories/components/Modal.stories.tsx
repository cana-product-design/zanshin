import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from '../../src/components/Modal';
import { Button } from '../../src/components/Button';

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Overlay with gradient-ma backdrop. Centered washi panel with focus trap and ESC to close. Enter/exit animation uses the kamae keyframe — elements arrive with purpose.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

function ModalDemo({ title, width, children }: { title?: string; width?: number; children?: React.ReactNode }) {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Open modal</Button>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title={title}
        width={width}
        footer={
          <div style={{ display: 'flex', gap: '8px' }}>
            <Button onClick={() => setOpen(false)}>Confirm</Button>
            <Button variant="ghost" onClick={() => setOpen(false)}>Cancel</Button>
          </div>
        }
      >
        {children ?? (
          <p style={{ margin: 0 }}>
            Modal body content. Press ESC or click the backdrop to close. Focus is trapped within the modal while open.
          </p>
        )}
      </Modal>
    </>
  );
}

export const Playground: Story = {
  render: () => <ModalDemo title="Confirmation" />,
};

export const WithoutTitle: Story = {
  render: () => (
    <ModalDemo>
      <p style={{ margin: 0, fontFamily: 'var(--font-body)', color: 'var(--text-primary)' }}>
        A modal without a title header. The close button still appears in the top-right corner.
      </p>
    </ModalDemo>
  ),
};

export const WideModal: Story = {
  render: () => <ModalDemo title="Wide layout" width={720} />,
};
