import React from 'react'

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const projects = [
  {
    emoji: "🗓️",
    name: "MERN Booking System",
    desc: "A full-stack booking application where users can register, search availability, make reservations, and manage their bookings — with a complete admin dashboard for managing all appointments.",
    tags: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT Auth"],
    status: "completed",
    gradient: "from-blue-50 to-blue-100",
    github: "https://github.com/MINNIE-NGUGI-DEV",
    demo: "#",
  },
  {
    emoji: "🚗",
    name: "Vehicle Garage Management System",
    desc: "A complete garage management system built in Laravel — tracking vehicles, service history, customer records, mechanic assignments, invoices, and real-time job status updates.",
    tags: ["PHP Laravel", "MySQL", "Bootstrap", "REST API", "Blade"],
    status: "completed",
    gradient: "from-orange-50 to-orange-100",
    github: "https://github.com/MINNIE-NGUGI-DEV",
    demo: "#",
  },
  {
    emoji: "🛒",
    name: "Full-Stack E-Commerce Platform",
    desc: "Complete online store with product catalog, shopping cart, Stripe payments, and an admin dashboard for managing products, orders, and inventory in real time.",
    tags: ["MongoDB", "Express.js", "React.js", "Node.js", "Stripe"],
    status: "progress",
    gradient: "from-emerald-50 to-emerald-100",
    github: "https://github.com/MINNIE-NGUGI-DEV",
    demo: null,
  },
  {
    emoji: "🏫",
    name: "School Management System",
    desc: "Web system for managing student registration, staff, timetables, and academic reports — with role-based access for Admins, Teachers, and Students built in Laravel.",
    tags: ["PHP Laravel", "MySQL", "Bootstrap", "PDF Reports"],
    status: "progress",
    gradient: "from-violet-50 to-violet-100",
    github: "https://github.com/MINNIE-NGUGI-DEV",
    demo: null,
  },
  {
    emoji: "📱",
    name: "Delivery Tracking Mobile App",
    desc: "Cross-platform iOS/Android app for real-time package tracking with live GPS updates, push notifications, and rider/customer dashboards built in React Native.",
    tags: ["React Native", "Node.js", "Firebase", "Google Maps", "Expo"],
    status: "progress",
    gradient: "from-sky-50 to-sky-100",
    github: "https://github.com/MINNIE-NGUGI-DEV",
    demo: null,
  },
  {
    emoji: "🔌",
    name: "REST API with Full Documentation",
    desc: "Production-quality API with JWT authentication, rate limiting, full error handling, and complete Swagger/Postman documentation demonstrating professional API design.",
    tags: ["Node.js", "Express", "PostgreSQL", "JWT", "Swagger"],
    status: "progress",
    gradient: "from-rose-50 to-rose-100",
    github: "https://github.com/MINNIE-NGUGI-DEV",
    demo: null,
  },
]

function FadeIn({ children, delay = 0 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  )
}

function ProjectCard({ project, index }) {
  const isCompleted = project.status === "completed"
  return (
    <FadeIn delay={0.1 + index * 0.08}>
      <div
        className="bg-white border border-slate-100 rounded-2xl overflow-hidden
                   flex flex-col h-full transition-all duration-300
                   hover:-translate-y-1.5 hover:shadow-xl hover:shadow-slate-100
                   hover:border-slate-200 group"
      >
        {/* Thumb */}
        <div
          className={`h-44 bg-gradient-to-br ${project.gradient}
                      flex items-center justify-center relative overflow-hidden`}
        >
          <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-white/30 blur-xl" />
          <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full bg-white/40 blur-lg" />
          <span className="text-6xl relative z-10 group-hover:scale-110 transition-transform duration-300">
            {project.emoji}
          </span>
          <div
            className={`absolute top-3 right-3 px-3 py-1 rounded-full
                        text-xs font-bold font-mono tracking-wide
                        ${isCompleted
                          ? "bg-emerald-100 text-emerald-700"
                          : "bg-amber-100 text-amber-700"
                        }`}
          >
            {isCompleted ? "✓ Completed" : "⚡ In Progress"}
          </div>
        </div>

        {/* Body */}
        <div className="p-6 flex flex-col flex-1">
          <h3
            className="font-bold text-slate-900 text-lg leading-snug mb-3
                       group-hover:text-blue-600 transition-colors duration-200"
          >
            {project.name}
          </h3>

          <p className="text-slate-500 text-sm leading-relaxed font-light mb-5 flex-1">
            {project.desc}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 bg-slate-50 border border-slate-200
                           text-slate-600 text-xs font-semibold font-mono
                           rounded-lg hover:bg-blue-50 hover:border-blue-200
                           hover:text-blue-600 transition-all duration-200 cursor-default"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex gap-3 mt-auto">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="flex-1 flex items-center justify-center gap-2
                         bg-slate-900 text-white text-xs font-semibold
                         py-2.5 rounded-xl hover:bg-slate-700
                         transition-all duration-200 hover:-translate-y-0.5"
            >
              <span>⌥</span>
              <span>GitHub</span>
            </a>

            {project.demo ? (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="flex-1 flex items-center justify-center gap-2
                           bg-blue-50 border border-blue-200 text-blue-600
                           text-xs font-semibold py-2.5 rounded-xl
                           hover:bg-blue-600 hover:text-white hover:border-blue-600
                           transition-all duration-200 hover:-translate-y-0.5"
              >
                <span>↗</span>
                <span>Live Demo</span>
              </a>
            ) : (
              <div
                className="flex-1 flex items-center justify-center
                           bg-slate-50 border border-slate-100
                           text-slate-400 text-xs font-mono
                           py-2.5 rounded-xl cursor-default"
              >
                Coming soon...
              </div>
            )}
          </div>
        </div>
      </div>
    </FadeIn>
  )
}

