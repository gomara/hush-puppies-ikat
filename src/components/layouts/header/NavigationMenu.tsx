import React from 'react';

import CustomLink from '@/components/ui/link';

function NavigationMenu() {
  return (
    <nav className="flex justify-end gap-4 bg-muted px-20 py-2 font-sans font-bold ">
      <CustomLink className="text-muted-foreground" href="/#">
        DIRECTORIO DE TIENDAS
      </CustomLink>
      <CustomLink className="text-muted-foreground" href="/#">
        SERVICIO AL CLIENTE
      </CustomLink>
      <CustomLink className="text-muted-foreground" href="/#">
        MI CUENTA
      </CustomLink>
    </nav>
  );
}

export default NavigationMenu;
