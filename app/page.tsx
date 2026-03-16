import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import HeroSection from '@/components/HeroSection'
import ProductCard from '@/components/ProductCard'
import ReviewCard from '@/components/ReviewCard'
import WhySection from '@/components/WhySection'
import FaqSection from '@/components/FaqSection'
import JsonLd from '@/components/JsonLd'
import { cafeSchema, websiteSchema, faqSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: '967 Coffee Co. | Yemeni Coffee Shop near Atlanta | Roswell, GA',
  description:
    '967 Coffee Co. is an authentic Yemeni coffee shop in Roswell, GA serving specialty lattes, traditional Yemeni drinks, and desserts. Open till 2AM on weekends.',
  alternates: { canonical: 'https://www.967coffeeco.com' },
  openGraph: {
    title: '967 Coffee Co. | Yemeni Coffee Shop near Atlanta | Roswell, GA',
    description:
      '967 Coffee Co. is an authentic Yemeni coffee shop in Roswell, GA serving specialty lattes, traditional Yemeni drinks, and desserts. Open till 2AM on weekends.',
    url: 'https://www.967coffeeco.com',
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

const featuredItems = [
  {
    name: 'Iced Adeni',
    description: 'Bold spiced espresso over ice.',
    image: '/images/drinks/iced-adeni.jpg',
  },
  {
    name: 'Iced Latte',
    description: 'Smooth espresso, cold milk, perfect ice.',
    image: '/images/drinks/iced-latte.jpg',
  },
  {
    name: 'Dragon Refresher',
    description: 'Bright, fruity, and energizing.',
    image: '/images/drinks/dragon-refresher.jpg',
  },
  {
    name: 'Biscoff Cake',
    description: 'Layered cookie butter cake.',
    image: '/images/food/biscoff-cake.jpg',
  },
  {
    name: 'Pistachio Honeycomb',
    description: 'Nutty, sweet, and incredibly satisfying.',
    image: '/images/food/pista-honeycomb.jpg',
  },
  {
    name: 'Strawberry Drink',
    description: 'Fresh strawberry, creamy and bright.',
    image: '/images/drinks/strawberry.jpg',
  },
]

// TODO: Replace with real Google review data
const reviews = [
  {
    name: 'Sarah M.',
    initials: 'SM',
    color: '#C8853A',
    stars: 5,
    excerpt:
      "Absolutely the best coffee spot in Roswell. The Iced Adeni is unlike anything I've had before — rich and perfectly spiced. This place has become my daily stop.",
  },
  {
    name: 'James K.',
    initials: 'JK',
    color: '#3D1F0D',
    stars: 5,
    excerpt:
      'Came in to study and ended up staying for three hours. Great atmosphere, incredible drinks, and the staff is so welcoming. The Pistachio Latte is a must-try.',
  },
  {
    name: 'Layla R.',
    initials: 'LR',
    color: '#D4A853',
    stars: 5,
    excerpt:
      "I didn't know what Yemeni coffee was before visiting 967. Now I can't go back to regular coffee shops. The Qishr is something special. Highly recommend.",
  },
]

const faqs = [
  {
    q: 'What is Yemeni coffee?',
    a: "Yemeni coffee is one of the world's oldest and most celebrated coffee traditions. Yemen was the first country to cultivate and trade coffee commercially, dating back to the 15th century. Yemeni coffee is known for its complex, wine-like flavor profiles, often with fruity and earthy notes. At 967 Coffee Co., we honor this heritage with every cup.",
  },
  {
    q: 'Where is 967 Coffee Co. located?',
    a: "We're located at 11235 Alpharetta Highway Suite 136, Roswell, GA 30076 — just minutes from Alpharetta and north Atlanta.",
  },
  {
    q: 'What are your hours?',
    a: "We're open Monday–Thursday 7AM–11PM, Friday 7AM–2AM, Saturday 9AM–2AM, and Sunday 9AM–10PM. We're open late on weekends!",
  },
  {
    q: 'Do you offer online ordering?',
    a: 'Yes! You can place an order online through our Clover ordering portal for pickup.',
  },
  {
    q: 'What makes 967 Coffee Co. different?',
    a: "We specialize in authentic Yemeni coffee and drinks — a rare and special tradition you won't find at most coffee shops. Every drink is crafted with care, and our shop is designed to feel like a warm, welcoming gathering place.",
  },
  {
    q: 'Do you offer catering or events?',
    a: 'Yes, we offer partnership and catering opportunities. Visit our Partnerships page or contact us to discuss bringing 967 Coffee Co. to your event or city.',
  },
]

export default function HomePage() {
  return (
    <>
      <JsonLd data={cafeSchema} />
      <JsonLd data={websiteSchema} />
      <JsonLd data={faqSchema(faqs)} />

      {/* 1. Hero */}
      <HeroSection />

      {/* 2. Most Popular */}
      <section className="bg-off-white py-12 px-4 sm:px-6 lg:px-8 md:py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-dm-serif text-2xl md:text-4xl text-espresso mb-3">
              Most Popular at 967
            </h2>
            <p className="font-inter text-coffee/70 text-sm max-w-xl mx-auto">
              Rich Yemeni coffee, signature drinks, and desserts people keep coming back for.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {featuredItems.map((item) => (
              <ProductCard key={item.name} {...item} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/menu"
              className="inline-flex items-center bg-caramel text-espresso font-inter font-semibold px-8 py-3 rounded-full min-h-[44px] hover:bg-gold hover:scale-105 transition-all"
            >
              View Full Menu
            </Link>
          </div>
        </div>
      </section>

      {/* 3. Reviews */}
      <section className="bg-cream py-12 px-4 sm:px-6 lg:px-8 md:py-20">
        <div className="max-w-6xl mx-auto">
          {/* Rating header */}
          <div className="flex items-center justify-center gap-3 mb-10">
            {/* Google G */}
            <svg width="32" height="32" viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
            </svg>
            <p className="font-dm-serif text-2xl text-espresso">
              4.9★{' '}
              <span className="font-inter text-base text-coffee/70 font-normal">
                from 600+ Google reviews
              </span>
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <ReviewCard key={review.name} {...review} />
            ))}
          </div>
          <div className="text-center mt-10">
            <a
              href="https://www.google.com/maps/dir//967+Coffee+Co,+11235+Alpharetta+Hwy+Suite+136,+Roswell,+GA+30076"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-caramel text-espresso font-inter font-semibold px-8 py-3 rounded-full min-h-[44px] hover:bg-gold hover:scale-105 transition-all"
            >
              Get Directions
            </a>
          </div>
        </div>
      </section>

      {/* 4. Why 967 */}
      <WhySection />

      {/* 5. Location */}
      <section className="bg-off-white py-12 px-4 sm:px-6 lg:px-8 md:py-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Address */}
          <div>
            <h2 className="font-inter font-semibold text-sm uppercase tracking-widest text-caramel mb-4">
              Find Us
            </h2>
            <address className="not-italic text-coffee text-sm leading-relaxed space-y-1 mb-4">
              <p>11235 Alpharetta Highway Suite 136</p>
              <p>Roswell, GA 30076</p>
            </address>
            <a
              href="tel:+14702923108"
              className="block text-espresso font-inter font-semibold text-sm mb-5 hover:text-caramel transition-colors"
            >
              (470) 292-3108
            </a>
            <a
              href="https://www.google.com/maps/dir//967+Coffee+Co,+11235+Alpharetta+Hwy+Suite+136,+Roswell,+GA+30076"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-caramel text-espresso text-sm font-semibold px-6 py-2.5 rounded-full min-h-[44px] hover:bg-gold transition-colors"
            >
              Get Directions
            </a>
          </div>

          {/* Hours */}
          <div>
            <h2 className="font-inter font-semibold text-sm uppercase tracking-widest text-caramel mb-4">
              Hours
            </h2>
            <table className="text-sm w-full">
              <tbody>
                {[
                  { day: 'Monday – Thursday', hours: '7:00 AM – 11:00 PM' },
                  { day: 'Friday', hours: '7:00 AM – 2:00 AM' },
                  { day: 'Saturday', hours: '9:00 AM – 2:00 AM' },
                  { day: 'Sunday', hours: '9:00 AM – 10:00 PM' },
                ].map(({ day, hours }) => (
                  <tr key={day} className="border-b border-latte last:border-0">
                    <td className="pr-4 py-2 text-coffee/70">{day}</td>
                    <td className="py-2 text-espresso font-medium">{hours}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Map */}
          <div className="rounded-2xl overflow-hidden border border-coffee/10 min-h-[200px]">
            <iframe
              loading="lazy"
              title="967 Coffee Co. location map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3308.3!2d-84.3162!3d34.0236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f576e30b3b6b57%3A0x1f2b9d3a8f3c5e6d!2s967%20Coffee%20Co!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '200px' }}
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* 6. FAQ */}
      <FaqSection faqs={faqs} />

      {/* 7. Closing CTA */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <Image
          src="/images/store/outdoor.jpg"
          alt="967 Coffee Co. exterior — Roswell, GA"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-espresso/80" aria-hidden="true" />
        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <h2 className="font-dm-serif text-4xl md:text-5xl text-cream mb-4">
            You&rsquo;re always welcome.
          </h2>
          <p className="font-inter text-cream/70 text-lg mb-8">Come sit with us.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://www.google.com/maps/dir//967+Coffee+Co,+11235+Alpharetta+Hwy+Suite+136,+Roswell,+GA+30076"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center bg-caramel text-espresso font-inter font-semibold px-8 py-3 rounded-full min-h-[44px] hover:bg-gold hover:scale-105 transition-all"
            >
              Get Directions
            </a>
            <a
              href="tel:+14702923108"
              className="w-full sm:w-auto inline-flex items-center justify-center border-2 border-cream text-cream font-inter font-semibold px-8 py-3 rounded-full min-h-[44px] hover:bg-cream hover:text-espresso hover:scale-105 transition-all"
            >
              Call Now
            </a>
            <Link
              href="/menu"
              className="w-full sm:w-auto inline-flex items-center justify-center border-2 border-cream/60 text-cream/80 font-inter font-semibold px-8 py-3 rounded-full min-h-[44px] hover:border-cream hover:text-cream hover:scale-105 transition-all"
            >
              View Menu
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
