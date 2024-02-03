import { useQuery } from "@tanstack/react-query";

export type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: Array<string>;
}

type PaginatedProducts = {
  products: Array<Product>;
  total: number;
  skip: number;
  limit: number;
}

export const useGetProducts = ({ limit = 10 }) => {
  return useQuery<PaginatedProducts>({
    queryKey: ["products", limit],
    queryFn: () => fetch(`https://dummyjson.com/products?limit=${limit}`).then((res) => res.json()),
  })
};