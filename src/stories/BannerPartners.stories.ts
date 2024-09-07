import type { Meta, StoryObj } from '@storybook/react';

import BannerPartners from '../components/BannerPartners';

const meta = {
  title: 'Jetsetz/Banners',
  component: BannerPartners,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen'
  },
  tags: ['autodocs']
} satisfies Meta<typeof BannerPartners>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BannerPartnersTest: Story = {
  args: {
    type: 'flights'
  }
};
