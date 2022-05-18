import './Titulo.css'
// props = {titulo: soytitulo de input}

export default function Titulo({ titulo = 'Titulo', subTit = 'Subtitulo' }) {
    //const {titulo} = props
    //console.log(props)
    return (

        <>
            <h1>{titulo}</h1>
            <h2>{subTit}</h2>

        </>
    )
}

