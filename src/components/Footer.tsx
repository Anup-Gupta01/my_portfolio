import { motion } from 'framer-motion'
import { Heart, ArrowUp } from 'lucide-react'
import { personalInfo } from '../data/portfolio'
import { GitHubIcon, LinkedInIcon, MailIcon } from './SocialIcons'

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative border-t border-white/[0.06] bg-[#030712]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-1">
            <span className="text-base font-bold text-white">
              {personalInfo.name.split(' ')[0]}
              <span className="text-gradient-cyan">.</span>
            </span>
            <p className="text-xs text-slate-500">
              Built with React, TypeScript & Tailwind CSS
            </p>
          </div>

          {/* Center: copyright */}
          <p className="text-xs text-slate-500 flex items-center gap-1.5">
            © {year} {personalInfo.name}. Made with{' '}
            <Heart size={11} className="text-pink-500 fill-pink-500" /> in {personalInfo.location}
          </p>

          {/* Right: socials + back to top */}
          <div className="flex items-center gap-3">
            {[
              { Icon: GitHubIcon, href: 'https://github.com/', label: 'GitHub' },
              { Icon: LinkedInIcon, href: 'https://linkedin.com/', label: 'LinkedIn' },
              { Icon: MailIcon, href: `mailto:${personalInfo.email}`, label: 'Email' },
            ].map(({ Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-8 h-8 rounded-lg border border-white/[0.08] flex items-center justify-center text-slate-500 hover:text-cyan-400 hover:border-cyan-500/30 transition-all duration-200"
              >
                <Icon size={14} />
              </motion.a>
            ))}

            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Back to top"
              className="ml-1 w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-500/20 flex items-center justify-center text-cyan-400 transition-all duration-200"
            >
              <ArrowUp size={14} />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  )
}
