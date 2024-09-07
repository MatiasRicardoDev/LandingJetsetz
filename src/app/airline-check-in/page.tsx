'use client';

import React from 'react';

import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Link,
  ListItem,
  Select,
  Text,
  UnorderedList
} from '@chakra-ui/react';

import { Footer } from '@/components/Footer';
import Header from '@/components/Header';

// Extend the Window interface to include __cfRLUnblockHandlers property
declare global {
  interface Window {
    __cfRLUnblockHandlers?: boolean;
  }
}

interface Airline {
  name: string;
  url: string;
}

const AirlineCheckIn: React.FC = () => {
  const airlines: Airline[] = [
    { name: 'Please select an airline', url: '' },
    { name: 'Aer Lingus', url: 'https://www.aerlingus.com/wci/start?locale=en' }
    // Add other airline options here
  ];

  const handleCheckIn = () => {
    const selectedAirline = (
      document.getElementById('airlines') as HTMLSelectElement
    ).value;
    if (!window.__cfRLUnblockHandlers) return false; // Check for __cfRLUnblockHandlers existence
    window.open(selectedAirline, 'newtab' + selectedAirline);
  };

  return (
    <main>
      <Header />
      <Container maxW="4xl" my="6">
        <Box id="page-content">
          <Box className="airline-numbers">
            <Box className="title">
              <Heading as="h2">Airline Check-In</Heading>
            </Box>
            <Box className="inside">
              <Text>
                {`Online flight check-in opens 24-48 hours before your flight
                departure. You'll need your 6-digit airline confirmation code
                (example: L84RTL) from your itinerary to check in.`}
              </Text>

              <Box borderWidth="1px" rounded="md" p={4} mt={4}>
                <Heading as="h3" fontSize="lg" mb={2}>
                  Ready to check-in?
                </Heading>
                <FormControl>
                  <FormLabel htmlFor="airlines">Select Airline</FormLabel>
                  <Select id="airlines" name="airlines">
                    {airlines.map((airline, index) => (
                      <option key={index} value={airline.url}>
                        {airline.name}
                      </option>
                    ))}
                  </Select>
                </FormControl>
                <Button
                  className="button-submit"
                  onClick={handleCheckIn}
                  mt={4}>
                  <span className="btn-label">Start Check-in</span>
                </Button>
              </Box>

              <Text mt={4} fontSize="sm">
                <strong>Good to know</strong>
                <UnorderedList ml={4}>
                  <ListItem>
                    Depending on your airline, after checking in online you may
                    be able to print your boarding pass, save it to your mobile
                    phone, or pick it up from a kiosk at the airport.
                  </ListItem>
                  <ListItem>
                    Airport check-in usually opens 2-3 hours before flight
                    departure.
                  </ListItem>
                  <ListItem>
                    You will need your boarding pass to go through airport
                    security. Check with your airline for any other required
                    documents.
                  </ListItem>
                  <ListItem>
                    Plan to arrive at the airport at least 1-2 hours before your
                    domestic flight, and at least 2-3 hours before your
                    international flight.
                  </ListItem>
                </UnorderedList>
              </Text>

              <Text mt={4}>
                If you still need help checking in for your flight,{' '}
                <Link href="/contact-us">contact us</Link> or{' '}
                <Link href="/airline-contact">your airline</Link>.
              </Text>
            </Box>
          </Box>
          <Box className="clr"></Box>
        </Box>
      </Container>
      <Footer />
    </main>
  );
};

export default AirlineCheckIn;
