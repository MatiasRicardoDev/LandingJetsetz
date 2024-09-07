import React from 'react';

import { Box, Container, Heading, Text } from '@chakra-ui/react';

import Subscribe from '../Subscribe';

export const Newsletter = () => {
  return (
    <Box backgroundColor="brand.500" color="white" py={6}>
      <Container maxW="1xl" my="6" centerContent>
        <Heading as="h2" size="xl" marginBottom="4">
          Get Exclusive Travel Offers
        </Heading>
        <Text fontSize="lg">
          Why pay more? Sign Up for free and get exclusive email offers on
          amazing travel deals!
        </Text>

        <Subscribe />
      </Container>
    </Box>
  );
};

export default Newsletter;
