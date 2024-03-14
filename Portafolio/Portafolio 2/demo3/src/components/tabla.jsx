import React, { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';

// Componente MiDataTable
const MiDataTable = () => {
  // Estado para almacenar los datos del usuario
  const [user, setUser] = useState([]);
  // URL de la API para obtener datos de un Pokémon específico (Ditto en este caso)
  const url = 'https://pokeapi.co/api/v2/pokemon/ditto';

  // Función asincrónica para obtener y mostrar los datos del usuario
  const showData = async () => {
    // Realiza una solicitud HTTP GET a la URL
    const response = await fetch(url);
    // Convierte la respuesta en formato JSON
    const data = await response.json();
    // Muestra los datos en la consola
    console.log(data);
    // Actualiza el estado del usuario con los datos obtenidos
    setUser(data);
  };

  // Efecto de efecto secundario para llamar a la función showData una vez cuando el componente se monta
  useEffect(() => {
    showData();
  }, []);

  // Columnas de la tabla de datos
  const columns = [
    {
      name: 'Personaje', // Nombre de la columna
      selector: row => row.character, // Selector para obtener el valor de la columna de cada fila
    },
  ];

  // Retorna el componente DataTable con las columnas y datos especificados
  return (
    <DataTable
      columns={columns} // Columnas de la tabla
      data={user} // Datos a mostrar en la tabla
      pagination // Habilita la paginación de la tabla
    />
  );
};

export default MiDataTable; // Exporta el componente MiDataTable
