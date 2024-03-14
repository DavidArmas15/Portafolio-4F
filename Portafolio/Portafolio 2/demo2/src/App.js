import './App.css'; // Importa el archivo CSS para estilos
import Btc2 from "./components/Btc2.jsx"; // Importa el componente Btc2

// Función principal del componente App
export default function App() {
  // Retorna el contenido del componente
  return (
    <div className="App"> {/* Div principal con la clase 'App' */}
      <Btc2/> {/* Renderiza el componente Btc2 dentro del componente App */}
    </div>
  );
}

// Estilos del componente
const styles = {
  textProps : { // Propiedades de texto
    alignItems: 'center', // Alineación vertical al centro
    justifyContent: 'center', // Alineación horizontal al centro
  }
}
