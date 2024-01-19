import React from 'react';

import { Skeleton } from '@/components/ui/skeleton';

interface ShoesCarouselSkeletonProps {
  children?: React.ReactNode;
  withAddToCartButton?: boolean;
}

function ShoesCarouselSkeleton({ children, withAddToCartButton }: ShoesCarouselSkeletonProps) {
  const mockArray = [1, 2, 3, 4];

  return (
    <section className="mb-6">
      {children}
      <div className="grid grid-cols-4 gap-4 py-6">
        {mockArray.map((_, i) => (
          <div key={`skeleton-${i + 1}`} className="flex flex-col">
            <div className="mb-16 flex flex-col items-center justify-end">
              <Skeleton className="h-64 w-64" />
            </div>
            <div className="mb-4 flex w-full justify-start px-8">
              <Skeleton className="h-10 w-16" />
            </div>
            <div className="flex w-full flex-col items-center justify-between px-8">
              <Skeleton className="h-3  w-40" />
              <Skeleton className="my-4 h-3 w-40" />
              {withAddToCartButton ? (
                <Skeleton className="h-10 w-full pr-4" />
              ) : (
                <Skeleton className="h-1 w-full" />
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ShoesCarouselSkeleton;
