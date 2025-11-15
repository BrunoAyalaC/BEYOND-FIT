import React from 'react';
import { PRODUCTS } from '../constants';
import ProductCard from './ProductCard';
import { Product } from '../types';

interface FeaturedProductsProps {
  onProductClick: (product: Product) => void;
}

const FeaturedProducts: React.FC<FeaturedProductsProps> = ({ onProductClick }) => {
  return (
    <section className="py-20 sm:py-28 bg-brand-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bebas tracking-wider text-white">Equipos Destacados</h2>
          <div className="w-24 h-1 bg-brand-cyan mx-auto mt-4"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {PRODUCTS.slice(0, 4).map((product, index) => ( // Only show first 4 as featured
            <div key={product.id} style={{ animationDelay: `${index * 100}ms` }} className="opacity-0 animate-fade-in-up">
               <ProductCard product={product} onProductClick={onProductClick} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
