import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import SectionHeading from '@/src/utils/SectionHeading';
import Image from 'next/image';
import ButtonCTA from '@/src/utils/ButtonCTA';
import { attractions } from '../src/constants.js';
import { highlights } from '../src/constants.js';
import ServiceCard from '@/src/utils/ServiceCard.jsx';

const AboutSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { 
    once: true, 
    threshold: 0.1,
    margin: "-100px 0px"
  });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95, x: -50 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };



  return (
    <section 
      ref={sectionRef}
      className="about-section py-16 lg:py-24 bg-white relative overflow-hidden"
      id="about"
    >

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <SectionHeading 
            title="About Kingsukh Guest House" 
            subtitle="Your Gateway to Purulia's Natural Beauty"
            className="mb-8"
          />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16"
        >
          {/* Content Side */}
          <motion.div variants={itemVariants} className="space-y-6">
            <motion.p 
              className="text-lg leading-relaxed text-gray-700"
              variants={itemVariants}
            >
              Embark on a tranquil journey at our
              <span className="font-semibold text-amber-600"> Kingsukh Guest House</span>, enveloped by the scenic allure of majestic hills and pristine dams. 
              Experience the perfect blend of nature's serenity and warm hospitality.
              <br />
              <br />
              Revel in the embrace of comfort, relish delightful meals, and unwind in our verdant 
              garden oasis. Your ideal retreat beckons, promising a harmonious blend of nature's 
              beauty and heartfelt hospitality.
            <br />
            <br />
              Explore the hidden gems of <span className="font-medium text-gray-800">Purulia</span>, 
              creating memories that linger long after your stay.
            </motion.p>

            {/* Call to Action */}
            <ButtonCTA />
          </motion.div>

          {/* Image Side */}
          <motion.div 
            variants={imageVariants}
            className="relative"
          >
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/out.jpg" 
                alt="Kingsukh Guest House surrounded by hills"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={85}
              />
              
              {/* Overlay with gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              
              {/* Floating badge */}
              <motion.div
                className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg"
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                transition={{ delay: 0.8, duration: 0.4 }}
              >
                <span className="text-sm font-medium text-gray-800">Est. Since 2020</span>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Highlights Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {highlights.map((highlight, index) => (
            
              <ServiceCard key={index} icon={highlight.icon} title={highlight.title} description={highlight.description} />
    
          ))}
        </motion.div>

        {/* Nearby Attractions */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg mb-16"
        >
          <motion.h3 
            variants={itemVariants}
            className="text-2xl lg:text-3xl font-bold text-center text-gray-800 mb-8"
          >
            Nearby Attractions
          </motion.h3>
          
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {attractions.map((attraction, index) => (
              <motion.div
                key={index}
                className="bg-amber-50 p-4 rounded-lg text-center hover:bg-amber-100 transition-colors duration-300 cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.1 * index, duration: 0.4 }}
              >
                <span className="text-sm font-medium text-gray-700">{attraction}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-8"
        >
                   {/* Address Card */}
          <motion.div
            variants={cardVariants}
            className="bg-gradient-to-br from-amber-500 to-yellow-500 p-8 rounded-2xl text-white shadow-xl"
          >
            <motion.div 
              className="text-3xl mb-4"
              whileHover={{ scale: 1.1, rotate: 10 }}
            >
              📍
            </motion.div>
            <h4 className="font-bold text-xl mb-3">Our Location</h4>
            <p className="text-amber-100 leading-relaxed">
              Beside Barshal Water Tank, Manpur,<br />
              Barhanti, West Bengal - 723156
            </p>
            <motion.button
              className="mt-4 px-6 py-2 bg-white/20 backdrop-blur-sm rounded-lg border border-white/30 hover:bg-white/30 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Directions
            </motion.button>
          </motion.div>

          {/* Contact Card */}
          <motion.div
            variants={cardVariants}
            className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100"
          >
            <motion.div 
              className="text-3xl mb-4"
              whileHover={{ scale: 1.1, rotate: -10 }}
            >
              📞
            </motion.div>
            <h4 className="font-bold text-xl text-gray-800 mb-3">Contact Us</h4>
            <p className="text-gray-600 mb-4">Ready to plan your perfect getaway?</p>
            <motion.a
              href="tel:+919007062180"
              className="inline-flex items-center text-lg font-semibold text-amber-600 hover:text-amber-700 transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
            >
              +91 9007062180
            </motion.a>
            <motion.button
              className="mt-4 w-full px-6 py-3 bg-gradient-to-r from-amber-500 to-yellow-500 text-white font-semibold rounded-lg hover:from-amber-600 hover:to-yellow-600 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Book Your Stay Now
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
