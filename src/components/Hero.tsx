import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { personalInfo, socialLinks } from '../data/portfolio'

function scrollToSection(id: string) {
  const el = document.getElementById(id)
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 64, behavior: 'smooth' })
}

export function Hero() {
  return (
    <section
      id="intro"
      className="relative min-h-screen flex flex-col justify-center pt-20 pb-20 px-6 lg:px-10"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Available indicator */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="label-mono flex items-center gap-2.5 mb-12"
        >
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          Open to full-time SDE roles &amp; freelance work
        </motion.p>

        {/* Main heading — big, serif, editorial */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.1 }}
          className="font-display font-bold leading-[1.02] tracking-tight text-stone-100 mb-10"
          style={{ fontSize: 'clamp(3rem, 8vw, 5.5rem)' }}
        >
          Building software<br />
          <em className="text-amber-400">people actually</em><br />
          want to use.
        </motion.h1>

        {/* Who / where */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.28 }}
          className="text-stone-400 text-lg mb-5 tracking-tight"
        >
          {personalInfo.name} —{' '}
          <span className="text-stone-500">
            CS student at MMMUT Gorakhpur, full-stack developer.
          </span>
        </motion.p>

        {/* Bio paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.38 }}
          className="text-stone-500 text-base leading-relaxed max-w-lg mb-14"
        >
          {personalInfo.bio}
        </motion.p>

        {/* CTAs — text links, not buttons */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-wrap items-center gap-10 mb-16"
        >
          <button
            onClick={() => scrollToSection('work')}
            className="flex items-center gap-2.5 text-sm text-stone-300 hover:text-white transition-colors group"
          >
            <ArrowDown
              size={13}
              className="text-amber-400 group-hover:translate-y-0.5 transition-transform duration-150"
            />
            View selected work
          </button>
          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-stone-600 hover:text-stone-400 underline underline-offset-4 decoration-stone-700 hover:decoration-stone-500 transition-colors"
          >
            Download résumé
          </a>
        </motion.div>

        {/* Social links — plain uppercase text, not icon tiles */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.65 }}
          className="flex flex-wrap gap-6"
        >
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              className="label-mono hover:text-stone-400 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </motion.div>
      </div>

      {/* Thin ruled bottom line — separates this section from the next */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-white/[0.05]" />
    </section>
  )
}
