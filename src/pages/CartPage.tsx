import { useCart } from "@/lib/cart";
import { navigate } from "@/lib/router";
import { formatPrice } from "@/lib/utils";
import { Trash2, ShoppingBag, ArrowRight } from "lucide-react";

export function CartPage() {
  const { items, removeItem, updateQuantity, subtotal } = useCart();

  if (items.length === 0) {
    return (
      <div className="bg-black min-h-screen pt-24 md:pt-28 flex items-center justify-center">
        <div className="text-center px-4">
          <div className="w-20 h-20 rounded-full bg-zinc-900 border border-purple-500/10 flex items-center justify-center mx-auto mb-6 text-gray-600">
            <ShoppingBag size={32} />
          </div>
          <h1 className="text-2xl font-bold text-white mb-3">Your Cart is Empty</h1>
          <p className="text-gray-500 mb-8">Looks like you haven't added anything yet.</p>
          <button
            onClick={() => navigate("/shop")}
            className="inline-flex items-center gap-2 px-8 py-4 bg-purple-600 hover:bg-purple-500 text-white font-semibold tracking-wide rounded-full transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.4)]"
          >
            Browse Collection
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black min-h-screen pt-24 md:pt-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-8">Your Cart</h1>

        {/* Items */}
        <div className="space-y-4 mb-8">
          {items.map((item, i) => (
            <div
              key={i}
              className="flex gap-4 rounded-2xl bg-zinc-950 border border-zinc-900 p-4"
            >
              {/* Image */}
              <button
                onClick={() => navigate(`/product?id=${item.productId}`)}
                className="relative w-24 h-32 sm:w-28 sm:h-36 rounded-xl overflow-hidden bg-zinc-900 shrink-0"
              >
                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
              </button>

              {/* Details */}
              <div className="flex-1 flex flex-col">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <button
                      onClick={() => navigate(`/product?id=${item.productId}`)}
                      className="text-sm sm:text-base font-medium text-white hover:text-purple-400 transition-colors text-left"
                    >
                      {item.name}
                    </button>
                    <p className="text-xs text-gray-500 mt-1">
                      Size: {item.size} · Color: {item.color}
                    </p>
                  </div>
                  <button
                    onClick={() => removeItem(i)}
                    className="text-gray-600 hover:text-red-500 transition-colors p-1"
                    aria-label="Remove item"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>

                <div className="flex items-end justify-between mt-auto">
                  {/* Quantity */}
                  <div className="inline-flex items-center border border-zinc-800 rounded-lg overflow-hidden">
                    <button
                      onClick={() => updateQuantity(i, item.quantity - 1)}
                      className="w-9 h-9 flex items-center justify-center text-gray-400 hover:text-white hover:bg-zinc-800 transition-colors"
                    >
                      −
                    </button>
                    <span className="w-10 text-center text-white text-sm font-medium">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(i, item.quantity + 1)}
                      className="w-9 h-9 flex items-center justify-center text-gray-400 hover:text-white hover:bg-zinc-800 transition-colors"
                    >
                      +
                    </button>
                  </div>
                  <p className="text-sm font-semibold text-white">
                    {formatPrice(item.price * item.quantity)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="rounded-2xl bg-zinc-950 border border-purple-500/10 p-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-400">Subtotal</span>
            <span className="text-sm text-white">{formatPrice(subtotal)}</span>
          </div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-400">Shipping</span>
            <span className="text-sm text-gray-500">Calculated at checkout</span>
          </div>
          <div className="flex items-center justify-between pt-4 border-t border-zinc-900">
            <span className="text-base font-semibold text-white">Total</span>
            <span className="text-xl font-bold text-white">{formatPrice(subtotal)}</span>
          </div>

          <button
            onClick={() => navigate("/checkout")}
            className="mt-6 w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-purple-600 hover:bg-purple-500 text-white font-semibold tracking-wide rounded-full transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.4)]"
          >
            Proceed to Checkout
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
