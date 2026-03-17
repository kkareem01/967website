'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Image from 'next/image'
import type { MenuCategory } from '@/lib/menu-data'

interface CategoryNavProps {
  readonly categories: readonly MenuCategory[]
}

const SCROLL_OFFSET = 180

export default function CategoryNav({ categories }: CategoryNavProps) {
  const [activeId, setActiveId] = useState(categories[0]?.id ?? '')
  const navRef = useRef<HTMLDivElement>(null)

  const scrollToSection = useCallback((categoryId: string) => {
    const element = document.getElementById(categoryId)
    if (!element) return
    const elementPosition = element.getBoundingClientRect().top + window.scrollY
    window.scrollTo({
      top: elementPosition - SCROLL_OFFSET,
      behavior: 'smooth',
    })
  }, [])

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    categories.forEach((category) => {
      const element = document.getElementById(category.id)
      if (!element) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveId(category.id)
          }
        },
        {
          rootMargin: '-180px 0px -60% 0px',
          threshold: 0,
        }
      )
      observer.observe(element)
      observers.push(observer)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [categories])

  useEffect(() => {
    const activeButton = navRef.current?.querySelector(
      `[data-category="${activeId}"]`
    )
    if (activeButton) {
      activeButton.scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
        block: 'nearest',
      })
    }
  }, [activeId])

  return (
    <div className="sticky top-[104px] z-20 bg-off-white/95 backdrop-blur-sm border-b border-coffee/10">
      <div
        ref={navRef}
        role="tablist"
        aria-label="Menu categories"
        className="flex items-start gap-2 sm:gap-4 px-4 py-3 overflow-x-auto snap-x snap-mandatory scrollbar-hide md:justify-center md:gap-6 max-w-6xl mx-auto"
      >
        {categories.map((category) => {
          const isActive = activeId === category.id
          return (
            <button
              key={category.id}
              role="tab"
              aria-selected={isActive}
              aria-controls={category.id}
              data-category={category.id}
              onClick={() => scrollToSection(category.id)}
              className={`flex flex-col items-center gap-1.5 snap-center flex-shrink-0 min-w-[72px] cursor-pointer transition-all duration-200 group ${
                isActive ? 'scale-105' : 'hover:scale-102'
              }`}
            >
              <div
                className={`w-14 h-14 rounded-full flex items-center justify-center overflow-hidden transition-all duration-200 ${
                  isActive
                    ? 'border-2 border-caramel shadow-md'
                    : 'border-2 border-transparent group-hover:border-caramel/30'
                }`}
              >
                <Image
                  src={category.icon}
                  alt={category.label}
                  width={56}
                  height={56}
                  className="w-full h-full object-cover"
                />
              </div>
              <span
                className={`font-inter text-[10px] tracking-wide uppercase whitespace-nowrap transition-colors duration-200 ${
                  isActive
                    ? 'text-espresso font-semibold'
                    : 'text-coffee/50 group-hover:text-coffee/70'
                }`}
              >
                {category.label}
              </span>
              <div
                className={`w-6 h-0.5 rounded-full transition-all duration-200 ${
                  isActive ? 'bg-caramel' : 'bg-transparent'
                }`}
                aria-hidden="true"
              />
            </button>
          )
        })}
      </div>
    </div>
  )
}
