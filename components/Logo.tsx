import Image from 'next/image'

/**
 * CherryCode wordmark. Swaps between the white (dark theme) and black (light theme)
 * variants purely via CSS on the [data-theme] attribute, so it works inside both
 * server and client components without a hook.
 *
 * Size is controlled by the height class passed via `className` (default h-11).
 * The images fill that height and keep their aspect ratio.
 */
export default function Logo({ className = 'h-11' }: { className?: string }) {
  return (
    <span className={`inline-flex items-center ${className}`}>
      <Image
        src="/cherrycode-white-logo.png"
        alt="CherryCode"
        width={2000}
        height={1112}
        priority
        className="logo-dark h-full w-auto"
      />
      <Image
        src="/cherrycode-black-logo.png"
        alt="CherryCode"
        width={2000}
        height={1112}
        priority
        className="logo-light h-full w-auto"
      />
    </span>
  )
}
