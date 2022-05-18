import { useState } from 'react'


import Titulo from './components/Titulo/Titulo'
import Formulario from './components/Formulario/Formulario'
//import FormContainer from './components/ComponenteContenedor/FormContainer'


import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'





function App() {
    
    const [bool, setBool]= useState(true)

    
    const tit = 'Soy titulo de App'
    const subTit = 'Soy subtitulo de App' 

    

    return (
        <div className="App">
            <NavBar 
                componente= { ()=> ItemListContainer({Saludo:'Hola soy el componente contenedor'}) }
            > 
            </NavBar >
            <ItemListContainer Saludo={'Hola soy el componente contenedor'} />
            <Titulo
                titulo={tit}
                subTit={subTit}>
                <Formulario />
            </Titulo>
            

        </div>
    )
}

export default App