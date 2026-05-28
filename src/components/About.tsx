import { motion } from 'framer-motion'
import { Download } from 'lucide-react'
import { skills, personalInfo } from '../data/portfolio'
import dpPhoto from '../assets/dp_photo.jpeg'

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export function About() {
  return (
    <section id="about" className="py-28 px-6 lg:px-10 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="mb-16"
        >
          <span className="label-mono">Background</span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* ─── Left column: Photo + bio ─── */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            {/* Photo — rectangular, no orb */}
            <div
              className="relative mb-10 overflow-hidden"
              style={{ aspectRatio: '4 / 5', maxWidth: '300px' }}
            >
              <img
                src={dpPhoto}
                alt="Anup Gupta"
                className="w-full h-full object-cover object-center"
                style={{ filter: 'grayscale(15%) contrast(1.05)' }}
              />
              {/* Amber corner accents — editorial detail */}
              <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-amber-400/50" />
              <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-amber-400/50" />
            </div>

            {/* Heading */}
            <h2 className="font-display text-3xl font-bold text-stone-100 mb-6 leading-tight">
              CS student, full-stack developer,
              <br />
              <em>problem-solving enthusiast.</em>
            </h2>

            {/* Bio paragraphs */}
            <div className="space-y-4 text-stone-400 leading-relaxed text-sm mb-8">
              <p>
                I'm finishing my B.Tech in Computer Science at MMMUT Gorakhpur (CGPA: 8.59). I
                started building things seriously in my second year and found I enjoy the entire
                cycle — system design, backend logic, and making the frontend feel right.
              </p>
              <p>
                I've built three real-world projects: a campus placement portal, an edtech platform,
                and an AI course generator. Each one was a genuine attempt to solve a problem, not
                just a portfolio checkbox.
              </p>
              <p>
                I also have a strong background in Data Structures and Algorithms — 450+ problems
                solved, LeetCode rating above 1810, CodeChef 3-star, GATE CS qualified. Algorithmic
                thinking genuinely changes how you approach production code.
              </p>
            </div>

            {/* Currently focused on */}
            <div className="mb-8">
              <p className="label-mono mb-3">Currently focused on</p>
              <ul className="space-y-2">
                {[
                  'Full-stack development',
                  'System design fundamentals',
                  'AI-integrated applications',
                ].map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-stone-400">
                    <span className="text-amber-400 text-xs font-mono">—</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-stone-500 hover:text-stone-300 transition-colors border-b border-stone-800 hover:border-stone-600 pb-0.5"
            >
              <Download size={12} />
              Download résumé
            </a>
          </motion.div>

          {/* ─── Right column: Stats + Skills ─── */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="lg:pt-14"
          >
            {/* Stats — 2×2 grid using gap-as-border trick */}
            <div className="stats-grid mb-16">
              {[
                { value: '8.59', label: 'CGPA at MMMUT' },
                { value: '450+', label: 'DSA problems solved' },
                { value: '1810+', label: 'LeetCode rating' },
                { value: '3★', label: 'CodeChef rank' },
              ].map((stat) => (
                <div key={stat.label} className="stats-cell">
                  <div className="font-display text-3xl font-bold text-stone-100 mb-1 leading-none">
                    {stat.value}
                  </div>
                  <div className="text-xs text-stone-600 mt-1.5">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Skills — plain text list, no pill tags */}
            <div className="space-y-7">
              {[
                { label: 'Frontend', list: skills.frontend },
                { label: 'Backend', list: skills.backend },
                { label: 'Tooling & DevOps', list: skills.devops },
                { label: 'DSA & Other', list: skills.tools },
              ].map((cat) => (
                <div key={cat.label}>
                  <p className="label-mono mb-2.5">{cat.label}</p>
                  <p className="text-sm text-stone-400 leading-relaxed">
                    {cat.list.join(' · ')}
                  </p>
                  <div className="mt-5 h-px bg-white/[0.05]" />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
