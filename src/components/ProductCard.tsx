import type { Product } from "@/lib/types";
import { formatPrice, cn } from "@/lib/utils";
import { navigate } from "@/lib/router";
import { useCart } from "@/lib/cart";
import { useState } from "react";
import { Check, ShoppingBag } from "lucide-react";

export function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  const quickAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    addItem({
      productId: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      size: product.sizes[0],
      color: product.colors[0],
      quantity: 1,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div
      onClick={() => navigate(`/product?id=${product.id}`)}
      className="group cursor-pointer"
    >
      <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-zinc-900 border border-purple-500/5">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.isNew && (
            <span className="px-2.5 py-1 text-[10px] font-bold tracking-wider bg-purple-600 text-white rounded-full uppercase">
              New
            </span>
          )}
        </div>

        {/* Quick add button */}
        <button
          onClick={quickAdd}
          className={cn(
            "absolute bottom-3 right-3 w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg",
            added
              ? "bg-green-600 text-white scale-110"
              : "bg-purple-600/90 backdrop-blur text-white opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 hover:bg-purple-500",
          )}
          aria-label="Quick add to cart"
        >
          {added ? <Check size={18} /> : <ShoppingBag size={18} />}
        </button>
      </div>

      <div className="mt-3 px-1">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="text-sm font-medium text-white group-hover:text-purple-400 transition-colors">
              {product.name}
            </h3>
            <p className="text-xs text-gray-500 mt-0.5">{product.category}</p>
          </div>
          <p className="text-sm font-semibold text-white whitespace-nowrap">
            {formatPrice(product.price)}
          </p>
        </div>
      </div>
    </div>
  );
}
