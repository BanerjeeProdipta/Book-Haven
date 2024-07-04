'use client';
import React from 'react';
import Link from 'next/link';
import { useRecoilState, useRecoilValue } from 'recoil';
import { cartState } from './recoilContextProvider';
import { FaShoppingCart } from 'react-icons/fa';

const Nav = () => {
  const [cartItems] = useRecoilState(cartState); // State for cart items

  const totalCount = Object.values(cartItems).reduce(
    (acc, currentItem) => acc + currentItem.quantity,
    0
  );
  return (
    <nav
      className="flex items-center justify-between p-3 lg:px-4 bg-gray-50"
      aria-label="Global"
    >
      <div className="flex lg:flex-1">
        <Link href="/">
          <p className="font-bold text-xl text-gray-900">Book Haven</p>
        </Link>
      </div>
      <div className="flex lg:hidden">
        <button
          type="button"
          className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>
      <div className="flex items-center space-x-6">
        <Link href="/cart">
          <div className="flex items-center space-x-2 ml-4  px-3 py-1.5 rounded-full bg-primary text-white text-sm">
            <FaShoppingCart className="text-white" size={24} />
            <span className="">{totalCount}</span>
          </div>
        </Link>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link href="/auth/sign-in" className="text-gray-900 cursor-pointer">
            Log in <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
