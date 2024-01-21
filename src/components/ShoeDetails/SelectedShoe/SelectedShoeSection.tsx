'use client';
import type { Product } from '@prisma/client';

import React, { useEffect } from 'react';

import { useBoundShoeStore } from '@/context/store';

import ShoeSectionSkeleton from './ShoeSectionSkeleton';
import SelectedShoeSizes from './SelectedShoeSizes';
import SelectedShoePreview from './SelectedShoePreview';
import SelectedShoeDetails from './SelectedShoeDetails';

interface SelectedShoeSectionProps {
  shoe: Product | null;
}

function SelectedShoeSection({ shoe }: SelectedShoeSectionProps) {
  const selectedShoe = useBoundShoeStore((state) => state.selectedShoe);

  useEffect(() => {
    if (shoe) {
      const selectShoe = useBoundShoeStore.getState().setSelectedShoe;

      selectShoe(shoe);
    }
  }, [shoe]);

  if (!selectedShoe) return <ShoeSectionSkeleton />;

  return (
    <>
      <div className="mb-8 grid grid-cols-1 md:grid-cols-2 md:gap-20">
        <SelectedShoePreview selectedShoe={selectedShoe} />
        <SelectedShoeSizes selectedShoe={selectedShoe} />
      </div>
      <SelectedShoeDetails />
    </>
  );
}

export default SelectedShoeSection;
