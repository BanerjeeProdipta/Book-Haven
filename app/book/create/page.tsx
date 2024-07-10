'use client';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import axiosInstance from '@/services/axiosInstance';
import Image from 'next/image';
import { FaEdit } from 'react-icons/fa';
import axios from 'axios';

interface CreateBookFormInputs {
  imageData: FileList;
  date: string;
  authorImageData: FileList;
  author: string;
  title: string;
  price: number;
  category: string;
  rating: number;
  description: string;
}

const CreateBookForm: React.FC = () => {
  const [error, setError] = useState('');
  const [bookCoverPreview, setBookCoverPreview] = useState<string | null>(null);
  const [authorImagePreview, setAuthorImagePreview] = useState<string | null>(
    null
  );
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateBookFormInputs>();

  const handleBookCoverChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setBookCoverPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAuthorImageChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAuthorImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = handleSubmit(async (data) => {
    try {
      const formData = new FormData();

      // Append file data if available
      if (data.imageData[0]) {
        formData.append('imageData', data.imageData[0]);
      }

      if (data.authorImageData[0]) {
        formData.append('authorImageData', data.authorImageData[0]);
      }

      // Append other form fields
      formData.append('author', data.author);
      formData.append('title', data.title);
      formData.append('price', String(data.price));
      formData.append('category', data.category);
      formData.append('rating', String(data.rating));
      formData.append('description', data.description);

      // Submit form data via Axios
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}books`,
        data,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      console.log(response.data); // Log response data for debugging
      // router.push('/books'); // Navigate to '/books' upon successful submission
    } catch (error) {
      console.error('Error submitting form:', error); // Log detailed error for debugging
      setError('Failed to add book. Please try again.'); // Display user-friendly error message
    }
  });

  return (
    <form
      onSubmit={onSubmit}
      className="px-12 mx-auto min-w-[44rem] lg:px-24 space-y-8 py-8"
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        Create a New Book
      </h2>
      <div className="flex flex-1 justify-between space-x-24">
        <div className="flex flex-col space-y-8">
          {/* Book Cover Upload */}
          <div className="flex flex-col space-y-2">
            <label
              htmlFor="bookCover"
              className="text-sm flex items-center space-x-2 font-medium text-gray-700"
            >
              <span>Book Cover</span>
              <FaEdit />
            </label>
            <div className="relative w-52 h-72 border border-gray-300 rounded-md flex items-center justify-center cursor-pointer">
              <input
                type="file"
                id="bookCover"
                {...register('imageData')}
                onChange={handleBookCoverChange}
                accept="image/*"
                className="absolute inset-0 opacity-0 cursor-pointer"
              />
              {bookCoverPreview ? (
                <Image
                  src={bookCoverPreview}
                  alt="Book Cover Preview"
                  layout="fill"
                  objectFit="contain"
                />
              ) : (
                <div className="flex items-center justify-center space-x-1">
                  <span>Book Cover</span>
                </div>
              )}
            </div>
          </div>
          {/* Author Image Upload */}
          <div className="flex flex-col space-y-2">
            <label
              htmlFor="authorImage"
              className="text-sm flex items-center space-x-2 font-medium text-gray-700"
            >
              <span>Author Image</span>
              <FaEdit />
            </label>
            <div className="relative w-32 h-32 border border-gray-300 rounded-md flex items-center justify-center cursor-pointer">
              <input
                type="file"
                id="authorImage"
                {...register('authorImageData')}
                onChange={handleAuthorImageChange}
                accept="image/*"
                className="absolute inset-0 opacity-0 cursor-pointer"
              />
              {authorImagePreview ? (
                <Image
                  src={authorImagePreview}
                  alt="Author Image Preview"
                  layout="fill"
                  objectFit="cover" // You can adjust objectFit as per your design needs
                />
              ) : (
                <div className="flex items-center justify-center space-x-1">
                  <span>Author Image</span>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-1 flex-col space-y-4 max-w-xl">
          {/* Title */}
          <div className="flex flex-col space-y-2">
            <label
              htmlFor="title"
              className="text-sm font-medium text-gray-700"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              {...register('title', { required: 'Title is required' })}
              className={`border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500 ${
                errors.title ? 'border-red-500' : ''
              }`}
            />
            {errors.title && (
              <span className="text-red-500 text-sm">
                {errors.title.message}
              </span>
            )}
          </div>

          {/* Date */}
          <div className="flex flex-col space-y-2">
            <label htmlFor="date" className="text-sm font-medium text-gray-700">
              Date
            </label>
            <input
              type="date"
              id="date"
              {...register('date')}
              className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Author */}
          <div className="flex flex-col space-y-2">
            <label
              htmlFor="author"
              className="text-sm font-medium text-gray-700"
            >
              Author
            </label>
            <input
              type="text"
              id="author"
              {...register('author', { required: 'Author is required' })}
              className={`border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500 ${
                errors.author ? 'border-red-500' : ''
              }`}
            />
            {errors.author && (
              <span className="text-red-500 text-sm">
                {errors.author.message}
              </span>
            )}
          </div>

          {/* Price */}
          <div className="flex flex-col space-y-2">
            <label
              htmlFor="price"
              className="text-sm font-medium text-gray-700"
            >
              Price
            </label>
            <input
              type="number"
              id="price"
              {...register('price', {
                required: 'Price is required',
                valueAsNumber: true,
              })}
              className={`border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500 ${
                errors.price ? 'border-red-500' : ''
              }`}
            />
            {errors.price && (
              <span className="text-red-500 text-sm">
                {errors.price.message}
              </span>
            )}
          </div>

          {/* Category */}
          <div className="flex flex-col space-y-2">
            <label
              htmlFor="category"
              className="text-sm font-medium text-gray-700"
            >
              Category
            </label>
            <input
              type="text"
              id="category"
              {...register('category')}
              className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Rating */}
          <div className="flex flex-col space-y-2">
            <label
              htmlFor="rating"
              className="text-sm font-medium text-gray-700"
            >
              Rating
            </label>
            <input
              type="number"
              step="0.1"
              id="rating"
              {...register('rating', { valueAsNumber: true })}
              className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>
      </div>
      {/* Description */}
      <div className="flex flex-col space-y-2">
        <label
          htmlFor="description"
          className="text-sm font-medium text-gray-700"
        >
          Description
        </label>
        <textarea
          id="description"
          {...register('description')}
          className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
        ></textarea>
      </div>
      {/* Submit Button */}
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300"
      >
        Add Book
      </button>

      {/* Error Handling */}
      {error && <p className="text-red-400">{error}</p>}
    </form>
  );
};

export default CreateBookForm;
