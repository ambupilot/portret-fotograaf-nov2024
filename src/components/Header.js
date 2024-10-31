// src/components/Header.js
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gray-900 text-white py-4 shadow-md">
      <nav className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-2xl font-bold">Portret Fotograaf</h1>
        
        {/* Hamburger menu-knop, alleen zichtbaar op kleinere schermen */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {/* Hamburger icoon */}
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>

        {/* Menu-items - zichtbaar op grotere schermen, verborgen op kleinere */}
        <ul className="hidden md:flex space-x-4">
          <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
          <li><Link to="/portfolio" className="hover:text-gray-300">Portfolio</Link></li>
          <li><Link to="/contact" className="hover:text-gray-300">Contact</Link></li>
        </ul>

        {/* Uitklapmenu - zichtbaar wanneer het menu is geopend op kleinere schermen */}
        {isOpen && (
          <ul className="absolute top-16 left-0 w-full bg-gray-900 text-white flex flex-col items-center space-y-4 py-4 md:hidden">
            <li><Link to="/" onClick={toggleMenu} className="hover:text-gray-300">Home</Link></li>
            <li><Link to="/portfolio" onClick={toggleMenu} className="hover:text-gray-300">Portfolio</Link></li>
            <li><Link to="/contact" onClick={toggleMenu} className="hover:text-gray-300">Contact</Link></li>
          </ul>
        )}
      </nav>
    </header>
  );
}

export default Header;
