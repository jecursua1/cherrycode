import { Template } from '@/lib/templates'
import { ArrowRight, Check, Plus } from 'lucide-react'

const serif = 'Georgia, "Times New Roman", serif'

/**
 * Faithful recreation of the Zenith VA-agency landing page:
 * near-black canvas, cyan accent, serif display headlines, two-starting-points
 * cards, a "what we build" block, a range grid, a four-step process, and a
 * FAQ. This template is an agency/service style. Placeholder name.
 */
export default function ZenithDesign({ template }: { template: Template }) {
  const { sample, content } = template
  const cyan = '#38d6e0'

  return (
    <div style={{ background: '#0a0e14', color: '#f0f4f8' }} className="font-sans">
      {/* nav */}
      <nav className="flex items-center justify-between px-6 py-4 text-xs text-white/60">
        <span className="font-bold text-white">◈ Zenith</span>
        <div className="hidden gap-5 sm:flex"><span>Services</span><span>Work</span><span>Process</span><span>FAQ</span></div>
        <span className="rounded-full px-3 py-1.5 font-semibold text-black" style={{ background: cyan }}>Start my build</span>
      </nav>

      {/* hero */}
      <section className="px-6 py-14 text-center">
        <div className="text-[10px] font-bold tracking-[0.25em]" style={{ color: cyan }}>— FOR VIRTUAL ASSISTANTS</div>
        <h1 className="mx-auto mt-4 max-w-2xl font-bold leading-tight" style={{ fontFamily: serif, fontSize: 44 }}>
          A portfolio that wins clients <span style={{ fontStyle: 'italic', color: cyan }}>while you sleep.</span>
        </h1>
        <p className="mx-auto mt-4 max-w-lg text-sm text-white/60">{content.heroSub}</p>
        <div className="mt-6 flex justify-center gap-3">
          <span className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-bold text-black" style={{ background: cyan }}>Start my build <ArrowRight size={13} /></span>
          <span className="rounded-full border border-white/20 px-5 py-2.5 text-xs font-semibold">See sample work</span>
        </div>
        <div className="mx-auto mt-8 grid max-w-md grid-cols-3 gap-px overflow-hidden rounded-xl border border-white/10 text-left">
          {[['Custom', 'Designed for you, never a template'], ['Fixed', 'One clear quote, no surprises'], ['Fast', 'Built to ship, not to drag on']].map(([t, d]) => (
            <div key={t} className="bg-white/[0.03] p-3"><div className="text-xs font-bold" style={{ color: cyan }}>{t}</div><div className="mt-1 text-[10px] text-white/50">{d}</div></div>
          ))}
        </div>
      </section>

      {/* marquee */}
      <div className="flex gap-6 overflow-hidden border-y border-white/10 px-6 py-2.5 text-[11px] font-semibold tracking-widest text-white/30">
        {['PORTFOLIO SITES', 'CLIENT CRMS', 'BOOKING DASHBOARDS', 'LEAD PIPELINES', 'CUSTOM TOOLS', 'BRAND PAGES', 'AUTOMATIONS'].map((m) => <span key={m} className="whitespace-nowrap">{m}</span>)}
      </div>

      {/* two starting points */}
      <section className="grid gap-6 px-6 py-14 sm:grid-cols-2">
        <div>
          <div className="text-[10px] font-bold tracking-[0.2em]" style={{ color: cyan }}>— TWO STARTING POINTS</div>
          <h2 className="mt-3 font-bold" style={{ fontFamily: serif, fontSize: 26 }}>Built for where you are right now</h2>
          <p className="mt-3 max-w-xs text-sm text-white/55">Wherever you are, the goal is the same: a presence that makes the next client an easy yes.</p>
        </div>
        <div className="space-y-3">
          {[['01 · ASPIRING VAS', 'No portfolio yet? Start with one that looks established.'], ['02 · EXPERIENCED VAS', 'Outgrown your Canva one-pager.']].map(([t, d]) => (
            <div key={t} className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
              <div className="text-[10px] font-bold tracking-widest" style={{ color: cyan }}>{t}</div>
              <div className="mt-2 text-sm font-semibold">{d}</div>
            </div>
          ))}
        </div>
      </section>

      {/* what we build */}
      <section className="px-6 py-14">
        <div className="text-[10px] font-bold tracking-[0.2em]" style={{ color: cyan }}>— WHAT WE BUILD</div>
        <h2 className="mt-3 font-bold" style={{ fontFamily: serif, fontSize: 26 }}>Start with a portfolio. Grow into a system.</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <div className="text-[10px] font-bold tracking-widest" style={{ color: cyan }}>MOST POPULAR</div>
            <div className="mt-1 text-xl font-extrabold">{content.services[0].title}</div>
            <p className="mt-2 text-xs text-white/55">{content.services[0].desc}</p>
            <div className="mt-3 space-y-1.5">
              {['Custom design, no templates', 'Services, proof, clear contact', 'Mobile-first, fast, SEO-ready'].map((f) => (
                <div key={f} className="flex items-center gap-2 text-[11px] text-white/60"><Check size={12} style={{ color: cyan }} /> {f}</div>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            {content.services.slice(1, 3).map((s) => (
              <div key={s.title} className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
                <div className="text-sm font-bold">{s.title}</div>
                <p className="mt-1 text-xs text-white/55">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* a taste of the range */}
      <section className="px-6 py-14">
        <h2 className="font-bold" style={{ fontFamily: serif, fontSize: 26 }}>A taste of the range.</h2>
        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {content.work.concat(content.work).slice(0, 6).map((w, i) => (
            <div key={i} className="overflow-hidden rounded-xl border border-white/10">
              <div style={{ aspectRatio: '4/3', background: `linear-gradient(160deg, ${template.palette.surface}, #05070c)` }} />
              <div className="bg-white/[0.02] px-3 py-2 text-[11px] font-semibold">{w.title}</div>
            </div>
          ))}
        </div>
      </section>

      {/* process */}
      {content.processSteps && (
        <section className="px-6 py-14">
          <div className="text-[10px] font-bold tracking-[0.2em]" style={{ color: cyan }}>— HOW IT WORKS</div>
          <h2 className="mt-3 font-bold" style={{ fontFamily: serif, fontSize: 26 }}>Four steps from intake to live.</h2>
          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {content.processSteps.map((step, i) => (
              <div key={step}>
                <div className="flex h-8 w-8 items-center justify-center rounded-full border text-xs font-bold" style={{ borderColor: cyan, color: cyan }}>{String(i + 1).padStart(2, '0')}</div>
                <div className="mt-2 text-sm font-semibold">{step}</div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="px-6 py-14">
        <div className="grid gap-6 sm:grid-cols-[1fr_1.4fr]">
          <h2 className="font-bold" style={{ fontFamily: serif, fontSize: 26 }}>Questions, answered.</h2>
          <div>
            {['How much does it cost?', 'How do I pay?', 'I am brand new with no clients. Can you still help?', 'What do you need from me?', 'How long does it take?'].map((q) => (
              <div key={q} className="flex items-center justify-between border-b border-white/10 py-3 text-sm">
                {q} <Plus size={14} className="text-white/40" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-5 text-[11px] text-white/40">
        <span className="font-bold text-white">◈ Zenith</span> · Portfolios that get virtual assistants hired.
      </footer>
    </div>
  )
}
