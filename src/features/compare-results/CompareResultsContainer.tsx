'use client';

import { Suspense } from 'react';

import { useSearchParams } from 'next/navigation';

import CompareCarResults from '@/features/cars/components/CompareCarResults';
import CompareFlightResults from '@/features/flights/components/CompareFlightResults';
import CompareHotelsResults from '@/features/hotels/components/CompareHotelsResults';

export default function CompareResultsContainer() {
  const searchParams = useSearchParams();
  const type = searchParams.get('type');

  return (
    <Suspense>
      {type === 'hotels' && <CompareHotelsResults />}
      {type === 'cars' && <CompareCarResults />}
      {!type || type === 'flights' ? <CompareFlightResults /> : null}
    </Suspense>
  );
}
