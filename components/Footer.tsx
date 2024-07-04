import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-primary/40 text-white py-4 text-center">
      <div className="container mx-auto">
        <p>
          &copy; {new Date().getFullYear()} Your Website Name. All rights
          reserved.
        </p>
        <p>Designed and developed by @Prodipta</p>
      </div>
    </footer>
  );
};

export default Footer;
