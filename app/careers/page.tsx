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

        {/* Header */}
        <section className="max-w-xl mx-auto text-center pt-20 md:pt-28 pb-10 md:pb-14 px-4 sm:px-6">
          <p className="font-inter text-[10px] tracking-[0.35em] uppercase text-caramel mb-6">
            Careers
          </p>
          <div className="w-8 h-px bg-caramel mx-auto mb-8" aria-hidden="true" />
          <h1 className="font-dm-serif text-3xl md:text-4xl lg:text-5xl text-espresso">
            Interested in Working With Us?
          </h1>
        </section>

        {/* Body */}
        <section className="max-w-xl mx-auto text-center px-4 sm:px-6">
          <h2 className="font-dm-serif text-2xl md:text-3xl text-espresso mb-4">
            Join the 967 Family
          </h2>
          <p className="font-inter text-sm md:text-base text-coffee/70 leading-relaxed">
            We&rsquo;re always looking for passionate, hospitality-driven people to join our team at
            967 Coffee Co. Whether you&rsquo;re a seasoned barista or new to the coffee world,
            we&rsquo;d love to hear from you. We believe in building a team that reflects the warmth
            and authenticity of our brand&nbsp;&mdash; people who genuinely care about craft,
            community, and making every customer feel welcome.
          </p>
        </section>

        {/* Divider */}
        <div className="w-12 h-px bg-caramel mx-auto my-12 md:my-16" aria-hidden="true" />

        {/* Form */}
        <section className="max-w-lg mx-auto text-center px-4 sm:px-6 pb-20 md:pb-28">
          <h2 className="font-dm-serif text-2xl md:text-3xl text-espresso mb-8">
            Apply Now
          </h2>

          <form
            action="https://formspree.io/f/YOUR_FORM_ID"
            method="POST"
            encType="multipart/form-data"
            className="space-y-5 text-left"
          >
            {/* First Name + Last Name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="career-first-name"
                  className="block font-inter text-sm font-semibold text-espresso mb-1.5"
                >
                  First Name
                </label>
                <input
                  id="career-first-name"
                  name="first_name"
                  type="text"
                  required
                  aria-label="Your first name"
                  placeholder="Jane"
                  className="w-full bg-cream border border-coffee/20 rounded-xl px-4 py-3 text-sm font-inter text-espresso placeholder-coffee/40 focus:outline-none focus:border-caramel transition-colors"
                />
              </div>
              <div>
                <label
                  htmlFor="career-last-name"
                  className="block font-inter text-sm font-semibold text-espresso mb-1.5"
                >
                  Last Name
                </label>
                <input
                  id="career-last-name"
                  name="last_name"
                  type="text"
                  required
                  aria-label="Your last name"
                  placeholder="Smith"
                  className="w-full bg-cream border border-coffee/20 rounded-xl px-4 py-3 text-sm font-inter text-espresso placeholder-coffee/40 focus:outline-none focus:border-caramel transition-colors"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="career-email"
                className="block font-inter text-sm font-semibold text-espresso mb-1.5"
              >
                Email
              </label>
              <input
                id="career-email"
                name="email"
                type="email"
                required
                aria-label="Your email address"
                placeholder="jane@example.com"
                className="w-full bg-cream border border-coffee/20 rounded-xl px-4 py-3 text-sm font-inter text-espresso placeholder-coffee/40 focus:outline-none focus:border-caramel transition-colors"
              />
            </div>

            {/* Phone */}
            <div>
              <label
                htmlFor="career-phone"
                className="block font-inter text-sm font-semibold text-espresso mb-1.5"
              >
                Phone
              </label>
              <input
                id="career-phone"
                name="phone"
                type="tel"
                aria-label="Your phone number"
                placeholder="(555) 123-4567"
                className="w-full bg-cream border border-coffee/20 rounded-xl px-4 py-3 text-sm font-inter text-espresso placeholder-coffee/40 focus:outline-none focus:border-caramel transition-colors"
              />
            </div>

            {/* Position */}
            <div>
              <label
                htmlFor="career-position"
                className="block font-inter text-sm font-semibold text-espresso mb-1.5"
              >
                Position
              </label>
              <select
                id="career-position"
                name="position"
                required
                aria-label="Position you are applying for"
                className="w-full bg-cream border border-coffee/20 rounded-xl px-4 py-3 text-sm font-inter text-espresso focus:outline-none focus:border-caramel transition-colors"
              >
                <option value="">Select a position...</option>
                <option value="barista">Barista</option>
                <option value="shift-lead">Shift Lead</option>
                <option value="kitchen">Kitchen</option>
                <option value="front-of-house">Front of House</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Resume */}
            <div>
              <label
                htmlFor="career-resume"
                className="block font-inter text-sm font-semibold text-espresso mb-1.5"
              >
                Upload Resume
              </label>
              <input
                id="career-resume"
                name="resume"
                type="file"
                accept=".pdf,.doc,.docx"
                aria-label="Upload your resume (PDF, DOC, or DOCX)"
                className="w-full text-sm font-inter text-coffee file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-caramel file:text-espresso hover:file:bg-gold file:transition-colors file:cursor-pointer"
              />
            </div>

            {/* Submit */}
            <div className="pt-2 text-center">
              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center bg-caramel text-espresso font-inter font-semibold px-10 py-3.5 rounded-full min-h-[44px] hover:bg-gold hover:scale-105 transition-all"
              >
                Submit Application
              </button>
            </div>
          </form>
        </section>
      </div>
    </>
  )
}
