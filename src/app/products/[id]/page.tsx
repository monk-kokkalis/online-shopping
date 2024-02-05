import Header from "@/app/ui/common/Header";
import Navbar from "@/app/ui/common/Navbar";
import Link from 'next/link';
import ProductDetails from "@/app/ui/products/ProductDetails/ProductDetails";
import ProductDetailsSkeletonLoader from "@/app/ui/products/ProductDetails/ProductDetailsSkeletonLoader";
import { Suspense } from "react";
import { homePath } from "@/app/lib/routes";
import { ChevronDownIcon } from "@/app/ui/icons";
import Footer from "@/app/ui/common/Footer";
import { 
  HooliIcon,
  LyftIcon,
  CavalierIcon,
  StripeIcon,
  AWSIcon,
  RedditIcon
} from "@/app/ui/icons";
import BestSellerProducts from "@/app/ui/common/BestSellerProducts/BestSellerProducts";

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
        <div className="hidden md:block mt-10">
          <BestSellerProducts paginated={false} />
        </div>
        <div className="px-8 md:px-20 flex flex-col md:flex-row justify-between items-center py-14">
          <HooliIcon width={75} height={75} />
          <LyftIcon width={75} height={75} />
          <CavalierIcon width={75} height={75} />
          <StripeIcon width={75} height={75} />
          <AWSIcon width={75} height={75} />
          <RedditIcon width={75} height={75} />
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Page;