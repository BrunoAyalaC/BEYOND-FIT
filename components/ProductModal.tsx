import React from 'react';
import { Product } from '../types';
import { CloseIcon } from './IconComponents';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product) => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, onClose, onAddToCart }) => {
  if (!product) return null;

  const handleAddToCartClick = () => {
    onAddToCart(product);
  }

  return (
    <div 
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="relative bg-brand-bg border border-gray-800 rounded-lg w-full max-w-4xl max-h-[90vh] grid grid-cols-1 md:grid-cols-2 gap-8 p-8 overflow-y-auto animate-fade-in-up"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-brand-cyan transition-colors z-10">
            <CloseIcon className="w-8 h-8"/>
        </button>

        <div>
          <img src={product.imageUrl} alt={product.name} className="w-full h-auto object-cover rounded-lg shadow-lg shadow-brand-cyan/20" />
        </div>

        <div className="flex flex-col">
          <h2 className="text-4xl font-bebas text-white tracking-wider">{product.name}</h2>
          <p className="text-brand-cyan font-semibold mt-1">{product.category}</p>
          <p className="text-3xl font-bold text-white mt-4">S/ {product.price.toFixed(2)}</p>
          <div className="w-16 h-0.5 bg-gray-700 my-6"></div>
          <p className="text-gray-300 flex-grow">{product.description}</p>
          
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-white mb-2">Talla</h3>
            <div className="flex gap-2">
                {['S', 'M', 'L', 'XL'].map(size => (
                    <button key={size} className="w-12 h-12 border border-gray-700 rounded-md text-gray-300 hover:border-brand-cyan hover:text-brand-cyan transition-colors">{size}</button>
                ))}
            </div>
          </div>

          <button 
            onClick={handleAddToCartClick}
            className="mt-8 w-full bg-brand-cyan text-black font-bold font-bebas tracking-widest text-xl py-4 rounded-sm uppercase transition-all duration-300 hover:bg-white hover:shadow-[0_0_25px_#00f6ff]">
            Agregar al Carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
