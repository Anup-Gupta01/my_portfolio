import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { GitBranch, ExternalLink, Folders, Star } from 'lucide-react'
import { GitHubIcon } from './SocialIcons'
import { projects } from '../data/portfolio'
import { cn } from '../lib/utils'

const filters = ['All', 'Featured', 'Web', 'Tools']

const accentMap: Record<string, string> = {
  cyan: 'hover:border-cyan-500/40 hover:shadow-[0_0_40px_rgba(6,182,212,0.12)]',
  blue: 'hover:border-blue-500/40 hover:shadow-[0_0_40px_rgba(59,130,246,0.12)]',
  purple: 'hover:border-purple-500/40 hover:shadow-[0_0_40px_rgba(168,85,247,0.12)]',
  green: 'hover:border-green-500/40 hover:shadow-[0_0_40px_rgba(34,197,94,0.12)]',
  orange: 'hover:border-orange-500/40 hover:shadow-[0_0_40px_rgba(249,115,22,0.12)]',
  pink: 'hover:border-pink-500/40 hover:shadow-[0_0_40px_rgba(236,72,153,0.12)]',
}

const tagColorMap: Record<string, string> = {
  cyan: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20',
  blue: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
  purple: 'text-purple-400 bg-purple-500/10 border-purple-500/20',
  green: 'text-green-400 bg-green-500/10 border-green-500/20',
  orange: 'text-orange-400 bg-orange-500/10 border-orange-500/20',
  pink: 'text-pink-400 bg-pink-500/10 border-pink-500/20',
}

interface Project {
  id: number
  title: string
  description: string
  tags: string[]
  githubUrl: string
  liveUrl: string
  featured: boolean
  gradient: string
  accentColor: string
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.07 }}
      whileHover={{ y: -6 }}
      className={cn(
        'group relative glass-card rounded-2xl overflow-hidden transition-all duration-300',
        accentMap[project.accentColor]
      )}
    >
      {/* Gradient top bar */}
      <div className={cn('h-1 w-full bg-gradient-to-r', project.gradient.replace('/20', ''))} />

      {/* Card bg glow */}
      <div className={cn('absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none', project.gradient)} />

      <div className="relative p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className={cn('w-8 h-8 rounded-lg flex items-center justify-center border', tagColorMap[project.accentColor])}>
              <Folders size={14} />
            </div>
            {project.featured && (
              <span className="flex items-center gap-1 text-[10px] font-semibold text-yellow-400 bg-yellow-400/10 border border-yellow-400/20 px-2 py-0.5 rounded-full">
                <Star size={9} fill="currentColor" />
                Featured
              </span>
            )}
          </div>
          <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-8 h-8 rounded-lg glass flex items-center justify-center text-slate-400 hover:text-white transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <GitBranch size={14} />
            </a>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Live demo"
              className="w-8 h-8 rounded-lg glass flex items-center justify-center text-slate-400 hover:text-white transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink size={14} />
            </a>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-base font-bold text-white mb-2 group-hover:text-gradient-cyan transition-all duration-300 leading-snug">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-slate-400 text-sm leading-relaxed mb-5 line-clamp-3">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className={cn('px-2.5 py-1 rounded-lg text-[11px] font-medium border', tagColorMap[project.accentColor])}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export function Projects() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filtered = projects.filter((p) => {
    if (activeFilter === 'All') return true
    if (activeFilter === 'Featured') return p.featured
    return true
  })

  return (
    <section id="projects" className="relative section-padding overflow-hidden">
      {/* Bg accent */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-purple-600/4 blur-[150px] pointer-events-none" />

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
            <span className="text-gradient">shipped</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-base leading-relaxed">
            A selection of projects I've built — from production SaaS apps to open-source tools
            and experimental side projects.
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
                'px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200',
                activeFilter === f
                  ? 'text-white bg-gradient-to-r from-cyan-500/20 to-blue-600/20 border border-cyan-500/30'
                  : 'text-slate-400 hover:text-white glass-card border'
              )}
            >
              {f}
            </button>
          ))}
        </motion.div>

        {/* Project grid */}
        <motion.div
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
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
          <p className="text-slate-400 mb-4 text-sm">Want to see more? Check out my GitHub.</p>
          <motion.a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white glass-card border border-white/10 hover:border-cyan-500/30 transition-all duration-300"
          >
            <GitHubIcon size={16} />
            View All on GitHub
            <ExternalLink size={13} className="text-slate-400" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
