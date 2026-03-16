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
    <header className="sticky top-0 z-40 bg-cream/98 backdrop-blur-sm border-b border-espresso/10">
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
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-espresso/50 hover:text-espresso transition-colors text-xs font-inter font-medium tracking-widest uppercase"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Order Online — minimal text link */}
        <a
          href="https://www.clover.com/online-ordering/967-coffee-co-roswell"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center text-espresso/60 hover:text-espresso text-xs font-inter font-medium tracking-widest uppercase transition-colors min-h-[44px]"
        >
          Order Online
        </a>

        {/* Mobile hamburger */}
        <button
          aria-label="Toggle mobile menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col justify-center items-center gap-1.5 min-h-[44px] min-w-[44px] text-espresso"
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
        className={`md:hidden bg-cream border-t border-espresso/10 transition-all duration-300 overflow-hidden ${open ? 'max-h-96' : 'max-h-0'}`}
      >
        <ul className="flex flex-col px-6 pb-5 pt-3 gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                className="block text-espresso/70 hover:text-espresso py-2.5 text-xs font-inter font-medium tracking-widest uppercase transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="pt-3">
            <a
              href="https://www.clover.com/online-ordering/967-coffee-co-roswell"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center border border-espresso/20 text-espresso text-xs font-inter font-medium tracking-widest uppercase px-5 py-3 rounded min-h-[44px] hover:border-espresso/40 transition-colors"
            >
              Order Online
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
