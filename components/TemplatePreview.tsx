import { Template } from '@/lib/templates'

/**
 * Renders a miniature, self-contained portfolio mockup for a template using its
 * own palette + layout. Purely presentational (no theme variables) so each card
 * genuinely looks like a different portfolio design.
 */
export default function TemplatePreview({
  template,
  full = false,
}: {
  template: Template
  full?: boolean
}) {
  const p = template.palette
  const { sample } = template

  const Chip = ({ w }: { w: number }) => (
    <span
      className="inline-block rounded-full"
      style={{ width: w, height: 7, background: p.accent, opacity: 0.85 }}
    />
  )

  const Bar = ({ w, o = 0.35 }: { w: string; o?: number }) => (
    <span
      className="block rounded"
      style={{ width: w, height: 6, background: p.muted, opacity: o }}
    />
  )

  const Avatar = ({ size = 46 }: { size?: number }) => (
    <div
      className="flex items-center justify-center rounded-full font-bold"
      style={{
        width: size,
        height: size,
        fontSize: size * 0.34,
        color: '#fff',
        background: `linear-gradient(135deg, ${p.accent}, ${p.accent2})`,
      }}
    >
      {sample.initials}
    </div>
  )

  let body: React.ReactNode = null

  if (template.layout === 'centered') {
    body = (
      <div className="flex h-full flex-col items-center justify-center gap-3 px-6 text-center">
        <Avatar size={52} />
        <div
          className="font-display font-extrabold"
          style={{ color: p.text, fontSize: 18 }}
        >
          {sample.name}
        </div>
        <div style={{ color: p.accent, fontSize: 11, fontWeight: 600 }}>{sample.role}</div>
        <div className="flex flex-col items-center gap-1.5 pt-1">
          <Bar w="150px" />
          <Bar w="120px" />
        </div>
        <div className="mt-1 flex gap-2">
          <Chip w={30} />
          <Chip w={44} />
          <Chip w={26} />
        </div>
      </div>
    )
  } else if (template.layout === 'split') {
    body = (
      <div className="flex h-full items-center gap-5 px-6">
        <div className="flex flex-1 flex-col gap-2">
          <span
            style={{
              color: p.accent,
              fontSize: 9,
              fontWeight: 700,
              letterSpacing: 1.5,
            }}
          >
            {sample.role.toUpperCase()}
          </span>
          <div
            className="font-display font-extrabold leading-tight"
            style={{ color: p.text, fontSize: 20 }}
          >
            {sample.name}
          </div>
          <div className="flex flex-col gap-1.5 pt-1">
            <Bar w="90%" />
            <Bar w="75%" />
            <Bar w="80%" />
          </div>
          <div className="mt-2 flex gap-2">
            <span
              className="rounded-md px-3 py-1"
              style={{ background: p.accent, height: 16 }}
            />
            <span
              className="rounded-md px-3 py-1"
              style={{ border: `1px solid ${p.muted}`, opacity: 0.5, width: 46, height: 16 }}
            />
          </div>
        </div>
        <div
          className="flex h-[80%] w-[38%] items-center justify-center rounded-xl"
          style={{ background: p.surface, border: `1px solid ${p.muted}22` }}
        >
          <Avatar size={54} />
        </div>
      </div>
    )
  } else if (template.layout === 'sidebar') {
    body = (
      <div className="flex h-full">
        <div
          className="flex w-[30%] flex-col items-center gap-3 py-6"
          style={{ background: p.surface, borderRight: `1px solid ${p.muted}22` }}
        >
          <Avatar size={40} />
          <div className="flex w-full flex-col items-center gap-2 px-3">
            <Bar w="70%" o={0.5} />
            <Bar w="55%" o={0.3} />
            <Bar w="60%" o={0.3} />
            <Bar w="45%" o={0.3} />
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-2.5 px-5 py-6">
          <div
            className="font-display font-extrabold"
            style={{ color: p.text, fontSize: 17 }}
          >
            {sample.name}
          </div>
          <div style={{ color: p.accent, fontSize: 10, fontWeight: 600 }}>{sample.role}</div>
          <div className="mt-1 grid grid-cols-3 gap-2">
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="rounded-md"
                style={{
                  height: 22,
                  background: i % 2 === 0 ? `${p.accent}22` : `${p.accent2}22`,
                  border: `1px solid ${p.muted}22`,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    )
  } else {
    // card
    body = (
      <div className="flex h-full flex-col justify-center gap-3 px-6">
        <div className="flex items-center gap-3">
          <Avatar size={44} />
          <div className="flex flex-col gap-1">
            <div
              className="font-display font-extrabold"
              style={{ color: p.text, fontSize: 16 }}
            >
              {sample.name}
            </div>
            <div style={{ color: p.accent, fontSize: 10, fontWeight: 600 }}>{sample.role}</div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2.5">
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className="flex flex-col gap-1.5 rounded-xl p-3"
              style={{ background: p.surface, border: `1px solid ${p.muted}22` }}
            >
              <span
                className="rounded-full"
                style={{ width: 14, height: 14, background: i % 2 ? p.accent2 : p.accent }}
              />
              <Bar w="80%" />
              <Bar w="55%" o={0.25} />
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div
      className="relative overflow-hidden"
      style={{ background: p.bg, aspectRatio: full ? '16 / 10' : '16 / 11' }}
    >
      {/* faux browser chrome */}
      <div
        className="flex items-center gap-1.5 px-3"
        style={{
          height: 22,
          background: p.surface,
          borderBottom: `1px solid ${p.muted}22`,
        }}
      >
        <span className="h-2 w-2 rounded-full" style={{ background: '#ff5f57' }} />
        <span className="h-2 w-2 rounded-full" style={{ background: '#febc2e' }} />
        <span className="h-2 w-2 rounded-full" style={{ background: '#28c840' }} />
        <span
          className="ml-2 rounded px-2"
          style={{
            height: 11,
            fontSize: 7,
            lineHeight: '11px',
            color: p.muted,
            background: p.bg,
          }}
        >
          {sample.name.toLowerCase().replace(/\s+/g, '')}.cherrycode.dev
        </span>
      </div>
      <div style={{ height: 'calc(100% - 22px)' }}>{body}</div>
    </div>
  )
}
