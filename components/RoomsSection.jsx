import { rooms } from '@/src/constants'
import { motion } from 'framer-motion';
import RoomCard from '@/src/utils/RoomCard'
import SectionHeading from '@/src/utils/SectionHeading'
import React from 'react'
import AnimateGrid from './AnimateGrid'


const RoomsSection = () => {

  // Animation variants for each individual card
  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1, ease: 'easeOut' },
    },
  };

  return (
    <section id="rooms" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <SectionHeading title="Our Accommodations" underlineclass="md:w-[320px]" className="items-center" />
        <AnimateGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {rooms.map((room, index) => (
            <motion.div key={index} variants={itemVariants}>
            <RoomCard 
              key={index}
              imageUrl={room.imageUrl}
              title={room.title}
              description={room.description}
              price={room.price}
            />
            </motion.div>
          ))}
        </AnimateGrid>
        
      
      </div>
    </section>
  )
}

export default RoomsSection