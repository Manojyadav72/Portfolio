import React from 'react';
import { motion, useScroll } from 'framer-motion';

/**
 * ScrollProgress
 * A thin horizontal bar fixed at the top of the viewport that grows
 * from left → right as the user scrolls down the page.
 */
const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-[60] h-1 origin-left bg-gradient-to-r from-[#00eeff] via-[#7c3aed] to-[#ec4899]"
      style={{ scaleX: scrollYProgress, transformOrigin: '0%' }}
    />
  );
};

export default ScrollProgress;
