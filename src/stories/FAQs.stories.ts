import type { Meta, StoryObj } from '@storybook/react';

import { FAQs } from '../components/FAQs/index';

const meta = {
  title: 'Jetsetz/FAQs',
  component: FAQs,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen'
  },
  tags: ['autodocs']
} satisfies Meta<typeof FAQs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FAQsAccordion: Story = {};
