import { motion } from 'framer-motion';
import Image from 'next/image';
import ButtonCTA from './ButtonCTA';



const RoomCard = ({ imageUrl, title, description, price }) => {
  return (
    <motion.div 
      className="bg-white rounded-lg shadow-lg overflow-hidden group"
      whileHover={{ y: -10 }} // Lifts the card up on hover
      transition={{ duration: 0.3 }}
    >
      <div className="relative w-full h-64">
        <Image
          src={imageUrl}
          alt={`Photo of ${title}`}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-500 group-hover:scale-110" // Zoom effect on image
        />
      </div>
      <div className="p-6 text-center">
        <h3 className="text-2xl font-playfair text-brand-slate mb-2">{title}</h3>
        <p className="font-roboto text-gray-600 mb-4">{description}</p>
        <p className="font-roboto text-gray-600 mb-4">{price}</p>
        <ButtonCTA />
      </div>
    </motion.div>
  );
}
export default RoomCard;