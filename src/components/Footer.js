// components/Footer.js
import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center px-4">
        <p>© {new Date().getFullYear()} Portret Fotograaf. Alle rechten voorbehouden.</p>
        <div className="mt-2 flex justify-center space-x-4">
          <a href="#facebook" className="hover:text-gray-300">Facebook</a>
          <a href="#instagram" className="hover:text-gray-300">Instagram</a>
          <a href="#linkedin" className="hover:text-gray-300">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
