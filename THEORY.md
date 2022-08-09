### INTRODUCCIÓN A REACT ###

_Una manera muy sencilla de crear un proyecto con React es utilizando Create React App, así puedes iniciar un proyecto sin preocuparte por la configuración de 
herramientas como webpack o babel.

_Aunque siempre será mejor si nosotros hacemos esta configuración desde cero, ya que tendremos mayor control de todo e incluso nuestra aplicación tendría un mejor 
rendimiento.

# Maneras de instalar React
_Existen varias formas de trabajar con React, cada una tiene sus ventajas y desventajas, siempre que trabajemos con React necesitaremos las dependencias react y 
react-dom.

* React en JavaScript vanilla:
Podemos importar los scripts del código fuente de React, existen las versiones para desarrollo que nos facilita debuggear y para producción que está optimizada 
para el producto final.

React con JavaScript vanilla casi no se usa, lo ideal es crear un entorno de desarrollo que facilite nuestro trabajo.

* Configuración manual desde cero
Es la mejor manera si queremos tener control absoluto de nuestro entorno de desarrollo, necesitamos emplear y configurar varias herramientas.

* Create React App
Esta es la manera más simple y rápida para trabajar con React, solo necesitamos ejecutar el comando: npx create-react-app nombre-del-proyecto o npx 
create-react-app nombre-del-proyecto --template typescript para typescript y en unos instantes tendremos un entorno de desarrollo totalmente configurado para 
comenzar a trabajar.

* Entorno de Create React App
Dentro de este entorno tenemos un archivo package.json en el que se encuentran nuestros scripts, dependencias y meta datos de nuestro proyecto, también tendremos 
dos carpetas principales:

    - public/: Es la carpeta pública en donde tendremos nuestro archivo HTML y algunos assets
    - src/: Es la carpeta fuente, en donde tendremos todos nuestros archivos de trabajo
    - Dentro del index.html siempre tendremos un div con un id, como root que será la raíz de nuestro proyecto, y la usaremos para empezar a construir con 
    JavaScript:
        <!-- Aquí es en donde todo nuestro código será renderizado. -->
        <div id="root"></div>

# ¿Cómo inicializar nuestro servidor?
_Para iniciar el entorno de desarrollo podemos ejecutar el comando npm start, con esto tendremos nuestro servidor corriendo en el puerto 3000 y también se 
refrescará automáticamente con cualquier cambio hecho en el proyecto. (A excepción de los cambios hechos en el archivo index.js).


### JSX: COMPONENTES VS ELEMENTOS ###

* _Con clases: actualmente no se usa.
    
    class Componente extends React.Components {
        return {
            React.createElement('h1', {id: 'title'}, 'Hello World From React!')
        }
    }

* _Con React.createElement: es la forma en la que se creaban componentes a partir de un elemento, tampoco se usa hoy en día.
    function App() {
        return {
            React.createElement('h1', {id: 'title'}, 'Hello World From React!')
        }
    }

* _Con JSX: es el usado hoy por hoy ya que simula la syntax de html y es mucho más legible:
    function App() {
        return {
            <h1 id="title">
                Hello World From React
            </h1>
        }
    }

# Caratcterísticas importantes de jsx:
    1_ Podemos utilizar variables en los atrbibutos de las etiquetas t dentro de las etiquetas haciendo uso de las llaves {--variable}

    2_ las clases en las etiquetas no se asignan con 'class=""', acá se utiliza 'className=""', esto cpn el fin de evitar confuciones
    con la palabra reservada "class" de javascript

    3_ Cuando llamamos nuestro componente a renderizar en el index, le podemos pasar propiedades al componente, las cuales se van a
    portar como un parámetro de una funciónb, y las podemos agregar en el comonente, siem pre y cuando agregeguemos el parámetro a
    la función App(<parameter>) en el componente App.js

    4_ también podemos crear en el llamado al render de los componentes, en las mismas etiquetas de autocierre, dos etiquetas del mismo
    componente, una de apertura y una de cierre, y lo que esté dentro se va a renderizar utilizando la porpiedad children dentro del jsx
    del componente.

    index.js:
    root.render(
        <App>
            Hello World From Children!
        </App>
    );

    App.js:
    const Componente = (props) => {
        return(
            <div className="titulo">
                {props.children}
                {/* props.children = <h1>¡Soy un título anidado!h1> */}
            div>
        )
    }


