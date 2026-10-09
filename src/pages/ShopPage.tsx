import { useState, useMemo } from "react";
import { PRODUCTS } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";
import { cn } from "@/lib/utils";

const CATEGORIES = ["All", "Hoodies", "T-Shirts", "Jackets", "Pants", "Accessories", "Footwear"];
const SORT_OPTIONS = [
  { value: "featured", label: "Featured" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "newest", label: "Newest" },
] as const;

export function ShopPage() {
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState<(typeof SORT_OPTIONS)[number]["value"]>("featured");

  const filtered = useMemo(() => {
    let list = category === "All" ? [...PRODUCTS] : PRODUCTS.filter((p) => p.category === category);
    switch (sort) {
      case "price-asc":
        list.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        list.sort((a, b) => b.price - a.price);
        break;
      case "newest":
        list.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
      default:
        list.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }
    return list;
  }, [category, sort]);

  return (
    <div className="bg-black min-h-screen pt-24 md:pt-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <p className="text-purple-400 text-xs tracking-[0.3em] uppercase mb-2">Collection</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white">Shop All</h1>
          <p className="mt-3 text-gray-500 text-sm">
            {filtered.length} {filtered.length === 1 ? "piece" : "pieces"}
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-zinc-900">
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-full transition-all duration-300",
                  category === cat
                    ? "bg-purple-600 text-white"
                    : "bg-zinc-900 text-gray-400 hover:bg-zinc-800 hover:text-white border border-zinc-800",
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as typeof sort)}
            className="bg-zinc-900 border border-zinc-800 text-gray-300 text-sm rounded-full px-4 py-2.5 focus:outline-none focus:border-purple-500/50 cursor-pointer"
          >
            {SORT_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value} className="bg-zinc-900">
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 pb-20">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center">
            <p className="text-gray-500">No products in this category yet.</p>
          </div>
        )}
      </div>
    </div>
  );
}
