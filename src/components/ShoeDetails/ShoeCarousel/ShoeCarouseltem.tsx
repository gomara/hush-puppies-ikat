'use client';

import type { Product } from '@prisma/client';

import Image from 'next/image';
import React, { useMemo } from 'react';

import { CarouselItem } from '@/components/ui/carousel';
import { useBoundShoeStore } from '@/context/store';

import SizeSelectorDialog from '../SizeSelectorDialog';

interface ShoeCarouselItemProps {
  shoe: Product;
  withAddToCartButton?: boolean;
}

function ShoeCarouselItem({ shoe, withAddToCartButton }: ShoeCarouselItemProps) {
  const { name, price, imgURL } = useMemo(() => shoe, [shoe]);
  const setSelectedShoe = useBoundShoeStore((state) => state.setSelectedShoe);

  const handleScrollToTop = (shoe: Product) => {
    setSelectedShoe(shoe);
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Opcional: realiza un desplazamiento suave
    });
  };

  return (
    <CarouselItem
      className="flex cursor-pointer  flex-col items-center justify-end hover:shadow-lg md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
      onClick={(e) => {
        e.stopPropagation();
        handleScrollToTop(shoe);
      }}
    >
      <div className="mb-16 h-52 w-64  ">
        <Image
          priority
          unoptimized
          alt="shoe-carousel"
          className="h-auto w-auto"
          height={200}
          src={imgURL}
          width={250}
        />
      </div>
      <div className="mb-4 flex w-full justify-start px-8">
        <Image
          unoptimized
          alt={`shoe-preview-${name}`}
          className="h-[50px] w-[60px]"
          height={50}
          src={imgURL}
          width={60}
        />
      </div>
      <div className="flex w-full flex-col items-center justify-between px-8">
        <span className="text-md font-serif ">{name}</span>
        <span className=" my-4 text-lg font-semibold text-primary">${price}</span>
        {withAddToCartButton ? <SizeSelectorDialog shoe={shoe} /> : <hr className="w-full" />}
      </div>
    </CarouselItem>
  );
}

export default ShoeCarouselItem;
