import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Columna de números de contacto */}
        <div className="mb-4 md:mb-0">
          <h3 className="text-lg font-bold mb-2">Contacto</h3>
          <p>Número 1: (123) 456-7890</p>
          <p>Número 2: (987) 654-3210</p>
        </div>

        {/* Columna de redes sociales */}
        <div>
          <h3 className="text-lg font-bold mb-2">Redes Sociales</h3>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            {/* Agrega más redes sociales según sea necesario */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;