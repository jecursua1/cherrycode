'use client'

import Link from 'next/link'
import { Check } from 'lucide-react'
import FadeIn from './FadeIn'

const plans = [
  {
    name: 'Starter',
    price: '₱2,999',
    usd: '~$52',
    tagline: 'A clean one-page portfolio to get you online fast.',
    features: [
      'Choose any template',
      'Single-page portfolio',
      'Mobile responsive',
      'Contact form',
      'Free .vercel.app subdomain',
      '1 round of revisions',
    ],
    cta: 'Start with Starter',
    highlight: false,
  },
  {
    name: 'Professional',
    price: '₱5,999',
    usd: '~$105',
    tagline: 'The full package most freelancers choose to stand out.',
    features: [
      'Everything in Starter',
      'Up to 5 sections / pages',
      'Custom domain setup',
      'SEO optimization',
      'Light + dark mode',
      'Portfolio / case studies',
      '3 rounds of revisions',
    ],
    cta: 'Get Professional',
    highlight: true,
  },
  {
    name: 'Premium',
    price: '₱9,999',
    usd: '~$175',
    tagline: 'A fully custom build with extras and priority support.',
    features: [
      'Everything in Professional',
      'Fully custom design tweaks',
      'Blog or services CMS',
      'Booking / calendar embed',
      'Analytics setup',
      'Priority support',
      'Unlimited revisions (30 days)',
    ],
    cta: 'Go Premium',
    highlight: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-24 py-20 sm:py-28" style={{ background: 'var(--bg-elevated)' }}>
      <div className="container-x">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <span className="eyebrow mx-auto">Pricing</span>
          <h2 className="mt-5 font-display text-3xl font-extrabold sm:text-4xl">
            Simple, one-time pricing. <span className="text-gradient">No subscriptions.</span>
          </h2>
          <p className="mt-4 text-secondary">
            Pay once, own it forever. Prices in Philippine Peso with a US dollar estimate for
            international clients.
          </p>
        </FadeIn>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <FadeIn key={plan.name} delay={i * 0.1}>
              <div
                className={`relative flex h-full flex-col rounded-2xl p-7 ${
                  plan.highlight ? 'text-white' : 'surface-card'
                }`}
                style={
                  plan.highlight
                    ? { background: 'linear-gradient(160deg, #e11d48, #9f1239)' }
                    : undefined
                }
              >
                {plan.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-white px-3 py-1 text-xs font-bold text-cherry-600">
                    Most popular
                  </span>
                )}
                <h3 className="font-display text-lg font-bold">{plan.name}</h3>
                <p className={`mt-1 text-sm ${plan.highlight ? 'text-white/80' : 'text-secondary'}`}>
                  {plan.tagline}
                </p>
                <div className="mt-5 flex items-end gap-2">
                  <span className="font-display text-4xl font-extrabold">{plan.price}</span>
                  <span className={`pb-1 text-sm ${plan.highlight ? 'text-white/70' : 'text-secondary'}`}>
                    {plan.usd}
                  </span>
                </div>
                <ul className="mt-6 flex-1 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm">
                      <Check
                        size={17}
                        className={`mt-0.5 shrink-0 ${plan.highlight ? 'text-white' : 'text-cherry-500'}`}
                      />
                      <span className={plan.highlight ? 'text-white/90' : ''}>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/#contact"
                  className={`mt-7 w-full rounded-full px-6 py-3 text-center text-sm font-semibold transition-all hover:-translate-y-0.5 ${
                    plan.highlight
                      ? 'bg-white text-cherry-600 shadow-lg'
                      : 'btn-primary'
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            </FadeIn>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-secondary">
          Not sure which fits? <Link href="/#contact" className="font-semibold text-cherry-500 hover:underline">Message us</Link> and we&apos;ll recommend one.
        </p>
      </div>
    </section>
  )
}
