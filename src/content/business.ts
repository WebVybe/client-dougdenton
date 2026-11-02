// Doug Denton Custom Racquet Service & Tennis Lessons.
// REAL CLIENT, not a portfolio demo. Content here is pulled verbatim from
// the current live site (https://dougdenton.monkey-factory.com/) wherever
// possible. Anything not yet confirmed by Doug is modeled as `null` (or an
// empty array) rather than a fabricated value -- the UI renders an honest
// "coming soon" / "contact for pricing" state for those instead of a
// placeholder that could be mistaken for real. See CLIENT.md for the full
// list of what's still pending.

export const business = {
  name: 'Doug Denton Custom Racquet Service & Tennis Lessons',
  shortName: 'Doug Denton',
  tagline: 'Custom Racquet Service & Tennis Lessons',
  credentialLine: 'ATP/WTA tour stringer. Full-time USPTA teaching pro.',
  base: 'San Diego, CA',
  // Real contact details not yet supplied -- see CLIENT.md Pending Questions.
  phone: null as string | null,
  email: null as string | null,
  serviceArea: null as string | null,
  hours: null as string | null,
}

export const bio = {
  experience:
    "I started stringing racquets over 40 years ago. I've recently strung for Rafael Nadal, Serena Williams, Andy Murray, and Maria Sharapova, along with about 75% of the current top 100 ATP and WTA players.",
  philosophy:
    'I take pride in providing the same quality of service to the local San Diego tennis community as I do for all the top players in the world.',
  approach:
    'I bring extensive knowledge and attention to detail to my stringing services, and take pride in providing convenience, consistency, great pricing, and friendliness to our growing list of clients.',
}

export const homeHighlights = [
  'Unmatched quality, experience, and expertise',
  'Same stringer, same calibrated machine every time',
  'Careful attention to string tension, including for players managing tennis elbow',
]

export type ServiceItem = {
  name: string
  price: string | null
  priceNote?: string
  description: string
}

export type ServiceCategory = {
  id: string
  title: string
  intro: string
  items: ServiceItem[]
}

export const services: ServiceCategory[] = [
  {
    id: 'stringing',
    title: 'Racquet Stringing',
    intro: 'Tennis, racquetball, and squash stringing on the same calibrated machine every time.',
    items: [
      {
        name: 'Stringing — you supply the string',
        price: '$25',
        priceNote: 'labor only',
        description: 'Bring your own string and Doug strings it on his calibrated machine.',
      },
      {
        name: 'Stringing — string included',
        price: '$38',
        priceNote: 'string + labor',
        description: "String and labor included. Ask about string and tension recommendations for your game.",
      },
    ],
  },
  {
    id: 'other-services',
    title: 'Other Services',
    intro: 'Beyond stringing, the full mobile pro-shop lineup.',
    items: [
      {
        name: 'Grip repair',
        price: null,
        description: 'Replacement grips and grip repair.',
      },
      {
        name: 'Racquet cleaning & sanitization',
        price: null,
        description: 'Full racquet cleaning and sanitization.',
      },
      {
        name: 'Frame, bumper guard & grommet inspection',
        price: null,
        description: 'Full inspection to catch issues before they affect play.',
      },
      {
        name: 'String, grip & racquet recommendations',
        price: null,
        description: 'Personalized recommendations based on your game and any physical considerations.',
      },
    ],
  },
  {
    id: 'lessons',
    title: 'Tennis Lessons',
    intro: 'Taught by a full-time USPTA teaching pro.',
    items: [
      {
        name: 'Private lesson',
        price: null,
        description: 'One-on-one coaching, all levels.',
      },
    ],
  },
  {
    id: 'mobile-service',
    title: 'Mobile Pro Shop',
    intro: 'A one-of-a-kind mobile pro shop that comes to you.',
    items: [
      {
        name: 'On-site / mobile stringing',
        price: null,
        description: "Doug's mobile pro shop can come to your club, court, or event.",
      },
    ],
  },
]

export type Testimonial = {
  quote: string
  author: string
}

// Empty on purpose -- no testimonials have been supplied yet. Never fill
// this with invented quotes; the Reviews page renders an honest
// "coming soon" state when this array is empty.
export const testimonials: Testimonial[] = []
