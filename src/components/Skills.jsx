import React from 'react'

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const skillGroups = [
  {
    icon: "🎨",
    name: "Frontend",
    color: "blue",
    skills: ["React.js", "HTML5", "CSS3", "JavaScript", "Tailwind CSS"]
  },
  {
    icon: "⚙️",
    name: "Backend",
    color: "violet",
    skills: ["Node.js", "Express.js", "PHP", "Laravel", "REST APIs"]
  },
  {
    icon: "🗄️",
    name: "Database",
    color: "emerald",
    skills: ["MongoDB", "MySQL", "PostgreSQL", "SQL"]
  },
  {
    icon: "📱",
    name: "Mobile",
    color: "orange",
    skills: ["React Native", "Expo", "iOS", "Android"]
  },
  {
    icon: "🛠️",
    name: "Tools & DevOps",
    color: "rose",
    skills: ["Git", "GitHub", "Postman", "VS Code", "Figma"]
  },
  {
    icon: "🔐",
    name: "Auth & APIs",
    color: "sky",
    skills: ["JWT", "OAuth", "Laravel Sanctum", "Laravel Auth"]
  },
]

const colorMap = {
  blue:    { card: "hover:border-blue-200",    tag: "bg-blue-50 text-blue-700 border-blue-200",    icon: "bg-blue-100"    },
  violet:  { card: "hover:border-violet-200",  tag: "bg-violet-50 text-violet-700 border-violet-200",  icon: "bg-violet-100"  },
  emerald: { card: "hover:border-emerald-200", tag: "bg-emerald-50 text-emerald-700 border-emerald-200", icon: "bg-emerald-100" },
  orange:  { card: "hover:border-orange-200",  tag: "bg-orange-50 text-orange-700 border-orange-200",  icon: "bg-orange-100"  },
  rose:    { card: "hover:border-rose-200",    tag: "bg-rose-50 text-rose-700 border-rose-200",    icon: "bg-rose-100"    },
  sky:     { card: "hover:border-sky-200",     tag: "bg-sky-50 text-sky-700 border-sky-200",     icon: "bg-sky-100"     },
}

function FadeIn({ children, delay = 0 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: "easeOut", delay }}>
      {children}
    </motion.div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <FadeIn delay={0.1}>
          <div className="flex items-center gap-3 mb-4">
            <span className="w-7 h-0.5 bg-blue-600 rounded-full" />
            <span className="font-mono text-xs text-blue-600 uppercase
                             tracking-widest font-semibold">
              Technical Skills
            </span>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight
                         tracking-tight text-slate-900 mb-4">
            The Tools I<br />
            <span className="text-blue-600 italic">Build With</span>
          </h2>
        </FadeIn>

        <FadeIn delay={0.3}>
          <p className="text-slate-500 text-base leading-relaxed font-light
                        max-w-xl mb-14">
            A full-stack skillset covering every layer of modern web
            and mobile applications — from pixel-perfect UIs to
            production-ready backends.
          </p>
        </FadeIn>

        {/* Skills grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((group, i) => {
            const c = colorMap[group.color]
            return (
              <FadeIn key={group.name} delay={0.1 + i * 0.08}>
                <div className={`bg-white border border-slate-100 rounded-2xl
                                p-6 h-full transition-all duration-300
                                hover:-translate-y-1 hover:shadow-lg
                                hover:shadow-slate-100/80 ${c.card}`}>

                  {/* Card header */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className={`w-10 h-10 rounded-xl flex items-center
                                    justify-center text-xl ${c.icon}`}>
                      {group.icon}
                    </div>
                    <span className="font-bold text-slate-800 text-base">
                      {group.name}
                    </span>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map(skill => (
                      <span
                        key={skill}
                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold
                                   font-mono border transition-all duration-200
                                   hover:scale-105 cursor-default ${c.tag}`}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            )
          })}
        </div>

        {/* Bottom banner */}
        <FadeIn delay={0.6}>
          <div className="mt-12 bg-blue-600 rounded-2xl p-8
                          flex flex-col md:flex-row items-center
                          justify-between gap-6">
            <div>
              <h3 className="text-white font-bold text-xl mb-1">
                Always expanding the toolkit
              </h3>
              <p className="text-blue-100 text-sm font-light leading-relaxed">
                Currently deepening skills in Docker, CI/CD pipelines,
                and cloud deployment — because great developers never stop learning.
              </p>
            </div>
            <div className="flex gap-3 flex-shrink-0">
              {["Docker", "AWS", "CI/CD"].map(t => (
                <span key={t}
                  className="px-4 py-2 bg-white/10 border border-white/20
                             text-white text-xs font-semibold font-mono
                             rounded-lg backdrop-blur-sm">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  )
}


