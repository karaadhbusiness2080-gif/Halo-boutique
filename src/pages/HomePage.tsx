import { navigate } from "@/lib/router";
import { PRODUCTS, getFeaturedProducts, getNewProducts } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";
import { HaloLogo } from "@/components/HaloLogo";
import { ArrowRight, Truck, Shield, Sparkles } from "lucide-react";
import { STORE_CONFIG } from "@/lib/config";

export function HomePage() {
  const featured = getFeaturedProducts();
  const newArrivals = getNewProducts();

  return (
    <div className="bg-black">
      {/* Hero */}
      <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-900/30 rounded-full blur-[100px]" />
        </div>

        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-20">
          {/* Floating logo */}
          <div className="flex justify-center mb-8 animate-[float_4s_ease-in-out_infinite]">
            <HaloLogo size={80} />
          </div>

          <p className="text-purple-400 text-sm tracking-[0.3em] uppercase mb-4 animate-[fadeUp_0.8s_ease-out]">
            {STORE_CONFIG.tagline}
          </p>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.95] tracking-tight animate-[fadeUp_0.8s_ease-out_0.1s_both]">
            HALO
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-purple-500 to-purple-700 bg-clip-text text-transparent">
              BOUTIQUE
            </span>
          </h1>
          <p className="mt-6 text-gray-400 text-base sm:text-lg max-w-xl mx-auto leading-relaxed animate-[fadeUp_0.8s_ease-out_0.2s_both]">
            Born in the shadows. Designed for those who refuse to blend in.
            Premium streetwear crafted for the underground.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-[fadeUp_0.8s_ease-out_0.3s_both]">
            <button
              onClick={() => navigate("/shop")}
              className="group inline-flex items-center gap-2 px-8 py-4 bg-purple-600 hover:bg-purple-500 text-white font-semibold tracking-wide rounded-full transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] hover:scale-105"
            >
              Shop Now
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => navigate("/about")}
              className="px-8 py-4 border border-zinc-700 hover:border-purple-500/50 text-gray-300 hover:text-white font-semibold tracking-wide rounded-full transition-all duration-300"
            >
              Our Story
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-[bounce_2s_infinite]">
          <div className="w-6 h-10 border-2 border-gray-700 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-purple-500 rounded-full" />
          </div>
        </div>
      </section>

      {/* Features bar */}
      <section className="border-y border-zinc-900 bg-zinc-950/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              { icon: Truck, title: "58 Wilayas Delivery", desc: "Shipping across all of Algeria" },
              { icon: Shield, title: "Quality Guaranteed", desc: "Premium fabrics, built to last" },
              { icon: Sparkles, title: "Limited Drops", desc: "Small batches, exclusive designs" },
            ].map((f, i) => (
              <div key={i} className="flex items-center gap-4 justify-center sm:justify-start">
                <div className="w-12 h-12 rounded-full bg-purple-600/10 border border-purple-500/20 flex items-center justify-center text-purple-400 shrink-0">
                  <f.icon size={20} />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">{f.title}</h3>
                  <p className="text-xs text-gray-500">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured products */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-purple-400 text-xs tracking-[0.3em] uppercase mb-2">Featured</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Signature Pieces</h2>
          </div>
          <button
            onClick={() => navigate("/shop")}
            className="hidden sm:inline-flex items-center gap-2 text-sm text-gray-400 hover:text-purple-400 transition-colors group"
          >
            View All
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Cinematic banner */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/40 via-black to-black" />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url(https://images.pexels.com/photos/7173190/pexels-photo-7173190.jpeg?auto=compress&cs=tinysrgb&h=650&w=940)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <p className="text-purple-400 text-xs tracking-[0.3em] uppercase mb-4">
            The HALO Ethos
          </p>
          <h2 className="text-3xl sm:text-5xl font-bold text-white max-w-2xl leading-tight">
            We don't follow trends.
            <br />
            We create shadows.
          </h2>
          <p className="mt-6 text-gray-400 max-w-xl leading-relaxed">
            Every piece is designed in Algeria, produced in limited quantities, and built
            for those who move differently.
          </p>
          <button
            onClick={() => navigate("/about")}
            className="mt-8 inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-medium transition-colors group"
          >
            Read Our Story
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* New arrivals */}
      {newArrivals.length > 0 && (
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="mb-10">
            <p className="text-purple-400 text-xs tracking-[0.3em] uppercase mb-2">Just Dropped</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">New Arrivals</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {newArrivals.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-20">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-purple-900/30 via-zinc-900 to-black border border-purple-500/10 p-12 sm:p-20 text-center">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-purple-600/20 rounded-full blur-[100px]" />
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-5xl font-bold text-white mb-4">
              Ready to Enter the Shadow?
            </h2>
            <p className="text-gray-400 mb-8 max-w-lg mx-auto">
              Explore the full collection. Limited quantities. Once it's gone, it's gone.
            </p>
            <button
              onClick={() => navigate("/shop")}
              className="inline-flex items-center gap-2 px-8 py-4 bg-purple-600 hover:bg-purple-500 text-white font-semibold tracking-wide rounded-full transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] hover:scale-105"
            >
              Explore Collection
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
