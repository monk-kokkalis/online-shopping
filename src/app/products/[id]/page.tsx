import Header from "@/app/ui/common/Header";
import Navbar from "@/app/ui/common/Navbar";
import Link from 'next/link';
import ProductDetails from "@/app/ui/products/ProductDetails/ProductDetails";
import ProductDetailsSkeletonLoader from "@/app/ui/products/ProductDetails/ProductDetailsSkeletonLoader";
import { Suspense } from "react";
import { homePath } from "@/app/lib/routes";
import { ChevronDownIcon } from "@/app/ui/icons";

function Page({ params: { id } }: { params: { id: string } }) {
  return (
    <div className="pb-10">
      <Header />
      <div className="container m-auto">
        <Navbar />
        <div className='flex gap-3 items-center px-8 mt-14 text-sm justify-center md:justify-start'>
          <Link className='text-dark-grey font-bold' href={homePath()}>Home</Link>
          <ChevronDownIcon className="rotate-[-90deg] text-muted-grey" />
          <div className="text-muted-grey font-bold">Shop</div>
        </div>
        <div className="px-8">
          <Suspense fallback={<ProductDetailsSkeletonLoader />}>
            <ProductDetails productId={id} />
          </Suspense>
        </div>
      </div>
    </div>
  )
}

export default Page;