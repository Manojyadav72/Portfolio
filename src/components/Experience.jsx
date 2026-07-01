import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";
import { education, experience } from "../data/constants";

const Experience = () => {
  // Combine experience first, then education — each tagged with its type
  const timelineItems = [
    ...experience.map((item) => ({ ...item, type: item.type || "experience" })),
    ...education.map((item) => ({ ...item, type: item.type || "education" })),
  ];

  return (
    <section
      id="experience"
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
            Experience &amp;{" "}
            <span className="text-[#00eeff]">Education</span>
          </h2>
          <div className="mt-4 w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-[#00eeff] to-[#7c3aed]" />
        </motion.div>

        {/* ── Timeline ── */}
        <div className="relative">
          {/* Center / Left line */}
          <div
            className="absolute top-0 bottom-0 w-0.5 rounded-full
              bg-gradient-to-b from-[#00eeff] to-[#7c3aed]
              left-4 md:left-1/2 md:-translate-x-1/2"
          />

          <div className="flex flex-col gap-12">
            {timelineItems.map((item, index) => {
              const isLeft = index % 2 === 0; // alternates on desktop
              const isExperience = item.type === "experience";

              return (
                <div
                  key={`${item.type}-${index}`}
                  className={`relative flex items-start
                    md:items-center
                    ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}
                    flex-row`}
                >
                  {/* ── Timeline Dot ── */}
                  <div
                    className="absolute z-10
                      left-4 md:left-1/2
                      -translate-x-1/2
                      top-6 md:top-1/2 md:-translate-y-1/2"
                  >
                    <div className="w-4 h-4 rounded-full bg-[#00eeff] shadow-[0_0_12px_rgba(0,238,255,0.6)]" />
                  </div>

                  {/* ── Spacer (half width on desktop, small indent on mobile) ── */}
                  <div className="hidden md:block md:w-1/2" />

                  {/* ── Card ── */}
                  <motion.div
                    initial={{
                      opacity: 0,
                      x: isLeft ? -60 : 60,
                    }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`relative ml-10 md:ml-0 md:w-1/2
                      ${isLeft ? "md:pr-10" : "md:pl-10"}
                    `}
                  >
                    <div
                      className="rounded-xl p-6
                        bg-white/70 backdrop-blur-lg border border-black/5 shadow-md
                        dark:bg-white/5 dark:backdrop-blur-lg dark:border-white/10 dark:shadow-none
                        hover:shadow-[0_0_25px_rgba(0,238,255,0.1)]
                        dark:hover:shadow-[0_0_25px_rgba(0,238,255,0.2)]
                        transition-all duration-300"
                    >
                      {/* Top row: duration badge + type icon */}
                      <div className="flex items-center justify-between mb-3">
                        <span
                          className="inline-block px-3 py-1 rounded-full text-xs font-semibold
                            bg-[#00eeff]/10 text-[#00eeff] border border-[#00eeff]/20"
                        >
                          {item.duration}
                        </span>
                        {isExperience ? (
                          <FaBriefcase className="text-lg text-[#00eeff]" />
                        ) : (
                          <FaGraduationCap className="text-lg text-[#7c3aed]" />
                        )}
                      </div>

                      {/* Title / Degree */}
                      <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-1">
                        {item.role || item.degree}
                      </h3>

                      {/* Company / Institution */}
                      <p className="text-sm text-slate-600 dark:text-[#8892b0] mb-1">
                        {item.company || item.institution}
                      </p>

                      {/* Location */}
                      {item.location && (
                        <p className="text-xs text-slate-500 dark:text-[#8892b0]/70 mb-2">
                          📍 {item.location}
                        </p>
                      )}

                      {/* Grade */}
                      {item.grade && (
                        <p className="text-sm font-medium text-[#00eeff] mb-2">
                          🎓 {item.grade}
                        </p>
                      )}

                      {/* Description */}
                      {item.description && (
                        <p className="text-sm text-slate-600 dark:text-[#8892b0] leading-relaxed mt-2">
                          {item.description}
                        </p>
                      )}
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
