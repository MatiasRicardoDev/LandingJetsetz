import type { Meta, StoryObj } from '@storybook/react';

import Form from '../features/flights/FlightsFormContainer';

const meta = {
  title: 'Jetsetz/Form',
  component: Form,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen'
  },
  tags: ['autodocs']
} satisfies Meta<typeof Form>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CompareForm: Story = {
  args: {
    isBusiness: true // Replace with the default value you intend to use
  }
};
