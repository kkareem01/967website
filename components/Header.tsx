'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Menu', href: '/menu' },
  { label: 'Contact', href: '/contact' },
  { label: 'Partnerships', href: '/partnerships' },
  { label: 'Careers', href: '/careers' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 bg-espresso/95 backdrop-blur-sm border-b border-coffee/30">
      <nav
        aria-label="Main navigation"
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16"
      >
        {/* Logo */}
        <Link href="/" aria-label="967 Coffee Co. — Home">
          <Image
            src="/images/logo.png"
            alt="967 Coffee Co."
            width={120}
            height={48}
            priority
            className="h-10 w-auto object-contain"
          />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-cream/80 hover:text-caramel transition-colors text-sm font-inter font-medium"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Order Online CTA */}
        <a
          href="https://www.clover.com/online-ordering/967-coffee-co-roswell"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center bg-caramel text-espresso text-sm font-inter font-semibold px-5 py-2 rounded-full min-h-[44px] hover:bg-gold transition-colors"
        >
          Order Online
        </a>

        {/* Mobile hamburger */}
        <button
          aria-label="Toggle mobile menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col justify-center items-center gap-1.5 min-h-[44px] min-w-[44px] text-cream"
        >
          <span
            className={`block w-6 h-0.5 bg-current transition-transform duration-300 ${open ? 'translate-y-2 rotate-45' : ''}`}
          />
          <span
            className={`block w-6 h-0.5 bg-current transition-opacity duration-300 ${open ? 'opacity-0' : ''}`}
          />
          <span
            className={`block w-6 h-0.5 bg-current transition-transform duration-300 ${open ? '-translate-y-2 -rotate-45' : ''}`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`md:hidden bg-espresso border-t border-coffee/30 transition-all duration-300 overflow-hidden ${open ? 'max-h-96' : 'max-h-0'}`}
      >
        <ul className="flex flex-col px-4 pb-4 pt-2 gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                className="block text-cream/80 hover:text-caramel py-2.5 text-base font-inter transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="pt-2">
            <a
              href="https://www.clover.com/online-ordering/967-coffee-co-roswell"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center bg-caramel text-espresso font-semibold px-5 py-3 rounded-full min-h-[44px] hover:bg-gold transition-colors"
            >
              Order Online
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
