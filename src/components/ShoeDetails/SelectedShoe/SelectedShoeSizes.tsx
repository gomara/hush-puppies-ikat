'use client';
import type { Product } from '@prisma/client';

import React, { useMemo, useState } from 'react';
import { Heart } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { useBoundShoeStore } from '@/context/store';
import { Label } from '@/components/ui/label';

interface SelectedShoeSizesProps {
  selectedShoe: Product;
}

function SelectedShoeSizes({ selectedShoe }: SelectedShoeSizesProps) {
  const [selectedSize, setSelectedSize] = useState<number | null>(null);
  const addToCart = useBoundShoeStore((state) => state.addToCart);

  const shoeSizes: number[] = useMemo(() => {
    return selectedShoe.sizes;
  }, [selectedShoe]);

  return (
    <div className="flex flex-col items-center">
      <div>
        <h2 className="font-serif text-xl font-semibold">{selectedShoe.name}</h2>
        <p className="text-md font-sans font-semibold text-primary">${selectedShoe.price}</p>
        <span className="text-sm text-muted">Cod. de producto {selectedShoe.ref}</span>
        <p className="font-sans text-sm font-semibold text-muted-foreground">TALLA</p>
        <div className="my-4 grid max-w-[300px] grid-cols-5 gap-2">
          {shoeSizes.map((size) => (
            <div
              key={size}
              className={cn(
                'h-14 w-14 cursor-pointer bg-gray-300 p-4 text-center text-sm font-semibold hover:bg-gray-100',
                size === selectedSize && 'bg-gray-100',
              )}
              onClick={() => setSelectedSize(size)}
            >
              {size}
            </div>
          ))}
        </div>
        <Label className="mb-4 cursor-pointer font-sans text-sm font-semibold text-muted-foreground underline">
          GUÍA DE TALLAS
        </Label>
        <div className="row flex items-center">
          <Button
            className="rounded-none font-sans"
            disabled={!selectedSize}
            onClick={() => addToCart(selectedShoe, selectedSize!)}
          >
            AÑADIR AL CARRITO
          </Button>
          <Heart className=" ml-10 h-6 w-6 cursor-pointer opacity-50" fill="gray" stroke="gray" />
        </div>
      </div>
    </div>
  );
}

export default SelectedShoeSizes;
