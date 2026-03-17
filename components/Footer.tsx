import Link from 'next/link'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Menu', href: '/menu' },
  { label: 'Contact', href: '/contact' },
  { label: 'Partnerships', href: '/partnerships' },
  { label: 'Careers', href: '/careers' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-espresso text-cream/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <p className="font-dm-serif text-3xl text-cream mb-3">967 Coffee Co.</p>
            <p className="text-sm text-cream/60 leading-relaxed">
              Authentic Yemeni coffee, signature drinks, and desserts.
              <br />
              Roswell, GA.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-4 mt-5">
              <a
                href="https://www.instagram.com/967coffeeco/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="967 Coffee Co. on Instagram"
                className="text-cream/60 hover:text-caramel transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a
                href="https://www.tiktok.com/@967.coffee.co"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="967 Coffee Co. on TikTok"
                className="text-cream/60 hover:text-caramel transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.67a8.18 8.18 0 004.77 1.52V6.73a4.85 4.85 0 01-1-.04z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61564941164132"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="967 Coffee Co. on Facebook"
                className="text-cream/60 hover:text-caramel transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>

          {/* NAP */}
          <div
            itemScope
            itemType="https://schema.org/CafeOrCoffeeShop"
            className="lg:col-span-1"
          >
            <h3 className="text-cream font-inter font-semibold text-sm uppercase tracking-widest mb-4">
              Visit Us
            </h3>
            <address
              itemProp="address"
              itemScope
              itemType="https://schema.org/PostalAddress"
              className="not-italic text-sm leading-relaxed space-y-1"
            >
              <p itemProp="streetAddress">11235 Alpharetta Highway Suite 136</p>
              <p>
                <span itemProp="addressLocality">Roswell</span>,{' '}
                <span itemProp="addressRegion">GA</span>{' '}
                <span itemProp="postalCode">30076</span>
              </p>
            </address>
            <a
              href="tel:+14702923108"
              itemProp="telephone"
              className="inline-block mt-3 text-caramel hover:text-gold transition-colors text-sm font-medium"
            >
              (470) 292-3108
            </a>
            <div className="mt-4">
              <a
                href="https://www.google.com/maps/dir//967+Coffee+Co,+11235+Alpharetta+Hwy+Suite+136,+Roswell,+GA+30076"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-cream/60 hover:text-caramel transition-colors"
              >
                Get Directions →
              </a>
            </div>
          </div>

          {/* Hours */}
          <div className="lg:col-span-1">
            <h3 className="text-cream font-inter font-semibold text-sm uppercase tracking-widest mb-4">
              Hours
            </h3>
            <table className="text-sm w-full">
              <tbody className="space-y-1">
                {[
                  { day: 'Sun – Thu', hours: '7:00 AM – 12:00 AM' },
                  { day: 'Fri & Sat', hours: '7:00 AM – 2:00 AM' },
                ].map(({ day, hours }) => (
                  <tr key={day}>
                    <td className="pr-4 text-cream/60 py-0.5">{day}</td>
                    <td className="text-cream/80">{hours}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Nav + Order */}
          <div className="lg:col-span-1">
            <h3 className="text-cream font-inter font-semibold text-sm uppercase tracking-widest mb-4">
              Pages
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-cream/60 hover:text-caramel transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <a
              href="https://www.clover.com/online-ordering/967-coffee-co-roswell"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center mt-5 bg-caramel text-espresso text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-gold transition-colors min-h-[44px]"
            >
              Order Online
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-coffee/40 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-cream/40">
          <p>© {year} 967 Coffee Co. · All rights reserved.</p>
          <Link href="/privacy-policy" className="hover:text-cream/60 transition-colors">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  )
}
