// components/AuthLayout.tsx

import React from 'react';
import Image from 'next/image';

const AuthLayout: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <div className="min-h-screen flex">
      {/* Left side with the image */}
      <div className="flex-1 hidden md:block relative">
        <Image
          src="/assets/header.png"
          alt="Auth Image"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="h-full w-full"
        />
      </div>

      {/* Right side with the form or children */}
      <div className="flex-1 flex items-center justify-center">
        <div className="max-w-md w-full px-4">{children}</div>
      </div>
    </div>
  );
};

export default AuthLayout;
