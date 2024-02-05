import { getShoppingCartItems } from "@/app/lib/redux/selectors/shoppingCart";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import { IconButton } from "@mui/material";
import { 
  increaseShoppingCartItemQuantity,
  decreaseShoppingCartItemQuantity
 } from "../../lib/redux/reducers/shoppingCart";

function ShoppingCartDetails() {
  const shoppingCartItems = useSelector(getShoppingCartItems);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col gap-4 min-w-4xl">
      {
        shoppingCartItems.map((item) => (
          <div key={`shopping-cart-item-${item.product.id}`} className="flex gap-14 justify-between items-center">
            <Image src={item.product.images[0]} width={150} height={200} alt={`${item.product.title}`} />
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
            <div>price summary</div>
          </div>
        ))
      }
    </div>
  )
}

export default ShoppingCartDetails;