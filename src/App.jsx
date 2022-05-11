import { useState } from 'react'
import NavBar from './components/NavBar/NavBar';

import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  
  
  return (
    <div className="App">

      <NavBar />
      <ItemListContainer Saludo= 'Hola soy el Componente contenedor'/>
    </div>
  );
}

export default App;