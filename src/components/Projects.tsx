import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Folders, Star, GitBranch, ArrowRight } from 'lucide-react'
import { GitHubIcon } from './SocialIcons'
import { projects } from '../data/portfolio'
import { cn } from '../lib/utils'

const filters = ['All', 'Featured']

// Remap original project accent colors → new violet/pink/rose palette
const accentRemap: Record<string, string> = {
  cyan:   'violet',
  blue:   'pink',
  purple: 'rose',
  green:  'emerald',
  orange: 'orange',
  pink:   'fuchsia',
}

const accentMap: Record<string, string> = {
  violet:  'hover:border-violet-500/40 hover:shadow-[0_0_50px_rgba(139,92,246,0.1),0_16px_60px_rgba(0,0,0,0.5)]',
  pink:    'hover:border-pink-500/40 hover:shadow-[0_0_50px_rgba(236,72,153,0.1),0_16px_60px_rgba(0,0,0,0.5)]',
  rose:    'hover:border-rose-500/40 hover:shadow-[0_0_50px_rgba(244,63,94,0.1),0_16px_60px_rgba(0,0,0,0.5)]',
  emerald: 'hover:border-emerald-500/40 hover:shadow-[0_0_50px_rgba(16,185,129,0.1),0_16px_60px_rgba(0,0,0,0.5)]',
  orange:  'hover:border-orange-500/40 hover:shadow-[0_0_50px_rgba(249,115,22,0.1),0_16px_60px_rgba(0,0,0,0.5)]',
  fuchsia: 'hover:border-fuchsia-500/40 hover:shadow-[0_0_50px_rgba(217,70,239,0.1),0_16px_60px_rgba(0,0,0,0.5)]',
}

const tagColorMap: Record<string, string> = {
  violet:  'text-violet-400 bg-violet-500/10 border-violet-500/20',
  pink:    'text-pink-400 bg-pink-500/10 border-pink-500/20',
  rose:    'text-rose-400 bg-rose-500/10 border-rose-500/20',
  emerald: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
  orange:  'text-orange-400 bg-orange-500/10 border-orange-500/20',
  fuchsia: 'text-fuchsia-400 bg-fuchsia-500/10 border-fuchsia-500/20',
}

const previewGradientMap: Record<string, string> = {
  violet:  'from-violet-500/20 via-pink-600/10 to-transparent',
  pink:    'from-pink-500/20 via-rose-600/10 to-transparent',
  rose:    'from-rose-500/20 via-fuchsia-600/10 to-transparent',
  emerald: 'from-emerald-500/20 via-teal-600/10 to-transparent',
  orange:  'from-orange-500/20 via-red-600/10 to-transparent',
  fuchsia: 'from-fuchsia-500/20 via-purple-600/10 to-transparent',
}

function ProjectPreview({ title, gradient, accentColor }: { title: string; gradient: string; accentColor: string }) {
  const accent = {
    violet: '#8b5cf6', pink: '#ec4899', rose: '#f43f5e',
    emerald: '#10b981', orange: '#f97316', fuchsia: '#d946ef',
  }[accentColor] ?? '#8b5cf6'

  return (
    <div className={cn('relative w-full h-full bg-gradient-to-br overflow-hidden', gradient)}>
      <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id={`grid-${accentColor}`} width="32" height="32" patternUnits="userSpaceOnUse">
            <path d="M 32 0 L 0 0 0 32" fill="none" stroke={accent} strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#grid-${accentColor})`} />
      </svg>
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full blur-2xl opacity-40"
        style={{ background: accent }}
      />
      <div className="absolute bottom-4 left-4 right-4 space-y-1.5 opacity-40">
        <div className="h-1.5 rounded-full w-3/4" style={{ background: accent, opacity: 0.6 }} />
        <div className="h-1.5 rounded-full w-1/2" style={{ background: accent, opacity: 0.4 }} />
        <div className="h-1.5 rounded-full w-5/6" style={{ background: accent, opacity: 0.3 }} />
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2">
        <div
          className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl font-black text-white"
          style={{ background: `${accent}22`, border: `1px solid ${accent}44` }}
        >
          {title.slice(0, 2).toUpperCase()}
        </div>
      </div>
    </div>
  )
}

