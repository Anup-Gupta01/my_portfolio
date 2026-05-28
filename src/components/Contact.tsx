import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Loader2, CheckCircle, AlertCircle } from 'lucide-react'
import emailjs from '@emailjs/browser'
import { personalInfo, socialLinks } from '../data/portfolio'
import { socialIconMap } from './SocialIcons'
import type { ChangeEvent, FormEvent } from 'react'

const EMAILJS_SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID  as string
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string
const EMAILJS_PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY  as string

type FormState = 'idle' | 'sending' | 'sent' | 'error'

export function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState<FormState>('idle')

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name:  form.name,
          from_email: form.email,
          subject:    form.subject,
          message:    form.message,
          to_email:   personalInfo.email,
        },
        EMAILJS_PUBLIC_KEY
      )
      setStatus('sent')
      setForm({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setStatus('idle'), 5000)
    } catch (err) {
      console.error('EmailJS error:', err)
      setStatus('error')
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

  return (
    <section id="contact" className="py-28 px-6 lg:px-10 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-[1fr_1.3fr] gap-16 lg:gap-24 items-start">

          {/* ─── Left: Big CTA ─── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="label-mono block mb-3">Contact</span>
            <h2 className="font-display text-6xl md:text-7xl font-bold text-stone-100 mb-8 leading-tight">
              Let's<br />
              talk.
            </h2>

            <p className="text-stone-400 text-sm leading-relaxed mb-10 max-w-xs">
              Open to full-time SDE roles, short-term contracts, and interesting freelance work.
              If you have something in mind, I'd like to hear about it.
            </p>

            {/* Direct email — large, amber, clickable */}
            <div className="mb-10">
              <p className="label-mono mb-2">Email directly</p>
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-base text-amber-400 hover:text-amber-300 transition-colors break-all"
              >
                {personalInfo.email} →
              </a>
            </div>

            {/* Location + availability — plain text, no cards */}
            <div className="space-y-5 mb-10">
              <div>
                <p className="label-mono mb-1">Based in</p>
                <p className="text-sm text-stone-400">{personalInfo.location}</p>
              </div>
              <div>
                <p className="label-mono mb-1">Status</p>
                <p className="flex items-center gap-2 text-sm text-stone-400">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse flex-shrink-0" />
                  Open to work
                </p>
              </div>
            </div>

            {/* Social links */}
            <div>
              <p className="label-mono mb-4">Elsewhere</p>
              <div className="flex flex-wrap gap-5">
                {socialLinks.map((link) => {
                  const Icon = socialIconMap[link.icon]
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target={link.href.startsWith('mailto') ? undefined : '_blank'}
                      rel="noopener noreferrer"
                      aria-label={link.label}
                      className="flex items-center gap-1.5 text-xs text-stone-600 hover:text-stone-300 transition-colors"
                    >
                      {Icon && <Icon size={12} />}
                      {link.label}
                    </a>
                  )
                })}
              </div>
            </div>
          </motion.div>

          {/* ─── Right: Form ─── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:pt-12"
          >
            {status === 'sent' ? (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col items-start gap-4 py-16"
              >
                <CheckCircle size={24} className="text-emerald-500" />
                <h4 className="text-lg font-semibold text-stone-100">Message sent.</h4>
                <p className="text-sm text-stone-500">I'll get back to you within 24 hours.</p>
              </motion.div>
            ) : status === 'error' ? (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col items-start gap-4 py-16"
              >
                <AlertCircle size={24} className="text-red-500" />
                <h4 className="text-lg font-semibold text-stone-100">Something went wrong.</h4>
                <p className="text-sm text-stone-500">
                  Try emailing me directly at{' '}
                  <a href={`mailto:${personalInfo.email}`} className="text-amber-400 underline">
                    {personalInfo.email}
                  </a>
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8" noValidate>
                <div className="grid sm:grid-cols-2 gap-8">
                  <div>
                    <label className="label-mono block mb-2">Name</label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      className="input-underline"
                    />
                  </div>
                  <div>
                    <label className="label-mono block mb-2">Email</label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                      className="input-underline"
                    />
                  </div>
                </div>

                <div>
                  <label className="label-mono block mb-2">Subject</label>
                  <input
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    required
                    placeholder="What's this about?"
                    className="input-underline"
                  />
                </div>

                <div>
                  <label className="label-mono block mb-2">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell me about your project or opportunity..."
                    className="input-underline resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="flex items-center gap-2.5 px-7 py-3 text-sm font-semibold text-black bg-amber-400 hover:bg-amber-300 active:bg-amber-500 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === 'sending' ? (
                    <>
                      <Loader2 size={14} className="animate-spin" />
                      Sending…
                    </>
                  ) : (
                    <>
                      <Send size={14} />
                      Send message
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
