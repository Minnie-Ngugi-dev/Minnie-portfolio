import React from 'react'

import { useRef, useEffect, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Github, Mail, Download, MapPin, GraduationCap, Briefcase, Heart } from "lucide-react"
import useStore from "../store/useStore"

// ── Animated counter ──────────────────────────────
function Counter({ target, suffix = "", duration = 2000 }) {
  const ref      = useRef(null)
  const inView   = useInView(ref, { once: true, margin: "-50px" })
  const [count,  setCount] = useState(0)

  useEffect(() => {
    if (!inView) return
    let startTime = null
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const eased    = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      if (progress < 1) requestAnimationFrame(animate)
    }
    requestAnimationFrame(animate)
  }, [inView, target, duration])

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  )
}

// ── FadeIn wrapper ────────────────────────────────
function FadeIn({ children, delay = 0, direction = "up" }) {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })
  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        y: direction === "up"    ?  28 : 0,
        x: direction === "left"  ? -28 :
           direction === "right" ?  28 : 0,
      }}
      animate={inView ? { opacity: 1, y: 0, x: 0 } : {}}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay }}>
      {children}
    </motion.div>
  )
}

// ── Data ──────────────────────────────────────────
const values = [
  {
    icon: "🎯",
    title: "Full Product Thinking",
    desc: "I think beyond the code — I consider the user, the data, the system, and the business goal.",
    color: "blue",
  },
  {
    icon: "🔧",
    title: "End-to-End Capability",
    desc: "From database schema to mobile UI, I take a product from idea to deployment independently.",
    color: "indigo",
  },
  {
    icon: "📈",
    title: "Always Learning",
    desc: "Tech evolves fast. I keep up through freeCodeCamp, personal projects, and building every day.",
    color: "violet",
  },
  {
    icon: "🌍",
    title: "Remote-Ready",
    desc: "Disciplined, self-managed, and experienced in async workflows and clear written communication.",
    color: "sky",
  },
]

const stats = [
  { num: 2,    suffix: "+",   label: "Finished Projects", icon: "🚀" },
  { num: 4,    suffix: "",    label: "Tech Stacks",        icon: "⚡" },
  { num: 100,  suffix: "%",   label: "Commitment",         icon: "💯" },
  { num: 6,    suffix: "mo",  label: "To Remote Job",      icon: "🎯" },
]

const timeline = [
  {
    icon: GraduationCap,
    title: "Diploma in Software Development",
    org: "Institute of Software Technologies",
    desc: "Built a strong foundation in software engineering, web development, and database systems.",
    color: "blue",
  },
  {
    icon: Heart,
    title: "freeCodeCamp Certifications",
    org: "In Progress · 2024–Present",
    desc: "Completing Responsive Web Design and JavaScript Algorithms & Data Structures.",
    color: "violet",
  },
  {
    icon: Briefcase,
    title: "Full-Stack Portfolio Projects",
    org: "Self-Directed · 2024–Present",
    desc: "Building real-world applications — MERN booking system, Laravel garage system, and more.",
    color: "indigo",
  },
]

const colorMap = {
  blue:   { bg: "bg-blue-50",   border: "border-blue-100",   hover: "hover:border-blue-300   hover:bg-blue-50/60",   icon: "bg-blue-100",   dot: "bg-blue-500"   },
  indigo: { bg: "bg-indigo-50", border: "border-indigo-100", hover: "hover:border-indigo-300 hover:bg-indigo-50/60", icon: "bg-indigo-100", dot: "bg-indigo-500" },
  violet: { bg: "bg-violet-50", border: "border-violet-100", hover: "hover:border-violet-300 hover:bg-violet-50/60", icon: "bg-violet-100", dot: "bg-violet-500" },
  sky:    { bg: "bg-sky-50",    border: "border-sky-100",    hover: "hover:border-sky-300    hover:bg-sky-50/60",    icon: "bg-sky-100",    dot: "bg-sky-500"    },
}

const darkColorMap = {
  blue:   { bg: "dark-blue",   icon: "bg-blue-500/10",   dot: "bg-blue-400"   },
  indigo: { bg: "dark-indigo", icon: "bg-indigo-500/10", dot: "bg-indigo-400" },
  violet: { bg: "dark-violet", icon: "bg-violet-500/10", dot: "bg-violet-400" },
  sky:    { bg: "dark-sky",    icon: "bg-sky-500/10",    dot: "bg-sky-400"    },
}

