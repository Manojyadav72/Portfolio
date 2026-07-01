import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';
import { AnimatePresence, motion } from 'framer-motion';

/**
 * ThemeToggle — A premium sun/moon toggle button with smooth rotation animation.
 * Uses framer-motion AnimatePresence for enter/exit transitions.
 */
const ThemeToggle = ({ className = '' }) => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      onClick={toggleTheme}
      className={`relative p-2 rounded-full text-xl
        text-slate-700 dark:text-[#ccd6f6]
        hover:text-[#00eeff] dark:hover:text-[#00eeff]
        hover:shadow-[0_0_15px_rgba(0,238,255,0.3)]
        transition-all duration-300 cursor-pointer
        bg-slate-100 dark:bg-white/5
        hover:bg-slate-200 dark:hover:bg-white/10
        ${className}`}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <AnimatePresence mode="wait" initial={false}>
        {isDark ? (
          <motion.div
            key="moon"
            initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="flex items-center justify-center"
          >
            <FaMoon className="text-[#00eeff]" />
          </motion.div>
        ) : (
          <motion.div
            key="sun"
            initial={{ rotate: 90, opacity: 0, scale: 0.5 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: -90, opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="flex items-center justify-center"
          >
            <FaSun className="text-amber-500" />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
};

export default ThemeToggle;
