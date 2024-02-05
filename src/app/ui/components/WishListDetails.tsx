import { getWishListItems } from "@/app/lib/redux/selectors/wishList";
import { useDispatch, useSelector } from "react-redux";
import { formatCurrency, getDiscountedPrice } from "@/app/lib/auxiliary";
import Image from "next/image";
import { removeWishListItem } from "@/app/lib/redux/reducers/wishList";
import { Button } from "@mui/material";

type Props = {
  onClose(): void;
}

function WishListDetails({ onClose }: Props) {
  const wishListItems = useSelector(getWishListItems);
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col gap-4 min-w-4xl">
      {
        wishListItems.map((item) => (
          <div key={`wish-list-item-${item.product.id}`} className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-14 justify-between items-center">
            <Image className="grow-1" src={item.product.thumbnail} width={150} height={100} alt={`${item.product.title}`} />
            <div className='flex flex-col gap-2'>
              <div className="font-bold text-base">{item.product.title}</div>
              <div className="font-bold text-xs text-light-grey">{item.product.brand}</div>
              <div className="font-bold text-xs text-dark-grey">{item.product.description}</div>
            </div>
            <div className="flex flex-col">
              <div className="text-base font-bold text-left md:text-right">${formatCurrency(getDiscountedPrice({ 
                price: item.product.price,
                discountPercentage: item.product.discountPercentage
              }))}</div>
              <div className="flex self-start md:self-end">
                <Button
                  variant="text"
                  onClick={() => dispatch(removeWishListItem(item.product))}
                  className="text-red text-xs normal-case p-0 min-w-0 relative"
                  size="small"
                  sx={{
                    color: "#d32f2f",
                    fontSize: '12px',
                    textTransform: 'none',
                    padding: '0',
                    minWidth: '0'
                  }}>
                    Remove
                </Button>
              </div>
            </div>
          </div>
        ))
      }
      <div className="border-t-2 border-grey-6 mt-5 py-5 text-right">
        <div className="flex gap-5 items-center justify-end mt-5">
          <Button
            variant="contained"
            className='bg-blue-link normal-case'
            onClick={onClose}
            sx={{
              textTransform: 'none'
            }}>Continue shopping</Button>
        </div>
      </div>
    </div>
  )
}

export default WishListDetails;