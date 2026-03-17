'use client'

import { useState, useEffect } from 'react'
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

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <header className="sticky top-0 z-40 bg-cream/98 backdrop-blur-sm border-b border-espresso/10">
        <nav
          aria-label="Main navigation"
          className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16"
        >
          {/* Logo */}
          <Link href="/" aria-label="967 Coffee Co. — Home">
            <Image
              src="/images/Logo.png"
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
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen(!open)}
            className="md:hidden z-50 flex flex-col justify-center items-center gap-1.5 min-h-[44px] min-w-[44px] text-espresso"
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
      </header>

      {/* Fullscreen mobile menu — outside header to avoid backdrop-blur containing block issue */}
      <div
        id="mobile-menu"
        className={`md:hidden fixed inset-0 z-40 flex flex-col bg-cream transition-transform duration-500 ease-in-out ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-hidden={!open}
      >
        {/* Top bar with logo + close */}
        <div className="flex items-center justify-between px-6 pt-6">
          <Image
            src="/images/Logo.png"
            alt="967 Coffee Co."
            width={100}
            height={40}
            className="h-8 w-auto object-contain"
          />
          <button
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="flex items-center justify-center min-h-[44px] min-w-[44px] text-espresso"
          >
            <span className="relative w-6 h-6">
              <span className="absolute top-1/2 left-0 w-6 h-0.5 bg-current rotate-45 -translate-y-1/2" />
              <span className="absolute top-1/2 left-0 w-6 h-0.5 bg-current -rotate-45 -translate-y-1/2" />
            </span>
          </button>
        </div>

        {/* Nav links — centered */}
        <nav className="flex-1 flex flex-col items-center justify-center gap-6 px-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="font-dm-serif text-3xl text-espresso hover:text-caramel transition-colors min-h-[44px] flex items-center"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Order Online CTA */}
        <div className="px-6 pb-10">
          <a
            href="https://www.clover.com/online-ordering/967-coffee-co-roswell"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center bg-caramel text-espresso font-inter font-semibold text-sm tracking-widest uppercase px-6 py-4 rounded min-h-[44px] hover:bg-gold transition-colors"
          >
            Order Online
          </a>
        </div>
      </div>
    </>
  )
}
