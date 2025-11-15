import React from 'react';

const ContactPage: React.FC = () => {
    
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Mensaje enviado. ¡Gracias por contactarnos!");
    // Aquí se podría limpiar el formulario
  };

  return (
    <div className="animate-fade-in">
        <section className="relative h-[50vh] flex items-center justify-center text-center overflow-hidden">
            <div
            className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
            style={{ backgroundImage: 'url(https://picsum.photos/seed/contactus/1920/1080?grayscale)' }}
            ></div>
            <div className="absolute top-0 left-0 w-full h-full bg-black/70"></div>
            <div className="relative z-10 px-4">
            <h1 className="text-6xl sm:text-8xl font-bebas tracking-wider text-white uppercase">
                Contác<span className="text-brand-cyan">tanos</span>
            </h1>
            <p className="mt-2 text-lg text-gray-300">Estamos aquí para ayudarte.</p>
            </div>
        </section>

        <section className="py-20 sm:py-28 bg-brand-bg">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="animate-fade-in-up">
                        <h2 className="text-4xl font-bebas tracking-wider text-white">Información de <span className="text-brand-cyan">Contacto</span></h2>
                        <div className="w-24 h-1 bg-brand-cyan mt-4 mb-8"></div>
                        <div className="space-y-6 text-gray-300">
                             <p><strong>Email:</strong> <a href="mailto:soporte@beyondfit.pe" className="hover:text-brand-cyan">soporte@beyondfit.pe</a></p>
                             <p><strong>Teléfono:</strong> +51 987 654 321</p>
                             <p><strong>Dirección:</strong> Av. Principal 123, Miraflores, Lima, Perú</p>
                             <p><strong>Horario:</strong> Lunes a Viernes, 9:00 AM - 6:00 PM</p>
                        </div>
                    </div>
                    <div className="animate-fade-in-up" style={{animationDelay: '200ms'}}>
                        <h2 className="text-4xl font-bebas tracking-wider text-white">Envíanos un <span className="text-brand-cyan">Mensaje</span></h2>
                        <div className="w-24 h-1 bg-brand-cyan mt-4 mb-8"></div>
                         <form className="space-y-4" onSubmit={handleSubmit}>
                            <input type="text" placeholder="Nombre Completo" required className="w-full bg-gray-900 border border-gray-700 text-white px-4 py-3 rounded-sm focus:ring-2 focus:ring-brand-cyan focus:outline-none transition-all" />
                            <input type="email" placeholder="Correo Electrónico" required className="w-full bg-gray-900 border border-gray-700 text-white px-4 py-3 rounded-sm focus:ring-2 focus:ring-brand-cyan focus:outline-none transition-all" />
                            <textarea placeholder="Tu Mensaje" required rows={5} className="w-full bg-gray-900 border border-gray-700 text-white px-4 py-3 rounded-sm focus:ring-2 focus:ring-brand-cyan focus:outline-none transition-all"></textarea>
                            <button
                                type="submit"
                                className="w-full bg-brand-cyan text-black font-bold font-bebas tracking-widest text-xl py-3 rounded-sm uppercase transition-all duration-300 hover:bg-white hover:shadow-[0_0_25px_#00f6ff]">
                                Enviar Mensaje
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </div>
  );
};

export default ContactPage;
