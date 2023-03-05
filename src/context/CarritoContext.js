import { useContext,createContext,useState } from "react";

 const CarritoContext = createContext()  //creo mi contexto

export const useCarritoContext = () => useContext(CarritoContext)  //permite utolizar mi contexto parano llamar siemore a usecontext

export const CarritoProvider = (props) => {   //defino provedor
     const [carrito,setCarrito] = useState([])


//     //agregar prodcuto     itemDetail  onAdd me piden cantidad item  /no sumo cantidades REEMPLZAO
const addItem = (producto,cantidad) => {
  if (isInCart(producto.id)) {     //reeplazo cantidades
          const indice = carrito.findIndex(prod => prod.id === producto.id)
          const aux = [...carrito]
          aux[indice].cant = cantidad
          setCarrito(aux) 

      }    else  {  //creo el objeto producto en carrrito con los datos ingresados

              const prodCart = {      //mismo prod de siempre mas la canrtidad que ingreso el usuario
                  ...producto,
                  cant : cantidad
              }
             // setCarrito([...carrito,prodCart])
              const aux = [...carrito]
              aux.push(prodCart)
              setCarrito(aux)
              
      }



  }


//     //eliminar producto
    const removeItem= (id) => {
        setCarrito(carrito.filter(prod => prod.id !==id))
    }
    //precio total de la compra
    const totalPrice = () => {
        return carrito.reduce((acum,prod) => acum += (prod.cant * prod.precio),0)
    }


//     //vaciar carrito  cuando finalizamos compra
    const emptyCart = () => {
        setCarrito([])
    }
//     //cantida actual total de producto en carrito  (cartWidget numero en el navbar a la derecha del carrito )
const getItemQuantity = () => {
    return carrito.reduce((acum,prod) => acum += prod.cant,0) 
}

//     //si existe en el carrito el prodcuto /sino devuelve undefined
    const isInCart = (id) => {
        return carrito.find(prod => prod.id ===id)
    }


return (
  <CarritoContext.Provider value= {{carrito, getItemQuantity,addItem,emptyCart,removeItem,totalPrice}}>
        {props.children}
  </CarritoContext.Provider>

    )
}