### ANÁLISIS DE NUESTRA APLICACIÓN: TODO-LIST ###

_Anteriormente, hemos detectado los componentes y sus comportamientos dentro de nuestro TODO app, necesitamos crear:

*    *_Counter: para llevar un conteo de las tareas totales y las completadas.
*    *_Search: para filtrar los TODOs de la lista.
*    *_List: en donde tendremos cada uno de los TODOs.
*    *_Item: será cada uno de los TODOs.
*    *_Add Todo: botón para agregar un nuevo TODO.
*    *_Adicionalmente, tendremos que crear un modal para ingresar los datos del nuevo TODO (Lo veremos más adelante).

_Para empezar a trabajar en el código, primero eliminaremos algunos archivos que no son necesarios para nuestra aplicación,
solamente dejaremos dentro de nuestra carpeta src/ los archivos index.js, App.js y los estilos.

### index.js

### App.js

_Dentro de nuestro componente App borraremos todo lo que estaba dentro del componente (No tengas miedo a romper el código),
también quitaremos las importaciones de los estilos y de la imagen.

_Ahora empezaremos a escribir nuestros componentes, tendremos algo como lo siguiente:

#    function App() {
#        return (
#            <TodoCounter />    
#            <TodoSearch />
#            <TodoList>
#                <TodoItem />
#            </TodoList>
#            <CreateTodoButton />
#        );
#    }
#   export default App;

_Una vez iniciamos el proyecto nos aparecerá un error como el siguiente: SyntaxError: Adjacent JSX elements must be wrapped
in an enclosing tag., esto es porque solamente se puede regresar un solo componente al trabajar con JSX, si queremos regresar
varios necesitamos encerrarlos en un solo elemento padre.

Para esto existen 2 posibles opciones:

    * 1_Envolver todos nuestros elementos y componentes en un <div></div> u otra etiqueta.
    * 2_Utilizar el componente Fragment, que será invisible al momento de renderizar nuestros elementos en el DOM.

_Para no tener problemas con los estilos y no tener que crear etiquetas extras por cada componente, se usa Fragment y para
utilizarlo existen 2 formas:

### Opción uno:

#    import React from "react"
#    function App() {
#        return (
#            <React.Fragment>
#                ...
#            </React.Fragment>
#        );
#    }

#    // Desestructurándolo desde React
#    import { Fragment } from "react"
#
#    function App() {
#        return (
#            <Fragment>
#                ...
#            </Fragment>
#        );
#    }

### Opción dos:

_O una forma muy común y la más utilizada, envolviendo nuestros elementos dentro de etiquetas vacías, que es lo
equivalente a React.Fragment:

#    function App() {
#        return (
#            <>
#                //...
#            </>
#        );
#    }

Puedes utilizar la manera que veas más cómoda.


* _Ahora si vemos nuestro proyecto nos aparecerá otro error, como ya te imaginas es porque no hemos creado
nuestros componentes, eso es justo lo que haremos.

Para esto utilizaremos los módulos de JavaScript, existen varias maneras de exportar nuestros componentes, podemos
exportarlos por defecto, pero no es una buena práctica porque puede causar futuros problemas al importar estos componentes.

Para evitar este problema debemos intentar evitar export default, y exportar nuestros componentes por su nombre, por
ejemplo: export { Componente };, así lo tendremos que importar exactamente como lo exportamos:
    
#    import { Componente } from './Componente';,

### HOOKS, LOCALSTORAGE Y CUSTOM HOOKS PARA EL LOCALSTORAGE ###

* Hooks:
    _ Los Hooks son una nueva adición en React 16.8. Permiten usar el 
    estado y otras características de React sin escribir una clase. Los 
    Hooks tienen una sección de documentos dedicados y una referencia API 
    separada.
    info en: https://es.reactjs.org/docs/react-api.html

* LocalStorage:
    _Es una herramienta que nos proporciona el navegador para poder 
    persistir/guardar datos de nuestra aplicación.
    Su característica principal es que sólo puede almacenar datos del
    tipo String, por lo que debemos convertir los datos para guardarlos,
    y hacer lo inverso para cuando los traigamos(parsearlos).
    Para esto hacemos lo siguiente en nuestro caso:

        JSON.stringify(<data>)  <convertimos lo que tenemos en formato json a string>

        JSON.parse(<data>) <convertimos a json lo que traemos en este caso del localstorage>


