export const cafeSchema = {
  '@context': 'https://schema.org/',
  '@type': 'CafeOrCoffeeShop',
  name: '967 Coffee Co.',
  url: 'https://www.967coffeeco.com',
  telephone: '+1-470-292-3108',
  priceRange: '$$',
  servesCuisine: ['Yemeni', 'Specialty Coffee', 'Middle Eastern'],
  image: 'https://www.967coffeeco.com/images/og-homepage.jpg',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '11235 Alpharetta Highway Suite 136',
    addressLocality: 'Roswell',
    addressRegion: 'GA',
    postalCode: '30076',
    addressCountry: 'US',
  },
  openingHours: [
    'Mo-Th 07:00-23:00',
    'Fr 07:00-02:00',
    'Sa 09:00-02:00',
    'Su 09:00-22:00',
  ],
  hasMap:
    'https://www.google.com/maps/dir//967+Coffee+Co,+11235+Alpharetta+Hwy+Suite+136,+Roswell,+GA+30076',
  menu: 'https://www.967coffeeco.com/menu',
  sameAs: [
    'https://www.instagram.com/967coffeeco/',
    'https://www.facebook.com/profile.php?id=61564941164132',
    'https://www.tiktok.com/@967.coffee.co',
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '600',
  },
}

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: '967 Coffee Co.',
  url: 'https://www.967coffeeco.com',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://www.967coffeeco.com/menu?q={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
}

export const breadcrumbSchema = (items: { name: string; url: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: item.name,
    item: item.url,
  })),
})

export const faqSchema = (faqs: { q: string; a: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
})

export const jobPostingSchema = {
  '@context': 'https://schema.org',
  '@type': 'JobPosting',
  title: 'Barista / Café Team Member',
  description:
    'Join the 967 Coffee Co. team in Roswell, GA. We are looking for passionate, hospitality-driven people. Whether you are a seasoned barista or new to the coffee world, we would love to hear from you.',
  employmentType: 'FULL_TIME',
  hiringOrganization: {
    '@type': 'Organization',
    name: '967 Coffee Co.',
    sameAs: 'https://www.967coffeeco.com',
  },
  jobLocation: {
    '@type': 'Place',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '11235 Alpharetta Highway Suite 136',
      addressLocality: 'Roswell',
      addressRegion: 'GA',
      postalCode: '30076',
      addressCountry: 'US',
    },
  },
  datePosted: '2026-01-01',
}
