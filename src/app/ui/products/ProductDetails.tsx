import { getProduct } from "@/app/lib/data";
import Image from "next/image";
import { StarIcon } from "../icons";
import range from 'lodash/range';
import { formatCurrency, getRandomInt } from "@/app/lib/auxiliary";

async function ProductDetails ({ productId }: { productId: string; }) {
  const product = await getProduct({ id: productId });
  /* @TODO optional handle fraction ratings */
  const rating = Math.trunc(product.rating);
  const starsFilling = [...range(rating).map(() => true), ...range(5 - rating).map(() => false)];
  return (
    <div className="mt-10">
      <div className="flex gap-8">
        <Image src={product.images[0]} alt={product.title} width={500} height={450} />
        {/* @TODO flex col align items to the end */}
        <div className="flex flex-col gap-3">
          <div>{product.title}</div>
          <div className="flex gap-3 items-center">
            {starsFilling.map((filled, index) => (
              <StarIcon key={`rating-star-${index}`} className="text-yellow-500" filled={filled} />
            ))}
            <div className="text-sm font-bold text-light-grey">{getRandomInt(5, 20)} Reviews</div> 
          </div>
          <div className="flex flex-col">
            <div className="text-2xl font-bold">${formatCurrency(product.price)}</div>
            <div className="flex gap-2 font-bold text-sm">
              <div className='text-light-grey'>Availability  :</div>
              <div className='text-blue-link'>In Stock</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails;