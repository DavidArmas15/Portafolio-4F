import React from 'react';

function Home() {
  return (
    <div className="container">
      <header>
        <h1>¡Bienvenido a nuestra página de inicio!</h1>
      </header>
      <p>
        ¡Aquí puedes encontrar información sobre nuestra empresa y nuestros productos!
      </p>
      <ul>
        <li>Empresa fundada en 2023.</li>
        <li>Especializados en desarrollo web y aplicaciones móviles.</li>
        <li>Equipo de profesionales altamente cualificados.</li>
      </ul>
      <a href="/productos" className="button">Ver productos</a>
    </div>
  );
}

export default Home;
