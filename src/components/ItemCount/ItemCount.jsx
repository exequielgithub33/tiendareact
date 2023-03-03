
import React from 'react';
import { useState } from 'react';
import CartWidget from '../cartWidget/CartWidget';
import { toast } from 'react-toastify';

const ItemCount = ({valorInicial, stock,onAdd}) => {
    const [contador,setContador] =useState(valorInicial)
    const restar = ()=> (contador > valorInicial) && setContador(contador - 1)
    const sumar = ()=> (contador < stock) && setContador(contador + 1)
    
    
    const agregarCarrito = ()=>{
        onAdd(contador)
        toast.success(`agregaste ${contador} prod al carrito`)
        
    } 

    return (
        <div>
         
            <h2> Cantidad de Productos {contador}</h2>
            <button className='btn btn-dark' onClick={restar}>➖</button>
            <button className='btn btn-dark'  onClick={sumar}>➕</button>
            <button className='btn btn-dark' onClick={()=> agregarCarrito()}>Agregar al Carrito</button>
        </div>
    );
}

export default ItemCount;
