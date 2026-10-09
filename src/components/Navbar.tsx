import { useState, useEffect } from "react";
import { ShoppingCart, Menu, X } from "lucide-react";
import { HaloWordmark } from "./HaloLogo";
import { navigate, useHashRoute } from "@/lib/router";
import { useCart } from "@/lib/cart";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "Shop", path: "/shop" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

export function Navbar() {
  const route = useHashRoute();
  const { totalItems } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [route.path]);

  const isActive = (path: string) =>
    path === "/" ? route.path === "/" : route.path.startsWith(path);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-black/90 backdrop-blur-xl border-b border-purple-500/10"
            : "bg-transparent",
        )}
      >
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <button onClick={() => navigate("/")} className="shrink-0">
              <HaloWordmark size={36} />
            </button>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.path}
                  onClick={() => navigate(link.path)}
                  className={cn(
                    "text-sm font-medium tracking-wide transition-colors duration-300 relative group",
                    isActive(link.path)
                      ? "text-white"
                      : "text-gray-400 hover:text-white",
                  )}
                >
                  {link.label}
                  <span
                    className={cn(
                      "absolute -bottom-1 left-0 h-px bg-purple-400 transition-all duration-300",
                      isActive(link.path) ? "w-full" : "w-0 group-hover:w-full",
                    )}
                  />
                </button>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => navigate("/cart")}
                className="relative p-2 text-gray-300 hover:text-white transition-colors"
                aria-label="Cart"
              >
                <ShoppingCart size={22} />
                {totalItems > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 bg-purple-600 text-white text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>

              {/* Mobile menu toggle */}
              <button
                onClick={() => setMenuOpen((v) => !v)}
                className="md:hidden p-2 text-gray-300 hover:text-white"
                aria-label="Menu"
              >
                {menuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile drawer */}
      <div
        className={cn(
          "fixed inset-0 z-40 md:hidden transition-all duration-300",
          menuOpen ? "visible opacity-100" : "invisible opacity-0",
        )}
      >
        <div
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          onClick={() => setMenuOpen(false)}
        />
        <div
          className={cn(
            "absolute top-0 right-0 bottom-0 w-72 bg-zinc-950 border-l border-purple-500/10 p-6 pt-24 transition-transform duration-300",
            menuOpen ? "translate-x-0" : "translate-x-full",
          )}
        >
          <div className="flex flex-col gap-6">
            {NAV_LINKS.map((link) => (
              <button
                key={link.path}
                onClick={() => navigate(link.path)}
                className={cn(
                  "text-left text-lg font-medium tracking-wide transition-colors",
                  isActive(link.path) ? "text-white" : "text-gray-400",
                )}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
