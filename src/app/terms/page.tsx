'use client';

import {
  Box,
  Link as ChakraLink,
  Container,
  Heading,
  Text
} from '@chakra-ui/react';

import { Footer } from '@/components/Footer';
import Header from '@/components/Header';

const TermsAndConditions = () => {
  return (
    <main>
      <Header />
      <Container maxW="4xl" my="6">
        <Box id="page-content" bg="white">
          <Box maxW="800px" mx="auto">
            <Box paddingTop={6}>
              <Heading as="h2" size="lg">
                TERMS & CONDITIONS
              </Heading>
            </Box>
            <Box className="inside">
              <Text>
                {`Welcome to the Jetsetz.com website (the "Website"). Jetsetz.com is
              owned and operated by Jetsetz Incorporated ("Jetsetz.com",
              "Jetsetz", or "we").`}
              </Text>
              <Text>
                {`This Agreement describes the Terms and Conditions, your
              responsibilities as well as the limits of liability of
              Jetsetz.com. This Website is intended for personal, noncommercial
              use and is provided solely to assist customers in gathering travel
              information, determining the availability of travel-related
              products and services, making legitimate reservations and
              transacting business with Jetsetz.com and/or its third-party
              travel partners including, without limitation, the airlines,
              hotels, rental car companies, and any other companies that provide
              travel, or other services through this Website (Collectively,
              "Suppliers"). By accessing any areas of this Website, Users
              ("Users" or "You") agree to be legally bound without limitation,
              qualification, or change and to abide by these Terms and
              Conditions, our User Agreement and our Privacy Policy which
              constitute our Agreement ("Agreement") with you.`}
              </Text>
              <Text>
                {`When you purchase an airline ticket, hotel room, rental car,
              vacation package or travel insurance on Jetsetz.com, you agree to
              abide by the terms and conditions of this agreement with
              Jetsetz.com and any Supplier with whom you elect to deal with.
              This includes, but is not limited to, payment of all amounts when
              due and compliance with the Supplier's rules and restrictions
              regarding availability and use of fares, products, or services.
              You acknowledge that any violation of these terms and conditions
              may result in cancellation of your reservation or purchase, in
              your being denied access to the applicable travel product or
              services, in your forfeiting of any monies paid for such
              reservations, any costs incurred as a result of such violation,
              including legal fees. You shall be completely responsible for all
              charges, fees, duties, taxes, and assessments arising out of the
              use of this Website.`}
              </Text>

              <Heading as="h3" size="md">
                Booking Information
              </Heading>
              <Text>
                Jetsetz does not require registration for you to access or use
                the Website; however, if you request to purchase an airline
                ticket, hotel room, rental car, vacation package or travel
                insurance through this website, you will be asked to provide
                certain information needed to process your request. Such
                information may include: your name, phone number billing
                address, credit card information and email address. In providing
                such information you agree to abide to our{' '}
                <ChakraLink href="#">Privacy Policy</ChakraLink> which
                constitutes our Agreement with you regarding your personal
                information.
              </Text>
              <Text>
                We endeavor to publish and maintain accurate prices and
                information for the services we offer. Our Suppliers provide us
                with pricing, availability and other information related to
                these services. At times, the airlines may update their seat
                inventory in the booking system during the time of purchase,
                which may result in a fare discrepancy. If this occurs, you will
                be notified of the change in fare with an error message and the
                updated price. You will be provided the opportunity to review
                the itinerary with the updated ticket price prior to the
                purchase and issuance of the airline ticket. In the event that a
                service is listed or provided to us at an incorrect price or
                with incorrect information due to typographical error or other
                error in pricing or service information received from our
                Suppliers, we retain the right to refuse or cancel any requests
                placed for such service. We shall have the right to refuse or
                cancel any such requests whether or not the order has been
                confirmed and/or your credit card charged. If your credit card
                has already been charged for the purchase and your request is
                canceled because of incorrect Supplier information, we will
                promptly issue a credit to your credit card account in the
                amount of the charge.
              </Text>

              <Heading as="h3" size="md">
                Airlines Terms & Conditions
              </Heading>
              <Text>
                All airline tickets sold through this Website are subject to the
                published conditions of carriage and rules of each applicable
                airline, including, without limitation, baggage fees, change or
                cancellation fees, seat assignments, seat re-accommodations,
                frequent-flyer mile accrual, schedule changes, itinerary
                changes, eligibility for upgrades and rules regarding standby
                flights, check-in policies, etc. The contract of carriage in use
                by the applicable airline, when issued, shall be between the
                applicable airline and the passenger. Airlines retain the right
                to adjust flight times and schedules at any time and schedule
                changes can result in an itinerary that falls outside of
                contractual agreements. Jetsetz is not liable for any additional
                charges incurred by the airlines. Any additional charges
                incurred as a result of conditions of carriage are between you
                and the airline including and not limited to baggage fees. It is
                your responsibility to verify the baggage fees and restrictions
                directly with the carrier. It is also your responsibility to
                check-in for your domestic or international flights within
                reason to be able to obtain your boarding passes and go through
                security. It is recommended to check in at least 2 1/2 - 3 hours
                prior to departure for international flights and at least 2
                hours for domestic flights. Jetsetz is not responsible for fees
                associated with your tickets should you arrive later than the
                required check-in. The airlines have the right to deny you
                boarding if you arrive late or for any particular reason
                concerning your flights. Jetsetz will not be held liable should
                you be denied boarding for any reason.
              </Text>
              <Text>
                {`When you purchase and airline ticket through this website, you
              agree to be bound by the terms, conditions, rules and restrictions
              set by the airlines, including but not limited to compliance with
              all rules and restrictions regarding availability of fares,
              products, or services, restrictions against back to back ticketing
              (purchasing two or more tickets with overlapping travel dates in
              order to circumvent minimum stay requirements) and hidden city
              ticketing (purchasing tickets including segments which the
              purchaser does not intend to use in order to circumvent an air
              carrier's pricing structure and round trip for one-way ticketing).
              The use of certain ticketing practices may result in such actions
              including the cancellation of the ticket, denied boarding,
              revocation of frequent flier miles and other benefits, additional
              charges to your credit card, additional charges collected at the
              airport, or future invoicing. &nbsp;You agree to the payment of
              all amounts when due (including additional taxes, fees and costs
              which may not be included in the quoted fare) and compliance with
              all rules regarding the availability of fares, products or
              services, including penalty fees arising from your failure to
              comply with such rules. Additionally, you agree to pay all duties,
              taxes, and related charges arising out of your use of this Website
              and the services provided, herein. You permit Jetsetz to charge
              the credit card provided for the payment of penalties arising from
              your failure to comply with airline tariff rules. Such payment
              will be collected without additional notice.`}
              </Text>

              <Heading as="h3" size="md">
                Airline Ticket Price & Purchase Conditions
              </Heading>
              <Text>
                The total price displayed on the website includes the cost of
                the airline ticket plus all applicable taxes and fees to be
                collected by the airline and remitted to the government. The
                total price is based on the total price per person. For multiple
                passengers, the total price per person is the total price for
                all passengers divided by the total amount of passengers. The
                total price per person is the same price as the airline ticket
                price that is displayed on the check-out page. Any additional
                fees charged at the airport by the airlines (baggage fees,
                upgrade fees, special needs etc.) are between you and the
                airline and are not the responsibility of Jetsetz. Jetsetz is
                not liable for the notification or reimbursement of any these
                additional fees charged by the airlines to you.
              </Text>
              <Text>
                When you purchase an airline ticket through this website, you
                agree that the total amount of your request, including all fees,
                taxes and surcharges, will be charged to the credit card account
                number that you supply to us. Once you have purchased an airline
                ticket through the website, all sales are final and you are
                responsible to Jetsetz for the full cost of the airline
                ticket(s) and the subsequent charge on your credit / debit card.
                By purchasing an airline ticket(s) through this website, you
                accept that the total price displayed at the time of booking is
                valid and you agree to pay for that valid charge on your credit
                or debit card. By agreeing to purchase an airline ticket through
                this website, you accept that the charge is valid and that you
                will not dispute the credit card charge at a later date with
                your credit card company. If you dispute the valid charge at a
                later date with your credit card company and create a
                charge-back, you will create additional work for Jetsetz to
                verify the valid charge. To compensate Jetsetz for the extra
                work necessary to verify the valid charge with the credit card
                company, you agree that Jetsetz will charge an additional
                $200.00 per ticket processing fee to dispute the charge back
                with your credit card company. If legal action is necessary to
                dispute the charge-back, you agree to pay Jetsetz for the cost
                of the airline ticket(s), plus all additional processing fees
                and any legal fees incurred to recoup the cost of the airline
                ticket on behalf of the airlines.
              </Text>

              <Heading as="h3" size="md">
                Airline Penalties
              </Heading>
              <Text>
                Jetsetz does not charge penalties for the cancellation or change
                of airline tickets. The airlines do have the right to charge
                penalties for the cancellation or change of airline tickets. The
                fees that the airlines charge for changes and cancellations are
                determined by the airline and not by Jetsetz. Jetsetz cannot
                provide a fee for the change or cancellation of an airline
                ticket until you select the terms of the airline ticket that you
                have selected. To obtain the change or cancellation fees,
                Jetsetz will provide the confirmation number of your reservation
                as well as the airline record locator and then provide that
                information to the airline to obtain the penalty fee. If you
                cancel or change an airline ticket, the funds will be added to
                your credit / debit card and will be returned to the credit /
                debit card that was used to purchase the ticket within 1-3
                business days of the return. If you cancel or change an airline
                ticket, you will be responsible for the cancellation or change
                fee charged by the airlines. To the extent that you are
                responsible for the cancellation or change fee, you agree that
                Jetsetz will charge a $200.00 per ticket cancellation or change
                processing fee to your credit / debit card that you used to
                purchase the airline ticket for a cancellation or change. For
                more information on these penalties and how to change or cancel
                an airline ticket, please contact the airlines directly.
              </Text>

              <Heading as="h3" size="md">
                How to Contact Jetsetz.com
              </Heading>
              <Text>
                For more information about Jetsetz.com or to book a flight
                please call us toll-free at 1-800-247-1403. Our Customer Service
                team is available to assist you 24 hours a day, 7 days a week.
                For the hearing impaired, please call our TTY number at
                1-800-873-1404. For all other inquiries, please call us or email
                us at customerservice@jetsetz.com.
              </Text>

              <Heading as="h3" size="md">
                We reserve the right to make changes to our Website and these
                terms and conditions at any time and without notice.
              </Heading>
              <Text>
                Jetsetz.com reserves the right to change or modify the terms and
                conditions of our website without notice or liability to you. If
                any term or condition herein shall be held to be invalid or
                unenforceable, such term or condition shall be deemed stricken
                and the remaining terms and conditions shall be enforced. You
                acknowledge and agree that no other promises, representation, or
                undertaking shall be binding upon Jetsetz.com unless
                specifically stated herein.
              </Text>
            </Box>
          </Box>

          <Box paddingBottom={6}></Box>
          {/* <Box className="bottom">
          <OrderedList>
            <ListItem>
              Google Review:{' '}
              <ChakraLink
                href="https://www.google.com/"
                target="_blank"
                rel="noopener noreferrer">
                Review
              </ChakraLink>
            </ListItem>
            <ListItem>
              Facebook Review:{' '}
              <ChakraLink
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer">
                Review
              </ChakraLink>
            </ListItem>
            <ListItem>
              Yelp Review:{' '}
              <ChakraLink
                href="https://www.yelp.com/"
                target="_blank"
                rel="noopener noreferrer">
                Review
              </ChakraLink>
            </ListItem>
            <ListItem>
              Jetsetz Privacy Policy:{' '}
              <ChakraLink href="#">Privacy Policy</ChakraLink>
            </ListItem>
          </OrderedList>
        </Box> */}
        </Box>
      </Container>
      <Footer />
    </main>
  );
};

export default TermsAndConditions;
