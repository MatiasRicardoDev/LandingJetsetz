'use client';

import { useDeferredValue, useState } from 'react';

import { useQuery } from '@tanstack/react-query';

import { searchCityService } from '@/services/searchCity.service';

export default function useCitySearch() {
  const [search, setSearch] = useState('');
  const q = useDeferredValue(search);

  const { isLoading, data, error } = useQuery({
    queryKey: ['search/city', q],
    enabled: q.length > 2,
    queryFn: async () => searchCityService(q),
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
