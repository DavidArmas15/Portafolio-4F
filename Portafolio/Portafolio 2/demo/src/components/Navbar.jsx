import React from 'react';

// Componente Navbar
export default function Navbar({ setCurrentPage }) {
  return (
    // Encabezado con clase "App-header"
    <header className="App-header">
      {/* Barra de navegación */}
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          {/* Marca del navbar */}
          <a class="navbar-brand" href="#">Navbar</a>
          {/* Botón para mostrar el menú en dispositivos móviles */}
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          {/* Elementos del menú */}
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              {/* Elemento de menú: Home */}
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              {/* Elemento de menú: Features */}
              <li class="nav-item">
                <a class="nav-link" href="#">Features</a>
              </li>
              {/* Elemento de menú: Pricing */}
              <li class="nav-item">
                <a class="nav-link" href="#">Pricing</a>
              </li>
              {/* Elemento de menú deshabilitado */}
              <li class="nav-item">
                <a class="nav-link disabled" aria-disabled="true">Disabled</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
