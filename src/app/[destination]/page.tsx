'use client';

import { Box } from '@chakra-ui/react';

import { BackgroundImage } from '@/components/BackgroundImage';
import { FAQs } from '@/components/FAQs';
import { Footer } from '@/components/Footer';
import { Newsletter } from '@/components/Newsletter';
import DestinationContainer from '@/features/destinations/DestinationContainer';

export default function page() {
  return (
    <Box>
      <DestinationContainer />

      <BackgroundImage />
      <FAQs />
      <Newsletter />
      <Footer />
    </Box>
  );
}
