import { motion } from 'framer-motion'
import { Layers, Server, Zap, Code2 } from 'lucide-react'
import { services } from '../data/portfolio'
import { cn } from '../lib/utils'

const iconMap: Record<string, React.FC<{ size?: number; className?: string }>> = {
  layers: Layers,
  server: Server,
  zap: Zap,
  code2: Code2,
}

// Updated color maps — violet / pink / rose / emerald
const glowMap: Record<string, string> = {
  violet: 'hover:border-violet-500/40 hover:shadow-[0_0_50px_rgba(139,92,246,0.12),0_8px_40px_rgba(0,0,0,0.5)]',
  pink:   'hover:border-pink-500/40 hover:shadow-[0_0_50px_rgba(236,72,153,0.12),0_8px_40px_rgba(0,0,0,0.5)]',
  rose:   'hover:border-rose-500/40 hover:shadow-[0_0_50px_rgba(244,63,94,0.12),0_8px_40px_rgba(0,0,0,0.5)]',
  green:  'hover:border-emerald-500/40 hover:shadow-[0_0_50px_rgba(16,185,129,0.12),0_8px_40px_rgba(0,0,0,0.5)]',
}

const iconBgMap: Record<string, string> = {
  violet: 'text-violet-400 bg-violet-500/10 border-violet-500/25',
  pink:   'text-pink-400 bg-pink-500/10 border-pink-500/25',
  rose:   'text-rose-400 bg-rose-500/10 border-rose-500/25',
  green:  'text-emerald-400 bg-emerald-500/10 border-emerald-500/25',
}

const tagMap: Record<string, string> = {
  violet: 'text-violet-400/80 bg-violet-500/[0.08] border-violet-500/15',
  pink:   'text-pink-400/80 bg-pink-500/[0.08] border-pink-500/15',
  rose:   'text-rose-400/80 bg-rose-500/[0.08] border-rose-500/15',
  green:  'text-emerald-400/80 bg-emerald-500/[0.08] border-emerald-500/15',
}

const gradientMap: Record<string, string> = {
  violet: 'from-violet-500/10 via-transparent to-transparent',
  pink:   'from-pink-500/10 via-transparent to-transparent',
  rose:   'from-rose-500/10 via-transparent to-transparent',
  green:  'from-emerald-500/10 via-transparent to-transparent',
}

// Remap old service colors → new palette
const colorRemap: Record<string, string> = {
  cyan:   'violet',
  blue:   'pink',
  purple: 'rose',
  green:  'green',
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
}

interface Service {
  id: number
  title: string
  description: string
  icon: string
  color: string
  tags: string[]
}

function ServiceCard({ service }: { service: Service }) {
  const Icon = iconMap[service.icon] ?? Code2
  const color = colorRemap[service.color] ?? service.color

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -8, scale: 1.01 }}
      transition={{ type: 'spring', stiffness: 300, damping: 22 }}
      className={cn(
        'group relative glass-card rounded-2xl overflow-hidden p-7 transition-all duration-300 cursor-default',
        glowMap[color]
      )}
    >
      {/* Gradient overlay on hover */}
      <div
        className={cn(
          'absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none',
          gradientMap[color]
        )}
      />

      {/* Top accent line */}
      <div
        className={cn(
          'absolute top-0 left-0 right-0 h-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-400',
          color === 'violet' && 'bg-gradient-to-r from-transparent via-violet-500/60 to-transparent',
          color === 'pink'   && 'bg-gradient-to-r from-transparent via-pink-500/60 to-transparent',
          color === 'rose'   && 'bg-gradient-to-r from-transparent via-rose-500/60 to-transparent',
          color === 'green'  && 'bg-gradient-to-r from-transparent via-emerald-500/60 to-transparent',
        )}
      />

      <div className="relative">
        {/* Icon */}
        <div className={cn('w-12 h-12 rounded-xl border flex items-center justify-center mb-5', iconBgMap[color])}>
          <Icon size={20} />
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-white mb-3 group-hover:text-gradient transition-all duration-300">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-slate-400 text-sm leading-relaxed mb-5">
          {service.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {service.tags.map((tag) => (
            <span
              key={tag}
              className={cn('px-2.5 py-1 rounded-lg text-[11px] font-medium border', tagMap[color])}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export function Services() {
  return (
    <section id="services" className="relative section-padding overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] rounded-full bg-violet-600/4 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-rose-600/4 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-violet-500/20 bg-violet-500/5 mb-4">
            <Zap size={13} className="text-violet-400" />
            <span className="text-xs font-medium text-violet-300 tracking-wide">What I Do</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Services &amp;{' '}
            <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-base leading-relaxed">
            From crafting pixel-perfect interfaces to building scalable backend systems — I bring
            end-to-end product thinking to every engagement.
          </p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </motion.div>

        {/* Bottom tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center text-slate-500 text-sm mt-12"
        >
          Need something custom?{' '}
          <button
            onClick={() => {
              const el = document.getElementById('contact')
              if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' })
            }}
            className="text-violet-400 hover:text-violet-300 underline underline-offset-4 transition-colors"
          >
            Let's talk
          </button>
        </motion.p>
      </div>
    </section>
  )
}
