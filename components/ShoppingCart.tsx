import React from 'react';
import { CartItem } from '../types';
import { CloseIcon, PlusIcon, MinusIcon, TrashIcon } from './IconComponents';

interface ShoppingCartProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (productId: number, quantity: number) => void;
  onRemoveItem: (productId: number) => void;
  onCheckout: () => void;
}

const ShoppingCart: React.FC<ShoppingCartProps> = ({ isOpen, onClose, cartItems, onUpdateQuantity, onRemoveItem, onCheckout }) => {
  if (!isOpen) return null;
  
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] animate-fade-in" onClick={onClose}>
      <div
        className="fixed top-0 right-0 h-full w-full max-w-md bg-brand-bg shadow-2xl shadow-brand-cyan/20 flex flex-col transition-transform duration-300 transform translate-x-0"
        onClick={(e) => e.stopPropagation()}
        style={{ transform: isOpen ? 'translateX(0)' : 'translateX(100%)' }}
      >
        <div className="flex justify-between items-center p-6 border-b border-gray-800">
          <h2 className="text-3xl font-bebas tracking-wider text-white">Tu Carrito</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-brand-cyan transition-colors">
            <CloseIcon className="w-8 h-8" />
          </button>
        </div>

        {cartItems.length === 0 ? (
          <div className="flex-grow flex flex-col items-center justify-center text-center p-6">
            <p className="text-xl text-gray-400">Tu carrito está vacío.</p>
          </div>
        ) : (
          <>
            <div className="flex-grow overflow-y-auto p-6 space-y-6">
              {cartItems.map(item => (
                <div key={item.id} className="flex gap-4">
                  <img src={item.imageUrl} alt={item.name} className="w-24 h-24 object-cover rounded-md" />
                  <div className="flex-grow flex flex-col">
                    <h3 className="font-semibold text-white">{item.name}</h3>
                    <p className="text-sm text-gray-400">S/ {item.price.toFixed(2)}</p>
                    <div className="flex items-center mt-auto">
                      <div className="flex items-center border border-gray-700 rounded-md">
                        <button onClick={() => onUpdateQuantity(item.id, item.quantity - 1)} className="p-1.5 text-gray-400 hover:text-white"><MinusIcon className="w-4 h-4" /></button>
                        <span className="px-3 text-white">{item.quantity}</span>
                        <button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)} className="p-1.5 text-gray-400 hover:text-white"><PlusIcon className="w-4 h-4" /></button>
                      </div>
                      <button onClick={() => onRemoveItem(item.id)} className="ml-auto text-gray-500 hover:text-red-500 transition-colors">
                        <TrashIcon className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 border-t border-gray-800">
              <div className="flex justify-between items-center text-lg mb-4">
                <span className="font-semibold text-gray-300">Subtotal:</span>
                <span className="font-bold text-white text-xl">S/ {subtotal.toFixed(2)}</span>
              </div>
              <button
                onClick={onCheckout}
                className="w-full bg-brand-cyan text-black font-bold font-bebas tracking-widest text-xl py-4 rounded-sm uppercase transition-all duration-300 hover:bg-white hover:shadow-[0_0_25px_#00f6ff]"
              >
                Proceder al Pago
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ShoppingCart;
