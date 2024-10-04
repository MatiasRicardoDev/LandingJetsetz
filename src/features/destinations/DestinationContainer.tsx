'use client';

import { Box, Container, Grid } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import { IoCheckmarkDoneSharp } from 'react-icons/io5';

import BannerDeals from '@/components/BannerDeals';
import DestinationThingsList from '@/components/DestinationThingsList';
import Header from '@/components/Header';
import { PopularDestinations } from '@/components/PopularDestinations';
import SnapshotGallery from '@/components/SnapshotGallery';
import CompareContainer from '@/features/CompareContainer';
import { destinationService } from '@/services/destination.service';

import DestinationTips from '../../components/DestinationTips';
import { destinationAdapter } from './adapters/destination.adapter';

export default function DestinationContainer() {
  const { destination } = useParams();

  const { data, isLoading } = useQuery({
    queryKey: ['destination', destination],
    queryFn: async () =>
      await destinationService((destination || '').toString()),
    staleTime: 1000 * 60 * 60 * 24 * 30 // 30 days
  });


  const {
    destinationName,
    family,
    destinationType,
    snapshotGallery,
    thingsToDo,
    tips
  } = destinationAdapter(data);

  return (
    <Box>
      <Header />

      {!isLoading && (
        <CompareContainer
          title="Compare Flights, Hotels, Cars, Vacations & More!"
          type={destinationType}
        />
      )}

      {!isLoading && (
        <PopularDestinations
          title={`${destinationName} Travel Deals`}
          cards={family}
        />
      )}

      <BannerDeals destinationName={destinationName} type={destinationType} />

      <Container maxW="6xl" my="6">
        <Grid gridTemplateColumns="1fr 1fr 320px" gap="16px">
          <DestinationThingsList
            title={`${destinationName} Travel Deals`}
            items={family}
          />

          <DestinationThingsList
            title={`Things to do in ${destinationName}`}
            items={thingsToDo}
            bullet={IoCheckmarkDoneSharp}
          />

          <SnapshotGallery url={snapshotGallery} />
        </Grid>
      </Container>

      {!isLoading && (
        <DestinationTips htmlTips={tips} title={`${destinationName} Tips`} />
      )}
    </Box>
  );
}
