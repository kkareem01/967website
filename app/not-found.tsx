import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="bg-espresso min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center">
        <p className="font-dm-serif text-8xl text-caramel/30 select-none">404</p>
        <h1 className="font-dm-serif text-3xl md:text-4xl text-cream mt-2 mb-3">
          Page not found
        </h1>
        <p className="font-inter text-cream/60 text-sm mb-8">
          This page doesn't exist — but great coffee does.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center bg-caramel text-espresso font-inter font-semibold px-8 py-3 rounded-full min-h-[44px] hover:bg-gold hover:scale-105 transition-all"
          >
            Go Home
          </Link>
          <Link
            href="/menu"
            className="inline-flex items-center border-2 border-cream/40 text-cream/80 font-inter font-semibold px-8 py-3 rounded-full min-h-[44px] hover:border-cream hover:text-cream transition-all"
          >
            View Menu
          </Link>
        </div>
      </div>
    </div>
  )
}
