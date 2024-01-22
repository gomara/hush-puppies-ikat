'use client';
import { Menu } from 'lucide-react';
import React from 'react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

function HamburgerMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="lg:absolute">
        <Menu className="h-4 w-4 cursor-pointer sm:h-6 sm:w-6 md:block md:h-8 md:w-8 lg:hidden" />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem className="font-sans">HOMBRE</DropdownMenuItem>
        <DropdownMenuItem className="font-sans">MUJER</DropdownMenuItem>
        <DropdownMenuItem className="font-sans">BLOG</DropdownMenuItem>
        <DropdownMenuItem className="font-sans">HISTORIA</DropdownMenuItem>
        <DropdownMenuItem className="font-sans">TIENDAS</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default HamburgerMenu;
