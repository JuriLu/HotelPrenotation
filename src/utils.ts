import DOMPurify from 'dompurify'

export function sanitizeHtml(html: string): string {
  return DOMPurify.sanitize(html)
}

export function sanitizeText(value: unknown): string {
  return DOMPurify.sanitize(String(value), { ALLOWED_TAGS: [], ALLOWED_ATTR: [] })
}

export function fmtDate(value: string): string {
  if (!value) return ''
  const [year, month, day] = value.split('-').map(Number)
  if (year === undefined || month === undefined || day === undefined) return ''
  const date = new Date(year, month - 1, day)
  if (Number.isNaN(date.getTime())) return ''
  return date.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export function todayIso(): string {
  return new Date().toISOString().slice(0, 10)
}

export function normalizeWhatsAppNumber(value: unknown): string {
  const digits = String(value).replace(/\D/g, '')
  if (!/^[1-9]\d{7,14}$/.test(digits)) {
    throw new Error('Invalid WhatsApp phone number.')
  }
  return digits
}

export function buildWhatsAppUrl(phoneNumber: unknown, message: string): string {
  const url = new URL(`https://wa.me/${normalizeWhatsAppNumber(phoneNumber)}`)
  url.searchParams.set('text', message)
  return url.toString()
}

export function stars(count: number): string {
  return Array.from({ length: count }, () => '<i data-lucide="star" class="star-icon"></i>').join('')
}
