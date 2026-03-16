import Image from 'next/image'

interface ProductCardProps {
  name: string
  description: string
  image: string
}

export default function ProductCard({ name, description, image }: ProductCardProps) {
  return (
    <div className="bg-latte rounded-2xl overflow-hidden border border-coffee/10 shadow-sm hover:shadow-md transition-shadow group">
      <div className="relative aspect-square w-full">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 768px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-4">
        <h3 className="font-inter font-semibold text-espresso text-sm">{name}</h3>
        <p className="text-coffee/70 text-xs mt-1 leading-relaxed">{description}</p>
      </div>
    </div>
  )
}
