'use client';

import { useEffect, useState } from 'react';

import { useQuery } from '@tanstack/react-query';

import CompareResults from '@/features/compare-results/CompareResults';
import { useMounted } from '@/hooks/useMounted';
import * as saveOnBrowser from '@/utils/saveOnBrowser';

import { getCompareHotels } from '../../services/hotels.service';
import { useHotelStore } from '../../store/hotelStore';

export const dynamic = 'force-dynamic';

const getQueryParams = (search: string) => {
  const urlParams = new URLSearchParams(search);

  return Object.fromEntries(urlParams);
};

export default function CompareHotelsResults() {
  const { updateHotelSearchForm } = useHotelStore();

  const [query, setQuery] = useState<any>({});
  const isMounted = useMounted();

  useEffect(() => {
    if (isMounted) {
      const params = getQueryParams(window?.location?.search);
      setQuery(params);

      updateHotelSearchForm({
        origin: params.origin,
        firstDate: new Date(params.firstDate),
        secondDate: params.secondDate ? new Date(params.secondDate) : undefined,
        adults: Number(params.adults ?? 1),
        children: Number(params.children ?? 0),
        rooms: Number(params.rooms ?? 1)
      });
    }
  }, [isMounted, updateHotelSearchForm]);

  const isKeyExpired = saveOnBrowser.isKeyExpired();

  const publishersQuery = useQuery({
    queryKey: ['compare-hotels', query],
    queryFn: () => getCompareHotels(query),
    enabled: !!query?.origin && isKeyExpired,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    retry: 2,
    retryDelay: 1000,
    staleTime: 1000 * 60 * 15 // 15 minutes
  });

  const key = saveOnBrowser.getKey('hotels');
  const publishers = isKeyExpired
    ? publishersQuery.data?.compareToItems || []
    : saveOnBrowser.getFromBrowser(key);

  console.log({ query });

  return (
    <CompareResults
      query={query}
      isLoading={publishersQuery.isLoading}
      publishers={publishers}
    />
  );
}
