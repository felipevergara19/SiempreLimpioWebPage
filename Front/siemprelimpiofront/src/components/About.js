
import React from 'react';
import Image4 from "../Images/Imagen4.jpg"; 


const About = () => {
  return (
    <div className="container mx-auto mt-10 mb-16 flex flex-col md:flex-row items-center">
      {/* Imagen */}
      <div className="md:w-1/2 mb-6 md:mb-0">
        <img src={Image4} alt="About" className="w-full h-auto rounded-md shadow-md" />
      </div>

      {/* Texto */}
      <div className="md:w-1/2 md:ml-6">
        <h2 className="text-3xl font-bold mb-4">Sobre Nosotros</h2>
        <p>
          ¡Bienvenido a [Nombre de tu Empresa]! Somos una empresa dedicada a [descripción de tu empresa].
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...
        </p>
        {/* Agrega más texto según sea necesario */}
      </div>
    </div>
  );
};

export default About;