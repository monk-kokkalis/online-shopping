import Image from "next/image";
import Link from "next/link";
import { productPath } from "@/app/lib/routes";
import type { Product } from "@/app/lib/react-query/queries/useGetProducts";

type Props = {
  bestSeller: Product
}
function BestSellerCard({ bestSeller }: Props) {
  const { id, brand, images, title, price, discountPercentage } = bestSeller;
  const discountedPrice = price - (price * (discountPercentage / 100));
  return (
      <Link href={productPath(id)} className="flex flex-col gap-3 items-center">
        <Image
          className='h-32 w-full'
          src={images[0]}
          alt={`${brand} ${title}`}
          width={150}
          height={150}>
        </Image>
        <div className="text-dark-grey text-base font-bold min-h-12">{title}</div>
        <div className="text-light-grey text-sm font-bold">{brand}</div>
        <div className="flex justify-center gap-3 text-base font-bold">
          <div className="text-muted-grey">${Intl.NumberFormat("en-US").format(price)}</div>
          <div className="text-green">${Intl.NumberFormat("en-US").format(Number(discountedPrice.toFixed(2)))}</div>
        </div>
      </Link>
  )
}

export default BestSellerCard;