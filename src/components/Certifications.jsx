import React from "react";
import { motion } from "framer-motion";
import { FaJava, FaDatabase, FaHtml5, FaReact, FaRobot, FaTrophy, FaLink, FaExternalLinkAlt } from "react-icons/fa";
import { certifications } from "../data/constants";

// Map icon string names to actual icon components
const iconMap = { FaJava, FaDatabase, FaHtml5, FaReact, FaRobot, FaTrophy };

const Certifications = () => {
  return (
    <section
      id="certifications"
      className="py-20 px-4 md:px-8 lg:px-16 bg-[#0a192f] dark:bg-[#0a192f] bg-slate-50"
    >
      <div className="max-w-7xl mx-auto">
        {/* ── Section Heading ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-[#ccd6f6]">
            My{" "}
            <span className="text-[#00eeff]">Certifications</span>
          </h2>
          <div className="mt-4 w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-[#00eeff] to-[#7c3aed]" />
        </motion.div>

        {/* ── Certifications Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => {
            const IconComponent = iconMap[cert.icon] || FaTrophy;

            return (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative rounded-xl p-6 text-center
                  bg-white/70 backdrop-blur-lg border border-black/5 shadow-md
                  dark:bg-white/5 dark:backdrop-blur-lg dark:border-white/10 dark:shadow-none
                  hover:-translate-y-[10px] hover:shadow-[0_0_30px_rgba(0,238,255,0.15)]
                  dark:hover:shadow-[0_0_30px_rgba(0,238,255,0.25)]
                  transition-all duration-300 ease-out cursor-default"
              >
                {/* Image or Icon */}
                {cert.image ? (
                  <div className="w-full h-80%  mb-5 overflow-hidden rounded-lg">
                    <img 
                      src={cert.image} 
                      alt={cert.name} 
                      className="w-60% h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                    />
                  </div>
                ) : (
                  <div className="flex items-center justify-center mx-auto w-16 h-16 mb-5 rounded-xl
                    bg-cyan-50 dark:bg-[#00eeff]/10 transition-all duration-300
                    group-hover:scale-110">
                    <IconComponent className="text-3xl text-[#00eeff] transition-transform duration-300 group-hover:scale-110" />
                  </div>
                )}

                {/* Certification Name */}
                <h3 className="text-lg font-bold mb-2 text-slate-800 dark:text-[#ccd6f6]">
                  {cert.name}
                </h3>

                {/* Platform */}
                <p className="text-sm text-slate-500 dark:text-[#8892b0] mb-5">
                  {cert.platform}
                </p>

                {/* Buttons (Certificate Id and Source) */}
                <div className="flex flex-wrap justify-center gap-3 mb-4">
                  <a 
                    href={cert.certificateIdUrl || "#"} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg 
                      bg-slate-800 dark:bg-[#0a192f] 
                      border border-slate-700 dark:border-white/10 
                      text-slate-200 dark:text-[#ccd6f6] 
                      hover:bg-slate-700 dark:hover:bg-white/5 
                      hover:border-[#00eeff]/50 transition-all text-sm font-medium shadow-sm"
                  >
                    Certificate id <FaLink className="text-xs" />
                  </a>
                  <a 
                    href={cert.sourceUrl || "#"} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg 
                      bg-slate-800 dark:bg-[#0a192f] 
                      border border-slate-700 dark:border-white/10 
                      text-slate-200 dark:text-[#ccd6f6] 
                      hover:bg-slate-700 dark:hover:bg-white/5 
                      hover:border-[#00eeff]/50 transition-all text-sm font-medium shadow-sm"
                  >
                    Source <FaExternalLinkAlt className="text-xs" />
                  </a>
                </div>

                {/* Bottom gradient line */}
                <div className="h-1 w-full rounded-full bg-gradient-to-r from-[#00eeff] to-[#7c3aed]
                  opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
