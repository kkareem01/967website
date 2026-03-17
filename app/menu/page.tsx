import type { Metadata } from 'next'
import JsonLd from '@/components/JsonLd'
import { cafeSchema, breadcrumbSchema } from '@/lib/schema'
import { MENU_CATEGORIES } from '@/lib/menu-data'
import CategoryNav from '@/components/menu/CategoryNav'
import MenuCategorySection from '@/components/menu/MenuCategorySection'

export const metadata: Metadata = {
  title: 'Coffee Menu | Yemeni Lattes, Specialty Drinks & More | 967 Coffee Co.',
  description:
    'Explore our full menu of authentic Yemeni coffee drinks, specialty lattes, traditional beverages, and refreshers. Order online or visit us in Roswell, GA.',
  alternates: { canonical: 'https://www.967coffeeco.com/menu' },
  openGraph: {
    title: 'Coffee Menu | Yemeni Lattes, Specialty Drinks & More | 967 Coffee Co.',
    description:
      'Explore our full menu of authentic Yemeni coffee drinks, specialty lattes, traditional beverages, and refreshers. Order online or visit us in Roswell, GA.',
    url: 'https://www.967coffeeco.com/menu',
    siteName: '967 Coffee Co.',
    type: 'website',
    images: [
      {
        url: '/images/og-homepage.jpg',
        width: 1200,
        height: 630,
        alt: '967 Coffee Co. menu — Authentic Yemeni Coffee in Roswell GA',
      },
    ],
  },
  twitter: { card: 'summary_large_image' },
}

const menuSchema = {
  ...cafeSchema,
  hasMenu: 'https://www.967coffeeco.com/menu',
}

export default function MenuPage() {
  return (
    <>
      <JsonLd data={menuSchema} />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: 'https://www.967coffeeco.com' },
          { name: 'Menu', url: 'https://www.967coffeeco.com/menu' },
        ])}
      />

      {/* Sticky Order Online banner */}
      <div className="bg-caramel py-3 px-4 text-center sticky top-16 z-30">
        <p className="font-inter text-espresso text-sm font-medium">
          Order for pickup —{' '}
          <a
            href="https://www.clover.com/online-ordering/967-coffee-co-roswell"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold underline underline-offset-2 hover:text-coffee transition-colors"
          >
            Order Online Now
          </a>
        </p>
      </div>

      <div className="bg-off-white">
        {/* Light Hero */}
        <div className="bg-cream py-14 px-4 sm:px-6 lg:px-8 md:py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-dm-serif text-4xl md:text-5xl text-espresso">
              967CoffeeCo Menu
            </h1>
            <div
              className="w-12 h-px bg-caramel mx-auto mt-6"
              aria-hidden="true"
            />
          </div>
        </div>

        {/* Category Navigation */}
        <CategoryNav categories={MENU_CATEGORIES} />

        {/* Menu Sections */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 md:pb-20">
          {MENU_CATEGORIES.map((category, index) => (
            <MenuCategorySection
              key={category.id}
              category={category}
              isFirst={index === 0}
            />
          ))}

          {/* Bottom order CTA */}
          <div className="mt-16 bg-cream rounded-3xl p-8 text-center">
            <h2 className="font-dm-serif text-2xl text-espresso mb-3">
              Ready to order?
            </h2>
            <p className="font-inter text-coffee/70 text-sm mb-6">
              Order online for pickup through our Clover portal.
            </p>
            <a
              href="https://www.clover.com/online-ordering/967-coffee-co-roswell"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-caramel text-espresso font-inter font-semibold px-8 py-3 rounded-full min-h-[44px] hover:bg-gold hover:scale-105 transition-all"
            >
              Order Online
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
