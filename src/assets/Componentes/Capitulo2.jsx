import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./Comic.css";


export const Capitulo2 = () => {
  return (
     <div className="comic-contenedor">

      {/* Botón inicio */}
      <Link to="/comic" className="boton-home">
        <FaHome />
      </Link>

      {/* Flecha anterior */}
    
      <Link to="/comic" className="flecha flecha-izquierda">
        <FaChevronLeft />
      </Link>

      {/* Escena principal */}
      <div className="escena-comic">

        {/* Aquí va el contenido de cada capítulo */}
        <div className="contenido-escena">
          <h1>Prologo</h1>
          <p>Aquí irá la escena interactiva.</p>
        </div>

      </div>

      {/* Flecha siguiente */}
    
      <Link to="/comic/capitulo3" className="flecha flecha-derecha">
      <FaChevronRight />
    </Link>

    </div>
  );
};