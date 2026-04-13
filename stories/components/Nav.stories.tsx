import type { Meta, StoryObj } from '@storybook/react';
import { Nav } from '../../src/components/Nav';
import { Button } from '../../src/components/Button';

const sampleItems = [
  { label: 'Overview', href: '#overview' },
  { label: 'Components', href: '#components', current: true },
  { label: 'Tokens', href: '#tokens' },
  { label: 'Accessibility', href: '#a11y' },
];

const meta: Meta<typeof Nav> = {
  title: 'Components/Nav',
  component: Nav,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Navigation bar with sliding underline on hover (zanshin easing). Three variants: light, dark (kachiiro), and transparent. aria-current support for active page.',
      },
    },
    layout: 'fullscreen',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['light', 'dark', 'transparent'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Nav>;

export const Playground: Story = {
  args: {
    items: sampleItems,
    variant: 'light',
    brand: <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.125rem', color: 'var(--text-primary)' }}>残心</span>,
  },
};

export const LightVariant: Story = {
  render: () => (
    <Nav
      variant="light"
      items={sampleItems}
      brand={<span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.125rem', color: 'var(--text-primary)' }}>残心 Zanshin</span>}
      actions={<Button size="sm" variant="ghost">Sign in</Button>}
    />
  ),
};

export const DarkVariant: Story = {
  render: () => (
    <div style={{ background: '#1B2A4A' }}>
      <Nav
        variant="dark"
        items={sampleItems}
        brand={<span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.125rem', color: '#F5F4EF' }}>残心 Zanshin</span>}
        actions={<Button size="sm">Deploy</Button>}
      />
    </div>
  ),
};
