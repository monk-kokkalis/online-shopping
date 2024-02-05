import { getShoppingCartItems, getShoppingCartTotal } from "@/app/lib/redux/selectors/shoppingCart";
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

type Props = {
  onClose(): void;
}

function ShoppingCartDetails({ onClose }: Props) {
  const shoppingCartItems = useSelector(getShoppingCartItems);
  const dispatch = useDispatch();
  const { numberOfItems, itemsTotal } = useSelector(getShoppingCartTotal);

  return (
    <div className="flex flex-col gap-4 min-w-4xl">
      {
        shoppingCartItems.map((item) => (
          <div key={`shopping-cart-item-${item.product.id}`} className="grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-14 justify-between items-center">
            <Image className="grow-1" src={item.product.thumbnail} width={150} height={100} alt={`${item.product.title}`} />
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
                  className="p-0 min-w-0 relative"
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
        <div className="flex gap-10 items-center justify-end">
          <div>
            <div className="font-bold text-sm text-dark-grey">Sub total</div>
            <div className="text-xs text-light-grey text-left">{numberOfItems} items</div>
          </div>
          <div className="text-dark-grey text-xl font-bold">${itemsTotal}</div>
        </div>
        <div className="flex gap-5 items-center justify-end mt-5">
          <Button
            variant="text"
            onClick={onClose}
            sx={{
              color: "#d32f2f",
              fontSize: '12px',
              textTransform: 'none'
            }}>Cancel</Button>
          <Button
            variant="contained"
            className='bg-blue-link'
            sx={{
              textTransform: 'none'
            }}>Checkout</Button>
        </div>
      </div>
    </div>
  )
}

export default ShoppingCartDetails;