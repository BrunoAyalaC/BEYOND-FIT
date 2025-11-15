import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-fixed animate-[pulse_10s_ease-in-out_infinite]"
        style={{ backgroundImage: 'url(https://picsum.photos/seed/fitnesshero/1920/1080?grayscale&blur=1)' }}
      ></div>
      <div className="absolute top-0 left-0 w-full h-full bg-black/70"></div>
      <div className="relative z-10 px-4 animate-fade-in-up">
        <h1 className="text-6xl sm:text-8xl lg:text-9xl font-bebas tracking-wider text-white uppercase">
          Define Tus <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-cyan to-blue-500">Límites</span>
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
          Equipamiento fitness premium diseñado para el máximo rendimiento. No solo alcances tus metas, supéralas.
        </p>
        <a
          href="#"
          className="mt-8 inline-block bg-brand-cyan text-black font-bold font-bebas tracking-widest text-xl px-10 py-3 rounded-sm uppercase transition-all duration-300 hover:bg-white hover:shadow-[0_0_25px_#00f6ff] transform hover:-translate-y-1"
        >
          Ver Novedades
        </a>
      </div>
    </section>
  );
};

export default Hero;
