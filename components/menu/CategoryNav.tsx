'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import type { MenuCategory } from '@/lib/menu-data'

interface CategoryNavProps {
  readonly categories: readonly MenuCategory[]
}

const SCROLL_OFFSET = 180

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  'yemeni-coffee': (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M8 2v2" />
      <path d="M12 2v2" />
      <path d="M16 2v2" />
      <path d="M3 8h18v2a8 8 0 0 1-8 8H11a8 8 0 0 1-8-8V8z" />
      <path d="M21 10c1 0 2 .5 2 2s-1 2-2 2h-1" />
      <path d="M7 22h10" />
      <path d="M10 18v4" />
      <path d="M14 18v4" />
    </svg>
  ),
  coffee: (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
      <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V8z" />
      <path d="M6 2v3" />
      <path d="M10 2v3" />
      <path d="M14 2v3" />
    </svg>
  ),
  'yemeni-tea': (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 2c0 0-3 2-3 5s3 5 3 5" />
      <path d="M12 2c0 0 3 2 3 5s-3 5-3 5" />
      <ellipse cx="12" cy="14" rx="7" ry="3" />
      <path d="M5 14v3c0 1.66 3.13 3 7 3s7-1.34 7-3v-3" />
      <path d="M19 15c1.5.5 2.5 1.5 2.5 2.5S20.5 20 19 20" />
    </svg>
  ),
  lattes: (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M8 2c0 0 0 3-2 5" />
      <path d="M12 2c0 0 0 3 0 5" />
      <path d="M5 10h14l-1.5 12H6.5L5 10z" />
      <path d="M6 15h12" />
    </svg>
  ),
  refreshers: (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M6 6h12l-2 16H8L6 6z" />
      <path d="M5 6l1-4h12l1 4" />
      <path d="M9 10l1 4" />
      <path d="M15 10l-1 4" />
      <circle cx="12" cy="16" r="1.5" />
    </svg>
  ),
  sweets: (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M4 18h16v1a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-1z" />
      <path d="M4 18c0-3 2-5 2-8h12c0 3 2 5 2 8" />
      <path d="M12 10V6" />
      <circle cx="12" cy="4" r="2" />
      <path d="M8 14h8" />
    </svg>
  ),
}

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
                className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-200 ${
                  isActive
                    ? 'bg-caramel/15 border-2 border-caramel text-caramel shadow-md'
                    : 'bg-latte/60 border-2 border-transparent text-coffee/50 group-hover:border-caramel/30 group-hover:text-coffee/70'
                }`}
              >
                {CATEGORY_ICONS[category.id]}
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
