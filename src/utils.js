import DOMPurify from 'dompurify'

export function sanitizeHtml(html) {
  return DOMPurify.sanitize(html)
}

export function fmtDate(value) {
  if (!value) return ''
  const [year, month, day] = value.split('-').map(Number)
  return new Date(year, month - 1, day).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export function todayIso() {
  return new Date().toISOString().split('T')[0]
}

export function normalizeWhatsAppNumber(value) {
  const digits = String(value).replace(/\D/g, '')
  if (!/^[1-9]\d{7,14}$/.test(digits)) {
    throw new Error('Invalid WhatsApp phone number.')
  }
  return digits
}

export function buildWhatsAppUrl(phoneNumber, message) {
  const url = new URL(`https://wa.me/${normalizeWhatsAppNumber(phoneNumber)}`)
  url.searchParams.set('text', message)
  return url.toString()
}

export function stars(count) {
  return Array.from({ length: count }, () => '<i data-lucide="star" class="star-icon"></i>').join('')
}
