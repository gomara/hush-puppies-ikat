import React, { Suspense } from 'react';

import ShoesCarousel from '@/components/layouts/shoePage/ShoesCarousel';
import ShoeSection from '@/components/layouts/shoePage/ShoeSection';
import ShoesCarouselSkeleton from '@/components/layouts/shoePage/ShoesCarouselSkeleton';
import ShoesRecommendations from '@/components/layouts/shoePage/ShoesRecommendations';
import ShoesLook from '@/components/layouts/shoePage/ShoesLook';

function ShoePage() {
  return (
    <div className="w-full px-20">
      <div className=" py-4 text-sm font-semibold text-muted-foreground">
        HUSHPUPPIESCO / CALZADO / ZAPATILLA
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <ShoeSection />
      </Suspense>

      <section className="mb-6">
        <h3 className="text-md font-serif font-semibold">DETALLES DEL PRODUCTO</h3>
        <hr className="mb-2" />
        <p className="mb-4 text-sm text-muted-foreground">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur assumenda odio,
          deleniti quaerat doloremque incidunt quia veniam quas quibusdam aliquid adipisci
          reprehenderit excepturi? Voluptate perspiciatis deserunt consectetur tempore odio rerum?
        </p>
        <h3 className="text-md font-serif font-semibold">TECNOLOGÍAS</h3>
        <hr className="mb-2" />
        <p className="mb-4 text-sm text-muted-foreground">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo tempora illo cumque
          quia error veniam? Error libero porro commodi exercitationem. Soluta aut aspernatur beatae
          reprehenderit illo laborum optio rem corrupti.
        </p>
      </section>
      <Suspense
        fallback={
          <ShoesCarouselSkeleton withAddToCartButton>
            <ShoesLook />
          </ShoesCarouselSkeleton>
        }
      >
        <ShoesCarousel half withAddToCartButton>
          <ShoesLook />
        </ShoesCarousel>
      </Suspense>
      <Suspense
        fallback={
          <ShoesCarouselSkeleton>
            <ShoesRecommendations />
          </ShoesCarouselSkeleton>
        }
      >
        <ShoesCarousel>
          <ShoesRecommendations />
        </ShoesCarousel>
      </Suspense>
    </div>
  );
}

export default ShoePage;
