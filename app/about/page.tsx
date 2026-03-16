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
        {/* Page header */}
        <div className="bg-espresso py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-dm-serif text-4xl md:text-5xl text-cream">
              About 967 Coffee Co. — Rooted in Yemen, Brewed in Atlanta
            </h1>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 space-y-16">

          {/* 1. Origin Story */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="font-dm-serif text-2xl md:text-4xl text-espresso mb-6">
                Rooted in Yemen, Brewed in Atlanta
              </h2>
              <div className="prose prose-sm text-coffee space-y-4 font-inter leading-relaxed">
                <p>
                  The name <strong>967 Coffee Co.</strong> isn't random — it's Yemen's international
                  calling code. It's a daily reminder of where we come from.
                </p>
                <p>
                  Yemen sits at the origin of coffee itself. Before Starbucks, before espresso,
                  before coffee culture spread across the globe, Yemeni farmers were cultivating and
                  trading the world's most prized beans on steep mountain terraces, some sitting at
                  7,000 feet elevation. These ancient farms have been producing coffee for over six
                  centuries, developing a complexity and richness that modern mass-produced beans
                  simply cannot replicate.
                </p>
                <p>
                  967 Coffee Co. was born from a desire to share this legacy with Roswell, GA and
                  the greater Atlanta area. We're more than a coffee shop — we're a bridge between
                  centuries of tradition and your daily cup. Every drink we serve carries the spirit
                  of those mountain farms, brewed with care and served with the warmth that Yemeni
                  hospitality demands.
                </p>
                <p>
                  Located in Roswell, GA, we've built a space where everyone is welcome — whether
                  you're here to study, meet friends, or simply sit and enjoy something extraordinary.
                  Open late on weekends because great coffee doesn't have a bedtime.
                </p>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/images/store/indoor-3.jpg"
                alt="967 Coffee Co. interior — warm, inviting atmosphere in Roswell GA"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </section>

          {/* 2. What Makes Yemeni Coffee Special */}
          <section className="bg-cream rounded-3xl p-8 md:p-12">
            <h2 className="font-dm-serif text-2xl md:text-4xl text-espresso mb-6">
              Flavors That Tell a Story
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-inter text-coffee text-sm leading-relaxed">
              <div className="space-y-4">
                <p>
                  Yemeni coffee is unlike anything else in the world. Grown at high altitudes on
                  terraced hillsides, the beans develop an extraordinary complexity — often described
                  as wine-like in its acidity, with layers of fruit, earth, and spice that unfold
                  with every sip.
                </p>
                <p>
                  One of our most beloved offerings is <strong>Qishr</strong> — a traditional Yemeni
                  spiced coffee brewed with ginger and coffee husks rather than the bean itself. It's
                  warm, aromatic, and carries thousands of years of cultural memory in every cup.
                </p>
              </div>
              <div className="space-y-4">
                <p>
                  In Yemeni culture, coffee is never just a drink — it's an invitation. When you
                  offer someone coffee, you're offering them your home, your time, your hospitality.
                  <strong> Kahwa</strong>, made with lightly roasted green beans, cardamom, and
                  saffron, is traditionally served to guests as a gesture of welcome.
                </p>
                <p>
                  At 967 Coffee Co., every drink on our menu honors this tradition — from our
                  specialty lattes to our traditional Yemeni beverages. You won't find these flavors
                  at a chain coffee shop. This is something genuinely different.
                </p>
              </div>
            </div>
          </section>

          {/* 3. Our Mission */}
          <section className="max-w-3xl">
            <h2 className="font-dm-serif text-2xl md:text-4xl text-espresso mb-6">
              Hospitality is Our Heritage
            </h2>
            <div className="font-inter text-coffee text-sm leading-relaxed space-y-4">
              <p>
                At 967 Coffee Co., hospitality isn't a policy — it's a heritage. In Yemeni culture,
                offering coffee to a guest is an act of deep respect and warmth. That ethos lives in
                everything we do: how we greet you at the door, how we craft your drink, how we've
                designed our space.
              </p>
              <p>
                We believe a great coffee shop should feel like a second home — a place where you
                can show up as you are, stay as long as you need, and leave feeling genuinely better
                than when you arrived. We've built 967 to be that place for Roswell and the
                surrounding Atlanta community.
              </p>
              <p>
                Our mission is simple: bring the authenticity of Yemeni coffee culture to every
                person who walks through our doors, and make them feel welcome while we do it.
              </p>
            </div>
          </section>

          {/* 4. Visit Us */}
          <section className="bg-espresso rounded-3xl p-8 md:p-12 text-center">
            <h2 className="font-dm-serif text-2xl md:text-4xl text-cream mb-4">
              Visit Us for a Taste of Yemen
            </h2>
            <p className="font-inter text-cream/70 text-sm mb-6">
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
          </section>
        </div>
      </div>
    </>
  )
}
