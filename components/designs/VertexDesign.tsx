import { Template } from '@/lib/templates'
import { ArrowRight } from 'lucide-react'
import ProfilePhoto from './ProfilePhoto'

/**
 * Faithful recreation of the Radwan software-engineer portfolio:
 * near-black canvas, red accent, oversized "ghost" section titles behind
 * each block, a circular avatar hero, skill sectors, experience, projects,
 * education, and a "LET'S WORK TOGETHER" closer. Placeholder name.
 */
export default function VertexDesign({ template }: { template: Template }) {
  const { sample, content } = template
  const red = '#e63946'

  const Ghost = ({ children }: { children: React.ReactNode }) => (
    <div
      className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 select-none font-extrabold leading-none tracking-tight"
      style={{ fontSize: 'clamp(40px, 9vw, 120px)', color: 'rgba(255,255,255,0.03)' }}
    >
      {children}
    </div>
  )

  const Heading = ({ a, b }: { a: string; b: string }) => (
    <h2 className="font-extrabold tracking-tight" style={{ fontSize: 26 }}>
      {a} <span style={{ color: red }}>{b}</span>
    </h2>
  )

  return (
    <div style={{ background: '#0a0e14', color: '#f1f5f9' }} className="font-sans">
      {/* nav */}
      <nav className="flex items-center justify-between px-6 py-4 text-[11px] tracking-[0.15em] text-white/50">
        <span className="font-bold text-white">HOME</span>
        <div className="hidden gap-4 sm:flex">
          <span>ABOUT</span><span>EXPERIENCE</span><span>SKILLS</span><span>PROJECTS</span><span>CONTACT</span>
        </div>
      </nav>

      {/* hero */}
      <section className="grid items-center gap-6 px-6 py-12 sm:grid-cols-[1fr_auto]">
        <div>
          <div className="text-xs tracking-[0.2em] text-white/50">HI I&apos;M</div>
          <h1 className="mt-2 font-extrabold uppercase leading-[0.95]" style={{ fontSize: 40 }}>
            <span style={{ color: red }}>{sample.name.split(' ')[0]}</span> {sample.name.split(' ').slice(1).join(' ')}
          </h1>
          <div className="mt-3 flex items-center gap-2 text-sm text-white/70">
            <span className="h-2 w-2 rounded-full" style={{ background: red }} /> {sample.role}
          </div>
          <div className="mt-5">
            <span className="inline-flex items-center gap-2 rounded-md px-4 py-2 text-xs font-bold text-white" style={{ background: red }}>
              CONTACT ME <ArrowRight size={13} />
            </span>
          </div>
        </div>
        <ProfilePhoto
          className="mx-auto h-28 w-28"
          radius={9999}
          bg={`linear-gradient(135deg, ${red}, #06b6d4)`}
          silhouette="rgba(255,255,255,0.85)"
          ring="rgba(255,255,255,0.12)"
        />
      </section>

      {/* about */}
      <section className="relative overflow-hidden px-6 py-12">
        <Ghost>ABOUT</Ghost>
        <div className="relative">
          <Heading a="ABOUT" b="ME" />
          <p className="mt-4 max-w-lg text-sm leading-relaxed text-white/55">{content.about}</p>
        </div>
      </section>

      {/* experience */}
      {content.experience && (
        <section className="relative overflow-hidden px-6 py-12">
          <Ghost>WORK</Ghost>
          <div className="relative">
            <Heading a="WORK" b="EXPERIENCE" />
            <div className="mt-5 space-y-3">
              {content.experience.map((e, i) => (
                <div key={i} className="rounded-xl border border-white/8 bg-white/[0.02] p-4">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-bold">{e.role}</div>
                    {e.period && <div className="text-[11px]" style={{ color: red }}>{e.period}</div>}
                  </div>
                  {e.org && <div className="mt-0.5 text-xs text-white/45">{e.org}</div>}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* technical skills */}
      {content.skillSectors && (
        <section className="relative overflow-hidden px-6 py-12">
          <Ghost>SKILLS</Ghost>
          <div className="relative">
            <Heading a="TECHNICAL" b="SKILLS" />
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {content.skillSectors.map((sec) => (
                <div key={sec.label} className="rounded-xl border border-white/8 bg-white/[0.02] p-4">
                  <div className="text-[11px] font-bold tracking-wide" style={{ color: red }}>{sec.label}</div>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {sec.items.map((it) => (
                      <span key={it} className="rounded bg-white/5 px-2 py-1 text-[11px] text-white/70">{it}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* projects */}
      <section className="relative overflow-hidden px-6 py-12">
        <Ghost>PROJECTS</Ghost>
        <div className="relative">
          <Heading a="PROJECTS" b="SHOWCASE" />
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {content.work.map((w) => (
              <div key={w.title} className="rounded-xl border border-white/8 bg-white/[0.02] p-4">
                <div className="text-sm font-bold">{w.title}</div>
                <div className="mt-1 inline-block rounded bg-white/5 px-2 py-0.5 text-[10px] text-white/50">{w.tag}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* let's work together */}
      <section className="relative overflow-hidden px-6 py-14">
        <div className="relative rounded-2xl border border-white/10 p-8 text-center" style={{ background: `radial-gradient(circle at 50% 0%, ${red}22, transparent)` }}>
          <Heading a="LET'S WORK" b="TOGETHER" />
          <p className="mx-auto mt-3 max-w-sm text-sm text-white/55">
            Have a project in mind? Let&apos;s build something reliable together.
          </p>
          <span className="mt-5 inline-flex items-center gap-2 rounded-md px-5 py-2.5 text-xs font-bold text-white" style={{ background: red }}>
            SEND MESSAGE <ArrowRight size={13} />
          </span>
        </div>
      </section>

      <footer className="border-t border-white/8 px-6 py-5 text-center text-[11px] uppercase tracking-widest text-white/30">
        {sample.name}
      </footer>
    </div>
  )
}
