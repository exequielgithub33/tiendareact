import React from 'react'
import { Link } from 'react-router-dom'
import { useCarritoContext } from '../../context/CarritoContext'
import { ItemList } from '../ItemList/ItemList'



export const Cart = () => {
     const {carrito,totalPrice,emptyCart} = useCarritoContext()
    //array de prodcutos q agregan a mi carrito simula
    // const carrito = [
    //     {id:1,nombre:"Arroz", precio:123,img:'botas.png', cantidad:4},
    //     {id:2,nombre:"fideo", precio:323,img:'botas.png',  cantidad:23},
    //     {id:3,nombre:"atun", precio:100,img:'botas.png',  cantidad:41},
    //     {id:4,nombre:"pastas", precio:453,img:'botas.png',  cantidad:4},
    // ]

   return (
      <>
       
         {carrito.length === 0 
           ?   <>
                   <h2>CARRITO VACIO</h2>
                  <Link className='nav-link' to={'/'}>  <button className='btn btn-dark'>Continuar Comprando</button> </Link>
                
                </>
            :
            <div className='container cartContainer'>
              {
               //productos
                <ItemList products={carrito} plantilla={'itemCart'}/>
              }
              <div className='divButtons'>
                <p>Resumen de la compra :  $ {new Intl.NumberFormat('de-DE').format(totalPrice())}</p>
                <button className='btn btn-danger' onClick={()=> emptyCart()}> vaciar carrito</button>
                <Link className='nav-link' to={'/'}> <button className='btn btn-danger'>Continuar Comprando</button></Link>
                 <Link className='nav-link' to={'/checkout'}> <button className='btn btn-danger'> Finalizar COMPRA</button></Link>
              </div>
            </div>
          }
    
      </>
   )
}
