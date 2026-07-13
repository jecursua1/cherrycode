import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowRight, Check, Star, Eye, ExternalLink } from 'lucide-react'
import { templates, getTemplate } from '@/lib/templates'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import TemplatePreview from '@/components/TemplatePreview'
import DesignPreview from '@/components/designs'

export function generateStaticParams() {
  return templates.map((t) => ({ slug: t.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const t = getTemplate(slug)
  if (!t) return { title: 'Template not found — CherryCode' }
  return {
    title: `${t.name} — Portfolio Template · CherryCode`,
    description: t.tagline,
    alternates: { canonical: `/templates/${t.slug}` },
  }
}

export default async function TemplateDetail({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const template = getTemplate(slug)
  if (!template) notFound()

  const others = templates.filter((t) => t.slug !== template.slug).slice(0, 3)

  return (
    <>
      <Navbar />
      <main className="pt-28 sm:pt-32">
        <div className="container-x">
          <Link
            href="/templates"
            className="inline-flex items-center gap-2 text-sm font-medium text-secondary transition-colors hover:text-[var(--text-primary)]"
          >
            <ArrowLeft size={16} /> All templates
          </Link>
        </div>

        <section className="py-10">
          <div className="container-x grid gap-10 lg:grid-cols-[1.4fr_1fr]">
            {/* live preview */}
            <div>
              <div className="surface-card max-h-[560px] overflow-y-auto rounded-2xl shadow-xl">
                <DesignPreview template={template} />
              </div>
              <Link
                href={`/templates/${template.slug}/preview`}
                className="btn-primary group mt-4 w-full"
              >
                <Eye size={16} /> See full preview
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* details */}
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full border px-3 py-1 text-xs font-medium text-secondary" style={{ borderColor: 'var(--border)' }}>
                  {template.category}
                </span>
                {template.popular && (
                  <span className="flex items-center gap-1 rounded-full bg-cherry-600 px-3 py-1 text-xs font-semibold text-white">
                    <Star size={11} fill="currentColor" /> Popular
                  </span>
                )}
              </div>
              <h1 className="mt-4 font-display text-4xl font-extrabold">{template.name}</h1>
              <p className="mt-3 text-secondary">{template.tagline}</p>

              <a
                href={template.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-cherry-500 transition-colors hover:text-cherry-400"
              >
                View original site
                <ExternalLink size={13} />
              </a>

              <div className="mt-6 rounded-xl p-4" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
                <div className="text-xs font-semibold uppercase tracking-wide text-secondary">
                  Vibe
                </div>
                <div className="mt-1 font-medium">{template.vibe}</div>
              </div>

              <div className="mt-6">
                <h3 className="text-sm font-semibold">Best for</h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  {template.bestFor.map((b) => (
                    <span
                      key={b}
                      className="rounded-full px-3 py-1 text-xs font-medium"
                      style={{ background: 'var(--card)', border: '1px solid var(--border)' }}
                    >
                      {b}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6">
                <h3 className="text-sm font-semibold">What&apos;s included</h3>
                <ul className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {template.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-secondary">
                      <Check size={16} className="text-cherry-500" /> {f}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/#contact" className="btn-primary group flex-1">
                  Use this template
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </Link>
                <Link href="/#pricing" className="btn-ghost flex-1">
                  See pricing
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* other templates */}
        <section className="py-16" style={{ background: 'var(--bg-elevated)' }}>
          <div className="container-x">
            <h2 className="font-display text-2xl font-extrabold">Explore other designs</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {others.map((t) => (
                <Link
                  key={t.slug}
                  href={`/templates/${t.slug}`}
                  className="surface-card group block overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <TemplatePreview template={t} />
                  <div className="flex items-center justify-between p-5">
                    <h3 className="font-display font-bold">{t.name}</h3>
                    <span className="text-xs text-secondary">{t.category}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
