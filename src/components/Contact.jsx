import React from 'react'

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"

const contactDetails = [
  {
    icon: "✉️",
    label: "Email",
    value: "ngugiminnie@gmail.com",
    href: "mailto:ngugiminnie@gmail.com",
  },
  {
    icon: "📞",
    label: "Phone",
    value: "+254 116 283 564",
    href: "tel:+254116283564",
  },
  {
    icon: "⌥",
    label: "GitHub",
    value: "github.com/MINNIE-NGUGI-DEV",
    href: "https://github.com/MINNIE-NGUGI-DEV",
  },
  {
    icon: "📍",
    label: "Location",
    value: "Nairobi, Kenya · Remote Worldwide",
    href: null,
  },
]

function FadeIn({ children, delay = 0, direction = "up" }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })
  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        y: direction === "up" ? 28 : 0,
        x: direction === "left" ? -28 : direction === "right" ? 28 : 0,
      }}
      animate={inView ? { opacity: 1, y: 0, x: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  )
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
      setFormData({ name: "", email: "", subject: "", message: "" })
      setTimeout(() => setSubmitted(false), 4000)
    }, 1500)
  }

  return (
    <section id="contact" className="py-24 px-6 bg-slate-900">
      <div className="max-w-6xl mx-auto">

        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* ── LEFT ── */}
          <div>
            <FadeIn delay={0.1}>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-0.5 bg-blue-400 rounded-full" />
                <span className="font-mono text-xs text-blue-400 uppercase tracking-widest font-semibold">
                  Contact
                </span>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight text-white mb-4">
                Let's Work<br />
                <span className="text-blue-400 italic">Together</span>
              </h2>
            </FadeIn>

            <FadeIn delay={0.3}>
              <p className="text-slate-400 text-base leading-relaxed font-light mb-10">
                Open to remote full-time roles, part-time contracts, and
                freelance projects. If you have an opportunity or just want
                to say hi — my inbox is always open.
              </p>
            </FadeIn>

            {/* Contact detail cards */}
            <div className="flex flex-col gap-3">
              {contactDetails.map((item, i) => (
                <FadeIn key={item.label} delay={0.3 + i * 0.08}>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer"
                      className="flex items-center gap-4 p-4 bg-white/5
                                 border border-white/10 rounded-2xl
                                 hover:bg-blue-600/10 hover:border-blue-500/30
                                 hover:translate-x-1 transition-all duration-300
                                 group cursor-pointer"
                    >
                      <span className="text-xl w-10 h-10 flex items-center
                                       justify-center bg-white/5 rounded-xl
                                       group-hover:bg-blue-600/20 transition-colors duration-200">
                        {item.icon}
                      </span>
                      <div>
                        <div className="text-xs text-slate-500 uppercase
                                        tracking-widest font-mono font-semibold mb-0.5">
                          {item.label}
                        </div>
                        <div className="text-sm font-semibold text-white">
                          {item.value}
                        </div>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center gap-4 p-4 bg-white/5
                                    border border-white/10 rounded-2xl">
                      <span className="text-xl w-10 h-10 flex items-center
                                       justify-center bg-white/5 rounded-xl">
                        {item.icon}
                      </span>
                      <div>
                        <div className="text-xs text-slate-500 uppercase
                                        tracking-widest font-mono font-semibold mb-0.5">
                          {item.label}
                        </div>
                        <div className="text-sm font-semibold text-white">
                          {item.value}
                        </div>
                      </div>
                    </div>
                  )}
                </FadeIn>
              ))}
            </div>
          </div>

          {/* ── RIGHT — Form ── */}
          <FadeIn delay={0.3} direction="right">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <h3 className="text-white font-bold text-xl mb-6">
                Send a Message
              </h3>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center
                             py-16 text-center gap-4"
                >
                  <span className="text-5xl">🎉</span>
                  <h4 className="text-white font-bold text-lg">
                    Message Sent!
                  </h4>
                  <p className="text-slate-400 text-sm font-light">
                    Thank you for reaching out. I'll get back to you soon.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">

                  {/* Name + Email row */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-semibold text-slate-400
                                        uppercase tracking-widest font-mono">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                        className="bg-white/5 border border-white/10 rounded-xl
                                   px-4 py-3 text-white text-sm placeholder-slate-600
                                   outline-none focus:border-blue-500
                                   focus:bg-blue-600/5 transition-all duration-200
                                   font-light"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-semibold text-slate-400
                                        uppercase tracking-widest font-mono">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@company.com"
                        required
                        className="bg-white/5 border border-white/10 rounded-xl
                                   px-4 py-3 text-white text-sm placeholder-slate-600
                                   outline-none focus:border-blue-500
                                   focus:bg-blue-600/5 transition-all duration-200
                                   font-light"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-semibold text-slate-400
                                      uppercase tracking-widest font-mono">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Remote Developer Role / Project Collaboration"
                      required
                      className="bg-white/5 border border-white/10 rounded-xl
                                 px-4 py-3 text-white text-sm placeholder-slate-600
                                 outline-none focus:border-blue-500
                                 focus:bg-blue-600/5 transition-all duration-200
                                 font-light"
                    />
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-semibold text-slate-400
                                      uppercase tracking-widest font-mono">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project or opportunity..."
                      required
                      rows={5}
                      className="bg-white/5 border border-white/10 rounded-xl
                                 px-4 py-3 text-white text-sm placeholder-slate-600
                                 outline-none focus:border-blue-500
                                 focus:bg-blue-600/5 transition-all duration-200
                                 font-light resize-none"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2
                               bg-blue-600 text-white font-semibold text-sm
                               py-3.5 rounded-xl hover:bg-blue-700
                               disabled:opacity-70 disabled:cursor-not-allowed
                               transition-all duration-200 hover:-translate-y-0.5
                               shadow-lg shadow-blue-900/30 mt-2"
                  >
                    {loading ? (
                      <>
                        <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10"
                            stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor"
                            d="M4 12a8 8 0 018-8v8z" />
                        </svg>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <span>→</span>
                      </>
                    )}
                  </button>

                </form>
              )}
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  )
}