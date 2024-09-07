import type { Meta, StoryObj } from '@storybook/react';

import { PopularDestinations } from '../components/PopularDestinations/index';

const meta = {
  title: 'Jetsetz/PopularDestinations',
  component: PopularDestinations,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen'
  }
} satisfies Meta<typeof PopularDestinations>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PopularTravelDestinations: Story = {
  args: {
    title: 'hello',
    cards: [
      { title: 'Paris' },
      { title: 'London' },
      { title: 'New York' },
      { title: 'Tokyo' }
    ]
  }
};
