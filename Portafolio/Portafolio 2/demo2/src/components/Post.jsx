import { useState, useEffect } from 'react';
import '../App.css';

// URL de la API de Coindesk
const url = "https://api.coindesk.com/v1/bpi/currentprice.json"

// Componente Post
export default function Post() {
  // Estados del componente
  const [data, setData] = useState(null); // Almacena los datos obtenidos de la API
  const [isLoading, setIsLoading] = useState(true); // Controla el estado de carga de los datos
  const [error, setError] = useState(null); // Maneja errores en la solicitud

  // Hook useEffect para realizar la solicitud a la API
  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(result => {
        // Cuando la solicitud es exitosa, actualiza el estado 'data' con los datos obtenidos
        setIsLoading(false);
        setData(result);
      })
      .catch(error => {
        // Si hay un error durante la solicitud, actualiza el estado 'error' y cambia 'isLoading' a false
        setIsLoading(false);
        setError(error);
      });
  }, []); // El array de dependencias vacío asegura que este efecto se ejecute solo una vez, al montar el componente

  // Función para renderizar el contenido del componente
  const getContent = () => {
    // Si está cargando, muestra un mensaje de carga
    if (isLoading) {
      return (
        <div className="App">
          <h4>Loading Data ...</h4>
          <progress value={null} />
        </div>
      );
    }

    // Si hay un error, muestra un mensaje de error
    if (error) {
      return <h4>Error</h4>
    }

    // Si no hay errores ni carga, muestra una tabla con los datos de publicaciones
    return (
      <div className="App">
        <h1>Social Network UTT</h1>
        <h3>TSU EVND</h3>

        <div className='row'>
          {/* Columna vacía */}
          <div className="col-2"></div>

          {/* Tabla de publicaciones */}
          <div className="col-8">
            <table className='table table-striped'>
              <thead>
                <tr>
                  <th>POST ID</th>
                  <th>USER ID</th>
                  <th>POST TITLE</th>
                  <th>POST BODY</th>
                </tr>
              </thead>
              <tbody>
                {/* Iterar sobre los datos y mostrar cada publicación */}
                {data.map(element => (
                  <tr key={element.id}>
                    <td>{element.id}</td>
                    <td>{element.userId}</td>
                    <td>{element.title}</td>
                    <td>{element.body}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Columna vacía */}
          <div className="col-2"></div>
        </div>
      </div>
    );
  }

  // Imprime los datos en la consola
  console.log(data);

  // Renderiza el contenido del componente
  return (
    <div className="App">
      {getContent()}
    </div>
  );
}
