'use client'

import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import FadeIn from './FadeIn'

const faqs = [
  {
    q: 'Do I need any technical or design skills?',
    a: 'None at all. You just pick a template and send us your details. We handle the design, writing, building, and launching for you.',
  },
  {
    q: 'How long does it take to get my portfolio live?',
    a: 'Most portfolios are ready within 3–7 days once you send us your information. Premium builds with custom features can take a little longer.',
  },
  {
    q: 'Can I use my own domain name?',
    a: 'Yes! On the Professional and Premium plans we set up a custom domain like yourname.com. On Starter you get a free .vercel.app subdomain.',
  },
  {
    q: 'What if I want changes after it launches?',
    a: 'Every plan includes revisions. If you need updates later on, we offer affordable maintenance and you always own your site.',
  },
  {
    q: 'I already have a portfolio elsewhere. Can you migrate it?',
    a: 'Absolutely. Send us what you have and we&apos;ll rebuild it into a faster, better-looking CherryCode template.',
  },
  {
    q: 'How do payments work?',
    a: 'It&apos;s a one-time payment, not a subscription. We accept GCash, bank transfer, and international options like PayPal or card.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="scroll-mt-24 py-20 sm:py-28" style={{ background: 'var(--bg-elevated)' }}>
      <div className="container-x">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <span className="eyebrow mx-auto">FAQ</span>
          <h2 className="mt-5 font-display text-3xl font-extrabold sm:text-4xl">
            Questions? <span className="text-gradient">We&apos;ve got answers</span>
          </h2>
        </FadeIn>

        <div className="mx-auto mt-12 max-w-3xl space-y-3">
          {faqs.map((f, i) => (
            <FadeIn key={f.q} delay={i * 0.05}>
              <div className="surface-card overflow-hidden rounded-xl">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-medium">{f.q}</span>
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full text-cherry-500" style={{ border: '1px solid var(--border)' }}>
                    {open === i ? <Minus size={15} /> : <Plus size={15} />}
                  </span>
                </button>
                {open === i && (
                  <p
                    className="px-6 pb-5 text-sm text-secondary"
                    dangerouslySetInnerHTML={{ __html: f.a }}
                  />
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
