'use client';

import { useState } from 'react';

import {
  Box,
  Center,
  Container,
  Flex,
  Grid,
  GridItem,
  HStack,
  Icon,
  Spinner,
  Text,
  Tooltip
} from '@chakra-ui/react';
import { BiLinkExternal } from 'react-icons/bi';
import { BsWindowFullscreen, BsWindowX } from 'react-icons/bs';

import CarHeaderResults from '@/features/cars/components/CarHeaderResults';
import FlightHeaderResults from '@/features/flights/components/FlightHeaderResults';
import FlightInlineAds from '@/features/flights/components/FlightInlineAds';
import HotelHeaderResults from '@/features/hotels/components/HotelHeaderResults';
import { getDeepIframeUrl } from '@/utils/kayakUrl';

import './style.css';

interface Props {
  query: any;
  isLoading: boolean;
  publishers: any[];
}

export default function CompareResults({
  query,
  isLoading,
  publishers
}: Props) {
  const [selectedPublisher, setSelectedPublisher] = useState<any>({});

  const handleOpenOfferInNewTab = (url: string,name?:string) => {
    if(name == 'CheapFlights'){
      window.open(localStorage.getItem('cf_link')!, '_blank');  
    }
    window.open(url, '_blank');
  };

  const type = query.type ?? 'flights';

  return (
    <Box
      backgroundColor="rgb(54,82,138)"
      background="linear-gradient(180deg, rgba(62,108,169,1) 25%, rgba(154,188,229,1) 84%)"
      color="white"
      minHeight="100vh"
      height="100%">
      <Container maxW="1920px" backdropFilter={'blur(10px)'} height="100%">
        {/* nav */}
        {type === 'hotels' && <HotelHeaderResults query={query} />}
        {type === 'cars' && <CarHeaderResults query={query} />}
        {type === 'flights' && <FlightHeaderResults query={query} />}

        {/* Ads */}
        <Box my={4} mx={2}>
          {type === 'flights' && <FlightInlineAds maxItems={2} />}
        </Box>

        {isLoading && (
          <Center my={16}>
            <Spinner
              thickness="4px"
              emptyColor="gray.50"
              color="primary.500"
              size="xl"
            />
          </Center>
        )}

        <Grid
          templateColumns={'repeat(auto-fit, minmax(280px, 1fr))'}
          justifyContent="center"
          gap="8px"
          padding="8px"
          height="100%">
          {publishers &&
            (publishers || []).map((publisher: any) => {
              
              let URI = getDeepIframeUrl(publisher);
              //URI = URI.replace('https://www.kayak.comhttps://servedbyadbutler.com/','https://servedbyadbutler.com/')
              //console.log('URI => ',URI)
              console.error('ESTOS SON LOS PUBLISHERS',publisher)
              /*if (publisher.name === 'CheapFlights') {
                URI = localStorage.getItem('')
              }*/
              if (publisher.name === 'smartfares') {
                URI = 'https://servedbyadbutler.com/redirect.spark?MID=187841&plid=2612318&setID=757110&channelID=0&CID=0&banID=522438433&PID=0&textadID=0&tc=1&type=tclick&mt=1&hc=6d2cbe0a11c04b034e50a8e6ce5097f8f5d022bb&location='+publisher.deepLink;
                
              }
              
              

              return (
                <GridItem
                  bg="rgba(255, 255, 255, 0.5)"
                  backdropFilter={'blur(40px)'}
                  rounded="sm"
                  overflow="hidden"
                  key={publisher.deepLink}
                  borderRadius="md"
                  minHeight={{ base: '400px', md: '600px' }}
                  height="75vh"
                  className={`iframe-${publisher.providerCode}`}>
                  <Flex
                    bg="blumine.500"
                    justifyContent="space-between"
                    alignItems="center"
                    height="44px"
                    px={2}
                    py={1}>
                    <Text>{publisher.name}</Text>

                    <HStack alignItems="center" position="relative">
                      {selectedPublisher?.providerCode && (
                        <>
                          <Tooltip
                            label={`Close ${selectedPublisher.name} Offer`}
                            aria-label="A tooltip"
                            placement="top-start">
                            <Center>
                              <Icon
                                as={BsWindowX}
                                fontSize="20px"
                                cursor="pointer"
                                onClick={() => {
                                  const box = document.querySelector(
                                    `.iframe-${selectedPublisher.providerCode}`
                                  ) as HTMLElement;

                                  if (box) {
                                    box.classList.remove('iframe__fullscreen');
                                  }

                                  setSelectedPublisher(undefined);
                                }}
                              />
                            </Center>
                          </Tooltip>
                        </>
                      )}

                      {!selectedPublisher?.providerCode && (
                        <>
                          <Tooltip
                            label={`Expand ${publisher.name} Offer`}
                            aria-label="A tooltip"
                            placement="top-start">
                            <Center>
                              <Icon
                                as={BsWindowFullscreen}
                                fontSize="18px"
                                cursor="pointer"
                                onClick={() => {
                                  setSelectedPublisher({
                                    name: publisher.name,
                                    providerCode: publisher.providerCode,
                                    url: URI
                                  });

                                  const box = document.querySelector(
                                    `.iframe-${publisher.providerCode}`
                                  ) as HTMLElement;

                                  if (box) {
                                    box.classList.add('iframe__fullscreen');
                                  }
                                }}
                              />
                            </Center>
                          </Tooltip>

                          <Tooltip
                            label={`Open ${publisher.name} Offer In New Tab`}
                            aria-label="A tooltip"
                            placement="top-start">
                            <Center>
                              <Icon
                                mr={2}
                                as={BiLinkExternal}
                                fontSize="18px"
                                cursor="pointer"
                                onClick={() => {
                                  handleOpenOfferInNewTab(URI); 
                                }}
                              />
                            </Center>
                          </Tooltip>
                        </>
                      )}
                    </HStack>
                  </Flex>
                  <iframe width="100%" height="100%" src={ publisher.name == 'CheapFlights' ? localStorage.getItem('cf_link')! :URI  } />
                </GridItem>
              );
            })}
        </Grid>
      </Container>

      {/* end */}
    </Box>
  );
}
