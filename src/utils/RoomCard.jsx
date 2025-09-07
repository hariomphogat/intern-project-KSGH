// import { motion } from 'framer-motion';
// import Image from 'next/image';
// import ButtonCTA from './ButtonCTA';



// const RoomCard = ({ imageUrl, title, description, price }) => {
//   return (
//     <motion.div 
//       className="bg-white rounded-lg shadow-lg overflow-hidden group"
//       whileHover={{ y: -10 }} // Lifts the card up on hover
//       transition={{ duration: 0.3 }}
//     >
//       <div className="relative w-full h-64">
//         <Image
//           src={imageUrl}
//           alt={`Photo of ${title}`}
//           fill
//           className="object-cover transition-transform duration-500 group-hover:scale-110" // Zoom effect on image
//         />
//       </div>
//       <div className="p-6 text-center">
//         <h3 className="text-2xl font-playfair text-brand-slate mb-2">{title}</h3>
//         <p className="font-roboto text-gray-600 mb-4">{description}</p>
//         <p className="font-roboto text-gray-600 mb-4">{price}</p>
//         <ButtonCTA />
//       </div>
//     </motion.div>
//   );
// }
// export default RoomCard;

import { motion } from 'framer-motion';
import Image from 'next/image';
import ButtonCTA from './ButtonCTA';
import { useState } from 'react';

const RoomCard = ({ 
  imageUrl, 
  title, 
  description, 
  price, 
  amenities = [],
  index = 0 
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      rotateX: 15
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.1,
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    },
  };

  const imageVariants = {
    hidden: { scale: 1.2, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group border border-gray-100"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ 
        y: -8,
        transition: { duration: 0.01 }
      }}
      style={{ perspective: 1000 }}
    >
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden">
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse" />
        )}
        
        <motion.div
          variants={imageVariants}
          className="relative h-full"
        >
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            onLoad={() => setImageLoaded(true)}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            quality={85}
          />
        </motion.div>

        {/* Overlay on hover */}
        <motion.div
          className="absolute inset-0 bg-black/30"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />


        {/* Price Badge */}
        <motion.div
          className="absolute top-4 left-4 bg-gradient-to-r from-gray-300/70 to-amber-500/70 text-white px-4 py-2 rounded-full font-bold"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.3 }}
        >
          {price}
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Title */}
        <motion.h3 
          className="text-xl font-bold text-gray-800 mb-2 group-hover:text-amber-600 transition-colors duration-300"
        >
          {title}
        </motion.h3>

        {/* Description */}
        <motion.p 
          className="text-gray-600 mb-4 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          {description}
        </motion.p>

        {/* Amenities */}
        {amenities && amenities.length > 0 && (
          <motion.div 
            className="mb-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.4 }}
          >
            <div className="flex flex-wrap gap-2">
              {amenities.slice(0, 3).map((amenity, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                >
                  {amenity}
                </span>
              ))}
              {amenities.length > 3 && (
                <span className="px-3 py-1 bg-amber-100 text-amber-700 text-sm rounded-full">
                  +{amenities.length - 3} more
                </span>
              )}
            </div>
          </motion.div>
        )}

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.4 }}
        >
          <ButtonCTA />
        </motion.div>
      </div>

      {/* Hover Effect Line */}
      <motion.div
        className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-amber-500 to-yellow-500"
        initial={{ width: 0 }}
        animate={{ width: isHovered ? '100%' : 0 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

export default RoomCard;
