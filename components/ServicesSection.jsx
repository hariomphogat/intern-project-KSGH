import { services } from '@/src/constants'
import SectionHeading from '@/src/utils/SectionHeading'
import ServiceCard from '@/src/utils/ServiceCard'
import React from 'react'
import Stats from './Stats'

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <SectionHeading title="Amenities For A Comfortable Stay" underlineclass="md:w-[512px]" className="items-center" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
        <Stats />
      </div>
    </section>
  )
}

export default ServicesSection