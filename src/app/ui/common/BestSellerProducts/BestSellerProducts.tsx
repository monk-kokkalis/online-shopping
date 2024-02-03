"use client";
import { useState } from "react";
import { useGetProducts } from "@/app/lib/react-query/queries/useGetProducts";
import LoadingButton from '@mui/lab/LoadingButton';
import BestSellerCard from "./BestSellerCard/BestSellerCard";
import Skeleton from '@mui/material/Skeleton';
import range from 'lodash/range';

function BestSellerProducts() {
  const [productsSkip, setProductsSkip] = useState(0);
  const { data: products, isLoading: loadingProducts } = useGetProducts({ skip: productsSkip });
  /* @TODO remove */
  console.log('them products ===> ', products);
  return (
    <section className="mt-10 md:mt-24 px-8 md:px-28">
      <div className="flex flex-col gap-5 items-center">
        <div className="text-xl text-light-grey">Featured Products</div>
        <div className="text-2xl text-dark-grey font-bold">BESTSELLER PRODUCTS</div>
        <div className="text-sm text-light-grey">Problems trying to resolve the conflict between</div>
      </div>
      <div className="grid grid-cols-5 gap-x-5 gap-y-12 mt-16">
        {
          products?.products.map((product) => (<BestSellerCard key={`${product.brand}-${product.title}`} bestSeller={product} />))
        }
        {
          loadingProducts && (range(10).map((el: number) => (
            <div key={`card-loader-${el}`} className="flex flex-col gap-3 items-center h-[256px]">
              <Skeleton variant="rectangular" width={210} height={128} />
              <Skeleton animation="wave" width={150} />
              <Skeleton animation="wave" width={90} className="mt-10" />
              <Skeleton animation="wave" width={170} />
            </div>
          )))
        }
      </div>
      <div className="flex justify-center mt-14">
        <LoadingButton
          onClick={() => setProductsSkip((prev) => prev + 10)}
          loading={loadingProducts}
          disabled={loadingProducts}
          variant="outlined">
          Load more products
        </LoadingButton>
      </div>
    </section>
  )
}

export default BestSellerProducts;