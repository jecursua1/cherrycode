export type LayoutStyle = 'centered' | 'split' | 'sidebar' | 'card'

export interface Template {
  slug: string
  name: string
  tagline: string
  category: string
  bestFor: string[]
  layout: LayoutStyle
  vibe: string
  /** Preview palette used to render the mockup */
  palette: {
    bg: string
    surface: string
    text: string
    muted: string
    accent: string
    accent2: string
  }
  /** Sample persona shown inside the preview mockup */
  sample: {
    name: string
    role: string
    initials: string
  }
  features: string[]
  popular?: boolean
}

export const categories = [
  'All',
  'General VA',
  'Executive VA',
  'Social Media',
  'Bookkeeping',
  'Customer Support',
  'Content Writer',
  'Tech / Developer',
] as const

export const templates: Template[] = [
  {
    slug: 'aurora',
    name: 'Aurora',
    tagline: 'A bold, modern gradient portfolio that feels premium.',
    category: 'General VA',
    bestFor: ['General VA', 'Multi-skilled VA', 'Agencies'],
    layout: 'centered',
    vibe: 'Dark, vibrant, confident',
    palette: {
      bg: '#0b0713',
      surface: '#171226',
      text: '#efeaf7',
      muted: '#9b93b5',
      accent: '#8b5cf6',
      accent2: '#22d3ee',
    },
    sample: { name: 'Maria Santos', role: 'General Virtual Assistant', initials: 'MS' },
    features: ['Animated hero', 'Services grid', 'Tools marquee', 'Contact form'],
    popular: true,
  },
  {
    slug: 'minimal-mono',
    name: 'Minimal Mono',
    tagline: 'Clean, editorial, and distraction-free. Lets your work speak.',
    category: 'Executive VA',
    bestFor: ['Executive VA', 'Chief of Staff', 'Project Manager'],
    layout: 'split',
    vibe: 'Light, minimal, professional',
    palette: {
      bg: '#faf9f7',
      surface: '#ffffff',
      text: '#1c1a17',
      muted: '#6b6660',
      accent: '#111111',
      accent2: '#c0a062',
    },
    sample: { name: 'Andrea Cruz', role: 'Executive Virtual Assistant', initials: 'AC' },
    features: ['Split hero', 'Case studies', 'Timeline experience', 'Downloadable CV'],
    popular: true,
  },
  {
    slug: 'coral-warm',
    name: 'Coral Warm',
    tagline: 'Friendly and approachable — perfect for people-first roles.',
    category: 'Customer Support',
    bestFor: ['Customer Support', 'Client Success', 'Onboarding Specialist'],
    layout: 'card',
    vibe: 'Warm, welcoming, human',
    palette: {
      bg: '#fff6f1',
      surface: '#ffffff',
      text: '#3a241c',
      muted: '#9a7566',
      accent: '#f97316',
      accent2: '#fb7185',
    },
    sample: { name: 'Bea Reyes', role: 'Customer Support Specialist', initials: 'BR' },
    features: ['Photo hero', 'Testimonials wall', 'FAQ block', 'Booking CTA'],
  },
  {
    slug: 'studio-dark',
    name: 'Studio Dark',
    tagline: 'A creative-agency look for designers and social media pros.',
    category: 'Social Media',
    bestFor: ['Social Media Manager', 'Graphic Designer', 'Video Editor'],
    layout: 'sidebar',
    vibe: 'Dark, creative, edgy',
    palette: {
      bg: '#0c0c0e',
      surface: '#17171b',
      text: '#f4f4f5',
      muted: '#8b8b93',
      accent: '#e11d48',
      accent2: '#f59e0b',
    },
    sample: { name: 'Kyla Domingo', role: 'Social Media Manager', initials: 'KD' },
    features: ['Sidebar nav', 'Project grid', 'Reels showcase', 'Brand logos'],
    popular: true,
  },
  {
    slug: 'fresh-mint',
    name: 'Fresh Mint',
    tagline: 'Light, airy, and organized — built for numbers people.',
    category: 'Bookkeeping',
    bestFor: ['Bookkeeper', 'Admin VA', 'Data Entry Specialist'],
    layout: 'split',
    vibe: 'Light, calm, trustworthy',
    palette: {
      bg: '#f2fbf7',
      surface: '#ffffff',
      text: '#123028',
      muted: '#5f8478',
      accent: '#10b981',
      accent2: '#0ea5e9',
    },
    sample: { name: 'Grace Villanueva', role: 'Bookkeeping Virtual Assistant', initials: 'GV' },
    features: ['Stats hero', 'Software badges', 'Process steps', 'Contact form'],
  },
  {
    slug: 'editorial',
    name: 'Editorial',
    tagline: 'Typography-forward and elegant for writers and strategists.',
    category: 'Content Writer',
    bestFor: ['Content Writer', 'Copywriter', 'SEO Specialist'],
    layout: 'centered',
    vibe: 'Light, literary, refined',
    palette: {
      bg: '#fbfaf8',
      surface: '#ffffff',
      text: '#20201d',
      muted: '#736f66',
      accent: '#7c3aed',
      accent2: '#db2777',
    },
    sample: { name: 'Nadine Flores', role: 'Content Writer & Strategist', initials: 'NF' },
    features: ['Big type hero', 'Featured articles', 'Client quotes', 'Newsletter CTA'],
  },
  {
    slug: 'neon-tech',
    name: 'Neon Tech',
    tagline: 'A sleek, techy look for developers and technical VAs.',
    category: 'Tech / Developer',
    bestFor: ['Tech VA', 'Web Developer', 'Automation Specialist'],
    layout: 'sidebar',
    vibe: 'Dark, futuristic, sharp',
    palette: {
      bg: '#070b12',
      surface: '#0f1622',
      text: '#e6f0ff',
      muted: '#7d90a8',
      accent: '#22d3ee',
      accent2: '#a855f7',
    },
    sample: { name: 'Paolo Aquino', role: 'Automation & Tech VA', initials: 'PA' },
    features: ['Terminal hero', 'Tech stack grid', 'Project cards', 'GitHub link'],
  },
  {
    slug: 'soft-pastel',
    name: 'Soft Pastel',
    tagline: 'Gentle and personable — a favorite for new freelancers.',
    category: 'General VA',
    bestFor: ['General VA', 'Social Media Assistant', 'Beginner freelancers'],
    layout: 'card',
    vibe: 'Light, soft, friendly',
    palette: {
      bg: '#fdf4fb',
      surface: '#ffffff',
      text: '#331d2f',
      muted: '#8f6f88',
      accent: '#ec4899',
      accent2: '#8b5cf6',
    },
    sample: { name: 'Ella Mendoza', role: 'General Virtual Assistant', initials: 'EM' },
    features: ['Rounded cards', 'Skills chips', 'Mini gallery', 'Simple contact'],
  },
]

export function getTemplate(slug: string) {
  return templates.find((t) => t.slug === slug)
}
