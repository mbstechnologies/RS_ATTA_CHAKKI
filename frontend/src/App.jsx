import React, { useState, useEffect, Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { CartDrawer } from './components/products/CartDrawer';
import { FloatingWhatsAppButton } from './components/common/WhatsAppButton';
import { LoadingFallback } from './components/common/LoadingFallback';

// Lazy loading pages for optimum performance
const Home = lazy(() => import('./pages/Home').then(m => ({ default: m.Home })));
const About = lazy(() => import('./pages/About').then(m => ({ default: m.About })));
const Products = lazy(() => import('./pages/Products').then(m => ({ default: m.Products })));
const Process = lazy(() => import('./pages/Process').then(m => ({ default: m.Process })));
const Contact = lazy(() => import('./pages/Contact').then(m => ({ default: m.Contact })));

// Scroll To Top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const [initialLoading, setInitialLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setInitialLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      {initialLoading && <LoadingFallback message="Connect to RS Atta Chakki..." />}
      <CartProvider>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col bg-[#FFF9EF] text-[#292B24] font-sans antialiased selection:bg-[#D5A447] selection:text-white">
          <Header />
          <main className="flex-grow">
            <Suspense fallback={<LoadingFallback message="Connect to RS Atta Chakki..." />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/products" element={<Products />} />
                <Route path="/process" element={<Process />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
          <CartDrawer />
          <FloatingWhatsAppButton />
        </div>
      </CartProvider>
    </BrowserRouter>
  );
}
