// ResolvedTodosWithUserIds.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ResolvedTodosWithUserIds.css'; // Importar el archivo CSS para estilos personalizados

const ResolvedTodosWithUserIds = () => {
  const [resolvedTodos, setResolvedTodos] = useState([]);

  useEffect(() => {
    const fetchResolvedTodos = async () => {
      try {
        const response = await axios.get('http://jsonplaceholder.typicode.com/todos');
        const resolvedTodos = response.data.filter(todo => todo.completed);
        setResolvedTodos(resolvedTodos);
      } catch (error) {
        console.error('Error fetching resolved todos:', error);
      }
    };

    fetchResolvedTodos();
  }, []);

  return (
    <div>
      <h2>Lista de todos los pendientes resueltos (ID y User ID)</h2>
      <ul className="resolved-todos-userids-list">
        {resolvedTodos.map(todo => (
          <li key={todo.id}>{`ID: ${todo.id}, User ID: ${todo.userId}`}</li>
        ))}
      </ul>
    </div>
  );
};

export default ResolvedTodosWithUserIds;
