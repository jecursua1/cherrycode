export type LayoutStyle = 'centered' | 'split' | 'sidebar' | 'card'

export interface Service {
  title: string
  desc: string
}

export interface WorkItem {
  title: string
  tag: string
}

export interface PricingTier {
  name: string
  price: string
  note?: string
}

export interface ExperienceItem {
  role: string
  org?: string
  period?: string
}

export interface SkillSector {
  label: string
  items: string[]
}

export interface Template {
  slug: string
  name: string
  tagline: string
  category: string
  bestFor: string[]
  layout: LayoutStyle
  vibe: string
  /** Link to the live reference site this design is based on (no name shown) */
  sourceUrl: string
  /** True when the source site blocked automated reading, so this is an approximation */
  approx?: boolean
  palette: {
    bg: string
    surface: string
    text: string
    muted: string
    accent: string
    accent2: string
  }
  sample: {
    name: string
    role: string
    initials: string
    location: string
  }
  content: {
    heroHeadline: string
    heroSub: string
    about: string
    services: Service[]
    work: WorkItem[]
    tools: string[]
    stats: { value: string; label: string }[]
    /** Optional real sections — rendered only when present */
    pricing?: PricingTier[]
    experience?: ExperienceItem[]
    skillSectors?: SkillSector[]
    processSteps?: string[]
    /** Decorative symbols some designs use as dividers/accents */
    decor?: string
    footerTagline?: string
  }
  features: string[]
  popular?: boolean
}

export const categories = [
  'All',
  'General VA',
  'Executive VA',
  'Social Media',
  'Customer Support',
  'Creative / Video',
  'Tech / Developer',
  'Marketing & SEO',
] as const

const SAMPLE_NAME = 'Taylor Swift'
const SAMPLE_INITIALS = 'TS'

