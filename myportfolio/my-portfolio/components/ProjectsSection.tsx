"use client";

import { motion } from "framer-motion";
import { projectsData } from "../data/projects";

export default function ProjectsSection() {
  return (
    <section className="py-20 px-4 max-w-5xl mx-auto text-white">
      <motion.h2 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold mb-10 text-center"
      >
        Featured <span className="text-blue-500">Projects</span>
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-6">
        {projectsData.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="p-6 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition"
          >
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p className="text-slate-400 text-sm mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((t, i) => (
                <span key={i} className="text-xs bg-slate-800 text-blue-400 px-2.5 py-1 rounded-full border border-slate-700">
                  {t}
                </span>
              ))}
            </div>
            <a 
              href={project.link} 
              target="_blank" 
              className="text-sm text-blue-400 font-medium hover:underline inline-flex items-center gap-1"
            >
              View Project →
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}