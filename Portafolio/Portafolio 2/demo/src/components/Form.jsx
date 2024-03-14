import React, { useState } from 'react';

// Componente Formulario
export default function Form() {
  // Estados para el nombre, apellido y nombre completo
  const [firstName, setFirstName] = useState(''); // Estado para el nombre
  const [lastName, setLastName] = useState(''); // Estado para el apellido
  const [fullName, setFullName] = useState(''); // Estado para el nombre completo

  // Función para manejar cambios en el nombre
  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value); // Actualiza el estado del nombre
    setFullName(`${e.target.value} ${lastName}`); // Actualiza el nombre completo
  };

  // Función para manejar cambios en el apellido
  const handleLastNameChange = (e) => {
    setLastName(e.target.value); // Actualiza el estado del apellido
    setFullName(`${firstName} ${e.target.value}`); // Actualiza el nombre completo
  };

  // Retorna el contenido del formulario
  return (
    <>
      <h2>Sign Up</h2>
      <form action="" className="form">
        {/* Campo de entrada para el nombre */}
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          value={firstName}
          onChange={handleFirstNameChange} // Maneja cambios en el nombre
        />

        {/* Campo de entrada para el apellido */}
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          value={lastName}
          onChange={handleLastNameChange} // Maneja cambios en el apellido
        />

        {/* Botón de envío del formulario */}
        <button type="submit">Submit</button>
      </form>

      {/* Muestra el nombre completo */}
      <p>Welcome: <strong>{fullName}</strong></p>
    </>
  );
}
