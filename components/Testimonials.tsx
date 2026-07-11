import { Quote } from 'lucide-react'
import FadeIn from './FadeIn'

const testimonials = [
  {
    quote:
      'Dati, wala akong portfolio — puro screenshots lang ang pinapadala ko sa clients. Ngayon may sarili na akong website. Two weeks after, may bagong client na ako!',
    name: 'Maria S.',
    role: 'General VA · Cebu',
    initials: 'MS',
  },
  {
    quote:
      'The design looks so professional. Clients take me seriously now, and I raised my rate because my portfolio finally matches my skills.',
    name: 'Andrea C.',
    role: 'Executive VA · Manila',
    initials: 'AC',
  },
  {
    quote:
      'Ang bilis lang ng process. I picked a template, sent my info, and in a few days live na ang site ko. Sobrang worth it.',
    name: 'Kyla D.',
    role: 'Social Media Manager · Davao',
    initials: 'KD',
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container-x">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <span className="eyebrow mx-auto">Loved by freelancers</span>
          <h2 className="mt-5 font-display text-3xl font-extrabold sm:text-4xl">
            Real VAs, <span className="text-gradient">real results</span>
          </h2>
        </FadeIn>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <FadeIn key={t.name} delay={i * 0.1}>
              <div className="surface-card flex h-full flex-col rounded-2xl p-7">
                <Quote size={26} className="text-cherry-500" />
                <p className="mt-4 flex-1 text-sm leading-relaxed">{t.quote}</p>
                <div className="mt-6 flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-cherry-600 to-cherry-400 text-sm font-bold text-white">
                    {t.initials}
                  </span>
                  <div>
                    <div className="text-sm font-semibold">{t.name}</div>
                    <div className="text-xs text-secondary">{t.role}</div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
