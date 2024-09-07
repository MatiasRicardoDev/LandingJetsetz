import type { Meta, StoryObj } from '@storybook/react';

import { Tabs } from '../components/Tabs/index';

const meta = {
  title: 'Jetsetz/Tabs',
  component: Tabs,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen'
  },
  tags: ['autodocs']
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CompareTabs: Story = {};
