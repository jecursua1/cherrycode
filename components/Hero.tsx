'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, Star } from 'lucide-react'
import { templates } from '@/lib/templates'
import TemplatePreview from './TemplatePreview'

const showcase = templates.slice(0, 3)

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="grid-glow pointer-events-none absolute inset-0" />
      <div className="dotted-bg pointer-events-none absolute inset-0 opacity-40" />

      <div className="container-x relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="eyebrow mx-auto">
            <Sparkles size={13} /> Portfolio websites for freelancers
          </span>
          <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-6xl">
            Get hired with a portfolio that looks{' '}
            <span className="text-gradient">seriously good.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base text-secondary sm:text-lg">
            CherryCode designs and builds fast, beautiful portfolio websites for virtual
            assistants and freelancers — in the Philippines and worldwide. Browse the designs,
            pick your favorite, and we&apos;ll launch it for you.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/templates" className="btn-primary group">
              Browse templates
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link href="/#pricing" className="btn-ghost">
              See pricing
            </Link>
          </div>
          <div className="mt-6 flex items-center justify-center gap-2 text-sm text-secondary">
            <span className="flex text-cherry-500">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} size={14} fill="currentColor" />
              ))}
            </span>
            Loved by VAs landing higher-paying clients
          </div>
        </motion.div>

        {/* floating template previews */}
        <div className="relative mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-5 sm:grid-cols-3">
          {showcase.map((t, i) => (
            <motion.div
              key={t.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className={`surface-card overflow-hidden rounded-2xl shadow-xl ${
                i === 1 ? 'sm:-translate-y-6' : ''
              }`}
            >
              <Link href={`/templates/${t.slug}`}>
                <TemplatePreview template={t} />
                <div className="flex items-center justify-between px-4 py-3">
                  <span className="text-sm font-semibold">{t.name}</span>
                  <span className="text-xs text-secondary">{t.category}</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
