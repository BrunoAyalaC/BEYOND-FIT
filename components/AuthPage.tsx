import React, { useState } from 'react';

interface AuthPageProps {
  onLoginSuccess: () => void;
}

const AuthPage: React.FC<AuthPageProps> = ({ onLoginSuccess }) => {
  const [isLoginView, setIsLoginView] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // En una aplicación real, aquí iría la lógica de autenticación
    console.log("Simulando autenticación exitosa...");
    onLoginSuccess();
  };

  return (
    <div className="min-h-[calc(100vh-10rem)] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 animate-fade-in">
      <div className="max-w-md w-full space-y-8 bg-black p-10 rounded-lg border border-gray-800 shadow-2xl shadow-brand-cyan/10">
        <div>
          <h2 className="mt-6 text-center text-4xl font-bebas tracking-wider text-white">
            {isLoginView ? 'Iniciar Sesión' : 'Crear Cuenta'}
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            {!isLoginView && (
              <div>
                <label htmlFor="name" className="sr-only">Nombre</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-700 bg-gray-900 text-gray-300 rounded-t-md focus:outline-none focus:ring-brand-cyan focus:border-brand-cyan focus:z-10 sm:text-sm"
                  placeholder="Nombre completo"
                />
              </div>
            )}
            <div>
              <label htmlFor="email-address" className="sr-only">Correo electrónico</label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className={`appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-700 bg-gray-900 text-gray-300 ${isLoginView ? 'rounded-t-md' : ''} focus:outline-none focus:ring-brand-cyan focus:border-brand-cyan focus:z-10 sm:text-sm`}
                placeholder="Correo electrónico"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">Contraseña</label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-700 bg-gray-900 text-gray-300 rounded-b-md focus:outline-none focus:ring-brand-cyan focus:border-brand-cyan focus:z-10 sm:text-sm"
                placeholder="Contraseña"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-xl font-bebas tracking-widest rounded-sm text-black bg-brand-cyan hover:bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-cyan transition-all duration-300 hover:shadow-[0_0_25px_#00f6ff]"
            >
              {isLoginView ? 'Ingresar' : 'Registrarse'}
            </button>
          </div>
        </form>
        <div className="text-sm text-center">
          <button
            onClick={() => setIsLoginView(!isLoginView)}
            className="font-medium text-brand-cyan hover:text-cyan-300"
          >
            {isLoginView ? '¿No tienes una cuenta? Regístrate' : '¿Ya tienes una cuenta? Inicia sesión'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
