import React, { useState, useEffect } from 'react';
import { ShoppingBagIcon, UserIcon } from './IconComponents';

type Page = 'home' | 'auth' | 'about' | 'contact' | 'checkout' | 'confirmation';

interface HeaderProps {
    onNavigate: (page: Page) => void;
    onCartClick: () => void;
    onAuthClick: () => void;
    cartItemCount: number;
    isAuthenticated: boolean;
    onLogout: () => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigate, onCartClick, onAuthClick, cartItemCount, isAuthenticated, onLogout }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = [
    { label: 'Inicio', page: 'home' as Page },
    { label: 'Colección', page: 'home' as Page }, // Points to home to show all products
    { label: 'Nosotros', page: 'about' as Page },
    { label: 'Contacto', page: 'contact' as Page },
  ];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-brand-bg/80 backdrop-blur-lg border-b border-gray-800' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <button onClick={() => onNavigate('home')} className="text-3xl font-bebas tracking-widest text-white">
              BEYOND <span className="text-brand-cyan">FIT</span>
            </button>
          </div>
          <nav className="hidden md:flex md:space-x-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => onNavigate(item.page)}
                className="font-semibold text-gray-300 hover:text-brand-cyan transition-colors duration-300 relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-cyan transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </nav>
          <div className="flex items-center space-x-4">
            {isAuthenticated ? (
               <button onClick={onLogout} className="font-semibold text-gray-300 hover:text-brand-cyan transition-colors duration-300">
                Cerrar Sesión
               </button>
            ) : (
                <button onClick={onAuthClick} className="text-gray-300 hover:text-brand-cyan transition-colors duration-300">
                    <UserIcon className="h-6 w-6" />
                </button>
            )}

            <button onClick={onCartClick} className="relative text-gray-300 hover:text-brand-cyan transition-colors duration-300">
              <ShoppingBagIcon className="h-6 w-6" />
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-brand-cyan text-black text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
