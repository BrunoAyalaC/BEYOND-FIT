import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="animate-fade-in">
      <section className="relative h-[50vh] flex items-center justify-center text-center overflow-hidden">
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: 'url(https://picsum.photos/seed/aboutus/1920/1080?grayscale)' }}
        ></div>
        <div className="absolute top-0 left-0 w-full h-full bg-black/70"></div>
        <div className="relative z-10 px-4">
          <h1 className="text-6xl sm:text-8xl font-bebas tracking-wider text-white uppercase">
            Sobre <span className="text-brand-cyan">Nosotros</span>
          </h1>
          <p className="mt-2 text-lg text-gray-300">Nuestra historia. Nuestra misión.</p>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-brand-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h2 className="text-4xl font-bebas tracking-wider text-white">Nuestra <span className="text-brand-cyan">Misión</span></h2>
              <div className="w-24 h-1 bg-brand-cyan mt-4 mb-6"></div>
              <p className="text-gray-300 mb-4">
                En Beyond Fit, nuestra misión es simple: empoderarte para que superes tus límites. Creemos que el equipo adecuado no solo mejora el rendimiento, sino que también inspira confianza.
              </p>
              <p className="text-gray-300">
                Cada producto que diseñamos está pensado para la durabilidad, la funcionalidad y el estilo, asegurando que te sientas y te veas bien mientras trabajas para alcanzar tus metas.
              </p>
            </div>
            <div className="animate-fade-in-up" style={{animationDelay: '200ms'}}>
                <img src="https://picsum.photos/seed/mission/600/700?grayscale" alt="Atleta entrenando" className="rounded-lg shadow-2xl shadow-brand-cyan/10"/>
            </div>
          </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-20">
            <div className="animate-fade-in-up md:order-2">
              <h2 className="text-4xl font-bebas tracking-wider text-white">Diseñado en <span className="text-brand-cyan">Perú</span></h2>
              <div className="w-24 h-1 bg-brand-cyan mt-4 mb-6"></div>
              <p className="text-gray-300 mb-4">
                Nacimos de la pasión por el fitness en el corazón de Perú. Entendemos las necesidades de los atletas locales y nos esforzamos por crear productos que resistan las condiciones de entrenamiento más exigentes.
              </p>
              <p className="text-gray-300">
                Apoyamos a la comunidad fitness local y estamos comprometidos con la calidad y la innovación en cada fibra de nuestro equipo.
              </p>
            </div>
            <div className="animate-fade-in-up md:order-1" style={{animationDelay: '200ms'}}>
                <img src="https://picsum.photos/seed/peru/600/700?grayscale" alt="Paisaje peruano" className="rounded-lg shadow-2xl shadow-brand-cyan/10"/>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
