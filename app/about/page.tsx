import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import JsonLd from '@/components/JsonLd'
import { cafeSchema, breadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'About Us | Authentic Yemeni Coffee in Roswell, GA | 967 Coffee Co.',
  description:
    "Learn the story behind 967 Coffee Co. — bringing Yemen's centuries-old coffee culture to Roswell and the Atlanta area. Bold roots. Rich brews. Warm hearts.",
  alternates: { canonical: 'https://www.967coffeeco.com/about' },
  openGraph: {
    title: 'About Us | Authentic Yemeni Coffee in Roswell, GA | 967 Coffee Co.',
    description:
      "Learn the story behind 967 Coffee Co. — bringing Yemen's centuries-old coffee culture to Roswell and the Atlanta area. Bold roots. Rich brews. Warm hearts.",
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
        <div className="bg-espresso py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="font-inter text-[10px] tracking-[0.35em] uppercase text-caramel mb-6">
              Our Story
            </p>
            <div className="w-8 h-px bg-caramel mx-auto mb-8" aria-hidden="true" />
            <h1>
              <span className="font-dm-serif text-4xl md:text-6xl text-cream block leading-tight">
                Rooted in Yemen,
              </span>
              <span className="font-dm-serif italic text-4xl md:text-6xl text-caramel block leading-tight mt-1">
                Brewed in Atlanta.
              </span>
            </h1>
          </div>
        </div>

        {/* ── Stats Strip ── */}
        <div className="bg-caramel py-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <dl className="grid grid-cols-3 divide-x divide-espresso/20">
              <div className="flex flex-col items-center text-center px-2 sm:px-8">
                <dt className="font-dm-serif text-4xl md:text-6xl text-espresso leading-none">
                  967
                </dt>
                <dd className="font-inter text-[10px] md:text-xs tracking-widest uppercase text-espresso/60 mt-2">
                  Yemen&rsquo;s Country Code
                </dd>
              </div>
              <div className="flex flex-col items-center text-center px-2 sm:px-8">
                <dt className="font-dm-serif text-4xl md:text-6xl text-espresso leading-none">
                  7,000<span className="text-2xl md:text-4xl"> ft</span>
                </dt>
                <dd className="font-inter text-[10px] md:text-xs tracking-widest uppercase text-espresso/60 mt-2">
                  Growing Elevation
                </dd>
              </div>
              <div className="flex flex-col items-center text-center px-2 sm:px-8">
                <dt className="font-dm-serif text-4xl md:text-6xl text-espresso leading-none">
                  600+
                </dt>
                <dd className="font-inter text-[10px] md:text-xs tracking-widest uppercase text-espresso/60 mt-2">
                  Years of Heritage
                </dd>
              </div>
            </dl>
          </div>
        </div>

        {/* ── Content sections ── */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 space-y-16 md:space-y-24">

          {/* 1. Origin Story */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch rounded-2xl overflow-hidden">

            {/* Image — left, portrait */}
            <div className="relative aspect-[3/4] lg:aspect-auto lg:min-h-[560px] order-first">
              <Image
                src="/images/store/indoor-3.jpg"
                alt="967 Coffee Co. interior — warm, inviting atmosphere in Roswell GA"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-espresso/30 via-transparent to-transparent"
                aria-hidden="true"
              />
            </div>

            {/* Text — right */}
            <div className="bg-off-white px-8 py-12 md:px-12 md:py-16 lg:py-20 flex flex-col justify-center">
              <p className="font-inter text-[10px] tracking-[0.35em] uppercase text-caramel mb-4">
                Origin
              </p>
              <h2 className="font-dm-serif text-3xl md:text-4xl text-espresso mb-6 leading-tight">
                Rooted in Yemen,{' '}
                <span className="italic text-coffee">Brewed in Atlanta</span>
              </h2>

              <blockquote className="border-l-2 border-caramel pl-5 mb-6">
                <p className="font-dm-serif italic text-lg md:text-xl text-coffee leading-relaxed">
                  &ldquo;Before Starbucks, before espresso, Yemeni farmers were
                  cultivating the world&rsquo;s most prized beans at 7,000 feet.&rdquo;
                </p>
              </blockquote>

              <div className="font-inter text-sm text-coffee/80 leading-relaxed space-y-4">
                <p>
                  The name <strong>967 Coffee Co.</strong> isn&rsquo;t random — it&rsquo;s Yemen&rsquo;s
                  international calling code. A daily reminder of where we come from. Yemen
                  sits at the origin of coffee itself, with ancient terraced farms producing
                  beans of a complexity that modern mass-produced coffee simply cannot replicate.
                </p>
                <p>
                  Located in Roswell, GA, we&rsquo;ve built a space where everyone is welcome —
                  whether you&rsquo;re here to study, meet friends, or simply sit and enjoy
                  something extraordinary. Open late on weekends because great coffee
                  doesn&rsquo;t have a bedtime.
                </p>
              </div>
            </div>
          </section>

          {/* 2. Flavors — Beverage Cards */}
          <section className="bg-cream rounded-3xl p-8 md:p-12">
            <div className="mb-10">
              <p className="font-inter text-[10px] tracking-[0.35em] uppercase text-caramel mb-3">
                Cultural Beverages
              </p>
              <h2 className="font-dm-serif text-3xl md:text-4xl text-espresso">
                Flavors That Tell a Story
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">

              {/* Qishr Card */}
              <div className="bg-espresso rounded-2xl p-7 md:p-8 flex flex-col gap-4">
                <div>
                  <p className="font-inter text-[10px] tracking-[0.3em] uppercase text-caramel/70 mb-1">
                    Traditional Yemeni
                  </p>
                  <h3 className="font-dm-serif text-3xl text-cream">Qishr</h3>
                  <p className="font-dm-serif italic text-base text-caramel mt-0.5">
                    Spiced coffee husk brew
                  </p>
                </div>
                <div className="w-10 h-px bg-caramel/40" aria-hidden="true" />
                <p className="font-inter text-sm text-cream/70 leading-relaxed">
                  One of our most beloved offerings — a traditional Yemeni spiced coffee
                  brewed with ginger and coffee husks rather than the bean itself. Warm,
                  aromatic, and carrying thousands of years of cultural memory in every cup.
                </p>
              </div>

              {/* Kahwa Card */}
              <div className="bg-coffee rounded-2xl p-7 md:p-8 flex flex-col gap-4">
                <div>
                  <p className="font-inter text-[10px] tracking-[0.3em] uppercase text-caramel/70 mb-1">
                    Traditional Yemeni
                  </p>
                  <h3 className="font-dm-serif text-3xl text-cream">Kahwa</h3>
                  <p className="font-dm-serif italic text-base text-caramel mt-0.5">
                    Green bean, cardamom &amp; saffron
                  </p>
                </div>
                <div className="w-10 h-px bg-caramel/40" aria-hidden="true" />
                <p className="font-inter text-sm text-cream/70 leading-relaxed">
                  In Yemeni culture, coffee is never just a drink — it&rsquo;s an invitation.
                  Kahwa, made with lightly roasted green beans, cardamom, and saffron, is
                  traditionally served to guests as a gesture of welcome.
                </p>
              </div>

            </div>

            <p className="font-inter text-sm text-coffee/70 leading-relaxed mt-8 max-w-2xl">
              At 967 Coffee Co., every drink on our menu honors this tradition — from our
              specialty lattes to our traditional Yemeni beverages. You won&rsquo;t find these
              flavors at a chain coffee shop. This is something genuinely different.
            </p>
          </section>

          {/* 3. Pull Quote — Hospitality */}
          <section className="max-w-3xl mx-auto text-center py-4">
            <p
              className="font-dm-serif text-8xl md:text-9xl text-caramel/20 leading-none select-none"
              aria-hidden="true"
            >
              &ldquo;
            </p>
            <blockquote className="-mt-8 md:-mt-12">
              <p className="font-dm-serif italic text-3xl md:text-4xl lg:text-5xl text-espresso leading-tight">
                Hospitality isn&rsquo;t a policy&nbsp;&mdash;
                <br />
                it&rsquo;s a heritage.
              </p>
            </blockquote>
            <div className="w-12 h-px bg-caramel mx-auto my-8" aria-hidden="true" />
            <p className="font-inter text-sm md:text-base text-coffee/70 leading-relaxed max-w-xl mx-auto">
              In Yemeni culture, offering coffee to a guest is an act of deep respect and warmth —
              that ethos lives in how we greet you, craft your drink, and design our space.
              967 Coffee Co. is built to feel like a second home for Roswell and the greater
              Atlanta community.
            </p>
          </section>

          {/* 4. Visit Us — Editorial Photo Background */}
          <section className="relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0">
              <Image
                src="/images/other/editorial-1.jpg"
                alt=""
                fill
                sizes="(max-width: 1536px) 100vw, 1152px"
                className="object-cover object-center"
                aria-hidden="true"
              />
            </div>
            <div className="absolute inset-0 bg-espresso/80" aria-hidden="true" />

            <div className="relative z-10 p-8 md:p-14 text-center">
              <p className="font-inter text-[10px] tracking-[0.35em] uppercase text-caramel mb-5">
                Find Us
              </p>
              <h2 className="font-dm-serif text-3xl md:text-5xl text-cream mb-4">
                Visit Us for a Taste of Yemen
              </h2>
              <p className="font-inter text-cream/70 text-sm mb-8">
                11235 Alpharetta Highway Suite 136, Roswell, GA 30076
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
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center border-2 border-cream text-cream font-inter font-semibold px-8 py-3 rounded-full min-h-[44px] hover:bg-cream hover:text-espresso hover:scale-105 transition-all"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </section>

        </div>
      </div>
    </>
  )
}
