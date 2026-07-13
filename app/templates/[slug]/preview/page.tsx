import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react'
import { templates, getTemplate } from '@/lib/templates'
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
  if (!t) return { title: 'Preview not found — CherryCode' }
  return {
    title: `${t.name} — Full Preview · CherryCode`,
    description: `Full-page live preview of the ${t.name} portfolio template. ${t.tagline}`,
    alternates: { canonical: `/templates/${t.slug}/preview` },
  }
}

export default async function TemplateFullPreview({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const template = getTemplate(slug)
  if (!template) notFound()

  return (
    <div className="min-h-screen" style={{ background: '#0a0a0a' }}>
      {/* slim floating toolbar */}
      <div
        className="sticky top-0 z-50 flex items-center justify-between gap-3 px-4 py-2.5"
        style={{ background: 'rgba(10,10,10,0.85)', backdropFilter: 'blur(8px)', borderBottom: '1px solid rgba(255,255,255,0.08)' }}
      >
        <Link
          href={`/templates/${template.slug}`}
          className="inline-flex items-center gap-2 text-sm font-medium text-white/70 transition-colors hover:text-white"
        >
          <ArrowLeft size={16} /> Back to {template.name}
        </Link>

        <div className="flex items-center gap-2">
          <a
            href={template.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-1.5 rounded-full border border-white/15 px-3 py-1.5 text-xs font-medium text-white/70 transition-colors hover:text-white sm:inline-flex"
          >
            View original <ExternalLink size={12} />
          </a>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-1.5 rounded-full bg-cherry-600 px-4 py-1.5 text-xs font-bold text-white transition-colors hover:bg-cherry-500"
          >
            Use this template <ArrowRight size={13} />
          </Link>
        </div>
      </div>

      {/* full-page live render, framed like a real site window */}
      <div className="mx-auto max-w-5xl px-3 py-6 sm:px-6 sm:py-10">
        <div
          className="overflow-hidden rounded-2xl shadow-2xl"
          style={{ border: '1px solid rgba(255,255,255,0.1)' }}
        >
          <DesignPreview template={template} />
        </div>
        <p className="mt-6 text-center text-xs text-white/40">
          Live preview with sample content. Your real portfolio will use your own name, words,
          photos, and work.
        </p>
      </div>
    </div>
  )
}
