import type { Metadata } from 'next'
import JsonLd from '@/components/JsonLd'
import { breadcrumbSchema, jobPostingSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Careers at 967 Coffee Co. | Join Our Team in Roswell, GA',
  description:
    "Join the 967 Coffee Co. team! We're always looking for passionate, talented people to be part of our authentic Yemeni coffee shop in Roswell, GA.",
  alternates: { canonical: 'https://www.967coffeeco.com/careers' },
  openGraph: {
    title: 'Careers at 967 Coffee Co. | Join Our Team in Roswell, GA',
    description:
      "Join the 967 Coffee Co. team! We're always looking for passionate, talented people to be part of our authentic Yemeni coffee shop in Roswell, GA.",
    url: 'https://www.967coffeeco.com/careers',
    siteName: '967 Coffee Co.',
    type: 'website',
    images: [
      {
        url: '/images/og-homepage.jpg',
        width: 1200,
        height: 630,
        alt: '967 Coffee Co. — Join Our Team',
      },
    ],
  },
  twitter: { card: 'summary_large_image' },
}

export default function CareersPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: 'https://www.967coffeeco.com' },
          { name: 'Careers', url: 'https://www.967coffeeco.com/careers' },
        ])}
      />
      <JsonLd data={jobPostingSchema} />

      <div className="bg-off-white">
        <div className="bg-espresso py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-dm-serif text-4xl md:text-5xl text-cream">
              Interested in Working With Us?
            </h1>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 space-y-16">

          {/* Intro */}
          <section>
            <h2 className="font-dm-serif text-2xl md:text-3xl text-espresso mb-6">
              Join the 967 Family
            </h2>
            <p className="max-w-2xl font-inter text-coffee text-sm leading-relaxed">
              We're always looking for passionate, hospitality-driven people to join our team at 967
              Coffee Co. Whether you're a seasoned barista or new to the coffee world, we'd love to
              hear from you. We believe in building a team that reflects the warmth and authenticity
              of our brand — people who genuinely care about craft, community, and making every
              customer feel welcome.
            </p>
          </section>

          {/* Application Form */}
          <section>
            <h2 className="font-dm-serif text-2xl md:text-3xl text-espresso mb-6">Apply Now</h2>
            {/* TODO: Replace Formspree ID with actual form endpoint */}
            <form
              action="https://formspree.io/f/YOUR_FORM_ID"
              method="POST"
              encType="multipart/form-data"
              className="bg-cream rounded-2xl p-6 md:p-8 space-y-5 max-w-2xl"
            >
              <div>
                <label htmlFor="career-name" className="block font-inter text-sm font-semibold text-espresso mb-1.5">
                  Full Name
                </label>
                <input
                  id="career-name"
                  name="name"
                  type="text"
                  required
                  aria-label="Your full name"
                  placeholder="Jane Smith"
                  className="w-full bg-off-white border border-coffee/20 rounded-xl px-4 py-3 text-sm font-inter text-espresso placeholder-coffee/40 focus:outline-none focus:border-caramel transition-colors"
                />
              </div>
              <div>
                <label htmlFor="career-email" className="block font-inter text-sm font-semibold text-espresso mb-1.5">
                  Email
                </label>
                <input
                  id="career-email"
                  name="email"
                  type="email"
                  required
                  aria-label="Your email address"
                  placeholder="jane@example.com"
                  className="w-full bg-off-white border border-coffee/20 rounded-xl px-4 py-3 text-sm font-inter text-espresso placeholder-coffee/40 focus:outline-none focus:border-caramel transition-colors"
                />
              </div>
              <div>
                <label htmlFor="career-position" className="block font-inter text-sm font-semibold text-espresso mb-1.5">
                  Position
                </label>
                <select
                  id="career-position"
                  name="position"
                  required
                  aria-label="Position you are applying for"
                  className="w-full bg-off-white border border-coffee/20 rounded-xl px-4 py-3 text-sm font-inter text-espresso focus:outline-none focus:border-caramel transition-colors"
                >
                  <option value="">Select a position...</option>
                  <option value="barista">Barista</option>
                  <option value="shift-lead">Shift Lead</option>
                  <option value="kitchen">Kitchen</option>
                  <option value="front-of-house">Front of House</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="career-resume" className="block font-inter text-sm font-semibold text-espresso mb-1.5">
                  Resume (optional)
                </label>
                <input
                  id="career-resume"
                  name="resume"
                  type="file"
                  accept=".pdf,.doc,.docx"
                  aria-label="Upload your resume (PDF, DOC, or DOCX)"
                  className="w-full text-sm font-inter text-coffee file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-caramel file:text-espresso hover:file:bg-gold"
                />
              </div>
              <div>
                <label htmlFor="career-message" className="block font-inter text-sm font-semibold text-espresso mb-1.5">
                  Tell Us About Yourself
                </label>
                <textarea
                  id="career-message"
                  name="message"
                  rows={5}
                  aria-label="Tell us about yourself"
                  placeholder="Share your experience, why you want to work at 967, or anything else you'd like us to know..."
                  className="w-full bg-off-white border border-coffee/20 rounded-xl px-4 py-3 text-sm font-inter text-espresso placeholder-coffee/40 focus:outline-none focus:border-caramel transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center bg-caramel text-espresso font-inter font-semibold px-8 py-3 rounded-full min-h-[44px] hover:bg-gold hover:scale-105 transition-all"
              >
                Submit Application
              </button>
            </form>
          </section>
        </div>
      </div>
    </>
  )
}
