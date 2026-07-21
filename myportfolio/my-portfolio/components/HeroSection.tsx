"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 bg-slate-950 text-white relative overflow-hidden">
      
      {/* Background Glow Effect */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />

      {/* Main Heading with Gradient */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6"
      >
        Building the <span className="bg-gradient-to-r from-blue-400 via-teal-400 to-indigo-500 bg-clip-text text-transparent">Future of Web</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-lg md:text-xl text-slate-400 max-w-2xl mb-10 leading-relaxed"
      >
        I'm a Full-Stack Developer crafting high-performance, animated, and scalable web applications using Next.js & React.
      </motion.p>

      {/* Call to Action Buttons */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.4 }}
        className="flex gap-4 flex-wrap justify-center"
      >
        <a 
          href="#projects" 
          className="px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-500 font-semibold text-white transition-all transform hover:scale-105 shadow-lg shadow-blue-500/25"
        >
          View Projects
        </a>
        <a 
          href="#contact" 
          className="px-6 py-3 rounded-full bg-slate-900 hover:bg-slate-800 text-slate-300 font-semibold border border-slate-700 transition-all transform hover:scale-105"
        >
          Contact Me
        </a>
      </motion.div>
    </section>
  );
}