export const templates: Template[] = [
  // ─────────────────────────────────────────────────────────────
  // Faithful designs — structure & content read from the live sites.
  // Sample persona uses a placeholder name (freelancers fill their own).
  // ─────────────────────────────────────────────────────────────
  {
    slug: 'terracotta',
    sourceUrl: 'https://ninspace.carrd.co/',
    name: 'Terracotta',
    tagline: 'Warm, earthy, and intentional — a minimalist content-creator look.',
    category: 'Social Media',
    bestFor: ['Social Media Manager', 'Content Creator', 'Video Editor'],
    layout: 'centered',
    vibe: 'Warm, earthy, intentional',
    palette: {
      bg: '#ece8bf',
      surface: '#f4efe0',
      text: '#3a2e22',
      muted: '#8a7a5f',
      accent: '#e6c65c',
      accent2: '#b8c0a0',
    },
    sample: {
      name: SAMPLE_NAME,
      role: 'Social Media Specialist & Content Creator',
      initials: SAMPLE_INITIALS,
      location: 'Philippines',
    },
    content: {
      heroHeadline: 'creating aesthetic, intentional content inspired by everyday moments.',
      heroSub: 'hi! i’m a Philippine-based social media specialist & content creator ◡̈',
      about:
        'i create aesthetic, intentional content inspired by everyday moments — from planning and curating feeds to editing short-form videos and designing graphics that feel warm, personal, and true to the brand.',
      services: [
        { title: 'Social Media Management', desc: 'content planning & scheduling, caption writing, basic analytics tracking, feed curation, community engagement.' },
        { title: 'Video Editing', desc: 'short-form edits, transitions/text overlays/syncing to music, hook + pacing optimization.' },
        { title: 'Graphics', desc: 'advance knowledge in canva and digital art.' },
      ],
      work: [
        { title: 'Feed Curation', tag: 'graphics' },
        { title: 'Short-form Edit', tag: 'video' },
        { title: 'Product Photography', tag: 'photo' },
        { title: 'Caption Writing', tag: 'copy' },
      ],
      tools: ['Canva', 'CapCut', 'Lightroom', 'Meta Suite'],
      stats: [
        { value: '★', label: 'services offered' },
        { value: '✴', label: 'collaborations' },
        { value: '◡̈', label: 'let’s connect' },
      ],
      decor: '⭑ ★ ⋆ ◡̈ ✴ ✦',
    },
    features: ['Centered minimal hero', 'Services list', 'Collaborations', 'Let’s connect'],
    popular: true,
  },
  {
    slug: 'clarity',
    sourceUrl: 'https://cristina-bonaga.netlify.app/',
    name: 'Clarity',
    tagline: 'Clean, light, and trustworthy — built for admin and exec VAs.',
    category: 'Executive VA',
    bestFor: ['Executive VA', 'Admin Support', 'Customer Service'],
    layout: 'split',
    vibe: 'Clean, professional, trustworthy',
    palette: {
      bg: '#f7f1e8',
      surface: '#ffffff',
      text: '#2b2420',
      muted: '#8a7a6a',
      accent: '#c17a54',
      accent2: '#3a3129',
    },
    sample: {
      name: SAMPLE_NAME,
      role: 'Virtual Assistant & Admin Support',
      initials: SAMPLE_INITIALS,
      location: 'Philippines · serves US clients',
    },
    content: {
      heroHeadline: 'Your Reliable Virtual Assistant for Everything Admin',
      heroSub:
        'I help busy US-based business owners and entrepreneurs stay organized, supported, and stress-free — so you can focus on what matters most.',
      about:
        'Detail-oriented VA with a background in tax prep, admissions, and customer support. I take the busywork off your plate — inboxes, calendars, CRMs, and data — with accuracy and clear communication you can count on.',
      services: [
        { title: 'Administrative Assistant', desc: 'Day-to-day admin, documents, and data entry. $5–$7/hr.' },
        { title: 'Customer Service Support', desc: 'Email, chat, and ticket support. $5–$7/hr.' },
        { title: 'Executive Assistant', desc: 'Calendar, inbox, and priority management. $7–$8/hr.' },
        { title: 'Tax Preparation Assistant', desc: 'TaxDome, Drake, and TaxSlayer support. $5–$8/hr.' },
      ],
      work: [
        { title: 'Calendar Management System', tag: 'Admin' },
        { title: 'Intercom Chat Support Workflow', tag: 'Support' },
        { title: 'TaxDome Client Workflow Setup', tag: 'Tax' },
        { title: 'Email Inbox Management', tag: 'Admin' },
      ],
      tools: ['Slack', 'Intercom', 'GoHighLevel', 'Salesforce', 'TaxDome', 'HubSpot', 'Airtable', 'Notion', 'ClickUp'],
      stats: [
        { value: '$5+', label: 'Starting /hr' },
        { value: '4', label: 'Core services' },
        { value: 'US', label: 'Clients served' },
      ],
      pricing: [
        { name: 'Starter', price: '$5–$8/hr', note: 'Hourly' },
        { name: 'Growth', price: '$120–$200', note: 'Weekly · 20–25 hrs' },
        { name: 'Full Support', price: '$650–$800', note: 'Monthly · 160 hrs' },
      ],
      experience: [
        { role: 'Tax Preparation Assistant' },
        { role: 'Admissions & CRM Coordinator' },
        { role: 'Customer Support Representative' },
        { role: 'Administrative Assistant' },
      ],
    },
    features: ['Split hero', 'Services & pricing', 'Experience', 'Contact form'],
    popular: true,
  },
  {
    slug: 'elegance',
    sourceUrl: 'https://ellaveluxellaiveva2026.netlify.app/',
    name: 'Élégance',
    tagline: 'Effortless, organized support with a premium, boutique feel.',
    category: 'General VA',
    bestFor: ['General VA', 'Executive VA', 'Designer'],
    layout: 'card',
    vibe: 'Elegant, premium, feminine',
    palette: {
      bg: '#fce7ee',
      surface: '#ffffff',
      text: '#4a2c3a',
      muted: '#b07a90',
      accent: '#ec4899',
      accent2: '#f9a8d4',
    },
    sample: {
      name: SAMPLE_NAME,
      role: 'Virtual Assistant',
      initials: SAMPLE_INITIALS,
      location: 'Davao, Philippines',
    },
    content: {
      heroHeadline: 'Helping Professionals Thrive With Effortless, Organized Support',
      heroSub:
        'A detail-obsessed virtual assistant blending organization with creative flair — so your business feels as polished as it runs.',
      about:
        'I help busy professionals reclaim their time with calm, reliable support and a designer’s eye. From inbox and calendar to beautiful brand assets, every detail is handled with care and a touch of elegance.',
      services: [
        { title: '📧 Email & Calendar Management', desc: 'I manage emails and calendars with precision and attention to detail.' },
        { title: '🎨 Graphic Design', desc: 'I create visually appealing designs that capture attention.' },
        { title: '📱 Social Media Management', desc: 'I manage social media accounts with strategic posting and consistent engagement.' },
      ],
      work: [
        { title: 'Brand Refresh Deck', tag: 'Design' },
        { title: 'Inbox System', tag: 'Admin' },
        { title: 'Instagram Rebrand', tag: 'Social' },
        { title: 'Launch Assets', tag: 'Design' },
      ],
      tools: ['ClickUp', 'Trello', 'Google Workspace', 'Canva', 'CapCut', 'Meta Business Suite', 'Buffer'],
      stats: [
        { value: '3', label: 'Core services' },
        { value: '$3+', label: 'Starting /hr' },
        { value: '5.0', label: 'Client reviews' },
      ],
      pricing: [
        { name: 'Starter', price: '$3/hr' },
        { name: 'Essential', price: '$5/hr' },
        { name: 'Premium', price: '$7/hr' },
      ],
      footerTagline: 'Where elegance meets efficiency',
      decor: '✦ 🌸 🌷 💌 ✨',
    },
    features: ['Card layout', 'Service reveals', 'Pricing tiers', 'Schedule an interview'],
    popular: true,
  },
  {
    slug: 'vertex',
    sourceUrl: 'https://www.radwanahamed.dev/',
    name: 'Vertex',
    tagline: 'A sophisticated, engineering-grade portfolio for developers.',
    category: 'Tech / Developer',
    bestFor: ['Software Engineer', 'Full-Stack Developer', 'Data / AI'],
    layout: 'split',
    vibe: 'Dark, technical, sophisticated',
    palette: {
      bg: '#0f172a',
      surface: '#1e293b',
      text: '#f1f5f9',
      muted: '#64748b',
      accent: '#e63946',
      accent2: '#06b6d4',
    },
    sample: {
      name: SAMPLE_NAME,
      role: 'Software Engineer',
      initials: SAMPLE_INITIALS,
      location: 'Remote',
    },
    content: {
      heroHeadline: 'Hi, I’m a Software Engineer',
      heroSub:
        '“The journey of a thousand miles begins with a single step.” — Lao Tzu. Building reliable, well-tested products front to back.',
      about:
        'I turn complex problems into maintainable systems, caring as much about code quality and data modeling as the experience users actually see — from React front-ends to APIs, data pipelines, and cloud deploys.',
      services: [
        { title: 'Full-Stack Development', desc: 'React and Next.js front-ends backed by solid APIs.' },
        { title: 'API & Backend', desc: 'FastAPI and Django services, designed to scale.' },
        { title: 'Data & Dashboards', desc: 'ETL pipelines, analytics, and real-time dashboards.' },
        { title: 'DevOps & Deployment', desc: 'Docker, CI/CD, and cloud deploys done right.' },
      ],
      work: [
        { title: 'ResumeForge — AI CV Builder', tag: 'Next.js 15' },
        { title: 'Real-time Financial Dashboard', tag: 'React' },
        { title: 'Healthcare KPI Monitoring', tag: 'Python' },
        { title: 'Smart Drone Traffic Analyzer', tag: 'AI' },
      ],
      tools: ['Python', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'FastAPI', 'PostgreSQL', 'Docker', 'AWS'],
      stats: [
        { value: '2.5yr+', label: 'Experience' },
        { value: '5', label: 'Skill sectors' },
        { value: '20+', label: 'Projects' },
      ],
      skillSectors: [
        { label: '01 · Languages', items: ['Python', 'JavaScript', 'SQL', 'Bash', 'Solidity', 'Rust'] },
        { label: '02 · Frameworks', items: ['React', 'Next.js', 'FastAPI', 'Django', 'PyTorch', 'TensorFlow'] },
        { label: '03 · Databases & Cloud', items: ['PostgreSQL', 'MongoDB', 'Supabase', 'AWS', 'Vercel'] },
        { label: '04 · Tools & DevOps', items: ['Docker', 'Git/GitHub', 'Linux', 'Power BI', 'Postman', 'Jira'] },
        { label: '05 · Fundamentals', items: ['OOP', 'Data Modeling', 'API Design', 'REST APIs', 'ETL', 'CI/CD'] },
      ],
      experience: [
        { role: 'Software Engineer', org: 'Tech Startup', period: 'Present' },
        { role: 'Operations & Data Administrator', org: 'Retail Company', period: 'Previous' },
      ],
    },
    features: ['Split hero + quote', 'Skill sectors', 'Work experience', 'Projects showcase'],
    popular: true,
  },
  {
    slug: 'craft',
    sourceUrl: 'https://dreicrafts.framer.website/',
    name: 'Craft',
    tagline: 'Light and playful for graphic artists and creatives.',
    category: 'Creative / Video',
    bestFor: ['Graphic Artist', 'Designer', 'Video Editor'],
    layout: 'card',
    vibe: 'Light, playful, creative',
    palette: {
      bg: '#0a0a0a',
      surface: '#141414',
      text: '#ffffff',
      muted: '#8a8a92',
      accent: '#2dd4bf',
      accent2: '#14b8a6',
    },
    sample: {
      name: SAMPLE_NAME,
      role: 'Graphic Artist | Video Editor',
      initials: SAMPLE_INITIALS,
      location: 'Philippines',
    },
    content: {
      heroHeadline: 'Hi! I’m a Graphic Artist & Video Editor',
      heroSub:
        'GRAPHIC ARTIST | VIDEO EDITOR — I create purposeful designs with clarity, creativity, and impact.',
      about:
        'I create purposeful designs with clarity, creativity, and impact. Over 5+ years of experience, and continuously improving. Think. Design. Create.',
      services: [
        { title: 'T-shirt Designs', desc: 'Bold, wearable graphics and shirt designs.' },
        { title: 'Invitation Cards', desc: 'Custom invitations for every occasion.' },
        { title: '3D Graphics', desc: 'Eye-catching 3D graphics and animations.' },
        { title: 'Logo Animations', desc: 'Animated logo reveals with personality.' },
      ],
      work: [
        { title: 'Shirt Design', tag: 'Design' },
        { title: 'Invitations', tag: 'Print' },
        { title: '3D Animations', tag: '3D' },
        { title: 'Logo Animations', tag: 'Motion' },
      ],
      tools: ['Photoshop', 'Illustrator', 'After Effects', 'Blender', 'Canva', 'CapCut'],
      stats: [
        { value: '5yr+', label: 'Experience' },
        { value: '4+', label: 'Craft types' },
        { value: '100%', label: 'Custom work' },
      ],
      processSteps: ['Think', 'Design', 'Create'],
    },
    features: ['Card layout', 'My Crafts showcase', 'Why work with me', 'My workflow'],
  },
  {
    slug: 'zenith',
    sourceUrl: 'https://zenith-va.web.app/',
    name: 'Zenith',
    tagline: 'A premium agency-style site that gets virtual assistants hired.',
    category: 'General VA',
    bestFor: ['Premium VA', 'Online Business Manager', 'VA Agency'],
    layout: 'split',
    vibe: 'Polished, premium, confident',
    palette: {
      bg: '#0a0e14',
      surface: '#121821',
      text: '#f0f4f8',
      muted: '#7a8699',
      accent: '#38d6e0',
      accent2: '#4f46e5',
    },
    sample: {
      name: SAMPLE_NAME,
      role: 'Premium Virtual Assistant',
      initials: SAMPLE_INITIALS,
      location: 'For virtual assistants',
    },
    content: {
      heroHeadline: 'A portfolio that wins clients while you sleep.',
      heroSub:
        'You bring your experience and the look you want. A portfolio site, CRM, and tools that make serious clients say yes.',
      about:
        'Two starting points — whether you’re an aspiring VA with no clients yet or an experienced VA outgrowing basic tools, a custom-built presence positions you as the obvious hire.',
      services: [
        { title: 'Portfolio website', desc: 'A fast, modern, custom-designed site that positions you as the obvious hire.' },
        { title: 'Client CRM', desc: 'Stop running your business out of a spreadsheet. A simple CRM tailored to how you work.' },
        { title: 'Custom application', desc: 'Have a specific tool or workflow in mind? Scope and build it.' },
      ],
      work: [
        { title: 'Aspiring VA', tag: 'Portfolio' },
        { title: 'Experienced VA', tag: 'Portfolio' },
        { title: 'Bookkeeper VA', tag: 'Portfolio' },
        { title: 'Social Media VA', tag: 'Portfolio' },
      ],
      tools: ['Custom design', 'Portfolio site', 'Client CRM', 'Booking tools', 'Dashboards'],
      stats: [
        { value: '4', label: 'Step process' },
        { value: '3', label: 'What we build' },
        { value: '∞', label: 'Custom, no templates' },
      ],
      processSteps: ['Tell us about you', 'Get your quote', 'We build it', 'Launch'],
    },
    features: ['Split hero', 'What we build', 'A taste of the range', 'How it works'],
    popular: true,
  },
  // ─────────────────────────────────────────────────────────────
  // APPROXIMATIONS — source sites blocked automated reading (403 / JS-only).
  // Design is a best-effort approximation of the role/style.
  // ─────────────────────────────────────────────────────────────
  {
    slug: 'devfolio',
    sourceUrl: 'https://www.johnlorden.site/',
    name: 'Devfolio',
    tagline: 'A sharp, code-inspired portfolio for developers and technical VAs.',
    category: 'Tech / Developer',
    bestFor: ['Web Developer', 'Tech VA', 'WordPress Specialist'],
    layout: 'sidebar',
    vibe: 'Dark, technical, precise',
    palette: {
      bg: '#ffffff',
      surface: '#f2fbf6',
      text: '#14181a',
      muted: '#6b7280',
      accent: '#16b866',
      accent2: '#0f9d58',
    },
    sample: {
      name: SAMPLE_NAME,
      role: 'Virtual Assistant & Web Developer',
      initials: SAMPLE_INITIALS,
      location: 'Philippines',
    },
    content: {
      heroHeadline: 'I build fast, clean websites that convert.',
      heroSub:
        'Virtual assistant and web developer skilled in HTML and CSS — helping founders ship polished, reliable sites.',
      about:
        'I turn ideas into working websites. With a background in HTML, CSS, and modern no-code tools, I handle everything from pixel-perfect layouts to bug fixes and ongoing maintenance.',
      services: [
        { title: 'Web Development', desc: 'Custom, responsive sites built to load fast and rank well.' },
        { title: 'WordPress & No-Code', desc: 'Webflow, WordPress, and Framer builds you can edit yourself.' },
        { title: 'Bug Fixes & Maintenance', desc: 'Keep your site secure, updated, and running smoothly.' },
        { title: 'Landing Pages', desc: 'High-converting pages for launches and campaigns.' },
      ],
      work: [
        { title: 'SaaS Marketing Site', tag: 'HTML/CSS' },
        { title: 'Coaching Landing Page', tag: 'Webflow' },
        { title: 'E-commerce Revamp', tag: 'WordPress' },
        { title: 'Portfolio Redesign', tag: 'HTML/CSS' },
      ],
      tools: ['HTML', 'CSS', 'JavaScript', 'WordPress', 'Webflow', 'Git', 'Figma'],
      stats: [
        { value: '40+', label: 'Sites shipped' },
        { value: '3s', label: 'Avg. load time' },
        { value: '5.0', label: 'Client rating' },
      ],
    },
    features: ['Sidebar navigation', 'Project grid', 'Tech stack badges', 'Contact form'],
  },
  {
    slug: 'momentum',
    sourceUrl: 'https://edderflores.com/',
    name: 'Momentum',
    tagline: 'Sleek and results-driven for marketing and automation VAs.',
    category: 'Marketing & SEO',
    bestFor: ['Marketing VA', 'SEO Specialist', 'Automation Specialist'],
    layout: 'split',
    vibe: 'Sleek, modern, results-driven',
    palette: {
      bg: '#f7f7fb',
      surface: '#ffffff',
      text: '#14142a',
      muted: '#6b6b80',
      accent: '#6d5efc',
      accent2: '#a78bfa',
    },
    sample: {
      name: SAMPLE_NAME,
      role: 'Automation & Marketing VA',
      initials: SAMPLE_INITIALS,
      location: 'Philippines',
    },
    content: {
      heroHeadline: 'Systems and marketing that compound your growth.',
      heroSub:
        'CRM, SEO, automation, and AI-powered workflows — turning scattered tools into a machine that runs itself.',
      about:
        'Part marketer, part systems builder. I connect your CRM, content, and campaigns into automated workflows that save hours and drive results — across SEO, digital marketing, automation & AI, web development, and content writing.',
      services: [
        { title: 'Marketing Automation', desc: 'Email sequences and funnels that run on autopilot.' },
        { title: 'SEO & Content', desc: 'Rank higher with research-backed content and on-page SEO.' },
        { title: 'CRM Setup', desc: 'Pipelines, tagging, and integrations done right.' },
        { title: 'AI Workflows', desc: 'Custom automations with AI to remove busywork.' },
      ],
      work: [
        { title: 'Lead Funnel Build', tag: 'Automation' },
        { title: 'SEO Content Engine', tag: 'SEO' },
        { title: 'CRM Migration', tag: 'CRM' },
        { title: 'AI Support Bot', tag: 'AI' },
      ],
      tools: ['GoHighLevel', 'Zapier', 'Make', 'Ahrefs', 'ChatGPT', 'HubSpot', 'Airtable'],
      stats: [
        { value: '3x', label: 'Avg. lead lift' },
        { value: '120h', label: 'Saved / mo' },
        { value: '15+', label: 'Systems built' },
      ],
    },
    features: ['Split hero', 'Automation showcase', 'Results stats', 'Book-a-call CTA'],
  },
  {
    slug: 'concierge',
    sourceUrl: 'https://janesantoss.netlify.app/',
    name: 'Concierge',
    tagline: 'Warm and dependable — a people-first look for support pros.',
    category: 'Customer Support',
    bestFor: ['Customer Support', 'Client Success', 'Chat Support'],
    layout: 'card',
    vibe: 'Warm, reliable, people-first',
    palette: {
      bg: '#f4f6fc',
      surface: '#ffffff',
      text: '#1a2440',
      muted: '#6b7799',
      accent: '#4f6ef7',
      accent2: '#22c55e',
    },
    sample: {
      name: SAMPLE_NAME,
      role: 'Virtual Assistant & Customer Support',
      initials: SAMPLE_INITIALS,
      location: 'Philippines',
    },
    content: {
      heroHeadline: 'Happy customers, handled with care.',
      heroSub:
        'Friendly, reliable customer support that protects your brand and turns questions into loyal, repeat customers.',
      about:
        'I’m the calm, helpful voice your customers remember. From inboxes to live chat, I resolve issues quickly and kindly — keeping response times low and satisfaction high.',
      services: [
        { title: 'Email & Chat Support', desc: 'Fast, warm replies across email and live chat.' },
        { title: 'Ticket Management', desc: 'Organized queues and on-time resolutions.' },
        { title: 'Order & Returns', desc: 'Smooth handling of orders, refunds, and issues.' },
        { title: 'Onboarding', desc: 'Guide new customers to their first win.' },
      ],
      work: [
        { title: 'Support Inbox Revamp', tag: 'Zendesk' },
        { title: 'Live Chat Rollout', tag: 'Intercom' },
        { title: 'FAQ Knowledge Base', tag: 'Docs' },
        { title: 'CSAT Turnaround', tag: 'Success' },
      ],
      tools: ['Zendesk', 'Intercom', 'Gorgias', 'Freshdesk', 'Slack', 'Shopify'],
      stats: [
        { value: '<2h', label: 'Avg. response' },
        { value: '97%', label: 'CSAT score' },
        { value: '10k+', label: 'Tickets solved' },
      ],
    },
    features: ['Card layout', 'Testimonials wall', 'FAQ block', 'Booking CTA'],
  },
  {
    slug: 'reel',
    sourceUrl: 'https://video-editing-portfolio-azure.vercel.app/',
    name: 'Reel',
    tagline: 'Cinematic and bold — built to show off video work.',
    category: 'Creative / Video',
    bestFor: ['Video Editor', 'YouTube Editor', 'Motion Designer'],
    layout: 'centered',
    vibe: 'Cinematic, bold, dynamic',
    palette: {
      bg: '#050507',
      surface: '#121218',
      text: '#ffffff',
      muted: '#9a9aa5',
      accent: '#22d3ee',
      accent2: '#f43f5e',
    },
    sample: {
      name: SAMPLE_NAME,
      role: 'Video Editor',
      initials: SAMPLE_INITIALS,
      location: 'Philippines',
    },
    content: {
      heroHeadline: 'Edits that keep people watching.',
      heroSub:
        'Short-form and long-form video editor crafting scroll-stopping cuts, clean motion, and stories that hold attention to the last second.',
      about:
        'Pacing, sound, and rhythm are everything. I edit reels, YouTube videos, and promos that feel effortless to watch — punchy hooks, seamless transitions, and color that pops.',
      services: [
        { title: 'Short-Form Editing', desc: 'Reels, TikToks, and Shorts built to go viral.' },
        { title: 'YouTube Editing', desc: 'Long-form edits with retention-first pacing.' },
        { title: 'Motion Graphics', desc: 'Titles, lower-thirds, and animated overlays.' },
        { title: 'Color Grading', desc: 'Cinematic looks that make footage shine.' },
      ],
      work: [
        { title: 'Brand Launch Reel', tag: 'Reels' },
        { title: 'YouTube Doc Edit', tag: 'YouTube' },
        { title: 'Product Promo', tag: 'Promo' },
        { title: 'Event Aftermovie', tag: 'Cinematic' },
      ],
      tools: ['Premiere Pro', 'After Effects', 'DaVinci Resolve', 'CapCut', 'Final Cut'],
      stats: [
        { value: '10M+', label: 'Views edited' },
        { value: '300+', label: 'Videos cut' },
        { value: '48h', label: 'Turnaround' },
      ],
    },
    features: ['Centered hero', 'Video showreel grid', 'Motion accents', 'Booking CTA'],
  },
]

export function getTemplate(slug: string) {
  return templates.find((t) => t.slug === slug)
}
