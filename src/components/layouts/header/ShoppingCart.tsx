'use client';
import { ShoppingBag, Trash } from 'lucide-react';
import React from 'react';
import Image from 'next/image';

import { useBoundShoeStore } from '@/context/store';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';

interface ShoppingCartProps {
  isSmallDevice?: boolean;
}

function ShoppingCart({ isSmallDevice }: ShoppingCartProps) {
  const cartItems = useBoundShoeStore((state) => state.cartItems);
  const cart = useBoundShoeStore((state) => state.cart);
  const removeFromCart = useBoundShoeStore((state) => state.removeFromCart);
  const totalPrice = useBoundShoeStore((state) => state.cartTotal);
  const finishPurchase = useBoundShoeStore((state) => state.finishPurchase);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="flex items-center gap-2 text-sm font-medium" variant="ghost">
          <ShoppingBag className="h-4 w-4 sm:h-6 sm:w-6 md:block" />
          {isSmallDevice ? `( ${cartItems} )` : `CARRITO ( ${cartItems} )`}
        </Button>
      </DialogTrigger>
      <DialogContent className="min-w-[390px] max-w-[400px] sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>CARRITO DE COMPRAS</DialogTitle>
          <DialogDescription>
            Esta es la lista de productos que has agregado al carrito de compras.
          </DialogDescription>
          <div className="flex justify-end">
            <Label className="textl-md font-bold">
              PRECIO TOTAL: <Label className="text-md text-muted-foreground">{totalPrice}</Label>
            </Label>
          </div>
        </DialogHeader>
        <div className="flex max-h-[600px] flex-col gap-4 overflow-auto pb-4">
          <hr className="w-full" />
          {cart.map((item) => (
            <div key={`${item.id}-${item.size}`} className="row flex justify-between gap-8 pr-6">
              <div className="h-[100px] w-[150px]">
                <Image
                  unoptimized
                  alt="shoe-cart"
                  height={100}
                  src={item.imgURL || ''}
                  width={150}
                />
              </div>
              <div className="flex flex-col gap-1">
                <Label className="text-md font-bold">{item.name}</Label>
                <Label className="text-sm font-semibold">
                  Precio:{' '}
                  <Label className="text-sm text-muted-foreground">
                    {item.price * item.quantity}
                  </Label>
                </Label>
                <Label className="text-sm font-semibold">
                  Talla: <Label className="text-sm text-muted-foreground"> {item.size}</Label>
                </Label>
                <Label className="text-sm font-semibold">
                  Cantidad: <Label className="text-sm text-muted-foreground">{item.quantity}</Label>
                </Label>
              </div>
              <div>
                <Button
                  className="rounded-full"
                  variant="ghost"
                  onClick={() => removeFromCart(item, item.size)}
                >
                  <Trash className="h-4 w-4 " />
                </Button>
              </div>
            </div>
          ))}
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button
              className="w-full rounded-none pr-4 font-sans"
              disabled={cartItems <= 0}
              onClick={() => finishPurchase()}
            >
              FINALIZAR COMPRA
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default ShoppingCart;
