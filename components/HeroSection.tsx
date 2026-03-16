import Image from 'next/image'
import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center">
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
        {/* Location label */}
        <p className="font-inter text-[10px] md:text-xs tracking-[0.3em] uppercase text-caramel mb-10">
          Alpharetta, Georgia
        </p>

        {/* Brand name — split into two lines */}
        <h1 className="mb-0">
          <span className="font-dm-serif text-[96px] md:text-[128px] lg:text-[156px] text-cream block leading-none">
            967
          </span>
          <span className="font-dm-serif italic text-5xl md:text-6xl lg:text-7xl text-caramel block leading-snug -mt-2">
            Coffee Co.
          </span>
        </h1>

        {/* Tagline */}
        <p className="font-inter text-[10px] md:text-xs tracking-[0.3em] uppercase text-cream/50 mt-8 mb-12">
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
            className="w-full sm:w-auto inline-flex items-center justify-center border border-cream/40 text-cream font-inter font-medium px-9 py-3.5 rounded text-sm tracking-wide min-h-[44px] hover:border-cream/80 hover:bg-cream/5 transition-all"
          >
            View Our Menu
          </Link>
        </div>
      </div>
    </section>
  )
}
