import React from 'react';

interface OrderConfirmationPageProps {
  onNavigate: () => void;
}

const OrderConfirmationPage: React.FC<OrderConfirmationPageProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-[calc(100vh-10rem)] flex flex-col items-center justify-center text-center py-12 px-4 animate-fade-in">
        <div className="max-w-2xl w-full">
            <h1 className="text-6xl font-bebas tracking-wider text-white">
                ¡Gracias por tu <span className="text-brand-cyan">Compra!</span>
            </h1>
            <p className="mt-4 text-lg text-gray-300">
                Tu pedido ha sido procesado exitosamente. Hemos enviado un correo de confirmación con los detalles de tu orden.
            </p>
            <div className="mt-8 border-t border-b border-gray-800 py-6">
                <h3 className="text-2xl font-bebas tracking-wider text-white">Resumen del Pedido</h3>
                <p className="text-gray-400 mt-2">
                    Número de pedido: <span className="text-white font-semibold">BF-123456789</span>
                </p>
                 <p className="text-gray-400">
                    Fecha: <span className="text-white font-semibold">{new Date().toLocaleDateString('es-PE')}</span>
                </p>
            </div>
            <button
                onClick={onNavigate}
                className="mt-10 bg-brand-cyan text-black font-bold font-bebas tracking-widest text-xl px-10 py-3 rounded-sm uppercase transition-all duration-300 hover:bg-white hover:shadow-[0_0_25px_#00f6ff]"
            >
                Seguir Comprando
            </button>
        </div>
    </div>
  );
};

export default OrderConfirmationPage;
