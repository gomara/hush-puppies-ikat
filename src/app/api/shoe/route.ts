import { NextResponse } from 'next/server';

import prisma from '@/lib/prisma';
import { getShoeSizes } from '@/lib/utils';

import zapatos from '../../../../zapatos';

// This function was used to populate the database with the shoes
// I'm not using it anymore, but i'm keeping it here just in case some one wants to use it lo populate their own database
// for use it just uncomment and send a POST request to 'http://localhost:3000/api/shoe

export async function POST() {
  try {
    const formattedShoes = zapatos.map((shoe) => ({
      name: shoe.nombre,
      price: shoe.precio,
      imgURL: shoe.foto,
      ref: shoe.referencia,
      sizes: getShoeSizes(),
    }));

    await prisma.product.createMany({ data: formattedShoes });

    return NextResponse.json({ message: 'Created' }, { status: 200 });
  } catch (e) {
    return NextResponse.json({ message: 'Error' }, { status: 500 });
  }
}
