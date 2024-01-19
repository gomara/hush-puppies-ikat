'use client';
import type Product from '@/interfaces/ProductInterface';

import Image from 'next/image';
import React from 'react';

import { CarouselItem } from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';

interface ShoeItemProps {
  shoe: Product;
  withAddToCartButton?: boolean;
}

function ShoeItem({ shoe, withAddToCartButton }: ShoeItemProps) {
  const { name, price, imgURL } = shoe;

  return (
    <CarouselItem className="flex flex-col items-center justify-end md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
      <div className="mb-16 h-52 w-64  ">
        <Image
          unoptimized
          alt={`shoe-${name}`}
          className=""
          height={200}
          src={imgURL}
          width={250}
        />
      </div>
      <div className="mb-4 flex w-full justify-start px-8">
        <Image unoptimized alt={`shoe-preview-${name}`} height={40} src={imgURL} width={60} />
      </div>
      <div className="flex w-full flex-col items-center justify-between px-8">
        <span className="text-md font-serif ">{name}</span>
        <span className=" my-4 text-lg font-semibold text-primary">${price}</span>
        {withAddToCartButton ? (
          <Button className=" w-full rounded-none pr-4 font-sans">AGREGAR AL CARRITO</Button>
        ) : (
          <hr className="w-full" />
        )}
      </div>
    </CarouselItem>
  );
}

export default ShoeItem;
