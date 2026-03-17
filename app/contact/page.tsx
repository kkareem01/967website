import type { Metadata } from 'next'
import JsonLd from '@/components/JsonLd'
import { cafeSchema, breadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Contact Us | 967 Coffee Co. | Roswell, GA — (470) 292-3108',
  description:
    'Get in touch with 967 Coffee Co. Visit us at 11235 Alpharetta Hwy Suite 136, Roswell, GA 30076. Open late — call (470) 292-3108.',
  alternates: { canonical: 'https://www.967coffeeco.com/contact' },
  openGraph: {
    title: 'Contact Us | 967 Coffee Co. | Roswell, GA — (470) 292-3108',
    description:
      'Get in touch with 967 Coffee Co. Visit us at 11235 Alpharetta Hwy Suite 136, Roswell, GA 30076. Open late — call (470) 292-3108.',
    url: 'https://www.967coffeeco.com/contact',
    siteName: '967 Coffee Co.',
    type: 'website',
    images: [
      {
        url: '/images/og-homepage.jpg',
        width: 1200,
        height: 630,
        alt: '967 Coffee Co. — Contact Us',
      },
    ],
  },
  twitter: { card: 'summary_large_image' },
}

export default function ContactPage() {
  return (
    <>
      <JsonLd data={cafeSchema} />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: 'https://www.967coffeeco.com' },
          { name: 'Contact', url: 'https://www.967coffeeco.com/contact' },
        ])}
      />

      <div className="bg-off-white">
        {/* Editorial Header */}
        <section className="max-w-3xl mx-auto text-center py-16 md:py-20 px-4 sm:px-6 lg:px-8">
          <p className="font-inter text-[10px] tracking-[0.35em] uppercase text-caramel mb-6">
            Contact
          </p>
          <div className="w-8 h-px bg-caramel mx-auto mb-8" aria-hidden="true" />
          <h1 className="font-dm-serif text-4xl md:text-5xl lg:text-6xl text-espresso">
            Come say hello.
          </h1>
          <p className="font-inter text-sm md:text-base text-coffee/70 mt-4 max-w-xl mx-auto">
            We&rsquo;d love to hear from you. Stop by, give us a call, or find
            us online.
          </p>
        </section>

        {/* Contact Card */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24">
          <div className="lg:max-w-md">
            <div className="bg-cream rounded-2xl p-8 md:p-10 shadow-lg shadow-espresso/5">
              {/* Phone */}
              <div className="mb-8">
                <h2 className="font-inter font-semibold text-xs uppercase tracking-widest text-caramel mb-3">
                  Phone
                </h2>
                <a
                  href="tel:+14702923108"
                  className="font-inter text-espresso text-lg font-semibold hover:text-caramel transition-colors"
                >
                  (470) 292-3108
                </a>
              </div>

              {/* Email */}
              <div className="mb-8">
                <h2 className="font-inter font-semibold text-xs uppercase tracking-widest text-caramel mb-3">
                  Email
                </h2>
                <a
                  href="mailto:admin@967coffeeco.com"
                  className="font-inter text-espresso text-lg font-semibold hover:text-caramel transition-colors"
                >
                  admin@967coffeeco.com
                </a>
              </div>

              {/* Address */}
              <div className="mb-8">
                <h2 className="font-inter font-semibold text-xs uppercase tracking-widest text-caramel mb-3">
                  Address
                </h2>
                <address className="not-italic font-inter text-sm text-coffee leading-relaxed">
                  <p>11235 Alpharetta Highway Suite 136</p>
                  <p>Roswell, GA 30076</p>
                </address>
                <a
                  href="https://www.google.com/maps/dir//967+Coffee+Co,+11235+Alpharetta+Hwy+Suite+136,+Roswell,+GA+30076"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center mt-4 bg-caramel text-espresso text-xs font-semibold px-4 py-2 rounded-full min-h-[44px] hover:bg-gold transition-colors"
                >
                  Get Directions
                </a>
              </div>

              {/* Divider */}
              <div
                className="w-full h-px bg-caramel/20 mb-8"
                aria-hidden="true"
              />

              {/* Social */}
              <div>
                <h2 className="font-inter font-semibold text-xs uppercase tracking-widest text-caramel mb-4">
                  Follow Us
                </h2>
                <div className="flex items-center gap-5">
                  <a
                    href="https://www.instagram.com/967coffeeco/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="967 Coffee Co. on Instagram"
                    className="text-coffee hover:text-caramel transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.tiktok.com/@967.coffee.co"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="967 Coffee Co. on TikTok"
                    className="text-coffee hover:text-caramel transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.67a8.18 8.18 0 004.77 1.52V6.73a4.85 4.85 0 01-1-.04z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.facebook.com/profile.php?id=61564941164132"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="967 Coffee Co. on Facebook"
                    className="text-coffee hover:text-caramel transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
