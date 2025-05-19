// Importar los hooks y componentes necesarios de React
// Import necessary React hooks and components
import React, { useState, useEffect } from 'react';
import { Button } from '@fluentui/react-components';

// Componente principal para la página del desafío de nombre
// Main component for the Name Challenge page
const NamePage: React.FC = () => {
  // Estado para almacenar el nombre del backend
  // useState crea una variable que React puede rastrear y actualizar
  // State to store the name from the backend
  // useState creates a variable that React can track and update
  const [name, setName] = useState('');

  // Función para obtener el nombre del backend
  // Esta es una función async porque hace una petición de red
  // Function to fetch name from the backend
  // This is an async function because it makes a network request
  const fetchName = async () => {
    try {
      // Hacer una petición GET al endpoint del backend
      // El path '/api/name' coincide con nuestra ruta del backend
      // Make a GET request to the backend endpoint
      // The '/api/name' path matches our backend route
      const response = await fetch('/api/name');
      
      // Parsear la respuesta JSON del backend
      // El backend envía los datos en formato JSON
      // Parse the JSON response from the backend
      // The backend sends data in JSON format
      const data = await response.json();
      
      // Actualizar el estado del nombre con la respuesta
      // Esto actualizará automáticamente la interfaz de usuario
      // Update the name state with the response
      // This will automatically update the UI
      setName(data.name);
    } catch (error) {
      // Registrar cualquier error que ocurra durante la petición
      // Log any errors that occur during the request
      console.error('Error fetching name:', error);
    }
  };

  // Hook useEffect que se ejecuta una vez cuando se carga el componente
  // Se ejecuta automáticamente cuando se carga la página
  // useEffect hook that runs once when the component loads
  // It automatically fetches the name when the page loads
  useEffect(() => {
    fetchName();
  }, []);

  // Renderizar la página
  // Render the page
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Name Challenge</h1>
      <p>Your task is to modify the name in the backend!</p>
      <div style={{ marginBottom: '2rem' }}>
        {/* Botón para obtener el nombre del backend */}
        {/* Button to fetch the name from the backend */}
        <Button onClick={fetchName}>Fetch Name</Button>
      </div>
      <br />

      {/* Mostrar el nombre actual */}
      {/* Show the current name */}
      <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
        Current Name: {name}
      </div>
    </div>
  );
};

export default NamePage;
