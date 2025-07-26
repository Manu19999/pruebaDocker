// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'animate.css';

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-600 via-indigo-700 to-purple-800 text-white flex flex-col justify-center items-center p-8 transition-all duration-1000 ease-in-out">
      <h1 className="text-5xl font-extrabold mb-6 text-center animate__animated animate__fadeInDown drop-shadow-md glow">
        ¡Hola Mundo React desde Docker! 🐳
      </h1>
      <p className="text-lg max-w-xl text-center mb-10 animate__animated animate__fadeInUp animate__delay-1s">
        Esta aplicación React está ejecutándose dentro de un contenedor Docker. Es ideal para demostraciones y despliegue de entornos portables.
      </p>
      <a
        href="#"
        className="bg-white text-indigo-700 px-6 py-3 rounded-full font-semibold shadow-lg hover:scale-110 hover:bg-gray-100 hover:shadow-2xl transition-all duration-300 animate__animated animate__fadeInUp animate__delay-2s"
      >
        Aprende más
      </a>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
