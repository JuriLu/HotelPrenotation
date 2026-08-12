import './style.css'
import { createIcons, icons } from 'lucide'
import { renderPage } from './render.ts'
import { initReservationForm } from './form.ts'
import { sanitizeHtml } from './utils.ts'

function refreshIcons(): void {
  createIcons({ icons, attrs: { 'stroke-width': 1.75 } })
  document.querySelectorAll('.star-icon').forEach((icon: Element) => {
    icon.classList.add('fill-amber-500', 'text-amber-500')
  })
}

function initRevealAnimations(): void {
  const isMobile = window.innerWidth < 640
  const observer = new IntersectionObserver(
    (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry: IntersectionObserverEntry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.12, rootMargin: isMobile ? '0px' : '-80px' },
  )

  document.querySelectorAll('.reveal').forEach((section) => observer.observe(section))
}

const app = document.querySelector<HTMLDivElement>('#app')
if (!app) {
  throw new Error('Application root element "#app" was not found.')
}
app.innerHTML = sanitizeHtml(renderPage())
initReservationForm(refreshIcons)
refreshIcons()
initRevealAnimations()
