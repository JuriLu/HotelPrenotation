import { describe, expect, it } from 'vitest'
import {
  DEFAULT_RESERVATION_FORM,
  getNameError,
  getReservationValidationErrors,
  isReservationValid,
} from './form.ts'

describe('reservation validation', () => {
  it('requires a name and both stay dates', () => {
    expect(getReservationValidationErrors(DEFAULT_RESERVATION_FORM)).toEqual({
      name: 'Please enter your name.',
      startDate: 'Select an arrival date.',
      endDate: 'Select a departure date.',
    })
  })

  it('accepts a complete valid reservation', () => {
    const reservation = {
      name: 'Elena',
      guests: 2,
      startDate: '2026-08-14',
      endDate: '2026-08-18',
    } as const

    expect(isReservationValid(reservation)).toBe(true)
    expect(getReservationValidationErrors(reservation)).toEqual({})
  })

  it('rejects a departure date earlier than the arrival date', () => {
    expect(
      getReservationValidationErrors({
        name: 'Elena',
        guests: 2,
        startDate: '2026-08-18',
        endDate: '2026-08-14',
      }),
    ).toEqual({ endDate: 'Departure cannot be before arrival.' })
  })

  it('enforces the name character and length rules', () => {
    expect(getNameError('Ana3')).toBe('Name can only contain letters and spaces.')
    expect(getNameError('Alexandrianaa')).toBe('Name must be 12 characters or fewer.')
  })
})
