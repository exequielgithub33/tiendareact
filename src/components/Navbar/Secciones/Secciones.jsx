import React from 'react';
import { Link } from 'react-router-dom';


const Secciones = () => {
    return (
      <>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to={"/"}>
            Inicio
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={"/contacto"}>
          Contacto
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to={"/oferta"}>
          Oferta
          </Link>
        </li>
      </>
    );
}

export default Secciones;
