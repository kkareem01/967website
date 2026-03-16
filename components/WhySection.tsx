import Image from 'next/image'

const pillars = [
  {
    num: '01',
    title: 'Different coffee',
    body: "Yemeni beans. Richer flavor. Brewed right. You'll taste the difference.",
  },
  {
    num: '02',
    title: 'Space built for you',
    body: 'Study. Work. Meet. Sit. 967 actually works for how you want to spend time.',
  },
  {
    num: '03',
    title: 'Same good thing, every time',
    body: 'Consistency you can trust.',
  },
]

export default function WhySection() {
  return (
    <section className="bg-cream">
      <div className="max-w-6xl mx-auto lg:grid lg:grid-cols-2 lg:min-h-[480px]">
        {/* Text side */}
        <div className="py-12 px-4 sm:px-6 lg:px-8 lg:py-20 flex flex-col justify-center bg-espresso">
          <h2 className="font-dm-serif text-2xl md:text-4xl text-cream mb-2">Why 967?</h2>
          <p className="font-inter text-cream/60 mb-10 text-sm">
            Yemeni coffee. A place to stay. Coffee that doesn't change.
          </p>
          <div className="space-y-8">
            {pillars.map(({ num, title, body }) => (
              <div key={num} className="flex items-start gap-5">
                <span className="font-dm-serif text-5xl lg:text-6xl text-caramel/40 leading-none flex-shrink-0 select-none">
                  {num}
                </span>
                <div>
                  <h3 className="font-inter font-semibold text-cream text-base mb-1">{title}</h3>
                  <p className="font-inter text-cream/60 text-sm leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Image side — hidden on mobile */}
        <div className="relative hidden lg:block">
          <Image
            src="/images/store/indoor-2.jpg"
            alt="967 Coffee Co. atmospheric interior — a welcoming space in Roswell, GA"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-espresso/20" aria-hidden="true" />
        </div>
      </div>
    </section>
  )
}
