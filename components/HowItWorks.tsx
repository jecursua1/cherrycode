import { MousePointerClick, Palette, Rocket } from 'lucide-react'
import FadeIn from './FadeIn'

const steps = [
  {
    icon: MousePointerClick,
    title: 'Browse the designs',
    body: 'Explore our gallery of portfolio templates built for different freelance roles. Filter by your niche and find a look that feels like you.',
  },
  {
    icon: Palette,
    title: 'Pick & personalize',
    body: 'Choose your favorite template. Send us your details, photo, services, and past work — we handle the copy, layout, and polish.',
  },
  {
    icon: Rocket,
    title: 'We build & launch',
    body: 'We build your site with Next.js, connect your domain, and launch it live — usually within days. Fast, mobile-ready, and yours.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how" className="scroll-mt-24 py-20 sm:py-28">
      <div className="container-x">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <span className="eyebrow mx-auto">How it works</span>
          <h2 className="mt-5 font-display text-3xl font-extrabold sm:text-4xl">
            From zero to a live portfolio in{' '}
            <span className="text-gradient">three simple steps</span>
          </h2>
          <p className="mt-4 text-secondary">
            No design skills, no coding, no stress. You focus on your craft — we make you look
            world-class online.
          </p>
        </FadeIn>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <FadeIn key={s.title} delay={i * 0.1}>
              <div className="surface-card h-full rounded-2xl p-7">
                <div className="flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-cherry-600 to-cherry-400 text-white">
                    <s.icon size={20} />
                  </span>
                  <span className="font-display text-3xl font-extrabold text-secondary/40">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-lg font-bold">{s.title}</h3>
                <p className="mt-2 text-sm text-secondary">{s.body}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
