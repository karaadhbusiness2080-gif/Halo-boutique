import { useState } from "react";
import { useCart } from "@/lib/cart";
import { navigate } from "@/lib/router";
import { formatPrice } from "@/lib/utils";
import { WILAYAS } from "@/lib/wilayas";
import { STORE_CONFIG } from "@/lib/config";
import type { OrderInfo } from "@/lib/types";
import { ArrowLeft, MessageCircle, AlertCircle } from "lucide-react";

export function CheckoutPage() {
  const { items, subtotal, clearCart } = useCart();

  const [info, setInfo] = useState<OrderInfo>({
    name: "",
    phone: "",
    wilaya: "",
    address: "",
    deliveryType: "home",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [whatsappUrl, setWhatsappUrl] = useState<string | null>(null);

  if (items.length === 0 && !whatsappUrl) {
    return (
      <div className="bg-black min-h-screen pt-24 md:pt-28 flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-2xl font-bold text-white mb-3">Your Cart is Empty</h1>
          <p className="text-gray-500 mb-8">Add items before checking out.</p>
          <button
            onClick={() => navigate("/shop")}
            className="inline-flex items-center gap-2 px-8 py-4 bg-purple-600 hover:bg-purple-500 text-white font-semibold rounded-full transition-all"
          >
            Browse Collection
          </button>
        </div>
      </div>
    );
  }

  const shippingFee =
    info.deliveryType === "home" ? STORE_CONFIG.shippingHome : STORE_CONFIG.shippingDesk;
  const total = subtotal + shippingFee;

  const validate = (): boolean => {
    const e: Record<string, string> = {};
    if (!info.name.trim()) e.name = "Please enter your name";
    if (!info.phone.trim()) e.phone = "Please enter your phone number";
    else if (!/^[0-9+\s()-]{8,}$/.test(info.phone)) e.phone = "Please enter a valid phone number";
    if (!info.wilaya) e.wilaya = "Please select your wilaya";
    if (!info.address.trim()) e.address = "Please enter your delivery address";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const buildWhatsAppMessage = (): string => {
    const lines: string[] = [];
    lines.push("*HALO BOUTIQUE — New Order*");
    lines.push("");
    lines.push("*Customer Information*");
    lines.push(`Name: ${info.name}`);
    lines.push(`Phone: ${info.phone}`);
    lines.push(`Wilaya: ${info.wilaya}`);
    lines.push(`Address: ${info.address}`);
    lines.push(`Delivery: ${info.deliveryType === "home" ? "Home Delivery" : "Desk Pickup"}`);
    lines.push("");
    lines.push("*Order Items*");
    items.forEach((item, i) => {
      lines.push(
        `${i + 1}. ${item.name} — ${item.size} / ${item.color} × ${item.quantity} = ${formatPrice(item.price * item.quantity)}`,
      );
    });
    lines.push("");
    lines.push(`Subtotal: ${formatPrice(subtotal)}`);
    lines.push(`Shipping: ${formatPrice(shippingFee)}`);
    lines.push(`*Total: ${formatPrice(total)}*`);
    return lines.join("\n");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    const message = buildWhatsAppMessage();
    const url = `https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
    setWhatsappUrl(url);
  };

  const handleConfirmSent = () => {
    clearCart();
    setWhatsappUrl(null);
    navigate("/shop");
  };

  const update = (field: keyof OrderInfo, value: string) => {
    setInfo((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  return (
    <div className="bg-black min-h-screen pt-24 md:pt-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-8">
        <button
          onClick={() => navigate("/cart")}
          className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-purple-400 transition-colors mb-6"
        >
          <ArrowLeft size={16} />
          Back to Cart
        </button>

        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-8">Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  value={info.name}
                  onChange={(e) => update("name", e.target.value)}
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-purple-500/50 transition-colors"
                  placeholder="Your name"
                />
                {errors.name && (
                  <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                    <AlertCircle size={12} /> {errors.name}
                  </p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={info.phone}
                  onChange={(e) => update("phone", e.target.value)}
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-purple-500/50 transition-colors"
                  placeholder="06 12 34 56 78"
                />
                {errors.phone && (
                  <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                    <AlertCircle size={12} /> {errors.phone}
                  </p>
                )}
              </div>

              {/* Wilaya */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Wilaya
                </label>
                <select
                  value={info.wilaya}
                  onChange={(e) => update("wilaya", e.target.value)}
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500/50 transition-colors cursor-pointer"
                >
                  <option value="">Select your wilaya</option>
                  {WILAYAS.map((w) => (
                    <option key={w.code} value={`${w.code} - ${w.name}`}>
                      {w.code} - {w.name}
                    </option>
                  ))}
                </select>
                {errors.wilaya && (
                  <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                    <AlertCircle size={12} /> {errors.wilaya}
                  </p>
                )}
              </div>

              {/* Address */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Delivery Address
                </label>
                <textarea
                  value={info.address}
                  onChange={(e) => update("address", e.target.value)}
                  rows={3}
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-purple-500/50 transition-colors resize-none"
                  placeholder="Street, building, apartment, landmark..."
                />
                {errors.address && (
                  <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                    <AlertCircle size={12} /> {errors.address}
                  </p>
                )}
              </div>

              {/* Delivery type */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Delivery Method
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setInfo((p) => ({ ...p, deliveryType: "home" }))}
                    className={`px-4 py-3 rounded-xl border text-sm font-medium transition-all ${
                      info.deliveryType === "home"
                        ? "border-purple-500 bg-purple-600/10 text-white"
                        : "border-zinc-800 text-gray-400 hover:border-zinc-700"
                    }`}
                  >
                    Home Delivery
                    <span className="block text-xs text-gray-500 mt-1">
                      {formatPrice(STORE_CONFIG.shippingHome)}
                    </span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setInfo((p) => ({ ...p, deliveryType: "desk" }))}
                    className={`px-4 py-3 rounded-xl border text-sm font-medium transition-all ${
                      info.deliveryType === "desk"
                        ? "border-purple-500 bg-purple-600/10 text-white"
                        : "border-zinc-800 text-gray-400 hover:border-zinc-700"
                    }`}
                  >
                    Desk Pickup
                    <span className="block text-xs text-gray-500 mt-1">
                      {formatPrice(STORE_CONFIG.shippingDesk)}
                    </span>
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-4 bg-white hover:bg-gray-200 text-black font-semibold tracking-wide rounded-full transition-all duration-300"
              >
                Review Order Summary
              </button>
            </form>
          </div>

          {/* Order summary */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-2xl bg-zinc-950 border border-purple-500/10 p-6">
              <h2 className="text-lg font-semibold text-white mb-4">Order Summary</h2>

              {/* Items */}
              <div className="space-y-3 mb-4 max-h-64 overflow-y-auto">
                {items.map((item, i) => (
                  <div key={i} className="flex gap-3 text-sm">
                    <div className="relative w-14 h-16 rounded-lg overflow-hidden bg-zinc-900 shrink-0">
                      <img src={item.image} alt="" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-white font-medium truncate">{item.name}</p>
                      <p className="text-xs text-gray-500">
                        {item.size} / {item.color} × {item.quantity}
                      </p>
                    </div>
                    <p className="text-white font-medium whitespace-nowrap">
                      {formatPrice(item.price * item.quantity)}
                    </p>
                  </div>
                ))}
              </div>

              {/* Totals */}
              <div className="space-y-2 pt-4 border-t border-zinc-900">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Subtotal</span>
                  <span className="text-white">{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Shipping</span>
                  <span className="text-white">{formatPrice(shippingFee)}</span>
                </div>
                <div className="flex justify-between pt-3 border-t border-zinc-900">
                  <span className="font-semibold text-white">Total</span>
                  <span className="font-bold text-white text-lg">{formatPrice(total)}</span>
                </div>
              </div>

              {/* WhatsApp confirmation */}
              {whatsappUrl && (
                <div className="mt-6 pt-6 border-t border-zinc-900">
                  <div className="rounded-xl bg-green-600/10 border border-green-600/20 p-4 mb-4">
                    <p className="text-sm text-green-400 font-medium mb-1">
                      Order ready to send!
                    </p>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      Click below to send your order details to our WhatsApp.
                      We'll confirm availability and delivery time with you directly.
                    </p>
                  </div>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleConfirmSent}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-green-600 hover:bg-green-500 text-white font-semibold tracking-wide rounded-full transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,197,94,0.4)]"
                  >
                    <MessageCircle size={20} />
                    Send Order via WhatsApp
                  </a>
                  <p className="mt-3 text-xs text-gray-600 text-center leading-relaxed">
                    No payment is processed online. You pay on delivery.
                    This button opens WhatsApp with your order details pre-filled.
                  </p>
                </div>
              )}

              {!whatsappUrl && (
                <p className="mt-4 text-xs text-gray-600 leading-relaxed">
                  Fill in your details and review the summary to proceed.
                  Orders are sent via WhatsApp — no online payment required.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
