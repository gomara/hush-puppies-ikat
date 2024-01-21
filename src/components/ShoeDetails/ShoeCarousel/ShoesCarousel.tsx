import React from 'react';

import { Carousel } from '@/components/ui/carousel';
import { getShoes } from '@/lib/handlers';

import ShoesCarouselContent from './ShoesCarouselContent';

interface ShoesCarouselProps {
  half?: boolean;
  children?: React.ReactNode;
  withAddToCartButton?: boolean;
}

async function ShoesCarousel({ half, children, withAddToCartButton }: ShoesCarouselProps) {
  const shoes = await getShoes(half);

  return (
    <section className="mb-6">
      {children}
      <Carousel
        className="py-6"
        opts={{
          align: 'start',
          loop: true,
        }}
      >
        <ShoesCarouselContent shoes={shoes} withAddToCartButton={withAddToCartButton} />
      </Carousel>
    </section>
  );
}

export default ShoesCarousel;
