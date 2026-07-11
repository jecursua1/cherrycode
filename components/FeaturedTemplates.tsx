import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { templates } from '@/lib/templates'
import TemplatePreview from './TemplatePreview'
import FadeIn from './FadeIn'

const featured = templates.filter((t) => t.popular).slice(0, 3)

export default function FeaturedTemplates() {
  return (
    <section className="py-20 sm:py-28" style={{ background: 'var(--bg-elevated)' }}>
      <div className="container-x">
        <FadeIn className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-xl">
            <span className="eyebrow">Template gallery</span>
            <h2 className="mt-5 font-display text-3xl font-extrabold sm:text-4xl">
              Designs your future clients will{' '}
              <span className="text-gradient">remember</span>
            </h2>
            <p className="mt-4 text-secondary">
              Every template is fully responsive, lightning fast, and built to convert visitors
              into clients. Here are a few of the most popular.
            </p>
          </div>
          <Link href="/templates" className="btn-ghost group shrink-0">
            View all templates
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </FadeIn>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {featured.map((t, i) => (
            <FadeIn key={t.slug} delay={i * 0.1}>
              <Link
                href={`/templates/${t.slug}`}
                className="surface-card group block overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <TemplatePreview template={t} />
                <div className="p-5">
                  <div className="flex items-center justify-between">
                    <h3 className="font-display text-lg font-bold">{t.name}</h3>
                    <span className="rounded-full border px-2.5 py-0.5 text-xs text-secondary" style={{ borderColor: 'var(--border)' }}>
                      {t.category}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-secondary">{t.tagline}</p>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
