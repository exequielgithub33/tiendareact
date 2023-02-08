import React from 'react';
import ItemCount from '../ItemCount/ItemCount';

export const ItemDetail = ({item}) => {
    return (
        <div className='row g-0'>
            <div className='col-md-4'>
                <img  src={`../img/${item.img}`} className="img-fluid rounded-start" alt={item.nombre}/>
            </div>
            <div className='col-md-8'>
                <div className='card-body'>
                    <h5 className="card-title">{item.nombre}</h5>
                    <p className="card-text">{item.modelo}</p>
                    <p className="card-text">$ {new Intl.NumberFormat('de-DE').format(item.precio)}</p>
                    <p className="card-text">{item.stock}</p>
                    <ItemCount valorInicial={1} stock={item.stock}/>
                    <button className='btn btn-secondary'>Finalizar Compra</button> 
                </div>
            </div>
        </div>
    );
}

