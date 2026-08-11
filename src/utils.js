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

export function stars(count) {
  return Array.from({ length: count }, () => '<i data-lucide="star" class="star-icon"></i>').join('')
}
