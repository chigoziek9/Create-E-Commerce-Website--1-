import { useState } from 'react';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProductsPage } from './pages/ProductsPage';
import { ContactPage } from './pages/ContactPage';
import { AdminDashboard } from './pages/AdminDashboard';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { productsData, Product } from '../data/products';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type Page = 'home' | 'about' | 'products' | 'contact' | 'admin' | 'product-detail';

interface CartItem extends Product {
  quantity: number;
  selectedSize?: string;
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [products, setProducts] = useState<Product[]>(productsData);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);

  const addToCart = (product: Product, size?: string) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => 
        item.id === product.id && item.selectedSize === size
      );
      
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id && item.selectedSize === size
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      
      return [...prevCart, { ...product, quantity: 1, selectedSize: size }];
    });
  };

  const updateCart = (productId: string, quantity: number, size?: string) => {
    setCart(prevCart => {
      if (quantity === 0) {
        return prevCart.filter(item => 
          !(item.id === productId && item.selectedSize === size)
        );
      }
      return prevCart.map(item =>
        item.id === productId && item.selectedSize === size
          ? { ...item, quantity }
          : item
      );
    });
  };

  const viewProductDetail = (productId: string) => {
    setSelectedProductId(productId);
    setCurrentPage('product-detail');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={setCurrentPage} viewProductDetail={viewProductDetail} />;
      case 'about':
        return <AboutPage />;
      case 'products':
        return <ProductsPage products={products} addToCart={addToCart} viewProductDetail={viewProductDetail} />;
      case 'contact':
        return <ContactPage />;
      case 'admin':
        return <AdminDashboard products={products} setProducts={setProducts} />;
      case 'product-detail':
        return selectedProductId ? (
          <ProductDetailPage
            product={products.find(p => p.id === selectedProductId)!}
            addToCart={addToCart}
            onBack={() => setCurrentPage('products')}
          />
        ) : (
          <HomePage onNavigate={setCurrentPage} viewProductDetail={viewProductDetail} />
        );
      default:
        return <HomePage onNavigate={setCurrentPage} viewProductDetail={viewProductDetail} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation 
        currentPage={currentPage} 
        onNavigate={setCurrentPage} 
        cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)} 
      />
      <main className="flex-1">
        {renderPage()}
      </main>
      <Footer onNavigate={setCurrentPage} />
    </div>
  );
}
