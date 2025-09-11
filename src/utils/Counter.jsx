import { useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useInView } from "react-intersection-observer";



export default function Counter({ to, title,symbol="+" }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => `${Math.round(latest)}${symbol}`);

  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger the animation once
    threshold: 0.1,    // Trigger when 10% of the element is in view
  });

  useEffect(() => {
    if (inView) {
      // Use the animate function to start the animation when in view
      const controls = animate(count, to, {
        delay: 0.5,
        duration: 1.5,
        ease: "easeOut",
      });
      // Return a cleanup function to stop the animation if the component unmounts
      return () => controls.stop();
    }
  }, [inView, count, to]);

  return (
    <div ref={ref} className="text-center">
      <motion.h3 className="text-4xl md:text-5xl font-bold text-brand-slate">
        {rounded}
      </motion.h3>
      <p className="text-gray-500 font-roboto mt-2">{title}</p>
    </div>
  );
}

