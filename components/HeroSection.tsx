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
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-espresso/60" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="font-dm-serif text-4xl md:text-6xl lg:text-7xl text-cream leading-tight mb-4">
          967 Coffee Co.
        </h1>
        <p className="font-inter text-lg md:text-xl text-cream/80 mb-8 max-w-xl mx-auto">
          Authentic Yemeni coffee, signature drinks, and desserts
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://www.google.com/maps/dir//967+Coffee+Co,+11235+Alpharetta+Hwy+Suite+136,+Roswell,+GA+30076"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center bg-caramel text-espresso font-inter font-semibold px-8 py-3 rounded-full min-h-[44px] hover:bg-gold hover:scale-105 transition-all"
          >
            Get Directions
          </a>
          <Link
            href="/menu"
            className="w-full sm:w-auto inline-flex items-center justify-center border-2 border-cream text-cream font-inter font-semibold px-8 py-3 rounded-full min-h-[44px] hover:bg-cream hover:text-espresso hover:scale-105 transition-all"
          >
            View Menu
          </Link>
        </div>
      </div>
    </section>
  )
}
