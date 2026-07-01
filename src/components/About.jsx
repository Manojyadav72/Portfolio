import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaLaptopCode, FaRocket } from 'react-icons/fa';
import { personalInfo } from '../data/constants';

/**
 * About — About Me section with image, bio, and stats cards.
 * Two-column layout on desktop, stacked on mobile.
 * All elements animate into view using framer-motion.
 */

/* ---- Animation Variants ---- */
const slideInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const statsContainerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
};

const statsCardVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

/* ---- Stats Data ---- */
const stats = [
  {
    icon: FaLaptopCode,
    label: '4+ Projects',
    description: 'Built & Deployed',
  },
  {
    icon: FaGraduationCap,
    label: 'MCA Student',
    description: 'KNIT Sultanpur',
  },
  {
    icon: FaRocket,
    label: '6+ Skills',
    description: 'Categories',
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="relative py-20 px-4 md:px-8 lg:px-16
        bg-white dark:bg-[#0a192f]
        overflow-hidden"
    >
      {/* Decorative blob */}
      <div className="absolute -top-32 -right-32 w-80 h-80 bg-[#00eeff]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* ===== Section Heading ===== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center md:text-left mb-14"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 dark:text-[#ccd6f6]">
            About <span className="text-[#00eeff]">Me</span>
          </h2>
          <div className="mt-3 h-1 w-20 rounded-full bg-[#00eeff] mx-auto md:mx-0" />
        </motion.div>

        {/* ===== Two-Column Layout ===== */}
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">

          {/* -- Left Column: Image -- */}
          <motion.div
            className="flex-shrink-0 w-full md:w-auto flex justify-center"
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div
              className="relative group w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-2xl overflow-hidden
                border-2 border-[#00eeff]/20 dark:border-[#00eeff]/20
                hover:border-[#00eeff]/50
                shadow-lg shadow-black/5 dark:shadow-[#00eeff]/5
                transition-all duration-500"
            >
              <img
                src="/assets/pphoto.png"
                alt="Manoj Yadav"
                className="w-full h-full object-cover
                  group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              {/* Hover glow overlay */}
              <div className="absolute inset-0 bg-[#00eeff]/0 group-hover:bg-[#00eeff]/5 transition-colors duration-500 pointer-events-none" />
            </div>
          </motion.div>

          {/* -- Right Column: Text + Stats -- */}
          <div className="flex-1 text-center md:text-left">
            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-[#00eeff] font-semibold text-lg mb-4"
            >
              Passionate Frontend Developer
            </motion.p>

            {/* Bio */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-8"
            >
              {personalInfo.about
                ? personalInfo.about.split('\n\n').map((paragraph, idx) => (
                    <p
                      key={idx}
                      className="text-slate-600 dark:text-[#8892b0] text-base md:text-lg leading-relaxed mb-4 last:mb-0"
                    >
                      {paragraph}
                    </p>
                  ))
                : (
                  <p className="text-slate-600 dark:text-[#8892b0] text-base md:text-lg leading-relaxed">
                    I'm a passionate frontend developer and MCA student who loves building modern,
                    responsive web applications. I specialize in React, JavaScript, and creating
                    pixel-perfect user interfaces with great developer experience.
                  </p>
                )}
            </motion.div>

            {/* Stats Cards */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-3 gap-4"
              variants={statsContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {stats.map(({ icon: Icon, label, description }) => (
                <motion.div
                  key={label}
                  variants={statsCardVariant}
                  className="group p-5 rounded-xl text-center
                    bg-white/70 dark:bg-white/5
                    backdrop-blur-lg
                    border border-black/5 dark:border-white/10
                    hover:border-[#00eeff]/30 dark:hover:border-[#00eeff]/30
                    hover:shadow-[0_0_20px_rgba(0,238,255,0.08)]
                    transition-all duration-300"
                >
                  <Icon className="text-2xl text-[#00eeff] mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-lg font-bold text-slate-800 dark:text-[#ccd6f6] mb-1">
                    {label}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-[#8892b0]">
                    {description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
