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

const UserAgreement = () => {
  return (
    <main>
      <Header />
      <Container maxW="4xl" my="6">
        <Box id="page-content" bg="white">
          <Box maxW="800px" mx="auto">
            <Box paddingTop={6}>
              <Heading as="h2">USER Agreement</Heading>
            </Box>
            <Box className="inside">
              <Text>
                {` Welcome to the Jetsetz.com website (the "Website"). Jetsetz.com is
              owned and operated by Jetsetz Incorporated ("Jetsetz.com",
              "Jetsetz", or "we"). This User Agreement ("Agreement") describes
              your responsibilities of using this Website as well as the limits
              of liability of Jetsetz.com.This Website is intended for personal,
              noncommercial use and is provided solely to assist customers in
              gathering travel information, determining the availability of
              travel-related products and services, making legitimate
              reservationsand transacting business with Jetsetz.com.By accessing
              any areas of this Website, Users ("Users" or "You") agree to be
              legally bound without limitation, qualification, or change and to
              abide by the terms of this User Agreement, our{' '}
              <a href="/terms">Terms and Conditions</a> and our{' '}
              <a href="/privacy">Privacy Policy</a> which constitute our
              Agreement ("Agreement") with you.`}
              </Text>
              <Heading as="h3" mt={4}>
                Use of the Website
              </Heading>
              <Text>
                As a condition of using this Website, you warrant that you are
                at least 18 years of age, you possess the legal authority to
                create a binding legal obligation, you will use this website in
                accordance with this agreement, you will only use this Website
                to make legitimate reservations for you or for another person
                for whom you are legally authorized to act for, and all
                information supplied by you on this Website is true, accurate,
                current and complete. While you may make copies of your travel
                itinerary and related travel documents for travel or services
                purchased through this Website, you agree not to modify, copy,
                distribute, transmit, display, publish, reproduce, license,
                transfer, sell or re-sell any information, software, products,
                or services obtained from this Website.
              </Text>
              <Heading as="h3" mt={4}>
                License
              </Heading>
              <Text>
                Jetsetz grants you a limited, personal, non transferable, non
                sub-licensable, revocable license to access and use this Website
                only as expressly permitted in this Agreement. Except for this
                limited license, we do not grant you a license or any other
                rights with respect to this Website; any rights or license not
                expressly granted herein are reserved. The content and
                information on this Website (including, without limitation,
                price and availability of travel services, as well as the
                infrastructure used to provide such content and information, is
                proprietary to Jetsetz.com and its Suppliers.
              </Text>
              <Heading as="h3" mt={4}>
                Prohibited Activities
              </Heading>
              <Text>
                You shall not use this Website to make any speculative, false or
                fraudulent requests. You understand that it is a violation of
                law to place a request in a false name or with an invalid method
                of payment. Please be aware that even if you do not give us your
                real name, your web browser transmits a unique Internet address
                (IP Address) to us that can be used by law enforcement officials
                to identify you. Fraudulent users will be prosecuted to the
                fullest extent of the law. Jetsetz reserves the right to cancel
                any airline, hotel, rental car reservation, package, cruise or
                any other transaction that it reasonably believes to have been
                fraudulently made, including without limitation, by unauthorized
                use of a credit or debit card.
              </Text>
              <UnorderedList mt={4}>
                <ListItem>
                  Infringe or violate any intellectual property or other right
                  of any entity or person, including, without limitation,
                  copyrights, trademarks, patents, laws governing trade secrets,
                  rights to privacy, or publicity.
                </ListItem>
                <ListItem>
                  Copy or access any content or information of this Website
                  using any robot, spider, scraper or other automated or manual
                  means.
                </ListItem>
                <ListItem>
                  Circumvent or bypass measures employed by this Website to
                  prevent or limit access to this Website.
                </ListItem>
                <ListItem>
                  Deep-link to any portion of this Website for any purpose
                  without express written permission.
                </ListItem>
                <ListItem>
                  Deliver any unlawful postings to or through this Website which
                  advocates illegal activity.
                </ListItem>
                <ListItem>
                  Provide links to or deliver any postings containing material
                  that could be considered harmful, obscene, pornographic,
                  indecent, violent, abusive, profane, lewd, insulting,
                  threatening, harassing, hateful or otherwise objectionable.
                </ListItem>
                <ListItem>
                  Provide links to or deliver any postings containing material
                  that harasses, victimizes, intimidates or degrades an
                  individual or group of individuals on the basis of religion,
                  race, ethnicity, sexual orientation, gender, age, or
                  disability.
                </ListItem>
                <ListItem>
                  Provide links to or deliver any postings containing
                  defamatory, false or libelous material.
                </ListItem>
                <ListItem>
                  Provide links to or deliver any posting that infringes or
                  violates any intellectual property or other right of any
                  entity or person, including, without limitation, copyrights,
                  trademarks, patents, laws governing trade secrets, rights to
                  privacy, or publicity.
                </ListItem>
                <ListItem>
                  Provide links to or deliver any posting to that you do not
                  have a right to make available under law.
                </ListItem>
                <ListItem>
                  Take any action that imposes, or may impose an unreasonable or
                  disproportionately large load on the Jetsetz.com Website.
                </ListItem>
                <ListItem>
                  Impersonate another person or entity, falsely misrepresent
                  your affiliation with a person or entity, or adopt a false
                  identity for the purpose of misleading, deceiving, or
                  defrauding another.
                </ListItem>
                <ListItem>
                  {` Use this Website in any manner which could disable, damage,
                overburden, impair or otherwise interfere with the use of this
                Website or other users' computer equipment, software, hardware,
                or telecommunications equipment.`}
                </ListItem>
                <ListItem>
                  Obtain or attempt to gain unauthorized access to this Website,
                  any related Website or networks connected to this Website,
                  through hacking, password mining, or any other means.
                </ListItem>
                <ListItem>
                  Obtain or attempt to obtain any personal information about
                  others such as email addresses.
                </ListItem>
              </UnorderedList>
              <Heading as="h3" mt={4}>
                Modification
              </Heading>
              <Text>
                Jetsetz.com reserves the right, in its sole discretion, to
                modify, suspend, or terminate this Website and/or any portion
                thereof, including any service or product available through the
                Website, and/or your profile, password, or use of the Website,
                or any portion thereof, at any time for any reason with or
                without notice to you. We recommend that you review these terms
                and conditions periodically. The amended terms shall be
                effective from and after the date they are posted to the site.
                This Agreement may not otherwise be amended except in writing
                signed by both parties.
              </Text>
              <Heading as="h3" mt={4}>
                Termination of Usage
              </Heading>
              <Text>
                Without limitation of any other provisions of this Agreement,
                you may not use this website for any purpose this is unlawful or
                prohibited by this agreement. Your access to this Website may be
                terminated with or without notice, if you fail to comply with
                any provision of this Agreement, or for any other reason, or no
                reason. If at any time you do not agree with any part of this
                agreement, you must discontinue use of this website. In the
                event of termination, you will still be bound by your
                obligations under this Agreement and any Additional Terms,
                including the warranties made by you, and by the disclaimers and
                limitations of liability. Jetsetz.com shall not be liable to you
                or any third-party for any termination of your access to this
                Website.
              </Text>
              <Heading as="h3" mt={4}>
                Intellectual Property
              </Heading>
              <Text>
                {`You, the User, acknowledge that all content included on this
              Website, including the information, data, software, photographs,
              graphs, video, typefaces, graphics, images, illustrations, maps,
              designs, icons, written and other material ("Content") are
              intellectual property and copyrighted works of Jetsetz.com and/or
              its third-party Suppliers including, without limitation, the
              airline, hotels, rental car companies and other Suppliers that
              provide travel or other services through this Website.
              Reproduction or storage of information or works retrieved from
              this Website, in all forms, media and technologies now existing or
              hereafter developed, is subject to the U.S. Copyright Act of 1976,
              Title 17 of the United States Code, or other applicable laws, and
              all applicable international copyright treaties and conventions,
              including without limitation, the Berne Convention and the
              Universal Copyright Convention.`}
              </Text>
              <Text>
                {`"Jetsetz.com" and "Jetsetz" are registered service marks of
              Jetsetz, Inc. The use on this Website of any name, trademark,
              service mark, logo, symbol or other proprietary designation or
              marking of or belonging to any third-party, should not be
              construed as an endorsement or sponsorship of this Website by any
              such third-party, or the participation by such third-party in the
              offering of goods, services or information through this Website.`}
              </Text>
              <Heading as="h3" mt={4}>
                Software Available on this Website
              </Heading>
              <Text>
                {`Any software that is made available to download from this Website
              ("Software") is the copyrighted work of Jetsetz.com, its
              affiliates and/or Suppliers. Use of the Software is governed by
              the terms of the end user license agreement that accompanies or is
              included with the Software ("License Agreement"). You may not
              install or use any Software that is accompanied by or includes a
              License Agreement unless you first agree to the License Agreement
              terms. For any Software not accompanied by a License Agreement,
              Jetsetz.com grants you a limited, personal, non transferable, non
              sub-licensable, revocable license to use the Software for viewing
              and otherwise using this Website in accordance with this Agreement
              and for no other purpose. You agree to not attempt to decipher,
              decompile, disassemble or reverse engineer any of the Software
              comprising or in any way making up a part of this Website.`}
              </Text>
              <Heading as="h3" mt={4}>
                Disclaimer of Warranties
              </Heading>
              <Text>
                {`YOU EXPRESSLY AGREE THAT USE OF THIS WEBSITE IS AT YOUR SOLE RISK.
              THIS WEBSITE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS.
              JETSETZ.COM EXPRESSLY DISCLAIMS ALL WARRANTIES OF ANY KIND,
              WHETHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, THE
              IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
              PURPOSE AND NON-INFRINGEMENT. JETSETZ.COM MAKES NO WARRANTY THAT
              (I) THE WEBSITE WILL MEET YOUR REQUIREMENTS, (II) THE WEBSITE WILL
              BE UNINTERRUPTED, TIMELY, SECURE, OR ERROR-FREE, (III) THE RESULTS
              THAT MAY BE OBTAINED FROM THE USE OF THE WEBSITE WILL BE ACCURATE
              OR RELIABLE, (IV) THE QUALITY OF ANY PRODUCTS, SERVICES,
              INFORMATION, OR OTHER MATERIAL PURCHASED OR OBTAINED BY YOU
              THROUGH THE WEBSITE WILL MEET YOUR EXPECTATIONS, AND (V) ANY
              ERRORS IN THE SOFTWARE WILL BE CORRECTED. NO ADVICE OR
              INFORMATION, WHETHER ORAL OR WRITTEN, OBTAINED BY YOU FROM
              JETSETZ.COM OR THROUGH OR FROM THE WEBSITE SHALL CREATE ANY
              WARRANTY NOT EXPRESSLY STATED IN THIS AGREEMENT.`}
              </Text>
              <Heading as="h3" mt={4}>
                Limitation of Liability
              </Heading>
              <Text>
                JETSETZ.COM SHALL NOT BE LIABLE FOR ANY DIRECT, INDIRECT,
                INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR EXEMPLARY DAMAGES,
                INCLUDING BUT NOT LIMITED TO, DAMAGES FOR LOSS OF PROFITS,
                GOODWILL, USE, DATA OR OTHER INTANGIBLE LOSSES (EVEN IF
                JETSETZ.COM HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH
                DAMAGES), RESULTING FROM: (I) THE USE OR THE INABILITY TO USE
                THE WEBSITE; (II) THE COST OF PROCUREMENT OF SUBSTITUTE GOODS
                AND SERVICES RESULTING FROM ANY GOODS, DATA, INFORMATION OR
                SERVICES PURCHASED OR OBTAINED OR MESSAGES RECEIVED OR
                TRANSACTIONS ENTERED INTO THROUGH OR FROM THE WEBSITE; (III)
                UNAUTHORIZED ACCESS TO OR ALTERATION OF YOUR TRANSMISSIONS OR
                DATA; (IV) STATEMENTS OR CONDUCT OF ANY THIRD PARTY ON THE
                WEBSITE; OR (V) ANY OTHER MATTER RELATING TO THE WEBSITE.
              </Text>
              <Heading as="h3" mt={4}>
                Indemnification
              </Heading>
              <Text>
                {`You agree to indemnify, defend, and hold harmless Jetsetz.com, its
              officers, directors, employees, agents, licensors and suppliers
              (collectively the "Provider") from and against all losses,
              expenses, damages and costs, including reasonable attorneys' fees,
              resulting from any violation of this Agreement or any activity
              related to your account (including negligent or wrongful conduct)
              by you or any other person accessing this Website using your
              account.`}
              </Text>
              <Heading as="h3" mt={4}>
                General
              </Heading>
              <Text>
                {`This Agreement is governed by the laws of the State of Florida,
              U.S.A. You hereby consent to the exclusive jurisdiction and venue
              of courts in Palm Beach County, Florida, U.S.A. in all disputes
              arising out of or relating to the use of this Website. Use of this
              Website is unauthorized in any jurisdiction that does not give
              effect to all provisions of these terms and conditions, including,
              without limitation, this paragraph. You agree that no joint
              venture, partnership, employment, or agency relationship exists
              between you and Jetsetz.com as a result of this Agreement or use
              of this Website. Jetsetz.com's performance of this Agreement is
              subject to existing laws and legal process, and nothing contained
              in this Agreement is in derogation of Jetsetz.com's right to
              comply with governmental, court, and law enforcement requests or
              requirements relating to your use of this Website or information
              provided to or gathered by Jetsetz.com with respect to such use.
              If any part of this Agreement is determined to be invalid or
              unenforceable pursuant to applicable law including, but not
              limited to, the warranty disclaimers and liability limitations set
              forth above, then the invalid or unenforceable provision will be
              deemed superseded by a valid, enforceable provision that most
              closely matches the intent of the original provision and the
              remainder of the Agreement shall continue in effect. This
              Agreement constitutes the entire agreement between the user and
              Jetsetz.com with respect to this Website and it supersedes all
              prior or contemporaneous communications and proposals, whether
              electronic, oral, or written, between the user and Jetsetz.com
              with respect to this Website. A printed version of this Agreement
              and of any notice given in electronic form shall be admissible in
              judicial or administrative proceedings based upon or relating to
              this Agreement to the same extent and subject to the same
              conditions as other business documents and records originally
              generated and maintained in printed form.`}
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

export default UserAgreement;
