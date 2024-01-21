import prisma from '@/lib/prisma';

export async function getShoes(half?: boolean) {
  try {
    // This is just a simple example of how to use server components with route handlers.
    // Because i only have a small amount of products, i'm just splitting them in half,
    // to show them in two different carousels
    let products;

    if (half) {
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

    return products;
  } catch (e) {
    throw new Error('There was an error fetching the shoes');
  }
}

export async function getShoe() {
  // This is just for select a shoe if there is no shoe selected
  // In a real app this would be a query for the selected shoe, not just the first one

  try {
    const product = await prisma.product.findFirst();

    return product;
  } catch (e) {
    throw new Error('There was an error fetching the shoe');
  }
}
