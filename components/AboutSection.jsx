import ButtonCTA from '@/src/utils/ButtonCTA'
import SectionHeading from '@/src/utils/SectionHeading'
import Image from 'next/image'
import React from 'react'

const AboutSection = () => {
  return (
   <section id="about" className="mt-10 py-20 bg-white">
    <SectionHeading title = "About Us" underlineclass="md:w-32" />
      <div className="container mx-auto px-6">
        <div className="md:flex md:items-center gap-12">
          {/* Image Column */}
          <div className="md:w-1/2">
            <Image 
              src="/images/out.jpg" 
              alt="King Sukh Guest House Property" 
              className="rounded-lg shadow-xl w-full"
              width="540"
              height="720"
            />
          </div>
          {/* Text Column */}
          <div className="md:w-1/2 mt-8 md:mt-0">
            <h2 className="text-4xl font-playfair text-brand-slate mb-4">
              A Warm Welcome Awaits You
            </h2>
            <p className="font-roboto text-gray-600 leading-relaxed mb-6">
             Embark on a tranquil journey at our Kingsukh Guest House, enveloped by the scenic allure of Biharinath Hill, Baranti Hill, Susunia Hill, Joychandi Hill, Garhpanchkot, Baranti Dam, Maithon Dam, and the captivating Panchat Dam. Revel in the embrace of comfort, relish delightful meals, and unwind in our verdant garden oasis. Your ideal retreat beckons, promising a harmonious blend of nature's beauty and heartfelt hospitality. Explore the hidden gems of Purulia, creating memories that linger long after your stay.</p>
            <p className="font-roboto font-bold text-gray-800 leading-relaxed mb-6">
            Address: Beside Barshal Water Tank, Manpur, Barhanti, West Bengal-723156
            <br />
            Contact us: +91 9007062180
            </p>
              <ButtonCTA />
          </div>
        </div>
      </div>
    </section>
    )
}

export default AboutSection