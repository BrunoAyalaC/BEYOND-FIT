import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedProducts from './components/FeaturedProducts';
import AllProducts from './components/AllProducts';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';
import ProductModal from './components/ProductModal';
import { Product, CartItem } from './types';
import WhatsAppButton from './components/WhatsAppButton';
import ShoppingCart from './components/ShoppingCart';
import AuthPage from './components/AuthPage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import CheckoutPage from './components/CheckoutPage';
import OrderConfirmationPage from './components/OrderConfirmationPage';

type Page = 'home' | 'auth' | 'about' | 'contact' | 'checkout' | 'confirmation';

const App: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  const handleAddToCart = (product: Product) => {
    setCartItems(prevItems => {
      const itemInCart = prevItems.find(item => item.id === product.id);
      if (itemInCart) {
        return prevItems.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
    closeModal();
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (productId: number, quantity: number) => {
    if (quantity < 1) {
      handleRemoveFromCart(productId);
    } else {
      setCartItems(prevItems =>
        prevItems.map(item =>
          item.id === productId ? { ...item, quantity } : item
        )
      );
    }
  };

  const handleRemoveFromCart = (productId: number) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
    setCurrentPage('home');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };
  
  const handleCheckout = () => {
    if(cartItems.length === 0) return;
    setIsCartOpen(false);
    handleNavigate('checkout');
  }

  const handlePlaceOrder = () => {
    setCartItems([]);
    handleNavigate('confirmation');
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <>
            <Hero />
            <FeaturedProducts onProductClick={handleProductClick} />
            <AllProducts onProductClick={handleProductClick} />
            <CtaSection />
          </>
        );
      case 'auth':
        return <AuthPage onLoginSuccess={handleLoginSuccess} />;
      case 'about':
        return <AboutPage />;
      case 'contact':
        return <ContactPage />;
      case 'checkout':
        return <CheckoutPage cartItems={cartItems} onPlaceOrder={handlePlaceOrder} onNavigate={() => handleNavigate('home')} />;
       case 'confirmation':
        return <OrderConfirmationPage onNavigate={() => handleNavigate('home')} />;
      default:
        return <Hero />;
    }
  };

  const cartItemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="bg-brand-bg text-gray-200 font-montserrat min-h-screen overflow-x-hidden">
      <Header
        onNavigate={handleNavigate}
        onCartClick={() => setIsCartOpen(true)}
        onAuthClick={() => handleNavigate('auth')}
        cartItemCount={cartItemCount}
        isAuthenticated={isAuthenticated}
        onLogout={handleLogout}
      />
      <main>{renderPage()}</main>
      <Footer onNavigate={handleNavigate} />

      <ProductModal product={selectedProduct} onClose={closeModal} onAddToCart={handleAddToCart} />
      <ShoppingCart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveFromCart}
        onCheckout={handleCheckout}
      />
      <WhatsAppButton />
    </div>
  );
};

export default App;
