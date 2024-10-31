// components/Header.js
import React from "react";

function Header() {
  return (
    <header className="bg-gray-900 text-white py-4 shadow-md">
      <nav className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-2xl font-bold">Portret Fotograaf</h1>
        <ul className="flex space-x-4">
          <li><a href="#home" className="hover:text-gray-300">Home</a></li>
          <li><a href="#portfolio" className="hover:text-gray-300">Portfolio</a></li>
          <li><a href="#contact" className="hover:text-gray-300">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
