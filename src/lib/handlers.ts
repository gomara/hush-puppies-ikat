import type Product from '@/interfaces/ProductInterface';

export async function fetchShoes(half?: boolean) {
  const url = half
    ? 'http://localhost:3000/api/products?half=true'
    : 'http://localhost:3000/api/products?half=false';
  const res = await fetch(url, {
    method: 'GET',
    next: { revalidate: 0 },
  });
  const data: Product[] = (await res.json()) as Product[];

  return data;
}
