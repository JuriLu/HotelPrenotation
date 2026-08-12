import { ROOMS, AMENITIES, TESTIMONIALS } from './data.js'
import { stars } from './utils.js'
import mainBg from './assets/Main_bg.jpg'
import mainLogo from './assets/main_logo.png'

function label(text) {
  return `<p class="section-label">${text}</p>`
}

function section(content, { id, className = '', style = '' } = {}) {
  const styleAttr = style ? ` style="${style}"` : ''
  return `<section${id ? ` id="${id}"` : ''} class="reveal ${className}"${styleAttr}>${content}</section>`
}

export function renderPage() {
  return `
    <div class="page overflow-x-hidden">
      ${renderHero()}
      ${renderReservationSection()}
      ${renderAbout()}
      ${renderRooms()}
      ${renderAmenities()}
      ${renderTestimonials()}
      ${renderCta()}
      ${renderFooter()}
    </div>
  `
}

function renderHero() {
  return `
    <section class="hero-section relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <div class="absolute inset-0">
        <img
          src="${mainBg}"
          alt="Lidia Apartments Sarande"
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-gradient-to-b from-amber-950/25 via-amber-950/15 to-amber-950/82"></div>
      </div>

      <div class="absolute top-7 left-8 flex items-center gap-2.5 z-10">
        <div class="brand-badge w-16 h-16 rounded-xl overflow-hidden flex items-center justify-center ring-1 ring-white/10">
          <img src="${mainLogo}" alt="Lidia Apartments Sarande logo" class="w-full h-full object-cover" />
        </div>
        <div>
          <p class="font-display font-bold text-white text-base leading-none">Lidia Apartments Sarande</p>
          <p class="text-white/75 text-[10px] mt-0.5">Booking Apartments</p>
        </div>
      </div>

      <div class="relati    ve z-10 text-center px-6 max-w-3xl hero-content">
        <p class="hero-kicker text-amber-600/100 text-xs tracking-[0.32em] uppercase font-semibold mb-5">
          Luxury Apartments · Albanian Riviera
        </p>
        <h1 class="font-display text-5xl md:text-[5.5rem] leading-[1.07] font-bold text-white mb-6">
          Where Every Stay<br />
          <em class="not-italic italic text-amber-300">Tells a Story</em>
        </h1>
        <p class="text-amber-200/100 text-lg leading-relaxed max-w-xl mx-auto mb-10">
          An intimate collection of rooms and suites designed to exceed every expectation, in surroundings built to inspire.
        </p>
        <a href="#reserve" class="hero-cta inline-flex items-center gap-2.5 px-8 py-4 bg-amber-700 hover:bg-amber-800 text-white rounded-2xl font-semibold text-sm shadow-2xl shadow-amber-950/40 transition-colors">
          <i data-lucide="message-circle" class="w-4 h-4"></i>
          Request a Reservation
        </a>
      </div>

      <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 z-10">
        <div class="scroll-nudge">
          <i data-lucide="arrow-down" class="w-4 h-4 text-amber-200/35"></i>
        </div>
      </div>
    </section>
  `
}

export function renderReservationSection() {
  return section(
    `
      <div class="max-w-2xl mx-auto">
        <div class="text-center mb-10">
          ${label('Book Your Stay')}
          <h2 class="font-display text-4xl font-bold text-amber-950 mb-4">Request a Reservation</h2>
          <p class="text-amber-800/60 leading-relaxed max-w-md mx-auto">
            Fill in your details and we'll reply via WhatsApp to show you available rooms and current pricing.
          </p>
          <div class="flex items-center justify-center gap-2 mt-5">
            <div class="w-7 h-7 rounded-full bg-[#25D366] flex items-center justify-center">
              <i data-lucide="message-circle" class="w-3.5 h-3.5 text-white"></i>
            </div>
            <span class="text-sm text-amber-700/65 font-medium">We respond via WhatsApp</span>
          </div>
        </div>
        <div id="reservation-card" class="reservation-card rounded-3xl p-8 md:p-10"></div>
      </div>
    `,
    { id: 'reserve', className: 'py-24 px-6' },
  )
}

