import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Folders, Star, GitBranch, ArrowRight } from 'lucide-react'
import { GitHubIcon } from './SocialIcons'
import { projects } from '../data/portfolio'
import { cn } from '../lib/utils'

const filters = ['All', 'Featured']

const accentMap: Record<string, string> = {
  cyan: 'hover:border-cyan-500/40 hover:shadow-[0_0_50px_rgba(6,182,212,0.1),0_16px_60px_rgba(0,0,0,0.5)]',
  blue: 'hover:border-blue-500/40 hover:shadow-[0_0_50px_rgba(59,130,246,0.1),0_16px_60px_rgba(0,0,0,0.5)]',
  purple: 'hover:border-purple-500/40 hover:shadow-[0_0_50px_rgba(168,85,247,0.1),0_16px_60px_rgba(0,0,0,0.5)]',
  green: 'hover:border-green-500/40 hover:shadow-[0_0_50px_rgba(34,197,94,0.1),0_16px_60px_rgba(0,0,0,0.5)]',
  orange: 'hover:border-orange-500/40 hover:shadow-[0_0_50px_rgba(249,115,22,0.1),0_16px_60px_rgba(0,0,0,0.5)]',
  pink: 'hover:border-pink-500/40 hover:shadow-[0_0_50px_rgba(236,72,153,0.1),0_16px_60px_rgba(0,0,0,0.5)]',
}

const tagColorMap: Record<string, string> = {
  cyan: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20',
  blue: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
  purple: 'text-purple-400 bg-purple-500/10 border-purple-500/20',
  green: 'text-green-400 bg-green-500/10 border-green-500/20',
  orange: 'text-orange-400 bg-orange-500/10 border-orange-500/20',
  pink: 'text-pink-400 bg-pink-500/10 border-pink-500/20',
}

const previewGradientMap: Record<string, string> = {
  cyan: 'from-cyan-500/20 via-blue-600/10 to-transparent',
  blue: 'from-blue-500/20 via-indigo-600/10 to-transparent',
  purple: 'from-purple-500/20 via-pink-600/10 to-transparent',
  green: 'from-green-500/20 via-cyan-600/10 to-transparent',
  orange: 'from-orange-500/20 via-red-600/10 to-transparent',
  pink: 'from-pink-500/20 via-purple-600/10 to-transparent',
}

// Abstract SVG pattern for project preview (no external images needed)
function ProjectPreview({ title, gradient, accentColor }: { title: string; gradient: string; accentColor: string }) {
  const accent = {
    cyan: '#06b6d4', blue: '#3b82f6', purple: '#a855f7',
    green: '#22c55e', orange: '#f97316', pink: '#ec4899',
  }[accentColor] ?? '#06b6d4'

  return (
    <div className={cn('relative w-full h-full bg-gradient-to-br overflow-hidden', gradient)}>
      {/* Grid lines */}
      <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id={`grid-${accentColor}`} width="32" height="32" patternUnits="userSpaceOnUse">
            <path d="M 32 0 L 0 0 0 32" fill="none" stroke={accent} strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#grid-${accentColor})`} />
      </svg>
      {/* Glow circle */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full blur-2xl opacity-40"
        style={{ background: accent }}
      />
      {/* Code-like lines decoration */}
      <div className="absolute bottom-4 left-4 right-4 space-y-1.5 opacity-40">
        <div className="h-1.5 rounded-full w-3/4" style={{ background: accent, opacity: 0.6 }} />
        <div className="h-1.5 rounded-full w-1/2" style={{ background: accent, opacity: 0.4 }} />
        <div className="h-1.5 rounded-full w-5/6" style={{ background: accent, opacity: 0.3 }} />
      </div>
      {/* Project initials */}
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
        accentMap[project.accentColor]
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
              gradient={cn('bg-gradient-to-br', previewGradientMap[project.accentColor])}
              accentColor={project.accentColor}
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

        {/* Quick action buttons (visible on hover) */}
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
        {/* Title + folder icon */}
        <div className="flex items-start gap-2.5 mb-2">
          <div className={cn('w-7 h-7 rounded-lg flex items-center justify-center border shrink-0 mt-0.5', tagColorMap[project.accentColor])}>
            <Folders size={13} />
          </div>
          <div>
            <h3 className="text-sm font-bold text-white group-hover:text-gradient-cyan transition-all duration-300 leading-snug">
              {project.title}
            </h3>
            <p className={cn('text-[10px] font-medium mt-0.5', tagColorMap[project.accentColor].split(' ')[0])}>
              {project.subtitle}
            </p>
          </div>
        </div>

        {/* Description */}
        <p className="text-slate-400 text-xs leading-relaxed mb-4 flex-1 line-clamp-3">
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className={cn('px-2 py-0.5 rounded-md text-[10px] font-medium border', tagColorMap[project.accentColor])}
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
              project.accentColor === 'cyan' && 'bg-cyan-500/15 hover:bg-cyan-500/25 border border-cyan-500/20 hover:border-cyan-500/40',
              project.accentColor === 'blue' && 'bg-blue-500/15 hover:bg-blue-500/25 border border-blue-500/20 hover:border-blue-500/40',
              project.accentColor === 'purple' && 'bg-purple-500/15 hover:bg-purple-500/25 border border-purple-500/20 hover:border-purple-500/40',
              project.accentColor === 'green' && 'bg-green-500/15 hover:bg-green-500/25 border border-green-500/20 hover:border-green-500/40',
              project.accentColor === 'orange' && 'bg-orange-500/15 hover:bg-orange-500/25 border border-orange-500/20 hover:border-orange-500/40',
              project.accentColor === 'pink' && 'bg-pink-500/15 hover:bg-pink-500/25 border border-pink-500/20 hover:border-pink-500/40',
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
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-purple-600/4 blur-[150px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-blue-600/4 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/20 bg-purple-500/5 mb-4">
            <Folders size={13} className="text-purple-400" />
            <span className="text-xs font-medium text-purple-300 tracking-wide">My Work</span>
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
                  ? 'text-white bg-gradient-to-r from-cyan-500/20 to-blue-600/20 border border-cyan-500/30 shadow-[0_0_20px_rgba(6,182,212,0.1)]'
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
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04, boxShadow: '0 0 30px rgba(6,182,212,0.2)' }}
            whileTap={{ scale: 0.96 }}
            className="inline-flex items-center gap-2.5 px-7 py-3 rounded-xl font-semibold text-white glass-card border border-white/10 hover:border-cyan-500/30 transition-all duration-300"
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
