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

export const useGetProducts = ({ skip = 0 }) => {
  return useQuery<PaginatedProducts>({
    queryKey: ["products", skip],
    queryFn: () => fetch(`https://dummyjson.com/products?limit=10&skip=${skip}`).then((res) => res.json()),
  })
};