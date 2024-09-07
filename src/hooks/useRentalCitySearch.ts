'use client';

import { useDeferredValue, useState } from 'react';

import { useQuery } from '@tanstack/react-query';

import { searchRentalCityService } from '@/services/searchRentalCity.service';

import useIpInfo from './useIpInfo';

export default function useRentalCitySearch() {
  // const { ipInfo } = useJetsetzStore();
  const { ipInfo } = useIpInfo();
  const [search, setSearch] = useState('');
  const q = useDeferredValue(search);

  const { isLoading, data, error } = useQuery({
    queryKey: ['search/city', q],
    enabled: q.length > 2,
    queryFn: async () => searchRentalCityService(q),
    retry: 2,
    retryDelay: 800
  });

  return {
    error,
    isLoading,
    setSearch,
    suggestions: data
  };
}
