import React from 'react'
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ButtonCTA from '@/src/utils/ButtonCTA';
import { navItems } from '@/src/constants';
const Header = () => {
 
    const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="backdrop-blur-lg shadow-lg sticky top-0 z-99 flex flex-row w-screen">
        {/* logo */}
      <div className="flex lg:w-1/4 w-3/4 bg-black/80 justify-center items-center">
          <Link href="/">
          <Image src={"/images/logo-ksgh.webp"} alt='Kingh Sukh Guest House' width="186" height="115" /></Link>
      </div>
    
      <div className="bg-white/80 flex lg:w-3/4 w-1/4">
         <div className="container mx-auto px-12 md:px-6 py-4 flex md:justify-around justify-end items-center ">
        
        {/* nav links */}
        <nav className="hidden lg:flex items-center space-x-6 text-lg">
          {navItems.map((item) =><Link href={item.href} className="text-gray-700 hover:text-[#D4AF37]">{item.name}</Link>) }
        </nav>
        {/* cta button */}
        <div className='hidden md:flex items-center space-x-6'>
          <ButtonCTA />
        </div>
        <div className="lg:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-[#2C3E50] focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="#505050" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
    {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="lg:hidden bg-white/95 flex flex-col items-center absolute top-15 md:top-21 w-full pb-4 mt-[1px]">
          {navItems.map((item) =><Link href={item.href} className="block w-full text-center px-6 py-2 text-gray-700 hover:text-[#D4AF37] hover:bg-gray-100">{item.name}</Link>) }
       </nav>
      )}
    </header>
  );
  
}

export default Header