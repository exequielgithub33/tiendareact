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
              <Link className="dropdown-item" to="/categoria/1">
                Guantes
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/categoria/2">
                Zapatos
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/categoria/3">
                Cabezales
              </Link>
            </li>
            <li>
              <hr className="dropdown-divider"/>
            </li>
            <li>
              <Link className="dropdown-item" to="/categoria/4">
                Trajes
              </Link>
            </li>
           
          </ul>
        </li>
      
    );
})

export default Categorias;
