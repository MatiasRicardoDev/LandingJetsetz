import { useQuery } from '@tanstack/react-query';

import { useJetsetzStore } from '@/store/jetsetzStore';

export default function useIpInfo() {
  const { ipInfo, setIpInfo } = useJetsetzStore();

  const { isLoading, error } = useQuery({
    queryKey: ['user-ip-info'],
    enabled: !ipInfo,
    queryFn: async () => {
      const res = await fetch('https://ipinfo.io/geo?token=9b535e2dc9c0af');
      const rJson = await res.json();

      setIpInfo(rJson);

      return res;
    },
    retry: 2,
    retryDelay: 1000,
    staleTime: 1000 * 60 * 15 // 15 minutes
  });

  return {
    isLoading,
    error,
    ipInfo
  };
}
