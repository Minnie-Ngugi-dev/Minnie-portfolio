import React from 'react'
import { useEffect, useState } from "react"
import { Moon, Sun, Menu, X, Home, User, Zap, FolderGit2, Mail } from "lucide-react"
import { Link } from "react-scroll"
import { motion, AnimatePresence } from "framer-motion"
import useStore from "../store/useStore"

const links = [
  { label: "Home",     to: "home",     icon: Home,         },
  { label: "About",    to: "about",    icon: User,         },
  { label: "Skills",   to: "skills",   icon: Zap,          },
  { label: "Projects", to: "projects", icon: FolderGit2,  },
  { label: "Contact",  to: "contact",  icon: Mail,       },
]

export default function Navbar() {
  const { isDark, toggleDark, menuOpen, toggleMenu, setMenuOpen } = useStore()
  const [scrolled,  setScrolled]  = useState(false)
  const [scrollPct, setScrollPct] = useState(0)
  const [active,    setActive]    = useState("home")

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.body.scrollHeight - window.innerHeight
      const pct       = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
      setScrollPct(pct)
      setScrolled(scrollTop > 20)
    }
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500
        ${scrolled
          ? isDark
            ? "bg-slate-900/95 backdrop-blur-xl shadow-2xl shadow-black/30 border-b border-slate-800/80"
            : "bg-white/95 backdrop-blur-xl shadow-lg shadow-slate-200/60 border-b border-slate-100"
          : "bg-transparent"
        }`}>

        {/* ── Glowing scroll progress bar ── */}
        <div className="absolute top-0 left-0 right-0 h-0.5 z-50
                        bg-slate-200/30 overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-500
                       shadow-lg shadow-blue-500/50"
            style={{ width: `${scrollPct}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>

        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

          {/* ── Logo ── */}
          <Link to="home" smooth duration={600} className="cursor-pointer">
            <motion.div
              className="flex items-center gap-2.5 group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}>
              <div className="relative w-9 h-9">
                <div className="absolute inset-0 bg-blue-600 rounded-xl
                                group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600
                                rounded-xl flex items-center justify-center shadow-lg
                                shadow-blue-500/30">
                  <span className="text-white font-black text-sm">M</span>
                </div>
              </div>
              <div className="flex flex-col leading-none">
                <span className={`font-black text-base tracking-tight
                  ${isDark ? "text-white" : "text-slate-900"}`}>
                  Minnie<span className="text-blue-600">.</span>
                </span>
                <span className="text-blue-500 text-[9px] font-mono
                                 font-semibold tracking-widest uppercase">
                  Full-Stack Dev
                </span>
              </div>
            </motion.div>
          </Link>

          {/* ── Desktop nav links ── */}
          <ul className="hidden md:flex items-center gap-0.5">
            {links.map((l) => {
              const Icon      = l.icon
              const isActive  = active === l.to
              return (
                <li key={l.label}>
                  <Link
                    to={l.to}
                    spy
                    smooth
                    duration={600}
                    offset={-64}
                    onSetActive={() => setActive(l.to)}
                    className="cursor-pointer">
                    <motion.div
                      whileHover={{ y: -1 }}
                      whileTap={{ scale: 0.95 }}
                      className={`relative flex items-center gap-1.5 px-3.5 py-2
                                  rounded-xl text-sm font-medium transition-all duration-200
                                  ${isActive
                                    ? isDark
                                      ? "text-blue-400 bg-blue-500/10"
                                      : "text-blue-600 bg-blue-50"
                                    : isDark
                                      ? "text-slate-400 hover:text-white hover:bg-slate-800/80"
                                      : "text-slate-500 hover:text-slate-900 hover:bg-slate-50"
                                  }`}>

                      {/* Number */}
                      <span className={`font-mono text-[10px] font-bold
                        ${isActive ? "text-blue-500" : "text-slate-400"}`}>
                        {l.num}
                      </span>

                      {/* Icon */}
                      <Icon size={13}
                        className={isActive ? "text-blue-500" : "text-slate-400"} />

                      {/* Label */}
                      <span>{l.label}</span>

                      {/* Active underline */}
                      {isActive && (
                        <motion.span
                          layoutId="activeTab"
                          className="absolute bottom-1 left-3 right-3 h-0.5
                                     bg-gradient-to-r from-blue-500 to-indigo-500
                                     rounded-full"
                          transition={{ type: "spring", stiffness: 400, damping: 30 }}
                        />
                      )}
                    </motion.div>
                  </Link>
                </li>
              )
            })}
          </ul>

          {/* ── Right side ── */}
          <div className="hidden md:flex items-center gap-3">

            {/* Dark mode pill toggle */}
            <motion.button
              onClick={toggleDark}
              whileTap={{ scale: 0.92 }}
              className={`relative flex items-center w-16 h-8 rounded-full p-1
                          transition-all duration-300 border
                          ${isDark
                            ? "bg-slate-800 border-slate-700"
                            : "bg-slate-100 border-slate-200"
                          }`}>
              <motion.div
                animate={{ x: isDark ? 28 : 0 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                className={`w-6 h-6 rounded-full flex items-center justify-center
                            shadow-md transition-colors duration-300
                            ${isDark ? "bg-slate-900" : "bg-white"}`}>
                {isDark
                  ? <Sun  size={12} className="text-yellow-400" />
                  : <Moon size={12} className="text-slate-500"  />
                }
              </motion.div>
              <Sun  size={11} className={`absolute right-2 transition-opacity duration-300
                ${isDark ? "opacity-40 text-yellow-400" : "opacity-0"}`} />
              <Moon size={11} className={`absolute left-2 transition-opacity duration-300
                ${isDark ? "opacity-0" : "opacity-40 text-slate-400"}`} />
            </motion.button>

            {/* Hire Me button with pulse ring */}
            <Link to="contact" smooth duration={600} offset={-64}
              className="cursor-pointer">
              <motion.div
                whileHover={{ scale: 1.04, y: -1 }}
                whileTap={{ scale: 0.96 }}
                className="relative">
                {/* Pulse ring */}
                <span className="absolute inset-0 rounded-xl bg-blue-500
                                 animate-ping opacity-20" />
                <span className="relative bg-gradient-to-r from-blue-600 to-indigo-600
                                 text-white text-sm font-bold px-5 py-2.5 rounded-xl
                                 shadow-lg shadow-blue-500/30 flex items-center gap-2
                                 hover:shadow-blue-500/50 transition-shadow duration-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400
                                   animate-pulse" />
                  Hire Me
                </span>
              </motion.div>
            </Link>
          </div>

          {/* ── Mobile right side ── */}
          <div className="md:hidden flex items-center gap-2">
            <motion.button
              onClick={toggleDark}
              whileTap={{ scale: 0.9 }}
              className={`w-9 h-9 rounded-xl flex items-center justify-center
                          border transition-all duration-200
                          ${isDark
                            ? "bg-slate-800 border-slate-700 text-yellow-400"
                            : "bg-slate-100 border-slate-200 text-slate-600"
                          }`}>
              {isDark ? <Sun size={15} /> : <Moon size={15} />}
            </motion.button>

            <motion.button
              onClick={toggleMenu}
              whileTap={{ scale: 0.9 }}
              className={`w-9 h-9 rounded-xl flex items-center justify-center
                          border transition-all duration-200
                          ${isDark
                            ? "bg-slate-800 border-slate-700 text-white"
                            : "bg-slate-100 border-slate-200 text-slate-700"
                          }`}>
              <AnimatePresence mode="wait">
                {menuOpen
                  ? <motion.div key="x"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0,   opacity: 1 }}
                      exit={{    rotate:  90, opacity: 0 }}
                      transition={{ duration: 0.15 }}>
                      <X size={17} />
                    </motion.div>
                  : <motion.div key="menu"
                      initial={{ rotate:  90, opacity: 0 }}
                      animate={{ rotate:  0,  opacity: 1 }}
                      exit={{    rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.15 }}>
                      <Menu size={17} />
                    </motion.div>
                }
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* ── Mobile menu ── */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{    opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className={`md:hidden overflow-hidden border-t
                ${isDark
                  ? "bg-slate-900/98 border-slate-800"
                  : "bg-white/98 border-slate-100"
                }`}>
              <div className="px-4 py-3 flex flex-col gap-1">
                {links.map((l, i) => {
                  const Icon     = l.icon
                  const isActive = active === l.to
                  return (
                    <motion.div
                      key={l.label}
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}>
                      <Link
                        to={l.to}
                        spy smooth duration={600} offset={-64}
                        onClick={() => setMenuOpen(false)}
                        className={`flex items-center gap-3 py-3 px-4 rounded-xl
                                    text-sm font-medium cursor-pointer
                                    transition-all duration-200
                                    ${isActive
                                      ? isDark
                                        ? "text-blue-400 bg-blue-500/10 border border-blue-500/20"
                                        : "text-blue-600 bg-blue-50 border border-blue-100"
                                      : isDark
                                        ? "text-slate-300 hover:text-white hover:bg-slate-800"
                                        : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                                    }`}>
                        <span className="font-mono text-[10px] font-bold text-slate-400">
                          {l.num}
                        </span>
                        <Icon size={14}
                          className={isActive ? "text-blue-500" : "text-slate-400"} />
                        <span>{l.label}</span>
                        {isActive && (
                          <span className="ml-auto w-1.5 h-1.5 rounded-full
                                           bg-blue-500 animate-pulse" />
                        )}
                      </Link>
                    </motion.div>
                  )
                })}

                {/* Mobile Hire Me */}
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.28 }}
                  className="mt-2">
                  <Link
                    to="contact" smooth duration={600} offset={-64}
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center justify-center gap-2
                               bg-gradient-to-r from-blue-600 to-indigo-600
                               text-white text-sm font-bold px-5 py-3.5
                               rounded-xl shadow-lg shadow-blue-500/20
                               cursor-pointer">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    Hire Me
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  )
}