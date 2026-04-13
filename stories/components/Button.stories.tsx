import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../../src/components/Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Primary action element. Three variants: primary (aiiro/kintsugi-gold bg), ghost (transparent with accent border), danger (error bg). Zanshin transitions on hover/active.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'ghost', 'danger'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    loading: { control: 'boolean' },
    disabled: { control: 'boolean' },
    children: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

// Playground
export const Playground: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    children: 'Take action',
    loading: false,
    disabled: false,
  },
};

// All variants side-by-side
export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
      <Button variant="primary">Primary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="danger">Danger</Button>
    </div>
  ),
};

// All sizes
export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
};

// States
export const States: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
      <Button>Normal</Button>
      <Button loading>Loading</Button>
      <Button disabled>Disabled</Button>
    </div>
  ),
};

// Ghost variants
export const GhostVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
      <Button variant="ghost" size="sm">Ghost Small</Button>
      <Button variant="ghost" size="md">Ghost Medium</Button>
      <Button variant="ghost" size="lg">Ghost Large</Button>
    </div>
  ),
};
