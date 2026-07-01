import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { projects } from "../data/constants";

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-10 px-4 md:px-8 lg:px-16 bg-[#0a192f] dark:bg-[#0a192f] bg-slate-50"
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
            Latest{" "}
            <span className="text-[#00eeff]">Projects</span>
          </h2>
          <div className="mt-4 w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-[#00eeff] to-[#7c3aed]" />
        </motion.div>

        {/* ── Projects Grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="group relative rounded-2xl overflow-hidden
                bg-white/70 backdrop-blur-lg border border-black/5 shadow-md
                dark:bg-white/5 dark:backdrop-blur-lg dark:border-white/10 dark:shadow-none
                hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(0,238,255,0.15)]
                dark:hover:shadow-[0_0_30px_rgba(0,238,255,0.25)]
                transition-all duration-300 ease-out"
            >
              {/* ── Image ── */}
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-80% h-50% object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Hover overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f]/80 via-transparent to-transparent
                  opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* ── Content ── */}
              <div className="p-6 flex flex-col gap-4">
                {/* Title */}
                <h3 className="text-xl font-bold text-slate-800 dark:text-white">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 dark:text-[#8892b0] text-sm leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Features (if present) */}
                {project.features && project.features.length > 0 && (
                  <div className="flex flex-wrap gap-1.5">
                    {project.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-2 py-0.5 rounded-md text-xs font-medium
                          bg-purple-50 text-purple-600 border border-purple-200
                          dark:bg-[#7c3aed]/10 dark:text-[#c4b5fd] dark:border-[#7c3aed]/20"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                )}

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-0.5 rounded-full text-xs font-medium
                        bg-cyan-50 text-cyan-700 border border-cyan-200
                        dark:bg-[#00eeff]/10 dark:text-[#00eeff] dark:border-[#00eeff]/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-3 mt-2">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-semibold
                        bg-[#00eeff] text-[#0a192f] hover:shadow-[0_0_15px_rgba(0,238,255,0.5)]
                        transition-all duration-300"
                    >
                      <FaExternalLinkAlt className="text-xs" />
                      Live Demo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-semibold
                        border border-slate-300 text-slate-700 hover:border-[#00eeff] hover:text-[#00eeff]
                        dark:border-[#00eeff]/40 dark:text-[#00eeff] dark:hover:border-[#00eeff] dark:hover:shadow-[0_0_15px_rgba(0,238,255,0.3)]
                        transition-all duration-300"
                    >
                      <FaGithub />
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
