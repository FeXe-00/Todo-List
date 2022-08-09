import React from 'react';



//* NOTE Recibimos como parámetros el nombre y el estado inicial de nuestro item.
function useLocalStorage(itemName, initialValue) {
  
  //* NOTE Creamos el estado inicial para nuestros errores y carga
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);

  //* NOTE ¡Podemos utilizar otros hooks!  
  const [item, setItem] = React.useState(initialValue);

  React.useEffect(() => {
    //* NOTE Simulamos un segundo de delay de carga 
    setTimeout(() => {
      //* NOTE Manejamos la tarea dentro de un try/catch por si ocurre algún error
      try {
        //* NOTE Guardamos nuestro item en una constante
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;
      
          //* NOTE Utilizamos la lógica que teníamos, pero ahora con las variables y
          //* NOTE parámentros nuevos
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }
  
        setItem(parsedItem);
        setLoading(false);

      } catch (err) {
        //* NOTE En caso de un error lo guardamos en el estado
        setError(err);
      }

    }, 1500)
  });
    
  
  
  //* NOTE Actualizamos la función para guardar nuestro item con las nuevas
  //* NOTE variables y parámetros
  const saveItem = newItem => {
    try {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      setItem(newItem);
    } catch (err) {
      setError(err);
    }
  };

  //* NOTE Regresamos los datos que necesitamos
  return {
    item,
    saveItem,
    loading,
    error,
  };
}


export { useLocalStorage };