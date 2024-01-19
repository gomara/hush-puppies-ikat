import { cva } from 'class-variance-authority';
import { ShoppingBag } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const navigationMenuTriggerStyle = cva(
  'group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50',
);

function HeaderNav() {
  return (
    <div className="hidden justify-between border-b-2 border-border px-20 py-2 font-serif lg:flex">
      <nav className="flex gap-6">
        <Link className={navigationMenuTriggerStyle()} href="/#">
          HOMBRE
        </Link>
        <Link className={navigationMenuTriggerStyle()} href="/#">
          MUJER
        </Link>
        <Link className={navigationMenuTriggerStyle()} href="/#">
          BLOG
        </Link>
        <Link className={navigationMenuTriggerStyle()} href="/#">
          HISTORIA
        </Link>
        <Link className={navigationMenuTriggerStyle()} href="/#">
          TIENDAS
        </Link>
      </nav>
      <div className="flex items-center gap-2 text-sm font-medium">
        <ShoppingBag className="h-6 w-6" />
        CARRITO 0
      </div>
    </div>
  );
}

export default HeaderNav;
