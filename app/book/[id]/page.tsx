'use client';
import React from 'react';
import { Book } from '@/types';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useRecoilState } from 'recoil';
import { cartState } from '@/components/recoilContextProvider';
import { toast } from 'react-toastify';
import { books } from '@/utils/data';

const BookDetails: React.FC<{ params: { id: string } }> = ({ params }) => {
  const router = useRouter();
  const [cartItems, setCartItems] = useRecoilState(cartState);

  // Find the dummyBook with the matching id from the books array
  const dummyBook: Book | undefined = books.find(
    (book) => book.id === params.id
  );

  if (!dummyBook) {
    return <div>Book not found</div>;
  }

  const addToCart = () => {
    const existingItem = cartItems[params.id];

    if (existingItem) {
      // Item already exists in cart, increase quantity
      setCartItems({
        ...cartItems,
        [params.id]: {
          quantity: existingItem.quantity + 1,
          details: dummyBook,
        },
      });
    } else {
      // Item does not exist in cart, add with quantity 1
      setCartItems({
        ...cartItems,
        [params.id]: {
          quantity: 1,
          details: dummyBook,
        },
      });
    }
    toast.success('Added to cart!');
  };

  const removeFromCart = () => {
    const updatedCart = { ...cartItems };
    const existingItem = updatedCart[dummyBook.id];

    if (existingItem) {
      if (existingItem.quantity === 1) {
        // If quantity is 1, remove the item from cart
        delete updatedCart[dummyBook.id];
      } else {
        // Decrease quantity by 1
        updatedCart[dummyBook.id] = {
          ...existingItem,
          quantity: existingItem.quantity - 1,
        };
      }

      setCartItems(updatedCart);
      toast.error('Removed from cart!');
    }
  };

  const buyNow = () => {
    const existingItem = cartItems[dummyBook.id];

    if (!existingItem) {
      setCartItems({
        ...cartItems,
        [dummyBook.id]: {
          quantity: 1,
          details: dummyBook,
        },
      });
    }

    router.push('/cart');
  };

  return (
    <div className="min-h-screen flex">
      <div className="flex-1 hidden md:block relative">
        <Image
          src={dummyBook.imageUrl}
          alt="Book Image"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="h-full w-full"
        />
      </div>
      {/* Right side with book details */}
      <div className="flex-1 flex flex-col justify-center p-12">
        <h1 className="text-2xl font-bold mb-4">{dummyBook.title}</h1>
        <div className="flex items-center mb-4">
          <Image
            src={dummyBook.authorImageUrl}
            alt={dummyBook.author}
            width={50}
            height={50}
            className="rounded-full mr-2"
          />
          <p className="text-gray-600 text-sm">{dummyBook.author}</p>
        </div>
        <p className="text-gray-600 text-sm mb-2">
          Publication Date: {dummyBook.date}
        </p>
        <p className="text-gray-700 my-6">{dummyBook.description}</p>
        <p className="text-xl font-bold text-gray-800">${dummyBook.price}</p>

        <div className="flex items-center mt-8">
          <div className="flex items-center">
            <label htmlFor={`quantity`} className="mr-2 text-xl font-semibold">
              Quantity:
            </label>
            <button
              onClick={removeFromCart}
              className="border border-gray-300 rounded-l-md px-2 py-2 text-center"
            >
              -
            </button>
            <input
              type="number"
              className="border border-gray-300 px-2 py-2 w-16 text-center"
              value={cartItems[params.id]?.quantity ?? 0}
              onChange={() => {}}
              min="1"
              readOnly
            />
            <button
              onClick={addToCart}
              className="border border-gray-300 rounded-r-md px-2 py-2 text-center"
            >
              +
            </button>
          </div>
          <button
            onClick={buyNow}
            className="ml-4 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
