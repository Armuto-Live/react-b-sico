import React from "react";
import './App.css';
import Componente from "./components/Componente";
function App() {
  let nombre="armuto";
  let auth=true;
  let estaciones=["Primavera","Verano","Otoño","Invierno"];
  return (
    <div className="App">
      <header className="App-header">
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
      </header>
      <section>
          <Componente msg="Hola soy un componente funcional expresado desde una props"/>
        </section>
    </div>
  );
}

export default App;
