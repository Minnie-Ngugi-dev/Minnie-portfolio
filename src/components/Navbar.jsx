import React from "react"
import { useState, useEffect } from "react"

const links = [
  { label: "About",    href: "#about"    },
  { label: "Skills",   href: "#skills"   },
  { label: "Projects", href: "#projects" },
]

export default function Navbar() {
  const [scrolled,     setScrolled]     = useState(false)
  const [menuOpen,     setMenuOpen]     = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
      ${scrolled
        ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-100"
        : "bg-transparent"}`}>

      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <a href="#" className="font-bold text-xl text-slate-900 tracking-tight">
          Minnie<span className="text-blue-600">.</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <li key={l.label}>
              <a href={l.href}
                className="text-sm font-medium text-slate-600 hover:text-blue-600
                           transition-colors duration-200 relative group">
                {l.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-blue-600
                                 rounded-full transition-all duration-300
                                 group-hover:w-full" />
              </a>
            </li>
          ))}
          <li>
            <a href="#contact"
              className="bg-blue-600 text-white text-sm font-semibold
                         px-5 py-2.5 rounded-lg hover:bg-blue-700
                         transition-all duration-200 hover:-translate-y-0.5
                         shadow-md shadow-blue-200">
              Hire Me
            </a>
          </li>
        </ul>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu">
          <span className={`block w-5 h-0.5 bg-slate-900 rounded transition-all duration-300
            ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-5 h-0.5 bg-slate-900 rounded transition-all duration-300
            ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-0.5 bg-slate-900 rounded transition-all duration-300
            ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300
        ${menuOpen ? "max-h-64 border-b border-slate-100" : "max-h-0"}`}>
        <div className="bg-white px-6 py-4 flex flex-col gap-1">
          {links.map(l => (
            <a key={l.label} href={l.href}
              onClick={() => setMenuOpen(false)}
              className="py-3 text-sm font-medium text-slate-600
                         hover:text-blue-600 border-b border-slate-50
                         transition-colors duration-200">
              {l.label}
            </a>
          ))}
          <a href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-3 bg-blue-600 text-white text-sm font-semibold
                       text-center px-5 py-3 rounded-lg hover:bg-blue-700
                       transition-colors duration-200">
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  )
}