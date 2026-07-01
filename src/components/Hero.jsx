import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from 'react-icons/fa';
import { personalInfo } from '../data/constants';

/**
 * Hero — Full-screen hero section with two-column layout (text + image),
 * typing animation, CTA buttons, social links, and staggered entrance animations.
 */

/* ---- Framer Motion Variants ---- */
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const slideInRight = {
  hidden: { opacity: 0, x: 80 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut', delay: 0.3 } },
};

const Hero = () => {
  // Smooth-scroll helper
  const scrollTo = (selector) => {
    const el = document.querySelector(selector);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center
        bg-gradient-to-br from-slate-50 to-white
        dark:from-[#0a192f] dark:to-[#112240]
        overflow-hidden"
    >
      {/* Subtle decorative blobs */}
      <div className="absolute top-20 -left-40 w-96 h-96 bg-[#00eeff]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-40 w-96 h-96 bg-[#7c3aed]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto w-full px-4 md:px-8 lg:px-16 py-20 pt-28 md:pt-20">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 lg:gap-16">

          {/* ===== Left Column — Text ===== */}
          <motion.div
            className="flex-1 text-center md:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Greeting */}
            <motion.p
              variants={fadeUp}
              className="text-lg text-[#8892b0] dark:text-[#8892b0] mb-2 font-medium"
            >
              Hello, I'm
            </motion.p>

            {/* Name */}
            <motion.h1
              variants={fadeUp}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight mb-4"
            >
              <span className="gradient-text">Manoj Yadav</span>
            </motion.h1>

            {/* Typing Animation */}
            <motion.div variants={fadeUp} className="mb-5">
              <TypeAnimation
                sequence={[
                  'Frontend Developer', 2000,
                  'React Developer', 2000,
                  'MCA Student', 2000,
                  'JavaScript Enthusiast', 2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-[#00eeff] text-xl md:text-2xl font-medium"
              />
            </motion.div>

            {/* Intro paragraph */}
            <motion.p
              variants={fadeUp}
              className="text-slate-600 dark:text-[#8892b0] text-base md:text-lg max-w-lg mx-auto md:mx-0 mb-8 leading-relaxed"
            >
              I build modern and responsive web applications with clean code and pixel-perfect design.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeUp}
              className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-8"
            >
              {/* Download Resume */}
              <a
                href="/assets/Manoj_Yadav_Resume.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm md:text-base
                  bg-[#00eeff] text-[#0a192f]
                  hover:shadow-[0_0_25px_rgba(0,238,255,0.5)]
                  transition-all duration-300 active:scale-95"
              >
                <FaDownload className="text-sm" />
                Download Resume
              </a>

              {/* Contact Me */}
              <button
                onClick={() => scrollTo('#contact')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm md:text-base
                  border-2 border-[#00eeff] text-[#00eeff]
                  hover:bg-[#00eeff]/10
                  transition-all duration-300 active:scale-95 cursor-pointer"
              >
                Contact Me
              </button>
            </motion.div>

            {/* Social Icons */}
            <motion.div
              variants={fadeUp}
              className="flex items-center justify-center md:justify-start gap-4"
            >
              {[
                { icon: FaGithub, href: personalInfo.github, label: 'GitHub' },
                { icon: FaLinkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
                { icon: FaEnvelope, href: `mailto:${personalInfo.email}`, label: 'Email' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={label !== 'Email' ? '_blank' : undefined}
                  rel={label !== 'Email' ? 'noopener noreferrer' : undefined}
                  aria-label={label}
                  className="p-3 rounded-full border border-[#00eeff]/30
                    text-slate-600 dark:text-[#8892b0]
                    hover:text-[#00eeff] dark:hover:text-[#00eeff]
                    hover:border-[#00eeff] hover:shadow-[0_0_15px_rgba(0,238,255,0.3)]
                    transition-all duration-300"
                >
                  <Icon className="text-xl" />
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* ===== Right Column — Profile Image ===== */}
          <motion.div
            className="flex-shrink-0"
            variants={slideInRight}
            initial="hidden"
            animate="visible"
          >
            <div className="relative">
              {/* Gradient border wrapper */}
              <div
                className=" p-1 rounded-full
                  w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[350px] lg:h-[350px]
                  animate-float shadow-xl "
              >
                <img
                  src="/assets/home-Image.png"
                  alt="Manoj Yadav"
                  className="w-full h-full object-cover rounded-full bg-[#112240]"
                  loading="eager"
                />
              </div>

              {/* Subtle glow behind image */}
              <div className="absolute inset-0 rounded-full bg-[#00eeff]/10 blur-2xl -z-10 scale-110 pointer-events-none" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
