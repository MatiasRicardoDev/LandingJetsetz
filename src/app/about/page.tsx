'use client';

import { Box, Container, Heading, Image, Text } from '@chakra-ui/react';

import { Footer } from '@/components/Footer';
import Header from '@/components/Header';

const About = () => {
  return (
    <main>
      <Header />

      <Container maxW="4xl" my="6">
        <Box id="page-content" bg="white">
          <Box maxW="800px" mx="auto">
            <Box paddingTop={6}>
              <Heading as="h2">ABOUT JETSETZ.COM</Heading>
            </Box>
            <Image
              src="/img/about.jpg"
              style={{ width: '100%', height: 'auto', padding: '2em 0' }}
              alt="About Jetsetz.com"
            />
            <Box>
              <Text>
                Welcome to Jetsetz.com, an upscale travel website designed for
                Jetsetters just like you! Our goal at Jetsetz.com is to provide
                you with a unique booking experience that will exceed your
                expectations about purchasing travel online. To achieve this
                goal we strive to provide you with a fast, easy to use booking
                experience that offers exceptional value, supported by
                responsive, caring travel agents. Life is short, so take
                advantage of our negotiated rates and upgrade your travel
                experience!
              </Text>
              <Heading as="h3" size="md" mt={4} mb={2}>
                Exceptional Value
              </Heading>
              <Text>
                With Jetsetz.com you can enjoy a more upscale vacation for the
                same price that you would pay for an average vacation on other
                travel sites. You may ask, how do we offer higher-end vacations
                at budget prices? Well, the answer is in our focus. Unlike other
                travel sites that offer everything to everybody, we focus
                primarily on the value minded traveler that would rather spend a
                little bit more, but get a much more fulfilling travel
                experience.
              </Text>
              <Text>
                {`
              In order to offer great travel deals for our clients, Jetsetz
              negotiates directly with upscale Travel Suppliers &amp;
              Wholesalers. In a nutshell, we help our Travel Partners move
              "market share" and sell their distressed inventory and they reward
              us with discounted rates. Who wins in this relationship, you do!
              In most cases, we can save you up to 50% off the cost of
              International or Business Class Airline Tickets and up to 40% off
              the cost of 4 or 5 star rated hotels. Package these Travel
              Products together and we can save you even more.`}
              </Text>
              <Heading as="h3" size="md" mt={4} mb={2}>
                The Booking Experience
              </Heading>
              <Text>
                {`
              Unlike other travel websites that have built their systems on
              legacy technologies that are difficult to manage and upgrade,
              Jetsetz.com utilizes the latest travel technology to provide a
              booking experience unlike any other travel website. Our technology
              is fast, intuitive and provides all of the essential information
              that you will need to research, plan and book your perfect
              vacation or business trip. We utilize direct-connect and
              multi-threading technology to search multiple travel databases
              simultaneously. We then supplement this discounted travel
              inventory with the world's largest travel database. What does all
              of this mean for you? A fast, easy to use website that will
              provide you access to the largest selection of discounted upscale
              travel inventory available.`}
              </Text>
              <Heading as="h3" size="md" mt={4} mb={2}>
                Customer Service
              </Heading>
              <Text>
                Every travel site speaks about customer service but only
                Jetsetz.com has built its entire company around the experience
                of its customers. Our goal is to make the booking process
                informative, seamless and secure so that you will feel
                comfortable booking your travel with Jetsetz.com. If a problem
                occurs during the booking process, while you are on your trip,
                or after you return, please call our toll-free number anytime
                for support. Our reservations center is located in the US and
                staffed with some of the most experienced, friendly travel
                agents in the industry. Our clients appreciate this commitment
                to service and email us every day with their positive comments
                and gratitude. We look forward to working with you.
              </Text>
            </Box>
          </Box>
          <Box paddingBottom={6}></Box>
        </Box>
      </Container>
      <Footer />
    </main>
  );
};

export default About;
