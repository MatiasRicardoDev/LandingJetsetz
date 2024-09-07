import React from 'react';

import { Box, Container, Grid, GridItem, Heading } from '@chakra-ui/react';

import { useJetsetzStore } from '@/store/jetsetzStore';
import { Ad, DestinationCard } from '@/utils/types';

interface Props {
  title?: string;
  useLocationInTitle?: boolean;
  cards: DestinationCard[];
}

export const PopularDestinations = (props: Props) => {
  const { ipInfo } = useJetsetzStore();

  let title = props.title;

  if (props.useLocationInTitle && ipInfo?.city) {
    title = `${props.title} from ${ipInfo?.city}`;
  }

  return (
    <Container maxW="6xl" my="6" centerContent>
      <Heading color="secondary.500">{title}</Heading>

      {/* Grid of images */}
      <Grid
        w="full"
        templateColumns="repeat(auto-fit, minmax(160px, 1fr))"
        justifyContent="center"
        gap={{ base: 4, md: 6 }}
        my="6">
        {props.cards.map((card: DestinationCard) => {
          return (
            <GridItem
              alignContent="center"
              bgImage={card.background}
              bgPosition="center"
              bgRepeat="no-repeat"
              bgSize="100%"
              cursor="pointer"
              h="200px"
              key={card.title}
              position="relative"
              textAlign="center"
              transition="all 0.5s ease"
              w="100%"
              _hover={{
                bgSize: '120%',
                transition: 'all 0.5s ease-out'
              }}>
              <Box
                position="absolute"
                top={0}
                left={0}
                w="100%"
                h="100%"
                bg="rgba(0, 0, 0, 0.4)"
                zIndex={1}
              />
              <Heading
                as="h4"
                size="md"
                color="white"
                zIndex={2}
                position="relative">
                {card.title}
              </Heading>
            </GridItem>
          );
        })}
      </Grid>
    </Container>
  );
};
