import React, { Suspense } from 'react';

import ShoesCarousel from '@/components/ShoeDetails/ShoeCarousel/ShoesCarousel';
import SelectedShoeSection from '@/components/ShoeDetails/SelectedShoe/SelectedShoeSection';
import ShoesCarouselSkeleton from '@/components/ShoeDetails/ShoeCarousel/ShoesCarouselSkeleton';
import ShoesRecommendations from '@/components/ShoeDetails/ShoesRecommendations';
import ShoesLook from '@/components/ShoeDetails/ShoesLook';
import { getShoe } from '@/lib/handlers';

async function ShoePage() {
  const shoe = await getShoe();

  return (
    <div className="w-full px-20">
      <div className=" py-4 text-sm font-semibold text-muted-foreground">
        HUSHPUPPIESCO / CALZADO / {shoe?.name.toUpperCase()}
      </div>
      <SelectedShoeSection shoe={shoe} />
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
