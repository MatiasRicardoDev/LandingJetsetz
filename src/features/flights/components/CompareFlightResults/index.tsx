'use client';

import { useEffect, useState } from 'react';

import { useQuery } from '@tanstack/react-query';

import CompareResults from '@/features/compare-results/CompareResults';
import { getCompareFlights } from '@/features/flights/services/flights.service';
import { useFlightStore } from '@/features/flights/store/flightStore';
import { useMounted } from '@/hooks/useMounted';
import * as saveOnBrowser from '@/utils/saveOnBrowser';

export const dynamic = 'force-dynamic';

const getQueryParams = (search: string) => {
  const urlParams = new URLSearchParams(search);

  return Object.fromEntries(urlParams);
}; 

export default function CompareFlightResults() {
  const { updateFlightSearchForm } = useFlightStore();
  
  const [query, setQuery] = useState<any>({});
  const isMounted = useMounted();

  useEffect(() => {
    if (isMounted) {
      const params = getQueryParams(window?.location?.search);
      setQuery(params);

      updateFlightSearchForm({
        origin: params.origin,
        destination: params?.destination,
        firstDate: new Date(params.firstDate),
        secondDate: params.secondDate ? new Date(params.secondDate) : undefined,
        adults: Number(params.adults ?? 1),
        children: Number(params.children ?? 0),
        tripType: params?.tripType,
        cabinClass: params?.cabinClass
      });
    }
  }, [isMounted, updateFlightSearchForm]);

  const isKeyExpired = saveOnBrowser.isKeyExpired();

  const publishersQuery = useQuery({
    queryKey: ['compare', query],
    queryFn: () => getCompareFlights(query),
    enabled: !!query?.origin && isKeyExpired,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    retry: 2,
    retryDelay: 1000,
    staleTime: 1000 * 60 * 15 // 15 minutes
  });

  const key = saveOnBrowser.getKey();
  const publishers = isKeyExpired
    ? publishersQuery.data?.compareToItems || []
    : saveOnBrowser.getFromBrowser(key);
// name = CheapFlights
  publishers.map((item:any) => {
    console.error(`este es el item`,item);
    
  });
  return (
    <CompareResults
      query={query}
      isLoading={publishersQuery.isLoading}
      publishers={publishers}
    />
  );
}
