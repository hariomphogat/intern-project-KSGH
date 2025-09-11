import { motion } from 'framer-motion';
const ServiceCard = ({ icon, title, description } ) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };
  return <motion.div
                variants={cardVariants}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center group"
                whileHover={{ y: -5 }}
              >
  <motion.div 
                className="text-3xl mb-3"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.2 }}
              >
                {icon}
              </motion.div>
              <h4 className="font-semibold text-gray-800 mb-2 group-hover:text-amber-600 transition-colors">
                {title}
              </h4>
              <p className="text-sm text-gray-600 mb-2">{description}</p>
              </motion.div>

}
export default ServiceCard;