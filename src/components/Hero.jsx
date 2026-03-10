import React from 'react'

import { motion } from "framer-motion"

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut", delay }
})

const floatAnim = {
  animate: {
    y: [0, -8, 0],
    transition: { duration: 3.5, repeat: Infinity, ease: "easeInOut" }
  }
}

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden
                        bg-gradient-to-br from-white via-blue-50/30 to-white
                        pt-24 pb-16 px-6">

      {/* Background dot grid */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(37,99,235,0.10) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          maskImage: "radial-gradient(ellipse 70% 70% at 80% 30%, black 0%, transparent 70%)"
        }}
      />

      {/* Soft glow blobs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-100/40
                      rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-blue-50/60
                      rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2
                      gap-12 items-center relative z-10">

        {/* ── LEFT ── */}
        <div>
          {/* Available badge */}
          <motion.div {...fadeUp(0.1)}
            className="inline-flex items-center gap-2 bg-blue-50 border
                       border-blue-200 text-blue-700 text-xs font-semibold
                       uppercase tracking-widest px-4 py-2 rounded-full mb-8">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Available for Remote Work
          </motion.div>

          {/* Name */}
          <motion.h1 {...fadeUp(0.2)}
            className="text-5xl md:text-7xl font-bold leading-none
                       tracking-tight text-slate-900 mb-4">
            Minnie<br />
            <span className="text-blue-600 italic">Wanjiru</span><br />
            Ngugi
          </motion.h1>

          {/* Title */}
          <motion.p {...fadeUp(0.3)}
            className="font-mono text-xs text-blue-600 tracking-widest
                       uppercase mb-6">
            Full-Stack Developer &nbsp;·&nbsp; MERN · Laravel · React Native
          </motion.p>

          {/* Description */}
          <motion.p {...fadeUp(0.4)}
            className="text-slate-500 text-base leading-relaxed
                       max-w-md mb-10 font-light">
            I build <span className="text-slate-800 font-semibold">fast, beautiful,
            and functional</span> web and mobile applications — from responsive
            React frontends to powerful Laravel backends. Based in{" "}
            <span className="text-slate-800 font-semibold">Nairobi, Kenya</span>{" "}
            and open to remote opportunities worldwide.
          </motion.p>

          {/* Buttons */}
          <motion.div {...fadeUp(0.5)}
            className="flex flex-wrap gap-4">
            <a href="#projects"
              className="inline-flex items-center gap-2 bg-blue-600 text-white
                         font-semibold text-sm px-7 py-3.5 rounded-xl
                         hover:bg-blue-700 transition-all duration-200
                         hover:-translate-y-0.5 shadow-lg shadow-blue-200/60">
              View My Work
              <span className="text-base">↓</span>
            </a>
            <a href="#contact"
              className="inline-flex items-center gap-2 border-2 border-slate-200
                         text-slate-700 font-semibold text-sm px-7 py-3.5
                         rounded-xl hover:border-blue-600 hover:text-blue-600
                         transition-all duration-200 hover:-translate-y-0.5">
              Get In Touch
              <span>→</span>
            </a>
          </motion.div>
        </div>

        {/* ── RIGHT ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative hidden md:flex items-center justify-center">

          {/* Photo frame */}
          <div className="w-72 h-72 rounded-3xl bg-gradient-to-br
                          from-blue-100 to-blue-200 border-2 border-blue-200
                          flex flex-col items-center justify-center gap-3
                          relative overflow-hidden shadow-xl shadow-blue-100">
            <span className="text-7xl">👩🏾‍💻</span>
            <span className="font-mono text-xs text-blue-500 font-semibold
                             uppercase tracking-widest">
              // photo coming soon
            </span>
          </div>

          {/* Floating card — projects */}
          <motion.div {...floatAnim}
            className="absolute -top-4 -right-6 bg-white border border-slate-100
                       rounded-2xl px-4 py-3 shadow-lg shadow-slate-100
                       flex items-center gap-3">
            <span className="text-2xl">🚀</span>
            <div>
              <div className="text-lg font-bold text-slate-900 leading-none">6+</div>
              <div className="text-xs text-slate-400 font-medium mt-0.5">Projects Built</div>
            </div>
          </motion.div>

          {/* Floating card — stacks */}
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-4 -left-6 bg-white border border-slate-100
                       rounded-2xl px-4 py-3 shadow-lg shadow-slate-100
                       flex items-center gap-3">
            <span className="text-2xl">⚡</span>
            <div>
              <div className="text-lg font-bold text-slate-900 leading-none">4</div>
              <div className="text-xs text-slate-400 font-medium mt-0.5">Tech Stacks</div>
            </div>
          </motion.div>

          {/* Floating card — remote */}
          <motion.div
            animate={{ y: [0, -7, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute bottom-10 -right-8 bg-white border border-slate-100
                       rounded-2xl px-4 py-3 shadow-lg shadow-slate-100
                       flex items-center gap-3">
            <span className="text-2xl">🌍</span>
            <div>
              <div className="text-sm font-bold text-slate-900 leading-none">Remote</div>
              <div className="text-xs text-slate-400 font-medium mt-0.5">Ready</div>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  )
}