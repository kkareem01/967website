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
        <div className="bg-espresso py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-dm-serif text-4xl md:text-5xl text-cream">
              Contact 967 Coffee Co.
            </h1>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 space-y-16">

          {/* Contact Details */}
          <section>
            <h2 className="font-dm-serif text-2xl md:text-3xl text-espresso mb-8">
              Let&rsquo;s Connect!
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-inter font-semibold text-xs uppercase tracking-widest text-caramel mb-3">
                  Phone
                </h3>
                <a
                  href="tel:+14702923108"
                  className="font-inter text-espresso text-lg font-semibold hover:text-caramel transition-colors"
                >
                  (470) 292-3108
                </a>
              </div>
              <div>
                <h3 className="font-inter font-semibold text-xs uppercase tracking-widest text-caramel mb-3">
                  Address
                </h3>
                <address className="not-italic font-inter text-sm text-coffee leading-relaxed">
                  <p>11235 Alpharetta Highway Suite 136</p>
                  <p>Roswell, GA 30076</p>
                </address>
                <a
                  href="https://www.google.com/maps/dir//967+Coffee+Co,+11235+Alpharetta+Hwy+Suite+136,+Roswell,+GA+30076"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center mt-3 bg-caramel text-espresso text-xs font-semibold px-4 py-2 rounded-full min-h-[44px] hover:bg-gold transition-colors"
                >
                  Get Directions
                </a>
              </div>
              <div>
                <h3 className="font-inter font-semibold text-xs uppercase tracking-widest text-caramel mb-3">
                  Social
                </h3>
                <ul className="space-y-2 text-sm font-inter">
                  <li>
                    <a
                      href="https://www.instagram.com/967coffeeco/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-coffee hover:text-caramel transition-colors"
                    >
                      Instagram @967coffeeco
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.tiktok.com/@967.coffee.co"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-coffee hover:text-caramel transition-colors"
                    >
                      TikTok @967.coffee.co
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.facebook.com/profile.php?id=61564941164132"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-coffee hover:text-caramel transition-colors"
                    >
                      Facebook
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Hours */}
          <section>
            <h2 className="font-dm-serif text-2xl md:text-3xl text-espresso mb-6">Our Hours</h2>
            <div className="bg-cream rounded-2xl p-6 md:p-8 inline-block">
              <table className="text-sm font-inter">
                <tbody>
                  {[
                    { day: 'Monday – Thursday', hours: '7:00 AM – 11:00 PM' },
                    { day: 'Friday', hours: '7:00 AM – 2:00 AM' },
                    { day: 'Saturday', hours: '9:00 AM – 2:00 AM' },
                    { day: 'Sunday', hours: '9:00 AM – 10:00 PM' },
                  ].map(({ day, hours }) => (
                    <tr key={day} className="border-b border-latte last:border-0">
                      <td className="pr-8 py-2.5 text-coffee/70">{day}</td>
                      <td className="py-2.5 text-espresso font-semibold">{hours}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Map */}
          <section>
            <div className="rounded-2xl overflow-hidden border border-coffee/10 h-80">
              <iframe
                loading="lazy"
                title="967 Coffee Co. location map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3308.3!2d-84.3162!3d34.0236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f576e30b3b6b57%3A0x1f2b9d3a8f3c5e6d!2s967%20Coffee%20Co!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </section>

          {/* Contact Form */}
          <section>
            <h2 className="font-dm-serif text-2xl md:text-3xl text-espresso mb-6">
              Send Us a Message
            </h2>
            {/* TODO: Replace Formspree ID with actual form endpoint */}
            <form
              action="https://formspree.io/f/YOUR_FORM_ID"
              method="POST"
              className="bg-cream rounded-2xl p-6 md:p-8 space-y-5 max-w-2xl"
            >
              <div>
                <label htmlFor="contact-name" className="block font-inter text-sm font-semibold text-espresso mb-1.5">
                  Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  aria-label="Your name"
                  placeholder="Jane Smith"
                  className="w-full bg-off-white border border-coffee/20 rounded-xl px-4 py-3 text-sm font-inter text-espresso placeholder-coffee/40 focus:outline-none focus:border-caramel transition-colors"
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="block font-inter text-sm font-semibold text-espresso mb-1.5">
                  Email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  aria-label="Your email address"
                  placeholder="jane@example.com"
                  className="w-full bg-off-white border border-coffee/20 rounded-xl px-4 py-3 text-sm font-inter text-espresso placeholder-coffee/40 focus:outline-none focus:border-caramel transition-colors"
                />
              </div>
              <div>
                <label htmlFor="contact-message" className="block font-inter text-sm font-semibold text-espresso mb-1.5">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={5}
                  aria-label="Your message"
                  placeholder="What's on your mind?"
                  className="w-full bg-off-white border border-coffee/20 rounded-xl px-4 py-3 text-sm font-inter text-espresso placeholder-coffee/40 focus:outline-none focus:border-caramel transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center bg-caramel text-espresso font-inter font-semibold px-8 py-3 rounded-full min-h-[44px] hover:bg-gold hover:scale-105 transition-all"
              >
                Send Message
              </button>
            </form>
          </section>
        </div>
      </div>
    </>
  )
}
