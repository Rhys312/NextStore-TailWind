import React from 'react';
import Link from 'next/link';
import Cart from '../components/Cart';
import Search from '../components/Search';
import Account from '../components/Account';
import { useState, useEffect, useContext } from 'react';

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div
      className={`flex z-[9999] fixed top-0 w-screen items-stretch justify-between space-x-2 px-4 py-1 ${
        isScrolled ? 'bg-slate-600 text-white' : 'bg-transparent text-white'
      }`}
    >
      <div className="flex flex-row items-center cursor-pointer">
        <Link href={'/'}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1200px-Tailwind_CSS_Logo.svg.png?20211001194333"
            alt="tailwind-logo"
            className="h-12 w-12 top-2 left-5 object-contain"
          />
        </Link>
        <ul className=" space-x-4 md:flex flex flex-row justify-center list-none px-4 lg:px-10 lg:space-x-10 ">
          <li>Home</li>
          <li>Movies</li>
          <li>Series</li>
          <li>My List</li>
        </ul>
      </div>

      <div className="flex flex-row items-center space-x-4 ">
        <Search isScrolled={isScrolled} />
        <Cart />
        <Account />
      </div>
    </div>
  );
};

export default NavBar;
