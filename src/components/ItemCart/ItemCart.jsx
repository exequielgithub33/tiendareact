import React from 'react';

export const ItemCart = ({item}) => {
    return (
        <div className='card mb-3 cardCart'>
          <div className='row g-0'>
                <div className='col-md-4'>
                    <img src={`/img/${item.img}`} alt={`imagen de prodcuto ${item.nombre}`} className="img-fluid rounded-start" />
                </div>
                <div className='col-md-8'>
                    <div className='card-body'>
                        <h5 className='card-title'> {item.nombre}  </h5>
                        <p className='card-text'> cantidad: {item.cantidad}</p>
                        <p className='card-text'> precio unitario: $ {new Intl.NumberFormat('de-DE').format(item.precio)}</p>
                        <p className='card-text'> Subtotal: $ {new Intl.NumberFormat('de-DE').format(item.precio * item.cantidad)}</p>
                        <button className='btn btn-danger' onClick={()=> "Borrar prodcuto"}>Elimar Compra del carrito</button>
                    </div>
                </div>
          </div>
        </div>
    );
}

 
