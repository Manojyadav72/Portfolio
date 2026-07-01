import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa';
import { personalInfo } from '../data/constants';

// ─── Quick Navigation Links ────────────────────────────────────────────────────
const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

// ─── Social Links ──────────────────────────────────────────────────────────────
const socialLinks = [
  { icon: <FaGithub size={20} />, href: personalInfo.github, label: 'GitHub' },
  { icon: <FaLinkedin size={20} />, href: personalInfo.linkedin, label: 'LinkedIn' },
  { icon: <FaEnvelope size={20} />, href: `mailto:${personalInfo.email}`, label: 'Email' },
];

const Footer = () => {
  return (
    <footer className="relative bg-slate-900 dark:bg-[#071525] text-slate-300">
      {/* ── Gradient Top Border ───────────────────────────────────────────────── */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#00eeff] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-12">
        {/* ── Social Icons ────────────────────────────────────────────────────── */}
        <motion.div
          className="flex justify-center gap-5 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {socialLinks.map((link, i) => (
            <a
              key={i}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="flex items-center justify-center w-11 h-11 rounded-full border border-[#00eeff]/30 text-slate-400 hover:text-[#00eeff] hover:bg-[#00eeff]/10 hover:border-[#00eeff] hover:shadow-[0_0_15px_rgba(0,238,255,0.4)] transition-all duration-300"
            >
              {link.icon}
            </a>
          ))}
        </motion.div>

        {/* ── Quick Nav Links ─────────────────────────────────────────────────── */}
        <motion.nav
          className="flex flex-wrap justify-center gap-x-8 gap-y-3 mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-slate-400 hover:text-[#00eeff] transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </motion.nav>

        {/* ── Copyright ───────────────────────────────────────────────────────── */}
        <motion.p
          className="text-center text-sm text-slate-500"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          © {new Date().getFullYear()} {personalInfo.name}. Built with{' '}
          <FaHeart className="inline text-red-500 mx-0.5 align-text-bottom" />{' '}
          and React
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;
