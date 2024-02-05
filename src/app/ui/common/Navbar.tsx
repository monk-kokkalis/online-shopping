"use client";

import Link from 'next/link';
import { ChevronDownIcon, MagnifyingGlassIcon, ShoppingCartIcon, UserIcon } from '../icons';
import { HeartIcon } from '../icons/HeartIcon';
import { useSelector } from 'react-redux';
import { useMemo } from 'react';
import { getShoppingCartItems } from '@/app/lib/redux/selectors/shoppingCart';
import { getWishListItems } from '@/app/lib/redux/selectors/wishList';

function Navbar() {
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
  return (
    <nav className="container relative px-8 py-6 flex items-center justify-between">
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
        <div className='flex items-center gap-3 text-[#0e1d56] md:text-blue-link'>
          <div className='flex gap-2 items-center'>
            <MagnifyingGlassIcon />
            <div className='text-sm min-w-[6px]'></div>
          </div>
          <div className='flex gap-2 items-center'>
            <ShoppingCartIcon />
            <div className='text-sm min-w-[6px]'>{!!shoppingCartItemsCount && (shoppingCartItemsCount)}</div>
          </div>
          <div className='flex gap-2 items-center'>
            <HeartIcon />
            <div className='text-sm min-w-[6px]'>{!!wishListItemsCount && (wishListItemsCount)}</div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;