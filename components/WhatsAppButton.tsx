import React from 'react';
import { WhatsAppIcon } from './IconComponents';

const WhatsAppButton: React.FC = () => {
  // Reemplaza este número con tu número de WhatsApp incluyendo el código de país (ej. 51 para Perú)
  const phoneNumber = '51987654321';
  const message = 'Hola! Estoy interesado en los productos de Beyond Fit y me gustaría más información.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[60] bg-[#25D366] text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg transform transition-all duration-300 hover:scale-110 hover:shadow-2xl group"
      aria-label="Contactar por WhatsApp"
    >
      <WhatsAppIcon className="w-8 h-8" />
      <span className="absolute bottom-1/2 translate-y-1/2 right-full mr-4 px-3 py-1.5 bg-brand-bg border border-gray-800 text-white text-sm font-semibold rounded-md shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        ¿Necesitas ayuda?
      </span>
    </a>
  );
};

export default WhatsAppButton;
