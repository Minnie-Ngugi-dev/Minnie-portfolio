

import React, { useRef } from "react"
import { motion, useInView } from "framer-motion"
import useStore from "../store/useStore"

const skillGroups = [
  {
    icon: "🎨",
    name: "Frontend",
    color: "blue",
    skills: [
      { name: "React.js", proficiency: 90 },
      { name: "HTML5", proficiency: 95 },
      { name: "CSS3", proficiency: 90 },
      { name: "JavaScript", proficiency: 85 },
      { name: "Tailwind CSS", proficiency: 85 },
    ],
  },
  {
    icon: "⚙️",
    name: "Backend",
    color: "violet",
    skills: [
      { name: "Node.js", proficiency: 80 },
      { name: "Express.js", proficiency: 80 },
      { name: "PHP", proficiency: 75 },
      { name: "Laravel", proficiency: 70 },
      { name: "REST APIs", proficiency: 85 },
    ],
  },
  {
    icon: "🗄️",
    name: "Database",
    color: "emerald",
    skills: [
      { name: "MongoDB", proficiency: 80 },
      { name: "MySQL", proficiency: 75 },
      { name: "PostgreSQL", proficiency: 65 },
      { name: "SQL", proficiency: 80 },
    ],
  },
  {
    icon: "📱",
    name: "Mobile",
    color: "orange",
    skills: [
      { name: "React Native", proficiency: 75 },
      { name: "Expo", proficiency: 70 },
      { name: "iOS", proficiency: 60 },
      { name: "Android", proficiency: 60 },
    ],
  },
  {
    icon: "🛠️",
    name: "Tools & DevOps",
    color: "rose",
    skills: [
      { name: "Git", proficiency: 85 },
      { name: "GitHub", proficiency: 90 },
      { name: "Postman", proficiency: 80 },
      { name: "VS Code", proficiency: 95 },
      { name: "Figma", proficiency: 70 },
    ],
  },
  {
    icon: "🔐",
    name: "Auth & APIs",
    color: "sky",
    skills: [
      { name: "JWT", proficiency: 80 },
      { name: "OAuth", proficiency: 70 },
      { name: "Laravel Sanctum", proficiency: 65 },
      { name: "Laravel Auth", proficiency: 75 },
    ],
  },
]

const colorMap = {
  blue:    { bg: "bg-blue-50", border: "border-blue-200", bar: "bg-blue-500", text: "text-blue-700" },
  violet:  { bg: "bg-violet-50", border: "border-violet-200", bar: "bg-violet-500", text: "text-violet-700" },
  emerald: { bg: "bg-emerald-50", border: "border-emerald-200", bar: "bg-emerald-500", text: "text-emerald-700" },
  orange:  { bg: "bg-orange-50", border: "border-orange-200", bar: "bg-orange-500", text: "text-orange-700" },
  rose:    { bg: "bg-rose-50", border: "border-rose-200", bar: "bg-rose-500", text: "text-rose-700" },
  sky:     { bg: "bg-sky-50", border: "border-sky-200", bar: "bg-sky-500", text: "text-sky-700" },
}

const darkColorMap = {
  blue:    { bg: "bg-blue-500/10", border: "border-blue-800", bar: "bg-blue-400", text: "text-blue-400" },
  violet:  { bg: "bg-violet-500/10", border: "border-violet-800", bar: "bg-violet-400", text: "text-violet-400" },
  emerald: { bg: "bg-emerald-500/10", border: "border-emerald-800", bar: "bg-emerald-400", text: "text-emerald-400" },
  orange:  { bg: "bg-orange-500/10", border: "border-orange-800", bar: "bg-orange-400", text: "text-orange-400" },
  rose:    { bg: "bg-rose-500/10", border: "border-rose-800", bar: "bg-rose-400", text: "text-rose-400" },
  sky:     { bg: "bg-sky-500/10", border: "border-sky-800", bar: "bg-sky-400", text: "text-sky-400" },
}

function SkillBar({ skill, color, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-50px" })
  const { isDark } = useStore()
  const c = isDark ? darkColorMap[color] : colorMap[color]

  return (
    <div ref={ref} className="mb-3 last:mb-0">
      <div className="flex justify-between items-center mb-1">
        <span className={`text-sm font-medium ${isDark ? "text-slate-300" : "text-slate-700"}`}>
          {skill.name}
        </span>
        <span className={`text-xs font-mono font-semibold ${c.text}`}>
          {skill.proficiency}%
        </span>
      </div>
      <div className={`h-2 rounded-full ${isDark ? "bg-slate-700" : "bg-slate-200"} overflow-hidden`}>
        <motion.div
          className={`h-full rounded-full ${c.bar}`}
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.proficiency}%` } : {}}
          transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
        />
      </div>
    </div>
  )
}

function FadeIn({ children, delay = 0 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  )
}

export default function Skills() {
  const { isDark } = useStore()

  return (
    <section id="skills" className={`py-24 px-6 transition-colors duration-300 ${isDark ? "bg-slate-900" : "bg-slate-50"}`}>
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <FadeIn delay={0.1}>
          <div className="flex items-center gap-3 mb-4">
            <span className="w-7 h-0.5 bg-blue-600 rounded-full" />
            <span className="font-mono text-xs text-blue-600 uppercase tracking-widest font-semibold">
              Technical Skills
            </span>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <h2 className={`text-4xl md:text-5xl font-bold leading-tight tracking-tight mb-4 ${isDark ? "text-white" : "text-slate-900"}`}>
            The Tools I<br />
            <span className="text-blue-600 italic">Build With</span>
          </h2>
        </FadeIn>

        <FadeIn delay={0.3}>
          <p className={`text-base leading-relaxed font-light max-w-xl mb-14 ${isDark ? "text-slate-400" : "text-slate-500"}`}>
            A full-stack skillset covering every layer of modern web and mobile applications — from pixel-perfect UIs to production-ready backends.
          </p>
        </FadeIn>

        {/* Skills grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((group, i) => {
            const c = isDark ? darkColorMap[group.color] : colorMap[group.color]
            return (
              <FadeIn key={group.name} delay={0.1 + i * 0.08}>
                <div className={`rounded-2xl p-6 h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-lg
                  ${isDark ? `bg-slate-800/50 border ${c.border} hover:border-${group.color}-500/50` : `bg-white border ${c.border} hover:shadow-slate-100/80`}`}>

                  {/* Card header */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-xl ${c.bg}`}>
                      {group.icon}
                    </div>
                    <span className={`font-bold text-base ${isDark ? "text-white" : "text-slate-800"}`}>
                      {group.name}
                    </span>
                  </div>

                  {/* Skill bars */}
                  <div>
                    {group.skills.map((skill, idx) => (
                      <SkillBar key={skill.name} skill={skill} color={group.color} index={idx} />
                    ))}
                  </div>
                </div>
              </FadeIn>
            )
          })}
        </div>

        {/* Bottom banner (unchanged) */}
        <FadeIn delay={0.6}>
          <div className="mt-12 bg-blue-600 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-white font-bold text-xl mb-1">Always expanding the toolkit</h3>
              <p className="text-blue-100 text-sm font-light leading-relaxed">
                Currently deepening skills in Docker, CI/CD pipelines, and cloud deployment — because great developers never stop learning.
              </p>
            </div>
            <div className="flex gap-3 flex-shrink-0">
              {["Docker", "AWS", "CI/CD"].map(t => (
                <span key={t} className="px-4 py-2 bg-white/10 border border-white/20 text-white text-xs font-semibold font-mono rounded-lg backdrop-blur-sm">
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