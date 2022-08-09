import React from 'react';
import { AppUI } from './AppUI';
import { TodoProvider } from '../TodoContext'

// import './App.css';
// import logo from './logo.svg';

// const defaultItem = [
//   { text: 'Cortar cebolla', completed: true },
//   { text: 'Tomar el curso de intro a react', completed: false },
//   { text: 'Crear componentes', completed: false },
//   { text: 'Cortarme el pelo', completed: false },
//   { text: 'Hacer las compras', completed: false },
// ];


function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
