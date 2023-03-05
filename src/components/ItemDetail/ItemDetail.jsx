import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { useCarritoContext } from '../../context/CarritoContext';
import { Link } from 'react-router-dom'


export const ItemDetail = ({item}) => {
    const {addItem} = useCarritoContext()

    const onAdd = (cantidad)=> {  // agrega el producto al carrito
        
        addItem(item,cantidad)
    }

    return (
        <div className='row g-0'>
            <div className='col-md-4'>
                <img  src={item.img} className="img-fluid rounded-start" alt={item.nombre}/>
            </div>
            <div className='col-md-8'>
                <div className='card-body'>
                    <h5 className="card-title">{item.nombre}</h5>
                    <p className="card-text">Modelo {item.modelo}</p>
                    <p className="card-text">Precio $ {new Intl.NumberFormat('de-DE').format(item.precio)}</p>
                    <p className="card-text">Stock {item.stock}</p>
                    <ItemCount valorInicial={1} stock={item.stock} onAdd={onAdd}/>
                    <Link className='nav-link' to={"/cart"}><button className='btn btn-secondary'>Finalizar Compra</button> </Link>
                    
                </div>
            </div>
        </div>
    );
}

