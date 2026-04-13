import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip } from '../../src/components/Tooltip';
import { Button } from '../../src/components/Button';

const meta: Meta<typeof Tooltip> = {
  title: 'Components/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Appears on hover/focus after a configurable delay (default 150ms). Kachiiro background with shironeri text. Arrow indicator. Four placement options.',
      },
    },
    layout: 'centered',
  },
  argTypes: {
    placement: {
      control: 'select',
      options: ['top', 'bottom', 'left', 'right'],
    },
    delay: { control: 'number' },
    content: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Playground: Story = {
  args: {
    content: 'Lingering awareness after action',
    placement: 'top',
    delay: 150,
  },
  render: (args) => (
    <Tooltip {...args}>
      <Button>Hover over me</Button>
    </Tooltip>
  ),
};

export const AllPlacements: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap', justifyContent: 'center', padding: '48px' }}>
      <Tooltip content="Appears above" placement="top">
        <Button variant="ghost" size="sm">Top</Button>
      </Tooltip>
      <Tooltip content="Appears below" placement="bottom">
        <Button variant="ghost" size="sm">Bottom</Button>
      </Tooltip>
      <Tooltip content="Appears left" placement="left">
        <Button variant="ghost" size="sm">Left</Button>
      </Tooltip>
      <Tooltip content="Appears right" placement="right">
        <Button variant="ghost" size="sm">Right</Button>
      </Tooltip>
    </div>
  ),
};
