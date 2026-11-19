import { NextResponse } from 'next/server'
import { cleanCode, POST_COOKIE } from '@/lib/post-code'

// A short link on the site's own address: welcometologos.com/go/<code>. It keeps the post's code in a first-party cookie
// for 90 days (the checkout buttons pass it to Stripe), then hands the visitor to HQ, which counts the click and sends
// them on to the page the link is for.
const HQ = (process.env.HQ_URL || 'https://hq-eta.vercel.app').replace(/\/$/, '')

export async function GET(req: Request, { params }: { params: Promise<{ code: string[] }> }) {
  const { code } = await params
  const c = cleanCode(code?.[0])
  if (!c) return NextResponse.redirect(new URL('/', req.url))
  const res = NextResponse.redirect(`${HQ}/go/logos/${c}${new URL(req.url).search}`, 302)
  res.cookies.set(POST_COOKIE, c, { path: '/', maxAge: 60 * 60 * 24 * 90, sameSite: 'lax', secure: process.env.NODE_ENV === 'production' })
  return res
}
