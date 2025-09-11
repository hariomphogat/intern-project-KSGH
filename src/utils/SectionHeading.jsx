import React from 'react';
import { motion } from 'framer-motion';

const SectionHeading = ({ 
  title, 
  subtitle,
  underlineclass = "bg-gradient-to-r from-amber-500 to-yellow-500", 
  className = "",
  centered = true 
}) => {
  return (
    <div className={`${centered ? 'text-center' : ''} ${className}`}>
      <motion.h2 
        className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {title}
      </motion.h2>
      
      {subtitle && (
        <motion.p
          className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {subtitle}
        </motion.p>
      )}
      {/* underline */}
      <motion.div
        className={`w-28 h-1 ${underlineclass} mx-auto mt-6 rounded-full`}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
      />
    </div>
  );
};

export default SectionHeading;
