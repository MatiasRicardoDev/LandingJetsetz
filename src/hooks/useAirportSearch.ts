'use client';

import { useDeferredValue, useEffect, useState } from 'react';

import { useQuery } from '@tanstack/react-query';

import { searchAirportService } from '@/services/searchAirport.service';
import { Suggestion } from '@/types/suggestion';

import useIpInfo from './useIpInfo';

export default function useAirportSearch() {
  // const { ipInfo } = useJetsetzStore();
  const { ipInfo } = useIpInfo();

  const [airportNearToUser, setAirportNearToUser] = useState<Suggestion | null>(
    null
  );
  const [search, setSearch] = useState('');
  const q = useDeferredValue(search);

  const { isLoading, data, error } = useQuery({
    queryKey: ['search/airports', q],
    enabled: q.length > 2,
    queryFn: async () => searchAirportService(q),
    retry: 2,
    retryDelay: 800
  });

  const suggestionNearToUser = useQuery({
    queryKey: ['search/airports', ipInfo?.city],
    enabled: !!ipInfo?.city,
    queryFn: async () => searchAirportService(ipInfo?.city ?? ''),
    retry: 2,
    retryDelay: 800,
    staleTime: 1000 * 60 * 60 * 24 // 24 hours
  });

  useEffect(() => {
    if (!suggestionNearToUser.isLoading && suggestionNearToUser.data) {
      setAirportNearToUser(suggestionNearToUser.data[0]);
    }
  }, [suggestionNearToUser]);

  return {
    airportNearToUser,
    error,
    isLoading,
    setSearch,
    suggestions: data
  };
}
