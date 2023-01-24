import React from 'react';

const CartWidget = (props) => {
    return (
        <>
            <button className="btn btn-outline-success"> 🛒 </button>
            <p>{props.cant}</p>
        </>
    );
}

export default CartWidget;
