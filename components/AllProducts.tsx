import React from 'react';
import { PRODUCTS } from '../constants';
import ProductCard from './ProductCard';
import { Product } from '../types';

interface AllProductsProps {
  onProductClick: (product: Product) => void;
}

const AllProducts: React.FC<AllProductsProps> = ({ onProductClick }) => {
  const [categoryFilter, setCategoryFilter] = React.useState('Todos');
  const [brandFilter, setBrandFilter] = React.useState('Todas');

  const categories = ['Todos', ...Array.from(new Set(PRODUCTS.map(p => p.category)))];
  const brands = ['Todas', ...Array.from(new Set(PRODUCTS.map(p => p.brand)))];

  const filteredProducts = PRODUCTS.filter(product => {
    const categoryMatch = categoryFilter === 'Todos' || product.category === categoryFilter;
    const brandMatch = brandFilter === 'Todas' || product.brand === brandFilter;
    return categoryMatch && brandMatch;
  });

  return (
    <section id="nuestra-coleccion" className="py-20 sm:py-28 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bebas tracking-wider text-white">Nuestra Colección</h2>
          <div className="w-24 h-1 bg-brand-cyan mx-auto mt-4"></div>
        </div>
        
        <div className="flex flex-col items-center gap-8 mb-12">
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setCategoryFilter(category)}
                className={`font-bebas tracking-widest text-lg px-5 py-2 rounded-sm uppercase transition-all duration-300 ${
                  categoryFilter === category
                    ? 'bg-brand-cyan text-black shadow-[0_0_15px_#00f6ff]'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          {/* Brand Filters */}
           <div className="flex flex-wrap justify-center gap-3">
            {brands.map(brand => (
              <button
                key={brand}
                onClick={() => setBrandFilter(brand)}
                className={`font-semibold text-sm px-4 py-1.5 rounded-full transition-all duration-300 ${
                  brandFilter === brand
                    ? 'bg-gray-600 text-white ring-2 ring-brand-cyan'
                    : 'bg-gray-900 border border-gray-700 text-gray-400 hover:bg-gray-700'
                }`}
              >
                {brand}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product, index) => (
            <div key={product.id} style={{ animationDelay: `${index * 50}ms` }} className="opacity-0 animate-fade-in-up">
               <ProductCard product={product} onProductClick={onProductClick} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllProducts;