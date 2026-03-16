interface MenuItem {
  name: string
  description: string
}

interface MenuCategory {
  category: string
  description: string
  items: MenuItem[]
}

interface MenuSectionProps {
  menuData: MenuCategory[]
}

export default function MenuSection({ menuData }: MenuSectionProps) {
  return (
    <div className="space-y-12">
      {menuData.map(({ category, description, items }) => (
        <div key={category}>
          <div className="mb-6">
            <h2 className="font-dm-serif text-2xl md:text-3xl text-espresso">{category}</h2>
            <p className="text-coffee/70 text-sm mt-1">{description}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {items.map(({ name, description: desc }) => (
              <div
                key={name}
                className="bg-latte rounded-2xl border border-coffee/10 px-5 py-4 hover:border-caramel/40 transition-colors"
              >
                <p className="font-inter font-semibold text-espresso text-sm">{name}</p>
                <p className="text-coffee/70 text-xs mt-1 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
