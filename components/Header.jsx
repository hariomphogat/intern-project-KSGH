import React from 'react'
import { useState } from 'react';
import Link from 'next/link';

const Header = () => {
 
    const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold font-playfair text-[#2C3E50]">
          <Link href="/">King Sukh Guest House</Link>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-gray-600 hover:text-[#D4AF37]">Home</Link>
          <Link href="/#about" className="text-gray-600 hover:text-[#D4AF37]">About</Link>
          <Link href="/#rooms" className="text-gray-600 hover:text-[#D4AF37]">Rooms</Link>
          <Link href="/#services" className="text-gray-600 hover:text-[#D4AF37]">Services</Link>
          <Link href="/#contact" className="text-gray-600 hover:text-[#D4AF37]">Contact</Link>
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-[#2C3E50] focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white pb-4">
          <Link href="/" className="block px-6 py-2 text-gray-600 hover:bg-gray-100">Home</Link>
          <Link href="/#about" className="block px-6 py-2 text-gray-600 hover:bg-gray-100">About</Link>
          <Link href="/#rooms" className="block px-6 py-2 text-gray-600 hover:bg-gray-100">Rooms</Link>
          <Link href="/#services" className="block px-6 py-2 text-gray-600 hover:bg-gray-100">Services</Link>
          <Link href="/#gallary" className="block px-6 py-2 text-gray-600 hover:bg-gray-100">Gallary</Link>
          <Link href="/#contact" className="block px-6 py-2 text-gray-600 hover:bg-gray-100">Contact</Link>
        </nav>
      )}
    </header>
  );
  
}

export default Header