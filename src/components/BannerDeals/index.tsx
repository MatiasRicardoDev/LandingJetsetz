import {
  Box,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Link,
  Spinner,
  Text
} from '@chakra-ui/react';

import { getBannerDeal } from './deals.data';

interface Props {
  destinationName: string;
  type?: 'flight' | 'hotel' | 'rentalCar';
}

export default function BannerDeals({
  destinationName,
  type = 'flight'
}: Props) {
  const data = getBannerDeal(destinationName, type);

  if (!data) {
    return <Spinner />;
  }

  return (
    <Box bg="mystic.500" py={16}>
      <Container maxW="6xl">
        <Grid gridTemplateColumns={{ base: '1fr', lg: 'auto auto' }} gap={4}>
          <Box>
            <Heading as="h3" size="lg" textAlign="left" mb={8}>
              {data?.title}
            </Heading>

            <Grid>
              <GridItem
                display="grid"
                gap={2}
                gridTemplateColumns={{
                  base: 'repeat(1, 1fr)',
                  lg: 'repeat(2, 1fr)'
                }}>
                {data?.items?.map((deal, index) => (
                  <Box key={index}>
                    <Heading as="h3" size="md" mb={2}>
                      {deal.heading}
                    </Heading>
                    <Text>{deal.description}</Text>
                  </Box>
                ))}
              </GridItem>
            </Grid>
          </Box>

          <Flex justifyContent={{ base: 'center', lg: 'end' }}>
            <Link href={data?.bannerUrl} isExternal rounded="16px">
              <Image
                src={data?.bannerImage}
                alt={data?.bannerAlt}
                rounded="16px"
                border="1px solid #2d80ab"
              />
            </Link>
          </Flex>
        </Grid>
      </Container>
    </Box>
  );
}
