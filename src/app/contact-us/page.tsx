'use client';

import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Select,
  Text,
  Textarea
} from '@chakra-ui/react';

import { Footer } from '@/components/Footer';
import Header from '@/components/Header';

const ContactUs = () => {
  return (
    <main>
      <Header />
      <Container maxW="4xl" my="6">
        <Box id="page-content" bg="white">
          <Box className="information" maxW="800px" mx="auto" p={4}>
            <Box className="title">
              <Heading as="h2">Contact Us</Heading>
            </Box>
            <Flex className="inside page-sections">
              <Box className="left-section" flex="1" mr={8}>
                <Heading as="h2" size="md" mb={4}>
                  Questions or comments?
                </Heading>
                <Text mb={4}>
                  <strong>Give us a call: 1-855-538-7389</strong>
                  <br />
                  Mon - Fri: 8:30am - 5:30pm (PST)
                  <br />
                  Sat: 10:00am - 4:00pm (PST)
                </Text>
                <Box className="contact">
                  <Heading as="h3" size="sm" mb={4}>
                    EMAIL US
                  </Heading>
                  <form method="post">
                    <FormControl mb={4}>
                      <FormLabel htmlFor="firstname">First Name *</FormLabel>
                      <Input
                        id="firstname"
                        name="firstname"
                        type="text"
                        border="1px solid #c7c7c7"
                      />
                    </FormControl>
                    <FormControl mb={4}>
                      <FormLabel htmlFor="lastname">Last Name *</FormLabel>
                      <Input
                        id="lastname"
                        name="lastname"
                        type="text"
                        border="1px solid #c7c7c7"
                      />
                    </FormControl>
                    <FormControl mb={4}>
                      <FormLabel htmlFor="country">Country</FormLabel>
                      <Input
                        id="country"
                        name="country"
                        type="text"
                        border="1px solid #c7c7c7"
                      />
                    </FormControl>
                    <FormControl mb={4}>
                      <FormLabel htmlFor="email-address">
                        Email Address *
                      </FormLabel>
                      <Input
                        id="email-address"
                        name="email-address"
                        type="email"
                        border="1px solid #c7c7c7"
                      />
                    </FormControl>
                    <FormControl mb={4}>
                      <FormLabel htmlFor="topic">Select a Topic *</FormLabel>
                      <Select
                        id="topic"
                        name="topic"
                        border="1px solid #c7c7c7">
                        <option value="Airline Tickets">Airline Tickets</option>
                        <option value="Hotel Rooms">Hotel Rooms</option>
                        <option value="Rental Cars">Rental Cars</option>
                        <option value="Vacation Packages">
                          Vacation Packages
                        </option>
                        <option value="Activities">Activities</option>
                        <option value="Airport Parking-Transfers">
                          Airport Parking/Transfers
                        </option>
                        <option value="Website Help">Website Help</option>
                        <option value="Other">Other</option>
                      </Select>
                    </FormControl>
                    <FormControl mb={4}>
                      <FormLabel htmlFor="comments">
                        Question/Comment: *
                      </FormLabel>
                      <Textarea
                        id="comments"
                        name="comments"
                        border="1px solid #c7c7c7"
                      />
                    </FormControl>
                    <Button colorScheme="primary" size="lg">
                      Submit
                    </Button>
                  </form>
                </Box>
              </Box>
              <Box className="right-section" flex="1">
                <Heading as="h2" size="md" mb={4}>
                  Frequently Asked Questions
                </Heading>
                <Text mb={4}>
                  Below are some of the most common questions we get asked. See
                  if your question has an answer readily available below.
                </Text>
                <Text mb={4}>
                  <Link href="faq-airlinetickets#6" color="secondary.500">
                    What if I typed in the wrong travel information?
                  </Link>
                  <br />
                  <Link href="faq-airlinetickets#18" color="secondary.500">
                    How do I review, confirm or print my travel itinerary?
                  </Link>
                  <br />
                  <Link href="faq-airlinetickets#19" color="secondary.500">
                    How do I change a flight reservation?
                  </Link>
                  <br />
                  <Link href="faq-airlinetickets#20" color="secondary.500">
                    How do I cancel my flight reservation?
                  </Link>
                  <br />
                  <Link href="faq-airlinetickets#23" color="secondary.500">
                    How do I check-in or confirm the status of my flight?
                  </Link>
                  <br />
                  <Link href="faq-hotelrooms#17" color="secondary.500">
                    How do I change a hotel reservation?{' '}
                  </Link>
                  <br />
                  <Link href="faq-hotelrooms#18" color="secondary.500">
                    How do I cancel a hotel reservation?
                  </Link>
                  <br />
                  <Link href="faq-rentalcars#4" color="secondary.500">
                    Do I pay for the rental car when I book the reservation?
                  </Link>
                  <br />
                  <Link href="faq-rentalcars#6" color="secondary.500">
                    What is the age restriction for renting a rental car in the
                    US?
                  </Link>
                  <br />
                  <Link href="faq-airlinetickets#23" color="secondary.500">
                    How do I contact a Jetsetz travel consultant with a
                    question?
                  </Link>
                </Text>
              </Box>
            </Flex>
          </Box>
          <Box paddingBottom={6}></Box>
        </Box>
      </Container>
      <Footer />
    </main>
  );
};

export default ContactUs;
