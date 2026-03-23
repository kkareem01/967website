export interface MenuItem {
  readonly name: string
  readonly description: string
  readonly image?: string
  readonly imagePosition?: string
}

export interface MenuCategory {
  readonly id: string
  readonly label: string
  readonly description: string
  readonly icon: string
  readonly items: readonly MenuItem[]
}

export const MENU_CATEGORIES: readonly MenuCategory[] = [
  {
    id: 'yemeni-drinks',
    label: 'Yemeni Drinks',
    description: 'To honor the Traditional taste NO ALTERATIONS can be made.',
    icon: '/images/icons/yemeni-coffee.png',
    items: [
      {
        name: 'Malaki',
        description: 'Light Roast with Coffee Husks, Cardamom, Ginger, Cinnamon & Cream',
        image: '/images/menu/malaki.jpg',
      },
      {
        name: 'Qishr',
        description: 'Coffee Husks with Cinnamon & Ginger',
        image: '/images/menu/qishr.jpg',
      },
      {
        name: 'Mufawar',
        description: 'Medium Roast Coffee with Cardamom & Cream',
        image: '/images/menu/mufawar.jpg',
      },
      {
        name: "Sana'ani",
        description: 'Medium Roast with Cardamom',
        image: '/images/menu/sanaani.jpg',
      },
      {
        name: 'Adeni Chai',
        description: 'Premium Black Tea with Cardamom, Cinnamon, Nutmeg and Cream',
        image: '/images/menu/adeni-chai.jpg',
        imagePosition: 'center 55%',
      },
      {
        name: 'Iced Adeni Chai',
        description: 'Our signature Adeni Chai, chilled and served over ice.',
        image: '/images/menu/iced-adeni-chai.jpg',
        imagePosition: 'center 85%',
      },
      {
        name: 'Red Tea',
        description: 'Premium Black Tea with Cloves, Cardamom & Mint',
        image: '/images/menu/red-tea.jpg',
      },
    ],
  },
  {
    id: 'coffee',
    label: 'Coffee',
    description: 'Classic coffee drinks, expertly prepared.',
    icon: '/images/icons/coffee.png',
    items: [
      {
        name: 'Espresso',
        description: 'Pure, concentrated coffee — bold and intense.',
        image: '/images/menu/espresso.jpg',
      },
      {
        name: 'Cappuccino',
        description: 'Equal parts espresso, steamed milk, and foam.',
        image: '/images/menu/cappuccino.jpg',
      },
      {
        name: 'Flat White',
        description: 'Double ristretto, velvety microfoam.',
        image: '/images/menu/flat-white.jpg',
      },
      {
        name: 'Americano',
        description: 'Espresso and hot water — bold and smooth.',
        image: '/images/menu/americano.jpg',
      },
      {
        name: 'Cortado',
        description: 'Espresso balanced with a touch of warm milk.',
        image: '/images/menu/cortado.jpg',
      },
      {
        name: 'Frappe',
        description: 'Blended iced coffee, smooth and refreshing.',
        image: '/images/menu/frappe.jpg',
      },
      {
        name: 'Affogato',
        description: 'Espresso poured over a scoop of vanilla ice cream.',
        image: '/images/menu/affogato.jpg',
      },
      {
        name: 'Hot Chocolate',
        description: 'Rich, creamy chocolate — comforting and indulgent.',
        image: '/images/menu/hot-chocolate.jpg',
      },
    ],
  },
  {
    id: 'lattes',
    label: 'Lattes',
    description: 'Our signature creations — bold flavor, creative combinations.',
    icon: '/images/icons/lattes.png',
    items: [
      {
        name: 'Iced Yemeni Latte',
        description: 'Our signature Yemeni Latte, chilled over ice.',
        image: '/images/menu/iced-yemeni-latte.jpg',
      },
      {
        name: 'Iced Pistachio Latte',
        description: 'Rich espresso meets velvety pistachio cream.',
        image: '/images/menu/pistachio-latte.jpg',
      },
      {
        name: 'Iced Mocha Latte',
        description: 'Chocolate and espresso over ice.',
        image: '/images/menu/iced-mocha-latte.jpg',
      },
      {
        name: 'Iced Matcha Latte',
        description: 'Ceremonial grade matcha, smooth and earthy over ice.',
        image: '/images/menu/iced-matcha-latte.jpg',
      },
      {
        name: 'White Chocolate Raspberry Latte',
        description: 'Sweet white chocolate with bright raspberry notes.',
        image: '/images/menu/white-chocolate-raspberry-latte.jpg',
        imagePosition: 'center 45%',
      },
      {
        name: 'Tiramisu Latte',
        description: 'Inspired by the classic Italian dessert.',
        image: '/images/menu/tiramisu-latte.jpg',
      },
      {
        name: 'Spanish Latte',
        description: 'Creamy, sweet, and perfectly balanced.',
        image: '/images/menu/spanish-latte.jpg',
      },
      {
        name: 'Biscoff Latte',
        description: 'Cookie butter meets your morning coffee.',
        image: '/images/menu/biscoff-latte.jpg',
      },
      {
        name: 'Caramel Macchiato Latte',
        description: 'Vanilla, caramel, and espresso — a timeless classic.',
        image: '/images/menu/caramel-macchiato-latte.jpg',
      },
      {
        name: 'Yemeni Latte',
        description: 'Our house latte — bold, spiced, and deeply aromatic.',
        image: '/images/menu/yemeni-latte.jpg',
        imagePosition: 'center 35%',
      },
      {
        name: 'Mocha Latte',
        description: 'Chocolate and espresso in perfect harmony.',
        image: '/images/menu/mocha-latte.jpg',
        imagePosition: 'center 30%',
      },
      {
        name: 'Matcha Latte',
        description: 'Ceremonial grade matcha, warm and comforting.',
        image: '/images/menu/matcha-latte.jpg',
        imagePosition: 'center 44%',
      },
    ],
  },
  {
    id: 'refreshers',
    label: 'Refreshers',
    description: 'Light, fruity, and perfect for any time of day.',
    icon: '/images/icons/refreshers.png',
    items: [
      {
        name: 'Strawberry',
        description: 'Fresh strawberry, bright and naturally sweet.',
        image: '/images/drinks/strawberry.jpg',
      },
      {
        name: 'Raspberry',
        description: 'Tart raspberry with a crisp, refreshing finish.',
        image: '/images/menu/raspberry.jpg',
      },
      {
        name: 'Yemeni Lemonade',
        description: 'Citrus-forward with a Yemeni twist.',
        image: '/images/menu/yemeni-lemonade.jpg',
      },
      {
        name: 'Mint Lemonade',
        description: 'Cool mint meets fresh-squeezed lemon.',
        image: '/images/menu/mint-lemonade.jpg',
      },
      {
        name: 'Mango',
        description: 'Sweet mango with a citrus finish.',
        image: '/images/menu/mango.jpg',
      },
      {
        name: 'Passion Fruit',
        description: 'Tropical and bright.',
        image: '/images/menu/passion-fruit.jpg',
      },
      {
        name: 'Dragon Fruit',
        description: 'Vibrant and subtly sweet.',
        image: '/images/menu/dragon-fruit.jpg',
      },
      {
        name: 'Passion Fruit & Raspberry',
        description: 'Tropical meets tart — a bold duo.',
        image: '/images/menu/passion-fruit-raspberry.jpg',
      },
      {
        name: 'Passion Fruit & Dragon Fruit',
        description: 'Tropical fusion, bold and refreshing.',
        image: '/images/menu/passion-fruit-dragon-fruit.jpg',
      },
      {
        name: 'Dragon Fruit & Mango',
        description: 'Sweet and vibrant, perfectly paired.',
        image: '/images/menu/dragon-fruit-mango.jpg',
      },
      {
        name: 'Strawberry & Dragon Fruit',
        description: 'Berry-forward with a tropical twist.',
        image: '/images/menu/strawberry-dragon-fruit.jpg',
      },
    ],
  },
  {
    id: 'sweets',
    label: 'Sweets',
    description: 'Handcrafted desserts to complement your coffee.',
    icon: '/images/icons/sweets.png',
    items: [
      {
        name: 'Pistachio Milkcake',
        description: 'Pistachio cream layered on soft milkcake.',
        image: '/images/food/pistacake.jpg',
      },
      {
        name: 'Rose Milkcake',
        description: 'Delicate rosewater-infused milkcake.',
        image: '/images/menu/rose-milkcake.jpg',
      },
      {
        name: 'Biscoff Milkcake',
        description: 'Cookie butter swirled into creamy milkcake.',
        image: '/images/food/biscoff-cake.jpg',
      },
      {
        name: 'Oreo Milkcake',
        description: 'Cookies and cream layered to perfection.',
        image: '/images/food/oreo.jpg',
      },
      {
        name: 'Kinder Milkcake',
        description: 'Hazelnut and chocolate milkcake — nostalgic and sweet.',
        image: '/images/menu/kinder-milkcake.jpg',
      },
      {
        name: 'Nutella Honeycomb',
        description: 'Crunchy honeycomb drizzled with rich Nutella.',
        image: '/images/food/967-honeycomb.jpg',
      },
      {
        name: 'Biscoff Honeycomb',
        description: 'Golden honeycomb with cookie butter glaze.',
        image: '/images/food/967-biscoff-honey-2.jpg',
      },
      {
        name: 'Honeycomb',
        description: 'Classic golden honeycomb, crispy and sweet.',
        image: '/images/food/967-honeycomb.jpg',
      },
      {
        name: 'Pistachio Honeycomb',
        description: 'Nutty pistachio over crunchy honeycomb.',
        image: '/images/food/pista-honeycomb.jpg',
      },
      {
        name: 'Dubai Chocolate',
        description: 'Rich chocolate, Middle Eastern-inspired.',
        image: '/images/menu/dubai-chocolate.jpg',
      },
      {
        name: 'Dubai Chocolate Brownie',
        description: 'Dense chocolate brownie with a Dubai twist.',
        image: '/images/menu/dubai-chocolate-brownie.jpg',
      },
    ],
  },
  {
    id: 'snacks',
    label: 'Snacks',
    description: 'Savory bites to pair with your drink.',
    icon: '/images/icons/snacks.png',
    items: [
      {
        name: 'Sambosa',
        description: 'Traditional Yemeni pastry — crispy, savory, and spiced.',
        image: '/images/menu/sambosa.jpg',
      },
    ],
  },
]
