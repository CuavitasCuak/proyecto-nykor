import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./Comic.css";

export const Capitulo8 = () => {
  return (
    <div className="comic-contenedor">

      {/* HOME */}
      <Link to="/comic" className="boton-home">
        <FaHome />
      </Link>

     
      <Link
        to="/comic/capitulo7"
        className="flecha flecha-izquierda"
      >
        <FaChevronLeft /> 
      </Link>

      
      <div className="escena-comic">

        <img
          src="/Cn.png"
          alt="Capítulo en construcción"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
          }}
        />

      </div>

      {/* SIGUIENTE */}
      <Link
        to="/comic/capitulo9"
        className="flecha flecha-derecha"
      >
        <FaChevronRight />
      </Link>

    </div>
  );
};