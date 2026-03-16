import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | 967 Coffee Co.',
  description:
    'Privacy policy for 967coffeeco.com — how we collect, use, and protect your information.',
  alternates: { canonical: 'https://www.967coffeeco.com/privacy-policy' },
}

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-off-white">
      <div className="bg-espresso py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-dm-serif text-4xl md:text-5xl text-cream">Privacy Policy</h1>
          <p className="font-inter text-cream/60 mt-4 text-sm">
            Effective date:{' '}
            <time dateTime="2026-03-04">March 4, 2026</time>
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 font-inter text-coffee text-sm leading-relaxed space-y-8">
        <section>
          <h2 className="font-dm-serif text-xl text-espresso mb-3">Overview</h2>
          <p>
            This Privacy Policy describes how 967 Coffee Co. ("we," "us," or "our") collects, uses,
            and protects the information you provide when you visit 967coffeeco.com (the "Site") or
            interact with our services. We are committed to protecting your privacy.
          </p>
        </section>

        <section>
          <h2 className="font-dm-serif text-xl text-espresso mb-3">Information We Collect</h2>
          <p className="mb-3">
            We collect information you voluntarily provide, such as:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <strong>Contact forms:</strong> Name, email address, and any message content you
              submit through our contact, partnership, or careers forms.
            </li>
            <li>
              <strong>Online ordering:</strong> Order information is collected and processed by our
              third-party ordering provider, Clover. Please review Clover's privacy policy for
              details on how they handle your data.
            </li>
          </ul>
          <p className="mt-3">
            We do not collect payment information directly. All payment processing is handled by
            third-party providers.
          </p>
        </section>

        <section>
          <h2 className="font-dm-serif text-xl text-espresso mb-3">Cookies and Analytics</h2>
          <p>
            We use Google Analytics 4 (GA4) to collect anonymized data about how visitors use our
            Site, including page views, session duration, and traffic sources. This data helps us
            understand and improve our website experience. Google Analytics uses cookies — small text
            files stored on your device — to track this information. You can opt out of Google
            Analytics tracking by installing the{' '}
            <a
              href="https://tools.google.com/dlpage/gaoptout"
              target="_blank"
              rel="noopener noreferrer"
              className="text-caramel hover:text-gold underline"
            >
              Google Analytics Opt-out Browser Add-on
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="font-dm-serif text-xl text-espresso mb-3">Third-Party Services</h2>
          <p className="mb-3">Our Site uses the following third-party services:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Google Maps / Google Analytics:</strong> Used for location mapping and
              anonymized site analytics. Subject to{' '}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-caramel hover:text-gold underline"
              >
                Google's Privacy Policy
              </a>
              .
            </li>
            <li>
              <strong>Clover Online Ordering:</strong> Used for online order processing. Subject to
              Clover's privacy policy.
            </li>
            <li>
              <strong>Formspree:</strong> Used to process contact form submissions. Subject to
              Formspree's privacy policy.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-dm-serif text-xl text-espresso mb-3">How We Use Your Information</h2>
          <p>
            Information you provide via contact forms is used solely to respond to your inquiry. We
            do not sell, rent, or share your personal information with third parties for marketing
            purposes.
          </p>
        </section>

        <section>
          <h2 className="font-dm-serif text-xl text-espresso mb-3">Data Retention</h2>
          <p>
            We retain form submission data only as long as necessary to respond to your inquiry. You
            may request deletion of your data at any time by contacting us.
          </p>
        </section>

        <section>
          <h2 className="font-dm-serif text-xl text-espresso mb-3">Your Rights</h2>
          <p>
            Depending on your location, you may have the right to access, correct, or delete
            personal information we hold about you. To exercise these rights, please contact us at
            the address below.
          </p>
        </section>

        <section>
          <h2 className="font-dm-serif text-xl text-espresso mb-3">Contact</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us:
          </p>
          <address className="not-italic mt-3 space-y-1">
            <p className="font-semibold text-espresso">967 Coffee Co.</p>
            <p>11235 Alpharetta Highway Suite 136</p>
            <p>Roswell, GA 30076</p>
            <p>
              <a href="tel:+14702923108" className="text-caramel hover:text-gold transition-colors">
                (470) 292-3108
              </a>
            </p>
          </address>
        </section>

        <section>
          <h2 className="font-dm-serif text-xl text-espresso mb-3">Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Any changes will be posted on this
            page with an updated effective date.
          </p>
        </section>
      </div>
    </div>
  )
}
