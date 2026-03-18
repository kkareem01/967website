import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import JsonLd from '@/components/JsonLd'
import { cafeSchema, breadcrumbSchema } from '@/lib/schema'

const seoDescription =
  'The story of 967 Coffee Co. Real Yemeni coffee. A warm place to gather. Built on hospitality. Roswell, GA.'

export const metadata: Metadata = {
  title: 'About Us | Authentic Yemeni Coffee in Roswell, GA | 967 Coffee Co.',
  description: seoDescription,
  alternates: { canonical: 'https://www.967coffeeco.com/about' },
  openGraph: {
    title: 'About Us | Authentic Yemeni Coffee in Roswell, GA | 967 Coffee Co.',
    description: seoDescription,
    url: 'https://www.967coffeeco.com/about',
    siteName: '967 Coffee Co.',
    type: 'website',
    images: [
      {
        url: '/images/og-homepage.jpg',
        width: 1200,
        height: 630,
        alt: '967 Coffee Co. — Authentic Yemeni Coffee in Roswell GA',
      },
    ],
  },
  twitter: { card: 'summary_large_image' },
}

const storeImages = [
  { src: '/images/store/Group-1.jpg', alt: '967 Coffee Co. guests gathering in the majlis' },
  { src: '/images/store/Group-2.JPG', alt: '967 Coffee Co. community enjoying Yemeni coffee together' },
  { src: '/images/store/Group-3.jpg', alt: '967 Coffee Co. friends sharing a moment over coffee' },
] as const

