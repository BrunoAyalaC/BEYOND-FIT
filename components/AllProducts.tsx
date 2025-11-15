import React from 'react';
import { PRODUCTS } from '../constants';
import ProductCard from './ProductCard';
import { Product } from '../types';

interface AllProductsProps {
  onProductClick: (product: Product) => void;
}

const AllProducts: React.FC<AllProductsProps> = ({ onProductClick }) => {
  const [filter, setFilter] = React.useState('Todos');

  const categories = ['Todos', 'Ropa', 'Accesorios'];

  const filteredProducts = filter === 'Todos' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === filter);

  return (
    <section className="py-20 sm:py-28 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bebas tracking-wider text-white">Nuestra Colección</h2>
          <div className="w-24 h-1 bg-brand-cyan mx-auto mt-4"></div>
        </div>
        
        <div className="flex justify-center gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`font-bebas tracking-widest text-xl px-6 py-2 rounded-sm uppercase transition-all duration-300 ${
                filter === category
                  ? 'bg-brand-cyan text-black shadow-[0_0_15px_#00f6ff]'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product, index) => (
            <div key={product.id} style={{ animationDelay: `${index * 100}ms` }} className="opacity-0 animate-fade-in-up">
               <ProductCard product={product} onProductClick={onProductClick} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllProducts;
