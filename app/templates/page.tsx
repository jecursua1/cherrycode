import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import TemplateGallery from '@/components/TemplateGallery'

export const metadata: Metadata = {
  title: 'Browse Portfolio Templates — CherryCode',
  description:
    'Browse portfolio website designs for virtual assistants and freelancers. Filter by your niche, preview each layout, and pick the one that fits you.',
  alternates: { canonical: '/templates' },
}

export default function TemplatesPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="relative overflow-hidden pt-32 pb-14 sm:pt-40">
          <div className="grid-glow pointer-events-none absolute inset-0" />
          <div className="container-x relative text-center">
            <span className="eyebrow mx-auto">Template gallery</span>
            <h1 className="mx-auto mt-6 max-w-3xl font-display text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
              Find the portfolio design that&apos;s{' '}
              <span className="text-gradient">unmistakably you</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-secondary">
              Browse layouts, themes, and styles built for different freelance roles. Click any
              design to preview it, then get started with the one you love.
            </p>
          </div>
        </section>

        <section className="pb-24">
          <div className="container-x">
            <TemplateGallery />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
