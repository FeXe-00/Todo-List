import React from 'react';
import { useLocalStorage } from './useLocalStorage';

const TodoContext = React.createContext();

function TodoProvider(props) {

  //* NOTE Desestructuramos los datos que retornamos de nuestro custom hook,
  //* NOTE y le pasamos los argumentos que necesitamos (nombre y estado inicial) 
  const {
    item,
    saveItem,
    //* NOTE Desestructuramos los nuevos datos de nustro custom hook
    loading,
    error,
  } = useLocalStorage('TODOS_V1', []);

  const [searchValue, setSearchValue] = React.useState('');
  const [openModal, setOpenModal] = React.useState(false);

  const completedTodos = item.filter(todo => !!todo.completed).length;
  const totalTodos = item.length;

  let searchedTodos = [];

  if (!searchValue.length >= 1) {
    searchedTodos = item;
  } else {
    searchedTodos = item.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });    
  }


  const addTodo = (text) => {
    const newItem = [...item];
    newItem.push({
      completed: false,
      text: text

    });
    saveItem(newItem);
  };


  const completeTodo = (text) => {
    const todoIndex = item.findIndex(todo => todo.text === text);
    const newTodos = [...item];
    newTodos[todoIndex].completed = true;
    saveItem(newTodos);
  };


  const deleteTodo = (text) => {
    const todoIndex = item.findIndex(todo => todo.text === text);

    const newItem = [...item];
    newItem.splice(todoIndex, 1);
    saveItem(newItem);
  };

    return (
        <TodoContext.Provider value={{
            loading,
            error,
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodo,
            addTodo,
            deleteTodo,
            openModal,
            setOpenModal,

        }}>
            {props.children}
        </TodoContext.Provider>
    )
}

export { TodoContext, TodoProvider };