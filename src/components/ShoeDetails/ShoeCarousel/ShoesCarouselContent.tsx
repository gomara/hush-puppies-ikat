'use client';
import type { Product } from '@prisma/client';

import React from 'react';

import { CarouselContent } from '@/components/ui/carousel';
import { useBoundShoeStore } from '@/context/store';
import { useAvoidSSR } from '@/hooks/useAvoidSSR';

import ShoeCarouselItem from './ShoeCarouseltem';

interface ShoesCarouselContentProps {
  shoes: Product[];
  withAddToCartButton?: boolean;
}

function ShoesCarouselContent({ shoes, withAddToCartButton }: ShoesCarouselContentProps) {
  const selectedShoe = useBoundShoeStore((state) => state.selectedShoe);
  const remainingShoes = shoes.filter((shoe) => shoe.id !== selectedShoe?.id);
  const isClient = useAvoidSSR();

  return (
    <CarouselContent>
      {isClient
        ? remainingShoes.map((product, index) => (
            <ShoeCarouselItem
              key={`shoe-${index + 1}`}
              shoe={product}
              withAddToCartButton={withAddToCartButton}
            />
          ))
        : null}
    </CarouselContent>
  );
}

export default ShoesCarouselContent;
