'use client';

import { Grid, Skeleton, useMediaQuery } from '@chakra-ui/react';
import { motion } from 'framer-motion';

import CardAds from '@/components/CardAds';

export default function InlineAds({
  maxItems = 4,
  inlineItems,
  isLoading = false
}: {
  maxItems?: number;
  inlineItems?: any;
  isLoading?: boolean;
}) {
  const [isLargerThan1024] = useMediaQuery('(min-width: 1024px)');

  if (isLoading) {
    return (
      <Grid
        as={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.3 } }}
        gridTemplateColumns="repeat(2, 1fr)"
        gap="16px">
        <Skeleton height="84px" key="sk-1" />
        <Skeleton height="84px" key="sk-2" />
      </Grid>
    );
  }

  return (
    <Grid
      justifyContent="center"
      gridAutoRows="1fr"
      gridTemplateColumns={[
        '1fr',
        '1fr',
        '1fr',
        'repeat(2, minmax(390px, 1fr))'
      ]}
      gap="18px">
      {(inlineItems || [])
        .slice(0, isLargerThan1024 ? 4 : 2)
        .slice(0, maxItems)
        .map((item: any, index: number) => {
          const logoUrl =
            item.fullLogoUrl ?? `https://www.kayak.com${item.logoUrl}`;
          const link =
            item.fullLink ?? `https://www.kayak.com${item?.deepLink}`;

          return (
            <motion.div
              key={`inline-${link}-${index}`}
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { duration: 0.3, delay: index }
              }}
              style={{ height: '84px' }}>
              <CardAds // Aca guardamos la URL
                logoUrl={logoUrl}
                headline={item.headline}
                description={item.description}
                link={link}
                bookingButtonText={item.bookingButtonText}
              />
            </motion.div>
          );
        })}
    </Grid>
  );
}
