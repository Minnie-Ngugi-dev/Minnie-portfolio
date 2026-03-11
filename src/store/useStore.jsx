import React from 'react'

import { create } from "zustand"
import { persist } from "zustand/middleware"

const useStore = create(
  persist(
    (set) => ({
      // ── Dark Mode ──────────────────────────
      isDark: false,
      toggleDark: () => set((state) => ({ isDark: !state.isDark })),

      // ── Active Nav Section ─────────────────
      activeSection: "home",
      setActiveSection: (section) => set({ activeSection: section }),

      // ── Mobile Menu ────────────────────────
      menuOpen: false,
      setMenuOpen: (val) => set({ menuOpen: val }),
      toggleMenu: () => set((state) => ({ menuOpen: !state.menuOpen })),
    }),
    {
      name: "sokofresh-portfolio-storage",
    }
  )
)

export default useStore
