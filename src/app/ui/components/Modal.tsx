import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import { getShoppingCartItems } from '@/app/lib/redux/selectors/shoppingCart';
import { getWishListItems } from '@/app/lib/redux/selectors/wishList';
import { useSelector } from 'react-redux';
import ShoppingCartDetails from './ShoppingCartDetails';
import WishListDetails from './WishListDetails';

export type DisplayType = 'wishList' | 'shoppingCart';

type Props = {
  open: boolean;
  displayType: DisplayType;
  onClose(): void;
}

function Modal({ open, displayType, onClose }: Props) {
  const shoppingCartItems = useSelector(getShoppingCartItems);
  const wishListItems = useSelector(getWishListItems);

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="md">
      <DialogTitle className='text-left text-sm text-light-grey font-bold'>{displayType === 'shoppingCart' ? 'Shopping cart' : 'Wish list'}</DialogTitle>
      <div className='p-8'>
        {
          displayType === 'shoppingCart' ? (
            shoppingCartItems.length > 0
              ? (<ShoppingCartDetails onClose={onClose} />)
              : (<p>You shopping cart is empty.</p>)
          ) : (
            wishListItems.length > 0
              ? (<WishListDetails onClose={onClose} />)
              : (<p>Your wish list is empty.</p>)
          )
        }
      </div>
    </Dialog>
  );

}

export default Modal;