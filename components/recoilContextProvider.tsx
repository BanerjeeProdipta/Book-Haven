'use client';
import React from 'react';
import { RecoilRoot, atom } from 'recoil';
import { Book } from '@/types';

interface CartItem {
  quantity: number;
  details: Book;
}

// Initialize an empty cart
const initialCart: Record<string, CartItem> = {};

// Define the atom for cart state
export const cartState = atom<Record<string, CartItem>>({
  key: 'cartState',
  default: initialCart,
});

// Recoil context provider component
const RecoilContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <RecoilRoot>{children}</RecoilRoot>;
};

export default RecoilContextProvider;
