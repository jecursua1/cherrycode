import { Zap, Smartphone, Search, Palette, Globe, HeartHandshake } from 'lucide-react'
import FadeIn from './FadeIn'

const features = [
  {
    icon: Zap,
    title: 'Blazing fast',
    body: 'Built on Next.js and hosted on Vercel — your portfolio loads in a blink, anywhere in the world.',
  },
  {
    icon: Smartphone,
    title: 'Mobile-perfect',
    body: 'Most clients view your portfolio on their phone. Every design looks flawless on any screen.',
  },
  {
    icon: Search,
    title: 'SEO ready',
    body: 'Clean metadata and structure so you show up when clients search your name or your niche.',
  },
  {
    icon: Palette,
    title: 'Made yours',
    body: 'Your colors, your photo, your voice. We tailor the template so it feels authentically you.',
  },
  {
    icon: Globe,
    title: 'Custom domain',
    body: 'Look professional with yourname.com — we set up the domain and everything behind it.',
  },
  {
    icon: HeartHandshake,
    title: 'Real support',
    body: 'A real person helps you from first draft to launch — and after. No confusing dashboards.',
  },
]

export default function Features() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container-x">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <span className="eyebrow mx-auto">Why CherryCode</span>
          <h2 className="mt-5 font-display text-3xl font-extrabold sm:text-4xl">
            Everything you need to <span className="text-gradient">look the part</span>
          </h2>
          <p className="mt-4 text-secondary">
            A portfolio isn&apos;t just a page — it&apos;s your first impression. We make sure
            it&apos;s a great one.
          </p>
        </FadeIn>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <FadeIn key={f.title} delay={(i % 3) * 0.08}>
              <div className="surface-card h-full rounded-2xl p-6">
                <span className="grid h-11 w-11 place-items-center rounded-xl text-cherry-500" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
                  <f.icon size={20} />
                </span>
                <h3 className="mt-4 font-display text-base font-bold">{f.title}</h3>
                <p className="mt-2 text-sm text-secondary">{f.body}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
