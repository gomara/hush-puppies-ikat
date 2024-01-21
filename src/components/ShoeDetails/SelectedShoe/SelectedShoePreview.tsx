import type { Product } from '@prisma/client';

import React, { useState } from 'react';
import Image from 'next/image';

import { cn } from '@/lib/utils';

interface SelectedShoePreviewProps {
  selectedShoe: Product;
}

function SelectedShoePreview({ selectedShoe }: SelectedShoePreviewProps) {
  const [scaleImage, setScaleImage] = useState<boolean>(false);

  const handleScaleImage = () => {
    setScaleImage(!scaleImage);
  };

  return (
    <div className="flex w-full flex-col items-center">
      <Image
        priority
        unoptimized
        alt="shoe-selected"
        className={cn('h-auto w-auto', scaleImage && '-scale-x-[1]')}
        height={400}
        src={selectedShoe.imgURL || ''}
        width={450}
      />
      <hr className="w-full" />
      <div className="row flex w-full items-start gap-4">
        <Image
          unoptimized
          alt="shoe-selected-variety "
          className="cursor-pointer"
          height={80}
          src={selectedShoe.imgURL || ''}
          width={85}
          onClick={() => handleScaleImage()}
        />
        <Image
          unoptimized
          alt="shoe-selected-variety"
          className="-scale-x-[1] cursor-pointer"
          height={80}
          src={selectedShoe.imgURL || ''}
          width={85}
          onClick={() => handleScaleImage()}
        />
      </div>
    </div>
  );
}

export default SelectedShoePreview;
