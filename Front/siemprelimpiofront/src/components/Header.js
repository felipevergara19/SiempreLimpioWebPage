import React from 'react';

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-10 bg-gray-800 text-white py-4">
      <nav className="container mx-auto">
        <ul className="flex space-x-4 text-white">
          <li><a href="#about" className="hover:text-gray-300">About</a></li>
          <li><a href="#services" className="hover:text-gray-300">Services</a></li>
          <li><a href="#contact" className="hover:text-gray-300">Contact</a></li>
          <li><a href="#footer" className="hover:text-gray-300">Footer</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;