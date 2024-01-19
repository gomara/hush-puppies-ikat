import { ChevronRight } from 'lucide-react';
import React from 'react';

import { Input } from '@/components/ui/input';
import CustomLink from '@/components/ui/link';

function FooterNav() {
  return (
    <nav className="grid gap-4 border-b-2 border-border px-20 py-6 sm:grid-cols-2 sm:gap-2 md:grid-cols-4">
      <ul className="text-left font-serif">
        <li>
          <p className="mb-4 font-semibold">SERVICIO AL CLIENTE</p>
          <div className="flex flex-col gap-2 tracking-wide">
            <CustomLink href="/#">CONTÁCTENOS</CustomLink>
            <CustomLink href="/#">CAMBIOS Y DEVOLUCIONES</CustomLink>
            <CustomLink href="/#">POLÍTICAS DE LA TIENDA</CustomLink>
            <CustomLink href="/#">POLÍTICAS DE DATOS</CustomLink>
          </div>
        </li>
      </ul>
      <ul className="text-left font-serif">
        <li>
          <p className="mb-4 font-serif font-semibold">MI CUENTA</p>
          <div className="flex flex-col gap-2 tracking-wide">
            <CustomLink href="/#">MIS PEDIDOS</CustomLink>
            <CustomLink href="/#">MIS DEVOLUCIONES</CustomLink>
          </div>
        </li>
      </ul>
      <ul className="text-left font-serif">
        <li>
          <p className="mb-4 font-serif font-semibold">RECURSOS</p>
          <div className="flex flex-col gap-2 tracking-wide">
            <CustomLink href="/#">TIENDA</CustomLink>
            <CustomLink href="/#">DEVOLUCIONES</CustomLink>
          </div>
        </li>
      </ul>
      <div className="text-left font-serif">
        <p className="mb-4 font-serif font-semibold">NEWSLETTER</p>
        <p className="mb-2">Regístrate para ser el primero en recibir nuestras noticias</p>
        <div className="relative">
          <ChevronRight className="absolute right-2 top-1/2 z-10 h-6 w-6 -translate-y-1/2 text-gray-500" />
          <Input className="rounded-none border-border" placeholder="E-MAIL" type="email" />
        </div>
      </div>
    </nav>
  );
}

export default FooterNav;