export default function AboutPage() {
  return (
    <>
      <JsonLd data={cafeSchema} />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: 'https://www.967coffeeco.com' },
          { name: 'About', url: 'https://www.967coffeeco.com/about' },
        ])}
      />

      <div className="bg-off-white">

        {/* ── Hero ── */}
        <section className="relative py-20 md:py-28 px-4 sm:px-6 lg:px-8">
          <Image
            src="/images/store/outdoor.jpg"
            alt="967 Coffee Co. exterior — Yemeni coffee shop in Roswell, GA"
            fill
            priority
            fetchPriority="high"
            sizes="100vw"
            className="object-cover object-[center_25%]"
          />
          <div
            className="absolute inset-0 bg-gradient-to-b from-espresso/70 via-espresso/60 to-espresso/80"
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <p className="font-inter text-[10px] tracking-[0.35em] uppercase text-caramel mb-6">
              Our Story
            </p>
            <div className="w-8 h-px bg-caramel mx-auto mb-10" aria-hidden="true" />
            <h1>
              <span className="font-dm-serif text-4xl md:text-5xl lg:text-6xl text-cream block leading-tight">
                In Yemen, coffee isn&rsquo;t just a drink.
              </span>
              <span className="font-dm-serif italic text-4xl md:text-5xl lg:text-6xl text-caramel block leading-tight mt-2">
                It&rsquo;s how you say welcome.
              </span>
            </h1>
          </div>
        </section>

        {/* ── Content Sections ── */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 space-y-16 md:space-y-24">

          {/* 1. Origin — Image + Text Split */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch rounded-2xl overflow-hidden">
            <div className="relative aspect-[3/4] lg:aspect-auto lg:min-h-[560px] order-last">
              <Image
                src="/images/store/indoor-3.jpg"
                alt="967 Coffee Co. interior — warm lighting and inviting atmosphere in Roswell GA"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-espresso/30 via-transparent to-transparent"
                aria-hidden="true"
              />
            </div>

            <div className="bg-off-white px-8 py-12 md:px-12 md:py-16 lg:py-20 flex flex-col justify-center">
              <p className="font-inter text-[10px] tracking-[0.35em] uppercase text-caramel mb-4">
                Origin
              </p>
              <h2 className="font-dm-serif text-3xl md:text-4xl text-espresso mb-6 leading-tight">
                967 is Yemen&rsquo;s{' '}
                <span className="italic text-coffee">calling code.</span>
              </h2>

              <div className="font-inter text-sm md:text-base text-coffee/80 leading-relaxed space-y-4">
                <p>
                  We named our shop after Yemen&rsquo;s phone code. It is a reminder
                  of where coffee started. Yemen grew the first coffee beans over
                  600 years ago. High up in the mountains. At 7,000 feet. Farmed by
                  hand. Dried in the sun.
                </p>
                <p>
                  We brought that story to Roswell, Georgia. A place where everyone
                  is welcome. Where the coffee is real. And the doors stay open late.
                </p>
              </div>
            </div>
          </section>

          {/* 2. Philosophy — Full-Width Text */}
          <section className="max-w-3xl mx-auto text-center py-4 md:py-8">
            <p className="font-inter text-[10px] tracking-[0.35em] uppercase text-caramel mb-4">
              What We Believe
            </p>
            <h2 className="font-dm-serif text-3xl md:text-5xl text-espresso mb-8 leading-tight">
              Every cup tells a story.
            </h2>
            <p className="font-inter text-sm md:text-base text-coffee/80 leading-relaxed max-w-2xl mx-auto">
              We pick the best beans. We use old ways to make them. Spices. Slow
              roasting. Recipes passed down for ages. Every drink we serve has a
              story behind it. A place it came from. A reason it tastes the way it
              does. That is what makes us different.
            </p>
            <div className="w-12 h-px bg-caramel mx-auto mt-10" aria-hidden="true" />
          </section>

          {/* 3. Bean Sourcing — Reverse Split (text left, image right) */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch rounded-2xl overflow-hidden">
            <div className="bg-off-white px-8 py-12 md:px-12 md:py-16 lg:py-20 flex flex-col justify-center order-last lg:order-first">
              <p className="font-inter text-[10px] tracking-[0.35em] uppercase text-caramel mb-4">
                Our Beans
              </p>
              <h2 className="font-dm-serif text-3xl md:text-4xl text-espresso mb-6 leading-tight">
                From Yemen&rsquo;s highlands{' '}
                <span className="italic text-coffee">to your cup.</span>
              </h2>

              <div className="font-inter text-sm md:text-base text-coffee/80 leading-relaxed space-y-4">
                <p>
                  Our beans grow high up in Yemen&rsquo;s mountains. Farmers pick
                  them by hand. They dry them in the sun. This is how it has been
                  done for hundreds of years.
                </p>
                <p>
                  When you drink our coffee, you taste that care. That history. That
                  freshness. No shortcuts. No mass-produced blends. Just real coffee
                  from the place where it all began.
                </p>
              </div>
            </div>

            <div className="relative aspect-[3/4] lg:aspect-auto lg:min-h-[560px]">
              <Image
                src="/images/store/indoor-2.jpg"
                alt="Coffee preparation at 967 Coffee Co. — handcrafted with care"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-espresso/30 via-transparent to-transparent"
                aria-hidden="true"
              />
            </div>
          </section>

          {/* 4. The Majlis — The Space */}
          <section className="bg-cream rounded-3xl p-8 md:p-12">
            <div className="max-w-2xl mx-auto text-center mb-10">
              <p className="font-inter text-[10px] tracking-[0.35em] uppercase text-caramel mb-4">
                The Space
              </p>
              <h2 className="font-dm-serif text-3xl md:text-5xl text-espresso mb-3 leading-tight">
                A modern-day majlis.
              </h2>
              <p className="font-dm-serif italic text-lg md:text-xl text-coffee mt-1 mb-8">
                A place to gather, unwind, and feel at home.
              </p>
              <p className="font-inter text-sm md:text-base text-coffee/80 leading-relaxed">
                In our culture, the majlis is where people come together. To talk.
                To laugh. To share tea and coffee. Our cafe is built on that idea.
                Come study. Come meet friends. Come sit alone with your thoughts.
                Late-night talks over Adeni chai. Morning coffee before work. You
                belong here.
              </p>
            </div>

            {/* Image Strip */}
            <div className="flex gap-3 overflow-x-auto scrollbar-hide md:grid md:grid-cols-3 md:gap-4">
              {storeImages.map((img) => (
                <div
                  key={img.src}
                  className="relative flex-shrink-0 w-[60vw] md:w-auto aspect-[4/3] rounded-xl overflow-hidden"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 768px) 60vw, 33vw"
                    className="object-cover object-center"
                  />
                </div>
              ))}
            </div>
          </section>

          {/* 5. Hospitality Pull Quote */}
          <section className="max-w-3xl mx-auto text-center py-4">
            <p
              className="font-dm-serif text-8xl md:text-9xl text-caramel/20 leading-none select-none"
              aria-hidden="true"
            >
              &ldquo;
            </p>
            <blockquote className="-mt-8 md:-mt-12">
              <p className="font-dm-serif italic text-3xl md:text-4xl lg:text-5xl text-espresso leading-tight">
                Hospitality is not something we add&nbsp;on.
                <br />
                It is our foundation.
              </p>
            </blockquote>
            <div className="w-12 h-px bg-caramel mx-auto my-8" aria-hidden="true" />
            <p className="font-inter text-sm md:text-base text-coffee/70 leading-relaxed max-w-xl mx-auto">
              When you walk in, you are not a customer. You are a guest. That is how
              it works in our culture. We serve you the way we would serve family.
              That will never change.
            </p>
          </section>

          {/* 6. Visit Us CTA */}
          <section className="relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0">
              <Image
                src="/images/store/outdoor.jpg"
                alt=""
                fill
                sizes="(max-width: 1536px) 100vw, 1152px"
                className="object-cover object-center"
                aria-hidden="true"
              />
            </div>
            <div className="absolute inset-0 bg-espresso/80" aria-hidden="true" />

            <div className="relative z-10 p-8 md:p-14 text-center">
              <h2 className="font-dm-serif text-3xl md:text-5xl text-cream mb-4">
                Come sit with us.
              </h2>
              <p className="font-inter text-cream/70 text-sm mb-8">
                11235 Alpharetta Highway Suite 136, Roswell, GA 30076
              </p>
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

        </div>
      </div>
    </>
  )
}
