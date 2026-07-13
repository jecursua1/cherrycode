import { Template } from '@/lib/templates'
import ProfilePhoto from './ProfilePhoto'

const script = '"Brush Script MT", "Segoe Script", cursive'
const serif = 'Georgia, serif'

/**
 * Faithful recreation of the Veluxe Ellaive premium VA portfolio:
 * blush-pink canvas, script wordmark, "My Introduction / About / Foundation /
 * Tools / Services / Pricing / Play a Melody (piano) / Reviews / Contact",
 * closing on "Where elegance meets efficiency". Placeholder name.
 */
export default function EleganceDesign({ template }: { template: Template }) {
  const { sample, content } = template
  const pink = '#ec4899'

  const Label = ({ children }: { children: React.ReactNode }) => (
    <div className="text-center">
      <div style={{ fontFamily: script, fontSize: 30, color: pink }}>{children} ✦</div>
    </div>
  )

  return (
    <div style={{ background: '#fce7ee', color: '#4a2c3a' }} className="font-sans">
      {/* nav */}
      <nav className="flex items-center justify-center gap-4 px-6 py-4 text-[11px] text-[#a5687e]">
        {['About', 'Tools', 'Services', 'Projects', 'Pricing', 'Reviews', 'Contact'].map((n) => <span key={n}>{n}</span>)}
      </nav>

      {/* hero */}
      <section className="px-6 py-14 text-center">
        <div style={{ fontFamily: script, fontSize: 52, color: pink }}>{sample.name}</div>
        <p className="mx-auto mt-3 max-w-md text-sm" style={{ fontFamily: serif }}>{content.heroHeadline}</p>
        <span className="mt-5 inline-block rounded-full px-6 py-2.5 text-xs font-bold text-white" style={{ background: pink }}>
          ✦ Book an Interview ✦
        </span>
      </section>

      {/* about */}
      <section className="px-6 py-12">
        <Label>About Me</Label>
        <div className="mx-auto mt-6 grid max-w-2xl items-center gap-6 sm:grid-cols-[auto_1fr]">
          <ProfilePhoto className="mx-auto h-36 w-28" bg="linear-gradient(160deg,#f9c9dd,#f4a9c6)" silhouette="rgba(255,255,255,0.85)" />
          <div>
            <h3 style={{ fontFamily: serif, fontSize: 22, color: pink }}>Hello, I&apos;m {sample.name.split(' ')[0]}</h3>
            <p className="mt-2 text-sm leading-relaxed text-[#6a4a58]">{content.about}</p>
          </div>
        </div>
      </section>

      {/* foundation cards */}
      <section className="px-6 py-12">
        <Label>My Foundation</Label>
        <div className="mx-auto mt-6 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
          {['Vision', 'Mission', 'Goal', 'Values'].map((f) => (
            <div key={f} className="rounded-xl py-10 text-center text-sm font-semibold" style={{ background: '#f6efe0', color: '#8a6a4a' }}>{f}</div>
          ))}
        </div>
      </section>

      {/* tools */}
      <section className="px-6 py-12">
        <Label>Tools I Use</Label>
        <div className="mx-auto mt-6 flex max-w-2xl flex-wrap justify-center gap-3">
          {content.tools.map((t) => (
            <span key={t} className="flex h-11 items-center rounded-full bg-white px-4 text-xs font-medium shadow-sm">{t}</span>
          ))}
        </div>
      </section>

      {/* services */}
      <section className="px-6 py-12">
        <Label>My Services</Label>
        <div className="mx-auto mt-6 grid max-w-2xl gap-3 sm:grid-cols-3">
          {content.services.map((s) => (
            <div key={s.title} className="rounded-2xl bg-white p-5 text-center shadow-sm">
              <div className="text-2xl">{s.title.match(/^\p{Emoji}/u)?.[0] || '✦'}</div>
              <div className="mt-2 text-sm font-bold">{s.title.replace(/^\P{L}+/u, '')}</div>
              <div className="mt-1 text-xs text-[#8a6a78]">{s.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* pricing */}
      {content.pricing && (
        <section className="px-6 py-12">
          <Label>Pricing Plans</Label>
          <div className="mx-auto mt-6 grid max-w-lg grid-cols-3 gap-3">
            {content.pricing.map((tier) => (
              <div key={tier.name} className="rounded-2xl bg-white p-5 text-center shadow-sm">
                <div className="text-xs font-semibold text-[#a5687e]">{tier.name}</div>
                <div className="mt-1 font-bold" style={{ fontFamily: serif, fontSize: 22, color: pink }}>{tier.price}</div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* play a melody — piano */}
      <section className="px-6 py-14 text-center" style={{ background: 'linear-gradient(160deg,#3a2438,#7a4a68)' }}>
        <div style={{ fontFamily: script, fontSize: 28, color: '#fbd3e4' }}>Play a Melody ✦</div>
        <div className="mx-auto mt-5 flex max-w-sm justify-center">
          <div className="relative flex">
            {Array.from({ length: 10 }).map((_, i) => (
              <div key={i} className="h-24 w-6 rounded-b bg-white" style={{ marginLeft: i ? 1 : 0 }} />
            ))}
          </div>
        </div>
        <div className="mt-3 text-[11px] text-white/60">◭ Press a key to play.</div>
      </section>

      {/* reviews */}
      <section className="px-6 py-12">
        <Label>Client Reviews</Label>
        <div className="mx-auto mt-6 max-w-lg rounded-2xl bg-white p-6 text-center shadow-sm">
          <div className="text-xs text-[#a5687e]">★★★★★</div>
          <p className="mt-2 text-sm italic text-[#6a4a58]">&ldquo;Elegant, organized, and a joy to work with. Every detail handled beautifully.&rdquo;</p>
        </div>
      </section>

      {/* contact */}
      <section className="px-6 py-12 text-center">
        <Label>Contact Me</Label>
        <div className="mx-auto mt-6 flex max-w-md justify-center gap-2">
          {['FB', 'IG', 'IN'].map((s) => (
            <span key={s} className="flex h-10 w-10 items-center justify-center rounded-lg text-xs font-bold text-white" style={{ background: pink }}>{s}</span>
          ))}
        </div>
      </section>

      <footer className="px-6 py-6 text-center" style={{ background: '#3a2438' }}>
        <div style={{ fontFamily: script, fontSize: 22, color: '#fbd3e4' }}>{content.footerTagline}</div>
        <div className="mt-1 text-[11px] text-white/40">© {sample.name}</div>
      </footer>
    </div>
  )
}
