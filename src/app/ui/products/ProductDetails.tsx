import { getProduct } from "@/app/lib/data";
import Image from "next/image";
import { EyeIcon, HeartIcon, ShoppingCartIcon, StarIcon } from "../icons";
import range from 'lodash/range';
import { formatCurrency, getRandomInt } from "@/app/lib/auxiliary";
import clsx from "clsx";
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import BestSellerProducts from "../common/BestSellerProducts/BestSellerProducts";

async function ProductDetails ({ productId }: { productId: string; }) {
  const product = await getProduct({ id: productId });
  /* @TODO optional handle fraction ratings */
  const rating = Math.trunc(product.rating);
  const starsFilling = [...range(rating).map(() => true), ...range(5 - rating).map(() => false)];
  /* @TODO add BestSellerProducts component */
  /* @TODO add remaining static sections */
  return (
    <div className="mt-10">
      <div className="flex flex-col md:flex-row gap-8">
        {/* @TODO optional add carousel */}
        {/* @TODO important add secondary images */}
        <Image src={product.images[0]} alt={product.title} width={500} height={450} />
        <div className='flex flex-col justify-between'>
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
          <div className='border-t-2 border-grey-6 pt-6 mt-5 md:mt-0'>
            <div className='flex flex-col justify-between gap-10'>
              <div className="flex gap-2">
                {['bg-blue-link', 'bg-green', 'bg-orange', 'bg-black'].map((color, index) => (
                  <div key={`color-sphere-${index}`} className={clsx('w-7 h-7 rounded-full', color)}></div>
                ))}
              </div>
              {/* @TODO add redux connection */}
              <div className="flex gap-3 items-center">
                <Button variant="contained" className='bg-blue-link'>Select Options</Button>
                <IconButton className="rounded-full border-solid border-[1px] border-faded-grey">
                  <HeartIcon className="text-light-grey" />
                </IconButton>
                <IconButton className="rounded-full border-solid border-[1px] border-faded-grey">
                  <ShoppingCartIcon className="text-light-grey" />
                </IconButton>
                <IconButton className="rounded-full border-solid border-[1px] border-faded-grey">
                  <EyeIcon className="text-light-grey" />
                </IconButton>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 hidden md:block">
        <div className='flex gap-6 justify-center font-bold text-sm text-light-grey py-8'>
          <div>Description</div>
          <div>Additional Information</div>
          <div>Reviews <span className="text-green">(0)</span></div>
        </div>
        <div className="flex justify-between border-t-2 border-grey-6 py-10">
          <div className="flex flex-col gap-5 pr-20 text-light-grey">
            <div className="text-2xl font-bold text-dark-grey">The quick fox jumps over</div>
            <div>
              Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. 
              RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
            </div>
            <div className="flex gap-10">
              <div className="w-2 bg-green h-full items-center"></div>
              Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. 
              RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
            </div>
            <div>
              Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. 
              RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
            </div>
          </div>
          <Image
            src="https://cdn.dummyjson.com/product-images/8/1.jpg"
            alt="Reviews section image"
            width={500} height={450}
          />
        </div>
      </div>
      <div className="hidden md:block">
        <BestSellerProducts paginated={false} />
      </div>
    </div>
  )
}

export default ProductDetails;