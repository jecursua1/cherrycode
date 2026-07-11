'use client'

import { useState } from 'react'
import { Send, CheckCircle2, Loader2 } from 'lucide-react'
import { templates } from '@/lib/templates'
import FadeIn from './FadeIn'

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form).entries())
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error('failed')
      setStatus('sent')
      form.reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="scroll-mt-24 py-20 sm:py-28">
      <div className="container-x">
        <div className="surface-card grid gap-10 overflow-hidden rounded-3xl p-8 sm:p-12 lg:grid-cols-2">
          <FadeIn>
            <span className="eyebrow">Get started</span>
            <h2 className="mt-5 font-display text-3xl font-extrabold sm:text-4xl">
              Let&apos;s build your <span className="text-gradient">portfolio</span>
            </h2>
            <p className="mt-4 max-w-md text-secondary">
              Tell us a bit about you and the template you like. We&apos;ll reply within one
              business day with next steps and a quote. Free to ask — no commitment.
            </p>
            <ul className="mt-8 space-y-3 text-sm">
              {[
                'Reply within 1 business day',
                'No upfront design fee to get a quote',
                'You own your website, forever',
              ].map((item) => (
                <li key={item} className="flex items-center gap-2.5">
                  <CheckCircle2 size={18} className="text-cherry-500" />
                  {item}
                </li>
              ))}
            </ul>
          </FadeIn>

          <FadeIn delay={0.1}>
            {status === 'sent' ? (
              <div className="flex h-full flex-col items-center justify-center rounded-2xl border p-10 text-center" style={{ borderColor: 'var(--border)' }}>
                <CheckCircle2 size={44} className="text-cherry-500" />
                <h3 className="mt-4 font-display text-xl font-bold">Message sent! 🍒</h3>
                <p className="mt-2 text-sm text-secondary">
                  Salamat! We&apos;ll get back to you very soon at the email you provided.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Your name" name="name" placeholder="Juan Dela Cruz" required />
                  <Field
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="you@email.com"
                    required
                  />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Your role / niche" name="role" placeholder="General VA" />
                  <div>
                    <label className="mb-1.5 block text-sm font-medium">Template you like</label>
                    <select
                      name="template"
                      className="w-full rounded-lg border bg-transparent px-3.5 py-2.5 text-sm outline-none focus:border-cherry-500"
                      style={{ borderColor: 'var(--border)', background: 'var(--bg-surface)' }}
                    >
                      <option value="">No preference yet</option>
                      {templates.map((t) => (
                        <option key={t.slug} value={t.name}>
                          {t.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium">Message</label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Tell us about yourself and what you need…"
                    className="w-full resize-none rounded-lg border bg-transparent px-3.5 py-2.5 text-sm outline-none focus:border-cherry-500"
                    style={{ borderColor: 'var(--border)', background: 'var(--bg-surface)' }}
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="btn-primary w-full disabled:opacity-60"
                >
                  {status === 'sending' ? (
                    <>
                      <Loader2 size={16} className="animate-spin" /> Sending…
                    </>
                  ) : (
                    <>
                      Send message <Send size={16} />
                    </>
                  )}
                </button>
                {status === 'error' && (
                  <p className="text-center text-sm text-cherry-500">
                    Something went wrong. Please email us directly at hello@cherrycode.dev.
                  </p>
                )}
              </form>
            )}
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

function Field({
  label,
  ...props
}: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium">{label}</label>
      <input
        {...props}
        className="w-full rounded-lg border bg-transparent px-3.5 py-2.5 text-sm outline-none focus:border-cherry-500"
        style={{ borderColor: 'var(--border)', background: 'var(--bg-surface)' }}
      />
    </div>
  )
}
