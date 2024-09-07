import type { Meta, StoryObj } from '@storybook/react';

import { Newsletter } from '../components/Newsletter/index';

const meta = {
  title: 'Jetsetz/Newsletter',
  component: Newsletter,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen'
  },
  tags: ['autodocs']
} satisfies Meta<typeof Newsletter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NewsletterSignUp: Story = {};
