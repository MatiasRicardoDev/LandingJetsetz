'use client';

import { memo, useMemo } from 'react';

import { Box, BoxProps } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import { format, parse } from 'date-fns';

import InlineAds from '@/components/InlineAds';
import { getInlineFlightsAds } from '@/features/flights/services/flights.service';
import { useFlightStore } from '@/features/flights/store/flightStore';
import { openDeepLinkTab } from '@/features/flights/utils/deepLinks';

interface Props extends BoxProps {
  maxItems?: number;
}

export default memo(function FlightInlineAds({ maxItems, ...rest }: Props) {
  const { flightSearchForm: params } = useFlightStore();

  const inlineAdsQuery = useQuery({
    queryKey: ['inlineAds', params],
    queryFn: () => {
      const firstDate =
        typeof params?.firstDate === 'object'
          ? params?.firstDate
          : parse(params?.firstDate ?? '', 'yyyy-MM-dd', new Date());

      const secondDate =
        typeof params?.secondDate === 'object'
          ? params?.secondDate
          : parse(params?.secondDate ?? '', 'yyyy-MM-dd', new Date());

      return getInlineFlightsAds({
        ...params,
        type: 'flights',
        firstDate: firstDate ? format(firstDate, 'MM/dd/yyyy') : undefined,
        secondDate: secondDate ? format(secondDate, 'MM/dd/yyyy') : undefined
      });
    },
    enabled: !!(params && params?.firstDate),
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    retry: 2,
    retryDelay: 1000,
    staleTime: 1000 * 60 * 5 // 5 minutes
  });

  const inlineItems = useMemo(() => {
    if (!params) return [];

    const { deepLinkCheapflights, deepLinkUrl } = openDeepLinkTab(params);

    let items = (inlineAdsQuery.data?.inlineItems || []).slice(0, 3);

    items.push({
      rank: 3,
      site: 'cheapflights.com',
      description: 'Cheap flights, hotels, rental cars and travel deals.',
      headline: 'Cheapflights',
      fullLogoUrl: '/images/cheapflights_logo.png',
      fullLink: deepLinkCheapflights ?? '',
      productType: 'flight',
      cpcEstimate: {
        price: 0.001,
        currency: 'USD',
        localizedPrice: '$0.001'
      }
    });

    if (items.length < 4) {
      items.push({
        rank: 4,
        site: 'kayak.com',
        description: "Compare flights from 100's of travel sites.",
        headline: 'Kayak',
        fullLogoUrl: '/images/kayak_logo.png',
        fullLink: deepLinkUrl ?? '',
        productType: 'flight',
        cpcEstimate: {
          price: 0.001,
          currency: 'USD',
          localizedPrice: '$0.001'
        }
      });
    }

    return items;
  }, [inlineAdsQuery.data?.inlineItems, params]);
  
  return (
    <Box>
      {inlineItems?.length > 0 && (
        <Box {...rest}>
          <InlineAds
            inlineItems={inlineItems}
            isLoading={inlineAdsQuery.isLoading}
            maxItems={maxItems}
          />
        </Box>
      )}
    </Box>
  );
});
