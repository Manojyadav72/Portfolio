import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { navLinks } from '../data/constants';
import ThemeToggle from './ThemeToggle';

/**
 * Navbar — Premium fixed navbar with glassmorphism background,
 * IntersectionObserver-based active section highlighting,
 * desktop hover underline animation, and mobile full-screen overlay menu.
 */
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  // Track scroll position for glassmorphism background
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // IntersectionObserver to detect which section is currently in view
  useEffect(() => {
    const sectionIds = navLinks.map((link) => link.href.replace('#', ''));
    const observers = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${id}`);
          }
        },
        { rootMargin: '-20% 0px -60% 0px', threshold: 0 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  // Smooth scroll handler
  const handleNavClick = useCallback((e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileOpen(false);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  /* ---- Animation variants ---- */
  const mobileMenuVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3, when: 'beforeChildren', staggerChildren: 0.08 } },
    exit: { opacity: 0, transition: { duration: 0.2, when: 'afterChildren' } },
  };

  const mobileLinkVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.15 } },
  };

  return (
    <>
      {/* ===== Desktop / Main Navbar ===== */}
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
          ${scrolled
            ? 'bg-white/70 dark:bg-white/5 backdrop-blur-lg border-b border-black/5 dark:border-white/10 shadow-sm dark:shadow-none'
            : 'bg-transparent'
          }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8 lg:px-16 py-4">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="text-2xl font-bold text-slate-800 dark:text-[#ccd6f6] tracking-tight select-none"
          >
            Manoj<span className="text-[#00eeff]">Yadav</span>
          </a>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200
                      ${isActive
                        ? 'text-[#00eeff]'
                        : 'text-slate-600 dark:text-[#8892b0] hover:text-[#00eeff] dark:hover:text-[#00eeff]'
                      }`}
                  >
                    {link.name}
                    {/* Animated underline indicator */}
                    {isActive && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute left-2 right-2 -bottom-0.5 h-0.5 rounded-full bg-[#00eeff]"
                        transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                      />
                    )}
                  </a>
                </li>
              );
            })}

            {/* Theme Toggle */}
            <li className="ml-2">
              <ThemeToggle />
            </li>
          </ul>

          {/* Mobile: theme toggle + hamburger */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setMobileOpen(true)}
              className="p-2 rounded-lg text-2xl text-slate-700 dark:text-[#ccd6f6] hover:text-[#00eeff] dark:hover:text-[#00eeff] transition-colors cursor-pointer"
              aria-label="Open menu"
            >
              <HiMenuAlt3 />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* ===== Mobile Full-Screen Overlay ===== */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-[60] flex flex-col items-center justify-center
              bg-white/95 dark:bg-[#0a192f]/95 backdrop-blur-xl"
          >
            {/* Close button */}
            <button
              onClick={() => setMobileOpen(false)}
              className="absolute top-5 right-5 p-2 text-3xl text-slate-700 dark:text-[#ccd6f6] hover:text-[#00eeff] dark:hover:text-[#00eeff] transition-colors cursor-pointer"
              aria-label="Close menu"
            >
              <HiX />
            </button>

            {/* Links */}
            <ul className="flex flex-col items-center gap-6">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href;
                return (
                  <motion.li key={link.href} variants={mobileLinkVariants}>
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className={`text-2xl font-semibold transition-colors duration-200
                        ${isActive
                          ? 'text-[#00eeff]'
                          : 'text-slate-700 dark:text-[#ccd6f6] hover:text-[#00eeff] dark:hover:text-[#00eeff]'
                        }`}
                    >
                      {link.name}
                    </a>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
