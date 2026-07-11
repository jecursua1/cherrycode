import type { Metadata } from 'next'
import './globals.css'
import ThemeProvider from '@/components/ThemeProvider'

export const metadata: Metadata = {
  metadataBase: new URL('https://cherrycode.vercel.app'),
  title: 'CherryCode — Portfolio Websites for VAs & Freelancers',
  description:
    'CherryCode builds fast, beautiful portfolio websites for virtual assistants and freelancers in the Philippines and worldwide. Browse designs, pick your favorite, get hired.',
  keywords: [
    'virtual assistant portfolio',
    'freelancer portfolio website',
    'VA portfolio Philippines',
    'portfolio website builder',
    'CherryCode',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    title: 'CherryCode — Portfolio Websites for VAs & Freelancers',
    description:
      'Beautiful, done-for-you portfolio websites that help Filipino VAs and freelancers stand out and get hired.',
    type: 'website',
    url: 'https://cherrycode.vercel.app',
    siteName: 'CherryCode',
  },
}

const orgJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'CherryCode',
  url: 'https://cherrycode.vercel.app',
  description:
    'CherryCode builds portfolio websites for virtual assistants and freelancers.',
  slogan: 'Portfolio websites that get you hired.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
