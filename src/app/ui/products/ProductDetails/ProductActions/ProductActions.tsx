"use client";

import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { HeartIcon, ShoppingCartIcon, EyeIcon } from '@/app/ui/icons';
import Snackbar from '@mui/material/Snackbar';
import { useState } from 'react';
import { Product } from '@/app/lib/react-query/queries/useGetProducts';
import { addItem } from '@/app/lib/redux/reducers/shoppingCart';
import { addWishListItem } from '@/app/lib/redux/reducers/wishList';
import { useDispatch, useSelector } from 'react-redux';
import { getItemSelected } from '@/app/lib/redux/selectors/rootState';

type Props = {
  product: Product;
}

function ProductActions({ product }: Props) {
  const [open, setOpen] = useState(false);
  const [actionText, setActionText] = useState("");
  const dispatch = useDispatch();
  const itemSelected = useSelector(getItemSelected({ product }));
  const buttonClass = "rounded-full border-solid border-[1px] border-faded-grey";
  const sx = {
    "&.Mui-disabled": {
      background: "#e0e0e0",
      color: "#c0c0c0"
    }
  };

  const onClick = (action: 'wishlist' | 'cart') => {
    const prodName = product.title;
    setActionText(action === 'wishlist'
      ? `${prodName} has been added to your wish list`
      : `${prodName} has been added to your cart`);
    setOpen(true);

    if (action === 'cart') {
      dispatch(addItem(product));
    } else if (action === 'wishlist') {
      dispatch(addWishListItem(product));
    }
  }

  const handleClose = (_: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <div className="flex gap-3 items-center">
      <Button variant="contained" className='bg-blue-link'>Select Options</Button>
      <IconButton
        disabled={itemSelected}
        className={buttonClass}
        onClick={() => onClick('wishlist')}
        sx={sx}>
        <HeartIcon className="text-light-grey" />
      </IconButton>
      <IconButton
        disabled={itemSelected}
        className={buttonClass}
        onClick={() => onClick('cart')}
        sx={sx}>
        <ShoppingCartIcon className="text-light-grey" />
      </IconButton>
      <IconButton
        className={buttonClass}
        disabled={itemSelected}
        sx={sx}>
        <EyeIcon className="text-light-grey" />
      </IconButton>
      <Snackbar
        open={open}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        autoHideDuration={2000}
        onClose={handleClose}
        message={actionText}
      />
    </div>
  )
}

export default ProductActions;