const WA_COUNTRY_CODE = '355'
const WA_LOCAL_SEGMENTS = ['69', '862', '6849']

export function getWhatsAppNumber(): string {
  return `${WA_COUNTRY_CODE}${WA_LOCAL_SEGMENTS.join('')}`
}

export interface Room {
  readonly name: string
  readonly type: string
  readonly image: string
  readonly tags: ReadonlyArray<string>
  readonly guests: number
}

export const ROOMS: ReadonlyArray<Room> = [
  {
    name: 'Maison Suite Royale',
    type: 'Luxury Suite',
    image:
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=760&h=520&fit=crop&auto=format',
    tags: ['Ocean View', 'Private Terrace', 'Marble Bath'],
    guests: 2,
  },
  {
    name: 'Penthouse Prestige',
    type: 'Full-Floor Penthouse',
    image:
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=760&h=520&fit=crop&auto=format',
    tags: ['Panoramic View', 'Private Pool', 'Butler'],
    guests: 4,
  },
  {
    name: 'Chambres Deluxe Garden',
    type: 'Deluxe Room',
    image:
      'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=760&h=520&fit=crop&auto=format',
    tags: ['Garden View', 'King Bed', 'Spa Access'],
    guests: 2,
  },
  {
    name: 'Terrasse Romantique',
    type: 'Romance Suite',
    image:
      'https://images.unsplash.com/photo-1602002418082-a4443978a5b4?w=760&h=520&fit=crop&auto=format',
    tags: ['Jacuzzi', 'Champagne', 'Sunset View'],
    guests: 2,
  },
  {
    name: 'Famille Grande Suite',
    type: 'Family Suite',
    image:
      'https://images.unsplash.com/photo-1631049421450-348ccd7f8949?w=760&h=520&fit=crop&auto=format',
    tags: ['Pool Access', '2 Bedrooms', 'Kids Kit'],
    guests: 5,
  },
  {
    name: 'Classique Standard',
    type: 'Standard Room',
    image:
      'https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=760&h=520&fit=crop&auto=format',
    tags: ['City View', 'Breakfast', 'Room Service'],
    guests: 2,
  },
]

export interface Amenity {
  readonly icon: string
  readonly title: string
  readonly desc: string
}

export const AMENITIES: ReadonlyArray<Amenity> = [
  {
    icon: 'waves',
    title: 'Infinity Pool & Spa',
    desc: 'Drift into calm in our heated infinity pool or restore in our full-service spa, open daily from dawn to dusk.',
  },
  {
    icon: 'coffee',
    title: 'Gourmet Breakfast',
    desc: 'Each morning begins with a lavish spread prepared from locally sourced, seasonal ingredients.',
  },
  {
    icon: 'sparkles',
    title: '24 / 7 Concierge',
    desc: 'Our dedicated team is always on hand to arrange excursions, dining, and every detail of your stay.',
  },
  {
    icon: 'car',
    title: 'Valet & Transfers',
    desc: 'Complimentary valet parking and private airport transfers arranged precisely to your schedule.',
  },
]

export interface Testimonial {
  readonly name: string
  readonly country: string
  readonly rating: number
  readonly quote: string
}

export const TESTIMONIALS: ReadonlyArray<Testimonial> = [
  {
    name: 'Emma Thornton',
    country: 'United Kingdom',
    rating: 5,
    quote:
      'An extraordinary experience. The warmth of the staff and the sheer beauty of the rooms exceeded every expectation. We will absolutely return.',
  },
  {
    name: 'Alexandre Moreau',
    country: 'France',
    rating: 5,
    quote:
      'Maison Élite redefines luxury. The penthouse suite was breathtaking, and the service was impeccable from the moment we arrived.',
  },
  {
    name: 'Sofia Ricci',
    country: 'Italy',
    rating: 5,
    quote:
      'A hidden gem on the Riviera. Every morning felt like waking up in a dream — the views, the comfort, the breakfast. All perfect.',
  },
]
