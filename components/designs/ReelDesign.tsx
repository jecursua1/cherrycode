import { Template } from '@/lib/templates'
import { Play, ArrowUpRight, Mail, Phone } from 'lucide-react'

/**
 * Faithful recreation of the Aimee Rose video-editor portfolio:
 * near-black canvas, oversized display wordmark, "CUT. CREATE. CAPTIVATE.",
 * a technical-arsenal card, stat row, featured video grid, tools grid, and a
 * "LET'S CREATE." closer. Sample name is a placeholder.
 */
export default function ReelDesign({ template }: { template: Template }) {
  const { sample, content } = template
  const first = sample.name.split(' ')[0].toUpperCase()
  const last = (sample.name.split(' ')[1] || '').toUpperCase()

  return (
    <div style={{ background: '#050507', color: '#fff' }} className="font-sans">
      {/* nav */}
      <nav className="flex items-center justify-between px-6 py-4 text-[11px] tracking-[0.2em] text-white/60">
        <span className="font-bold text-white">{first} {last}</span>
        <div className="hidden gap-6 sm:flex">
          <span>HOME</span><span>ABOUT</span><span>WORK</span><span>TOOLS</span>
        </div>
        <span className="rounded-full border border-white/20 px-3 py-1.5 text-white">LET&apos;S TALK</span>
      </nav>

      {/* hero */}
      <section className="relative px-6 pb-14 pt-8 text-center">
        <h1
          className="font-extrabold leading-[0.82] tracking-tight"
          style={{ fontSize: 'clamp(48px, 12vw, 150px)' }}
        >
          <span className="bg-gradient-to-r from-white to-white/30 bg-clip-text text-transparent">
            {first}
          </span>{' '}
          <span className="bg-gradient-to-r from-white/70 to-white/10 bg-clip-text text-transparent">
            {last}
          </span>
        </h1>
        <div className="mx-auto mt-6 flex max-w-3xl flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <div className="text-left">
            <div className="text-xs font-semibold tracking-[0.25em] text-white/70">
              VIDEO EDITOR &amp; VISUAL STORYTELLER
            </div>
            <div className="mt-1 text-[10px] tracking-[0.3em] text-white/35">CORE PHILOSOPHY</div>
          </div>
          <div className="text-right">
            <div className="font-extrabold leading-tight" style={{ fontSize: 22 }}>
              CUT.<br />CREATE.<br />
              <span style={{ color: template.palette.accent }}>CAPTIVATE.</span>
            </div>
            <div className="mt-3 flex gap-2">
              <span className="rounded bg-white px-4 py-2 text-[11px] font-bold text-black">▸ SHOW MORE</span>
              <span className="rounded border border-white/25 px-4 py-2 text-[11px] font-semibold">COLLABORATE →</span>
            </div>
          </div>
        </div>
      </section>

      {/* about + technical arsenal */}
      <section className="grid gap-6 px-6 py-12 sm:grid-cols-[300px_1fr]">
        <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
          <div className="mb-3 text-[10px] font-bold tracking-[0.2em] text-white/40">▸ TECHNICAL ARSENAL</div>
          <ul className="space-y-3">
            {content.services.map((s) => (
              <li key={s.title}>
                <div className="text-xs font-bold" style={{ color: template.palette.accent }}>
                  {s.title.replace(/^[^A-Za-z]+/, '')}
                </div>
                <div className="mt-0.5 text-[11px] leading-relaxed text-white/45">{s.desc}</div>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="text-[10px] font-bold tracking-[0.2em] text-white/40">ABOUT ME // PROFESSIONAL PROFILE</div>
          <h2 className="mt-3 font-extrabold leading-tight" style={{ fontSize: 34 }}>
            CREATING IMPACT THROUGH<br />
            <span className="text-white/50">VISUAL FLOW</span>
          </h2>
          <p className="mt-4 max-w-lg text-sm leading-relaxed text-white/55">{content.about}</p>
        </div>
      </section>

      {/* stats */}
      <section className="grid grid-cols-3 gap-4 border-y border-white/10 px-6 py-8 text-center">
        {content.stats.map((s) => (
          <div key={s.label}>
            <div className="font-extrabold" style={{ fontSize: 30 }}>{s.value}</div>
            <div className="mt-1 text-[10px] tracking-[0.2em] text-white/40">{s.label.toUpperCase()}</div>
          </div>
        ))}
      </section>

      {/* featured projects */}
      <section className="px-6 py-12">
        <div className="text-[10px] font-bold tracking-[0.2em] text-white/40">▸ SELECTED PORTFOLIO // VERTICAL FEED</div>
        <h2 className="mt-2 font-extrabold" style={{ fontSize: 34 }}>
          FEATURED <span className="text-white/50">PROJECTS</span>
        </h2>
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {content.work.concat(content.work).slice(0, 6).map((w, i) => (
            <div key={i} className="overflow-hidden rounded-xl border border-white/10">
              <div
                className="relative flex items-center justify-center"
                style={{
                  aspectRatio: '3/4',
                  background: `linear-gradient(160deg, ${template.palette.surface}, #05050a)`,
                }}
              >
                <span
                  className="flex h-11 w-11 items-center justify-center rounded-full"
                  style={{ background: 'rgba(255,255,255,0.9)' }}
                >
                  <Play size={16} className="text-black" fill="currentColor" />
                </span>
                {i === 4 && (
                  <span className="absolute inset-x-0 top-1/2 text-center text-xl font-extrabold" style={{ color: template.palette.accent }}>
                    $320,000<span className="block text-[9px] tracking-widest text-white/60">PER/YEAR</span>
                  </span>
                )}
              </div>
              <div className="bg-white/[0.02] px-3 py-2.5">
                <div className="text-xs font-bold">{w.title}</div>
                <div className="mt-0.5 text-[9px] tracking-widest text-white/35">{w.tag.toUpperCase()}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* tools & tech */}
      <section className="px-6 py-12">
        <div className="text-[10px] font-bold tracking-[0.2em] text-white/40">▸ PRODUCTION PIPELINE // TECH STACK</div>
        <h2 className="mt-2 font-extrabold" style={{ fontSize: 34 }}>
          TOOLS <span className="text-white/50">&amp; TECH</span>
        </h2>
        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {content.tools.map((t) => (
            <div key={t} className="rounded-lg border border-white/10 bg-white/[0.03] p-4">
              <div className="text-sm font-bold">{t}</div>
              <div className="mt-1 flex items-center gap-1 text-[9px] tracking-widest text-white/35">
                ADVANCED <ArrowUpRight size={10} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* let's create */}
      <section className="px-6 py-14 text-center">
        <div className="text-[10px] font-bold tracking-[0.2em] text-white/40">PROJECT ENQUIRIES</div>
        <h2 className="mt-2 font-extrabold" style={{ fontSize: 40 }}>LET&apos;S CREATE.</h2>
        <div className="mx-auto mt-6 flex max-w-md flex-col gap-3 sm:flex-row">
          <span className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] py-3 text-xs text-white/70">
            <Mail size={13} /> hello@studio.com
          </span>
          <span className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] py-3 text-xs text-white/70">
            <Phone size={13} /> +63 900 000 0000
          </span>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-5 text-center text-[10px] tracking-widest text-white/30">
        © {sample.name} · ALL RIGHTS RESERVED
      </footer>
    </div>
  )
}
