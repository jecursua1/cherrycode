import { Template } from '@/lib/templates'
import { ArrowRight, ArrowUpRight } from 'lucide-react'

/**
 * Faithful recreation of the Edder automation-architect portfolio:
 * light canvas with a lavender hero, indigo accent, a featured-project card,
 * a stat row, an about block with a meta card, selected-work cards, a skills
 * grid, education, and a "Let's talk" closer. Placeholder name.
 */
export default function MomentumDesign({ template }: { template: Template }) {
  const { sample, content } = template
  const indigo = '#6d5efc'

  return (
    <div style={{ background: '#f7f7fb', color: '#14142a' }} className="font-sans">
      {/* nav */}
      <nav className="flex items-center justify-between px-6 py-4 text-xs">
        <span className="font-bold">{sample.name.split(' ')[0].toLowerCase()}.{sample.name.split(' ')[1]?.toLowerCase()}</span>
        <div className="hidden gap-5 text-[#6b6b80] sm:flex">
          <span>About</span><span>Work</span><span>Skills</span><span>Experience</span><span>Contact</span>
        </div>
        <span className="rounded-full px-3 py-1.5 font-semibold text-white" style={{ background: indigo }}>Start my build</span>
      </nav>

      {/* hero */}
      <section className="grid gap-6 px-6 py-12 sm:grid-cols-[1.2fr_1fr]" style={{ background: 'linear-gradient(160deg,#efeafe,#f7f7fb)' }}>
        <div>
          <span className="inline-block rounded-full border px-3 py-1 text-[11px] font-medium" style={{ borderColor: '#dcd6f5', color: indigo }}>
            ● Open to AI Engineer, Backend &amp; Full-Stack roles
          </span>
          <h1 className="mt-4 font-extrabold leading-[1.05]" style={{ fontSize: 44 }}>{sample.name}.</h1>
          <div className="mt-2 text-sm font-semibold text-[#6b6b80]">{sample.role} · Automation Architect</div>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-[#5a5a70]">{content.heroSub}</p>
          <div className="mt-5 flex gap-3">
            <span className="inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-xs font-bold text-white" style={{ background: indigo }}>View my work <ArrowRight size={13} /></span>
            <span className="rounded-lg border px-4 py-2.5 text-xs font-semibold" style={{ borderColor: '#d5d5e0' }}>Download resume</span>
          </div>
          <div className="mt-6 flex flex-wrap gap-6">
            {content.stats.map((s) => (
              <div key={s.label}>
                <div className="font-extrabold" style={{ fontSize: 20 }}>{s.value}</div>
                <div className="text-[10px] uppercase tracking-wide text-[#8a8a9a]">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
        {/* featured card */}
        <div className="rounded-2xl border bg-white p-5 shadow-sm" style={{ borderColor: '#e6e2f5' }}>
          <div className="flex items-center justify-between text-[10px] font-semibold text-[#8a8a9a]">
            <span>FEATURED PROJECT</span><span style={{ color: '#22c55e' }}>● Production</span>
          </div>
          <div className="mt-2 text-lg font-extrabold">{content.work[0].title}</div>
          <p className="mt-2 text-xs leading-relaxed text-[#6b6b80]">{content.work[0] && content.services[0].desc}</p>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {content.tools.slice(0, 4).map((t) => (
              <span key={t} className="rounded bg-[#f1eefe] px-2 py-1 text-[10px] font-medium" style={{ color: indigo }}>{t}</span>
            ))}
          </div>
          <div className="mt-3 flex items-center gap-1 text-xs font-semibold" style={{ color: indigo }}>See case study <ArrowUpRight size={12} /></div>
        </div>
      </section>

      {/* about */}
      <section className="grid gap-6 px-6 py-12 sm:grid-cols-[1.4fr_1fr]">
        <div>
          <div className="text-xs font-bold text-[#8a8a9a]">01</div>
          <h2 className="mt-1 text-2xl font-extrabold">About</h2>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-[#5a5a70]">{content.about}</p>
        </div>
        <div className="rounded-2xl border bg-white p-5 text-sm" style={{ borderColor: '#e6e2f5' }}>
          {[['LOCATION', sample.location], ['LANGUAGES', 'English, Filipino'], ['DAILY DRIVER', content.tools[0]], ['STATUS', 'Open to roles']].map(([k, v]) => (
            <div key={k} className="flex justify-between border-b py-2 last:border-0" style={{ borderColor: '#eee' }}>
              <span className="text-[10px] font-semibold text-[#8a8a9a]">{k}</span>
              <span className="text-xs font-medium">{v}</span>
            </div>
          ))}
        </div>
      </section>

      {/* selected work */}
      <section className="px-6 py-12">
        <div className="text-xs font-bold text-[#8a8a9a]">02</div>
        <h2 className="mt-1 text-2xl font-extrabold">Selected work</h2>
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          {content.work.map((w) => (
            <div key={w.title} className="rounded-xl border bg-white p-4" style={{ borderColor: '#e6e2f5' }}>
              <div className="text-sm font-bold">{w.title}</div>
              <div className="mt-1 inline-block rounded bg-[#f1eefe] px-2 py-0.5 text-[10px] font-medium" style={{ color: indigo }}>{w.tag}</div>
            </div>
          ))}
        </div>
      </section>

      {/* skills */}
      <section className="px-6 py-12" style={{ background: '#f1eff9' }}>
        <div className="text-xs font-bold text-[#8a8a9a]">03</div>
        <h2 className="mt-1 text-2xl font-extrabold">Skills</h2>
        <div className="mt-5 grid gap-3 sm:grid-cols-4">
          {content.services.map((s) => (
            <div key={s.title} className="rounded-xl border bg-white p-4" style={{ borderColor: '#e6e2f5' }}>
              <div className="text-sm font-bold">{s.title}</div>
              <div className="mt-1 text-xs text-[#8a8a9a]">{s.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* let's talk */}
      <section className="px-6 py-14">
        <div className="rounded-2xl border bg-white p-8 text-center" style={{ borderColor: '#e6e2f5' }}>
          <h2 className="text-2xl font-extrabold">Let&apos;s talk</h2>
          <p className="mx-auto mt-2 max-w-sm text-sm text-[#6b6b80]">
            Hiring an engineer or automation architect who ships production systems? I&apos;d love to hear what you&apos;re building.
          </p>
          <span className="mt-5 inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-xs font-bold text-white" style={{ background: indigo }}>
            Email me <ArrowRight size={13} />
          </span>
        </div>
      </section>

      <footer className="px-6 py-5 text-center text-[11px] text-[#8a8a9a]">© 2026 {sample.name}. Built with care.</footer>
    </div>
  )
}
