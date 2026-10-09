export interface Product {
  id: string;
  name: string;
  category: "Hoodies" | "T-Shirts" | "Jackets" | "Pants" | "Accessories" | "Footwear";
  price: number; // in Algerian Dinars (DA)
  /** Placeholder image — replace with your own photo at the same path or URL */
  image: string;
  images: string[];
  description: string;
  sizes: string[];
  colors: string[];
  featured?: boolean;
  isNew?: boolean;
}

export interface CartItem {
  productId: string;
  name: string;
  price: number;
  image: string;
  size: string;
  color: string;
  quantity: number;
}

export interface OrderInfo {
  name: string;
  phone: string;
  wilaya: string;
  address: string;
  deliveryType: "home" | "desk";
}
