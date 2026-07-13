/**
 * A tasteful profile-photo placeholder: a soft gradient with a centered
 * head-and-shoulders silhouette, so empty photo slots read as "your photo
 * goes here" instead of looking blank. Fills its container.
 */
export default function ProfilePhoto({
  className = '',
  style,
  radius = 16,
  bg = 'linear-gradient(160deg, #d8d8e0, #b9b9c6)',
  silhouette = 'rgba(255,255,255,0.7)',
  ring,
}: {
  className?: string
  style?: React.CSSProperties
  radius?: number | string
  bg?: string
  silhouette?: string
  ring?: string
}) {
  return (
    <div
      className={`relative flex items-end justify-center overflow-hidden ${className}`}
      style={{ borderRadius: radius, background: bg, boxShadow: ring ? `inset 0 0 0 2px ${ring}` : undefined, ...style }}
    >
      <svg viewBox="0 0 100 100" className="h-[78%] w-[78%]" preserveAspectRatio="xMidYMax meet" aria-hidden>
        <circle cx="50" cy="34" r="19" fill={silhouette} />
        <path d="M16 100 C16 72, 84 72, 84 100 Z" fill={silhouette} />
      </svg>
    </div>
  )
}
