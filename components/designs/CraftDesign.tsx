import { Template } from '@/lib/templates'

/**
 * Faithful recreation of the Drei (Framer) graphic-artist portfolio:
 * near-black canvas with a teal glow orb hero, alternating craft rows,
 * a capabilities panel, a software row, and a "Think. Design. Create."
 * workflow closer over a teal footer glow. Placeholder name.
 */
export default function CraftDesign({ template }: { template: Template }) {
  const { sample, content } = template
  const first = sample.name.split(' ')[0]
  const accent = '#2dd4bf'

  return (
    <div style={{ background: '#0a0a0a', color: '#fff' }} className="font-sans">
      {/* nav */}
      <nav className="flex items-center justify-between px-6 py-4 text-xs text-white/70">
        <span className="font-bold text-white">{first.toLowerCase()}</span>
        <div className="hidden gap-6 sm:flex">
          <span>Home</span><span>About</span><span>Projects</span><span>Contact</span>
        </div>
      </nav>

      {/* hero with glow orb */}
      <section className="relative flex flex-col items-center px-6 py-20 text-center">
        <div
          className="pointer-events-none absolute"
          style={{
            width: 320, height: 320, borderRadius: '50%',
            background: `radial-gradient(circle, ${accent}55, transparent 65%)`,
            filter: 'blur(20px)',
          }}
        />
        <h1 className="relative font-extrabold" style={{ fontSize: 46 }}>
          Hi! I&apos;m {first}
        </h1>
        <div className="relative mt-2 text-xs tracking-[0.25em] text-white/70">
          GRAPHIC ARTIST&nbsp;&nbsp;|&nbsp;&nbsp;VIDEO EDITOR
        </div>
      </section>

      <div className="py-6 text-center text-sm text-white/60">Let&apos;s Dive Into My Crafts!</div>

      {/* alternating crafts */}
      <section className="space-y-10 px-6 py-10">
        {content.services.slice(0, 3).map((s, i) => (
          <div key={s.title} className="grid items-center gap-6 sm:grid-cols-2">
            <div className={i % 2 ? 'sm:order-2' : ''}>
              {i === 0 && (
                <span className="mb-3 inline-block rounded-md bg-white/10 px-3 py-1 text-[11px] font-semibold">
                  My Crafts
                </span>
              )}
              <div className="text-2xl font-bold">{s.title}</div>
            </div>
            <div
              className={`rounded-2xl ${i % 2 ? 'sm:order-1' : ''}`}
              style={{
                aspectRatio: '16/10',
                background: 'linear-gradient(160deg,#1a1a1a,#0d0d0d)',
                border: '1px solid rgba(255,255,255,0.06)',
              }}
            />
          </div>
        ))}
      </section>

      {/* capabilities */}
      <section className="px-6 py-14 text-center">
        <div className="text-xs text-white/50">Services?</div>
        <h2 className="mt-1 text-3xl font-extrabold text-white/85">I Got You Covered!</h2>
        <div className="mx-auto mt-6 max-w-2xl rounded-2xl border border-white/10 bg-white/[0.02] p-4 text-left">
          <div className="border-b border-white/10 pb-2 text-xs font-semibold text-white/70">Capabilities</div>
          {['Shirt Design', '3D Animations', 'Logo Animations', 'Invitations', 'And more upon request'].map((c) => (
            <div key={c} className="flex items-center justify-between border-b border-white/5 py-2.5 text-sm text-white/60">
              {c} <span className="text-white/30">+</span>
            </div>
          ))}
        </div>
      </section>

      {/* software & tools */}
      <section className="px-6 py-10 text-center">
        <div className="text-xs text-white/50">Software &amp; Tools</div>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-4">
          {content.tools.map((t) => (
            <span
              key={t}
              className="flex h-12 w-12 items-center justify-center rounded-lg text-[11px] font-bold"
              style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
            >
              {t.slice(0, 2)}
            </span>
          ))}
        </div>
      </section>

      {/* workflow */}
      <section className="px-6 py-14 text-center">
        <p className="mx-auto max-w-md text-sm text-white/50">{content.about}</p>
        <span className="mt-5 inline-block rounded-md bg-white/10 px-3 py-1 text-[11px] font-semibold">My Workflow</span>
        <h2 className="mt-3 text-3xl font-extrabold">Think. Design. Create.</h2>
        <p className="mx-auto mt-3 max-w-md text-sm text-white/50">
          I turn ideas into visuals through clear thinking, researching, crafting, and most definitely refining.
        </p>
        <div className="mt-6 flex justify-center gap-6 text-sm text-white/60">
          <span>About</span><span>Projects</span><span>Contact</span>
        </div>
      </section>

      {/* footer with teal glow */}
      <footer
        className="px-6 py-8"
        style={{ background: `linear-gradient(180deg, transparent, ${accent}18)` }}
      >
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row">
          <div>
            <div className="font-bold">{first.toLowerCase()}</div>
            <div className="text-[11px] tracking-widest text-white/40">GRAPHIC DESIGNER | VIDEO EDITOR</div>
          </div>
          <div className="flex gap-10 text-xs text-white/60">
            <div>
              <div className="mb-1 text-white/40">Pages</div>
              <div>Home</div><div>About</div><div>Projects</div>
            </div>
            <div>
              <div className="mb-1 text-white/40">Socials</div>
              <div>Instagram</div><div>Tiktok</div>
            </div>
          </div>
        </div>
        <div className="mt-6 text-[10px] text-white/30">© 2026 {sample.name}. All rights reserved.</div>
      </footer>
    </div>
  )
}
