import React from 'react';

import { Skeleton } from '@/components/ui/skeleton';

function ShoeSectionSkeleton() {
  const shoeSizes = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div className="mb-8 grid grid-cols-1 md:grid-cols-2 md:gap-20">
      <div className="flex w-full flex-col items-center">
        <Skeleton className="h-96 w-96" />
        <hr className="w-full" />
        <div className="row flex w-full items-start gap-4">
          <Skeleton className="h-20 w-20" />
          <Skeleton className="h-20 w-20" />
        </div>
      </div>

      <div className="flex flex-col items-center">
        <div>
          <Skeleton className="mb-2 h-4 w-32 " />
          <Skeleton className="mb-2  h-6 w-64" />
          <Skeleton className="mb-2 h-4 w-32" />
          <Skeleton className="h-6 w-64" />
          <div className="my-4 grid max-w-[300px] grid-cols-5 gap-2">
            {shoeSizes.map((size) => (
              <Skeleton
                key={size}
                className="h-14 w-14 cursor-pointer bg-gray-300 p-4 text-center text-sm font-semibold hover:bg-gray-100"
              />
            ))}
          </div>
          <Skeleton className="mb-2 h-4 w-32 " />
          <Skeleton className="h-10 w-40" />
        </div>
      </div>
    </div>
  );
}

export default ShoeSectionSkeleton;
