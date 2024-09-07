import React, { Suspense } from 'react';

import CompareResultsContainer from '@/features/compare-results/CompareResultsContainer';

export default function CompareResults() {
  return (
    <Suspense>
      <CompareResultsContainer />
    </Suspense>
  );
}