interface Project {
  id: number
  title: string
  subtitle: string
  description: string
  tags: string[]
  githubUrl: string
  liveUrl: string
  featured: boolean
  gradient: string
  accentColor: string
  image?: string
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const color = accentRemap[project.accentColor] ?? project.accentColor

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.94 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: index * 0.07 }}
      whileHover={{ y: -8 }}
      className={cn(
        'group relative glass-card rounded-2xl overflow-hidden flex flex-col transition-all duration-300',
        accentMap[color]
      )}
    >
      {/* Image / Preview area */}
      <div className="relative h-44 overflow-hidden">
        <motion.div
          className="w-full h-full"
          whileHover={{ scale: 1.06 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          {project.image ? (
            <img
              src={project.image}
              alt={`${project.title} screenshot`}
              className="w-full h-full object-cover object-top"
            />
          ) : (
            <ProjectPreview
              title={project.title}
              gradient={cn('bg-gradient-to-br', previewGradientMap[color])}
              accentColor={color}
            />
          )}
        </motion.div>

        {/* Featured badge */}
        {project.featured && (
          <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-yellow-400/10 border border-yellow-400/25 backdrop-blur-sm">
            <Star size={9} className="text-yellow-400 fill-yellow-400" />
            <span className="text-[10px] font-semibold text-yellow-300">Featured</span>
          </div>
        )}

        {/* Quick actions */}
        <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-200 translate-y-1 group-hover:translate-y-0">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            onClick={(e) => e.stopPropagation()}
            className="w-8 h-8 rounded-lg bg-black/50 backdrop-blur-sm border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:border-white/30 transition-all"
          >
            <GitBranch size={13} />
          </a>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Live demo"
            onClick={(e) => e.stopPropagation()}
            className="w-8 h-8 rounded-lg bg-black/50 backdrop-blur-sm border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:border-white/30 transition-all"
          >
            <ExternalLink size={13} />
          </a>
        </div>
      </div>

      {/* Card body */}
      <div className="flex flex-col flex-1 p-5">
        <div className="flex items-start gap-2.5 mb-2">
          <div className={cn('w-7 h-7 rounded-lg flex items-center justify-center border shrink-0 mt-0.5', tagColorMap[color])}>
            <Folders size={13} />
          </div>
          <div>
            <h3 className="text-sm font-bold text-white group-hover:text-gradient transition-all duration-300 leading-snug">
              {project.title}
            </h3>
            <p className={cn('text-[10px] font-medium mt-0.5', tagColorMap[color].split(' ')[0])}>
              {project.subtitle}
            </p>
          </div>
        </div>

        <p className="text-slate-400 text-xs leading-relaxed mb-4 flex-1 line-clamp-3">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className={cn('px-2 py-0.5 rounded-md text-[10px] font-medium border', tagColorMap[color])}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action buttons */}
        <div className="flex gap-2 mt-auto pt-3 border-t border-white/[0.05]">
          <motion.a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className={cn(
              'flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-semibold text-white transition-all duration-200',
              color === 'violet'  && 'bg-violet-500/15 hover:bg-violet-500/25 border border-violet-500/20 hover:border-violet-500/40',
              color === 'pink'    && 'bg-pink-500/15 hover:bg-pink-500/25 border border-pink-500/20 hover:border-pink-500/40',
              color === 'rose'    && 'bg-rose-500/15 hover:bg-rose-500/25 border border-rose-500/20 hover:border-rose-500/40',
              color === 'emerald' && 'bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/20 hover:border-emerald-500/40',
              color === 'orange'  && 'bg-orange-500/15 hover:bg-orange-500/25 border border-orange-500/20 hover:border-orange-500/40',
              color === 'fuchsia' && 'bg-fuchsia-500/15 hover:bg-fuchsia-500/25 border border-fuchsia-500/20 hover:border-fuchsia-500/40',
            )}
          >
            <ExternalLink size={11} />
            Live Demo
          </motion.a>
          <motion.a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-semibold text-slate-300 hover:text-white border border-white/[0.08] hover:border-white/20 hover:bg-white/[0.04] transition-all duration-200"
          >
            <GitHubIcon size={11} />
            GitHub
          </motion.a>
        </div>
      </div>
    </motion.div>
  )
}

export function Projects() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filtered = projects.filter((p) => {
    if (activeFilter === 'Featured') return p.featured
    return true
  })

  return (
    <section id="projects" className="relative section-padding overflow-hidden">
      {/* Bg accents */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-rose-600/4 blur-[150px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-violet-600/4 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-rose-500/20 bg-rose-500/5 mb-4">
            <Folders size={13} className="text-rose-400" />
            <span className="text-xs font-medium text-rose-300 tracking-wide">My Work</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Projects I've{' '}
            <span className="text-gradient">Built</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-base leading-relaxed">
            Three real-world, full-stack projects — from AI-powered campus tools to edtech
            platforms and AI course generators.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex items-center justify-center gap-2 mb-10"
        >
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={cn(
                'px-5 py-2 rounded-xl text-sm font-medium transition-all duration-200',
                activeFilter === f
                  ? 'text-white bg-gradient-to-r from-violet-500/20 to-pink-600/20 border border-violet-500/30 shadow-[0_0_20px_rgba(139,92,246,0.1)]'
                  : 'text-slate-400 hover:text-white glass-card border'
              )}
            >
              {f}
            </button>
          ))}
        </motion.div>

        {/* Project grid */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-14"
        >
          <p className="text-slate-400 mb-5 text-sm">Want to see more of my work?</p>
          <motion.a
            href="https://github.com/Anup-Gupta01"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04, boxShadow: '0 0 30px rgba(139,92,246,0.2)' }}
            whileTap={{ scale: 0.96 }}
            className="inline-flex items-center gap-2.5 px-7 py-3 rounded-xl font-semibold text-white glass-card border border-white/10 hover:border-violet-500/30 transition-all duration-300"
          >
            <GitHubIcon size={16} />
            View All on GitHub
            <ArrowRight size={14} className="text-slate-400" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
