import React from 'react';

import { Carousel, CarouselContent } from '@/components/ui/carousel';
import { fetchShoes } from '@/lib/handlers';

import ShoeItem from './ShoeItem';

interface ShoesCarouselProps {
  half?: boolean;
  children?: React.ReactNode;
  withAddToCartButton?: boolean;
}

async function ShoesCarousel({ half, children, withAddToCartButton }: ShoesCarouselProps) {
  const shoes = await fetchShoes(half);

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
        <CarouselContent>
          {shoes.map((product, index) => (
            <ShoeItem
              key={`shoe-${index + 1}`}
              shoe={product}
              withAddToCartButton={withAddToCartButton}
            />
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}

export default ShoesCarousel;
