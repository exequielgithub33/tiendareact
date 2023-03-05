import React from 'react';
import { useCarritoContext } from '../../context/CarritoContext'
import { Link } from 'react-router-dom'

import { useNavigate } from 'react-router-dom';
import { toast, Toast } from 'react-toastify';

import { createOrdenCompra,getOrdenCompra,getProducto,updateProducto } from '../../firebase/firebase';

export const Checkout = () => {
  const {carrito,emptyCart, totalPrice} = useCarritoContext()
    
  let navigate = useNavigate()  
  const datosFormulario = React.useRef()

  const consultarFormulario = (e)=> {
    e.preventDefault()
    const datForm = new FormData(datosFormulario.current)
    const cliente = Object.fromEntries(datForm)
    
    if (cliente.email === cliente.repetiremail)
       {
           const aux = [...carrito]

          aux.forEach(prodCarrito => {
          getProducto(prodCarrito.id).then(prodBDD =>{
          prodBDD.stock -= prodCarrito.cant // descuento del stock la cantiad comprada
          updateProducto(prodCarrito.id,prodBDD)
                 })
          })

          const fecha = new Date().toISOString()
          createOrdenCompra(cliente,aux,totalPrice(),fecha).then(ordenCompra =>{
          toast.success(`Gracias ${cliente.nombre} por su compra de $ ${new Intl.NumberFormat('de-DE').format(totalPrice())}, se realizo con exito`)  
          emptyCart()
          e.target.reset()
          navigate('/')  
          })
    }else {
           toast.success(`ambos correos ingresados deben ser iguales , verifique`)
    }

 
    
     
      
  }



  
    return (
      <>
      {carrito.length ===0 
        ? <>
        <h2>No agrego Producto al Carrrito</h2>
        <Link className='nav-link' to={'/'}>  <button className='btn btn-dark'>Continuar Comprando</button> </Link>
          </>

        : <div className='container' style={{marginTop:"15px"}}>
        <div>
         
          <form onSubmit={consultarFormulario} ref={datosFormulario}>
             <div className="mb-3">
                <label htmlFor="nombre" className="form-label">Nombre y Apellido </label>
                <input type="text" className="form-control" required placeholder='Ingrese Nombre' name='nombre'/>
              </div>
              <div className="mb-3">
                 <label htmlFor="email" className="form-label">Email </label>
                 <input type="email" className="form-control" required placeholder='Ingrese Email' name='email'/>
              </div>
             <div className="mb-3">
                 <label htmlFor="repetiremail" className="form-label">Repetir Email </label>
                 <input type="email" className="form-control" required placeholder='Ingrese nuevamente Email' name='repetiremail'/>
              </div>
      
              <button type="submit" className="btn btn-primary">Finalizar Compra</button>
         </form>
      </div>
    </div>

      }
      </>
    );
}


