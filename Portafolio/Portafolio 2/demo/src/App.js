import React, { useState } from 'react';
import Navbar from './components/Navbar'; // Importa el componente Navbar
import Home from './components/Home'; // Importa el componente Home
import Contact from './components/Contact.jsx'; // Importa el componente Contact
import Footer from './components/Footer'; // Importa el componente Footer
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa los estilos de Bootstrap
import Carrousel from './components/Carrousel'; // Importa el componente Carrousel
import Form from './components/Form.jsx'; // Importa el componente Form

function App() {
  const [currentPage, setCurrentPage] = useState('home'); // Estado para la página actual

  let pageContent; // Variable para almacenar el contenido de la página actual
  // Switch para determinar qué componente renderizar según la página actual
  switch (currentPage) {
    case 'home':
      pageContent = <Home />;
      break;
    case 'contact':
      pageContent = <Contact />;
      break;
    // Agrega más casos para otras páginas si es necesario
    default:
      pageContent = <Home />;
  }

  // Retorna el contenido principal de la aplicación
  return (
    <div className="App">
      {/* Componente Navbar */}
      <Navbar setCurrentPage={setCurrentPage} />
      {/* Renderiza el contenido de la página actual */}
      {pageContent}
      <header/> {/* Esto parece estar fuera de lugar, considera si debe eliminarse */}
      {/* Componente Carrousel */}
      <Carrousel />
      {/* Componente Form */}
      <Form />
      {/* Componente Footer */}
      <Footer />
    </div>
  );
}

export default App;
