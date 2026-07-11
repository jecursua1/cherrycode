import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, email, role, template, message } = body ?? {}

    if (!name || !email) {
      return NextResponse.json({ error: 'Name and email are required.' }, { status: 400 })
    }

    const apiKey = process.env.RESEND_API_KEY
    const to = process.env.CONTACT_TO_EMAIL || 'hello@cherrycode.dev'

    // No API key configured (e.g. local dev) — log and succeed so the form works.
    if (!apiKey) {
      console.log('[CherryCode] New inquiry (email not configured):', {
        name,
        email,
        role,
        template,
        message,
      })
      return NextResponse.json({ ok: true })
    }

    const { Resend } = await import('resend')
    const resend = new Resend(apiKey)

    await resend.emails.send({
      from: 'CherryCode <onboarding@resend.dev>',
      to,
      replyTo: email,
      subject: `🍒 New portfolio inquiry from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Role / niche: ${role || '—'}`,
        `Template: ${template || '—'}`,
        '',
        'Message:',
        message || '—',
      ].join('\n'),
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[CherryCode] contact error:', err)
    return NextResponse.json({ error: 'Failed to send message.' }, { status: 500 })
  }
}
