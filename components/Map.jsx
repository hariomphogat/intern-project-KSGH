import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Map = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const mapRef = useRef(null);
  const isInView = useInView(mapRef, { once: true, threshold: 0.1 });

  const mapEmbedSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.5017351225647!2d86.85721547510981!3d23.586332378782714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f6e3fdd3ff9ebb%3A0x517a57e3f93c1807!2sKingsukh%20Guest%20House!5e0!3m2!1sen!2sin!4v1705088034844!5m2!1sen!2sin";
  const mapDirectionsUrl = "https://maps.app.goo.gl/7HAxWiKVMqSVKrDX6";

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <motion.div
      ref={mapRef}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100"
    >
      {/* Header */}
      <motion.div variants={itemVariants} className="text-center mb-8">
        <motion.h3 
          className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4 flex items-center justify-center"
          whileHover={{ scale: 1.02 }}
        >
          <span className="mr-3 text-3xl">🗺️</span>
          Find Us Here
        </motion.h3>
        <motion.p 
          className="text-gray-600 max-w-2xl mx-auto leading-relaxed"
          variants={itemVariants}
        >
          Located in a serene spot surrounded by natural beauty, our guest house is easy to find. 
          Get directions and start your journey to a relaxing stay.
        </motion.p>
      </motion.div>

      {/* Map Container */}
      <motion.div 
        variants={itemVariants}
        className="relative rounded-xl overflow-hidden shadow-lg mb-6"
        style={{ height: '400px' }}
      >
        {/* Loading Skeleton */}
        {!isLoaded && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
            <div className="text-center">
              <motion.div
                className="w-12 h-12 border-4 border-amber-500 border-t-transparent rounded-full mx-auto mb-4"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
              <p className="text-gray-500">Loading map...</p>
            </div>
          </div>
        )}

        {/* Google Maps Embed */}
        <iframe
          src={mapEmbedSrc}
          width="100%"
          height="100%"
          style={{ border: 0, filter: isLoaded ? 'none' : 'blur(5px)' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Kingsukh Guest House Location"
          onLoad={() => setIsLoaded(true)}
          className="transition-all duration-500"
        />
      </motion.div>

      {/* Action Buttons */}
      <motion.div 
        variants={itemVariants}
        className="flex flex-col sm:flex-row gap-4 justify-center"
      >
        <motion.a
          href={mapDirectionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 max-w-xs mx-auto px-6 py-4 bg-gradient-to-r from-amber-500 to-yellow-500 text-white font-semibold rounded-lg shadow-lg hover:from-amber-600 hover:to-yellow-600 transition-all duration-300 text-center"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="flex items-center justify-center">
            <span className="mr-2 text-lg">🧭</span>
            Get Directions
          </span>
        </motion.a>

        <motion.button
          onClick={() => {
            try {
               if (navigator.share) {
              navigator.share({
                title: 'Kingsukh Guest House Location',
                text: 'Check out this amazing guest house location!',
                url: mapDirectionsUrl
              });
            } else {
              navigator.clipboard.writeText(mapDirectionsUrl);
              alert('Location link copied to clipboard!');
            }
            } catch (error) {
              throw new Error('Sharing failed', error);
            }
           
          }}
          className="flex-1 max-w-xs mx-auto px-6 py-4 bg-white border-2 border-amber-500 text-amber-600 font-semibold rounded-lg hover:bg-amber-50 transition-all duration-300"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="flex items-center justify-center">
            <span className="mr-2 text-lg">📤</span>
            Share Location
          </span>
        </motion.button>
      </motion.div>

      {/* Additional Info */}
      <motion.div 
        variants={itemVariants}
        className="mt-6 pt-6 border-t border-gray-200 text-center"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
          <div className="flex items-center justify-center">
            <span className="mr-2">🚗</span>
            <span>Free Parking Available</span>
          </div>
          <div className="flex items-center justify-center">
            <span className="mr-2">🚌</span>
            <span>Public Transport Nearby</span>
          </div>
          <div className="flex items-center justify-center">
            <span className="mr-2">🛣️</span>
            <span>Easy Road Access</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Map;
