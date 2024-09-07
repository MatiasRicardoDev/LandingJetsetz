import { Box, Grid, Heading, Image } from '@chakra-ui/react';

import { carRentalBanners, flightBanners, hotelBanners } from './banners';

const BANNERS: { [key: string]: any } = {
  flights: flightBanners,
  hotels: hotelBanners,
  cars: carRentalBanners
};

interface Props {
  type: string;
}

export default function BannerPartners(props: Props) {
  const { type } = props;
  const banners = BANNERS[type] ?? flightBanners;

  return (
    <Box textAlign="center" mx="auto">
      <Heading color="gray.900" as="h5" size={{ base: 'x', md: 'md' }}>
        Compare 100’s of travel sites <br /> to find the best price.
      </Heading>

      <Box
        bgColor="white"
        border="1px solid"
        borderColor="gray.50"
        m="16px"
        maxWidth="400px"
        p="12px 24px"
        rounded="lg">
        <Grid gridTemplateColumns="1fr 1fr">
          {(banners || []).map((banner: any, index: number) => (
            <Image
              key={index}
              src={banner.src}
              alt={banner.alt}
              w={{ base: '150px', md: '160px', xl: '190px' }}
            />
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