function renderAbout() {
  return section(
    `
      <div class="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
        <div>
          ${label('Our Story')}
          <h2 class="font-display text-4xl font-bold text-amber-950 mb-5 leading-tight">
            A Sanctuary on the French Riviera
          </h2>
          <p class="text-amber-800/62 leading-relaxed mb-5">
            Nestled on the Côte d'Azur, Maison Élite was born from a simple conviction: that a stay away from home should feel like an arrival somewhere better. Each of our rooms is a curated experience — designed with warmth, furnished with purpose, and staffed with genuine care.
          </p>
          <p class="text-amber-800/62 leading-relaxed mb-9">
            Whether you seek romance, family retreat, or solitary quiet, we have crafted a room for exactly that — and a team ready to make it perfect.
          </p>
          <div class="grid grid-cols-3 gap-3">
            ${[
              { v: '98%', l: 'Guest Satisfaction' },
              { v: '1,200+', l: 'Happy Guests' },
              { v: '10 yrs', l: 'Of Excellence' },
            ]
              .map(
                ({ v, l }) => `
                  <div class="text-center p-4 rounded-2xl bg-amber-900/5 border border-amber-200/50">
                    <p class="font-display text-2xl font-bold text-amber-800">${v}</p>
                    <p class="text-xs text-amber-700/50 mt-1 leading-tight">${l}</p>
                  </div>
                `,
              )
              .join('')}
          </div>
        </div>
        <div class="relative">
          <div class="rounded-3xl overflow-hidden aspect-[4/5] bg-amber-200 about-image">
            <img
              src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=760&h=950&fit=crop&auto=format"
              alt="Maison Élite hotel pool and terrace"
              class="w-full h-full object-cover"
            />
          </div>
          <div class="rating-badge absolute -bottom-5 -left-5 rounded-2xl px-5 py-4 hidden md:block">
            <div class="flex items-center gap-0.5 mb-1 star-row">${stars(5)}</div>
            <p class="font-semibold text-amber-950 text-sm leading-none">Exceptional</p>
            <p class="text-amber-700/50 text-xs mt-0.5">Rated by our guests</p>
          </div>
        </div>
      </div>
    `,
    { id: 'story', className: 'py-24 px-6' },
  )
}

function renderRooms() {
  return section(
    `
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-12">
          ${label('Our Collection')}
          <h2 class="font-display text-4xl font-bold text-amber-950 mb-4">Rooms & Suites</h2>
          <p class="text-amber-800/57 max-w-md mx-auto text-sm leading-relaxed">
            Each room is a world of its own. Inquire via WhatsApp to discover which one is waiting for you — and at what price.
          </p>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-7">
          ${ROOMS.map(
            (room) => `
              <article class="room-card group bg-card rounded-3xl overflow-hidden border border-amber-100 transition-shadow hover:shadow-[0_20px_48px_rgba(124,74,45,0.1)]">
                <div class="relative aspect-[4/3] bg-amber-100 overflow-hidden">
                  <img src="${room.image}" alt="${room.name}" class="room-image w-full h-full object-cover" />
                  <div class="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                  <div class="absolute bottom-3 right-3 flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-black/30 backdrop-blur-sm text-white text-xs font-medium">
                    <i data-lucide="users" class="w-3 h-3"></i>
                    ${room.guests === 1 ? '1 guest' : `Up to ${room.guests}`}
                  </div>
                </div>
                <div class="p-5">
                  <p class="text-xs text-amber-600/65 font-medium mb-1">${room.type}</p>
                  <h3 class="font-display font-semibold text-amber-950 text-lg leading-snug mb-3">${room.name}</h3>
                  <div class="flex flex-wrap gap-1.5">
                    ${room.tags
                      .map(
                        (tag) =>
                          `<span class="px-2.5 py-1 rounded-full bg-amber-50 border border-amber-200/60 text-amber-700 text-[11px] font-medium">${tag}</span>`,
                      )
                      .join('')}
                  </div>
                </div>
              </article>
            `,
          ).join('')}
        </div>
        <div class="text-center mt-12">
          <p class="text-amber-800/55 text-sm mb-5">
            Interested in a specific room? Ask us and we'll share full details and current pricing.
          </p>
          <a href="#reserve" class="inline-flex items-center gap-2.5 px-8 py-3.5 bg-amber-700 hover:bg-amber-800 text-white rounded-2xl font-semibold text-sm shadow-md shadow-amber-800/20 transition-colors">
            <i data-lucide="message-circle" class="w-4 h-4"></i>
            Request a Reservation
          </a>
        </div>
      </div>
    `,
    { id: 'rooms', className: 'py-24 px-6', style: 'background: rgba(124,74,45,0.04)' },
  )
}

function renderAmenities() {
  return section(
    `
      <div class="max-w-5xl mx-auto">
        <div class="text-center mb-14">
          ${label('The Experience')}
          <h2 class="font-display text-4xl font-bold text-amber-950">Why Lidia Apartments Sarande</h2>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          ${AMENITIES.map(
            ({ icon, title, desc }) => `
              <div class="p-6 rounded-3xl bg-white/60 border border-amber-100 hover:border-amber-200 hover:shadow-md transition-all">
                <div class="w-12 h-12 rounded-2xl bg-amber-100 flex items-center justify-center mb-4">
                  <i data-lucide="${icon}" class="w-5 h-5 text-amber-700"></i>
                </div>
                <h3 class="font-semibold text-amber-950 mb-2 text-base">${title}</h3>
                <p class="text-sm text-amber-800/58 leading-relaxed">${desc}</p>
              </div>
            `,
          ).join('')}
        </div>
      </div>
    `,
    { id: 'amenities', className: 'py-24 px-6' },
  )
}

