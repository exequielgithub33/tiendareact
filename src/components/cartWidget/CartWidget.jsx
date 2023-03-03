import React from 'react';
import { Link } from "react-router-dom";


const CartWidget = (props) => {
    return (
        <>
            <Link className='nav-link' to={'/cart'}><button  className="btn btn-outline-success" > 🛒 </button></Link>
            <p>{props.cant}</p>
        </>
    );
}

export default CartWidget;
