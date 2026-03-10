import React from 'react'

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const values = [
  {
    icon: "🎯",
    title: "Full Product Thinking",
    desc: "I think beyond the code — I consider the user, the data, the system, and the business goal."
  },
  {
    icon: "🔧",
    title: "End-to-End Capability",
    desc: "From database schema to mobile UI, I can take a product from idea to deployment independently."
  },
  {
    icon: "📈",
    title: "Always Learning",
    desc: "Tech evolves fast. I keep up through freeCodeCamp, personal projects, and building every day."
  },
  {
    icon: "🌍",
    title: "Remote-Ready",
    desc: "Disciplined, self-managed, and experienced in async workflows and clear written communication."
  },
]

function FadeIn({ children, delay = 0, direction = "up" }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 28 : 0,
      x: direction === "left" ? -28 : direction === "right" ? 28 : 0,
    },
    visible: {
      opacity: 1, y: 0, x: 0,
      transition: { duration: 0.6, ease: "easeOut", delay }
    }
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}>
      {children}
    </motion.div>
  )
}

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* ── LEFT — Story ── */}
          <div>
            <FadeIn delay={0.1}>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-0.5 bg-blue-600 rounded-full" />
                <span className="font-mono text-xs text-blue-600 uppercase tracking-widest font-semibold">
                  About Me
                </span>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight text-slate-900 mb-8">
                Developer.<br />
                <span className="text-blue-600 italic">Problem Solver.</span><br />
                Builder.
              </h2>
            </FadeIn>

            <FadeIn delay={0.3}>
              <p className="text-slate-500 text-base leading-relaxed mb-5 font-light">
                I am{" "}
                <span className="text-slate-800 font-semibold">Minnie Wanjiru Ngugi</span>
                , a Full-Stack Developer from Nairobi, Kenya, passionate about
                building complete digital products that solve real problems. My
                journey started with a Diploma in Software Development, and I
                have since grown into a developer comfortable across the entire stack.
              </p>
            </FadeIn>

            <FadeIn delay={0.4}>
              <p className="text-slate-500 text-base leading-relaxed mb-5 font-light">
                I specialise in the{" "}
                <span className="text-blue-600 font-semibold italic">MERN stack</span>{" "}
                for modern web applications,{" "}
                <span className="text-blue-600 font-semibold italic">PHP Laravel</span>{" "}
                for scalable backend systems,{" "}
                <span className="text-blue-600 font-semibold italic">SQL databases</span>{" "}
                for reliable data management, and{" "}
                <span className="text-blue-600 font-semibold italic">React Native</span>{" "}
                for cross-platform mobile apps.
              </p>
            </FadeIn>

            <FadeIn delay={0.5}>
              <p className="text-slate-500 text-base leading-relaxed mb-10 font-light">
                Currently completing my{" "}
                <span className="text-slate-800 font-semibold">freeCodeCamp certifications</span>
                , building a portfolio of real-world projects, and actively seeking{" "}
                <span className="text-slate-800 font-semibold">remote opportunities</span>{" "}
                where I can contribute, grow, and build things that matter.
              </p>
            </FadeIn>

            {/* Social buttons */}
            <FadeIn delay={0.6}>
              <div className="flex gap-3 flex-wrap">
                <a
                  href="https://github.com/MINNIE-NGUGI-DEV"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 border-2 border-slate-200
                             text-slate-700 text-sm font-semibold px-5 py-2.5
                             rounded-xl hover:border-blue-600 hover:text-blue-600
                             transition-all duration-200 hover:-translate-y-0.5">
                  ⌥ GitHub
                </a>
                <a
                  href="mailto:ngugiminnie@gmail.com"
                  className="inline-flex items-center gap-2 border-2 border-slate-200
                             text-slate-700 text-sm font-semibold px-5 py-2.5
                             rounded-xl hover:border-blue-600 hover:text-blue-600
                             transition-all duration-200 hover:-translate-y-0.5">
                  ✉ Email Me
                </a>
                <a
                  href="/Minnie_Ngugi_CV.pdf"
                  download
                  className="inline-flex items-center gap-2 bg-blue-600 text-white
                             text-sm font-semibold px-5 py-2.5 rounded-xl
                             hover:bg-blue-700 transition-all duration-200
                             hover:-translate-y-0.5 shadow-md shadow-blue-100">
                  ↓ Download CV
                </a>
              </div>
            </FadeIn>
          </div>

          {/* ── RIGHT — Values ── */}
          <div className="flex flex-col gap-4">
            {values.map((v, i) => (
              <FadeIn key={v.title} delay={0.2 + i * 0.1} direction="left">
                <div className="flex items-start gap-4 p-5 bg-slate-50
                                border border-slate-100 rounded-2xl
                                hover:border-blue-200 hover:bg-blue-50/40
                                hover:translate-x-1 transition-all duration-300
                                cursor-default group">
                  <span className="text-2xl mt-0.5 flex-shrink-0
                                   group-hover:scale-110 transition-transform duration-200">
                    {v.icon}
                  </span>
                  <div>
                    <div className="text-sm font-bold text-slate-800 mb-1">
                      {v.title}
                    </div>
                    <div className="text-sm text-slate-500 leading-relaxed font-light">
                      {v.desc}
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}

            {/* Mini stats row */}
            <FadeIn delay={0.7} direction="left">
              <div className="grid grid-cols-3 gap-3 mt-2">
                {[
                  { num: "2+",  label: "Finished Projects" },
                  { num: "4",   label: "Tech Stacks"       },
                  { num: "6mo", label: "To Remote Job"     },
                ].map(s => (
                  <div key={s.label}
                    className="bg-blue-600 rounded-2xl p-4 text-center">
                    <div className="text-2xl font-bold text-white leading-none mb-1">
                      {s.num}
                    </div>
                    <div className="text-xs text-blue-100 font-medium leading-tight">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  )
}


