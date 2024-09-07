import React from 'react';

import { Box, Flex } from '@chakra-ui/react';

export const Tabs = () => {
  return (
    <Flex my="6" backgroundColor="blue.100">
      <Box
        position="relative"
        backgroundColor="primary.500"
        color="white"
        fontWeight="bold"
        textAlign="center"
        py={2}
        px={4}>
        Flights
        <Box
          position="absolute"
          bottom="-10px"
          left="calc(50% - 10px)"
          width="0"
          height="0"
          borderLeft="10px solid transparent"
          borderRight="10px solid transparent"
          borderTop="10px solid #e57938"
        />
      </Box>
      <Box
        position="relative"
        backgroundColor="text.500"
        color="white"
        fontWeight="bold"
        textAlign="center"
        py={2}
        px={4}>
        Business Class
      </Box>
      <Box
        position="relative"
        backgroundColor="text.500"
        color="white"
        fontWeight="bold"
        textAlign="center"
        py={2}
        px={4}>
        Hotels
      </Box>
      <Box
        position="relative"
        backgroundColor="text.500"
        color="white"
        fontWeight="bold"
        textAlign="center"
        py={2}
        px={4}>
        Cars
      </Box>
      <Box
        position="relative"
        backgroundColor="text.500"
        color="white"
        fontWeight="bold"
        textAlign="center"
        py={2}
        px={4}>
        Packages
      </Box>
      <Box
        position="relative"
        backgroundColor="text.500"
        color="white"
        fontWeight="bold"
        textAlign="center"
        py={2}
        px={4}>
        Activities
      </Box>
    </Flex>
  );
};
