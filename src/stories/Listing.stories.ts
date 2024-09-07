import type { Meta, StoryObj } from '@storybook/react';

import { Listing } from '../components/DestinationListing/index';

const meta = {
  title: 'Jetsetz/Listing',
  component: Listing,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen'
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} satisfies Meta<typeof Listing>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DestinationsListing: Story = {
  args: {
    gridItems: [
      {
        title: 'New York',
        results: [{ url: '', text: 'JFK' }]
      }
    ]
  }
};
