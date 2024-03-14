import { useState, useEffect } from 'react';
import '../App.css';

// URL de la API de Coindesk
const url = "https://api.coindesk.com/v1/bpi/currentprice.json"

// Componente Btc2
export default function Btc2() {
  // Estados del componente
  const[data, setData] = useState(null); // Almacena los datos obtenidos de la API
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
      }, error => {
        // Si hay un error durante la solicitud, actualiza el estado 'error' y cambia 'isLoading' a false
        setIsLoading(false);
        setError(error);
      })
  },[]); // El array de dependencias vacío asegura que este efecto se ejecute solo una vez, al montar el componente

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

    // Si no hay errores ni carga, muestra una tabla con los precios de Bitcoin en diferentes monedas
    return (
      <div className="App">
        <h1>BTC to USD | EUR | GBP</h1>
        <h3>BTC to USD</h3>

        {/* Columna vacía */}
        <div className="col-2"></div>

        {/* Tabla de precios */}
        <div className="col-8">
          <table className='table table-striped'>
            <thead>
              <tr>
                <th>RATE</th>
                <th>RATE FLOAT</th>
                <th>DESCRIPTION</th>
                <th>UPDATE</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{data["bpi"]["USD"].rate}</td>
                <td>{data["bpi"]["USD"].rate_float}</td>
                <td>{data["bpi"]["USD"].description}</td>
                <td>{data["time"].updated}</td>
              </tr>
              <tr>
                <td>{data["bpi"]["EUR"].rate}</td>
                <td>{data["bpi"]["EUR"].rate_float}</td>
                <td>{data["bpi"]["EUR"].description}</td>
                <td>{data["time"].updated}</td>
              </tr>
              <tr>
                <td>{data["bpi"]["GBP"].rate}</td>
                <td>{data["bpi"]["GBP"].rate_float}</td>
                <td>{data["bpi"]["GBP"].description}</td>
                <td>{data["time"].updated}</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Columna vacía */}
        <div className="col-2"></div>
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
