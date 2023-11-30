import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-800 p-4">
      <nav className="container mx-auto">
        <ul className="flex space-x-4 text-white">
          <li><a href="#about" className="hover:text-gray-300">About</a></li>
          <li><a href="#services" className="hover:text-gray-300">Services</a></li>
          <li><a href="#contact" className="hover:text-gray-300">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;