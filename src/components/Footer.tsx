import { Instagram, Mail } from "lucide-react";
import { HaloLogo } from "./HaloLogo";
import { navigate } from "@/lib/router";
import { STORE_CONFIG } from "@/lib/config";

function TikTokIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="bg-black border-t border-purple-500/10 mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="flex flex-col items-start gap-4">
            <HaloLogo size={48} />
            <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
              {STORE_CONFIG.tagline}. Premium garments designed for the underground.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold tracking-widest text-white uppercase mb-4">
              Navigate
            </h4>
            <div className="flex flex-col gap-3">
              {[
                { label: "Shop All", path: "/shop" },
                { label: "About HALO", path: "/about" },
                { label: "Contact", path: "/contact" },
                { label: "Cart", path: "/cart" },
              ].map((link) => (
                <button
                  key={link.path}
                  onClick={() => navigate(link.path)}
                  className="text-sm text-gray-500 hover:text-purple-400 transition-colors text-left"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold tracking-widest text-white uppercase mb-4">
              Follow
            </h4>
            <div className="flex gap-4">
              <a
                href={`https://instagram.com/${STORE_CONFIG.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-zinc-900 border border-purple-500/10 flex items-center justify-center text-gray-400 hover:text-purple-400 hover:border-purple-500/30 transition-all"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href={`https://tiktok.com/@${STORE_CONFIG.tiktok}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-zinc-900 border border-purple-500/10 flex items-center justify-center text-gray-400 hover:text-purple-400 hover:border-purple-500/30 transition-all"
                aria-label="TikTok"
              >
                <TikTokIcon size={18} />
              </a>
              <a
                href={`mailto:${STORE_CONFIG.email}`}
                className="w-10 h-10 rounded-full bg-zinc-900 border border-purple-500/10 flex items-center justify-center text-gray-400 hover:text-purple-400 hover:border-purple-500/30 transition-all"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-zinc-900">
          <p className="text-xs text-gray-600 text-center">
            © {new Date().getFullYear()} {STORE_CONFIG.brandName}. All rights reserved. Made in Algeria.
          </p>
        </div>
      </div>
    </footer>
  );
}
