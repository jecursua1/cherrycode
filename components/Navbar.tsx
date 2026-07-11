'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Menu, X, Moon, Sun, Cherry } from 'lucide-react'
import { useTheme } from './ThemeProvider'

const links = [
  { label: 'Templates', href: '/templates' },
  { label: 'How it works', href: '/#how' },
  { label: 'Pricing', href: '/#pricing' },
  { label: 'FAQ', href: '/#faq' },
]

export default function Navbar() {
  const { theme, toggle } = useTheme()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'var(--bg-base)' : 'transparent',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
      }}
    >
      <nav className="container-x flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-display text-lg font-extrabold">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-cherry-600 to-cherry-400 text-white">
            <Cherry size={18} />
          </span>
          Cherry<span className="text-gradient">Code</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-secondary transition-colors hover:text-[var(--text-primary)]"
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="grid h-9 w-9 place-items-center rounded-full border transition-colors"
            style={{ borderColor: 'var(--border)' }}
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <Link href="/#pricing" className="btn-primary hidden md:inline-flex">
            Get started
          </Link>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
            className="grid h-9 w-9 place-items-center rounded-full border md:hidden"
            style={{ borderColor: 'var(--border)' }}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {open && (
        <div
          className="md:hidden"
          style={{ background: 'var(--bg-base)', borderTop: '1px solid var(--border)' }}
        >
          <div className="container-x flex flex-col gap-1 py-4">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-secondary hover:text-[var(--text-primary)]"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/#pricing"
              onClick={() => setOpen(false)}
              className="btn-primary mt-2 w-full"
            >
              Get started
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
