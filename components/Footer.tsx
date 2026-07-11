import Link from 'next/link'
import { Mail, Facebook, Linkedin } from 'lucide-react'
import Logo from './Logo'

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--border)' }}>
      <div className="container-x grid gap-10 py-14 md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <Link href="/" aria-label="CherryCode home" className="flex items-center">
            <Logo className="h-12" />
          </Link>
          <p className="mt-4 max-w-xs text-sm text-secondary">
            Beautiful portfolio websites for virtual assistants and freelancers. Built to help
            you stand out and get hired — from the Philippines to the world.
          </p>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-semibold">Explore</h4>
          <ul className="space-y-2 text-sm text-secondary">
            <li>
              <Link href="/templates" className="hover:text-[var(--text-primary)]">
                Browse templates
              </Link>
            </li>
            <li>
              <Link href="/#how" className="hover:text-[var(--text-primary)]">
                How it works
              </Link>
            </li>
            <li>
              <Link href="/#pricing" className="hover:text-[var(--text-primary)]">
                Pricing
              </Link>
            </li>
            <li>
              <Link href="/#faq" className="hover:text-[var(--text-primary)]">
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-semibold">Get in touch</h4>
          <ul className="space-y-2 text-sm text-secondary">
            <li>
              <a
                href="mailto:hello@cherrycode.dev"
                className="flex items-center gap-2 hover:text-[var(--text-primary)]"
              >
                <Mail size={15} /> hello@cherrycode.dev
              </a>
            </li>
          </ul>
          <div className="mt-4 flex gap-2">
            <a
              href="#"
              aria-label="Facebook"
              className="grid h-9 w-9 place-items-center rounded-full border transition-colors hover:text-cherry-500"
              style={{ borderColor: 'var(--border)' }}
            >
              <Facebook size={16} />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="grid h-9 w-9 place-items-center rounded-full border transition-colors hover:text-cherry-500"
              style={{ borderColor: 'var(--border)' }}
            >
              <Linkedin size={16} />
            </a>
          </div>
        </div>
      </div>
      <div
        className="container-x flex flex-col items-center justify-between gap-2 py-6 text-xs text-secondary sm:flex-row"
        style={{ borderTop: '1px solid var(--border)' }}
      >
        <span>© {new Date().getFullYear()} CherryCode. All rights reserved.</span>
        <span>Made with 🍒 for freelancers everywhere.</span>
      </div>
    </footer>
  )
}