_Algo super interesante de React es que podemos crear hooks 
personalizados para ejecutar procesos para manejar información sin que 
afecte a otros componentes, lo que haremos será abstraer nuestra lógica 
de localStorage para manejarla dentro de nuestro propio hook.

# Reglas para crear un custom hook:

_Nuestro hook personalizado debe empezar por use, por ejemplo: usePatito, 
useTodos o useUnicornio.
No anidar hooks en loops u otros bloques.
Llamar dentro de componentes de React o hooks propios, nunca dentro de 
funciones normales.

# Creando nuestro Custom Hook:

_El objetivo de un custom hook es reutilizar código, entonces este hook debería poder funcionar para guardar cualquier tipo de dato en el localStorage.

* _Primero necesitamos analizar que parámetros necesita tener nuestro 
custom hook:

    1_Un nombre para el item en nuestro localStorage.
    2_Un estado inicial

* _También tenemos que regresar algunos datos para que nuestro hook sea funcional:

    1_datos actuales de nuestro ítem en el localStorage.
    2_función para actualizar los datos de este ítem.

_Esto permite que nuestro código esté mucho más organizado y sea
legible. Si uno desea ser aún más ordenado, podemos crear una carpeta explusiva para nustros custom hooks, y luego importarla.

### MANEJO DE EFECTOS ###

* _El hook de efecto en react nos permite ejecutar un pedazo de código
cada vez que necesitemos, a lo largo de la vida de nuestro componente,
también cuando se cumplan ciertas condiciones.

* _Algo curioso e importante de saber es que el código dentro de nuestro
hook de efecto no se ejecuta como el resto del código, se ejecutará
inicialmente justo antes de hacer el renderizado del HTML que resulte de
nuestro código de React.

# Condiciones para nuestro hook de efecto:

* _El hook de React, useEffect, puede recibir dos argumentos:

    1_Función que se ejecutará en cada fase del ciclo de vida de nuestro
      componente.

    2_Las condiciones de cuándo debe ejecutarse esta función dentro de un
      arreglo, cada que se actualice cualquier dato que le pasemos a este
      arreglo, se volverá a ejecutar nuestra función.

# Diferentes maneras de actualizar nuestros componentes:

* _Existen tres diferentes maneras para aplicar el hook de efecto, todas
funcionan diferente a la hora de re-renderizar nuestros componentes.

# 1_Sin pasar un arreglo como segundo argumento: useEffect(funcion)
    Cuando no le pasamos un segundo argumento con las condiciones de
    cuándo se debe re-ejecutar nuestra función, React tomará como
    condiciones que se debe ejecutar nuestra función todas las veces
    que ocurra un re-renderizado, y también cada vez que se actualice
    alguna prop (Si es que el componente recibe alguna).

# 2_Pasando un arreglo vacío: useEffect(funcion, [])
    Cuando pasamos un arreglo vacío, le estás diciendo a React que no hay
    ninguna condición para volver a ejecutar el código de nuestra función,
    entonces solamente se ejecutará en el renderizado inicial.

# 3_Pasando un arreglo con datos: useEffect(funcion, [val1, val2, valN])
    Cuando especificas las condiciones dentro del arreglo del segundo
    parámetro, le estás diciendo a React que ejecute nuestra función en el
    renderizado inicial y también cuando algún dato del arreglo cambie.

# Simulando una petición a una API:

* _Dentro de una aplicación web, al trabajar con APIs, existen muchos factores para determinar cuánto tardará en cargar nuestra aplicación, como la velocidad de nuestro internet, la distancia del servidor, etc.

* _Al trabajar con APIs también debemos tener en cuenta que puede tardar en cargar mucho nuestra aplicación, o incluso puede ocurrir algún error, todo esto lo debemos de manejar para mantener a nuestro usuario informado.

* _El hook de efecto nos permite saber cuando ya renderizó nuestra aplicación, así podemos mostrar un mensaje de cargando o alguna animación en lo que se completa la petición, también con JavaScript podemos manejar los errores con try y catch, y haciendo uso del hook de estado podemos guardar si está cargando o hubo algún error.