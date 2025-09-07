import { rooms } from '@/src/constants';
import { motion, useInView } from 'framer-motion';
import RoomCard from '@/src/utils/RoomCard';
import SectionHeading from '@/src/utils/SectionHeading';
import React, { useRef } from 'react';

const RoomsSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { 
    once: true, 
    threshold: 0.1,
    margin: "-100px 0px"
  });

  // animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { 
      y: 60, 
      opacity: 0,
      scale: 0.95
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { 
        duration: 0.8, 
        ease: [0.25, 0.46, 0.45, 0.94] // Custom easing
      }
    }
  };

  const headingVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="mt-[-4rem] rooms-section py-16 lg:py-24 bg-gray-50 relative overflow-hidden"
      id="rooms"
    >

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          variants={headingVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <SectionHeading 
            title="Our Rooms"
            subtitle="Discover comfort and luxury in every corner. Explore our range of rooms designed to provide you with an unforgettable stay."
            className="mb-4"
          />
        </motion.div>

        {/* Rooms Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10"
        >
          {rooms.map((room, index) => (
            <motion.div
              key={room.id || index}
              variants={itemVariants}
              className="group"
            >
              <RoomCard 
                imageUrl={room.imageUrl}
                title={room.title}
                description={room.description}
                price={room.price}
                amenities={room.amenities}
                rating={room.rating}
                index={index}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default RoomsSection;
