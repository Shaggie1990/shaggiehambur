// import Titulo from '../Titulo/Titulo'

export default function Formulario({ saludo, place }) {

    // Titulo( {titulo: 'Soy titulo de input'} )
    return (
        <div>
            {/* <h1>Esto es el fomrulario</h1> */}
            {/* <Titulo titulo= 'Soy titulo de input' subTit= 'Subtitulo de input' /> */}
            <form>
                <input type="text" placeholder={place} />
                <button className="btn btn-outline-primary" onClick={saludo} >Saludo</button>
            </form>
        </div>
    )
}
