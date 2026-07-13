import { Template } from '@/lib/templates'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import ProfilePhoto from './ProfilePhoto'

/**
 * Faithful recreation of the John Lorden multimedia-designer portfolio:
 * clean light canvas, green accent, split hero with a photo collage, a green
 * skills marquee, stat row, work grid, "I make things look good & work
 * better", social stats, a green CTA, and a dark-green footer. Placeholder name.
 */
export default function DevfolioDesign({ template }: { template: Template }) {
  const { sample, content } = template
  const green = '#16b866'
  const marquee = ['UI/UX', 'Brand Identity', 'Motion Design', 'Social Media', 'Video Editing', 'Web Design']

  return (
    <div style={{ background: '#ffffff', color: '#14181a' }} className="font-sans">
      {/* nav */}
      <nav className="flex items-center justify-between px-6 py-4 text-xs">
        <span className="flex items-center gap-1.5 font-bold">
          <span className="flex h-5 w-5 items-center justify-center rounded-full text-[10px] text-white" style={{ background: green }}>◆</span>
          {sample.name}.
        </span>
        <div className="hidden gap-5 text-[#6b7280] sm:flex"><span>Home</span><span>Works</span><span>Services</span><span>About</span><span>Contact</span></div>
        <span className="rounded-full px-3 py-1.5 font-semibold text-white" style={{ background: green }}>Hire Me</span>
      </nav>

      {/* hero */}
      <section className="relative grid items-center gap-8 overflow-hidden px-6 py-12 sm:grid-cols-2" style={{ background: 'linear-gradient(160deg,#f2fbf6,#fff)' }}>
        <div>
          <span className="text-[11px] font-bold uppercase tracking-widest" style={{ color: green }}>Hey You!</span>
          <h1 className="mt-2 font-extrabold leading-[1.05]" style={{ fontSize: 46 }}>
            {sample.name.split(' ')[0]}<br />{sample.name.split(' ')[1]}<br /><span style={{ color: green }}>Designer</span>
          </h1>
          <p className="mt-4 max-w-sm text-sm text-[#5a6470]">
            I&apos;m a freelance multimedia designer and IT student, working with international and domestic clients.
          </p>
          <div className="mt-5 flex gap-3">
            <span className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-bold text-white" style={{ background: green }}>My Resume</span>
            <span className="inline-flex items-center gap-1 rounded-full border px-5 py-2.5 text-xs font-semibold" style={{ borderColor: '#cfe6d8' }}>View my works <ArrowUpRight size={13} /></span>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {[0, 1, 2].map((i) => (
            <ProfilePhoto key={i} radius={12} style={{ aspectRatio: '3/4' }} bg="linear-gradient(160deg,#d6efe0,#bfe3cf)" silhouette="rgba(255,255,255,0.8)" />
          ))}
        </div>
      </section>

      {/* green marquee */}
      <div className="flex flex-wrap gap-6 px-6 py-3 text-xs font-semibold text-white" style={{ background: green }}>
        {marquee.concat(marquee).map((m, i) => <span key={i} className="whitespace-nowrap">◆ {m}</span>)}
      </div>

      {/* stats */}
      <section className="flex justify-center gap-12 px-6 py-8 text-center">
        {[['5+', 'Projects Done'], ['5+', 'Happy Clients'], ['1 yrs', 'Experience']].map(([v, l]) => (
          <div key={l}><div className="font-extrabold" style={{ fontSize: 26 }}>{v}</div><div className="text-[10px] text-[#8a95a0]">{l}</div></div>
        ))}
      </section>

      {/* certifications */}
      <section className="px-6 py-10">
        <h2 className="text-2xl font-extrabold">Certifications &amp; <span style={{ color: green }}>Trainings</span></h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          {['Introduction to Visual Graphic Design', 'National Certificate II – Computer Systems Servicing', 'UI/UX Design Fundamentals'].map((c) => (
            <div key={c} className="rounded-xl border p-4 text-sm" style={{ borderColor: '#e6ece8' }}>
              <div className="text-[10px] font-semibold" style={{ color: green }}>CERTIFICATE</div>
              <div className="mt-1 font-medium">{c}</div>
            </div>
          ))}
        </div>
      </section>

      {/* services */}
      <section className="px-6 py-10">
        <h2 className="text-2xl font-extrabold">Services &amp; <span style={{ color: green }}>Expertise</span></h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {content.services.map((s) => (
            <div key={s.title} className="rounded-xl border bg-white p-5" style={{ borderColor: '#e6ece8' }}>
              <div className="text-sm font-bold">{s.title}</div>
              <div className="mt-1 text-xs text-[#8a95a0]">{s.desc}</div>
              <div className="mt-2 flex items-center gap-1 text-xs font-semibold" style={{ color: green }}>Learn more <ArrowRight size={12} /></div>
            </div>
          ))}
        </div>
      </section>

      {/* selected work */}
      <section className="px-6 py-10">
        <h2 className="text-2xl font-extrabold">Selected <span style={{ color: green }}>Work</span></h2>
        <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {content.work.concat(content.work).slice(0, 6).map((w, i) => (
            <div key={i} className="overflow-hidden rounded-xl border" style={{ borderColor: '#e6ece8' }}>
              <div style={{ aspectRatio: '4/3', background: 'linear-gradient(160deg,#dff0e7,#c6e6d3)' }} />
              <div className="p-3"><div className="text-xs font-bold">{w.title}</div><div className="text-[10px] text-[#8a95a0]">{w.tag}</div></div>
            </div>
          ))}
        </div>
      </section>

      {/* about strip */}
      <section className="grid items-center gap-6 px-6 py-12 sm:grid-cols-[auto_1fr]">
        <ProfilePhoto className="mx-auto h-40 w-36" bg="linear-gradient(160deg,#d6efe0,#bfe3cf)" silhouette="rgba(255,255,255,0.8)" />
        <div>
          <h2 className="text-2xl font-extrabold">I make things look<br />good &amp; work better.</h2>
          <p className="mt-3 max-w-md text-sm text-[#5a6470]">{content.about}</p>
        </div>
      </section>

      {/* social stats */}
      <section className="px-6 py-10">
        <h2 className="text-xl font-extrabold">Social channels &amp; <span style={{ color: green }}>stats</span></h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          {[['Instagram', '800+'], ['Tiktok', '5.3k+'], ['Facebook', '3.7k+']].map(([n, v]) => (
            <div key={n} className="rounded-xl border p-4" style={{ borderColor: '#e6ece8' }}><div className="text-xs text-[#8a95a0]">{n}</div><div className="mt-1 text-lg font-extrabold">{v}</div></div>
          ))}
        </div>
      </section>

      {/* green CTA */}
      <section className="px-6 py-12">
        <div className="rounded-2xl p-10 text-center" style={{ background: '#9fe0bb' }}>
          <h2 className="text-2xl font-extrabold text-[#0f3d28]">Ready to start your next project?</h2>
          <span className="mt-4 inline-block rounded-full bg-white px-5 py-2.5 text-xs font-bold" style={{ color: green }}>Start a Project →</span>
        </div>
      </section>

      {/* footer */}
      <footer className="px-6 py-10 text-white" style={{ background: '#0d2b1c' }}>
        <div className="text-[10px] font-semibold tracking-widest" style={{ color: green }}>READY TO COLLABORATE?</div>
        <h2 className="mt-2 text-2xl font-extrabold">Let&apos;s create something<br /><span style={{ color: green }}>extraordinary.</span></h2>
        <div className="mt-6 text-[10px] text-white/40">© 2026 {sample.name}. All rights reserved.</div>
      </footer>
    </div>
  )
}
