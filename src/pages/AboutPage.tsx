import { HaloLogo } from "@/components/HaloLogo";
import { navigate } from "@/lib/router";
import { ArrowRight } from "lucide-react";

export function AboutPage() {
  return (
    <div className="bg-black min-h-screen pt-24 md:pt-28">
      {/* Hero */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-purple-600/15 rounded-full blur-[120px]" />
        <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 text-center">
          <div className="flex justify-center mb-6">
            <HaloLogo size={60} />
          </div>
          <p className="text-purple-400 text-xs tracking-[0.3em] uppercase mb-4">Our Story</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
            From the Shadows
            <br />
            of Algeria
          </h1>
        </div>
      </section>

      {/* Story sections */}
      <section className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        <div>
          <h2 className="text-xl font-semibold text-white mb-4">The Beginning</h2>
          <p className="text-gray-400 leading-relaxed">
            HALO BOUTIQUE was born from a simple idea: Algerian streetwear deserves to be
            premium. Not mass-produced. Not copied. Original. We started with a single hoodie
            design and a commitment to quality that wouldn't compromise — and we haven't
            looked back since.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-white mb-4">The Philosophy</h2>
          <p className="text-gray-400 leading-relaxed">
            We believe in the underground. In the people who move differently. Every piece we
            create is designed in limited quantities — small batches, exclusive designs, no
            restocks. When you wear HALO, you're not wearing what everyone else has. You're
            wearing something that was made for the few who understand.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-white mb-4">The Craft</h2>
          <p className="text-gray-400 leading-relaxed">
            We work with heavyweight fabrics, precise cuts, and meticulous detailing. From the
            embossed logo to the stitching, every element is considered. We don't cut corners
            and we don't chase trends. We build garments that last — in quality and in style.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-white mb-4">Made in Algeria</h2>
          <p className="text-gray-400 leading-relaxed">
            We're proud to be Algerian. Our brand is designed here, inspired by the streets
            here, and built for the people here. We ship to all 58 wilayas because we believe
            everyone in this country deserves access to premium streetwear — without needing
            to look abroad.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { title: "Limited Drops", desc: "Small batches. No restocks. Exclusivity by design." },
            { title: "Premium Quality", desc: "Heavyweight fabrics. Reinforced stitching. Built to last." },
            { title: "Local Roots", desc: "Designed in Algeria. Shipped to all 58 wilayas." },
          ].map((v, i) => (
            <div
              key={i}
              className="rounded-2xl bg-zinc-950 border border-purple-500/10 p-8 hover:border-purple-500/20 transition-colors"
            >
              <h3 className="text-lg font-semibold text-white mb-2">{v.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Join the Shadow</h2>
        <p className="text-gray-400 mb-8">
          Explore our latest drop before it's gone.
        </p>
        <button
          onClick={() => navigate("/shop")}
          className="inline-flex items-center gap-2 px-8 py-4 bg-purple-600 hover:bg-purple-500 text-white font-semibold tracking-wide rounded-full transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] hover:scale-105 group"
        >
          Shop the Collection
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </section>
    </div>
  );
}
