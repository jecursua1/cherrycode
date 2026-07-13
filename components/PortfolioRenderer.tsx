import { Template } from '@/lib/templates'

/**
 * Renders a full, faithful portfolio page for a template using its own palette,
 * layout, and sample content. Purely presentational with inline styles (no theme
 * variables) so each template genuinely looks like its own live website.
 *
 * Shown inside a faux browser frame on the template detail page.
 */
export default function PortfolioRenderer({
  template,
  chrome = true,
}: {
  template: Template
  chrome?: boolean
}) {
  const p = template.palette
  const { sample, content } = template

  const domain = sample.name.toLowerCase().replace(/[^a-z]+/g, '') + '.com'

  return (
    <div style={{ background: p.bg, color: p.text }}>
      {/* faux browser chrome */}
      {chrome && (
        <div
          className="flex items-center gap-1.5 px-3"
          style={{ height: 30, background: p.surface, borderBottom: `1px solid ${p.muted}22` }}
        >
          <span className="h-2.5 w-2.5 rounded-full" style={{ background: '#ff5f57' }} />
          <span className="h-2.5 w-2.5 rounded-full" style={{ background: '#febc2e' }} />
          <span className="h-2.5 w-2.5 rounded-full" style={{ background: '#28c840' }} />
          <span
            className="ml-3 rounded px-3 py-0.5 text-[10px]"
            style={{ color: p.muted, background: p.bg }}
          >
            {domain}
          </span>
        </div>
      )}

      {/* nav */}
      <nav
        className="flex items-center justify-between px-6 py-4"
        style={{ borderBottom: `1px solid ${p.muted}18` }}
      >
        <span className="font-bold tracking-tight" style={{ fontSize: 15 }}>
          {sample.name.split(' ')[0]}
          <span style={{ color: p.accent }}>.</span>
        </span>
        <div className="hidden gap-5 text-xs sm:flex" style={{ color: p.muted }}>
          <span>About</span>
          <span>Services</span>
          <span>Work</span>
          <span>Contact</span>
        </div>
        <span
          className="rounded-full px-3 py-1.5 text-xs font-semibold"
          style={{ background: p.accent, color: pickReadable(p.accent) }}
        >
          Hire me
        </span>
      </nav>

      {/* hero */}
      <Hero template={template} />

      {/* stats */}
      <div
        className="grid grid-cols-3 gap-4 px-6 py-6"
        style={{ borderTop: `1px solid ${p.muted}14`, borderBottom: `1px solid ${p.muted}14` }}
      >
        {content.stats.map((s) => (
          <div key={s.label} className="text-center">
            <div className="font-extrabold" style={{ color: p.accent, fontSize: 22 }}>
              {s.value}
            </div>
            <div className="mt-0.5 text-[11px]" style={{ color: p.muted }}>
              {s.label}
            </div>
          </div>
        ))}
      </div>

      {/* about */}
      <section className="px-6 py-8">
        <SectionLabel color={p.accent}>About</SectionLabel>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed" style={{ color: p.muted }}>
          {content.about}
        </p>
      </section>

      {/* skill sectors (e.g. developer templates) */}
      {content.skillSectors && content.skillSectors.length > 0 && (
        <section className="px-6 py-8" style={{ background: p.surface }}>
          <SectionLabel color={p.accent}>Technical skills</SectionLabel>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {content.skillSectors.map((sector) => (
              <div
                key={sector.label}
                className="rounded-xl p-4"
                style={{ background: p.bg, border: `1px solid ${p.muted}20` }}
              >
                <div className="text-[11px] font-bold uppercase tracking-wide" style={{ color: p.accent2 }}>
                  {sector.label}
                </div>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {sector.items.map((it) => (
                    <span
                      key={it}
                      className="rounded-md px-2 py-1 text-[11px]"
                      style={{ background: `${p.accent}14`, color: p.text }}
                    >
                      {it}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* experience */}
      {content.experience && content.experience.length > 0 && (
        <section className="px-6 py-8">
          <SectionLabel color={p.accent}>Experience</SectionLabel>
          <div className="mt-4 space-y-2.5">
            {content.experience.map((e, i) => (
              <div
                key={`${e.role}-${i}`}
                className="flex items-center justify-between gap-4 rounded-xl px-4 py-3"
                style={{ background: p.surface, border: `1px solid ${p.muted}20` }}
              >
                <div>
                  <div className="text-sm font-semibold" style={{ color: p.text }}>
                    {e.role}
                  </div>
                  {e.org && (
                    <div className="text-xs" style={{ color: p.muted }}>
                      {e.org}
                    </div>
                  )}
                </div>
                {e.period && (
                  <span className="whitespace-nowrap text-[11px]" style={{ color: p.accent }}>
                    {e.period}
                  </span>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* services */}
      <section className="px-6 py-8" style={{ background: p.surface }}>
        <SectionLabel color={p.accent}>Services</SectionLabel>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {content.services.map((s, i) => (
            <div
              key={s.title}
              className="rounded-xl p-4"
              style={{ background: p.bg, border: `1px solid ${p.muted}20` }}
            >
              <div
                className="mb-2 flex h-8 w-8 items-center justify-center rounded-lg text-sm font-bold"
                style={{
                  background: `${i % 2 ? p.accent2 : p.accent}22`,
                  color: i % 2 ? p.accent2 : p.accent,
                }}
              >
                {i + 1}
              </div>
              <div className="font-semibold" style={{ fontSize: 14, color: p.text }}>
                {s.title}
              </div>
              <div className="mt-1 text-xs leading-relaxed" style={{ color: p.muted }}>
                {s.desc}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* pricing */}
      {content.pricing && content.pricing.length > 0 && (
        <section className="px-6 py-8">
          <SectionLabel color={p.accent}>Pricing</SectionLabel>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {content.pricing.map((tier, i) => (
              <div
                key={tier.name}
                className="rounded-xl p-4 text-center"
                style={{
                  background: i === 1 ? `${p.accent}12` : p.surface,
                  border: `1px solid ${i === 1 ? p.accent : `${p.muted}20`}`,
                }}
              >
                <div className="text-xs font-semibold uppercase tracking-wide" style={{ color: p.muted }}>
                  {tier.name}
                </div>
                <div className="mt-1.5 font-extrabold" style={{ color: p.accent, fontSize: 20 }}>
                  {tier.price}
                </div>
                {tier.note && (
                  <div className="mt-1 text-[11px]" style={{ color: p.muted }}>
                    {tier.note}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* work */}
      <section className="px-6 py-8">
        <SectionLabel color={p.accent}>Selected work</SectionLabel>
        <div className="mt-4 grid grid-cols-2 gap-3">
          {content.work.map((w, i) => (
            <div
              key={w.title}
              className="overflow-hidden rounded-xl"
              style={{ border: `1px solid ${p.muted}20` }}
            >
              <div
                className="flex h-16 items-center justify-center"
                style={{
                  background: `linear-gradient(135deg, ${p.accent}, ${p.accent2})`,
                  opacity: 0.9,
                }}
              >
                <span className="text-xs font-bold" style={{ color: pickReadable(p.accent) }}>
                  {w.tag}
                </span>
              </div>
              <div className="px-3 py-2.5" style={{ background: p.surface }}>
                <div className="text-xs font-semibold" style={{ color: p.text }}>
                  {w.title}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* tools */}
      <section className="px-6 py-8" style={{ background: p.surface }}>
        <SectionLabel color={p.accent}>Tools I use</SectionLabel>
        <div className="mt-3 flex flex-wrap gap-2">
          {content.tools.map((t) => (
            <span
              key={t}
              className="rounded-full px-3 py-1.5 text-xs font-medium"
              style={{ background: p.bg, color: p.muted, border: `1px solid ${p.muted}22` }}
            >
              {t}
            </span>
          ))}
        </div>
      </section>

      {/* process / workflow steps */}
      {content.processSteps && content.processSteps.length > 0 && (
        <section className="px-6 py-8">
          <SectionLabel color={p.accent}>How it works</SectionLabel>
          <div className="mt-4 grid gap-3" style={{ gridTemplateColumns: `repeat(${content.processSteps.length}, minmax(0, 1fr))` }}>
            {content.processSteps.map((step, i) => (
              <div
                key={step}
                className="rounded-xl p-3 text-center"
                style={{ background: p.surface, border: `1px solid ${p.muted}20` }}
              >
                <div
                  className="mx-auto mb-2 flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold"
                  style={{ background: p.accent, color: pickReadable(p.accent) }}
                >
                  {i + 1}
                </div>
                <div className="text-[11px] font-medium" style={{ color: p.text }}>
                  {step}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* contact CTA */}
      <section className="px-6 py-10 text-center">
        <div
          className="mx-auto max-w-lg rounded-2xl px-6 py-8"
          style={{ background: `linear-gradient(135deg, ${p.accent}, ${p.accent2})` }}
        >
          <div className="font-extrabold" style={{ fontSize: 18, color: pickReadable(p.accent) }}>
            Let&apos;s work together
          </div>
          <p className="mx-auto mt-2 max-w-sm text-xs" style={{ color: pickReadable(p.accent), opacity: 0.85 }}>
            Ready to take {sample.role.split(' ')[0].toLowerCase()} work off your plate? Let&apos;s talk.
          </p>
          <span
            className="mt-4 inline-block rounded-full px-5 py-2 text-xs font-bold"
            style={{ background: pickReadable(p.accent), color: p.accent }}
          >
            Book a call →
          </span>
        </div>
      </section>

      {/* footer */}
      <footer
        className="px-6 py-6 text-center"
        style={{ color: p.muted, borderTop: `1px solid ${p.muted}18` }}
      >
        {content.decor && (
          <div className="mb-2 text-sm tracking-widest" style={{ color: p.accent }}>
            {content.decor}
          </div>
        )}
        {content.footerTagline && (
          <div className="mb-1 text-xs font-medium" style={{ color: p.text }}>
            {content.footerTagline}
          </div>
        )}
        <div className="text-[11px]">
          © {sample.name} · {sample.location}
        </div>
      </footer>
    </div>
  )
}

function Hero({ template }: { template: Template }) {
  const p = template.palette
  const { sample, content } = template

  const Avatar = ({ size = 96 }: { size?: number }) => (
    <div
      className="flex flex-shrink-0 items-center justify-center rounded-full font-extrabold"
      style={{
        width: size,
        height: size,
        fontSize: size * 0.34,
        color: pickReadable(p.accent),
        background: `linear-gradient(135deg, ${p.accent}, ${p.accent2})`,
        boxShadow: `0 10px 40px ${p.accent}33`,
      }}
    >
      {sample.initials}
    </div>
  )

  const Eyebrow = () => (
    <span
      className="text-[11px] font-bold uppercase tracking-[0.2em]"
      style={{ color: p.accent }}
    >
      {sample.role}
    </span>
  )

  const Cta = () => (
    <div className="flex flex-wrap gap-3">
      <span
        className="rounded-full px-5 py-2.5 text-xs font-bold"
        style={{ background: p.accent, color: pickReadable(p.accent) }}
      >
        View my work
      </span>
      <span
        className="rounded-full px-5 py-2.5 text-xs font-semibold"
        style={{ border: `1px solid ${p.muted}55`, color: p.text }}
      >
        Download CV
      </span>
    </div>
  )

  // centered
  if (template.layout === 'centered') {
    return (
      <section className="flex flex-col items-center gap-4 px-6 py-12 text-center">
        <Avatar size={104} />
        <Eyebrow />
        <h1
          className="max-w-xl font-extrabold leading-tight tracking-tight"
          style={{ fontSize: 30, color: p.text }}
        >
          {content.heroHeadline}
        </h1>
        <p className="max-w-lg text-sm leading-relaxed" style={{ color: p.muted }}>
          {content.heroSub}
        </p>
        <div className="pt-1">
          <Cta />
        </div>
      </section>
    )
  }

  // sidebar
  if (template.layout === 'sidebar') {
    return (
      <section className="flex flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center">
        <div
          className="flex flex-col items-center gap-3 rounded-2xl px-6 py-6 text-center sm:w-1/3"
          style={{ background: p.surface, border: `1px solid ${p.muted}20` }}
        >
          <Avatar size={84} />
          <div className="font-bold" style={{ fontSize: 15, color: p.text }}>
            {sample.name}
          </div>
          <div className="text-[11px]" style={{ color: p.muted }}>
            {sample.location}
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-3">
          <Eyebrow />
          <h1
            className="font-extrabold leading-tight tracking-tight"
            style={{ fontSize: 28, color: p.text }}
          >
            {content.heroHeadline}
          </h1>
          <p className="max-w-md text-sm leading-relaxed" style={{ color: p.muted }}>
            {content.heroSub}
          </p>
          <div className="pt-1">
            <Cta />
          </div>
        </div>
      </section>
    )
  }

  // card
  if (template.layout === 'card') {
    return (
      <section className="px-6 py-10">
        <div
          className="flex flex-col items-center gap-4 rounded-3xl px-8 py-10 text-center"
          style={{ background: p.surface, border: `1px solid ${p.muted}20` }}
        >
          <Avatar size={100} />
          <Eyebrow />
          <h1
            className="max-w-xl font-extrabold leading-tight tracking-tight"
            style={{ fontSize: 28, color: p.text }}
          >
            {content.heroHeadline}
          </h1>
          <p className="max-w-lg text-sm leading-relaxed" style={{ color: p.muted }}>
            {content.heroSub}
          </p>
          <div className="pt-1">
            <Cta />
          </div>
        </div>
      </section>
    )
  }

  // split (default)
  return (
    <section className="flex flex-col gap-8 px-6 py-12 sm:flex-row sm:items-center">
      <div className="flex flex-1 flex-col gap-4">
        <Eyebrow />
        <h1
          className="font-extrabold leading-tight tracking-tight"
          style={{ fontSize: 30, color: p.text }}
        >
          {content.heroHeadline}
        </h1>
        <p className="max-w-md text-sm leading-relaxed" style={{ color: p.muted }}>
          {content.heroSub}
        </p>
        <div className="pt-1">
          <Cta />
        </div>
      </div>
      <div className="flex justify-center sm:w-2/5">
        <Avatar size={140} />
      </div>
    </section>
  )
}

function SectionLabel({ children, color }: { children: React.ReactNode; color: string }) {
  return (
    <div className="flex items-center gap-2">
      <span className="h-px w-6" style={{ background: color }} />
      <span className="text-[11px] font-bold uppercase tracking-[0.2em]" style={{ color }}>
        {children}
      </span>
    </div>
  )
}

/** Rough luminance check so we can pick readable text over an accent fill. */
function isColorDark(hex: string) {
  const c = hex.replace('#', '')
  if (c.length < 6) return true
  const r = parseInt(c.slice(0, 2), 16)
  const g = parseInt(c.slice(2, 4), 16)
  const b = parseInt(c.slice(4, 6), 16)
  const lum = (0.299 * r + 0.587 * g + 0.114 * b) / 255
  return lum < 0.5
}

function pickReadable(bgHex: string) {
  return isColorDark(bgHex) ? '#ffffff' : '#111111'
}
