import ButtonCTA from '@/src/utils/ButtonCTA';
import React from 'react'

const HeroSection = () => {
 
  return (
    <section 
      className="relative min-h-screen bg-cover bg-bottom lg:bg-center flex justify-center items-start pt-36" 
      style={{ backgroundImage: "url('images/header.jpg')" }}
    >
      {/* Dark Overlay*/}
      <div className="absolute inset-0 bg-black opacity-40"></div>
      
      {/* main Content */}
      <div className="relative z-10  text-center px-4">
        <h1 className="text-5xl text-white md:text-7xl font-playfair mb-4">
          Your Home Away From Home
        </h1>
        <p className="text-lg text-gray-400 md:text-2xl mb-8 font-roboto">
          Cozy, comfortable, and welcoming stays.
        </p>
        <ButtonCTA />
      </div>
    </section>
  );
}

export default HeroSection