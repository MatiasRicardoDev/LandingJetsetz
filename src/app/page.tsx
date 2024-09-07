'use client';

import { Box, Container } from '@chakra-ui/react';

import { BackgroundImage } from '@/components/BackgroundImage';
import { Listing } from '@/components/DestinationListing';
import { FAQs } from '@/components/FAQs';
import { Footer } from '@/components/Footer';
import Header from '@/components/Header';
import { Newsletter } from '@/components/Newsletter';
import { PopularDestinations } from '@/components/PopularDestinations';
import {
  INTERNATIONAL_DESTINATIONS,
  INTERNATIONAL_HOTEL_DESTINATIONS,
  US_DESTINATIONS,
  US_HOTEL_DESTINATIONS
} from '@/data/destinations';
import CompareContainer from '@/features/CompareContainer';

export default function page() {
  return (
    <Box>
      <Header />

      <CompareContainer title="Compare Flights, Hotels, Cars, Vacations & More!" />

      <PopularDestinations
        title="Popular Travel Destinations"
        useLocationInTitle={true}
        cards={[
          { title: 'Paris Flight Deals', background: '/img/paris.jpg' },
          { title: 'Airlines That Fly To Japan', background: '/img/japan.jpg' },
          { title: 'Cheap Flights To Madrid', background: '/img/madrid.jpg' },
          {
            title: 'London Business Class',
            background: '/img/london-business-class.jpg'
          }
        ]}
      />

      <Listing
        backgroundColor="#f7f7f7"
        gridItems={[
          { title: 'U.S. Flight Destinations', results: US_DESTINATIONS },
          {
            title: 'International Destinations',
            results: INTERNATIONAL_DESTINATIONS
          }
        ]}
      />
      <Listing
        backgroundColor="text.100"
        heading="Make a Hotel Reservation"
        gridItems={[
          { title: 'U.S. Hotel Destinations', results: US_HOTEL_DESTINATIONS },
          {
            title: 'International Hotel Destinations',
            results: INTERNATIONAL_HOTEL_DESTINATIONS
          }
        ]}
      />
      <BackgroundImage />
      <FAQs />
      <Newsletter />
      <Footer />
    </Box>
  );
}
