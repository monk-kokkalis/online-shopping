"use client";
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { HeartIcon, ShoppingCartIcon, EyeIcon } from '@/app/ui/icons';
import Snackbar from '@mui/material/Snackbar';
import { useState } from 'react';
import { Product } from '@/app/lib/react-query/queries/useGetProducts';

type Props = {
  product: Product;
}

function ProductActions({ product }: Props) {
  const [open, setOpen] = useState(false);
  const [actionText, setActionText] = useState("");
  const buttonClass = "rounded-full border-solid border-[1px] border-faded-grey";

  const onClick = (action: 'wishlist' | 'cart') => {
    const prodName = product.title;
    setActionText(action === 'wishlist'
      ? `${prodName} has been added to your wish list`
      : `${prodName} has been added to your cart`);
    setOpen(true);
  }

  const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <div className="flex gap-3 items-center">
      <Button variant="contained" className='bg-blue-link'>Select Options</Button>
      <IconButton
        className={buttonClass}
        onClick={() => onClick('wishlist')}>
        <HeartIcon className="text-light-grey" />
      </IconButton>
      <IconButton
        className={buttonClass}
        onClick={() => onClick('cart')}>
        <ShoppingCartIcon className="text-light-grey" />
      </IconButton>
      <IconButton className={buttonClass}>
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