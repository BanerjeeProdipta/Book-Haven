'use client';
import Link from 'next/link';
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

interface SignUpFormInputs {
  email: string;
  password: string;
  confirmPassword: string;
}

const SignUpForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<SignUpFormInputs>();

  const onSubmit: SubmitHandler<SignUpFormInputs> = (data) => {
    console.log(data);
  };

  // Watch password and confirmPassword for validation
  const password = watch('password', '');

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Sign Up</h2>
      <div className="flex flex-col space-y-2">
        <label htmlFor="email" className="text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          id="email"
          {...register('email', { required: 'Email is required' })}
          className={`border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500 ${
            errors.email ? 'border-red-500' : ''
          }`}
        />
        {errors.email && (
          <span className="text-red-500 text-sm">{errors.email.message}</span>
        )}
      </div>
      <div className="flex flex-col space-y-2">
        <label htmlFor="password" className="text-sm font-medium text-gray-700">
          Password
        </label>
        <input
          type="password"
          id="password"
          {...register('password', { required: 'Password is required' })}
          className={`border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500 ${
            errors.password ? 'border-red-500' : ''
          }`}
        />
        {errors.password && (
          <span className="text-red-500 text-sm">
            {errors.password.message}
          </span>
        )}
      </div>
      <div className="flex flex-col space-y-2">
        <label
          htmlFor="confirmPassword"
          className="text-sm font-medium text-gray-700"
        >
          Confirm Password
        </label>
        <input
          type="password"
          id="confirmPassword"
          {...register('confirmPassword', {
            required: 'Please confirm your password',
            validate: (value) => value === password || 'Passwords do not match',
          })}
          className={`border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500 ${
            errors.confirmPassword ? 'border-red-500' : ''
          }`}
        />
        {errors.confirmPassword && (
          <span className="text-red-500 text-sm">
            {errors.confirmPassword.message}
          </span>
        )}
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300"
      >
        Sign Up
      </button>
      {/* Sign In Link */}
      <p className="mt-4 text-sm text-gray-600">
        Already have an account?{' '}
        <Link href="/auth/sign-in" className="text-primary">
          Sign In
        </Link>
      </p>
    </form>
  );
};

export default SignUpForm;
