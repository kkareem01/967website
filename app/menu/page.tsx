import type { Metadata } from 'next'
import MenuSection from '@/components/MenuSection'
import JsonLd from '@/components/JsonLd'
import { cafeSchema, breadcrumbSchema } from '@/lib/schema'

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

const menuData = [
  {
    category: 'Specialty Drinks',
    description: 'Our signature creations — bold flavor, creative combinations.',
    items: [
      { name: 'Pistachio Latte', description: 'Rich espresso meets velvety pistachio cream.' },
      {
        name: 'White Chocolate Raspberry Latte',
        description: 'Sweet white chocolate with bright raspberry notes.',
      },
      { name: 'Tiramisu Latte', description: 'Inspired by the classic Italian dessert.' },
      {
        name: 'Yemeni Latte',
        description: 'Our house latte — bold, spiced, and deeply aromatic.',
      },
      { name: 'Spanish Latte', description: 'Creamy, sweet, and perfectly balanced.' },
      { name: 'Iced Mocha Latte', description: 'Chocolate and espresso over ice.' },
      { name: 'Iced Matcha Latte', description: 'Ceremonial grade matcha, smooth and earthy.' },
      { name: 'Matcha Latte', description: 'Warm, comforting, beautifully layered.' },
      { name: 'Biscoff Latte', description: 'Cookie butter meets your morning coffee.' },
      { name: 'Caramel Macchiato', description: 'A timeless classic, done right.' },
    ],
  },
  {
    category: 'Traditional Yemeni Drinks',
    description: "Centuries-old recipes, honoring Yemen's coffee heritage.",
    items: [
      {
        name: 'Qishr',
        description:
          'Traditional Yemeni spiced coffee brewed with ginger and coffee husks — a cultural staple.',
      },
      {
        name: 'Yemeni Tea',
        description: "Aromatic spiced tea, the way it's served in Yemen.",
      },
      {
        name: 'Kahwa',
        description: 'Lightly roasted green coffee beans with cardamom and saffron.',
      },
    ],
  },
  {
    category: 'Refreshers',
    description: 'Light, fruity, and perfect for any time of day.',
    items: [
      { name: 'Hibiscus Refresher', description: 'Tart hibiscus flower, naturally refreshing.' },
      { name: 'Passion Fruit Refresher', description: 'Tropical and bright.' },
      { name: 'Mango Refresher', description: 'Sweet mango with a citrus finish.' },
    ],
  },
  {
    category: 'Coffee',
    description: 'Classic coffee drinks, expertly prepared.',
    items: [
      { name: 'Drip Coffee', description: 'Fresh brewed, clean and simple.' },
      { name: 'Americano', description: 'Espresso and hot water — bold and smooth.' },
      { name: 'Cappuccino', description: 'Equal parts espresso, steamed milk, and foam.' },
      { name: 'Flat White', description: 'Double ristretto, velvety microfoam.' },
    ],
  },
]

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
        <div className="bg-espresso py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-dm-serif text-4xl md:text-5xl text-cream">
              Our Menu — Authentic Yemeni Coffee &amp; Specialty Drinks
            </h1>
            <p className="font-inter text-cream/70 mt-4 text-sm">
              Roswell, GA · Open Mon–Thu 7AM–11PM · Fri 7AM–2AM · Sat 9AM–2AM · Sun 9AM–10PM
            </p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <MenuSection menuData={menuData} />

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
