import type { Metadata } from 'next'
import { Inter, DM_Serif_Display } from 'next/font/google'
import { GoogleAnalytics } from '@next/third-parties/google'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Analytics } from '@vercel/analytics/next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { SpeedInsights } from "@vercel/speed-insights/next"
import './globals.css'


const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter-var',
  display: 'swap',
})

const dmSerif = DM_Serif_Display({
  weight: ['400'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-dm-serif-var',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.967coffeeco.com'),
  verification: {
    google: 'YOUR_SEARCH_CONSOLE_VERIFICATION_CODE', // TODO: Replace
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${dmSerif.variable}`}>
      <head>
        <link rel="preconnect" href="https://maps.googleapis.com" />
        <link rel="preconnect" href="https://maps.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-caramel focus:text-espresso focus:px-4 focus:py-2 focus:rounded-full focus:font-inter"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <GoogleAnalytics gaId="G-XXXXXXXXXX" /> {/* TODO: Replace with real GA4 ID */}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  )
}
