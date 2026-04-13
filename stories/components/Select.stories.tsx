import type { Meta, StoryObj } from '@storybook/react';
import { Select } from '../../src/components/Select';

const sampleOptions = [
  { value: 'kintsugi', label: '金継ぎ Kintsugi — warm gold' },
  { value: 'aizome', label: '藍染 Aizome — indigo blue' },
  { value: 'sumi', label: '墨 Sumi — ink black' },
  { value: 'disabled', label: 'Disabled option', disabled: true },
];

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Custom select with kinari border trigger and washi dropdown panel. Full keyboard navigation: up/down arrows, Enter to select, Escape to close.',
      },
    },
  },
  argTypes: {
    label: { control: 'text' },
    placeholder: { control: 'text' },
    error: { control: 'text' },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Playground: Story = {
  args: {
    label: 'Palette mode',
    placeholder: 'Select a palette',
    options: sampleOptions,
  },
};

export const States: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '380px' }}>
      <Select label="Default" options={sampleOptions} placeholder="Choose..." />
      <Select label="Pre-selected" options={sampleOptions} defaultValue="aizome" />
      <Select label="Error state" options={sampleOptions} error="Please select a palette." />
      <Select label="Disabled" options={sampleOptions} disabled placeholder="Cannot select" />
    </div>
  ),
};
