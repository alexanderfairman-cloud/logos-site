// The post a visitor came through (HQ's learning loop). A short link welcometologos.com/go/<code> sets this cookie, and the
// checkout buttons pass the code to Stripe as client_reference_id, so HQ can file the sale under that post.

export const POST_COOKIE = 'logos_post'

/** A post code as HQ makes them: lower case letters, digits and dashes. Anything else is null. */
export function cleanCode(raw: unknown): string | null {
  const c = String(raw ?? '').trim().toLowerCase()
  return /^[a-z0-9][a-z0-9-]{0,39}$/.test(c) ? c : null
}

/** In the browser: the code from the cookie, else from utm_content in the address (a visitor who came by HQ's own link). */
export function postCode(): string | null {
  if (typeof document === 'undefined') return null
  const kept = document.cookie.split('; ').find((p) => p.startsWith(`${POST_COOKIE}=`))
  return cleanCode(kept?.slice(POST_COOKIE.length + 1)) ?? cleanCode(new URLSearchParams(window.location.search).get('utm_content'))
}

/** A Stripe payment link with the post code added. Any other link, or no code, is left as it is. */
export function withPostCode(href: string, code: string | null): string {
  if (!code || !href.startsWith('https://buy.stripe.com/')) return href
  const url = new URL(href)
  url.searchParams.set('client_reference_id', code)
  return url.toString()
}
