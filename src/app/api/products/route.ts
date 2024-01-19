import type { NextRequest } from 'next/server';

import { NextResponse } from 'next/server';

import prisma from '@/lib/prisma';

export async function GET(request: NextRequest) {
  try {
    // This is just a simple example of how to use query parameters
    // Because i only have a small amount of products, i'm just splitting them in half,
    // to show them in two different carousels
    const half = request.nextUrl.searchParams.get('half');
    let products;

    if (half === 'true') {
      products = await prisma.product.findMany({
        take: Math.ceil((await prisma.product.count()) / 2),
      });
    } else {
      const totalProducts = await prisma.product.count();

      products = await prisma.product.findMany({
        skip: Math.ceil(totalProducts / 2),
        take: Math.floor(totalProducts / 2),
      });
    }

    return NextResponse.json(products, { status: 200 });
  } catch (e) {
    return NextResponse.json({ message: 'Error' }, { status: 500 });
  }
}
