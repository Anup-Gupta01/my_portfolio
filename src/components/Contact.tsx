import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Send, MapPin, MessageSquare, CheckCircle, Loader2, AlertCircle } from 'lucide-react'
import emailjs from '@emailjs/browser'
import { personalInfo, socialLinks } from '../data/portfolio'
import { socialIconMap } from './SocialIcons'

const EMAILJS_SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID  as string
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string
const EMAILJS_PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY  as string

type FormState = 'idle' | 'sending' | 'sent' | 'error'

export function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState<FormState>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name:    form.name,
          from_email:   form.email,
          subject:      form.subject,
          message:      form.message,
          to_email:     personalInfo.email,
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

  const inputClass =
    'w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white placeholder:text-slate-500 text-sm focus:outline-none focus:border-violet-500/50 focus:bg-violet-500/[0.03] focus:shadow-[0_0_0_3px_rgba(139,92,246,0.1)] transition-all duration-200'

  return (
    <section id="contact" className="relative section-padding overflow-hidden">
      {/* Bg accent */}
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full bg-violet-600/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-violet-500/20 bg-violet-500/5 mb-4">
            <Mail size={13} className="text-violet-400" />
            <span className="text-xs font-medium text-violet-300 tracking-wide">Get In Touch</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Let's build something{' '}
            <span className="text-gradient">together</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-base leading-relaxed">
            Whether you have a project in mind, a job opportunity, or just want to say hello —
            my inbox is always open.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* Left: Info cards */}
          <div className="lg:col-span-2 space-y-5">
            {/* Email card */}
            <motion.a
              href={`mailto:${personalInfo.email}`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="flex items-center gap-4 glass-card rounded-2xl p-5 transition-all duration-300 hover:border-violet-500/30"
            >
              <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400 shrink-0">
                <Mail size={18} />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium mb-0.5">Email me</p>
                <p className="text-sm text-white font-medium">{personalInfo.email}</p>
              </div>
            </motion.a>

            {/* Location card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="flex items-center gap-4 glass-card rounded-2xl p-5"
            >
              <div className="w-10 h-10 rounded-xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-pink-400 shrink-0">
                <MapPin size={18} />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium mb-0.5">Based in</p>
                <p className="text-sm text-white font-medium">{personalInfo.location}</p>
              </div>
            </motion.div>

            {/* Availability badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.16 }}
              className="glass-card rounded-2xl p-5 border border-green-500/15"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.6)] animate-pulse" />
                <span className="text-sm font-semibold text-green-300">Open to Work</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Currently available for full-time roles, contract work, and interesting freelance projects.
              </p>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.24 }}
              className="glass-card rounded-2xl p-5"
            >
              <p className="text-xs text-slate-500 font-medium mb-4 uppercase tracking-wider">Connect online</p>
              <div className="flex gap-3 flex-wrap">
                {socialLinks.map((link) => {
                  const Icon = socialIconMap[link.icon]
                  return (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.label}
                      whileHover={{ scale: 1.15, y: -3 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-10 h-10 rounded-xl glass-card flex items-center justify-center text-slate-400 hover:text-violet-400 hover:border-violet-500/30 transition-all duration-200"
                    >
                      {Icon && <Icon size={16} />}
                    </motion.a>
                  )
                })}
              </div>
            </motion.div>
          </div>

          {/* Right: Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div className="glass-card rounded-2xl p-8 transition-all duration-300">
              <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                <MessageSquare size={18} className="text-violet-400" />
                Send me a message
              </h3>

              {status === 'sent' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-16 gap-4"
                >
                  <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center">
                    <CheckCircle size={32} className="text-green-400" />
                  </div>
                  <h4 className="text-xl font-bold text-white">Message Sent!</h4>
                  <p className="text-slate-400 text-sm text-center max-w-xs">
                    Thanks for reaching out. I'll get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : status === 'error' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-16 gap-4"
                >
                  <div className="w-16 h-16 rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center">
                    <AlertCircle size={32} className="text-red-400" />
                  </div>
                  <h4 className="text-xl font-bold text-white">Something went wrong</h4>
                  <p className="text-slate-400 text-sm text-center max-w-xs">
                    Failed to send your message. Please try again or email me directly at{' '}
                    <a href={`mailto:${personalInfo.email}`} className="text-violet-400 underline">
                      {personalInfo.email}
                    </a>
                  </p>
                </motion.div>
              ) : (

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-400 mb-1.5">
                        Your Name
                      </label>
                      <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-400 mb-1.5">
                        Email Address
                      </label>
                      <input
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="john@company.com"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1.5">
                      Subject
                    </label>
                    <input
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      required
                      placeholder="Project inquiry / Job opportunity"
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1.5">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell me about your project, timeline, and budget..."
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={status === 'sending'}
                    whileHover={{ scale: status !== 'sending' ? 1.02 : 1 }}
                    whileTap={{ scale: status !== 'sending' ? 0.97 : 1 }}
                    className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-violet-500 to-pink-600 shadow-glow-cyan hover:shadow-[0_0_40px_rgba(139,92,246,0.4)] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {status === 'sending' ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={15} />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
