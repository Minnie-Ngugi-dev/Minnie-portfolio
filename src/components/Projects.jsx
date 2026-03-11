import React, { useRef, useState, useMemo } from "react"
import { motion, useInView } from "framer-motion"
import useStore from "../store/useStore"

const projects = [
  {
    emoji: "🗓️",
    name: "MERN Booking System",
    desc: "A full-stack booking application where users can register, search availability, make reservations, and manage their bookings — with a complete admin dashboard for managing all appointments.",
    tags: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT Auth"],
    status: "completed",
    gradient: "from-blue-500 to-indigo-600",
    github: "https://github.com/MINNIE-NGUGI-DEV",
    demo: "#",
  },
  {
    emoji: "🚗",
    name: "Vehicle Garage Management System",
    desc: "A complete garage management system built in Laravel — tracking vehicles, service history, customer records, mechanic assignments, invoices, and real-time job status updates.",
    tags: ["PHP Laravel", "MySQL", "Bootstrap", "REST API", "Blade"],
    status: "completed",
    gradient: "from-orange-500 to-red-500",
    github: "https://github.com/MINNIE-NGUGI-DEV",
    demo: "#",
  },
  {
    emoji: "🛒",
    name: "Full-Stack E-Commerce Platform",
    desc: "Complete online store with product catalog, shopping cart, Stripe payments, and an admin dashboard for managing products, orders, and inventory in real time.",
    tags: ["MongoDB", "Express.js", "React.js", "Node.js", "Stripe"],
    status: "progress",
    gradient: "from-emerald-500 to-teal-500",
    github: "https://github.com/MINNIE-NGUGI-DEV",
    demo: null,
  },
  {
    emoji: "🏫",
    name: "School Management System",
    desc: "Web system for managing student registration, staff, timetables, and academic reports — with role-based access for Admins, Teachers, and Students built in Laravel.",
    tags: ["PHP Laravel", "MySQL", "Bootstrap", "PDF Reports"],
    status: "progress",
    gradient: "from-violet-500 to-purple-500",
    github: "https://github.com/MINNIE-NGUGI-DEV",
    demo: null,
  },
  {
    emoji: "📱",
    name: "Delivery Tracking Mobile App",
    desc: "Cross-platform iOS/Android app for real-time package tracking with live GPS updates, push notifications, and rider/customer dashboards built in React Native.",
    tags: ["React Native", "Node.js", "Firebase", "Google Maps", "Expo"],
    status: "progress",
    gradient: "from-sky-500 to-blue-500",
    github: "https://github.com/MINNIE-NGUGI-DEV",
    demo: null,
  },
  {
    emoji: "🔌",
    name: "REST API with Full Documentation",
    desc: "Production-quality API with JWT authentication, rate limiting, full error handling, and complete Swagger/Postman documentation demonstrating professional API design.",
    tags: ["Node.js", "Express", "PostgreSQL", "JWT", "Swagger"],
    status: "progress",
    gradient: "from-rose-500 to-pink-500",
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
  const { isDark } = useStore()
  const isCompleted = project.status === "completed"
  return (
    <FadeIn delay={0.1 + index * 0.08}>
      <div
        className={`rounded-2xl overflow-hidden flex flex-col h-full transition-all duration-300
          hover:-translate-y-1.5 hover:shadow-xl group
          ${isDark ? "bg-slate-800 border border-slate-700" : "bg-white border border-slate-100"}`}
      >
        {/* Thumb */}
        <div
          className={`h-44 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}
        >
          <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-white/30 blur-xl" />
          <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full bg-white/40 blur-lg" />
          <span className="text-6xl relative z-10 group-hover:scale-110 transition-transform duration-300">
            {project.emoji}
          </span>
          <div
            className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-bold font-mono tracking-wide
              ${isCompleted
                ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-400"
                : "bg-amber-100 text-amber-700 dark:bg-amber-900/50 dark:text-amber-400"
              }`}
          >
            {isCompleted ? "✓ Completed" : "⚡ In Progress"}
          </div>
        </div>

        {/* Body */}
        <div className="p-6 flex flex-col flex-1">
          <h3
            className={`font-bold text-lg leading-snug mb-3 group-hover:text-blue-600 transition-colors duration-200
              ${isDark ? "text-white" : "text-slate-900"}`}
          >
            {project.name}
          </h3>

          <p className={`text-sm leading-relaxed font-light mb-5 flex-1 ${isDark ? "text-slate-400" : "text-slate-500"}`}>
            {project.desc}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className={`px-2.5 py-1 text-xs font-semibold font-mono rounded-lg transition-all duration-200 cursor-default
                  ${isDark
                    ? "bg-slate-700 text-slate-300 border border-slate-600 hover:bg-blue-900/30 hover:border-blue-500 hover:text-blue-400"
                    : "bg-slate-50 text-slate-600 border border-slate-200 hover:bg-blue-50 hover:border-blue-200 hover:text-blue-600"
                  }`}
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
              className="flex-1 flex items-center justify-center gap-2 bg-slate-900 text-white text-xs font-semibold py-2.5 rounded-xl hover:bg-slate-700 transition-all duration-200 hover:-translate-y-0.5"
            >
              <span>⌥</span>
              <span>GitHub</span>
            </a>

            {project.demo ? (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-blue-50 border border-blue-200 text-blue-600 text-xs font-semibold py-2.5 rounded-xl hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-200 hover:-translate-y-0.5"
              >
                <span>↗</span>
                <span>Live Demo</span>
              </a>
            ) : (
              <div className="flex-1 flex items-center justify-center bg-slate-50 border border-slate-100 text-slate-400 text-xs font-mono py-2.5 rounded-xl cursor-default">
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
  const { isDark } = useStore()
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedTags, setSelectedTags] = useState([])

  // Get all unique tags
  const allTags = useMemo(() => {
    const tags = new Set()
    projects.forEach(p => p.tags.forEach(t => tags.add(t)))
    return Array.from(tags).sort()
  }, [])

  // Filter projects
  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      // Search filter
      const matchesSearch = searchQuery === "" ||
        project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.desc.toLowerCase().includes(searchQuery.toLowerCase())

      // Tag filter
      const matchesTags = selectedTags.length === 0 ||
        selectedTags.every(tag => project.tags.includes(tag))

      return matchesSearch && matchesTags
    })
  }, [searchQuery, selectedTags])

  const toggleTag = (tag) => {
    setSelectedTags(prev =>
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    )
  }

  const clearFilters = () => {
    setSearchQuery("")
    setSelectedTags([])
  }

  return (
    <section id="projects" className={`py-24 px-6 transition-colors duration-300 ${isDark ? "bg-slate-900" : "bg-white"}`}>
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
          <h2 className={`text-4xl md:text-5xl font-bold leading-tight tracking-tight mb-4 ${isDark ? "text-white" : "text-slate-900"}`}>
            Things I've<br />
            <span className="text-blue-600 italic">Built</span>
          </h2>
        </FadeIn>

        <FadeIn delay={0.3}>
          <p className={`text-base leading-relaxed font-light max-w-xl mb-8 ${isDark ? "text-slate-400" : "text-slate-500"}`}>
            Real applications solving real problems. Two completed and deployed, four in active development — each one expanding the stack and sharpening the craft.
          </p>
        </FadeIn>

        {/* Search and Filter Bar */}
        <FadeIn delay={0.4}>
          <div className="flex flex-col md:flex-row gap-4 mb-10">
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`flex-1 px-5 py-3 rounded-xl text-sm outline-none transition-all duration-200
                ${isDark
                  ? "bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:border-blue-500"
                  : "bg-white border border-slate-200 text-slate-900 placeholder-slate-400 focus:border-blue-500"
                }`}
            />
            <div className="flex flex-wrap gap-2 items-center">
              {allTags.slice(0, 8).map(tag => (
                <button
                  key={tag}
                  onClick={() => toggleTag(tag)}
                  className={`px-4 py-2 rounded-lg text-xs font-semibold font-mono transition-all duration-200
                    ${selectedTags.includes(tag)
                      ? "bg-blue-600 text-white border-blue-600"
                      : isDark
                        ? "bg-slate-800 text-slate-300 border border-slate-700 hover:border-blue-500"
                        : "bg-slate-50 text-slate-600 border border-slate-200 hover:border-blue-500"
                    }`}
                >
                  {tag}
                </button>
              ))}
              {(searchQuery || selectedTags.length > 0) && (
                <button
                  onClick={clearFilters}
                  className="text-xs text-blue-600 hover:text-blue-800 underline underline-offset-2"
                >
                  Clear filters
                </button>
              )}
            </div>
          </div>
        </FadeIn>

        {/* Filtered results count */}
        <FadeIn delay={0.45}>
          <div className="mb-6 text-sm">
            <span className={isDark ? "text-slate-400" : "text-slate-500"}>
              Showing {filteredProjects.length} of {projects.length} projects
            </span>
          </div>
        </FadeIn>

        {/* Completed Projects */}
        {filteredProjects.filter(p => p.status === "completed").length > 0 && (
          <>
            <FadeIn delay={0.1}>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-sm font-bold text-emerald-600 uppercase tracking-widest font-mono">
                  ✓ Completed Projects
                </span>
                <span className="flex-1 h-px bg-emerald-100 dark:bg-emerald-900" />
                <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full font-mono dark:bg-emerald-900/30 dark:text-emerald-400 dark:border-emerald-800">
                  {filteredProjects.filter(p => p.status === "completed").length} projects
                </span>
              </div>
            </FadeIn>

            <div className="grid sm:grid-cols-2 gap-6 mb-14">
              {filteredProjects.filter(p => p.status === "completed").map((p, i) => (
                <ProjectCard key={p.name} project={p} index={i} />
              ))}
            </div>
          </>
        )}

        {/* In Progress Projects */}
        {filteredProjects.filter(p => p.status === "progress").length > 0 && (
          <>
            <FadeIn delay={0.1}>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-sm font-bold text-amber-600 uppercase tracking-widest font-mono">
                  ⚡ In Progress
                </span>
                <span className="flex-1 h-px bg-amber-100 dark:bg-amber-900" />
                <span className="text-xs font-semibold text-amber-600 bg-amber-50 border border-amber-200 px-3 py-1 rounded-full font-mono dark:bg-amber-900/30 dark:text-amber-400 dark:border-amber-800">
                  {filteredProjects.filter(p => p.status === "progress").length} projects
                </span>
              </div>
            </FadeIn>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
              {filteredProjects.filter(p => p.status === "progress").map((p, i) => (
                <ProjectCard key={p.name} project={p} index={i} />
              ))}
            </div>
          </>
        )}

        {/* If no projects match */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <span className="text-5xl mb-4 block">🔍</span>
            <h3 className={`text-xl font-bold mb-2 ${isDark ? "text-white" : "text-slate-900"}`}>
              No projects found
            </h3>
            <p className={`text-sm ${isDark ? "text-slate-400" : "text-slate-500"}`}>
              Try adjusting your search or filters.
            </p>
          </div>
        )}

        {/* GitHub CTA (unchanged) */}
        <FadeIn delay={0.4}>
          <div className={`border rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6
            ${isDark ? "bg-slate-800/50 border-slate-700" : "bg-slate-50 border-slate-100"}`}>
            <div>
              <h3 className={`font-bold text-lg mb-1 ${isDark ? "text-white" : "text-slate-900"}`}>
                See everything on GitHub
              </h3>
              <p className={`text-sm font-light ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                All source code, commit history, and READMEs are public.
              </p>
            </div>
            <a
              href="https://github.com/MINNIE-NGUGI-DEV"
              target="_blank"
              rel="noreferrer"
              className="flex-shrink-0 inline-flex items-center gap-2 bg-slate-900 text-white font-semibold text-sm px-6 py-3 rounded-xl hover:bg-slate-700 transition-all duration-200 hover:-translate-y-0.5 shadow-md shadow-slate-200 dark:shadow-none"
            >
              ⌥ View GitHub Profile →
            </a>
          </div>
        </FadeIn>

      </div>
    </section>
  )
}