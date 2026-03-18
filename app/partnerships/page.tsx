import type { Metadata } from 'next'
import Image from 'next/image'
import JsonLd from '@/components/JsonLd'
import { breadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Franchise & Partnership Opportunities | 967 Coffee Co.',
  description:
    'Interested in bringing 967 Coffee Co. to your city or event? Explore franchise and partnership opportunities with our authentic Yemeni coffee brand.',
  alternates: { canonical: 'https://www.967coffeeco.com/partnerships' },
  openGraph: {
    title: 'Franchise & Partnership Opportunities | 967 Coffee Co.',
    description:
      'Interested in bringing 967 Coffee Co. to your city or event? Explore franchise and partnership opportunities with our authentic Yemeni coffee brand.',
    url: 'https://www.967coffeeco.com/partnerships',
    siteName: '967 Coffee Co.',
    type: 'website',
    images: [
      {
        url: '/images/og-homepage.jpg',
        width: 1200,
        height: 630,
        alt: '967 Coffee Co. Partnership Opportunities',
      },
    ],
  },
  twitter: { card: 'summary_large_image' },
}

const partnershipTypes = [
  {
    num: '01',
    title: 'Franchise',
    subtitle: 'Open a 967 Coffee Co. Location',
    description:
      'Bring the full 967 Coffee Co. experience to your city. Our franchise model gives you the brand, the systems, and the support to launch a location that feels authentic from day one.',
  },
  {
    num: '02',
    title: 'Event Catering',
    subtitle: 'Elevate Your Events',
    description:
      'From corporate gatherings to weddings, bring Yemeni coffee culture to your next event with our full-service catering experience.',
  },
  {
    num: '03',
    title: 'Corporate',
    subtitle: 'Office & Workplace',
    description:
      'Bring 967 Coffee Co. to your team with recurring coffee service, branded experiences, and workplace partnerships that people actually look forward to.',
  },
] as const

const pillars = [
  {
    num: '01',
    title: 'Proven Brand',
    body: 'A 4.9-star Google-rated coffee shop with a loyal local following and growing brand recognition across the Atlanta metro area.',
  },
  {
    num: '02',
    title: 'Unique Niche',
    body: "Authentic Yemeni coffee is a genuinely rare category. We don't compete with every coffee shop — we occupy a space customers actively seek out.",
  },
  {
    num: '03',
    title: 'Community-Driven',
    body: '967 Coffee Co. was built around hospitality, belonging, and culture. That foundation translates into loyal customers, repeat visits, and word-of-mouth growth.',
  },
  {
    num: '04',
    title: 'Operational Support',
    body: 'From training to supply chain to marketing, we provide the systems and support to set every partner up for success.',
  },
  {
    num: '05',
    title: 'Scalable Model',
    body: 'Our format is designed to be replicated without losing the soul of the brand. Every location feels authentic.',
  },
] as const

const stats = [
  { value: '4.9\u2605', label: 'Google Rating' },
  { value: '600+', label: '5-Star Reviews' },
  { value: '2025', label: 'Est. Roswell, GA' },
  { value: '7 Days', label: 'Open Every Week' },
] as const

