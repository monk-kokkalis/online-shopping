import Link from 'next/link';
import { ChevronDownIcon, MagnifyingGlassIcon, UserIcon } from '../icons';

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
    <nav className="px-8 py-6 flex items-center justify-between">
      <div className='flex items-center justify-between gap-16'>
        <div className="text-[#252B42] font-bold">Bandage</div>
        <ul className='text-sm text-[#737373] flex gap-5 font-bold'>
          {links.map((link, index) => <Link key={`home-nav-link-${index}`} href="/">{link}</Link>)}
        </ul>
      </div>
      {/* @TODO enable redux connection */}
      <div className='flex items-center gap-8'>
        <div className='text-blue-link flex gap-2 items-center'>
          <UserIcon width={12} height={12} />
          <span className='font-bold text-sm'>Login / Register</span>
        </div>
        <div className='flex items-center gap-3 text-blue-link'>
          <MagnifyingGlassIcon />
        </div>
      </div>
    </nav>
  )
}

export default Navbar;