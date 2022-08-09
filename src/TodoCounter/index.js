import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css';

function TodoCounter() {
    const { totalTodos, completedTodos } = React.useContext(TodoContext);
    
    return (
        <h2 className='TodoCounter'>Tareas completadas: {completedTodos} de {totalTodos}</h2>
    );
}

export { TodoCounter };