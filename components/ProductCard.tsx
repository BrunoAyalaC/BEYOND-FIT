import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onProductClick: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onProductClick }) => {
  return (
    <div 
      className="group relative border border-gray-800 rounded-lg overflow-hidden transition-all duration-300 hover:border-brand-cyan hover:shadow-2xl hover:shadow-brand-cyan/20 transform hover:-translate-y-2 cursor-pointer"
      onClick={() => onProductClick(product)}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/80 via-transparent to-black/20 z-10"></div>
      <img
        src={product.imageUrl}
        alt={product.name}
        className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute bottom-0 left-0 p-4 z-20 w-full">
        <h3 className="text-lg font-bold text-white tracking-wide truncate">{product.name}</h3>
        <p className="text-gray-400 text-sm">{product.category}</p>
      </div>
      <div className="absolute top-4 right-4 z-20 bg-brand-bg/80 text-brand-cyan px-3 py-1 rounded-full text-sm font-semibold">
        S/ {product.price.toFixed(2)}
      </div>
      <div className="absolute inset-0 bg-black/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30">
        <button className="border-2 border-brand-cyan text-brand-cyan font-bold py-2 px-6 rounded-sm uppercase tracking-wider hover:bg-brand-cyan hover:text-black transition-colors duration-300">
          Ver Detalles
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
