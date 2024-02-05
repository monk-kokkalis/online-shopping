import { getShoppingCartItems } from "@/app/lib/redux/selectors/shoppingCart";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import { Button, IconButton } from "@mui/material";
import { 
  increaseShoppingCartItemQuantity,
  decreaseShoppingCartItemQuantity,
  removeItem
} from "../../lib/redux/reducers/shoppingCart";
import { getDiscountedPrice } from "@/app/lib/auxiliary";
import { formatCurrency } from "@/app/lib/auxiliary";

function ShoppingCartDetails() {
  const shoppingCartItems = useSelector(getShoppingCartItems);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col gap-4 min-w-4xl">
      {
        shoppingCartItems.map((item) => (
          <div key={`shopping-cart-item-${item.product.id}`} className="grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-14 justify-between items-center">
            <Image className="grow-1" src={item.product.images[0]} width={150} height={200} alt={`${item.product.title}`} />
            <div className='flex flex-col'>
              <div className="font-bold text-base">{item.product.title}</div>
              <div className="font-bold text-xs text-light-grey">{item.product.brand}</div>
            </div>
            <div className="flex gap-2 items-center">
              <IconButton
                disabled={item.quantity === 1}
                onClick={() => dispatch(decreaseShoppingCartItemQuantity(item.product))}>
                <div className="w-7">-</div>
              </IconButton>
              <div className='text-sm text-light-grey'>{item.quantity}</div>
              <IconButton onClick={() => dispatch(increaseShoppingCartItemQuantity(item.product))}>
                <div className="w-7">+</div>
              </IconButton>
            </div>
            <div className="flex flex-col">
              <div className="text-base font-bold text-left md:text-right">${formatCurrency(getDiscountedPrice({ 
                price: item.product.price,
                discountPercentage: item.product.discountPercentage
              }) * item.quantity)}</div>
              <div className="flex self-start md:self-end">
                <Button
                  variant="text"
                  onClick={() => dispatch(removeItem(item.product))}
                  className="text-red text-xs normal-case p-0 min-w-0 relative"
                  size="small">
                    Remove
                </Button>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default ShoppingCartDetails;