import React from "react";
import './App.css';
import Componente from "./components/Componente";
import Propiedades from "./components/propiedades";
import Estado from "./components/Estado"  
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
          <Propiedades 
          cadena="Esto es una cadena de texto" 
          numero={19} 
          booleano={false} 
          arreglo={[1,2,3]} 
          objeto={{nombre:"Luis", apellido:"Armuto"}} 
          funcion={(num)=>num*num}
          elementoReact={<i>Esto es un elemento de react</i>}
          componenteReact={<Componente msg="Soy un componente pasado como prop"></Componente>}/>
        
          <hr/>
          <Estado/>
        </section>

      </header>
          
    </div>
  );
}

export default App;
