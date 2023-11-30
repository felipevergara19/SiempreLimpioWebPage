import React from 'react';
import work1 from '../Images/work1.jpg'; // Reemplaza con la ruta correcta de tus imágenes
import work2 from '../Images/work2.jpg';
import work3 from '../Images/work3.jpg';
import work4 from '../Images/work4.jpg';
import work5 from '../Images/work5.jpg';
import work6 from '../Images/work6.jpg';

const Works = () => {
  const worksData = [
    { id: 1, image: work1, title: 'Trabajo 1' },
    { id: 2, image: work2, title: 'Trabajo 2' },
    { id: 3, image: work3, title: 'Trabajo 3' },
    { id: 4, image: work4, title: 'Trabajo 4' },
    { id: 5, image: work5, title: 'Trabajo 5' },
    { id: 6, image: work6, title: 'Trabajo 6' },
  ];

  return (
    <div className="container mx-auto mt-10 mb-16">
      <h2 className="text-3xl font-bold mb-6">Nuestros Trabajos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {worksData.map((work) => (
          <div key={work.id} className="rounded-md overflow-hidden shadow-md">
            <img src={work.image} alt={work.title} className="w-full h-auto" />
            <div className="p-4">
              <h3 className="text-lg font-bold mb-2">{work.title}</h3>
              {/* Agrega más detalles o descripciones según sea necesario */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Works;