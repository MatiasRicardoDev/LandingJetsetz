import { useMemo } from 'react';

import {
  Box,
  BoxProps,
  Container,
  Heading,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs
} from '@chakra-ui/react';

import CarsFormContainer from '@/features/cars/CarsFormContainer';
import FlightsFormContainer from '@/features/flights/FlightsFormContainer';
import FlightInlineAds from '@/features/flights/components/FlightInlineAds';
import HotelsFormContainer from '@/features/hotels/HotelsFormContainer';
import { useJetsetzStore } from '@/store/jetsetzStore';

import CarInlineAds from './cars/components/CarInlineAds';
import HotelInlineAds from './hotels/components/HotelInlineAds';

interface props extends BoxProps {
  title: string;
  titleColor?: string;
  type?: 'flight' | 'hotel' | 'rentalCar';
}

const TABS_INDEX: Record<string, number> = {
  flight: 0,
  business: 1,
  hotel: 2,
  car: 3
};

export default function CompareContainer({
  title,
  titleColor = 'brand.500',
  type = 'flight',
  ...rest
}: props) {
  const { currentType, changeCurrentType } = useJetsetzStore();

  const currentTabIndex = useMemo(() => TABS_INDEX[type], [type]);


  return (
    <Box backgroundColor="blue.100" backgroundRepeat="no-repeat" {...rest}>
      <Container maxW="6xl" py="6">
        <Heading color={titleColor} textAlign="center" mb={8}>
          {title}
        </Heading>

        <Box>
          <Tabs
            position="relative"
            variant="unstyled"
            defaultIndex={currentTabIndex}
            isLazy={true}>
            <TabList position="relative" zIndex={2}>
              <Tab
                onClick={() => changeCurrentType('FLIGHTS')}
                bg="text.500"
                color="white"
                position="relative"
                _selected={{
                  bg: 'primary.500',
                  _after: {
                    content: '""',
                    position: 'absolute',
                    bottom: '-10px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    borderLeft: '10px solid transparent',
                    borderRight: '10px solid transparent',
                    borderTop: '10px solid #e57938'
                  }
                }}>
                Flights
              </Tab>
              <Tab
                onClick={() => changeCurrentType('FLIGHTS')}
                bg="text.500"
                color="white"
                position="relative"
                _selected={{
                  bg: 'primary.500',
                  _after: {
                    content: '""',
                    position: 'absolute',
                    bottom: '-10px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    borderLeft: '10px solid transparent',
                    borderRight: '10px solid transparent',
                    borderTop: '10px solid #e57938'
                  }
                }}>
                Business Class
              </Tab>
              <Tab
                onClick={() => changeCurrentType('HOTELS')}
                bg="text.500"
                color="white"
                position="relative"
                _selected={{
                  bg: 'primary.500',
                  _after: {
                    content: '""',
                    position: 'absolute',
                    bottom: '-10px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    borderLeft: '10px solid transparent',
                    borderRight: '10px solid transparent',
                    borderTop: '10px solid #e57938'
                  }
                }}>
                Hotels
              </Tab>
              <Tab
                onClick={() => changeCurrentType('CARS')}
                bg="text.500"
                color="white"
                position="relative"
                _selected={{
                  bg: 'primary.500',
                  _after: {
                    content: '""',
                    position: 'absolute',
                    bottom: '-10px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    borderLeft: '10px solid transparent',
                    borderRight: '10px solid transparent',
                    borderTop: '10px solid #e57938'
                  }
                }}>
                Cars
              </Tab>
            </TabList>
            <TabPanels
              backgroundColor="mystic.500"
              pt={3}
              rounded="0 8px 8px 8px">
              <TabPanel px={0}>
                <FlightsFormContainer /> 
              </TabPanel>
              <TabPanel px={0}>
                <FlightsFormContainer isBusiness={true} />
              </TabPanel>
              <TabPanel px={0}>
                <HotelsFormContainer />
              </TabPanel>
              <TabPanel px={0}>
                <CarsFormContainer />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>

        <Box>
          {/* Inline Ads */}
          {currentType === 'FLIGHTS' && (
            <FlightInlineAds maxItems={4} maxW="6xl" mx="auto" py={8} />
          )}

          {currentType === 'HOTELS' && (
            <HotelInlineAds maxItems={4} maxW="6xl" mx="auto" py={8} />
          )}

          {currentType === 'CARS' && (
            <CarInlineAds maxItems={4} maxW="6xl" mx="auto" py={8} />
          )}
        </Box>
      </Container>
    </Box>
  );
}
