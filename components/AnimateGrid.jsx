import React from 'react'
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

// Animation variants for the container to orchestrate the stagger effect
const containerVariants = {
  hidden: { opacity: 0, y:50 },
  visible: {
    opacity: 1, y:0,
    transition: {
      staggerChildren: 0.2, // This delay will apply to each child
    },
  },
};

const AnimateGrid = ({ children, className }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      className={className} // We pass the grid styles here
      variants={containerVariants}
      initial="hidden"
      animate={controls}
    >
      {children}
    </motion.div>
  );
}


export default AnimateGrid;