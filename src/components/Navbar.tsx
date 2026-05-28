import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { personalInfo, navItems } from '../data/portfolio'
import { useActiveSection } from '../hooks/useActiveSection'
import { cn } from '../lib/utils'

const sectionIds = navItems.map((n) => n.href)

function scrollToSection(id: string) {
  const el = document.getElementById(id)
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - 64
    window.scrollTo({ top, behavior: 'smooth' })
  }
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const activeSection = useActiveSection(sectionIds)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled
            ? 'bg-[#0c0c0d]/90 backdrop-blur-sm border-b border-white/[0.06]'
            : 'bg-transparent'
        )}
      >
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between h-16">
            {/* Name logo — left-aligned, plain text */}
            <button
              onClick={() => scrollToSection('intro')}
              className="text-sm font-semibold text-stone-300 hover:text-white transition-colors tracking-tight"
            >
              {personalInfo.name}
              <span className="text-amber-400">.</span>
            </button>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-8" aria-label="Site navigation">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className={cn(
                    'text-sm transition-colors duration-150',
                    activeSection === item.href
                      ? 'text-stone-100'
                      : 'text-stone-500 hover:text-stone-300'
                  )}
                >
                  {item.label}
                </button>
              ))}
              {/* Direct email CTA — amber, no button styling */}
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-sm text-amber-400 hover:text-amber-300 transition-colors"
              >
                say hello →
              </a>
            </nav>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen((p) => !p)}
              className="md:hidden p-1.5 text-stone-500 hover:text-stone-200 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.18 }}
            className="fixed top-16 left-0 right-0 z-40 bg-[#0c0c0d] border-b border-white/[0.06] md:hidden"
          >
            <nav className="flex flex-col px-6 py-5 gap-5">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => {
                    scrollToSection(item.href)
                    setMobileOpen(false)
                  }}
                  className={cn(
                    'text-left text-sm transition-colors',
                    activeSection === item.href ? 'text-stone-100' : 'text-stone-500'
                  )}
                >
                  {item.label}
                </button>
              ))}
              <a
                href={`mailto:${personalInfo.email}`}
                onClick={() => setMobileOpen(false)}
                className="text-sm text-amber-400"
              >
                say hello →
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
