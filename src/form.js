import { WA_NUMBER } from './data.js'
import { fmtDate, todayIso } from './utils.js'

const defaultForm = {
  name: '',
  phone: '',
  guests: 2,
  startDate: '',
  endDate: '',
}

let form = { ...defaultForm }
let errors = {}
let submitted = false

function inputClass(key) {
  const base =
    'w-full pl-10 pr-4 py-3 rounded-xl border text-sm text-amber-950 bg-white/70 focus:outline-none focus:ring-2 focus:ring-amber-500/40 transition-all placeholder:text-amber-400/60'
  return errors[key]
    ? `${base} border-rose-400 bg-rose-50/30`
    : `${base} border-amber-200 focus:border-amber-400`
}

function hasPreview() {
  return form.name && form.startDate && form.endDate && form.endDate > form.startDate
}

function previewMessage() {
  return `"Hello, my name is <strong class="not-italic text-amber-950">${form.name}</strong> and i request a reservation for <strong class="not-italic text-amber-950">${form.guests}</strong> people for <strong class="not-italic text-amber-950">${fmtDate(form.startDate)}</strong> untill <strong class="not-italic text-amber-950">${fmtDate(form.endDate)}</strong>. Can you please show me the rooms available and the price please? thank you"`
}

function renderSuccess() {
  return `
    <div class="text-center py-8 success-state">
      <div class="w-20 h-20 rounded-full bg-[#25D366]/10 border-4 border-[#25D366]/25 flex items-center justify-center mx-auto mb-6">
        <i data-lucide="check" class="w-9 h-9 text-[#25D366]"></i>
      </div>
      <h3 class="font-display text-2xl font-bold text-amber-950 mb-3">Your request is on its way!</h3>
      <p class="text-amber-800/60 leading-relaxed mb-2">WhatsApp should have opened with your message pre-filled.</p>
      <p class="text-amber-700/50 text-sm mb-8">We'll confirm availability and share all room details shortly.</p>
      <button type="button" id="reset-form" class="px-8 py-3 rounded-xl border border-amber-200 text-amber-800 text-sm font-medium hover:bg-amber-50 transition-all">
        Make another request
      </button>
    </div>
  `
}

function renderForm() {
  return `
    <form id="reservation-form" class="space-y-5" novalidate>
      <div>
        <label for="name" class="block text-xs font-semibold text-amber-700/65 uppercase tracking-wider mb-1.5">Full Name</label>
        <div class="relative">
          <i data-lucide="user" class="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-amber-500/60 pointer-events-none"></i>
          <input id="name" name="name" type="text" placeholder="Emma Thornton" value="${form.name}" class="${inputClass('name')}" />
        </div>
        ${errors.name ? `<p class="text-xs text-rose-500 mt-1">${errors.name}</p>` : ''}
      </div>

      <div>
        <label for="phone" class="block text-xs font-semibold text-amber-700/65 uppercase tracking-wider mb-1.5">Phone Number</label>
        <div class="relative">
          <i data-lucide="phone" class="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-amber-500/60 pointer-events-none"></i>
          <input id="phone" name="phone" type="tel" placeholder="+1 234 567 8900" value="${form.phone}" class="${inputClass('phone')}" />
        </div>
        ${errors.phone ? `<p class="text-xs text-rose-500 mt-1">${errors.phone}</p>` : ''}
      </div>

      <div>
        <label class="block text-xs font-semibold text-amber-700/65 uppercase tracking-wider mb-1.5">Number of Guests</label>
        <div class="flex items-center gap-0 rounded-xl border border-amber-200 bg-white/70 overflow-hidden h-12">
          <button type="button" id="guests-decrease" class="w-14 h-full flex items-center justify-center text-amber-700 hover:bg-amber-50 transition-colors border-r border-amber-200 text-xl font-light flex-shrink-0">−</button>
          <div class="flex-1 flex items-center justify-center gap-2">
            <i data-lucide="users" class="w-4 h-4 text-amber-500/60"></i>
            <span id="guests-label" class="text-amber-950 font-semibold text-sm">${form.guests} guest${form.guests > 1 ? 's' : ''}</span>
          </div>
          <button type="button" id="guests-increase" class="w-14 h-full flex items-center justify-center text-amber-700 hover:bg-amber-50 transition-colors border-l border-amber-200 text-xl font-light flex-shrink-0">+</button>
        </div>
      </div>

      <div class="grid grid-cols-2 gap-4">
        <div>
          <label for="startDate" class="block text-xs font-semibold text-amber-700/65 uppercase tracking-wider mb-1.5">Arrival</label>
          <div class="relative">
            <i data-lucide="calendar-days" class="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-amber-500/60 pointer-events-none"></i>
            <input id="startDate" name="startDate" type="date" min="${todayIso()}" value="${form.startDate}" class="${inputClass('startDate')}" />
          </div>
          ${errors.startDate ? `<p class="text-xs text-rose-500 mt-1">${errors.startDate}</p>` : ''}
        </div>
        <div>
          <label for="endDate" class="block text-xs font-semibold text-amber-700/65 uppercase tracking-wider mb-1.5">Departure</label>
          <div class="relative">
            <i data-lucide="calendar-days" class="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-amber-500/60 pointer-events-none"></i>
            <input id="endDate" name="endDate" type="date" min="${form.startDate || todayIso()}" value="${form.endDate}" class="${inputClass('endDate')}" />
          </div>
          ${errors.endDate ? `<p class="text-xs text-rose-500 mt-1">${errors.endDate}</p>` : ''}
        </div>
      </div>

      <div id="message-preview" class="${hasPreview() ? '' : 'hidden'}">
        <div class="rounded-2xl p-4 message-preview-box">
          <p class="text-[10px] font-semibold text-[#1a9e4e]/65 uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <i data-lucide="message-circle" class="w-3 h-3"></i> Message Preview
          </p>
          <p class="text-sm text-amber-900/75 leading-relaxed italic">${previewMessage()}</p>
        </div>
      </div>

      <button type="submit" class="w-full py-4 flex items-center justify-center gap-3 rounded-2xl font-semibold text-white text-sm shadow-lg shadow-amber-800/20 transition-all submit-button">
        <i data-lucide="message-circle" class="w-5 h-5"></i>
        Send via WhatsApp
      </button>

      <p class="text-center text-xs text-amber-700/40 leading-relaxed pt-1">
        Clicking "Send" opens WhatsApp with your request pre-filled. No payment required at this stage.
      </p>
    </form>
  `
}

