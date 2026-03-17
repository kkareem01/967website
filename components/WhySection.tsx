'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'

/* ------------------------------------------------------------------ */
/*  SVG Illustrations                                                 */
/* ------------------------------------------------------------------ */

function CoffeeIllustration() {
  return (
    <svg viewBox="0 0 200 200" fill="none" className="w-full h-full" aria-hidden="true">
      <ellipse cx="100" cy="100" rx="62" ry="80" stroke="currentColor" strokeWidth="1.5" opacity="0.18" />
      <ellipse cx="100" cy="100" rx="40" ry="58" stroke="currentColor" strokeWidth="1" opacity="0.12" />
      <path d="M100 30 C92 65, 108 135, 100 170" stroke="currentColor" strokeWidth="1.5" opacity="0.25" />
      <path d="M80 22 C82 12, 88 14, 86 6" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.15" />
      <path d="M100 18 C102 8, 108 10, 106 2" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.12" />
      <path d="M118 24 C120 14, 126 16, 124 8" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.15" />
    </svg>
  )
}

function SpaceIllustration() {
  return (
    <svg viewBox="0 0 200 200" fill="none" className="w-full h-full" aria-hidden="true">
      <path d="M50 170 L50 80 C50 45, 150 45, 150 80 L150 170" stroke="currentColor" strokeWidth="1.5" opacity="0.2" />
      <path d="M70 170 L70 90 C70 65, 130 65, 130 90 L130 170" stroke="currentColor" strokeWidth="1" opacity="0.13" />
      <line x1="40" y1="170" x2="160" y2="170" stroke="currentColor" strokeWidth="1" opacity="0.15" />
      <path d="M90 170 L90 158 C90 154, 110 154, 110 158 L110 170" stroke="currentColor" strokeWidth="1" opacity="0.18" />
      <path d="M98 152 C99 147, 102 149, 101 144" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" opacity="0.12" />
    </svg>
  )
}

function ConsistencyIllustration() {
  return (
    <svg viewBox="0 0 200 200" fill="none" className="w-full h-full" aria-hidden="true">
      <circle cx="100" cy="100" r="75" stroke="currentColor" strokeWidth="1" opacity="0.1" />
      <circle cx="100" cy="100" r="55" stroke="currentColor" strokeWidth="1.2" opacity="0.14" />
      <circle cx="100" cy="100" r="35" stroke="currentColor" strokeWidth="1.5" opacity="0.18" />
      <circle cx="100" cy="100" r="4" fill="currentColor" opacity="0.2" />
      {[0, 90, 180, 270].map((angle) => {
        const rad = (angle * Math.PI) / 180
        return (
          <line
            key={angle}
            x1={Math.round((100 + 75 * Math.cos(rad)) * 100) / 100}
            y1={Math.round((100 + 75 * Math.sin(rad)) * 100) / 100}
            x2={Math.round((100 + 68 * Math.cos(rad)) * 100) / 100}
            y2={Math.round((100 + 68 * Math.sin(rad)) * 100) / 100}
            stroke="currentColor"
            strokeWidth="1.2"
            opacity="0.15"
          />
        )
      })}
    </svg>
  )
}

function HoursIllustration() {
  return (
    <svg viewBox="0 0 200 200" fill="none" className="w-full h-full" aria-hidden="true">
      <circle cx="100" cy="100" r="72" stroke="currentColor" strokeWidth="1.5" opacity="0.16" />
      <circle cx="100" cy="100" r="68" stroke="currentColor" strokeWidth="0.5" opacity="0.1" />
      {/* Hour marks */}
      {Array.from({ length: 12 }).map((_, i) => {
        const rad = ((i * 30 - 90) * Math.PI) / 180
        return (
          <line
            key={i}
            x1={Math.round((100 + 60 * Math.cos(rad)) * 100) / 100}
            y1={Math.round((100 + 60 * Math.sin(rad)) * 100) / 100}
            x2={Math.round((100 + 68 * Math.cos(rad)) * 100) / 100}
            y2={Math.round((100 + 68 * Math.sin(rad)) * 100) / 100}
            stroke="currentColor"
            strokeWidth={i % 3 === 0 ? '2' : '1'}
            opacity={i % 3 === 0 ? '0.2' : '0.1'}
            strokeLinecap="round"
          />
        )
      })}
      {/* Hour hand */}
      <line x1="100" y1="100" x2="100" y2="58" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.22" />
      {/* Minute hand */}
      <line x1="100" y1="100" x2="130" y2="100" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.18" />
      <circle cx="100" cy="100" r="3" fill="currentColor" opacity="0.2" />
    </svg>
  )
}

function CommunityIllustration() {
  return (
    <svg viewBox="0 0 200 200" fill="none" className="w-full h-full" aria-hidden="true">
      {/* Three overlapping circles — community/gathering */}
      <circle cx="80" cy="95" r="38" stroke="currentColor" strokeWidth="1.2" opacity="0.14" />
      <circle cx="120" cy="95" r="38" stroke="currentColor" strokeWidth="1.2" opacity="0.14" />
      <circle cx="100" cy="65" r="38" stroke="currentColor" strokeWidth="1.2" opacity="0.14" />
      {/* Center convergence dot */}
      <circle cx="100" cy="85" r="5" fill="currentColor" opacity="0.15" />
      {/* Small dots — individuals */}
      <circle cx="80" cy="95" r="2.5" fill="currentColor" opacity="0.18" />
      <circle cx="120" cy="95" r="2.5" fill="currentColor" opacity="0.18" />
      <circle cx="100" cy="65" r="2.5" fill="currentColor" opacity="0.18" />
      {/* Ground line */}
      <line x1="45" y1="145" x2="155" y2="145" stroke="currentColor" strokeWidth="1" opacity="0.1" />
    </svg>
  )
}

