"use client";

import Link from 'next/link';
import { ChevronDownIcon, MagnifyingGlassIcon, ShoppingCartIcon, UserIcon } from '../icons';
import { HeartIcon } from '../icons/HeartIcon';
import { useSelector } from 'react-redux';
import { useMemo } from 'react';
import { getShoppingCartItems } from '@/app/lib/redux/selectors/shoppingCart';
import { getWishListItems } from '@/app/lib/redux/selectors/wishList';
import Modal from '../components/Modal';
import Button from '@mui/material/Button';
import { useState } from 'react';
import type { DisplayType } from '../components/Modal';

function Navbar() {
  const [displayType, setDisplayType] = useState<DisplayType>('shoppingCart');
  const [modalOpen, setModalOpen] = useState(false);
  const shoppingCartItemsCount = useSelector(getShoppingCartItems).length;
  const wishListItemsCount = useSelector(getWishListItems).length;
  const links = useMemo(() => [
    "Home",
    <span key="shop-link" className='flex items-center gap-2 text-black'>
      <span className='font-normal '>Shop</span>
      <ChevronDownIcon width={12} height={12} />
    </span>,
    "About",
    "Blog",
    "Contact",
    "Pages"
  ], []);

  const onHeaderButtonClick = (display: DisplayType) => {
    setDisplayType(display);
    setModalOpen(true);
  }
  return (
    <nav className="container relative px-8 py-6 flex items-center justify-between">
      <Modal
        open={modalOpen}
        displayType={displayType}
        onClose={() => setModalOpen(false)}
      />
      <div className='flex flex-col md:flex-row justify-between gap-16 w-full md:w-auto'>
        <div className="text-dark-grey font-bold">Bandage</div>
        <ul className='text-sm text-light-grey flex flex-col md:flex-row gap-5 font-bold items-center'>
          {links.map((link, index) => <Link key={`home-nav-link-${index}`} href="/">{link}</Link>)}
        </ul>
      </div>
      <div className='flex absolute md:static items-center gap-8 top-7 right-8'>
        <div className='hidden text-blue-link md:flex gap-2 items-center'>
          <UserIcon width={12} height={12} />
          <span className='font-bold text-sm'>Login / Register</span>
        </div>
        <div className='flex items-center text-[#0e1d56] md:text-blue-link'>
          <Button variant="text" className='flex gap-2 items-center min-h-8 p-0 min-w-0 w-12'>
            <MagnifyingGlassIcon />
            <div className='text-sm min-w-[9px]'></div>
            </Button>
          <Button
            variant="text"
            className='flex gap-2 items-center min-h-8 p-0 min-w-0 w-12'
            onClick={() => onHeaderButtonClick('shoppingCart')}>
            <ShoppingCartIcon />
            <div className='text-sm min-w-[9px]'>{!!shoppingCartItemsCount && (shoppingCartItemsCount)}</div>
          </Button>
          <Button
            variant="text"
            className='flex gap-2 items-center min-h-8 p-0 min-w-0 w-12'
            onClick={() => onHeaderButtonClick('wishList')}>
            <HeartIcon />
            <div className='text-sm min-w-[9px]'>{!!wishListItemsCount && (wishListItemsCount)}</div>
          </Button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;