import { useState } from 'react'
import {BrowserRouter, Routes , Route} from 'react-router-dom'

import Titulo from './components/Titulo/Titulo'
import Formulario from './components/Formulario/Formulario'
//import FormContainer from './components/ComponenteContenedor/FormContainer'


import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './Container/ItemListContainer/ItemListContainer';







function App() {
    
    const [bool, setBool]= useState(true)

    
    const tit = 'ShaggieBurguer'
    const subTit = 'ShaggieBurguer' 

    

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