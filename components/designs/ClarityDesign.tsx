import { Template } from '@/lib/templates'
import { ArrowRight, Check } from 'lucide-react'
import ProfilePhoto from './ProfilePhoto'

const serif = 'Georgia, "Times New Roman", serif'

/**
 * Faithful recreation of the Cristina admin-VA portfolio:
 * warm cream canvas, terracotta accent, serif headings, split hero with a
 * rounded photo, service cards, a 3-tier pricing block (dark middle tier),
 * an impact timeline, a tools group, and a contact closer. Placeholder name.
 */
export default function ClarityDesign({ template }: { template: Template }) {
  const { sample, content } = template
  const rust = '#c17a54'
  const dark = '#3a3129'

  return (
    <div style={{ background: '#f7f1e8', color: '#2b2420' }} className="font-sans">
      {/* nav */}
      <nav className="flex items-center justify-between px-6 py-4 text-xs">
        <span className="font-bold" style={{ fontFamily: serif, fontSize: 16 }}>{sample.name.split(' ')[0]} {sample.name.split(' ')[1]?.[0]}.</span>
        <div className="hidden gap-5 text-[#8a7a6a] sm:flex">
          <span>About</span><span>Services</span><span>Tools</span><span>Portfolio</span><span>Contact</span>
        </div>
        <span className="rounded-full px-3 py-1.5 font-semibold text-white" style={{ background: rust }}>Hire Me</span>
      </nav>

      {/* hero */}
      <section className="grid items-center gap-8 px-6 py-12 sm:grid-cols-2">
        <div>
          <span className="text-[10px] font-bold tracking-[0.2em] text-[#8a7a6a]">AVAILABLE FOR REMOTE WORK · WORLDWIDE</span>
          <h1 className="mt-4 font-bold leading-tight" style={{ fontFamily: serif, fontSize: 40 }}>
            Your Reliable <span style={{ color: rust }}>Virtual Assistant</span> for Everything Admin
          </h1>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-[#6a5c4e]">{content.heroSub}</p>
          <div className="mt-6 flex gap-3">
            <span className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-bold text-white" style={{ background: rust }}>Hire Me Now</span>
            <span className="rounded-full border px-5 py-2.5 text-xs font-semibold" style={{ borderColor: rust, color: rust }}>View Services</span>
          </div>
          <div className="mt-6 flex gap-8">
            {content.stats.map((s) => (
              <div key={s.label}>
                <div className="font-bold" style={{ fontFamily: serif, fontSize: 22, color: rust }}>{s.value}</div>
                <div className="text-[10px] text-[#8a7a6a]">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
        <ProfilePhoto className="mx-auto h-64 w-64" radius="40% 60% 55% 45%" bg="linear-gradient(150deg,#d8c4b0,#bfa792)" silhouette="rgba(255,255,255,0.75)" />
      </section>

      {/* about + why choose me */}
      <section className="grid gap-6 px-6 py-12 sm:grid-cols-[1.4fr_1fr]" style={{ background: '#f0e6d8' }}>
        <div>
          <span className="text-[10px] font-bold tracking-[0.2em] text-[#8a7a6a]">ABOUT ME</span>
          <h2 className="mt-2 font-bold" style={{ fontFamily: serif, fontSize: 26 }}>The VA Who Actually Gets Things Done</h2>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-[#6a5c4e]">{content.about}</p>
          <div className="mt-4 grid grid-cols-2 gap-2 text-xs text-[#4a4038]">
            {['Detail-Oriented', 'Reliable & Consistent', 'Fast Learner', 'Remote-Tool Savvy', 'Proactive Communicator', 'Confidential & Trustworthy'].map((q) => (
              <div key={q} className="flex items-center gap-1.5"><Check size={13} style={{ color: rust }} /> {q}</div>
            ))}
          </div>
        </div>
        <div className="rounded-2xl p-5 text-white" style={{ background: dark }}>
          <div className="text-sm font-bold" style={{ fontFamily: serif }}>Why Clients Choose Me</div>
          <p className="mt-2 text-xs leading-relaxed text-white/70">
            &ldquo;I don&apos;t just complete tasks — I anticipate what you need. That&apos;s the difference between a good VA and a great one.&rdquo;
          </p>
        </div>
      </section>

      {/* services */}
      <section className="px-6 py-12">
        <h2 className="font-bold" style={{ fontFamily: serif, fontSize: 26 }}>What I Can Do for You</h2>
        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {content.services.map((s) => (
            <div key={s.title} className="rounded-xl border bg-white p-4" style={{ borderColor: '#e5d9c8' }}>
              <div className="h-1 w-8 rounded" style={{ background: rust }} />
              <div className="mt-3 text-sm font-bold">{s.title}</div>
              <div className="mt-1 text-xs leading-relaxed text-[#8a7a6a]">{s.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* pricing */}
      {content.pricing && (
        <section className="px-6 py-12" style={{ background: '#f0e6d8' }}>
          <h2 className="font-bold" style={{ fontFamily: serif, fontSize: 26 }}>Simple, Flexible Pricing</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-3">
            {content.pricing.map((tier, i) => {
              const mid = i === 1
              return (
                <div key={tier.name} className="rounded-2xl p-6 text-center" style={{ background: mid ? dark : '#fff', color: mid ? '#fff' : '#2b2420', border: mid ? 'none' : '1px solid #e5d9c8' }}>
                  <div className="text-[11px] font-semibold uppercase tracking-wide" style={{ color: mid ? '#fff9' : '#8a7a6a' }}>{tier.name}</div>
                  <div className="mt-2 font-bold" style={{ fontFamily: serif, fontSize: 28, color: rust }}>{tier.price}</div>
                  {tier.note && <div className="mt-1 text-[11px]" style={{ color: mid ? '#fff9' : '#8a7a6a' }}>{tier.note}</div>}
                  <div className="mt-4 rounded-full py-2 text-xs font-bold" style={{ background: mid ? rust : '#f3ece0', color: mid ? '#fff' : '#2b2420' }}>
                    {mid ? 'Book This Plan' : i === 0 ? 'Get Started' : 'Let’s Talk'}
                  </div>
                </div>
              )
            })}
          </div>
        </section>
      )}

      {/* experience timeline */}
      {content.experience && (
        <section className="px-6 py-12">
          <h2 className="font-bold" style={{ fontFamily: serif, fontSize: 26 }}>Where I&apos;ve Made an Impact</h2>
          <div className="mt-5 space-y-3 border-l-2 pl-5" style={{ borderColor: '#e5d9c8' }}>
            {content.experience.map((e, i) => (
              <div key={i} className="relative">
                <span className="absolute -left-[27px] top-1 h-3 w-3 rounded-full" style={{ background: rust }} />
                <div className="text-sm font-bold">{e.role}</div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* tools */}
      <section className="px-6 py-12" style={{ background: '#f0e6d8' }}>
        <h2 className="font-bold" style={{ fontFamily: serif, fontSize: 26 }}>I Already Know the Tools You Use</h2>
        <div className="mt-5 flex flex-wrap gap-2">
          {content.tools.map((t) => (
            <span key={t} className="rounded-lg border bg-white px-3 py-2 text-xs font-medium" style={{ borderColor: '#e5d9c8' }}>{t}</span>
          ))}
        </div>
      </section>

      {/* contact */}
      <section className="px-6 py-14 text-center">
        <span className="text-[10px] font-bold tracking-[0.2em] text-[#8a7a6a]">GET IN TOUCH</span>
        <h2 className="mt-2 font-bold" style={{ fontFamily: serif, fontSize: 30 }}>Ready to Work Together?</h2>
        <span className="mt-5 inline-flex items-center gap-2 rounded-full px-6 py-3 text-xs font-bold text-white" style={{ background: rust }}>
          Send Message <ArrowRight size={14} />
        </span>
      </section>

      <footer className="px-6 py-5 text-center text-[11px] text-white" style={{ background: dark }}>
        {sample.name} · Virtual Assistant &amp; Admin Support
      </footer>
    </div>
  )
}
