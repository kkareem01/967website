'use client'

import { useState } from 'react'
import Image from 'next/image'
import type { MenuCategory, MenuItem } from '@/lib/menu-data'

interface MenuCategorySectionProps {
  readonly category: MenuCategory
  readonly isFirst: boolean
}

function MenuItemCard({ item }: { readonly item: MenuItem }) {
  const [imgError, setImgError] = useState(false)
  const showPlaceholder = !item.image || imgError

  return (
    <div className="group">
      {/* Square image */}
      <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-latte border border-coffee/10 shadow-sm group-hover:shadow-lg transition-shadow duration-300">
        {showPlaceholder ? (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-latte via-cream to-latte">
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-caramel/30"
              aria-hidden="true"
            >
              <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
              <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V8z" />
              <path d="M6 2v3" />
              <path d="M10 2v3" />
              <path d="M14 2v3" />
            </svg>
          </div>
        ) : (
          <Image
            src={item.image}
            alt={item.name}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            onError={() => setImgError(true)}
          />
        )}
      </div>

      {/* Name + Description */}
      <div className="mt-3 px-0.5">
        <h3 className="font-inter font-bold text-espresso text-sm leading-tight">
          {item.name}
        </h3>
        <p className="text-coffee/60 text-xs mt-1 leading-relaxed line-clamp-2">
          {item.description}
        </p>
      </div>
    </div>
  )
}

export default function MenuCategorySection({
  category,
  isFirst,
}: MenuCategorySectionProps) {
  return (
    <section
      id={category.id}
      className={`py-10 md:py-14 ${isFirst ? '' : 'border-t border-coffee/10'}`}
    >
      <div className="mb-8">
        <h2 className="font-dm-serif text-2xl md:text-3xl text-espresso">
          {category.label}
        </h2>
        <p className="text-coffee/70 text-sm mt-1">{category.description}</p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8">
        {category.items.map((item) => (
          <MenuItemCard key={item.name} item={item} />
        ))}
      </div>
    </section>
  )
}
