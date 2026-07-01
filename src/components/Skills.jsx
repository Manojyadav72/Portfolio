import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaReact, FaServer, FaDatabase, FaTools, FaRobot } from "react-icons/fa";
import { skills } from "../data/constants";

// Map icon string names to actual icon components
const iconMap = { FaCode, FaReact, FaServer, FaDatabase, FaTools, FaRobot };

const Skills = () => {
  return (
    <section
      id="skills"
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
            <span className="text-[#00eeff]">Skills</span>
          </h2>
          <div className="mt-4 w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-[#00eeff] to-[#7c3aed]" />
        </motion.div>

        {/* ── Skills Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => {
            const IconComponent = iconMap[skill.icon] || FaCode;

            return (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative rounded-2xl p-6
                  bg-white/70 backdrop-blur-lg border border-black/5 shadow-md
                  dark:bg-white/5 dark:backdrop-blur-lg dark:border-white/10 dark:shadow-none
                  hover:-translate-y-[10px] hover:shadow-[0_0_30px_rgba(0,238,255,0.15)]
                  dark:hover:shadow-[0_0_30px_rgba(0,238,255,0.25)]
                  transition-all duration-300 ease-out cursor-default"
              >
                {/* Icon */}
                <div className="flex items-center justify-center w-14 h-14 mb-5 rounded-xl
                  bg-cyan-50 dark:bg-[#00eeff]/10 transition-colors duration-300">
                  <IconComponent className="text-3xl text-[#00eeff]" />
                </div>

                {/* Category Name */}
                <h3 className="text-xl font-semibold mb-4 text-slate-800 dark:text-[#ccd6f6]">
                  {skill.category}
                </h3>

                {/* Skill Pills */}
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 rounded-full text-sm font-medium
                        bg-cyan-50 text-cyan-700 border border-cyan-200
                        dark:bg-[#00eeff]/10 dark:text-[#00eeff] dark:border-[#00eeff]/20
                        transition-colors duration-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
