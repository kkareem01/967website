'use client'

import { useState } from 'react'

interface FaqItem {
  q: string
  a: string
}

interface FaqSectionProps {
  faqs: FaqItem[]
}

export default function FaqSection({ faqs }: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i)
  }

  return (
    <section className="bg-off-white py-12 px-4 sm:px-6 lg:px-8 md:py-20">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-dm-serif text-2xl md:text-4xl text-espresso mb-10 text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-cream rounded-2xl border border-coffee/10 overflow-hidden"
            >
              <button
                onClick={() => toggle(i)}
                aria-expanded={openIndex === i}
                className="w-full text-left flex items-center justify-between gap-4 px-6 py-4 min-h-[44px] text-espresso font-inter font-semibold text-sm hover:text-caramel transition-colors"
              >
                <span>{faq.q}</span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  className={`flex-shrink-0 transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`}
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${openIndex === i ? 'max-h-96' : 'max-h-0'}`}
              >
                <p className="px-6 pb-5 text-coffee text-sm leading-relaxed">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
