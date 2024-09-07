import type { Meta, StoryObj } from '@storybook/react';

import { BackgroundImage } from '../components/BackgroundImage/index';

const meta = {
  title: 'Jetsetz/BackgroundImage',
  component: BackgroundImage,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen'
  },
  tags: ['autodocs']
} satisfies Meta<typeof BackgroundImage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BackgroundImageWithOverlay: Story = {};
