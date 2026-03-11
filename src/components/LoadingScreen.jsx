import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import useStore from "../store/useStore"

export default function LoadingScreen() {
  const { isDark } = useStore()
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 1
      })
    }, 20) // 2 seconds total

    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center
        ${isDark ? "bg-slate-900" : "bg-white"}`}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-center"
      >
        <div className="relative w-24 h-24 mb-6 mx-auto">
          <div className="absolute inset-0 bg-blue-600 rounded-2xl animate-pulse" />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/30">
            <span className="text-white font-black text-2xl">M</span>
          </div>
        </div>
        <h1 className={`text-2xl font-black mb-2 ${isDark ? "text-white" : "text-slate-900"}`}>
          Minnie Ngugi
        </h1>
        <p className={`text-sm font-mono mb-6 ${isDark ? "text-slate-400" : "text-slate-500"}`}>
          Full-Stack Developer
        </p>
        <div className="w-48 h-1.5 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-blue-500 to-indigo-500"
            style={{ width: `${progress}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>
        <p className="text-xs text-slate-400 mt-3 font-mono">
          {progress}% loaded
        </p>
      </motion.div>
    </motion.div>
  )
}