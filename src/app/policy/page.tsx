'use client';

import {
  Box,
  Container,
  Heading,
  ListItem,
  Text,
  UnorderedList
} from '@chakra-ui/react';

import { Footer } from '@/components/Footer';
import Header from '@/components/Header';

const PrivacyPolicy = () => {
  return (
    <main>
      <Header />
      <Container maxW="4xl" my="6">
        <Box id="page-content" bg="white">
          <Box maxW="800px" mx="auto">
            <Box paddingTop={6}>
              <Heading as="h2">PRIVACY POLICY</Heading>
            </Box>
            <Box className="inside">
              <Text>
                We understand that booking travel online involves a significant
                amount of trust on your part. We value your trust, so ensuring
                the security and confidentiality of your personal information is
                the highest priority for us. This Privacy Policy sets forth our
                policies regarding the collection, use, and protection of
                personal information of those using the Jetsetz.com Website.
              </Text>
              <Heading as="h3" mt={4}>
                INFORMATION WE MAY COLLECT FROM YOU
              </Heading>
              <Text>
                Personal information means information that can be linked to a
                specific individual, such as a name, address, telephone number,
                email address, or credit card number. Below is a list of some of
                the ways in which we may collect your personal information.
              </Text>
              <Heading as="h3" mt={4}>
                Registration and Profile Information
              </Heading>
              <Text>
                If you choose to become a registered member of Jetsetz.com, you
                will provide your name, address, telephone number, e-mail
                address, a unique login name, password, and password validation,
                and a password hint to help you remember your password. This
                information is collected on the registration form to help us
                complete your air, hotel, car, and other travel reservations.
                This information also allows us to contact you for customer
                service purposes, if necessary. In addition, we need your e-mail
                address to confirm your new member registration and each
                reservation you transact on our site.
              </Text>
              <Heading as="h3" mt={4}>
                Email Alerts and Newsletters
              </Heading>
              <Text>
                You may also choose to subscribe to Jetsetz.com Email Alerts and
                Newsletter. By providing us with your email address, we can
                provide you with updates about fare sales in your area, special
                offers, new Jetsetz services. We will also send you our
                Newsletter on occasion to update you on new features added to
                the Jetsetz.com Website. Your e-mail address and zip code are
                necessary to receive these Emails and Newsletters.
              </Text>
              <Heading as="h3" mt={4}>
                Companion Information
              </Heading>
              <Text>
                When you make a reservation for someone else through this
                website, we will request personal information and travel
                preferences about that individual. You should obtain the consent
                of other individuals prior to providing us with their personal
                information and travel preferences, as any access to view or
                change their information will be available only through your
                account.
              </Text>
              <Heading as="h3" mt={4}>
                TSA Secure Flight Information
              </Heading>
              <Text>
                Under the Transportation Security Administration (TSA) Secure
                Flight program most air passengers are now required to provide
                their full name, date of birth, and gender (plus redress number,
                when applicable). You currently do not need to provide this
                information while making your trip reservation, but you must
                provide the information to your airline(s) sometime before your
                trip. If you provide date of birth, gender, or redress number
                during the booking process, we will not permanently store this
                personal information for any travelers, aside from the required
                entries in the air reservation record. We will not disclose this
                information to any third parties other than the applicable
                airline(s). If you are making a reservation for travelers other
                than yourself, you should make sure each traveler agrees, in
                advance, that you may disclose their personal information to us.
              </Text>
              <Heading as="h3" mt={4}>
                Automatic Information
              </Heading>
              <Text>
                We automatically collect some information about your computer
                when you visit this Website. Some of the information we will
                collect will be your IP address, Web browser software, and
                referring website. We also may collect information about your
                online activity, such as trips viewed and bookings made. Our
                goals in collecting this automatic information include helping
                customize your user experience and preventing potential fraud.
              </Text>
              <Heading as="h3" mt={4}>
                Cookies
              </Heading>
              <Text>
                {`
                To serve you faster and provide a better quality user experience,
              we use "cookie" technology and allow third parties to use cookies
              on our Website. Cookies are small bits of code, usually stored on
              a user's computer hard drive, which enable a Website to remember
              information about the user's visit to the Website. Jetsetz.com
              cookies have many benefits to enhance your experience on our
              Website. The third-party cookies used on our site are also
              designed to improve your Website experience by facilitating the
              receipt of targeted advertisements while on our site and while you
              are viewing other Websites. The Help portion of the toolbar on
              most browsers will tell you how to prevent your browser from
              accepting new cookies or how to disable cookies altogether. Please
              note that if you refuse to accept cookies, you may not be able to
              access many of the travel tools offered on our site.
              `}
              </Text>
              <Heading as="h3" mt={4}>
                HOW WE USE YOUR INFORMATION
              </Heading>
              <Text>
                The primary reason that we use your personal information is to
                communicate with you and to respond to your questions and
                comments. In addition, we use your personal information for the
                following general purposes:
              </Text>
              <UnorderedList mt={4}>
                <ListItem>
                  Complete a travel booking that you conducted on the Website.
                </ListItem>
                <ListItem>Provide travel confirmations and updates.</ListItem>
                <ListItem>
                  Provide you with the products and services you requested.
                </ListItem>
                <ListItem>Allow you to manage your account.</ListItem>
                <ListItem>Provide travel notifications.</ListItem>
                <ListItem>
                  Notify you about special offers and products or services that
                  may be of interest to you.
                </ListItem>
                <ListItem>
                  Customize your experience with this Website.
                </ListItem>
                <ListItem>
                  Resolve disputes, collect fees, or troubleshoot problems.
                </ListItem>
                <ListItem>
                  Prevent potentially prohibited or illegal activities.
                </ListItem>
              </UnorderedList>
              <Heading as="h3" mt={4}>
                WHO WE MIGHT SHARE YOUR INFORMATION WITH
              </Heading>
              <Text>
                Jetsetz.com may share your Personal Data with its subsidiaries
                and with third parties as described in the categories below:
              </Text>
              <Heading as="h3" mt={4}>
                Travel Agents
              </Heading>
              <Text>
                {` Many of the operations we perform require us to hire employees
              ("Travel Agents") to help us perform the tasks associated with
              booking travel. Some of our Travel Agents handle credit card
              transactions and provide customer service. The Travel Agents we
              employ to help us with these tasks have access to Personal Data to
              perform their functions, but may not use it for other purposes.
              Jetsetz.com requires all Travel Agents to whom Personal Data is
              disclosed to enter into confidentiality agreements and to agree to
              act in a manner consistent with the relevant principles
              articulated in this Policy.`}
              </Text>
              <Heading as="h3" mt={4}>
                Suppliers
              </Heading>
              <Text>
                {`Travel Suppliers ("Suppliers") are the airlines, hotels, rental
              car companies, and activity providers, who fulfill your travel
              reservations. Throughout this site, all services provided by
              Travel Suppliers are described as such. We do not place
              limitations on our Suppliers' use or disclosure of your personal
              information. Therefore, we encourage you to review the privacy
              policies of any travel supplier whose products you purchase
              through this site. Please note that these suppliers also may
              contact you as necessary to obtain additional information about
              you, facilitate your travel reservation, or respond to a review
              you may submit.`}
              </Text>
              <Heading as="h3" mt={4}>
                Third-party vendors
              </Heading>
              <Text>
                Third-party vendors provide services or functions on our behalf,
                including airline ticketing and fulfillment, credit card
                processing, business analytics, customer service, marketing,
                distribution of surveys or sweepstakes programs, and fraud
                prevention. We may also authorize third-party vendors to collect
                information on our behalf, including as necessary to operate
                features of our Website or to facilitate the delivery of online
                advertising tailored to your interests. Third-party vendors have
                access to and may collect information only as needed to perform
                their functions and are not permitted to share or use the
                information for any other purpose.
              </Text>
              <Heading as="h3" mt={4}>
                Business partners
              </Heading>
              <Text>
                Business partners are companies with whom we may jointly offer
                products or services with, or whose products or services may be
                offered on our Website. If you choose to access these optional
                services, we may share information about you, including your
                personal information, with those partners. Please note that we
                do not control the privacy practices of these third-party
                business partners.
              </Text>
              <Heading as="h3" mt={4}>
                Referring websites
              </Heading>
              <Text>
                {`If you were referred to this Website from another site, we may
              share some information about you with that referring website. We
              have not placed limitations on the referring websites' use of your
              personal information and we encourage you to review the privacy
              policies of any website that referred you here. Other than as set
              out above, you will be notified when personal information about
              you will be shared with third parties, and you will have an
              opportunity to choose not to have us share such information.`}
              </Text>
              <Heading as="h3" mt={4}>
                PROTECTING YOUR PERSONAL DATA
              </Heading>
              <Text>
                {`We want you to feel confident about using this website to make
              your travel arrangements and we are committed to protecting the
              information we collect. While no website can guarantee security,
              we have implemented the appropriate administrative, technical, and
              physical security procedures to help protect the personal
              information you provide to us: 1) only authorized employees are
              permitted to access personal information, and they only may do so
              for permitted business functions; 2) we use encryption when
              transmitting your sensitive personal information between your
              system and ours; 3) we employ firewalls and intrusion detection
              systems to help prevent unauthorized persons from gaining access
              to your information.`}
              </Text>
              <Text>
                To prevent unauthorized access, maintain data accuracy, and
                ensure correct use of Personal Data, we will employ reasonable
                and current Internet security methods and technologies. To
                protect credit card transactions while in transit, Jetsetz.com
                currently uses Secure Socket Layer technology to encrypt
                Personal Data.
              </Text>
              <Heading as="h3" mt={4}>
                HOW YOU CAN ACCESS OR CHANGE YOUR INFORMATION
              </Heading>
              <Text>
                {`Jetsetz.com understands that you may want to change, access, or
              delete your Personal Information. Jetsetz registered users can
              access and update their contact information by visiting the
              Jetsetz.com "My Account" page. Jetsetz email subscribers can also
              access and update their subscription choices through Subscription
              Management links found in the footer of any Jetsetz email. To
              protect your privacy, we will verify your identity before granting
              you access or making changes to your Personal Information.`}
              </Text>
              <Text>
                Should you have any questions, concerns, or comments, please
                click here. Jetsetz.com Incorporated is located at 1418 Pacific
                Beach Dr. in San Diego, CA 92109.
              </Text>
              <Text>
                This Privacy Policy is effective as of February 18, 2010.
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

export default PrivacyPolicy;
