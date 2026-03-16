import type { Metadata } from 'next'
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

export default function PartnershipsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: 'https://www.967coffeeco.com' },
          { name: 'Partnerships', url: 'https://www.967coffeeco.com/partnerships' },
        ])}
      />

      <div className="bg-off-white">
        <div className="bg-espresso py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-dm-serif text-4xl md:text-5xl text-cream">
              Franchise &amp; Partnership Opportunities with 967 Coffee Co.
            </h1>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 space-y-16">

          {/* Intro */}
          <section>
            <h2 className="font-dm-serif text-2xl md:text-3xl text-espresso mb-6">
              Bring 967 Coffee Co. to Your City
            </h2>
            <div className="max-w-3xl font-inter text-coffee text-sm leading-relaxed space-y-4">
              <p>
                967 Coffee Co. was built on something the world hasn't seen enough of — authentic
                Yemeni coffee culture brought to life in a modern, welcoming space. What started in
                Roswell, GA has captured the attention of coffee lovers across the Atlanta area, and
                we're ready to grow.
              </p>
              <p>
                We're actively exploring franchise partnerships, event catering opportunities, and
                corporate partnerships for organizations that want to bring our unique brand of
                hospitality to their communities. Whether you're an entrepreneur looking to open a
                location in your city or a company looking to elevate your next event, we'd love to
                talk.
              </p>
              <p>
                Our brand stands in a rare category: authentic, story-driven, community-first, and
                genuinely different. There is no other Yemeni coffee brand doing what we do at this
                scale. If you believe in what we're building, let's connect.
              </p>
            </div>
          </section>

          {/* Why Partner */}
          <section className="bg-cream rounded-3xl p-8 md:p-12">
            <h2 className="font-dm-serif text-2xl md:text-3xl text-espresso mb-6">
              Why Partner With Us
            </h2>
            <ul className="space-y-4">
              {[
                {
                  title: 'Proven Brand',
                  body: 'A 4.9-star Google-rated coffee shop with a loyal local following and growing brand recognition across the Atlanta metro area.',
                },
                {
                  title: 'Unique Niche',
                  body: "Authentic Yemeni coffee is a genuinely rare category. We're not competing with every coffee shop — we occupy a special place that customers actively seek out.",
                },
                {
                  title: 'Community-Driven',
                  body: '967 was built around hospitality, belonging, and culture. That foundation translates into loyal customers, repeat visits, and word-of-mouth growth.',
                },
              ].map(({ title, body }) => (
                <li key={title} className="flex items-start gap-4">
                  <span className="text-caramel text-xl mt-0.5" aria-hidden="true">✓</span>
                  <div>
                    <p className="font-inter font-semibold text-espresso text-sm">{title}</p>
                    <p className="font-inter text-coffee/70 text-sm mt-1 leading-relaxed">{body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          {/* Partnership Form */}
          <section>
            <h2 className="font-dm-serif text-2xl md:text-3xl text-espresso mb-6">
              Get in Touch
            </h2>
            {/* TODO: Replace Formspree ID with actual form endpoint */}
            <form
              action="https://formspree.io/f/YOUR_FORM_ID"
              method="POST"
              className="bg-cream rounded-2xl p-6 md:p-8 space-y-5 max-w-2xl"
            >
              <div>
                <label htmlFor="partner-name" className="block font-inter text-sm font-semibold text-espresso mb-1.5">
                  Name
                </label>
                <input
                  id="partner-name"
                  name="name"
                  type="text"
                  required
                  aria-label="Your name"
                  placeholder="Jane Smith"
                  className="w-full bg-off-white border border-coffee/20 rounded-xl px-4 py-3 text-sm font-inter text-espresso placeholder-coffee/40 focus:outline-none focus:border-caramel transition-colors"
                />
              </div>
              <div>
                <label htmlFor="partner-email" className="block font-inter text-sm font-semibold text-espresso mb-1.5">
                  Email
                </label>
                <input
                  id="partner-email"
                  name="email"
                  type="email"
                  required
                  aria-label="Your email address"
                  placeholder="jane@example.com"
                  className="w-full bg-off-white border border-coffee/20 rounded-xl px-4 py-3 text-sm font-inter text-espresso placeholder-coffee/40 focus:outline-none focus:border-caramel transition-colors"
                />
              </div>
              <div>
                <label htmlFor="partner-city" className="block font-inter text-sm font-semibold text-espresso mb-1.5">
                  City / State
                </label>
                <input
                  id="partner-city"
                  name="city"
                  type="text"
                  required
                  aria-label="Your city and state"
                  placeholder="Atlanta, GA"
                  className="w-full bg-off-white border border-coffee/20 rounded-xl px-4 py-3 text-sm font-inter text-espresso placeholder-coffee/40 focus:outline-none focus:border-caramel transition-colors"
                />
              </div>
              <div>
                <label htmlFor="partner-type" className="block font-inter text-sm font-semibold text-espresso mb-1.5">
                  Type of Partnership
                </label>
                <select
                  id="partner-type"
                  name="partnership_type"
                  required
                  aria-label="Type of partnership"
                  className="w-full bg-off-white border border-coffee/20 rounded-xl px-4 py-3 text-sm font-inter text-espresso focus:outline-none focus:border-caramel transition-colors"
                >
                  <option value="">Select a type...</option>
                  <option value="franchise">Franchise</option>
                  <option value="event-catering">Event Catering</option>
                  <option value="corporate">Corporate</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="partner-message" className="block font-inter text-sm font-semibold text-espresso mb-1.5">
                  Message
                </label>
                <textarea
                  id="partner-message"
                  name="message"
                  rows={5}
                  aria-label="Your message"
                  placeholder="Tell us about your interest..."
                  className="w-full bg-off-white border border-coffee/20 rounded-xl px-4 py-3 text-sm font-inter text-espresso placeholder-coffee/40 focus:outline-none focus:border-caramel transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center bg-caramel text-espresso font-inter font-semibold px-8 py-3 rounded-full min-h-[44px] hover:bg-gold hover:scale-105 transition-all"
              >
                Submit Inquiry
              </button>
            </form>
          </section>
        </div>
      </div>
    </>
  )
}
