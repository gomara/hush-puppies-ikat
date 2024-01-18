'use client';
import React from 'react';
import Image from 'next/image';
import { ChevronRight, Menu, ShoppingBag } from 'lucide-react';

import useMobileDetect from '@/hooks/useMobileDetect';

import { Input } from '../../ui/input';

import HeaderNav from './HeaderNav';
import DeliveryOffer from './DeliveryOffer';

function Header({ children }: { children?: React.ReactNode }) {
  const isMobile = useMobileDetect();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {children}
      <div className="relative flex flex-wrap items-baseline justify-between px-20 py-2">
        {isMobile ? <Menu className="h-8 w-8 cursor-pointer" /> : null}
        <Image
          priority
          alt="Logo"
          className="pt-4"
          height={88}
          src="/hushpupies.png"
          width={isMobile ? 150 : 250}
        />
        {!isMobile ? (
          <div className="flex flex-col justify-between">
            <div className="relative flex justify-end font-sans">
              <ChevronRight className="absolute right-2 top-1/2 z-10 h-6 w-6 -translate-y-1/2 text-gray-500" />
              <Input className="max-w-[300px] rounded-none" placeholder="BUSCAR" type="search" />
            </div>
            <DeliveryOffer />
          </div>
        ) : (
          <ShoppingBag className="h-6 w-6 cursor-pointer" />
        )}
      </div>
      {!isMobile && <HeaderNav />}
    </header>
  );
}

export default Header;