export default function About() {
  const isDark = useStore((s) => s.isDark)

  return (
    <section
      id="about"
      className={`py-24 px-6 transition-colors duration-300
        ${isDark ? "bg-slate-900" : "bg-white"}`}>
      <div className="max-w-6xl mx-auto">

        {/* ══ TOP — heading + stats ══════════════════ */}
        <div className="grid md:grid-cols-2 gap-16 items-start mb-20">

          {/* LEFT — Story */}
          <div>
            <FadeIn delay={0.1}>
              <div className="flex items-center gap-3 mb-5">
                <span className="w-7 h-0.5 bg-blue-600 rounded-full" />
                <span className="font-mono text-xs text-blue-600 uppercase
                                 tracking-widest font-semibold">
                  About Me
                </span>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <h2 className={`text-4xl md:text-5xl font-black leading-tight
                              tracking-tight mb-8
                              ${isDark ? "text-white" : "text-slate-900"}`}>
                Developer.<br />
                <span className="text-transparent bg-clip-text
                                 bg-gradient-to-r from-blue-600 to-indigo-600
                                 italic">
                  Problem Solver.
                </span><br />
                Builder.
              </h2>
            </FadeIn>

            <FadeIn delay={0.3}>
              <p className={`text-base leading-relaxed mb-5 font-light
                ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                I am{" "}
                <span className={`font-semibold
                  ${isDark ? "text-white" : "text-slate-800"}`}>
                  Minnie Wanjiru Ngugi
                </span>
                , a Full-Stack Developer from{" "}
                <span className="inline-flex items-center gap-1 text-blue-500 font-semibold">
                  <MapPin size={12} />
                  Nairobi, Kenya
                </span>
                , passionate about building complete digital products that
                solve real problems. My journey started with a Diploma in
                Software Development, and I have since grown into a developer
                comfortable across the entire stack.
              </p>
            </FadeIn>

            <FadeIn delay={0.4}>
              <p className={`text-base leading-relaxed mb-5 font-light
                ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                I specialise in the{" "}
                <span className="text-blue-500 font-semibold italic">MERN stack</span>{" "}
                for modern web applications,{" "}
                <span className="text-blue-500 font-semibold italic">PHP Laravel</span>{" "}
                for scalable backend systems,{" "}
                <span className="text-blue-500 font-semibold italic">SQL databases</span>{" "}
                for reliable data management, and{" "}
                <span className="text-blue-500 font-semibold italic">React Native</span>{" "}
                for cross-platform mobile apps.
              </p>
            </FadeIn>

            <FadeIn delay={0.5}>
              <p className={`text-base leading-relaxed mb-10 font-light
                ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                Currently completing my{" "}
                <span className={`font-semibold
                  ${isDark ? "text-white" : "text-slate-800"}`}>
                  freeCodeCamp certifications
                </span>
                , building a portfolio of real-world projects, and actively
                seeking{" "}
                <span className={`font-semibold
                  ${isDark ? "text-white" : "text-slate-800"}`}>
                  remote opportunities
                </span>{" "}
                where I can contribute, grow, and build things that matter.
              </p>
            </FadeIn>

            {/* Buttons */}
            <FadeIn delay={0.6}>
              <div className="flex gap-3 flex-wrap">
                <motion.a
                  href="https://github.com/MINNIE-NGUGI-DEV"
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  className={`inline-flex items-center gap-2 border-2 text-sm
                               font-semibold px-5 py-2.5 rounded-xl
                               transition-all duration-200
                               ${isDark
                                 ? "border-slate-700 text-slate-300 hover:border-blue-500 hover:text-blue-400"
                                 : "border-slate-200 text-slate-700 hover:border-blue-600 hover:text-blue-600"
                               }`}>
                  <Github size={15} />
                  GitHub
                </motion.a>

                <motion.a
                  href="mailto:ngugiminnie@gmail.com"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  className={`inline-flex items-center gap-2 border-2 text-sm
                               font-semibold px-5 py-2.5 rounded-xl
                               transition-all duration-200
                               ${isDark
                                 ? "border-slate-700 text-slate-300 hover:border-blue-500 hover:text-blue-400"
                                 : "border-slate-200 text-slate-700 hover:border-blue-600 hover:text-blue-600"
                               }`}>
                  <Mail size={15} />
                  Email Me
                </motion.a>

                <motion.a
                  href="/Minnie_Ngugi_CV.pdf"
                  download
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  className="inline-flex items-center gap-2 bg-gradient-to-r
                             from-blue-600 to-indigo-600 text-white text-sm
                             font-semibold px-5 py-2.5 rounded-xl
                             shadow-lg shadow-blue-500/25
                             hover:shadow-blue-500/40 transition-shadow duration-200">
                  <Download size={15} />
                  Download CV
                </motion.a>
              </div>
            </FadeIn>
          </div>

          {/* RIGHT — Animated stats */}
          <div className="flex flex-col gap-5">

            {/* Stats grid */}
            <FadeIn delay={0.2} direction="left">
              <div className="grid grid-cols-2 gap-4">
                {stats.map((s, i) => (
                  <motion.div
                    key={s.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + i * 0.1, type: "spring" }}
                    whileHover={{ scale: 1.03, y: -2 }}
                    className={`p-5 rounded-2xl border text-center
                                transition-all duration-300 cursor-default
                                ${isDark
                                  ? "bg-slate-800 border-slate-700 hover:border-blue-500/50"
                                  : "bg-gradient-to-br from-blue-600 to-indigo-600 border-transparent"
                                }`}>
                    <div className="text-2xl mb-2">{s.icon}</div>
                    <div className={`text-3xl font-black leading-none mb-1
                      ${isDark ? "text-white" : "text-white"}`}>
                      <Counter
                        target={s.num}
                        suffix={s.suffix}
                        duration={1800}
                      />
                    </div>
                    <div className={`text-xs font-semibold leading-tight
                      ${isDark ? "text-slate-400" : "text-blue-100"}`}>
                      {s.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </FadeIn>

            {/* Value cards */}
            {values.map((v, i) => {
              const c = colorMap[v.color]
              return (
                <FadeIn key={v.title} delay={0.3 + i * 0.08} direction="left">
                  <motion.div
                    whileHover={{ x: 4 }}
                    className={`flex items-start gap-4 p-5 rounded-2xl border
                                transition-all duration-300 cursor-default group
                                ${isDark
                                  ? "bg-slate-800/60 border-slate-700/80 hover:border-blue-500/40 hover:bg-slate-800"
                                  : `${c.bg} ${c.border} ${c.hover}`
                                }`}>
                    <div className={`w-10 h-10 rounded-xl flex items-center
                                     justify-center text-xl flex-shrink-0
                                     group-hover:scale-110 transition-transform duration-200
                                     ${isDark ? "bg-slate-700" : c.icon}`}>
                      {v.icon}
                    </div>
                    <div>
                      <div className={`text-sm font-bold mb-1
                        ${isDark ? "text-white" : "text-slate-800"}`}>
                        {v.title}
                      </div>
                      <div className={`text-sm leading-relaxed font-light
                        ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                        {v.desc}
                      </div>
                    </div>
                  </motion.div>
                </FadeIn>
              )
            })}
          </div>
        </div>

        {/* ══ BOTTOM — Timeline ═════════════════════ */}
        <FadeIn delay={0.2}>
          <div className={`rounded-3xl p-8 border
            ${isDark
              ? "bg-slate-800/50 border-slate-700"
              : "bg-slate-50 border-slate-100"
            }`}>
            <div className="flex items-center gap-3 mb-8">
              <span className="w-7 h-0.5 bg-blue-600 rounded-full" />
              <span className="font-mono text-xs text-blue-600 uppercase
                               tracking-widest font-semibold">
                My Journey
              </span>
            </div>

            <div className="relative">
              {/* Vertical line */}
              <div className={`absolute left-5 top-0 bottom-0 w-px
                ${isDark ? "bg-slate-700" : "bg-slate-200"}`} />

              <div className="flex flex-col gap-8">
                {timeline.map((t, i) => {
                  const Icon = t.icon
                  const c    = colorMap[t.color]
                  return (
                    <motion.div
                      key={t.title}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.15, duration: 0.5 }}
                      className="flex gap-6 relative">
                      {/* Dot */}
                      <div className={`w-10 h-10 rounded-xl flex items-center
                                       justify-center flex-shrink-0 relative z-10
                                       ${isDark ? "bg-slate-700" : c.icon}`}>
                        <Icon size={18}
                          className={isDark ? "text-blue-400" : `text-${t.color}-600`} />
                      </div>
                      <div className="pt-1.5">
                        <div className={`font-bold text-sm mb-0.5
                          ${isDark ? "text-white" : "text-slate-800"}`}>
                          {t.title}
                        </div>
                        <div className="text-xs text-blue-500 font-mono
                                        font-semibold mb-2">
                          {t.org}
                        </div>
                        <div className={`text-sm font-light leading-relaxed
                          ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                          {t.desc}
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  )
}