function renderTestimonials() {
  return section(
    `
      <div class="max-w-5xl mx-auto">
        <div class="text-center mb-14">
          ${label('Guest Stories')}
          <h2 class="font-display text-4xl font-bold text-amber-950">What Our Guests Say</h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          ${TESTIMONIALS.map(
            ({ name, country, rating, quote }) => `
              <article class="p-7 rounded-3xl bg-white/80 border border-amber-100 flex flex-col testimonial-card">
                <div class="flex items-center gap-0.5 mb-5 star-row">${stars(rating)}</div>
                <p class="text-amber-900/75 text-sm leading-relaxed italic flex-1 mb-6">"${quote}"</p>
                <div>
                  <p class="font-semibold text-amber-950 text-sm">${name}</p>
                  <p class="text-xs text-amber-700/50 mt-0.5 flex items-center gap-1">
                    <i data-lucide="map-pin" class="w-3 h-3"></i>
                    ${country}
                  </p>
                </div>
              </article>
            `,
          ).join('')}
        </div>
      </div>
    `,
    { id: 'reviews', className: 'py-24 px-6', style: 'background: rgba(124,74,45,0.04)' },
  )
}

function renderCta() {
  return section(
    `
      <div class="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=1600&h=500&fit=crop&auto=format"
          alt=""
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-amber-950/72"></div>
      </div>
      <div class="relative z-10 max-w-xl mx-auto text-center">
        <p class="text-amber-200/60 text-xs tracking-[0.28em] uppercase font-semibold mb-4">Ready to arrive?</p>
        <h2 class="font-display text-4xl font-bold text-white mb-5 leading-tight">
          Your room is waiting.<br />Let's find it together.
        </h2>
        <p class="text-amber-100/55 mb-8 leading-relaxed text-sm">
          Send us a quick message and our team will respond on WhatsApp with available rooms and pricing — no fees, just a conversation.
        </p>
        <a href="#reserve" class="inline-flex items-center gap-3 px-9 py-4 bg-white text-amber-900 rounded-2xl font-bold text-sm shadow-2xl hover:bg-amber-50 transition-colors">
          <i data-lucide="message-circle" class="w-5 h-5 text-[#25D366]"></i>
          Request Now via WhatsApp
        </a>
      </div>
    `,
    { className: 'py-24 px-6 relative overflow-hidden' },
  )
}

function renderFooter() {
  return `
    <footer class="px-6 pt-16 pb-8" style="background: #1C0F08">
      <div class="max-w-5xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          <div>
            <div class="flex items-center gap-2.5 mb-4">
              <div class="w-12 h-12 rounded-full overflow-hidden bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
                <img src="${mainLogo}" alt="Lidia Apartments Sarande logo" class="w-full h-full object-contain p-1" />
              </div>
              <div>
                <p class="font-display font-bold text-amber-100 text-base leading-none">Lidia Apartments Sarande</p>
                <p class="text-amber-500/80 text-[10px] mt-0.5">Luxury Apartments</p>
              </div>
            </div>
            <p class="text-amber-500/80 text-sm leading-relaxed mb-5">
              An apartments luxury collection on the Albanian Riviera, curated for those who appreciate the extraordinary.
            </p>
            <div class="flex gap-2.5">
              <a href="https://www.instagram.com/lidia.apartments.sarande" aria-label="Instagram" class="w-9 h-9 rounded-full border border-amber-700/35 flex items-center justify-center text-amber-500/65 hover:text-amber-300 hover:border-amber-500 transition-all">
                <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <p class="text-amber-500/80 text-sm leading-relaxed mt-2">
               Check our IG 
              </p>
            </div>
          </div>
          <div>
            <p class="text-amber-200/75 font-semibold text-sm mb-4">Navigate</p>
            ${[
              { label: 'Our Story', href: '#story' },
              { label: 'Rooms & Suites', href: '#rooms' },
              { label: 'Amenities', href: '#amenities' },
              { label: 'Guest Reviews', href: '#reviews' },
              { label: 'Request a Stay', href: '#reserve' },
            ]
              .map(
                ({ label, href }) =>
                  `<a href="${href}" class="text-amber-500/80 text-sm py-1 hover:text-amber-300 cursor-pointer transition-colors block">${label}</a>`,
              )
              .join('')}
          </div>
          <div>
            <p class="text-amber-200/75 font-semibold text-sm mb-4">Contact</p>
            <div class="space-y-3">
              ${[
                { icon: 'map-pin', text: "Rruga Musa Demi 54, Saranda, Albania" },
                { icon: 'phone', text: '+355 69 862 6849' },
                { icon: 'mail', text: 'lidiahasani98@gmail.com' },
                { icon: 'message-circle', text: 'WhatsApp Business' },
              ]
                .map(
                  ({ icon, text }) => `
                    <div class="flex items-start gap-2.5 text-amber-500/80 text-sm">
                      <i data-lucide="${icon}" class="w-4 h-4 flex-shrink-0 mt-0.5 text-amber-500/80"></i>
                      ${text}
                    </div>
                  `,
                )
                .join('')}
            </div>
          </div>
        </div>
        <div class="border-t border-amber-600/50 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-amber-500/70">
          <p>© ${new Date().getFullYear()} Lidia Apartments Sarande. All rights reserved.</p>
          <div class="flex gap-4">
            ${['Privacy Policy', 'Terms', 'Cookies']
              .map(
                (item) =>
                  `<span class="hover:text-amber-200 cursor-pointer transition-colors">${item}</span>`,
              )
              .join('')}
          </div>
        </div>
      </div>
    </footer>
  `
}
