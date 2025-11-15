import React from 'react';

const CtaSection: React.FC = () => {
  return (
    <section
      className="py-20 bg-cover bg-center bg-fixed"
      style={{ backgroundImage: 'url(https://picsum.photos/seed/ctabg/1920/1080?grayscale&blur=2)' }}
    >
      <div className="absolute inset-0 bg-brand-bg/80"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bebas tracking-wider text-white uppercase animate-fade-in-up">
          Únete al Movimiento <span className="text-brand-cyan">Beyond</span>
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-gray-300 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
          Obtén acceso exclusivo a nuevos lanzamientos, ofertas especiales y consejos de entrenamiento.
          Regístrate y obtén un 15% de descuento en tu primer pedido.
        </p>
        <div className="mt-8 max-w-md mx-auto flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
          <input
            type="email"
            placeholder="Ingresa tu correo electrónico"
            className="flex-grow bg-gray-900/50 border border-gray-700 text-white px-4 py-3 rounded-sm focus:ring-2 focus:ring-brand-cyan focus:outline-none transition-all"
          />
          <button className="bg-brand-cyan text-black font-bold font-bebas tracking-widest text-xl px-8 py-3 rounded-sm uppercase transition-all duration-300 hover:bg-white hover:shadow-[0_0_25px_#00f6ff]">
            Registrarse
          </button>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
