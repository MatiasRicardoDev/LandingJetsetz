import React from 'react';

import { Box, Button, Container, Heading, Text } from '@chakra-ui/react';

export const BackgroundImage = () => {
  return (
    <Container maxW="6xl" my="12">
      <Box
        backgroundImage="url('/img/background.jpeg')"
        backgroundSize="cover"
        backgroundPosition="center"
        height="400px"
        position="relative"
        textAlign="center"
        color="white">
        <Box
          position="absolute"
          left="20px"
          padding="20px"
          top="30%"
          textAlign="left">
          <Heading as="h2" size="xl" marginBottom="4">
            Travel Smarter, Pay Less
          </Heading>
          <Text fontSize="lg">
            Compare top airlines & travel sites to find the cheapest flights.
            Search our airfare comparison tool & save. Book cheap with Jetsetz
            today.
          </Text>
          <Box my={6}>
            <Button colorScheme="primary">Search Flights</Button>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};
