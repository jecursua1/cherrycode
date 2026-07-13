import { Template } from '@/lib/templates'
import { ArrowRight, Star } from 'lucide-react'
import ProfilePhoto from './ProfilePhoto'

/**
 * Faithful recreation of the Jane customer-support VA portfolio:
 * soft blue-gradient canvas, blue accent, split hero, services grid,
 * "Strengths that drive real results" bars, tools grid, impact timeline,
 * recent-work cards, a testimonial, and a contact closer. Placeholder name.
 */
export default function ConciergeDesign({ template }: { template: Template }) {
  const { sample, content } = template
  const blue = '#4f6ef7'
  const strengths = [
    ['Communication Skills', 95], ['Time Management', 90], ['Attention to Detail', 92],
    ['Customer Service', 96], ['Multitasking', 88], ['Problem Solving', 90],
  ] as const

  const Head = ({ a, b }: { a: string; b: string }) => (
    <h2 className="text-center text-2xl font-extrabold">
      {a} <span style={{ color: blue }}>{b}</span>
    </h2>
  )

  return (
    <div style={{ background: '#f4f6fc', color: '#1a2440' }} className="font-sans">
      {/* nav */}
      <nav className="flex items-center justify-between px-6 py-4 text-xs">
        <span className="font-bold">{sample.name}</span>
        <div className="hidden gap-5 text-[#6b7799] sm:flex"><span>Home</span><span>About</span><span>Services</span><span>Contact</span></div>
        <span className="rounded-full px-3 py-1.5 font-semibold text-white" style={{ background: blue }}>Hire Me</span>
      </nav>

      {/* hero */}
      <section className="relative grid items-center gap-8 overflow-hidden px-6 py-12 sm:grid-cols-2">
        <div className="pointer-events-none absolute -left-16 top-0 h-56 w-56 rounded-full" style={{ background: `${blue}22`, filter: 'blur(50px)' }} />
        <div className="relative">
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#6b7799]">Virtual Assistant</span>
          <h1 className="mt-2 font-extrabold leading-tight" style={{ fontSize: 38 }}>
            {sample.name.split(' ').slice(0, -1).join(' ')} <span style={{ color: blue }}>{sample.name.split(' ').slice(-1)}</span>
          </h1>
          <p className="mt-3 max-w-md text-sm text-[#4a5578]">
            Specialized in customer support, administrative tools, and social media management. {content.heroSub}
          </p>
          <div className="mt-5 flex gap-6">
            {content.stats.map((s) => (
              <div key={s.label}><div className="font-extrabold" style={{ fontSize: 20, color: blue }}>{s.value}</div><div className="text-[10px] text-[#8a95b5]">{s.label}</div></div>
            ))}
          </div>
          <div className="mt-5 flex gap-2">
            <span className="rounded-full px-4 py-2 text-xs font-bold text-white" style={{ background: blue }}>Hire Me</span>
            <span className="rounded-full border px-4 py-2 text-xs font-semibold" style={{ borderColor: '#cdd6ee' }}>View Services</span>
            <span className="rounded-full border px-4 py-2 text-xs font-semibold" style={{ borderColor: '#cdd6ee' }}>Download CV</span>
          </div>
        </div>
        <ProfilePhoto className="relative mx-auto h-64 w-56" bg="linear-gradient(160deg,#c94a4a,#8a2f2f)" silhouette="rgba(255,255,255,0.8)" />
      </section>

      {/* about */}
      <section className="px-6 py-12">
        <Head a="A passion for" b="helping businesses thrive" />
        <div className="mx-auto mt-6 grid max-w-3xl items-center gap-6 sm:grid-cols-[auto_1fr]">
          <ProfilePhoto className="mx-auto h-40 w-32" bg="linear-gradient(160deg,#c94a4a,#8a2f2f)" silhouette="rgba(255,255,255,0.8)" />
          <div>
            <p className="text-sm leading-relaxed text-[#4a5578]">{content.about}</p>
            <div className="mt-4 grid grid-cols-2 gap-3">
              {content.stats.map((s) => (
                <div key={s.label} className="rounded-xl bg-white p-3 shadow-sm"><div className="font-extrabold" style={{ color: blue }}>{s.value}</div><div className="text-[11px] text-[#8a95b5]">{s.label}</div></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* services */}
      <section className="px-6 py-12">
        <Head a="Professional services" b="tailored for you" />
        <div className="mx-auto mt-6 grid max-w-4xl gap-3 sm:grid-cols-4">
          {content.services.map((s) => (
            <div key={s.title} className="rounded-2xl bg-white p-4 shadow-sm">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg text-white" style={{ background: blue }}>♦</div>
              <div className="mt-3 text-sm font-bold">{s.title}</div>
              <div className="mt-1 text-xs text-[#8a95b5]">{s.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* strengths */}
      <section className="px-6 py-12">
        <Head a="Strengths that drive" b="real results" />
        <div className="mx-auto mt-6 max-w-2xl space-y-3">
          {strengths.map(([label, val]) => (
            <div key={label}>
              <div className="flex justify-between text-xs"><span className="font-medium">{label}</span><span className="text-[#8a95b5]">{val}%</span></div>
              <div className="mt-1 h-2 rounded-full bg-[#e2e8f7]"><div className="h-2 rounded-full" style={{ width: `${val}%`, background: blue }} /></div>
            </div>
          ))}
        </div>
      </section>

      {/* tools */}
      <section className="px-6 py-12">
        <Head a="Tech-savvy with" b="trusted tools" />
        <div className="mx-auto mt-6 grid max-w-3xl grid-cols-3 gap-3 sm:grid-cols-6">
          {content.tools.map((t) => (
            <div key={t} className="rounded-xl bg-white p-3 text-center text-[11px] font-medium shadow-sm">{t}</div>
          ))}
        </div>
      </section>

      {/* recent work */}
      <section className="px-6 py-12">
        <Head a="Recent work that" b="made an impact" />
        <div className="mx-auto mt-6 grid max-w-4xl gap-3 sm:grid-cols-3">
          {content.work.slice(0, 3).map((w) => (
            <div key={w.title} className="rounded-2xl bg-white p-4 shadow-sm">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg text-white" style={{ background: blue }}>■</div>
              <div className="mt-3 text-sm font-bold">{w.title}</div>
              <div className="mt-1 inline-block rounded bg-[#eef2fd] px-2 py-0.5 text-[10px]" style={{ color: blue }}>{w.tag}</div>
            </div>
          ))}
        </div>
      </section>

      {/* testimonial */}
      <section className="px-6 py-12">
        <Head a="What clients" b="are saying" />
        <div className="mx-auto mt-6 max-w-lg rounded-2xl bg-white p-6 text-center shadow-sm">
          <div className="flex justify-center gap-0.5" style={{ color: '#f5b301' }}>{Array.from({ length: 5 }).map((_, i) => <Star key={i} size={13} fill="currentColor" />)}</div>
          <p className="mt-3 text-sm italic text-[#4a5578]">&ldquo;A trustworthy assistant who anticipates needs before I even ask. Has been a true asset.&rdquo;</p>
        </div>
      </section>

      {/* contact */}
      <section className="px-6 py-14">
        <div className="mx-auto max-w-lg rounded-2xl border p-8 text-center" style={{ borderColor: '#d6def5', background: 'linear-gradient(160deg,#eef2fd,#fff)' }}>
          <h2 className="text-2xl font-extrabold">Let&apos;s <span style={{ color: blue }}>Work Together</span></h2>
          <p className="mx-auto mt-2 max-w-sm text-sm text-[#6b7799]">I&apos;m ready to help your business stay organized, productive, and professional.</p>
          <span className="mt-5 inline-flex items-center gap-2 rounded-full px-6 py-3 text-xs font-bold text-white" style={{ background: blue }}>Send Message <ArrowRight size={14} /></span>
        </div>
      </section>

      <footer className="px-6 py-5 text-center text-[11px] text-white" style={{ background: '#101a33' }}>{sample.name} · Virtual Assistant &amp; Customer Support</footer>
    </div>
  )
}
