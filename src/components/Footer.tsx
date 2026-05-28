import { ArrowUp } from 'lucide-react'
import { personalInfo } from '../data/portfolio'

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/[0.06] py-6 px-6 lg:px-10">
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
        <p className="text-xs text-stone-700">
          © {year} {personalInfo.name}. Built with React, TypeScript &amp; Vite.
        </p>
        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          className="text-stone-700 hover:text-stone-500 transition-colors"
        >
          <ArrowUp size={14} />
        </button>
      </div>
    </footer>
  )
}
