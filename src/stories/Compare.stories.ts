import type { Meta, StoryObj } from '@storybook/react';

import Compare from '../features/CompareContainer';

const meta = {
  title: 'Jetsetz/Compare',
  component: Compare,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen'
  },
  tags: ['autodocs']
} satisfies Meta<typeof Compare>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CompareWidget: Story = {
  args: {
    title: ''
  }
};
