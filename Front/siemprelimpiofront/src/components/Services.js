import React from 'react';

const Services = () => {
  return (
    <div className="container mx-auto mt-0">
      <h2 className="text-3x1 font-bold mb-6">Nuestros Servicios</h2>
      <div className="grid grid-cols-3 md:grid-cols-2 gap-6">
        {/* Servicio 1 */}
        <div className="bg-blue-200 p-6 rounded-md shadow-md">
          <h3 className="text-xl font-bold mb-4">Servicio 1</h3>
          <p>Descripción del Servicio 1.</p>
        </div>

        {/* Servicio 2 */}
        <div className="bg-blue-200 p-6 rounded-md shadow-md">
          <h3 className="text-xl font-bold mb-4">Servicio 2</h3>
          <p>Descripción del Servicio 2.</p>
        </div>

        {/* Servicio 3 */}
        <div className="bg-blue-200  p-6 rounded-md shadow-md">
          <h3 className="text-xl font-bold mb-4">Servicio 3</h3>
          <p>Descripción del Servicio 3.</p>
        </div>

        {/* Servicio 4 */}
        <div className="bg-blue-200  p-6 rounded-md shadow-md">
          <h3 className="text-xl font-bold mb-4">Servicio 4</h3>
          <p>Descripción del Servicio 4.</p>
        </div>

        {/* Servicio 5 */}
        <div className="bg-blue-200  p-6 rounded-md shadow-md">
          <h3 className="text-xl font-bold mb-4">Servicio 5</h3>
          <p>Descripción del Servicio 5.</p>
        </div>

        {/* Servicio 6 */}
        <div className="bg-blue-200  p-6 rounded-md shadow-md">
          <h3 className="text-xl font-bold mb-4">Servicio 6</h3>
          <p>Descripción del Servicio 6.</p>
        </div>
      </div>
    </div>
  );
};

export default Services;