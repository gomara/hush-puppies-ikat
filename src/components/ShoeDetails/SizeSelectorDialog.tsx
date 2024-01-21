'use client';
import type { Product } from '@prisma/client';

import React, { useState } from 'react';
import Image from 'next/image';

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useBoundShoeStore } from '@/context/store';
import { Label } from '@/components/ui/label';

interface SizeSelectorDialogProps {
  shoe: Product;
}

function SizeSelectorDialog({ shoe }: SizeSelectorDialogProps) {
  const [selectedSize, setSelectedSize] = useState<number | null>(null);
  const addToCart = useBoundShoeStore((state) => state.addToCart);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className=" w-full rounded-none pr-4 font-sans"
          onClick={(e) => e.stopPropagation()}
        >
          AGREGAR AL CARRITO
        </Button>
      </DialogTrigger>
      <DialogContent className="min-w-[390px] max-w-[400px] sm:max-w-[500px]">
        <DialogTitle>CARRITO DE COMPRAS</DialogTitle>
        <DialogDescription>
          Selecciona la talla que deseas agregar al carrito de compras.
        </DialogDescription>
        <div className="flex items-center justify-between pl-8">
          <Image unoptimized alt="shoe-size-select" height={40} src={shoe.imgURL} width={60} />
          <div className="my-4 grid max-w-[300px] grid-cols-5 gap-2">
            {shoe.sizes.map((size) => (
              <div
                key={size}
                className={cn(
                  'h-14 w-14 cursor-pointer bg-gray-300 p-4 text-center text-sm font-semibold hover:bg-gray-100',
                  size === selectedSize && 'bg-gray-100',
                )}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedSize(size);
                }}
              >
                {size}
              </div>
            ))}
          </div>
        </div>

        <Label className="mb-4 cursor-pointer font-sans text-sm font-semibold text-muted-foreground underline">
          GUÍA DE TALLAS
        </Label>
        <DialogFooter>
          <DialogClose asChild>
            <Button
              className="w-full rounded-none pr-4 font-sans"
              disabled={!selectedSize}
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                addToCart(shoe, selectedSize!);
              }}
            >
              AGREGAR AL CARRITO
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default SizeSelectorDialog;
