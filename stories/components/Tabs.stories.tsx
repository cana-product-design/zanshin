import type { Meta, StoryObj } from '@storybook/react';
import { Tabs } from '../../src/components/Tabs';

const sampleTabs = [
  {
    id: 'overview',
    label: 'Overview',
    content: (
      <div style={{ fontFamily: 'var(--font-body)', color: 'var(--text-primary)', lineHeight: 1.6 }}>
        <h3 style={{ marginTop: 0, fontFamily: 'var(--font-display)', fontWeight: 600 }}>Overview</h3>
        <p>The Zanshin design system draws from the philosophical tradition of Japanese martial arts and craft aesthetics.</p>
      </div>
    ),
  },
  {
    id: 'components',
    label: 'Components',
    content: (
      <div style={{ fontFamily: 'var(--font-body)', color: 'var(--text-primary)', lineHeight: 1.6 }}>
        <h3 style={{ marginTop: 0, fontFamily: 'var(--font-display)', fontWeight: 600 }}>Components</h3>
        <p>12 APCA-validated React components — Button, Input, Badge, Card, Nav, Divider, Tooltip, Modal, Select, Toast, Tabs, and Table.</p>
      </div>
    ),
  },
  {
    id: 'tokens',
    label: 'Tokens',
    content: (
      <div style={{ fontFamily: 'var(--font-body)', color: 'var(--text-primary)', lineHeight: 1.6 }}>
        <h3 style={{ marginTop: 0, fontFamily: 'var(--font-display)', fontWeight: 600 }}>Design Tokens</h3>
        <p>All color values are CSS custom properties applied by ZanshinProvider. No hardcoded hex values in component code.</p>
      </div>
    ),
  },
  {
    id: 'disabled',
    label: 'Disabled',
    content: null,
    disabled: true,
  },
];

const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Horizontal tab list with active tab underline using accent color (zanshin lingering transition). Content area with kamae entry animation. Left/right arrow keyboard navigation.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Playground: Story = {
  args: {
    tabs: sampleTabs,
    defaultTab: 'overview',
  },
};

export const WithDefaultTab: Story = {
  render: () => (
    <Tabs tabs={sampleTabs} defaultTab="components" />
  ),
};
