import { motion } from 'framer-motion';

const ServiceCard = ({ icon, title, description } ) => {
  return (
    <motion.div 
      className="bg-white p-8 rounded-lg shadow-md text-center"
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      <div className="text-5xl text-brand-gold mb-4">{icon}</div>
      <h3 className="text-xl font-bold font-roboto text-brand-slate mb-2">{title}</h3>
      <p className="text-gray-600 font-roboto">{description}</p>
    </motion.div>
  );
}

export default ServiceCard;