export default function PartnershipsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: 'https://www.967coffeeco.com' },
          { name: 'Partnerships', url: 'https://www.967coffeeco.com/partnerships' },
        ])}
      />

      {/* ── 1. HERO ─────────────────────────────────────────────── */}
      <section className="relative min-h-[70vh] flex items-center justify-center">
        <Image
          src="/images/store/indoor-3.jpg"
          alt="967 Coffee Co. interior — warm, inviting space for authentic Yemeni coffee"
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-espresso/60 via-espresso/50 to-espresso/75"
          aria-hidden="true"
        />

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto py-8">
          <h1 className="mb-0 font-dm-serif text-cream leading-tight">
            <span className="block text-5xl md:text-7xl lg:text-8xl">Grow With</span>
            <span className="block text-5xl md:text-7xl lg:text-8xl">967 <span className="italic">Coffee Co.</span></span>
          </h1>
          <p className="font-inter text-sm md:text-base text-cream/80 mt-8 max-w-lg mx-auto leading-relaxed">
            Bring authentic Yemeni coffee culture to your city, your event, or your&nbsp;workplace.
          </p>
          <a
            href="mailto:admin@967coffeeco.com"
            className="mt-10 inline-flex items-center justify-center bg-caramel text-espresso font-inter font-medium px-9 py-3.5 rounded text-sm tracking-wide min-h-[44px] hover:bg-gold transition-all"
          >
            Contact Us
          </a>
        </div>
      </section>

      {/* ── 2. PARTNERSHIP TYPES ─────────────────────────────────── */}
      <section className="bg-off-white py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <p className="font-inter text-[10px] md:text-xs tracking-[0.35em] uppercase text-caramel mb-4">
            Partnership Models
          </p>
          <h2 className="font-dm-serif text-3xl md:text-5xl text-espresso">
            Three Ways to Partner
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-12">
            {/* Franchise — hero card */}
            <div className="lg:col-span-2 lg:row-span-2 bg-espresso rounded-2xl p-8 md:p-12 flex flex-col justify-between min-h-[360px] lg:min-h-[440px]">
              <div>
                <span
                  className="font-dm-serif text-7xl md:text-8xl text-caramel/30 block leading-none select-none"
                  aria-hidden="true"
                >
                  {partnershipTypes[0].num}
                </span>
                <h3 className="font-dm-serif text-3xl md:text-4xl text-cream mt-4">
                  {partnershipTypes[0].title}
                </h3>
                <p className="font-dm-serif italic text-lg text-caramel mt-1">
                  {partnershipTypes[0].subtitle}
                </p>
              </div>
              <p className="font-inter text-sm text-cream/70 leading-relaxed mt-6 max-w-md">
                {partnershipTypes[0].description}
              </p>
            </div>

            {/* Event Catering */}
            <div className="bg-coffee rounded-2xl p-8 flex flex-col justify-between min-h-[200px]">
              <div>
                <span
                  className="font-dm-serif text-5xl text-caramel/30 block leading-none select-none"
                  aria-hidden="true"
                >
                  {partnershipTypes[1].num}
                </span>
                <h3 className="font-dm-serif text-2xl text-cream mt-3">
                  {partnershipTypes[1].title}
                </h3>
                <p className="font-dm-serif italic text-sm text-caramel mt-1">
                  {partnershipTypes[1].subtitle}
                </p>
              </div>
              <p className="font-inter text-sm text-cream/70 leading-relaxed mt-4">
                {partnershipTypes[1].description}
              </p>
            </div>

            {/* Corporate */}
            <div className="bg-latte rounded-2xl border border-coffee/10 p-8 flex flex-col justify-between min-h-[200px]">
              <div>
                <span
                  className="font-dm-serif text-5xl text-caramel/30 block leading-none select-none"
                  aria-hidden="true"
                >
                  {partnershipTypes[2].num}
                </span>
                <h3 className="font-dm-serif text-2xl text-espresso mt-3">
                  {partnershipTypes[2].title}
                </h3>
                <p className="font-dm-serif italic text-sm text-coffee mt-1">
                  {partnershipTypes[2].subtitle}
                </p>
              </div>
              <p className="font-inter text-sm text-coffee/70 leading-relaxed mt-4">
                {partnershipTypes[2].description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. STATS STRIP ──────────────────────────────────────── */}
      <section className="bg-caramel py-5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <dl className="grid grid-cols-4">
            {stats.map(({ value, label }, i) => (
              <div
                key={label}
                className={`flex flex-col items-center text-center px-1 sm:px-8${
                  i > 0 ? ' border-l border-espresso/20' : ''
                }`}
              >
                <dt className="font-dm-serif text-xl md:text-2xl text-espresso">{value}</dt>
                <dd className="font-inter text-[8px] md:text-[10px] tracking-widest uppercase text-espresso/60 mt-1">
                  {label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── 4. WHY PARTNER PILLARS ───────────────────────────────── */}
      <section className="bg-off-white py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-inter text-[10px] md:text-xs tracking-[0.35em] uppercase text-caramel mb-4">
              The Advantage
            </p>
            <h2 className="font-dm-serif text-3xl md:text-5xl text-espresso">
              Why Partners Choose{' '}
              <span className="italic text-coffee">967 Coffee Co.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-14">
            {pillars.map(({ num, title, body }) => (
              <div key={num}>
                <span
                  className="font-dm-serif text-6xl lg:text-7xl text-caramel/25 block leading-none select-none"
                  aria-hidden="true"
                >
                  {num}
                </span>
                <h3 className="font-inter font-semibold text-espresso text-lg mt-3 mb-2">
                  {title}
                </h3>
                <div className="w-8 h-px bg-caramel mb-4" aria-hidden="true" />
                <p className="font-inter text-sm text-coffee/70 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. CLOSING CTA ───────────────────────────────────────── */}
      <section className="relative py-20 md:py-28 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0">
          <Image
            src="/images/store/outdoor.jpg"
            alt="967 Coffee Co. outdoor seating area — Roswell, GA"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-espresso/80" aria-hidden="true" />

        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <p className="font-inter text-[10px] md:text-xs tracking-[0.35em] uppercase text-caramel mb-4">
            Get Started
          </p>
          <div className="w-8 h-px bg-caramel mx-auto mb-8" aria-hidden="true" />
          <h2 className="font-dm-serif text-3xl md:text-5xl text-cream mb-4">
            Let&rsquo;s Build{' '}
            <span className="italic text-caramel">Together.</span>
          </h2>
          <p className="font-inter text-sm md:text-base text-cream/70 leading-relaxed mb-10 max-w-lg mx-auto">
            Interested in bringing 967 Coffee Co. to your city, your event, or your
            workplace? We&rsquo;d love to hear from you.
          </p>
          <a
            href="mailto:admin@967coffeeco.com"
            className="inline-flex items-center justify-center bg-caramel text-espresso font-inter font-medium px-9 py-3.5 rounded text-sm tracking-wide min-h-[44px] hover:bg-gold transition-all"
          >
            Contact Us
          </a>
        </div>
      </section>

    </>
  )
}
