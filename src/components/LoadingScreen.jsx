import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * LoadingScreen
 * Full-screen splash shown while the app boots.
 * Auto-dismisses after 2.5 s by calling the `onComplete` callback.
 */
const LoadingScreen = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete?.();
    }, 2500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        key="loading-screen"
        className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0a192f]"
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
      >
        {/* ── Gradient Initials ──────────────────────────────────────────────── */}
        <motion.h1
          className="text-6xl md:text-8xl font-extrabold bg-gradient-to-r from-[#00eeff] via-[#7c3aed] to-[#ec4899] bg-clip-text text-transparent select-none"
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          M.Y
        </motion.h1>

        {/* ── Bouncing Dots ──────────────────────────────────────────────────── */}
        <div className="flex gap-2 mt-8">
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              className="loading-dot w-3 h-3 rounded-full bg-[#00eeff]"
              initial={{ y: 0, opacity: 0.4 }}
              animate={{ y: [0, -12, 0], opacity: [0.4, 1, 0.4] }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                delay: i * 0.15,
                ease: 'easeInOut',
              }}
            />
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LoadingScreen;
