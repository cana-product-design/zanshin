import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '../../src/components/Input';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Text input with kinari border, aiiro focus ring, and error state via aria-invalid. Placeholder rendered in hai italic.',
      },
    },
  },
  argTypes: {
    label: { control: 'text' },
    placeholder: { control: 'text' },
    hint: { control: 'text' },
    error: { control: 'text' },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Playground: Story = {
  args: {
    label: 'Email address',
    placeholder: 'you@example.com',
    hint: 'We will never share your email.',
  },
};

export const States: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '400px' }}>
      <Input label="Default" placeholder="Enter text..." />
      <Input label="With hint" placeholder="Enter text..." hint="This is a helpful hint." />
      <Input label="Error state" placeholder="Enter text..." error="This field is required." />
      <Input label="Disabled" placeholder="Cannot edit" disabled />
    </div>
  ),
};

export const WithValue: Story = {
  args: {
    label: 'Username',
    defaultValue: 'zanshin_user',
  },
};