export function renderReservationCard() {
  return submitted ? renderSuccess() : renderForm()
}

function validate() {
  const nextErrors = {}
  if (!form.name.trim()) nextErrors.name = 'Please enter your name.'
  if (!form.phone.trim()) nextErrors.phone = 'Please enter your phone number.'
  if (!form.startDate) nextErrors.startDate = 'Select an arrival date.'
  if (!form.endDate) nextErrors.endDate = 'Select a departure date.'
  if (form.startDate && form.endDate && form.endDate <= form.startDate) {
    nextErrors.endDate = 'Departure must be after arrival.'
  }
  errors = nextErrors
  return Object.keys(nextErrors).length === 0
}

function updateCard(onIcons) {
  const card = document.getElementById('reservation-card')
  if (!card) return
  card.innerHTML = renderReservationCard()
  onIcons()
  bindFormEvents(onIcons)
}

function updatePreview() {
  const preview = document.getElementById('message-preview')
  const previewText = preview?.querySelector('p:last-child')
  if (!preview || !previewText) return

  if (hasPreview()) {
    preview.classList.remove('hidden')
    previewText.innerHTML = previewMessage()
  } else {
    preview.classList.add('hidden')
  }
}

function bindFormEvents(onIcons) {
  const reservationForm = document.getElementById('reservation-form')
  const resetButton = document.getElementById('reset-form')

  resetButton?.addEventListener('click', () => {
    form = { ...defaultForm }
    errors = {}
    submitted = false
    updateCard(onIcons)
  })

  reservationForm?.addEventListener('submit', (event) => {
    event.preventDefault()
    if (!validate()) {
      updateCard(onIcons)
      return
    }

    const message = `Hello, my name is ${form.name} and i request a reservation for ${form.guests} people for ${fmtDate(form.startDate)} untill ${fmtDate(form.endDate)}. Can you please show me the rooms available and the price please? thank you`
    window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`, '_blank')
    submitted = true
    updateCard(onIcons)
  })

  reservationForm?.addEventListener('input', (event) => {
    const target = event.target
    if (!(target instanceof HTMLInputElement)) return

    if (target.name === 'name') form.name = target.value
    if (target.name === 'phone') form.phone = target.value
    if (target.name === 'startDate') {
      form.startDate = target.value
      const endDateInput = document.getElementById('endDate')
      if (endDateInput instanceof HTMLInputElement) {
        endDateInput.min = form.startDate || todayIso()
      }
    }
    if (target.name === 'endDate') form.endDate = target.value

    delete errors[target.name]
    updatePreview()
  })

  document.getElementById('guests-decrease')?.addEventListener('click', () => {
    form.guests = Math.max(1, form.guests - 1)
    const label = document.getElementById('guests-label')
    if (label) label.textContent = `${form.guests} guest${form.guests > 1 ? 's' : ''}`
    updatePreview()
  })

  document.getElementById('guests-increase')?.addEventListener('click', () => {
    form.guests = Math.min(20, form.guests + 1)
    const label = document.getElementById('guests-label')
    if (label) label.textContent = `${form.guests} guest${form.guests > 1 ? 's' : ''}`
    updatePreview()
  })
}

export function initReservationForm(onIcons) {
  updateCard(onIcons)
}
