import React, { useState } from 'react';
import imate from '../assets/images/imate.jpg'; // Importa la imagen 1
import imate2 from '../assets/images/imate2.jpg'; // Importa la imagen 2
import imate3 from '../assets/images/imate3.jpg'; // Importa la imagen 3

const images = [imate, imate2, imate3]; // Array que contiene las imágenes

// Componente Carrousel
export default function Carrousel() {
  const [currentIndex, setCurrentIndex] = useState(0); // Estado que almacena el índice de la imagen actual

  // Función para ir a la siguiente imagen
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Función para ir a la imagen anterior
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Retorna el componente del carrusel
  return (
    <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        {/* Mapea sobre las imágenes y las renderiza dentro del carrusel */}
        {images.map((image, index) => (
          <div key={index} className={`carousel-item ${index === currentIndex ? 'active' : ''}`}>
            <img src={image} className="d-block w-100" alt={`Slide ${index}`} />
          </div>
        ))}
      </div>
      {/* Botón para ir a la imagen anterior */}
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev" onClick={goToPrevious}>
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      {/* Botón para ir a la siguiente imagen */}
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next" onClick={goToNext}>
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

// Estilos (no utilizados en el código proporcionado)
const styles = {
  reSize: {
    width: 120,
    height: 320,
    paddingTop: 50,
  },
};
