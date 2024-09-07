import React from 'react';

import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Container,
  Grid
} from '@chakra-ui/react';

const faqLeft = [
  {
    question: 'How can I find the cheapest flights using Jetsetz?',
    answer:
      'Jetsetz is a wholesale travel agency.  We partner with multiple consolidators and airlines to negotiate the best price on airline tickets.  Many of these fares cannot be displayed online.  To get these discounted fares please call us toll free at (855) JET-SETZ.'
  },
  {
    question: 'How many airlines do you show flight results from?',
    answer:
      'Jetsetz has access to all major GDS systems including Sabre, Amadeus & Galileo.  Jetsetz utilizes these GDS systems to connect to airline & wholesale inventory.  In addition, Jetsetz has direct connections with multiple airlines and consolidators.  Combine all of these sources and you have access to 100’s of airlines that offer published, web, discount, and wholesale airline ticket inventory.  More airlines results in better fares for you.'
  },
  {
    question: 'Can I get hotel and car rental deals as well?',
    answer:
      'Jetsetz negotiates directly with the largest hotel and rental car companies to get access to the best deals.  In addition, Jetsetz works with hotel and rental car wholesalers that provide discount pricing for phone only bookings.  These discount rates cannot be displayed online.  To get these discounted hotel and rental car rates please call us toll free at (855) JET-SETZ.'
  }
];

const faqRight = [
  {
    question: 'What makes Jetsetz unique?',
    answer:
      'Jetsetz is a hybrid between a traditional Online Travel Agency (OTA) and a Meta Search Agency.  We are unique because our sole purpose is to help you find the best deal on your flight, hotel, rental car, or vacation package.  Jetsetz is confident enough in its pricing that it is willing to compare its pricing against any and all competitors.  If you find a cheaper price on Jetsetz, you can book online or call us toll free at (855) JET-SETZ.  If you find a better price with one of our competitors, please book with them.  In the end, we hope that by becoming a great source of travel pricing, you will tell your friends and continue to search Jetsetz for you next vacation.'
  },
  {
    question: 'Can Jetsetz help me find business class deals?',
    answer:
      'Jetsetz is a wholesale travel agency that specializes in first class and business class airline tickets.  We partner with multiple consolidators and airlines to negotiate the best price on business class airline tickets.  Many of these fares cannot be displayed online.  To book these discounted business class flights please call us toll free at (855) JET-SETZ.'
  },
  {
    question: 'How can I get notified of upcoming travel deals?',
    answer:
      'Jetsetz is constantly receiving new promotions from various airlines, hotels, and rental providers.  These deals are based on departure airports as well as top travel destinations.  To be notified of these upcoming travel deals please sign up here (Exclusive Travel Offers email sign up form).'
  }
];

export const FAQs = () => {
  return (
    <Container maxW="6xl" mt="4" mb={12}>
      <Grid templateColumns={{ base: '1fr', lg: 'repeat(2, 1fr)' }} gap={6}>
        <Accordion allowMultiple>
          {faqLeft.map((item, index) => (
            <AccordionItem key={index}>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    {item.question}
                  </Box>
                  <AccordionIcon color="primary.500" />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>{item.answer}</AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
        <Accordion allowMultiple>
          {faqRight.map((item, index) => (
            <AccordionItem key={index}>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    {item.question}
                  </Box>
                  <AccordionIcon color="primary.500" />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>{item.answer}</AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </Grid>
    </Container>
  );
};
