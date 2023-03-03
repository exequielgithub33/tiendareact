import React from 'react';
import { Link } from 'react-router-dom';

export const Item = ({item}) => {
    return (
      <div className="card mb-3 cardProducto border-light">
        <img className="card-img-top" src={item.img} alt={item.nombre}/>
        <div className="card-body cardBody">
          <h5 className="card-title">{item.nombre}</h5>
          <h5 className="card-title">{item.modelo}</h5>
          <p className="card-text">$ {new Intl.NumberFormat('de-DE').format(item.precio)}</p>
          <button className='btn btn-dark'> <Link className='nav-link' to={`/item/${item.id}`}>Ver Producto</Link></button>          
         
        </div>
      </div>
    );
}


