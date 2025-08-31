import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeading from '@/src/utils/SectionHeading';
import { galleryImages } from '@/src/constants';
import Image from 'next/image';

const filters = ["All", "Guest House", "Rooms", "Scenery"];
const GallarySection = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [dragConstraint, setDragConstraint] = useState(0);
  const scrollContainerRef = useRef(null);

  const filteredPhotos = activeFilter === "All" 
    ? galleryImages 
    : galleryImages.filter(photo => photo.category === activeFilter);
  
  useEffect(() => {
    const calculateConstraints = () => {
      const container = scrollContainerRef.current;
      if (container) {
        // Use a timeout to ensure the DOM has rendered the new photos before we measure.
        setTimeout(() => {
          const containerWidth = container.offsetWidth;
          const scrollWidth = container.scrollWidth;
          setDragConstraint(Math.min(0, containerWidth - scrollWidth));
        }, 300); 
      }
    };
    
    calculateConstraints();
    window.addEventListener('resize', calculateConstraints);
    return () => window.removeEventListener('resize', calculateConstraints);
  }, [filteredPhotos]);

  return (
    <section id="gallery" className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <SectionHeading title="Explore Our Gallery" underlineclass="md:w-[280px]" className="items-center" />

        <div className="flex justify-center space-x-2 md:space-x-4 mb-12">
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`font-roboto font-semibold py-2 px-5 rounded-full transition-all duration-300 text-sm md:text-base ${
                activeFilter === filter 
                ? 'bg-amber-400 text-white shadow-lg' 
                : 'bg-white text-gray-700 hover:bg-gray-200'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Horizontal Scrolling Container */}
      <motion.div 
        key={activeFilter} // This is the most important fix: resets the component on filter change.
        ref={scrollContainerRef}
        className="flex space-x-4 md:space-x-6 px-4 md:px-8 cursor-grab"
        drag="x"
        dragConstraints={{ left: dragConstraint, right: 0 }}
        style={{ overflowX: 'scroll', scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <AnimatePresence>
          {filteredPhotos.map((photo) => (
            <motion.div
              key={photo.id}
              // Uniform size for all cards, with responsiveness.
              className="flex-shrink-0 rounded-lg overflow-hidden shadow-xl w-64 h-80 md:w-80 md:h-96"
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              whileHover={{ scale: 1.05, y: -10, zIndex: 10 }}
            >
              <img src={photo.src} alt={photo.category} className="w-full h-full object-cover" />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  )
}

export default GallarySection