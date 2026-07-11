'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Star } from 'lucide-react'
import { templates, categories } from '@/lib/templates'
import TemplatePreview from './TemplatePreview'

export default function TemplateGallery() {
  const [active, setActive] = useState<string>('All')

  const filtered =
    active === 'All' ? templates : templates.filter((t) => t.category === active)

  return (
    <div>
      {/* filter chips */}
      <div className="flex flex-wrap justify-center gap-2">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setActive(c)}
            className="rounded-full px-4 py-2 text-sm font-medium transition-all"
            style={
              active === c
                ? { background: '#e11d48', color: '#fff' }
                : {
                    border: '1px solid var(--border)',
                    color: 'var(--text-secondary)',
                    background: 'var(--card)',
                  }
            }
          >
            {c}
          </button>
        ))}
      </div>

      <p className="mt-6 text-center text-sm text-secondary">
        {filtered.length} {filtered.length === 1 ? 'design' : 'designs'}
        {active !== 'All' && ` for ${active}`}
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((t) => (
            <motion.div
              key={t.slug}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.3 }}
            >
              <Link
                href={`/templates/${t.slug}`}
                className="surface-card group block h-full overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative">
                  <TemplatePreview template={t} />
                  {t.popular && (
                    <span className="absolute right-3 top-8 flex items-center gap-1 rounded-full bg-cherry-600 px-2.5 py-1 text-xs font-semibold text-white shadow">
                      <Star size={11} fill="currentColor" /> Popular
                    </span>
                  )}
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between">
                    <h3 className="font-display text-lg font-bold">{t.name}</h3>
                    <span
                      className="rounded-full border px-2.5 py-0.5 text-xs text-secondary"
                      style={{ borderColor: 'var(--border)' }}
                    >
                      {t.category}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-secondary">{t.tagline}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-cherry-500">
                    Preview
                    <ArrowRight
                      size={15}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  )
}
