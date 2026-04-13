import type { Meta, StoryObj } from '@storybook/react';
import { Divider } from '../../src/components/Divider';

const meta: Meta<typeof Divider> = {
  title: 'Components/Divider',
  component: Divider,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Horizontal rule as a sumi-e brushstroke — gradients that fade to nothing at both ends, like ink absorbed into washi paper.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'accent'],
    },
    spacing: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Divider>;

export const Playground: Story = {
  args: {
    variant: 'default',
    spacing: 'md',
  },
};

export const BothVariants: Story = {
  render: () => (
    <div>
      <p style={{ fontFamily: 'var(--font-body)', color: 'var(--text-primary)', margin: 0 }}>
        Section one — above the default divider
      </p>
      <Divider variant="default" />
      <p style={{ fontFamily: 'var(--font-body)', color: 'var(--text-primary)', margin: 0 }}>
        Section two — between dividers
      </p>
      <Divider variant="accent" />
      <p style={{ fontFamily: 'var(--font-body)', color: 'var(--text-primary)', margin: 0 }}>
        Section three — below the accent divider
      </p>
    </div>
  ),
};

export const SpacingVariants: Story = {
  render: () => (
    <div>
      <p style={{ fontFamily: 'var(--font-body)', color: 'var(--text-secondary)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
        Small spacing
      </p>
      <Divider spacing="sm" />
      <p style={{ fontFamily: 'var(--font-body)', color: 'var(--text-secondary)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
        Medium spacing (default)
      </p>
      <Divider spacing="md" />
      <p style={{ fontFamily: 'var(--font-body)', color: 'var(--text-secondary)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
        Large spacing
      </p>
      <Divider spacing="lg" />
    </div>
  ),
};
