import { motion } from 'framer-motion'
import { Heart, ArrowUp, Sparkles } from 'lucide-react'
import { personalInfo, navItems } from '../data/portfolio'
import { GitHubIcon, LinkedInIcon, MailIcon, TwitterIcon } from './SocialIcons'

function scrollToSection(id: string) {
  const el = document.getElementById(id)
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' })
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const socials = [
  { Icon: GitHubIcon, href: 'https://github.com/', label: 'GitHub' },
  { Icon: LinkedInIcon, href: 'https://linkedin.com/', label: 'LinkedIn' },
  { Icon: TwitterIcon, href: 'https://twitter.com/', label: 'Twitter' },
  { Icon: MailIcon, href: `mailto:${personalInfo.email}`, label: 'Email' },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative border-t border-white/[0.05] bg-[#030712] overflow-hidden">
      {/* Subtle top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent blur-sm" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand column */}
          <div>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2.5 mb-4 group"
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-glow-cyan group-hover:shadow-[0_0_25px_rgba(6,182,212,0.5)] transition-shadow duration-300">
                <span className="text-sm font-bold text-white font-mono">{personalInfo.avatarInitials}</span>
              </div>
              <span className="text-base font-bold text-white/90 group-hover:text-white transition-colors">
                {personalInfo.name.split(' ')[0]}
                <span className="text-gradient-cyan">.</span>
              </span>
            </button>
            <p className="text-sm text-slate-500 leading-relaxed max-w-[220px]">
              Full-stack developer crafting high-quality web experiences with modern technologies.
            </p>
            <div className="flex items-center gap-1.5 mt-4">
              <Sparkles size={11} className="text-cyan-400" />
              <span className="text-xs text-slate-500">Open to new opportunities</span>
            </div>
          </div>

          {/* Nav links */}
          <div>
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">Navigation</p>
            <ul className="space-y-2.5">
              {navItems.map((item) => (
                <li key={item.href}>
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className="text-sm text-slate-500 hover:text-cyan-400 transition-colors duration-200"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social + CTA */}
          <div>
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">Connect</p>
            <div className="flex gap-2.5 mb-5">
              {socials.map(({ Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-9 h-9 rounded-xl border border-white/[0.08] flex items-center justify-center text-slate-500 hover:text-cyan-400 hover:border-cyan-500/30 hover:bg-cyan-500/[0.06] transition-all duration-200"
                >
                  <Icon size={15} />
                </motion.a>
              ))}
            </div>
            <motion.button
              whileHover={{ scale: 1.04, boxShadow: '0 0 30px rgba(6,182,212,0.4)' }}
              whileTap={{ scale: 0.96 }}
              onClick={() => scrollToSection('contact')}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 shadow-glow-cyan transition-all duration-200"
            >
              <MailIcon size={13} />
              Get in Touch
            </motion.button>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/[0.05] pt-7 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-600 flex items-center gap-1.5">
            © {year} {personalInfo.name}. Made with
            <Heart size={10} className="text-pink-500 fill-pink-500" />
            in {personalInfo.location}.
          </p>
          <p className="text-xs text-slate-600">
            Built with React · TypeScript · Tailwind · Framer Motion
          </p>
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Back to top"
            className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-slate-500 hover:text-cyan-400 hover:border-cyan-500/30 transition-all duration-200"
          >
            <ArrowUp size={13} />
          </motion.button>
        </div>
      </div>
    </footer>
  )
}
