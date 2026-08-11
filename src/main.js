import './style.css'
import { createIcons, icons } from 'lucide'
import { renderPage } from './render.js'
import { initReservationForm } from './form.js'

function refreshIcons() {
  createIcons({ icons, attrs: { 'stroke-width': 1.75 } })
  document.querySelectorAll('.star-icon').forEach((icon) => {
    icon.classList.add('fill-amber-500', 'text-amber-500')
  })
}

function initRevealAnimations() {
  const isMobile = window.innerWidth < 640
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
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

const app = document.querySelector('#app')
app.innerHTML = renderPage()
initReservationForm(refreshIcons)
refreshIcons()
initRevealAnimations()
