import Formulario from "../Formulario/Formulario"
import Titulo from "../Titulo/Titulo"

function FormContainer() {
    const titulo = 'Titulo de Form'
    const subTitulo = 'Sub Titulo de Form'

    function saludo(){
        console.log('saludo')
    }
    //{place:'Ingresar el dato' saludo: saludar }
    return (
        <>
            <Titulo titulo={ titulo } subTit={ subTitulo }  />
            <Formulario place='Ingresar el dato' saludo={ saludo }/>
        </>
    )
}

export default FormContainer