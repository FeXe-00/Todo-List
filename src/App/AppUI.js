import React from 'react';
import { TodoContext } from '../TodoContext';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';
import { TodoError } from '../TodoError';
import { TodosLoading } from '../TodosLoading';
import { EmptyTodos } from '../EmptyTodos';
import './App.css';
import '../index.css';

function AppUI () {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);

  return (
    // React.fragment es como una etiqueta invisible, y permite no crear divs innecesarios por cada
    // componente que creemos, los cuales pueden traer problemas con css
    <React.Fragment >
      <TodoCounter className="AppComponent" />
      <TodoSearch className="AppComponent"/>
      
      <TodoList className="container AppComponent">
        {error && <TodoError error={error} />}
        {loading && <TodosLoading />}
        {(!loading && !searchedTodos.length) && <EmptyTodos />}

        {searchedTodos.map(todo => (
          // key le permite a react identificar cuál componente es cual en una lista y nos ayuda a evitar renders innecesarios,
          // Hy qur enviarle un udentificador unico a c/u de los componentes, en este caso lo que va a cambiar en nuestro array
          // en este caso en la consola nos tira un warning advirtiendo esto.
          // de objetos por ahora va a ser la key text, ya que todos son TODOs distintos
          <TodoItem 
            key={todo.text}
            text={todo.text}
            completed={todo.completed}  
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
            className="AppComponent"
          />
        ))}
      </TodoList>
      

      {!!openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}

      <CreateTodoButton 
        setOpenModal={setOpenModal}
      />

    </React.Fragment>
  );
}

export { AppUI };