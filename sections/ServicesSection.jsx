import { services } from '@/src/constants'
import SectionHeading from '@/src/utils/SectionHeading'
import ServiceCard from '@/src/utils/ServiceCard'
import React from 'react'
import Stats from '../components/Stats'
import AnimateGrid from '../components/AnimateGrid'
import { motion } from 'framer-motion';


const ServicesSection = () => {

  // Animation variants for each individual card
  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1.5, ease: 'easeOut' },
    },
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <SectionHeading 
        title="Our Services"
        subtitle="services designed to make your stay enjoyable and hassle-free."
        />
        <AnimateGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
            </motion.div>
          ))}
        </AnimateGrid>
        <Stats />
      </div>
    </section>
  )
}

export default ServicesSection