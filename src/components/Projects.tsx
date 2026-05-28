import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Plus, Minus } from 'lucide-react'
import { GitHubIcon } from './SocialIcons'
import { projects } from '../data/portfolio'

export function Projects() {
  const [openId, setOpenId] = useState<number | null>(null)

  return (
    <section id="work" className="py-28 px-6 lg:px-10 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto">
        {/* Header — asymmetric, label above, title left, link right */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-end justify-between mb-16 gap-8"
        >
          <div>
            <span className="label-mono block mb-3">Selected Work</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-stone-100 leading-tight">
              Things I've built
            </h2>
          </div>
          <a
            href="https://github.com/Anup-Gupta01"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block text-xs text-stone-600 hover:text-stone-400 transition-colors whitespace-nowrap mb-1.5"
          >
            All on GitHub →
          </a>
        </motion.div>

        {/* Project list — editorial numbered accordion */}
        <div>
          {projects.map((project, i) => {
            const isOpen = openId === project.id
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.45, delay: i * 0.09 }}
                className="border-t border-white/[0.06]"
              >
                {/* Row header — click to expand */}
                <button
                  className="w-full py-7 text-left group"
                  onClick={() => setOpenId(isOpen ? null : project.id)}
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-5 md:gap-8">
                    {/* Index number */}
                    <span className="font-mono text-xs text-stone-700 w-5 shrink-0 select-none">
                      {String(i + 1).padStart(2, '0')}
                    </span>

                    {/* Title + subtitle */}
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-0.5">
                        <span className="text-base md:text-lg font-semibold text-stone-200 group-hover:text-white transition-colors">
                          {project.title}
                        </span>
                        <span className="text-xs text-stone-600 font-normal">
                          {project.subtitle}
                        </span>
                      </div>

                      {/* Tags — visible in closed state on md+ */}
                      <div className="hidden md:flex flex-wrap gap-3 mt-2">
                        {project.tags.slice(0, 5).map((tag) => (
                          <span key={tag} className="text-xs font-mono text-stone-700">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Desktop: links + toggle */}
                    <div className="hidden md:flex items-center gap-6 shrink-0">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-1.5 text-xs text-stone-600 hover:text-amber-400 transition-colors"
                      >
                        <ExternalLink size={11} />
                        Live
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-1.5 text-xs text-stone-600 hover:text-stone-300 transition-colors"
                      >
                        <GitHubIcon size={11} />
                        GitHub
                      </a>
                      <span className="text-stone-700 ml-2">
                        {isOpen ? <Minus size={13} /> : <Plus size={13} />}
                      </span>
                    </div>

                    {/* Mobile: toggle only */}
                    <span className="md:hidden text-stone-700 shrink-0">
                      {isOpen ? <Minus size={13} /> : <Plus size={13} />}
                    </span>
                  </div>
                </button>

                {/* Expanded content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="expanded"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="pb-10 pl-10 md:pl-[3.25rem]">
                        <div className="grid md:grid-cols-[1fr_auto] gap-10 items-start">
                          {/* Text content */}
                          <div className="max-w-prose">
                            <p className="text-stone-400 text-sm leading-relaxed mb-7">
                              {project.description}
                            </p>

                            {/* Full tag list */}
                            <div className="flex flex-wrap gap-x-4 gap-y-1.5 mb-7">
                              {project.tags.map((tag) => (
                                <span
                                  key={tag}
                                  className="text-xs font-mono text-stone-600 border border-white/[0.07] px-2.5 py-1 rounded-sm"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>

                            {/* Mobile links */}
                            <div className="md:hidden flex gap-6 mt-2">
                              <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1.5 text-xs text-amber-400"
                              >
                                <ExternalLink size={11} />
                                Live demo
                              </a>
                              <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1.5 text-xs text-stone-500"
                              >
                                <GitHubIcon size={11} />
                                GitHub
                              </a>
                            </div>
                          </div>

                          {/* Project screenshot */}
                          {project.image && (
                            <div className="md:w-64 shrink-0">
                              <img
                                src={project.image}
                                alt={`${project.title} screenshot`}
                                className="w-full border border-white/[0.07]"
                                style={{ aspectRatio: '16/10', objectFit: 'cover', objectPosition: 'top' }}
                              />
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}

          {/* Terminal bottom rule */}
          <div className="border-t border-white/[0.06]" />
        </div>

        {/* Mobile: GitHub link */}
        <div className="mt-10 md:hidden">
          <a
            href="https://github.com/Anup-Gupta01"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-stone-600"
          >
            All work on GitHub →
          </a>
        </div>
      </div>
    </section>
  )
}
