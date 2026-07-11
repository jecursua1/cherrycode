# CherryCode 🍒

Portfolio websites for virtual assistants and freelancers — in the Philippines and worldwide.

CherryCode is a marketing + template-gallery website. Freelancers browse portfolio
designs, pick their favorite, and CherryCode builds and launches it for them.

## Stack

- **Next.js** (App Router) + **TypeScript**
- **Tailwind CSS** for styling
- **framer-motion** for animation
- **lucide-react** for icons
- **Resend** for the contact form (optional)
- Deploy on **Vercel**

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Pages

- `/` — landing page (hero, how it works, featured templates, pricing, testimonials, FAQ, contact)
- `/templates` — browsable template gallery with category filters
- `/templates/[slug]` — individual template preview + details

## Templates

Template data lives in [`lib/templates.ts`](lib/templates.ts). Each template renders a
live mini-preview via [`components/TemplatePreview.tsx`](components/TemplatePreview.tsx)
using its own palette and layout style (`centered` / `split` / `sidebar` / `card`).
Add a new template by appending an entry to the `templates` array.

## Contact form

The `/api/contact` route emails inquiries via Resend. Set these env vars (see
`.env.example`) to enable delivery:

```
RESEND_API_KEY=your_key
CONTACT_TO_EMAIL=hello@cherrycode.dev
```

Without a key, the form still works locally and logs inquiries to the server console.

## Deploy

Push to GitHub and import the repo into Vercel. Add the env vars in the Vercel
dashboard. That's it.
