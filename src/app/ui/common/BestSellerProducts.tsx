"use client";
import { useGetProducts } from "@/app/lib/react-query/queries/useGetProducts";

function BestSellerProducts() {
  const { data: products } = useGetProducts({ skip: 0 });
  /* @TODO remove */
  console.log('them products ===> ', products);
  return (
    <div>
      {/* @TODO replace */}
      <p>dat best seller products</p>
    </div>
  )
}

export default BestSellerProducts;