import React, { useEffect, useRef, useState } from "react"
import { motion, useInView, useMotionValue, useSpring } from "framer-motion"
import { ArrowDown, ArrowRight, MapPin, Download } from "lucide-react"
import { Link } from "react-scroll"
import Typewriter from "typewriter-effect"
import useStore from "../store/useStore"

// ── Animated counter hook ─────────────────────────
function useCounter(target, duration = 2000, shouldStart = false) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!shouldStart) return
    let startTime = null
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      if (progress < 1) requestAnimationFrame(animate)
    }
    requestAnimationFrame(animate)
  }, [target, duration, shouldStart])
  return count
}

// ── Floating stat card ────────────────────────────
function FloatCard({ emoji, value, suffix = "", label, delay, position, isDark }) {
  const ref      = useRef(null)
  const inView   = useInView(ref, { once: true })
  const count    = useCounter(value, 1800, inView)

  return (
    <motion.div
      ref={ref}
      animate={{ y: [0, -8, 0] }}
      transition={{
        duration: 3.5 + delay,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
      className={`absolute ${position} z-20`}>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8 + delay, duration: 0.5, type: "spring" }}
        className={`flex items-center gap-3 px-4 py-3 rounded-2xl
                    shadow-xl border backdrop-blur-sm
                    ${isDark
                      ? "bg-slate-800/90 border-slate-700/80 shadow-black/30"
                      : "bg-white/90 border-slate-100 shadow-slate-200/80"
                    }`}>
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center
                         text-xl flex-shrink-0
                         ${isDark ? "bg-slate-700" : "bg-blue-50"}`}>
          {emoji}
        </div>
        <div>
          <div className={`text-xl font-black leading-none
            ${isDark ? "text-white" : "text-slate-900"}`}>
            {typeof value === "number" ? count : value}{suffix}
          </div>
          <div className={`text-xs font-medium mt-0.5
            ${isDark ? "text-slate-400" : "text-slate-400"}`}>
            {label}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

const fadeUp = (delay = 0) => ({
  initial:    { opacity: 0, y: 28 },
  animate:    { opacity: 1, y: 0  },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
})

export default function Hero() {
  const isDark = useStore((s) => s.isDark)

  return (
    <section
      id="home"
      className={`min-h-screen flex items-center relative overflow-hidden
                  pt-24 pb-16 px-6 transition-colors duration-300
                  ${isDark
                    ? "bg-slate-900"
                    : "bg-gradient-to-br from-white via-blue-50/20 to-white"
                  }`}>

      {/* ── Background dot grid ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, ${
            isDark
              ? "rgba(99,102,241,0.15)"
              : "rgba(37,99,235,0.08)"
          } 1px, transparent 1px)`,
          backgroundSize: "36px 36px",
          maskImage:
            "radial-gradient(ellipse 80% 80% at 80% 20%, black 0%, transparent 70%)",
        }}
      />

      {/* ── Glow blobs ── */}
      <div className={`absolute top-1/4 right-1/3 w-[500px] h-[500px]
                       rounded-full blur-3xl pointer-events-none opacity-30
                       ${isDark ? "bg-blue-600/20" : "bg-blue-100"}`} />
      <div className={`absolute bottom-1/3 left-1/4 w-72 h-72
                       rounded-full blur-3xl pointer-events-none opacity-20
                       ${isDark ? "bg-indigo-600/20" : "bg-indigo-100"}`} />

      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2
                      gap-16 items-center relative z-10">

        {/* ══ LEFT ══════════════════════════════════ */}
        <div>

          {/* Available badge - made generic */}
          <motion.div {...fadeUp(0.1)}>
            <div className={`inline-flex items-center gap-2.5 text-xs font-semibold
                             uppercase tracking-widest px-4 py-2 rounded-full mb-8
                             border backdrop-blur-sm
                             ${isDark
                               ? "bg-green-500/10 border-green-500/30 text-green-400"
                               : "bg-green-50 border-green-200 text-green-700"
                             }`}>
              <span className="relative flex w-2 h-2">
                <span className="animate-ping absolute inline-flex h-full w-full
                                 rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full w-2 h-2
                                 bg-green-500" />
              </span>
              Open to Opportunities
              <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold
                ${isDark
                  ? "bg-green-500/20 text-green-400"
                  : "bg-green-100 text-green-700"}`}>
                2026
              </span>
            </div>
          </motion.div>

          {/* Name */}
          <motion.div {...fadeUp(0.2)}>
            <h1 className={`text-5xl md:text-7xl font-black leading-none
                            tracking-tight mb-5
                            ${isDark ? "text-white" : "text-slate-900"}`}>
              Minnie<br />
              <span className="text-transparent bg-clip-text
                               bg-gradient-to-r from-blue-600 to-indigo-600
                               italic">
                Wanjiru
              </span><br />
              <span className={isDark ? "text-slate-300" : "text-slate-700"}>
                Ngugi
              </span>
            </h1>
          </motion.div>

          {/* Typewriter title - removed remote-specific */}
          <motion.div {...fadeUp(0.3)}
            className="flex items-center gap-2 mb-6">
            <span className={`font-mono text-xs tracking-widest uppercase
              ${isDark ? "text-blue-400" : "text-blue-600"}`}>
              &gt;_
            </span>
            <div className={`font-mono text-xs tracking-widest uppercase font-semibold
              ${isDark ? "text-blue-400" : "text-blue-600"}`}>
              <Typewriter
                options={{
                  strings: [
                    "Full-Stack Developer",
                    "MERN Stack Engineer",
                    "Laravel Developer",
                    "React Native Builder",
                    "Based in Nairobi 🇰🇪",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 60,
                  deleteSpeed: 30,
                }}
              />
            </div>
          </motion.div>

          {/* Description - removed "remote opportunities worldwide" */}
          <motion.p {...fadeUp(0.4)}
            className={`text-base leading-relaxed max-w-md mb-10 font-light
              ${isDark ? "text-slate-400" : "text-slate-500"}`}>
            I build{" "}
            <span className={`font-semibold
              ${isDark ? "text-white" : "text-slate-800"}`}>
              fast, beautiful, and functional
            </span>{" "}
            web and mobile applications — from responsive React frontends
            to powerful Laravel backends. Based in{" "}
            <span className={`font-semibold inline-flex items-center gap-1
              ${isDark ? "text-white" : "text-slate-800"}`}>
              <MapPin size={12} className="text-blue-500" />
              Nairobi, Kenya
            </span>
            , I'm ready to contribute to your next project.
          </motion.p>

          {/* Buttons */}
          <motion.div {...fadeUp(0.5)}
            className="flex flex-wrap gap-4">
            <Link to="projects" smooth duration={600} offset={-64}
              className="cursor-pointer">
              <motion.div
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2
                           bg-gradient-to-r from-blue-600 to-indigo-600
                           text-white font-bold text-sm px-7 py-3.5 rounded-xl
                           shadow-lg shadow-blue-500/30
                           hover:shadow-blue-500/50 transition-shadow duration-200">
                View My Work
                <ArrowDown size={15} />
              </motion.div>
            </Link>

            <Link to="contact" smooth duration={600} offset={-64}
              className="cursor-pointer">
              <motion.div
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className={`inline-flex items-center gap-2 font-bold text-sm
                            px-7 py-3.5 rounded-xl border-2 transition-all duration-200
                            ${isDark
                              ? "border-slate-700 text-slate-300 hover:border-blue-500 hover:text-blue-400"
                              : "border-slate-200 text-slate-700 hover:border-blue-600 hover:text-blue-600"
                            }`}>
                Get In Touch
                <ArrowRight size={15} />
              </motion.div>
            </Link>

            <a href="/Minnie_Ngugi_CV.pdf" download>
              <motion.div
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className={`inline-flex items-center gap-2 font-bold text-sm
                            px-7 py-3.5 rounded-xl transition-all duration-200
                            ${isDark
                              ? "bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700"
                              : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                            }`}>
                <Download size={15} />
                Download CV
              </motion.div>
            </a>
          </motion.div>

          {/* Tech stack pills */}
          <motion.div {...fadeUp(0.65)}
            className="flex flex-wrap gap-2 mt-8">
            {["React", "Node.js", "Laravel", "MongoDB", "React Native", "MySQL"].map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + i * 0.07 }}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-semibold
                            border transition-all duration-200 cursor-default
                            hover:border-blue-400 hover:text-blue-500
                            ${isDark
                              ? "bg-slate-800 border-slate-700 text-slate-400"
                              : "bg-slate-50 border-slate-200 text-slate-500"
                            }`}>
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </div>

        {/* ══ RIGHT ═════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5, type: "spring" }}
          className="relative hidden md:flex items-center justify-center">

          {/* Photo frame */}
          <div className={`relative w-80 h-80 rounded-3xl border-2
                           flex flex-col items-center justify-center gap-4
                           overflow-hidden shadow-2xl
                           ${isDark
                             ? "bg-gradient-to-br from-slate-800 to-slate-700 border-slate-600 shadow-black/40"
                             : "bg-gradient-to-br from-blue-50 to-indigo-100 border-blue-200 shadow-blue-100"
                           }`}>

            {/* Decorative rings */}
            <div className={`absolute inset-4 rounded-2xl border-2 border-dashed opacity-30
              ${isDark ? "border-slate-500" : "border-blue-300"}`} />
            <div className={`absolute inset-8 rounded-xl border opacity-20
              ${isDark ? "border-slate-400" : "border-blue-400"}`} />

            <motion.span
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="text-8xl relative z-10">
              👩🏾‍💻
            </motion.span>

            <div className="relative z-10 text-center">
              <div className={`font-mono text-xs font-bold uppercase tracking-widest mb-1
                ${isDark ? "text-slate-400" : "text-blue-500"}`}>
                // photo coming soon
              </div>
              <div className={`text-xs font-medium
                ${isDark ? "text-slate-500" : "text-slate-400"}`}>
                Nairobi, Kenya 🇰🇪
              </div>
            </div>

            {/* Corner accents */}
            <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2
                            border-blue-500 rounded-tl-lg opacity-60" />
            <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2
                            border-blue-500 rounded-tr-lg opacity-60" />
            <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2
                            border-blue-500 rounded-bl-lg opacity-60" />
            <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2
                            border-blue-500 rounded-br-lg opacity-60" />
          </div>

          {/* Floating stat cards - updated last label */}
          <FloatCard
            emoji="🚀"
            value={6}
            suffix="+"
            label="Projects Built"
            delay={0}
            position="-top-6 -right-4"
            isDark={isDark}
          />
          <FloatCard
            emoji="⚡"
            value={4}
            suffix=""
            label="Tech Stacks"
            delay={0.5}
            position="-bottom-6 -left-4"
            isDark={isDark}
          />
          <FloatCard
            emoji="☕"
            value={200}
            suffix="+"
            label="Cups of Coffee"
            delay={1}
            position="bottom-16 -right-8"
            isDark={isDark}
          />
          <FloatCard
            emoji="🌍"
            value="Open"
            suffix=""
            label="To Work"
            delay={1.5}
            position="-top-2 left-4"
            isDark={isDark}
          />

        </motion.div>
      </div>

      {/* ── Scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2
                   flex flex-col items-center gap-2">
        <span className={`text-xs font-mono uppercase tracking-widest
          ${isDark ? "text-slate-500" : "text-slate-400"}`}>
          scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className={`w-5 h-8 rounded-full border-2 flex items-start
                      justify-center pt-1.5
                      ${isDark ? "border-slate-600" : "border-slate-300"}`}>
          <div className={`w-1 h-2 rounded-full
            ${isDark ? "bg-slate-400" : "bg-slate-400"}`} />
        </motion.div>
      </motion.div>

    </section>
  )
}