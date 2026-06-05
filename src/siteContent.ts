export interface Sauce {
  id: string;
  name: string;
  color: string;
  description: string;
}

export interface Topping {
  id: string;
  name: string;
  description: string;
}

export interface Package {
  id: string;
  name: string;
  donutsCount: number;
  saucesCount: number;
  toppingsCount: number;
  price: string;
  features: string[];
  isPopular?: boolean;
}

export interface SiteContent {
  brandName: string;
  brandTagline: string;
  whatsappNumber: string;
  whatsappMessageBase: string;
  aboutBooth: {
    title: string;
    subtitle: string;
    description: string;
    features: string[];
  };
  sauces: Sauce[];
  toppings: Topping[];
  packages: Package[];
  upcomingEvent: {
    venue: string;
    date: string;
    packageType: string;
    qty: string;
    status: string;
    description: string;
  };
  supplierInfo: {
    title: string;
    description: string;
    targetAudiences: string[];
    ctaText: string;
  };
}

export const siteContent: SiteContent = {
  brandName: "Tepi.Co",
  brandTagline: "Make It Your Own Sweet Moment",
  whatsappNumber: "60136648159",
  whatsappMessageBase: "https://wa.me/60136648159",
  aboutBooth: {
    title: "Our Wooden Donut Booth",
    subtitle: "Aesthetic • Rustic • Interactive",
    description: "Designed from solid treated pine wood, our boutique dessert bar acts as both a premium food station and a beautiful event backdrop. Perfect for weddings, birthdays, and upscale corporate events in KL & Selangor.",
    features: [
      "Rustic Solid Pine Wood Display Rack",
      "Handcrafted Clay Sauce Bowls & Squeeze Bottles",
      "Aesthetic Amber Glass Apothecary Jars",
      "Integrated Warm Soft Lighting Setup",
      "Custom Blackboards & Event Signage",
      "Dedicated On-site Friendly Server"
    ]
  },
  sauces: [
    { id: "milk-choco", name: "Belgian Milk Choco", color: "bg-[#5C3A21]", description: "Premium, silky smooth chocolate with a rich, authentic cocoa finish." },
    { id: "strawberry", name: "Strawberry Glaze", color: "bg-[#E57C82]", description: "Sweet, fruity pink glaze that adds a pop of romance and nostalgia." },
    { id: "white-choco", name: "White Velvet Choco", color: "bg-[#FAF4EB] border border-gray-200", description: "Creamy, buttery milky white chocolate for a luxurious canvas." },
    { id: "pistachio", name: "Leafy Pistachio", color: "bg-[#8D9974]", description: "Earthy, nutty premium green spread designed for the modern aesthetic." }
  ],
  toppings: [
    { id: "powder-sugar", name: "Powder Sugar", description: "Classic, cloud-like delicate snow dusting." },
    { id: "oreo-crumbs", name: "Oreo Crumbs", description: "Crunchy, dark chocolate cookie crunch." },
    { id: "chocolate-rice", name: "Chocolate Rice", description: "Rich, dense chocolate strands." },
    { id: "rainbow-rice", name: "Rainbow Rice", description: "Playful, festive multi-color sprinkles." },
    { id: "lotus-crumbs", name: "Lotus Crumbs", description: "Caramelized Biscoff cookie crumble." },
    { id: "choc-chips", name: "Choc Chips", description: "Miny, rich dark chocolate chips." },
    { id: "crispy-ball", name: "Crispy Ball Choc", description: "Crunchy malt cereal balls coated in chocolate." },
    { id: "marshmallow", name: "Mini Marshmallow", description: "Fluffy, cloud-soft bite of pure marshmallow." }
  ],
  packages: [
    {
      id: "pkg-1",
      name: "Sweet Starter",
      donutsCount: 120,
      saucesCount: 3,
      toppingsCount: 6,
      price: "RM349",
      features: [
        "120 Warm Fluffy Mini Donuts",
        "3 Velvet Dipping Sauces",
        "6 Gourmet Toppings",
        "Premium Rustic Tray Setup",
        "Self-Service Setup (2 Hours)",
        "Perfect for Private Gatherings (25-50 pax)"
      ]
    },
    {
      id: "pkg-2",
      name: "Signature Wedding",
      donutsCount: 240,
      saucesCount: 3,
      toppingsCount: 6,
      price: "RM649",
      isPopular: true,
      features: [
        "240 Warm Fluffy Mini Donuts",
        "3 Velvet Dipping Sauces",
        "6 Gourmet Toppings",
        "Elite Wooden Booth & Display Stand",
        "Full Setup & Florist Styling Included",
        "Friendly On-site Server (3 Hours)",
        "Perfect for Medium Weddings & Birthdays (80-150 pax)"
      ]
    },
    {
      id: "pkg-3",
      name: "Deluxe Wedding Bar",
      donutsCount: 360,
      saucesCount: 4,
      toppingsCount: 8,
      price: "RM899",
      features: [
        "360 Warm Fluffy Mini Donuts",
        "4 Velvet Dipping Sauces",
        "8 Gourmet Toppings",
        "Elite Wooden Booth with Table Decor",
        "Premium Garland & Candlelit Lantern Elements",
        "Dual Server Assist on-site (4 Hours)",
        "Complimentary Custom Chalkboard Board Signs",
        "Perfect for Large Events/Weddings (200+ pax)"
      ]
    }
  ],
  upcomingEvent: {
    venue: "Rinjani Majestic",
    date: "6 June 2026",
    packageType: "Deluxe Wedding Bar",
    qty: "360 Mini Donuts",
    status: "Preparation Stage",
    description: "Our first wedding booth is coming soon. Follow our journey as we bring the mini donut bar experience to real Malaysian events."
  },
  supplierInfo: {
    title: "Frozen Mini Donut Supplier",
    description: "Want to serve warm, featherlight mini donuts at your own cafe, wedding catering business, home bakery, or pop-up market booth? We supply high-quality, pre-fried frozen mini donuts. Just warm them in an air fryer or oven for 30 seconds, glaze, and serve!",
    targetAudiences: [
      "Boutique Cafes & Coffee Shops",
      "Event Planners & Caterers",
      "Home Bakers & Dessert Vendors",
      "School Canteens & Corporate Stands"
    ],
    ctaText: "WhatsApp for Supplier Price"
  }
};
