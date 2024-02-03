import type { Product } from "./react-query/queries/useGetProducts";

export async function getProduct({ id }: { id: string }): Promise<Product> {
  try {
    const res = await fetch(`https://dummyjson.com/products/${id}`);
    return res.json();
  } catch(error) {
    console.error('Fetch Error:', error);
    throw new Error('Failed to fetch product details');
  }
}