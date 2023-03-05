import React from 'react';
import { Link } from 'react-router-dom';

const Categorias = React.memo(() => {
    return (
     
        <li className="nav-item  dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Categorias
          </a>
          <ul className="dropdown-menu">
            <li>
              <Link className="dropdown-item" to="/categoria/guante">
                Guante
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/categoria/zapato">
                Zapato
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/categoria/cabezal">
                Cabezal
              </Link>
            </li>
            <li>
              <hr className="dropdown-divider"/>
            </li>
            <li>
              <Link className="dropdown-item" to="/categoria/traje">
                Traje
              </Link>
            </li>
           
          </ul>
        </li>
      
    );
})

export default Categorias;
