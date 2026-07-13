import { Template } from '@/lib/templates'
import { Menu, Heart, Camera, Star, Cloud, MessageSquare, Instagram, Youtube } from 'lucide-react'
import ProfilePhoto from './ProfilePhoto'

/**
 * Faithful recreation of the Nin (Carrd) link-in-bio portfolio:
 * a butter-yellow canvas with a navy lower band, a cream two-column card
 * (bio + photo), pastel link buttons, and small social icons. Placeholder name.
 */
export default function TerracottaDesign({ template }: { template: Template }) {
  const { sample } = template
  const first = sample.name.split(' ')[0]

  const links = [
    { label: 'services offered', icon: Menu, bg: '#f5dea0', fg: '#6a5528' },
    { label: 'collaborations', icon: Heart, bg: '#cfe4f5', fg: '#3a5670' },
    { label: 'video-editing & product photography', icon: Camera, bg: '#b8c0a0', fg: '#3f4a2c' },
    { label: 'graphics & feed curation', icon: Star, bg: '#3a2e22', fg: '#f4efe0' },
  ]

  return (
    <div style={{ background: '#ece8bf' }} className="relative">
      {/* navy lower band */}
      <div className="absolute inset-x-0 bottom-0" style={{ height: '34%', background: '#1a1f38' }} />

      <div className="relative px-5 py-12 sm:px-10 sm:py-16">
        {/* cream card */}
        <div
          className="mx-auto grid max-w-4xl overflow-hidden rounded-[28px] sm:grid-cols-2"
          style={{ background: '#f4efe0', boxShadow: '0 30px 80px rgba(0,0,0,0.18)' }}
        >
          {/* left: bio + links */}
          <div className="p-7 sm:p-9">
            <div className="flex items-center gap-2">
              <span
                className="font-black"
                style={{ fontFamily: 'Georgia, serif', fontSize: 46, color: '#3a2e22' }}
              >
                {first}
              </span>
              <Star size={26} style={{ color: '#3a2e22' }} fill="currentColor" />
            </div>
            <div className="my-4 h-px w-full" style={{ background: '#3a2e2233' }} />
            <p className="text-sm font-medium" style={{ color: '#3a2e22' }}>
              Philippine-based social media specialist &amp; content creator .ᐟ
            </p>
            <p className="mt-3 text-sm italic" style={{ color: '#6a5a48' }}>
              creating aesthetic, intentional content inspired by everyday moments.
            </p>

            <div className="mt-6 space-y-3">
              {links.map((l) => (
                <div
                  key={l.label}
                  className="flex items-center justify-between rounded-2xl px-5 py-3.5 text-sm font-semibold"
                  style={{ background: l.bg, color: l.fg }}
                >
                  <span>{l.label} ⋆</span>
                  <l.icon size={16} />
                </div>
              ))}
            </div>
          </div>

          {/* right: photo + connect */}
          <div className="flex flex-col gap-5 p-7 sm:p-9">
            <ProfilePhoto
              className="flex-1"
              style={{ minHeight: 220 }}
              bg="linear-gradient(160deg, #d8cdb2, #b7a98f)"
              silhouette="rgba(255,255,255,0.7)"
            />
            <div className="h-px w-full" style={{ background: '#3a2e2233' }} />
            <div className="space-y-3">
              <div
                className="flex items-center justify-center gap-2 rounded-2xl border px-5 py-3.5 text-sm font-semibold"
                style={{ borderColor: '#3a2e2233', color: '#3a2e22' }}
              >
                <Cloud size={16} /> a little about me ✴
              </div>
              <div
                className="flex items-center justify-center gap-2 rounded-2xl border px-5 py-3.5 text-sm font-semibold"
                style={{ borderColor: '#3a2e2233', color: '#3a2e22' }}
              >
                <MessageSquare size={16} /> let&apos;s connect ◡̈
              </div>
            </div>
          </div>
        </div>

        {/* socials */}
        <div className="relative mt-8 flex justify-center gap-3">
          {[Instagram, MessageSquare, Youtube].map((Icon, i) => (
            <span
              key={i}
              className="flex h-9 w-9 items-center justify-center rounded-full"
              style={{ background: '#f4efe0', color: '#3a2e22' }}
            >
              <Icon size={15} />
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
