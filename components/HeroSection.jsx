import ButtonCTA from '@/src/utils/ButtonCTA';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';
import Image from 'next/image';

const HeroSection = () => {
  const [mounted, setMounted] = useState(false);
  const { scrollY } = useScroll();

  // Smooth scroll to gallery section
  const scrollToSection = ({section="gallery"}) => {
  const scrollSection = document.getElementById(section);
  if (scrollSection) {
    scrollSection.scrollIntoView({
       behavior: 'smooth',
       block: 'start',
      });
  }
  };

  // Parallax effect for background
  const y = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.5]);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const heroImageVariants = {
    hidden: { scale: 1.1, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut"
      }
    }
  };

  if (!mounted) return null;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y }}
        variants={heroImageVariants}
        initial="hidden"
        animate="visible"
      >
        <Image
          src="/images/header.jpg"
          alt="Luxurious hotel room interior"
          fill
          className="object-cover"
          priority
          quality={85}
          sizes="100vw"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
        />
        
        {/* Dark Overlay with Gradient */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"
          style={{ opacity }}
        />
      </motion.div>

      {/* Main Content */}
      <motion.div 
        className="relative mt-[-5rem] z-10 text-center max-w-4xl mx-auto px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Badge/Tag */}
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center px-4 py-2 mb-6 text-sm font-medium text-white bg-white/20 backdrop-blur-sm rounded-full border border-white/30"
        >
          <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
          Premium Hospitality Experience
        </motion.div>

        {/* Main Heading */}
        <motion.h1 
          variants={itemVariants}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-2 leading-tight"
        >
          Your Home Away From{' '}
          <motion.span
            className="bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400 bg-clip-text text-transparent"
            animate={{ 
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            style={{ backgroundSize: '200% 200%' }}
          >
            Home
          </motion.span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p 
          variants={itemVariants}
          className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          Cozy, comfortable, and welcoming stays.
          <span className="block mt-2 text-lg text-gray-300">
            Experience luxury that feels like home.
          </span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <ButtonCTA />
          
          {/* Secondary CTA */}
          <motion.button
            className="px-8 py-4 text-white border-2 border-white/30 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 backdrop-blur-sm"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToSection}
          >
            Take Virtual Tour
          </motion.button>
        </motion.div>

      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute flex flex-col bottom-24 items-center justify-center left-1/2 transform -translate-x-1/2 z-10 hover:cursor-pointer"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5, duration: 0.8 }}
        onClick={() => scrollToSection({section:"rooms"})}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
        >
          <motion.div 
            className="w-1 h-3 bg-white rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          </motion.div>
        <p className="text-white/70 text-sm mt-2">Scroll Down</p>
      </motion.div>
    </section>
  );
};

export default HeroSection;
