import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
   const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gray-700 text-white pt-16 pb-8 relative">
      <button 
        onClick={scrollToTop}
        className="absolute -top-6 right-8 bg-amber-400 text-white p-4 rounded-full shadow-lg hover:bg-yellow-600 transition-all duration-300"
        aria-label="Back to top"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
      </button>

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* Column 1: About */}
          <div className="col-span-1 ">
            {/* <h3 className="text-2xl font-playfair font-bold mb-4">King Sukh Guest House</h3> */}
            <Link href="/">
          <Image src={"/images/logo-ksgh.webp"} alt='Kingh Sukh Guest House' width="186" height="115" /></Link>
            <p className=" mt-4 font-roboto text-gray-400">
              Your home away from home. Experience a comfortable and welcoming stay with us.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="col-span-1 lg:pl-16">
            <h4 className="text-lg font-roboto font-semibold mb-4 ">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="#about" className="text-gray-400 hover:text-brand-gold">About Us</Link></li>
              <li><Link href="#rooms" className="text-gray-400 hover:text-brand-gold">Rooms</Link></li>
              <li><Link href="#gallery" className="text-gray-400 hover:text-brand-gold">Gallery</Link></li>
              <li><Link href="#contact" className="text-gray-400 hover:text-brand-gold">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Our Services */}
          <div className="col-span-1">
            <h4 className="text-lg font-roboto font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>High Class Security</li>
              <li>24 Hours Room Service</li>
              <li>Restaurant</li>
              <li>Tourist Guide Support</li>
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div className="col-span-1">
            <h4 className="text-lg font-roboto font-semibold mb-4">Contact Us</h4>
            <address className="not-italic text-gray-400 space-y-2">
              <p>Beside Barshal Water Tank, Manpur, Barhanti, West Bengal 723156</p>
              <p>kkghosh0099@gmail.com</p>
              <p>+91 9007062180</p>
            </address>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-brand-gold"><FaFacebookF size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-brand-gold"><FaTwitter size={24} /></a>
              <a href="https://www.instagram.com/kingsukhguesthouse/" target='_blank' className="text-gray-400 hover:text-brand-gold"><FaInstagram size={24} /></a>
              <a href="https://wa.me/919007062180" target='_blank' className="text-gray-400 hover:text-brand-gold"><FaWhatsapp size={24} /></a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-700 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} King Sukh Guest House. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer