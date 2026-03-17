import Image from 'next/image'
import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="relative min-h-[75vh] flex items-center justify-center">
      {/* Background image */}
      <Image
        src="/images/store/indoor-1.jpg"
        alt="967 Coffee Co. interior — warm Yemeni coffee shop in Roswell, GA"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      {/* Overlay — gradient for softer, more editorial feel */}
      <div className="absolute inset-0 bg-gradient-to-b from-espresso/55 via-espresso/50 to-espresso/70" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto py-8">
        {/* Brand name — split into two lines */}
        <h1 className="mb-0 font-dm-serif text-[3.25rem] md:text-7xl lg:text-8xl text-cream leading-none">
          967 <span className="italic">Coffee Co.</span>
        </h1>

        {/* Tagline */}
        <p className="font-inter text-[10px] md:text-xs tracking-[0.3em] uppercase text-cream/90 mt-8 mb-12">
          Authentic Yemeni Coffee
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://www.google.com/maps/dir//967+Coffee+Co,+11235+Alpharetta+Hwy+Suite+136,+Roswell,+GA+30076"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center bg-caramel text-espresso font-inter font-medium px-9 py-3.5 rounded text-sm tracking-wide min-h-[44px] hover:bg-gold transition-all"
          >
            Get Directions
          </a>
          <Link
            href="/menu"
            className="w-full sm:w-auto inline-flex items-center justify-center bg-cream text-espresso font-inter font-medium px-9 py-3.5 rounded text-sm tracking-wide min-h-[44px] hover:bg-cream/90 transition-all"
          >
            View Menu
          </Link>
        </div>
      </div>
    </section>
  )
}
