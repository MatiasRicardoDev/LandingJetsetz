import React from 'react';

import {
  Box,
  Container,
  Flex,
  Grid,
  Heading,
  Icon,
  Image,
  ListItem,
  UnorderedList
} from '@chakra-ui/react';
import { FaFacebook, FaPinterest, FaXTwitter } from 'react-icons/fa6';

export const Footer = () => {
  return (
    <Container maxW="6xl" my="6">
      <Grid
        templateColumns={{
          base: '1fr',
          sm: '1fr',
          md: '1fr minmax(260px, 290px)'
        }}
        borderBottom="1px solid #e8e8e8"
        py={6}
        justifyContent="center"
        // wrap="wrap"
        gap={6}>
        <Grid
          templateColumns={{
            base: '1fr',
            sm: '1fr 1fr',
            md: 'repeat(3, 1fr)'
          }}
          gap={6}>
          <UnorderedList listStyleType="none">
            <ListItem color="primary.500" fontWeight="bold" pb={2}>
              <a href="#">Travel Resources</a>
            </ListItem>
            <ListItem>
              <a href="/customer-care">Customer Care</a>
            </ListItem>
            <ListItem>
              <a href="/airline-contact">Airline Contact</a>
            </ListItem>
            <ListItem>
              <a href="/airline-check-in">Airline Check-In</a>
            </ListItem>
            <ListItem>
              <a href="/airline-baggage-fees">Airline Baggage Fees</a>
            </ListItem>
            <ListItem>
              <a href="/compare-travel-websites">Flight Comparison Tool</a>
            </ListItem>
          </UnorderedList>

          <UnorderedList listStyleType="none">
            <ListItem color="primary.500" fontWeight="bold" pb={2}>
              <a href="#">Book Your Trip</a>
            </ListItem>
            <ListItem>
              <a href="#">Flights</a>
            </ListItem>
            <ListItem>
              <a href="#">Business Class</a>
            </ListItem>
            <ListItem>
              <a href="#">Hotels</a>
            </ListItem>
            <ListItem>
              <a href="#">Cars</a>
            </ListItem>
            <ListItem>
              <a href="#">Packages</a>
            </ListItem>
          </UnorderedList>

          <UnorderedList listStyleType="none">
            <ListItem color="primary.500" fontWeight="bold" pb={2}>
              <a href="#">Jetsetz</a>
            </ListItem>
            <ListItem>
              <a href="/about">Company</a>
            </ListItem>
            <ListItem>
              <a href="/contact-us">Contact</a>
            </ListItem>
            <ListItem>
              <a href="/user-policy">User Policy</a>
            </ListItem>
            <ListItem>
              <a href="/policy">Privacy Policy</a>
            </ListItem>
            <ListItem>
              <a href="/terms">Terms & Conditions</a>
            </ListItem>
          </UnorderedList>
        </Grid>
        <Box>
          <Heading as="h2" size="xl" mb={4}>
            <a href="tel:(855) 538-7389">(855) 538-7389</a>
          </Heading>
          <Heading as="h6" size="md" mb={6}>
            or (855) JET-SETZ
          </Heading>
          <Grid templateColumns="repeat(3, 0fr)">
            <a href="https://www.facebook.com/Jetsetz">
              <Icon
                as={FaFacebook}
                boxSize="40px"
                color="#1877f2"
                borderRadius="full"
                padding="4px"
                _hover={{ bg: '#e9ebee' }}
                cursor="pointer"
                target="_blank"
              />
            </a>
            <a href="https://www.facebook.com/Jetsetz">
              <Icon
                as={FaXTwitter}
                boxSize="40px"
                borderRadius="full"
                padding="4px"
                _hover={{ bg: '#e9ebee' }}
                cursor="pointer"
                target="_blank"
              />
            </a>
            <a href="https://www.pinterest.com/Jetsetz">
              <Icon
                as={FaPinterest}
                boxSize="40px"
                color="#BD081C"
                borderRadius="full"
                padding="4px"
                _hover={{ bg: '#e9ebee' }}
                cursor="pointer"
                target="_blank"
              />
            </a>
          </Grid>
        </Box>
      </Grid>
      <Box display="flex" justifyContent="center" alignItems="center" my="12">
        <Image src="/img/footer-payments.png" alt="footer-payments" />
      </Box>
    </Container>
  );
};
