import { CartProvider } from "@/lib/cart";
import { useHashRoute } from "@/lib/router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HomePage } from "@/pages/HomePage";
import { ShopPage } from "@/pages/ShopPage";
import { ProductDetailPage } from "@/pages/ProductDetailPage";
import { AboutPage } from "@/pages/AboutPage";
import { ContactPage } from "@/pages/ContactPage";
import { CartPage } from "@/pages/CartPage";
import { CheckoutPage } from "@/pages/CheckoutPage";
import { STORE_CONFIG } from "@/lib/config";
import { useEffect } from "react";

function Router() {
  const route = useHashRoute();

  useEffect(() => {
    document.title = `${STORE_CONFIG.brandName} — ${STORE_CONFIG.tagline}`;
  }, []);

  switch (route.path) {
    case "/":
      return <HomePage />;
    case "/shop":
      return <ShopPage />;
    case "/product":
      return <ProductDetailPage />;
    case "/about":
      return <AboutPage />;
    case "/contact":
      return <ContactPage />;
    case "/cart":
      return <CartPage />;
    case "/checkout":
      return <CheckoutPage />;
    default:
      return <HomePage />;
  }
}

function App() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-black flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Router />
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;
