import React from "react";
import './App.css';
import Componente from "./components/Componente";
import Propiedades from "./components/propiedades";
function App() {
  let nombre="armuto";
  let auth=true;
  let estaciones=["Primavera","Verano","Otoño","Invierno"];
  return (
    <div className="App">
      <header className="App-header">
        <section>
          <h1>{nombre}</h1>
          <p>
            {auth ? "el usuario esta logeado":"El usuario no esta logeado"}
          </p>
          <p>{2+3}</p>
          <ul>
            {estaciones.map((el,index) =>(
              <li key={index}>{el}</li>
            ))}
          </ul>
          <label htmlFor='nombre'>Nombre</label>
          <input type="text" id="nombre"/>
        </section>
        <section>
          <Componente msg="Hola soy un componente funcional expresado desde una props"/>
          <hr/>
          <Propiedades cadena="Esto es una cadena de texto" numero={19} booleano={false}/>
        </section>
      </header>
          
    </div>
  );
}

export default App;
