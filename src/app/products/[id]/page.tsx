import { getProduct } from "@/app/lib/data";
import Header from "@/app/ui/common/Header";
import Navbar from "@/app/ui/common/Navbar";
import Link from 'next/link';
import ProductDetails from "@/app/ui/products/ProductDetails";
import { Suspense } from "react";

function Page({ params: { id } }: { params: { id: string } }) {
  return (
    <div className="pb-10">
      <Header />
      <Navbar />
      <div className='px-8 mt-14'>
        <Link className='text-dark-grey font-bold' href="/">Home</Link>
      </div>
      <div className="px-8">
        <Suspense fallback={<div>Loading...</div>}>
          <ProductDetails productId={id} />
        </Suspense>
      </div>
    </div>
  )
}

export default Page;