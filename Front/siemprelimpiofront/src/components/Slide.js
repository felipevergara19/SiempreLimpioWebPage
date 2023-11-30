import React from 'react';
import "../Images/Imagen1.jpg"
// import './SlideComponent.css'; // Importa tus estilos de Tailwind

const SlideComponent = () => {
  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div className="flex transition-transform ease-in-out duration-500 transform translate-x-0">
          {/* Slide 1 */}
          <div className="w-screen">
            <img
              src="Images\Imagen1.jpg"
              alt="Slide 1"
              className="w-full h-auto"
            />
          </div>

          {/* Slide 2 */}
          <div className="w-screen">
            <img
              src="Images\Imagen2.jpg"
              alt="Slide 2"
              className="w-full h-auto"
            />
          </div>

          {/* Slide 3 */}
          <div className="w-screen">
            <img
              src="Images\Imagen3.jpg"
              alt="Slide 3"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>

      <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
        <h2 className="text-4xl font-bold text-white mb-4">Bienvenido a [Siempre Limpio]</h2>
        <p className="text-lg text-white">Servicios de limpieza dentro de la zona norte de Santiago...</p>
      </div>
    </div>
  );
};

export default SlideComponent;