import React from 'react';

import {
  Box,
  BoxProps,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  Text
} from '@chakra-ui/react';

interface Benefit {
  heading: string;
  text: string;
}

interface ComparisonItem {
  title: string;
  description: string;
  benefits: Benefit[];
}

const COMPARISON_ITEMS: Record<string, ComparisonItem> = {
  flight: {
    title: 'Flight Comparison Shopping Made Simple',
    description:
      'Jetsetz is an air travel comparison website that consolidates flights from top travel sites into one easy to book interface. Search Jetsetz today and receive the following benefits:',
    benefits: [
      {
        heading: 'Cheap Flight Inventory',
        text: 'Compare top airline, wholesale, OTA and meta search sites to find the cheapest flights.'
      },
      {
        heading: 'Flight Comparison Tool',
        text: 'Utilize our ‘side by side’ flight comparison tool to quickly compare travel sites to find the best price.'
      },
      {
        heading: 'Largest Selection Of Airlines',
        text: '1,000’s of flight combinations from the largest airline & travel sites filtered for your review.'
      },
      {
        heading: 'One-Stop Shopping',
        text: 'You are already there! Simply continue on to the check-out page and complete the booking.'
      }
    ]
  },
  hotel: {
    title: 'Hotel Comparison Shopping Made Simple',
    description:
      'Jetsetz is a luxury hotel comparison website that consolidates hotel deals from top travel websites into one easy to book interface. Compare hotels on Jetsetz today and receive the following benefits:',
    benefits: [
      {
        heading: 'Cheapest Hotel Rates',
        text: 'Save big on the best hotels with our discount hotel inventory.'
      },
      {
        heading: 'Luxury Hotel Specialist',
        text: 'We specialize in discount luxury, boutique and 5 star hotels.'
      },
      {
        heading: 'Large Selection',
        text: 'Search over 140,000 hotels to find your perfect getaway.'
      },
      {
        heading: 'Last Minute Hotel Deals',
        text: 'Take advantage of last minute hotel inventory and save big.'
      }
    ]
  },
  'rental-cars': {
    title: 'Car Rental Comparison Shopping Made Simple',
    description:
      'Jetsetz is a car rental comparison website that consolidates rental car rates from top travel websites into one easy to book interface. Compare rental cars on Jetsetz today and receive the following benefits:',
    benefits: [
      {
        heading: 'Cheapest Rental Car Rates',
        text: 'We negotiate directly with the rental car companies and pass the savings on to you.'
      },
      {
        heading: 'Flexible Rental Car Rules',
        text: 'Under the age 25? Different drop-off location? Use our flexible website & save.'
      },
      {
        heading: 'Largest Selection Of Rental Cars',
        text: 'Search our extensive database & find the largest selection of rental cars.'
      },
      {
        heading: 'Last Minute Rental Car Deals',
        text: 'Save big on your rental car with our discount & last minute rental car inventory.'
      }
    ]
  }
};

interface Props extends BoxProps {
  type: 'flight' | 'hotel' | 'rental-cars';
}

export default function BannerComparison({ type, ...rest }: Props) {
  const { title, description, benefits } =
    COMPARISON_ITEMS[type] || COMPARISON_ITEMS.flight;

  return (
    <Box p={6} bg="brand.50" {...rest}>
      <Container maxW="6xl" my="6" centerContent>
        <Heading as="h2" textAlign="center" mb={6} color="secondary.500">
          {title}
        </Heading>
        <Text textAlign="center" mb={8}>
          {description}
        </Text>
        <Grid gap={8} gridTemplateColumns={{ base: '1fr', md: '1fr 1fr' }}>
          {benefits.map((benefit, index) => (
            <GridItem key={index}>
              <Heading as="h3" size="md" mb={2}>
                {benefit.heading}
              </Heading>
              <Text>{benefit.text}</Text>
            </GridItem>
          ))}
        </Grid>
      </Container>{' '}
    </Box>
  );
}
