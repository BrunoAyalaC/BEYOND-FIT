import React from 'react';
import { InstagramIcon, TwitterIcon, FacebookIcon } from './IconComponents';

type Page = 'home' | 'auth' | 'about' | 'contact' | 'checkout' | 'confirmation';

interface FooterProps {
    onNavigate: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-black border-t border-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <h2 className="text-3xl font-bebas tracking-widest text-white">
              BEYOND <span className="text-brand-cyan">FIT</span>
            </h2>
            <p className="mt-4 text-gray-400">Diseñado para los implacables.</p>
            <p className="mt-2 text-gray-500 text-sm">Envíos a todo el Perú.</p>
            <div className="flex space-x-4 mt-6">
                <a href="https://www.instagram.com/_beyond_fit" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-cyan transition-colors"><InstagramIcon /></a>
                <a href="#" className="text-gray-400 hover:text-brand-cyan transition-colors"><TwitterIcon /></a>
                <a href="#" className="text-gray-400 hover:text-brand-cyan transition-colors"><FacebookIcon /></a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white tracking-wider">Tienda</h3>
            <ul className="mt-4 space-y-2">
              <li><button onClick={() => onNavigate('home')} className="text-gray-400 hover:text-brand-cyan transition-colors text-left">Colección</button></li>
              <li><button onClick={() => onNavigate('home')} className="text-gray-400 hover:text-brand-cyan transition-colors text-left">Novedades</button></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white tracking-wider">Soporte</h3>
            <ul className="mt-4 space-y-2">
              <li><button onClick={() => onNavigate('contact')} className="text-gray-400 hover:text-brand-cyan transition-colors text-left">Contáctanos</button></li>
              <li><button onClick={() => onNavigate('contact')} className="text-gray-400 hover:text-brand-cyan transition-colors text-left">Preguntas Frecuentes</button></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white tracking-wider">Empresa</h3>
            <ul className="mt-4 space-y-2">
              <li><button onClick={() => onNavigate('about')} className="text-gray-400 hover:text-brand-cyan transition-colors text-left">Sobre Nosotros</button></li>
            </ul>
          </div>

        </div>
        <div className="mt-12 border-t border-gray-800 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Beyond Fit. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
