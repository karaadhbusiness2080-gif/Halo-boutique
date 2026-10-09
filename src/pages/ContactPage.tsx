import { Instagram, Mail, MapPin, MessageCircle } from "lucide-react";
import { STORE_CONFIG } from "@/lib/config";

function TikTokIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z" />
    </svg>
  );
}

export function ContactPage() {
  const channels = [
    {
      icon: Instagram,
      label: "Instagram",
      handle: `@${STORE_CONFIG.instagram}`,
      href: `https://instagram.com/${STORE_CONFIG.instagram}`,
      color: "hover:text-pink-400 hover:border-pink-500/30",
    },
    {
      icon: TikTokIcon,
      label: "TikTok",
      handle: `@${STORE_CONFIG.tiktok}`,
      href: `https://tiktok.com/@${STORE_CONFIG.tiktok}`,
      color: "hover:text-white hover:border-white/30",
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      handle: "Chat with us",
      href: `https://wa.me/${STORE_CONFIG.whatsappNumber}`,
      color: "hover:text-green-400 hover:border-green-500/30",
    },
    {
      icon: Mail,
      label: "Email",
      handle: STORE_CONFIG.email,
      href: `mailto:${STORE_CONFIG.email}`,
      color: "hover:text-purple-400 hover:border-purple-500/30",
    },
  ];

  return (
    <div className="bg-black min-h-screen pt-24 md:pt-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-purple-400 text-xs tracking-[0.3em] uppercase mb-3">Get in Touch</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white">Contact Us</h1>
          <p className="mt-4 text-gray-400 max-w-md mx-auto">
            Questions about an order? Want to collaborate? We're here.
          </p>
        </div>

        {/* Contact channels */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {channels.map((ch) => (
            <a
              key={ch.label}
              href={ch.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex items-center gap-4 rounded-2xl bg-zinc-950 border border-zinc-800 p-6 transition-all duration-300 ${ch.color}`}
            >
              <div className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-gray-400 group-hover:text-inherit transition-colors shrink-0">
                <ch.icon size={22} />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white">{ch.label}</h3>
                <p className="text-xs text-gray-500 mt-0.5">{ch.handle}</p>
              </div>
            </a>
          ))}
        </div>

        {/* Location */}
        <div className="mt-8 flex items-center gap-4 rounded-2xl bg-zinc-950 border border-zinc-800 p-6">
          <div className="w-12 h-12 rounded-full bg-purple-600/10 border border-purple-500/20 flex items-center justify-center text-purple-400 shrink-0">
            <MapPin size={22} />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white">Based in Algeria</h3>
            <p className="text-xs text-gray-500 mt-0.5">Shipping to all 58 wilayas</p>
          </div>
        </div>

        {/* Note */}
        <div className="mt-12 rounded-2xl bg-gradient-to-br from-purple-900/20 to-transparent border border-purple-500/10 p-8 text-center">
          <p className="text-sm text-gray-400 leading-relaxed">
            For order inquiries, please include your name and order details in your message.
            We typically respond within 24 hours.
          </p>
        </div>
      </div>
    </div>
  );
}
