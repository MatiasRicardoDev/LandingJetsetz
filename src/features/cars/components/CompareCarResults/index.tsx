'use client';

import { useEffect, useState } from 'react';

import { useQuery } from '@tanstack/react-query';

import CompareResults from '@/features/compare-results/CompareResults';
import { useMounted } from '@/hooks/useMounted';
import * as saveOnBrowser from '@/utils/saveOnBrowser';

import { getCompareRentalCar } from '../../services/rentalCar.service';
import { useCarStore } from '../../store/carStore';

export const dynamic = 'force-dynamic';

const getQueryParams = (search: string) => {
  const urlParams = new URLSearchParams(search);

  return Object.fromEntries(urlParams);
};

export default function CompareCarResults() {
  const { updateCarSearchForm } = useCarStore();

  const [query, setQuery] = useState<any>({});
  const isMounted = useMounted();

  useEffect(() => {
    if (isMounted) {
      const params = getQueryParams(window?.location?.search);
      setQuery(params);

      updateCarSearchForm({
        origin: params.origin,
        firstDate: new Date(params.firstDate),
        secondDate: params.secondDate ? new Date(params.secondDate) : undefined,
        pickUpTime: params?.pickUpTime,
        dropOffTime: params?.dropOffTime
      });
    }
  }, [isMounted, updateCarSearchForm]);

  const isKeyExpired = saveOnBrowser.isKeyExpired();

  const publishersQuery = useQuery({
    queryKey: ['compare-hotels', query],
    queryFn: () => getCompareRentalCar(query),
    enabled: !!query?.origin && isKeyExpired,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    retry: 2,
    retryDelay: 1000,
    staleTime: 1000 * 60 * 15 // 15 minutes
  });

  const key = saveOnBrowser.getKey('cars');
  const publishers = isKeyExpired
    ? publishersQuery.data?.compareToItems || []
    : saveOnBrowser.getFromBrowser(key);

  console.log({ key, query, isKeyExpired, publishers });

  return (
    <CompareResults
      query={query}
      isLoading={publishersQuery.isLoading}
      publishers={publishers}
    />
  );
}
