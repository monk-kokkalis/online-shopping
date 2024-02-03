import Link from 'next/link';
import { ChevronDownIcon, MagnifyingGlassIcon, ShoppingCartIcon, UserIcon } from '../icons';
import { HeartIcon } from '../icons/HeartIcon';

function Navbar() {
  const links = [
    "Home",
    <span key="shop-link" className='flex items-center gap-2 text-black'>
      <span className='font-normal '>Shop</span>
      <ChevronDownIcon width={12} height={12} />
    </span>,
    "About",
    "Blog",
    "Contact",
    "Pages"
  ];
  return (
    <nav className="relative px-8 py-6 flex items-center justify-between">
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
        <div className='flex items-center gap-6 text-[#0e1d56] md:text-blue-link'>
          {/* @TODO enable redux connection */}
          <MagnifyingGlassIcon />
          <ShoppingCartIcon />
          <HeartIcon />
        </div>
      </div>
    </nav>
  )
}

export default Navbar;