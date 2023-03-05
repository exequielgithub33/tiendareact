import React from 'react';
import { useCarritoContext } from '../../context/CarritoContext'

export const ItemCart = ({item}) => {
    const  {removeItem} = useCarritoContext()
    return (
        <div className='card mb-3 cardCart'>
          <div className='row g-0'>
                <div className='col-md-4'>
                   <img  src={item.img} className="img-fluid rounded-start" alt={`imagen de prodcuto ${item.nombre}`}/>
                </div>
                <div className='col-md-8'>
                    <div className='card-body'>
                        <h5 className='card-title'> {item.nombre}  </h5>
                        <p className='card-text'> cantidad: {item.cant}</p>
                        <p className='card-text'> precio unitario: $ {new Intl.NumberFormat('de-DE').format(item.precio)}</p>
                        <p className='card-text'> Subtotal: $ {new Intl.NumberFormat('de-DE').format(item.precio * item.cant)}</p>
                        <button className='btn btn-danger' onClick={()=> removeItem(item.id)}>Elimar del carrito</button>
                    </div>
                </div>
          </div>
        </div>
    );
}

 