/* ------------------------------------------------------------------ */
/*  Card data — 5 cards                                               */
/* ------------------------------------------------------------------ */

const cards = [
  {
    eyebrow: 'The Coffee',
    headline: 'A different kind of bean.',
    body: "Yemeni beans. Richer flavor. Brewed right. You'll taste the difference.",
    Illustration: CoffeeIllustration,
    image: '/images/why/beans.jpg',
  },
  {
    eyebrow: 'The Space',
    headline: 'Built for how you spend time.',
    body: 'Study. Work. Meet. Sit. 967 works for all of it.',
    Illustration: SpaceIllustration,
    image: '/images/why/space.jpg',
  },
  {
    eyebrow: 'The Standard',
    headline: 'Same great cup. Every time.',
    body: 'Consistency you can trust.',
    Illustration: ConsistencyIllustration,
    image: '/images/why/cup.jpg',
  },
  {
    eyebrow: 'The Hours',
    headline: 'Open when others aren\u2019t.',
    body: 'Late nights. Early mornings. 967 keeps your schedule.',
    Illustration: HoursIllustration,
  },
  {
    eyebrow: 'The People',
    headline: 'A community, not just a caf\u00e9.',
    body: 'Regulars, new faces, and everyone in between.',
    Illustration: CommunityIllustration,
    image: '/images/why/community.jpg',
  },
]

/* ------------------------------------------------------------------ */
/*  Value Card                                                        */
/* ------------------------------------------------------------------ */

function ValueCard({
  eyebrow,
  headline,
  body,
  Illustration,
  image,
  index,
}: {
  eyebrow: string
  headline: string
  body: string
  Illustration: () => React.JSX.Element
  image?: string
  index: number
}) {
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const card = cardRef.current
    if (!card) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          card.style.animationDelay = `${index * 120}ms`
          card.classList.add('why-card-visible')
          observer.unobserve(card)
        }
      },
      { threshold: 0.15 },
    )

    observer.observe(card)
    return () => observer.disconnect()
  }, [index])

  return (
    <div
      ref={cardRef}
      className="why-card group flex-shrink-0 w-[52vw] sm:w-[200px] lg:w-[calc(20%-0.8rem)] bg-white rounded-2xl border border-coffee/[0.06] shadow-sm hover:shadow-md transition-shadow duration-500 overflow-hidden flex flex-col snap-start"
    >
      {/* Content — top left */}
      <div className="px-5 pt-5 pb-3">
        <span className="font-inter text-[10px] font-medium tracking-[0.14em] uppercase text-caramel block mb-2">
          {eyebrow}
        </span>
        <h3 className="font-dm-serif text-[1.05rem] leading-snug text-espresso mb-1.5">
          {headline}
        </h3>
        <p className="font-inter text-coffee/55 text-xs leading-relaxed">
          {body}
        </p>
      </div>

      {/* Visual — bottom */}
      {image ? (
        <div className="relative flex-1 min-h-[120px]">
          <Image
            src={image}
            alt={headline}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 52vw, (max-width: 1024px) 200px, 20vw"
          />
        </div>
      ) : (
        <div className="flex-1 flex items-center justify-center text-caramel px-6 pb-4 min-h-[120px]">
          <Illustration />
        </div>
      )}
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Section                                                           */
/* ------------------------------------------------------------------ */

export default function WhySection() {
  return (
    <section className="bg-off-white py-14 md:py-20 overflow-hidden">
      {/* Header row */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-baseline justify-between mb-8">
        <h2 className="font-dm-serif text-4xl md:text-6xl text-espresso">
          Why 967?
        </h2>
        <Link
          href="/about"
          className="font-inter text-sm text-caramel hover:text-coffee transition-colors hidden sm:inline-flex items-center gap-1"
        >
          Learn more
          <span aria-hidden="true" className="text-base leading-none">&rarr;</span>
        </Link>
      </div>

      {/* Horizontal scroll track */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex gap-3 sm:gap-4 lg:gap-5 overflow-x-auto scrollbar-hide pb-4 -mb-4 snap-x snap-mandatory lg:overflow-x-visible lg:snap-none">
          {cards.map((card, i) => (
            <ValueCard key={card.eyebrow} {...card} index={i} />
          ))}
        </div>
      </div>

      {/* Mobile "Learn more" */}
      <div className="sm:hidden text-center mt-6 px-4">
        <Link
          href="/about"
          className="font-inter text-sm text-caramel hover:text-coffee transition-colors inline-flex items-center gap-1"
        >
          Learn more
          <span aria-hidden="true" className="text-base leading-none">&rarr;</span>
        </Link>
      </div>
    </section>
  )
}
