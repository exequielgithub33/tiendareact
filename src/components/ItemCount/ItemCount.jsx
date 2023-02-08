
import React from 'react';
import { useState } from 'react';
import CartWidget from '../cartWidget/CartWidget';

const ItemCount = ({valorInicial, stock}) => {
    const [contador,setContador] =useState(valorInicial)
    
    const sumar = ()=> (contador < stock) && setContador(contador + 1)
    const restar = ()=> (contador > valorInicial) && setContador(contador - 1)
    return (
        <div>
            <button className='btn btn-dark' onClick={sumar}>➕</button>
            <h2> Cantidad de Productos {contador}</h2>
            
            <button className='btn btn-dark' onClick={restar}>➖</button>
        </div>
    );
}

export default ItemCount;
