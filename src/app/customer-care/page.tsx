'use client';

import React from 'react';

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

const CustomerCareForm = () => {
  return (
    <main>
      <Header />
      <Container maxW="4xl" my="6">
        <Box id="page-content">
          <Box className="information">
            <Box className="title">
              <Heading as="h2">Customer Care</Heading>
            </Box>
            <Box className="inside page-sections" display="flex">
              {/* Left Section */}
              <Box className="left-section">
                <Box className="contact">
                  <Heading as="h3">EMAIL US</Heading>
                  <form method="post">
                    <Box className="email-form">
                      <Text>* required field</Text>

                      {/* First Name */}
                      <Flex>
                        <Box flex="1" mr="4">
                          <FormControl>
                            <FormLabel>First Name*</FormLabel>
                            <Input name="firstname" type="text" />
                          </FormControl>
                        </Box>

                        {/* Last Name */}
                        <Box flex="1" ml="4">
                          <FormControl>
                            <FormLabel>Last Name*</FormLabel>
                            <Input name="lastname" type="text" />
                          </FormControl>
                        </Box>
                      </Flex>

                      {/* Country */}
                      <FormControl mt="4">
                        <FormLabel>Country</FormLabel>
                        <Input name="country" type="text" />
                      </FormControl>

                      <Flex mt="4">
                        {/* Email Address */}
                        <Box flex="1" mr="4">
                          <FormControl>
                            <FormLabel>Email Address*</FormLabel>
                            <Input name="email-address" type="text" />
                          </FormControl>
                        </Box>

                        {/* Select a Topic */}
                        <Box flex="1" ml="4">
                          <FormControl>
                            <FormLabel>Select a Topic*</FormLabel>
                            <Select name="topic">
                              <option value="Airline Tickets">
                                Airline Tickets
                              </option>
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
                        </Box>
                      </Flex>

                      {/* Question/Comment */}
                      <FormControl mt="4">
                        <FormLabel>Question/Comment:*</FormLabel>
                        <Textarea name="comments" />
                      </FormControl>

                      {/* Submit Button */}
                      <Box mt="4">
                        <Button colorScheme="primary" size="lg">
                          Submit
                        </Button>
                      </Box>
                    </Box>
                  </form>
                </Box>
              </Box>

              {/* Right Section */}
              <Box className="right-section" ml="40px">
                <Text>
                  <strong>
                    Find answers and information on our{' '}
                    <Link href="faq">FAQ page</Link>.
                  </strong>
                </Text>
                <Heading as="h2" mt="4">
                  HOURS OF OPERATION
                </Heading>
                <Text>
                  Call us 24 hours a day, 7 days a week. We are open on all
                  holidays
                </Text>

                <Heading as="h2" mt="4">
                  Questions or comments?
                </Heading>
                <Text>
                  <strong>
                    Give us a call:{' '}
                    <Link href="tel:1-855-538-7389">1-855-538-7389</Link>
                  </strong>
                  <br />
                  Mon - Fri: 8:30am - 5:30pm (PST)
                  <br />
                  Sat: 10:00am - 4:00pm (PST)
                </Text>

                <Heading as="h2" mt="4">
                  Frequently Asked Questions
                </Heading>
                <Text>
                  Below are some of the most common questions we get asked. See
                  if your question has an answer readily available below.
                  <br />
                  <Link href="faq-airlinetickets#6">
                    What if I typed in the wrong travel information?
                  </Link>
                  <br />
                  <Link href="faq-airlinetickets#18">
                    How do I review, confirm or print my travel itinerary?
                  </Link>
                  <br />
                  <Link href="faq-airlinetickets#19">
                    How do I change a flight reservation?
                  </Link>
                  <br />
                  <Link href="faq-airlinetickets#20">
                    How do I cancel my flight reservation?
                  </Link>
                  <br />
                  <Link href="faq-airlinetickets#23">
                    How do I check-in or confirm the status of my flight?
                  </Link>
                  <br />
                  <Link href="faq-hotelrooms#17">
                    How do I change a hotel reservation?
                  </Link>
                  <br />
                  <Link href="faq-hotelrooms#18">
                    How do I cancel a hotel reservation?
                  </Link>
                  <br />
                  <Link href="faq-rentalcars#4">
                    Do I pay for the rental car when I book the reservation?
                  </Link>
                  <br />
                  <Link href="faq-rentalcars#6">
                    What is the age restriction for renting a rental car in the
                    US?
                  </Link>
                  <br />
                  {/* Commented out links */}
                  {/* <Link href="faq-vacationpackages.php#17">How do I change a vacation package?</Link><br /> */}
                  {/* <Link href="faq-vacationpackages.php#18">How do I cancel my vacation package?</Link><br /> */}
                  <Link href="faq-airlinetickets#23">
                    How do I contact a Jetsetz travel consultant with a
                    question?
                  </Link>
                  <br />
                  <br />
                </Text>
              </Box>
            </Box>
          </Box>
          <Box className="clr"></Box>
        </Box>
      </Container>
      <Footer />
    </main>
  );
};

export default CustomerCareForm;
