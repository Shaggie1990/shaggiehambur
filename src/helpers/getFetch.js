const productos = [
    { id: '1', categoria: 'Hambuerguesa', name: "Clasica", price: 400, foto: 'https://www.serargentino.com/public/images/2021/01/16109941330-17-burger-773x458.jpg' },
    { id: '2', categoria: 'Hambuerguesa', name: "Chedar", price: 450, foto: 'https://www.serargentino.com/public/images/2021/01/16109941330-17-burger-773x458.jpg' },
    { id: '3', categoria: 'Hambuerguesa', name: "Doble", price: 500, foto: 'https://www.serargentino.com/public/images/2021/01/16109941330-17-burger-773x458.jpg' },
    { id: '4', categoria: 'Hambuerguesa', name: "Triple", price: 600, foto: 'https://www.serargentino.com/public/images/2021/01/16109941330-17-burger-773x458.jpg' },
    { id: '5', categoria: 'Lomo', name: "Lomo", price: 550, foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWLvEWXXg2BzsGl6Bkw0CJ_gFn8pF_5pwOKg&usqp=CAU' },
    { id: '6', categoria: 'Milanesa', name: "Milanesa", price: 500, foto: 'https://www.juliana-delivery.com.ar/uploads/products/detail_products_7576.png' },
    { id: '7', categoria: 'Bebida', name: "Gaseosa", price: 120, foto: 'https://peru21.pe/resizer/SBnspw01EUwsv4SiJGxHckLPeFE=/1200x900/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/R746X3WUYFB67NSA3FEP5EYFCA.jpeg' },
    { id: '8', categoria: 'Bebida', name: "Cerveza", price: 160, foto: 'https://peru21.pe/resizer/SBnspw01EUwsv4SiJGxHckLPeFE=/1200x900/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/R746X3WUYFB67NSA3FEP5EYFCA.jpeg' }
  
  ]
  
  export const getFetch = (id) => {
    return new Promise((resolve)=>{
        setTimeout(()=>{
                const query = id ? productos.find(producto => producto.id === id ) : productos                                  
                resolve( query )                           
            }, 2000)
        })            
    
}



  const producto = { id: '1', categoria: 'remeras', name: "Remera Gris",   price: 37, foto: '/assets/images/hamburguesa clasica.jpg' }

  const getFetch = new Promise((resolve) => {
    setTimeout(() => {
      resolve(producto)
    }, 3000)
  })
  