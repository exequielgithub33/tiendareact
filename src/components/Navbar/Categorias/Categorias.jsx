import React from 'react';

const Categorias = () => {
    return (
     
        <li className="nav-item  dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Productos
          </a>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#">
                Guantes
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Zapatos
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Cabezales
              </a>
            </li>
            <li>
              <hr className="dropdown-divider"/>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Trajes
              </a>
            </li>
           
          </ul>
        </li>
      
    );
}

export default Categorias;
