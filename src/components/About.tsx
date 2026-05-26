import { motion } from 'framer-motion'
import { Code2, Server, Cloud, Wrench, User, Download } from 'lucide-react'
import { skills, stats, personalInfo } from '../data/portfolio'

const ease = [0.16, 1, 0.3, 1] as const

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease, delay: i * 0.08 },
  }),
}

const skillCategories = [
  { key: 'frontend' as const, label: 'Frontend', icon: Code2, color: 'cyan' },
  { key: 'backend' as const, label: 'Backend', icon: Server, color: 'blue' },
  { key: 'devops' as const, label: 'DevOps & Cloud', icon: Cloud, color: 'purple' },
  { key: 'tools' as const, label: 'Tools', icon: Wrench, color: 'pink' },
]

const colorMap: Record<string, string> = {
  cyan: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20',
  blue: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
  purple: 'text-purple-400 bg-purple-500/10 border-purple-500/20',
  pink: 'text-pink-400 bg-pink-500/10 border-pink-500/20',
}

export function About() {
  return (
    <section id="about" className="relative section-padding overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-blue-600/4 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/5 mb-4">
            <User size={13} className="text-blue-400" />
            <span className="text-xs font-medium text-blue-300 tracking-wide">About Me</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            The person behind the{' '}
            <span className="text-gradient">code</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            I'm a developer who cares deeply about the craft — writing clean, maintainable code
            and building products that users actually love.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Bio + stats */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card rounded-2xl p-8 transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="w-6 h-6 rounded-md bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-xs">👋</span>
                A little about me
              </h3>
              <div className="space-y-4 text-slate-400 leading-relaxed text-sm md:text-base">
                <p>
                  I'm a full-stack developer with a passion for building products that live at the
                  intersection of great design and solid engineering. I've worked across the entire
                  stack — from crafting pixel-perfect React UIs to architecting scalable Node.js
                  backends and cloud infrastructure.
                </p>
                <p>
                  When I'm not shipping code, I contribute to open source, explore system design
                  problems, and occasionally write about engineering on my blog. I believe the best
                  software is the kind you don't notice — it just works.
                </p>
                <p className="text-slate-300">
                  Currently open to <span className="text-cyan-400 font-medium">full-time opportunities</span> and
                  interesting <span className="text-purple-400 font-medium">freelance projects</span>.
                </p>
              </div>

              <motion.a
                href={personalInfo.resumeUrl}
                download
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 rounded-xl text-sm font-semibold text-white border border-cyan-500/30 hover:bg-cyan-500/10 hover:border-cyan-500/50 transition-all duration-200"
              >
                <Download size={14} className="text-cyan-400" />
                Download Resume
              </motion.a>
            </motion.div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="glass-card rounded-2xl p-6 text-center transition-all duration-300 cursor-default"
                >
                  <div className="text-3xl font-black text-gradient-cyan mb-1">{stat.value}</div>
                  <div className="text-xs text-slate-400 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Skills */}
          <div className="space-y-5">
            {skillCategories.map((cat, catIdx) => {
              const Icon = cat.icon
              return (
                <motion.div
                  key={cat.key}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: catIdx * 0.1 }}
                  className="glass-card rounded-2xl p-6 transition-all duration-300"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <div className={`w-8 h-8 rounded-lg border flex items-center justify-center ${colorMap[cat.color]}`}>
                      <Icon size={15} />
                    </div>
                    <span className="text-sm font-semibold text-white">{cat.label}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skills[cat.key].map((skill, i) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: catIdx * 0.05 + i * 0.04 }}
                        whileHover={{ scale: 1.07, y: -2 }}
                        className={`px-3 py-1.5 rounded-lg text-xs font-medium border cursor-default transition-all duration-150 ${colorMap[cat.color]}`}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
