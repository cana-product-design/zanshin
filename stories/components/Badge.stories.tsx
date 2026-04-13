import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from '../../src/components/Badge';

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Inline label for status, category, or rank. Uppercase, 0.06em letter-spacing, xs font. Five variants covering all semantic roles.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'accent', 'success', 'warning', 'error'],
    },
    children: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Playground: Story = {
  args: {
    variant: 'primary',
    children: 'Badge',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center' }}>
      <Badge variant="primary">Primary</Badge>
      <Badge variant="accent">Accent</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="error">Error</Badge>
    </div>
  ),
};

export const WithContext: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontFamily: 'var(--font-body)' }}>
        <span style={{ color: 'var(--text-primary)', fontSize: '0.9375rem' }}>Server status</span>
        <Badge variant="success">Operational</Badge>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontFamily: 'var(--font-body)' }}>
        <span style={{ color: 'var(--text-primary)', fontSize: '0.9375rem' }}>Deployment</span>
        <Badge variant="warning">Pending</Badge>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontFamily: 'var(--font-body)' }}>
        <span style={{ color: 'var(--text-primary)', fontSize: '0.9375rem' }}>Build</span>
        <Badge variant="error">Failed</Badge>
      </div>
    </div>
  ),
};
