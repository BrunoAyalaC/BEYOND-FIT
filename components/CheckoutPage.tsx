import React from 'react';
import { CartItem } from '../types';

interface CheckoutPageProps {
  cartItems: CartItem[];
  onPlaceOrder: () => void;
  onNavigate: () => void;
}

const CheckoutPage: React.FC<CheckoutPageProps> = ({ cartItems, onPlaceOrder, onNavigate }) => {
  if (cartItems.length === 0) {
    return (
      <div className="min-h-[calc(100vh-10rem)] flex flex-col items-center justify-center text-center py-12 px-4 animate-fade-in">
        <h1 className="text-4xl font-bebas tracking-wider text-white">Tu carrito está vacío</h1>
        <p className="mt-4 text-gray-400">Agrega productos a tu carrito antes de proceder al pago.</p>
        <button
          onClick={onNavigate}
          className="mt-8 bg-brand-cyan text-black font-bold font-bebas tracking-widest text-xl px-10 py-3 rounded-sm uppercase transition-all duration-300 hover:bg-white hover:shadow-[0_0_25px_#00f6ff]"
        >
          Volver a la tienda
        </button>
      </div>
    );
  }

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shippingCost = 15.00; // Costo de envío fijo
  const total = subtotal + shippingCost;

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 animate-fade-in">
      <h1 className="text-center text-5xl font-bebas tracking-wider text-white mb-12">Finalizar Compra</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Formulario de Información */}
        <div className="lg:col-span-2 bg-black p-8 rounded-lg border border-gray-800">
          <h2 className="text-3xl font-bebas tracking-wider text-white mb-6">Información de Envío</h2>
          <form className="space-y-4">
            <input type="email" placeholder="Correo Electrónico" className="w-full bg-gray-900 border border-gray-700 text-white px-4 py-3 rounded-sm focus:ring-2 focus:ring-brand-cyan focus:outline-none transition-all" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" placeholder="Nombres" className="w-full bg-gray-900 border border-gray-700 text-white px-4 py-3 rounded-sm focus:ring-2 focus:ring-brand-cyan focus:outline-none transition-all" />
              <input type="text" placeholder="Apellidos" className="w-full bg-gray-900 border border-gray-700 text-white px-4 py-3 rounded-sm focus:ring-2 focus:ring-brand-cyan focus:outline-none transition-all" />
            </div>
            <input type="text" placeholder="Dirección" className="w-full bg-gray-900 border border-gray-700 text-white px-4 py-3 rounded-sm focus:ring-2 focus:ring-brand-cyan focus:outline-none transition-all" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input type="text" placeholder="Ciudad" className="w-full bg-gray-900 border border-gray-700 text-white px-4 py-3 rounded-sm focus:ring-2 focus:ring-brand-cyan focus:outline-none transition-all" />
              <input type="text" placeholder="Región" className="w-full bg-gray-900 border border-gray-700 text-white px-4 py-3 rounded-sm focus:ring-2 focus:ring-brand-cyan focus:outline-none transition-all" />
              <input type="text" placeholder="Código Postal" className="w-full bg-gray-900 border border-gray-700 text-white px-4 py-3 rounded-sm focus:ring-2 focus:ring-brand-cyan focus:outline-none transition-all" />
            </div>
            <h2 className="text-3xl font-bebas tracking-wider text-white pt-8 mb-6">Información de Pago</h2>
            <input type="text" placeholder="Número de Tarjeta" className="w-full bg-gray-900 border border-gray-700 text-white px-4 py-3 rounded-sm focus:ring-2 focus:ring-brand-cyan focus:outline-none transition-all" />
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" placeholder="MM/YY" className="w-full bg-gray-900 border border-gray-700 text-white px-4 py-3 rounded-sm focus:ring-2 focus:ring-brand-cyan focus:outline-none transition-all" />
              <input type="text" placeholder="CVC" className="w-full bg-gray-900 border border-gray-700 text-white px-4 py-3 rounded-sm focus:ring-2 focus:ring-brand-cyan focus:outline-none transition-all" />
            </div>
          </form>
        </div>
        
        {/* Resumen del Pedido */}
        <div className="lg:col-span-1">
          <div className="bg-black p-8 rounded-lg border border-gray-800 sticky top-28">
            <h2 className="text-3xl font-bebas tracking-wider text-white mb-6">Resumen del Pedido</h2>
            <div className="space-y-4 max-h-60 overflow-y-auto pr-2">
              {cartItems.map(item => (
                <div key={item.id} className="flex justify-between items-center text-sm">
                  <div className="flex items-center">
                    <img src={item.imageUrl} alt={item.name} className="w-12 h-12 object-cover rounded-md mr-4"/>
                    <div>
                      <p className="text-white font-semibold">{item.name}</p>
                      <p className="text-gray-400">Cant: {item.quantity}</p>
                    </div>
                  </div>
                  <p className="text-white font-semibold">S/ {(item.price * item.quantity).toFixed(2)}</p>
                </div>
              ))}
            </div>
            <div className="border-t border-gray-700 my-6"></div>
            <div className="space-y-2 text-md">
              <div className="flex justify-between text-gray-300">
                <span>Subtotal</span>
                <span>S/ {subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-300">
                <span>Envío</span>
                <span>S/ {shippingCost.toFixed(2)}</span>
              </div>
              <div className="border-t border-gray-700 my-2"></div>
              <div className="flex justify-between text-white font-bold text-lg">
                <span>Total</span>
                <span>S/ {total.toFixed(2)}</span>
              </div>
            </div>
             <button
              onClick={onPlaceOrder}
              className="mt-8 w-full bg-brand-cyan text-black font-bold font-bebas tracking-widest text-xl py-4 rounded-sm uppercase transition-all duration-300 hover:bg-white hover:shadow-[0_0_25px_#00f6ff]">
                Realizar Pedido
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
