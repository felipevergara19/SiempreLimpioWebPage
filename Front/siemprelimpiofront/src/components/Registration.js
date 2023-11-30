import React, { useState } from "react";

const RegistrationForm = ({ onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    // Realiza la lógica de registro aquí, ya sea en el frontend o llamando a tu backend
    console.log("Registrando con email:", email);
    // Cierra el pop-up después del registro exitoso
    onClose();
  };

  return (
    <div className="bg-white w-96 p-4 rounded z-1">
      <h2 className="text-xl font-bold mb-4">Registro</h2>
      <input
        type="email"
        placeholder="Correo electrónico"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded z-1"
        onClick={handleRegister}
      >
        Registrarse
      </button>
      <button
        className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
        onClick={onClose}
      >
        Cerrar
      </button>
    </div>
  );
};

export default RegistrationForm;
