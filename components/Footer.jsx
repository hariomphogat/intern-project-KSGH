import React from 'react'

const Footer = () => {
  return (
   <footer className="bg-[#2C3E50] text-white py-8">
      <div className="container mx-auto px-6 text-center">
        <p className="font-roboto">&copy; {new Date().getFullYear()} King Sukh Guest House. All Rights Reserved.</p>
      </div>
    </footer>
  )
}

export default Footer