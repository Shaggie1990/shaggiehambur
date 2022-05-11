

const ItemListContainer = ( { Saludo= 'saludo'} ) => {
  function saludoAlert() {
      alert('Hola')
  }
return (
    <div> 
        { Saludo }
        <button onClick={ saludoAlert }>click</button>
    </div>
  )
}

export default ItemListContainer