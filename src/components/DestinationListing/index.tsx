import React from 'react';

import { Box, Container, Heading } from '@chakra-ui/react';

import { Destinations } from '../../utils/types';
import { DestinationGrid } from '../DestinationGrid';

interface ListingProps {
  backgroundColor?: string;
  heading?: string;
  gridItems: Destinations[];
}

export const Listing = ({
  backgroundColor,
  heading = 'Top Flight Destinations',
  gridItems
}: ListingProps) => {
  return (
    <Box backgroundColor={backgroundColor} py={6}>
      <Container maxW="6xl" my="6">
        <Heading color="secondary.500" textAlign="center">
          {heading}
        </Heading>
        <DestinationGrid destinations={gridItems} />
      </Container>
    </Box>
  );
};