export default function Projects() {
  const completed = projects.filter((p) => p.status === "completed")
  const inProgress = projects.filter((p) => p.status === "progress")

  return (
    <section id="projects" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <FadeIn delay={0.1}>
          <div className="flex items-center gap-3 mb-4">
            <span className="w-7 h-0.5 bg-blue-600 rounded-full" />
            <span className="font-mono text-xs text-blue-600 uppercase tracking-widest font-semibold">
              Projects
            </span>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight text-slate-900 mb-4">
            Things I've<br />
            <span className="text-blue-600 italic">Built</span>
          </h2>
        </FadeIn>

        <FadeIn delay={0.3}>
          <p className="text-slate-500 text-base leading-relaxed font-light max-w-xl mb-14">
            Real applications solving real problems. Two completed and
            deployed, four in active development — each one expanding
            the stack and sharpening the craft.
          </p>
        </FadeIn>

        {/* Completed */}
        <FadeIn delay={0.1}>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-sm font-bold text-emerald-600 uppercase tracking-widest font-mono">
              ✓ Completed Projects
            </span>
            <span className="flex-1 h-px bg-emerald-100" />
            <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full font-mono">
              {completed.length} projects
            </span>
          </div>
        </FadeIn>

        <div className="grid sm:grid-cols-2 gap-6 mb-14">
          {completed.map((p, i) => (
            <ProjectCard key={p.name} project={p} index={i} />
          ))}
        </div>

        {/* In Progress */}
        <FadeIn delay={0.1}>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-sm font-bold text-amber-600 uppercase tracking-widest font-mono">
              ⚡ In Progress
            </span>
            <span className="flex-1 h-px bg-amber-100" />
            <span className="text-xs font-semibold text-amber-600 bg-amber-50 border border-amber-200 px-3 py-1 rounded-full font-mono">
              {inProgress.length} projects
            </span>
          </div>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {inProgress.map((p, i) => (
            <ProjectCard key={p.name} project={p} index={i} />
          ))}
        </div>

        {/* GitHub CTA */}
        <FadeIn delay={0.4}>
          <div className="border border-slate-100 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 bg-slate-50">
            <div>
              <h3 className="font-bold text-slate-900 text-lg mb-1">
                See everything on GitHub
              </h3>
              <p className="text-slate-500 text-sm font-light">
                All source code, commit history, and READMEs are public.
              </p>
            </div>
            <a
              href="https://github.com/MINNIE-NGUGI-DEV"
              target="_blank"
              rel="noreferrer"
              className="flex-shrink-0 inline-flex items-center gap-2
                         bg-slate-900 text-white font-semibold text-sm
                         px-6 py-3 rounded-xl hover:bg-slate-700
                         transition-all duration-200 hover:-translate-y-0.5
                         shadow-md shadow-slate-200"
            >
              ⌥ View GitHub Profile →
            </a>
          </div>
        </FadeIn>

      </div>
    </section>
  )
}