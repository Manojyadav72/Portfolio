import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

/**
 * CursorGlow
 * A large, blurred cyan circle that follows the mouse cursor with a
 * slight spring lag. Only renders on devices with a fine pointer
 * (i.e. not touch screens).
 */
const CursorGlow = () => {
  const [position, setPosition] = useState({ x: -200, y: -200 });
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Only show on devices with a fine pointer (mouse / trackpad)
    const mq = window.matchMedia('(pointer: fine)');
    setIsDesktop(mq.matches);

    const handleChange = (e) => setIsDesktop(e.matches);
    mq.addEventListener('change', handleChange);

    return () => mq.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isDesktop]);

  if (!isDesktop) return null;

  return (
    <motion.div
      className="fixed pointer-events-none z-[9999] w-64 h-64 rounded-full bg-[#00eeff]/10 blur-3xl"
      animate={{
        x: position.x - 128, // centre the 256 px circle on cursor
        y: position.y - 128,
      }}
      transition={{ type: 'spring', damping: 30, stiffness: 200, mass: 0.5 }}
    />
  );
};

export default CursorGlow;
