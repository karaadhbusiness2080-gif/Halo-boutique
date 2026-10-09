import { useState } from "react";
import { getProductById, PRODUCTS } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";
import { useCart } from "@/lib/cart";
import { navigate, useHashRoute } from "@/lib/router";
import { formatPrice, cn } from "@/lib/utils";
import { Check, ShoppingBag, ArrowLeft, Truck, RotateCcw } from "lucide-react";

export function ProductDetailPage() {
  const route = useHashRoute();
  const product = getProductById(route.params.id ?? "");
  const { addItem } = useCart();

  const [size, setSize] = useState(product?.sizes[0] ?? "");
  const [color, setColor] = useState(product?.colors[0] ?? "");
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <div className="bg-black min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <p className="text-gray-400 mb-4">Product not found.</p>
          <button
            onClick={() => navigate("/shop")}
            className="text-purple-400 hover:text-purple-300 font-medium"
          >
            Back to Shop
          </button>
        </div>
      </div>
    );
  }

  const handleAdd = () => {
    addItem({
      productId: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      size,
      color,
      quantity,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const related = PRODUCTS.filter(
    (p) => p.category === product.category && p.id !== product.id,
  ).slice(0, 4);

  return (
    <div className="bg-black min-h-screen pt-24 md:pt-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <button
          onClick={() => navigate("/shop")}
          className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-purple-400 transition-colors mb-6"
        >
          <ArrowLeft size={16} />
          Back to Shop
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Images */}
          <div className="flex flex-col gap-4">
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-zinc-900 border border-purple-500/5">
              <img
                src={product.images[activeImage]}
                alt={product.name}
                className="absolute inset-0 w-full h-full object-cover"
              />
              {product.isNew && (
                <span className="absolute top-4 left-4 px-3 py-1 text-[10px] font-bold tracking-wider bg-purple-600 text-white rounded-full uppercase">
                  New
                </span>
              )}
            </div>
            {product.images.length > 1 && (
              <div className="flex gap-3">
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(i)}
                    className={cn(
                      "relative w-20 h-24 rounded-lg overflow-hidden border-2 transition-all",
                      activeImage === i
                        ? "border-purple-500"
                        : "border-transparent opacity-60 hover:opacity-100",
                    )}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Info */}
          <div className="flex flex-col">
            <p className="text-purple-400 text-xs tracking-[0.3em] uppercase mb-2">
              {product.category}
            </p>
            <h1 className="text-3xl sm:text-4xl font-bold text-white">{product.name}</h1>
            <p className="mt-4 text-2xl font-semibold text-white">{formatPrice(product.price)}</p>

            <p className="mt-6 text-gray-400 leading-relaxed">{product.description}</p>

            {/* Color */}
            <div className="mt-8">
              <p className="text-sm font-medium text-gray-300 mb-3">
                Color: <span className="text-white">{color}</span>
              </p>
              <div className="flex gap-3">
                {product.colors.map((c) => (
                  <button
                    key={c}
                    onClick={() => setColor(c)}
                    className={cn(
                      "px-4 py-2 text-sm rounded-full border transition-all",
                      color === c
                        ? "border-purple-500 bg-purple-600/10 text-white"
                        : "border-zinc-800 text-gray-400 hover:border-zinc-700",
                    )}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>

            {/* Size */}
            <div className="mt-6">
              <p className="text-sm font-medium text-gray-300 mb-3">Size</p>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSize(s)}
                    className={cn(
                      "min-w-12 px-4 py-2.5 text-sm font-medium rounded-lg border transition-all",
                      size === s
                        ? "border-purple-500 bg-purple-600/10 text-white"
                        : "border-zinc-800 text-gray-400 hover:border-zinc-700",
                    )}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <p className="text-sm font-medium text-gray-300 mb-3">Quantity</p>
              <div className="inline-flex items-center border border-zinc-800 rounded-lg overflow-hidden">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-11 h-11 flex items-center justify-center text-gray-400 hover:text-white hover:bg-zinc-800 transition-colors"
                >
                  −
                </button>
                <span className="w-12 text-center text-white font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="w-11 h-11 flex items-center justify-center text-gray-400 hover:text-white hover:bg-zinc-800 transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleAdd}
                className={cn(
                  "flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 font-semibold tracking-wide rounded-full transition-all duration-300",
                  added
                    ? "bg-green-600 text-white"
                    : "bg-purple-600 hover:bg-purple-500 text-white hover:shadow-[0_0_30px_rgba(168,85,247,0.4)]",
                )}
              >
                {added ? (
                  <>
                    <Check size={18} /> Added to Cart
                  </>
                ) : (
                  <>
                    <ShoppingBag size={18} /> Add to Cart
                  </>
                )}
              </button>
              <button
                onClick={() => {
                  handleAdd();
                  setTimeout(() => navigate("/cart"), 300);
                }}
                className="px-6 py-4 border border-zinc-700 hover:border-purple-500/50 text-gray-300 hover:text-white font-semibold tracking-wide rounded-full transition-all"
              >
                Buy Now
              </button>
            </div>

            {/* Trust badges */}
            <div className="mt-8 pt-8 border-t border-zinc-900 space-y-3">
              <div className="flex items-center gap-3 text-sm text-gray-500">
                <Truck size={18} className="text-purple-400" />
                Delivery to all 58 wilayas
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-500">
                <RotateCcw size={18} className="text-purple-400" />
                Exchange within 7 days (unworn, with tags)
              </div>
            </div>
          </div>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <section className="mt-20 pb-20">
            <h2 className="text-2xl font-bold text-white mb-6">You May Also Like</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
