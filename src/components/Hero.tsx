import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import {
  ArrowRight, Download, ChevronDown, Sparkles,
  MapPin, ExternalLink,
} from 'lucide-react'
import { personalInfo, socialLinks, heroAchievements } from '../data/portfolio'
import { socialIconMap } from './SocialIcons'
import dpPhoto from '../assets/dp_photo.jpeg'

const ease = [0.16, 1, 0.3, 1] as const

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease },
  },
}

function scrollToSection(id: string) {
  const el = document.getElementById(id)
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - 80
    window.scrollTo({ top, behavior: 'smooth' })
  }
}

function AvatarOrb() {
  const ref = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const rotateX = useSpring(useTransform(mouseY, [-100, 100], [8, -8]), { stiffness: 200, damping: 20 })
  const rotateY = useSpring(useTransform(mouseX, [-100, 100], [-8, 8]), { stiffness: 200, damping: 20 })

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    mouseX.set(e.clientX - rect.left - rect.width / 2)
    mouseY.set(e.clientY - rect.top - rect.height / 2)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      className="relative w-72 h-72 md:w-80 md:h-80 lg:w-[360px] lg:h-[360px]"
    >
      {/* Rotating ring 1 — violet */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 12, ease: 'linear' }}
        className="absolute inset-0 rounded-full border border-violet-500/20"
        style={{ transform: 'scale(1.15)' }}
      />
      {/* Rotating ring 2 — pink */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
        className="absolute inset-0 rounded-full border border-pink-500/15"
        style={{ transform: 'scale(1.3)' }}
      />
      {/* Outer glow ring */}
      <div
        className="absolute inset-0 rounded-full border border-violet-500/10"
        style={{ transform: 'scale(1.45)', boxShadow: '0 0 80px rgba(139,92,246,0.12)' }}
      />

      {/* Glow bg */}
      <div className="absolute inset-0 rounded-full bg-gradient-radial from-violet-500/10 via-pink-600/5 to-transparent" />

      {/* Avatar */}
      <div
        className="relative w-full h-full rounded-full overflow-hidden border-2 border-white/10"
        style={{ boxShadow: '0 0 60px rgba(139,92,246,0.25)' }}
      >
        <img
          src={dpPhoto}
          alt={personalInfo.name}
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 rounded-full shadow-[inset_0_0_40px_rgba(0,0,0,0.4)] pointer-events-none" />
      </div>

      {/* Floating available badge */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
        className="absolute -top-2 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-3 py-1.5 rounded-full glass border border-green-500/30"
        style={{ boxShadow: '0 0 16px rgba(34,197,94,0.15)' }}
      >
        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"
          style={{ boxShadow: '0 0 6px rgba(74,222,128,0.8)' }} />
        <span className="text-xs font-medium text-green-300 whitespace-nowrap">Available for opportunities</span>
      </motion.div>

      {/* Floating tech badge */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut', delay: 1 }}
        className="absolute -right-4 bottom-12 flex items-center gap-2 px-3 py-2 rounded-xl glass border border-violet-500/20"
      >
        <span className="text-lg">⚡</span>
        <div>
          <p className="text-xs font-semibold text-white">Full-Stack</p>
          <p className="text-[10px] text-slate-400">React · Node · Next</p>
        </div>
      </motion.div>

      {/* Floating location badge */}
      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut', delay: 0.5 }}
        className="absolute -left-4 bottom-16 flex items-center gap-1.5 px-3 py-1.5 rounded-xl glass border border-white/10"
      >
        <MapPin size={11} className="text-violet-400" />
        <span className="text-xs text-slate-300">{personalInfo.location}</span>
      </motion.div>
    </motion.div>
  )
}

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-hero-glow" />
      <div className="absolute inset-0 bg-cyan-glow" />

      {/* Animated blobs — violet tones */}
      <motion.div
        animate={{ x: [0, 30, 0], y: [0, -30, 0] }}
        transition={{ repeat: Infinity, duration: 18, ease: 'easeInOut' }}
        className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-violet-500/5 blur-[100px] pointer-events-none"
      />
      <motion.div
        animate={{ x: [0, -40, 0], y: [0, 30, 0] }}
        transition={{ repeat: Infinity, duration: 22, ease: 'easeInOut', delay: 3 }}
        className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-rose-500/5 blur-[120px] pointer-events-none"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-16">

          {/* Left: Text content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex-1 text-center lg:text-left max-w-2xl"
          >
            {/* Eyebrow badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 mb-6">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-violet-500/30 bg-violet-500/5">
                <Sparkles size={13} className="text-violet-400" />
                <span className="text-xs font-medium text-violet-300 tracking-wide">
                  Open to Full-Time &amp; Freelance
                </span>
              </div>
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] mb-4"
            >
              <span className="text-white">Hey, I'm</span>
              <br />
              <span className="shimmer-text">{personalInfo.name}</span>
            </motion.h1>

            {/* Role tagline */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mb-6"
            >
              {['Full Stack Developer', 'Problem Solver', 'DSA Enthusiast'].map((part, i) => (
                <span key={part} className="flex items-center gap-2">
                  <span
                    className={`text-sm md:text-base font-semibold font-mono ${
                      i === 0 ? 'text-violet-400' : i === 1 ? 'text-pink-400' : 'text-rose-400'
                    }`}
                  >
                    {part}
                  </span>
                  {i < 2 && <span className="text-slate-600 text-sm">|</span>}
                </span>
              ))}
            </motion.div>

            {/* Bio */}
            <motion.p
              variants={itemVariants}
              className="text-slate-400 text-sm md:text-base leading-relaxed mb-7 max-w-xl mx-auto lg:mx-0"
            >
              {personalInfo.bio}
            </motion.p>

            {/* Achievement badges */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-8 max-w-xl mx-auto lg:mx-0"
            >
              {heroAchievements.map((ach, i) => (
                <motion.div
                  key={ach.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.9 + i * 0.07 }}
                  whileHover={{ y: -2, scale: 1.02 }}
                  className="flex items-center gap-2 px-3 py-2 rounded-xl glass-card border border-white/[0.06] hover:border-violet-500/20 transition-all duration-200 cursor-default"
                >
                  <span className="text-sm shrink-0">{ach.icon}</span>
                  <span className="text-[11px] font-medium text-slate-300 leading-tight">{ach.label}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-10"
            >
              <motion.button
                whileHover={{ scale: 1.04, boxShadow: '0 0 40px rgba(139,92,246,0.5)' }}
                whileTap={{ scale: 0.96 }}
                onClick={() => scrollToSection('projects')}
                className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-violet-500 to-pink-600 transition-all duration-300"
                style={{ boxShadow: '0 0 30px rgba(139,92,246,0.3)' }}
              >
                View Projects
                <ArrowRight size={16} />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => scrollToSection('contact')}
                className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white glass-card hover:border-violet-500/30 transition-all duration-300"
              >
                Contact Me
                <ExternalLink size={15} />
              </motion.button>

              <motion.a
                href={personalInfo.resumeUrl}
                download
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-slate-300 hover:text-white border border-white/[0.08] hover:border-white/20 hover:bg-white/[0.04] transition-all duration-300"
              >
                <Download size={15} />
                Resume
              </motion.a>
            </motion.div>

            {/* Social links */}
            <motion.div
              variants={itemVariants}
              className="flex items-center justify-center lg:justify-start gap-3"
            >
              <span className="text-xs text-slate-500 font-mono mr-1">find me on</span>
              {socialLinks.map((link, i) => {
                const Icon = socialIconMap[link.icon]
                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    whileHover={{ scale: 1.2, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + i * 0.08 }}
                    className="w-10 h-10 rounded-xl glass-card flex items-center justify-center text-slate-400 hover:text-violet-400 hover:border-violet-500/30 transition-all duration-200"
                  >
                    {Icon && <Icon size={16} />}
                  </motion.a>
                )
              })}
            </motion.div>
          </motion.div>

          {/* Right: Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease, delay: 0.1 }}
            className="flex justify-center"
          >
            <AvatarOrb />
          </motion.div>
        </div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
          onClick={() => scrollToSection('about')}
        >
          <span className="text-xs text-slate-500 font-mono tracking-widest uppercase">scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.8 }}
          >
            <ChevronDown size={18} className="text-slate-500" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
