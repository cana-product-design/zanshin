import type { Meta, StoryObj } from '@storybook/react';
import { Card } from '../../src/components/Card';
import { Button } from '../../src/components/Button';
import { Badge } from '../../src/components/Badge';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Washi surface with kinari border. Interactive variant shows an aiiro-to-asagi bloom on the top edge and elevated shadow on hover.',
      },
    },
  },
  argTypes: {
    title: { control: 'text' },
    description: { control: 'text' },
    interactive: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Playground: Story = {
  args: {
    title: 'Zanshin Card',
    description: 'Lingering awareness after action.',
    interactive: true,
    children: 'Card body content goes here. This surface uses washi paper coloring — warm, textured, honest.',
  },
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
      <Card title="Static card" description="Non-interactive surface">
        Content without hover effects.
      </Card>
      <Card title="Interactive card" description="Hover to reveal bloom" interactive>
        Hover over this card to see the aiiro-to-asagi top border appear.
      </Card>
      <Card
        title="Card with footer"
        description="Actions in the footer area"
        interactive
        footer={
          <div style={{ display: 'flex', gap: '8px' }}>
            <Button size="sm">Confirm</Button>
            <Button size="sm" variant="ghost">Cancel</Button>
          </div>
        }
      >
        Card body with footer actions.
      </Card>
    </div>
  ),
};

export const WithBadge: Story = {
  render: () => (
    <Card
      title="Feature"
      description="New in v1.0"
      interactive
      footer={<Badge variant="success">Shipped</Badge>}
    >
      A card demonstrating the integration of badge and footer components.
    </Card>
  ),
};
