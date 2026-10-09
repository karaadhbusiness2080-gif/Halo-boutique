import type { Product } from "./types";

/**
 * PRODUCT CATALOG
 * ───────────────
 * All images below are PLACEHOLDERS from Pexels (free stock photos).
 * They are NOT your actual products.
 *
 * To use your own photos:
 *   1. Put your image files in the /public/products/ folder
 *   2. Replace the image URLs below with "/products/your-photo.jpg"
 *   3. Keep the filenames organized: e.g. hoodie-shadow-black-1.jpg
 *
 * Prices are in Algerian Dinars (DA).
 */
export const PRODUCTS: Product[] = [
  {
    id: "shadow-hoodie",
    name: "Shadow Hoodie",
    category: "Hoodies",
    price: 6900,
    image: "https://images.pexels.com/photos/3894527/pexels-photo-3894527.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    images: [
      "https://images.pexels.com/photos/3894527/pexels-photo-3894527.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      "https://images.pexels.com/photos/20706220/pexels-photo-20706220.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    ],
    description: "Heavyweight 400gsm cotton hoodie with oversized fit and embossed HALO logo. Deep black with a matte finish that absorbs light.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Charcoal"],
    featured: true,
    isNew: true,
  },
  {
    id: "obsidian-tee",
    name: "Obsidian Oversized Tee",
    category: "T-Shirts",
    price: 3500,
    image: "https://images.pexels.com/photos/28758239/pexels-photo-28758239.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    images: [
      "https://images.pexels.com/photos/28758239/pexels-photo-28758239.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      "https://images.pexels.com/photos/29811574/pexels-photo-29811574.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    ],
    description: "Boxy oversized tee in heavyweight cotton. Dropped shoulders and a clean HALO chest print.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "White"],
    featured: true,
    isNew: true,
  },
  {
    id: "nightfall-jacket",
    name: "Nightfall Jacket",
    category: "Jackets",
    price: 9500,
    image: "https://images.pexels.com/photos/23569800/pexels-photo-23569800.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    images: [
      "https://images.pexels.com/photos/23569800/pexels-photo-23569800.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      "https://images.pexels.com/photos/23570089/pexels-photo-23570089.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    ],
    description: "Structured bomber jacket with matte finish and HALO purple inner lining. Wind-resistant, minimalist design.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black"],
    featured: true,
    isNew: false,
  },
  {
    id: "phantom-cargo",
    name: "Phantom Cargo Pants",
    category: "Pants",
    price: 5200,
    image: "https://images.pexels.com/photos/35043249/pexels-photo-35043249.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    images: [
      "https://images.pexels.com/photos/35043249/pexels-photo-35043249.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    ],
    description: "Wide-leg cargo pants with 6 pockets and adjustable drawstring waist. Heavy cotton-twill construction.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Charcoal"],
    featured: false,
    isNew: true,
  },
  {
    id: "void-beanie",
    name: "Void Beanie",
    category: "Accessories",
    price: 1800,
    image: "https://images.pexels.com/photos/36050423/pexels-photo-36050423.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    images: [
      "https://images.pexels.com/photos/36050423/pexels-photo-36050423.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    ],
    description: "Ribbed knit beanie with woven HALO label. One size fits all.",
    sizes: ["One Size"],
    colors: ["Black", "Charcoal"],
    featured: false,
    isNew: false,
  },
  {
    id: "eclipse-sneakers",
    name: "Eclipse Sneakers",
    category: "Footwear",
    price: 7800,
    image: "https://images.pexels.com/photos/20066686/pexels-photo-20066686.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    images: [
      "https://images.pexels.com/photos/20066686/pexels-photo-20066686.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      "https://images.pexels.com/photos/12745055/pexels-photo-12745055.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    ],
    description: "Low-top sneakers in all-black leather with purple-stitched HALO branding. Rubber cup sole.",
    sizes: ["40", "41", "42", "43", "44", "45"],
    colors: ["Black"],
    featured: true,
    isNew: false,
  },
  {
    id: "midnight-hoodie",
    name: "Midnight Hoodie",
    category: "Hoodies",
    price: 6500,
    image: "https://images.pexels.com/photos/30690916/pexels-photo-30690916.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    images: [
      "https://images.pexels.com/photos/30690916/pexels-photo-30690916.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    ],
    description: "Cropped-fit hoodie with HALO ring logo in reflective purple print. 350gsm cotton blend.",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Black"],
    featured: false,
    isNew: false,
  },
  {
    id: "noir-tee",
    name: "Noir Graphic Tee",
    category: "T-Shirts",
    price: 3200,
    image: "https://images.pexels.com/photos/29811574/pexels-photo-29811574.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    images: [
      "https://images.pexels.com/photos/29811574/pexels-photo-29811574.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    ],
    description: "Regular-fit tee with full-back HALO graphic in gloss black print. 200gsm combed cotton.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black"],
    featured: false,
    isNew: false,
  },
];

export function getProductById(id: string): Product | undefined {
  return PRODUCTS.find((p) => p.id === id);
}

export function getFeaturedProducts(): Product[] {
  return PRODUCTS.filter((p) => p.featured);
}

export function getNewProducts(): Product[] {
  return PRODUCTS.filter((p) => p.isNew);
}
