/**
 * HALO BOUTIQUE — Central configuration
 * ─────────────────────────────────────
 * Edit these values to customize your store.
 * Everything your customers see is controlled from this file.
 */

export const STORE_CONFIG = {
  /** Brand name shown in the navbar, footer, and page titles */
  brandName: "HALO BOUTIQUE",

  /** Tagline shown on the hero section */
  tagline: "Underground Streetwear from Algeria",

  /** Instagram handle (without @) */
  instagram: "halo.boutique.dz",

  /** TikTok handle (without @) */
  tiktok: "halo.boutique.dz",

  /**
   * WhatsApp number in international format (country code + number, no +, no spaces).
   * Algeria = 213.  Example: 213 5 55 12 34 56 → "213555123456"
   * Change this to your own WhatsApp / phone number.
   */
  whatsappNumber: "213555123456",

  /** Email address for the contact page */
  email: "contact@haloboutique.com",

  /**
   * Shipping fee per wilaya in Algerian Dinars (DA).
   * Home delivery and desk pickup can differ.
   * You can adjust these or set them to 0 for free shipping.
   */
  shippingHome: 600,
  shippingDesk: 400,
} as const;

export type StoreConfig = typeof STORE_CONFIG;
