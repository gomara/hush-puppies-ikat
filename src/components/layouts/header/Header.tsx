import React from 'react';
import Image from 'next/image';
import { ChevronRight, Menu, ShoppingBag } from 'lucide-react';

import { Input } from '../../ui/input';

import HeaderNav from './HeaderNav';
import DeliveryOffer from './DeliveryOffer';

function Header({ children }: { children?: React.ReactNode }) {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {children}
      <div className="relative flex flex-wrap  items-baseline justify-between px-20 py-2">
        <Menu className="h-8 w-8 cursor-pointer md:block lg:hidden" />
        <Image
          priority
          alt="Logo"
          className="w-[150px] pt-4 md:w-[250px]"
          height={88}
          src="/hushpupies.png"
          width={250}
        />
        <div className="hidden flex-col items-center justify-center md:items-end md:justify-between lg:flex">
          <div className="relative flex max-w-[300px] font-sans md:w-[300px]">
            <ChevronRight className="absolute right-2 top-1/2 z-10 h-6 w-6 -translate-y-1/2 text-gray-500" />
            <Input className=" rounded-none" placeholder="BUSCAR" type="search" />
          </div>
          <DeliveryOffer />
        </div>
        <ShoppingBag className="h-6 w-6 cursor-pointer md:block lg:hidden" />
      </div>
      <HeaderNav />
    </header>
  );
}

export default Header;
