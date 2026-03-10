import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-white/5 px-6 py-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row
                      items-center justify-between gap-4">
        <div className="font-bold text-lg text-white">
          Minnie<span className="text-blue-500">.</span>
        </div>
        <p className="text-slate-500 text-xs font-mono">
          © 2025 Minnie Wanjiru Ngugi · Nairobi, Kenya
        </p>
        <div className="flex gap-6">
          <a href="https://github.com/MINNIE-NGUGI-DEV"
            target="_blank" rel="noreferrer"
            className="text-slate-500 text-xs font-mono hover:text-blue-400
                       transition-colors duration-200">
            GitHub
          </a>
          <a href="mailto:ngugiminnie@gmail.com"
            className="text-slate-500 text-xs font-mono hover:text-blue-400
                       transition-colors duration-200">
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}
