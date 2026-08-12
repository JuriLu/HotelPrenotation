import { describe, expect, it } from 'vitest'
import { buildWhatsAppUrl, fmtDate, normalizeWhatsAppNumber } from './utils.ts'

describe('formatting helpers', () => {
  it('formats ISO dates for the booking message', () => {
    expect(fmtDate('2026-08-12')).toBe('12 August 2026')
    expect(fmtDate('')).toBe('')
    expect(fmtDate('not-a-date')).toBe('')
  })
})

describe('WhatsApp URL helpers', () => {
  it('normalizes formatted international numbers', () => {
    expect(normalizeWhatsAppNumber('+355 69 862 6849')).toBe('355698626849')
  })

  it('rejects numbers that cannot be used by WhatsApp', () => {
    expect(() => normalizeWhatsAppNumber('000')).toThrow('Invalid WhatsApp phone number.')
  })

  it('creates an encoded WhatsApp message URL', () => {
    expect(buildWhatsAppUrl('355698626849', 'Hello & welcome')).toBe(
      'https://wa.me/355698626849?text=Hello+%26+welcome',
    )
  })
})
