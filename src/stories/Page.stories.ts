import type { Meta, StoryObj } from '@storybook/react';

import Page from '../app/page';

const meta = {
  title: 'Jetsetz/Homepage',
  component: Page,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen'
  }
} satisfies Meta<typeof Page>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Homepage: Story = {};
