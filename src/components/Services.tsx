import { motion } from 'framer-motion'

const principles = [
  {
    num: '01',
    title: 'Start with the problem, not the stack',
    body: "I try to resist the urge to reach for a framework before understanding what's actually being solved. The right technology is usually the one that's boring and gets the job done.",
  },
  {
    num: '02',
    title: 'Write code that can be read later',
    body: 'Clean architecture matters more than clever tricks. If a future version of me can\'t understand what I wrote, neither can a collaborator or a reviewer.',
  },
  {
    num: '03',
    title: 'Ship, then improve',
    body: 'A working feature beats a perfect-but-unfinished one. I aim for iterative improvement over prolonged perfection — but quality still matters once it ships.',
  },
]

export function Services() {
  return (
    <section id="approach" className="py-28 px-6 lg:px-10 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid lg:grid-cols-[1fr_2fr] gap-16 lg:gap-24 items-start"
        >
          {/* Left: heading */}
          <div>
            <span className="label-mono block mb-3">Approach</span>
            <h2 className="font-display text-4xl font-bold text-stone-100 leading-tight">
              How I think<br />
              about <em>building.</em>
            </h2>
          </div>

          {/* Right: prose + principles */}
          <div>
            <div className="space-y-5 text-stone-400 text-sm leading-relaxed mb-12 max-w-prose">
              <p>
                I'm a full-stack developer, which means I'll work wherever the problem is — React
                and Next.js on the front, Node and Express on the back, and enough DevOps exposure
                to deploy and configure things without help.
              </p>
              <p>
                My competitive programming background gives me a useful mental model for breaking
                down problems systematically. I find this transfers well to everyday software
                decisions: thinking about edge cases early, choosing the right data structure, and
                not over-engineering things before they're needed.
              </p>
              <p>
                I like working on products where the problem domain is interesting — something I can
                get genuinely curious about, not just code to spec.
              </p>
            </div>

            {/* Principles */}
            <div>
              {principles.map((p, i) => (
                <motion.div
                  key={p.num}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="py-6 border-t border-white/[0.06]"
                >
                  <div className="flex gap-8">
                    <span className="font-mono text-xs text-stone-700 mt-0.5 shrink-0 select-none">
                      {p.num}
                    </span>
                    <div>
                      <h3 className="text-sm font-semibold text-stone-200 mb-2">{p.title}</h3>
                      <p className="text-sm text-stone-500 leading-relaxed">{p.body}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
              <div className="border-t border-white/[0.06]" />
            </div>

            {/* Stack footnote */}
            <p className="mt-8 text-xs text-stone-700 leading-relaxed">
              Stack I typically reach for:{' '}
              <span className="font-mono text-stone-600">
                React · Next.js · Node.js · Express · MongoDB · PostgreSQL · Tailwind · Vercel
              </span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
