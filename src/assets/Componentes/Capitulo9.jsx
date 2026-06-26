import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./Comic.css";

export const Capitulo9 = () => {
  return (
    <div className="comic-contenedor">

      {/* HOME */}
      <Link to="/comic" className="boton-home">
        <FaHome />
      </Link>

      {/* ANTERIOR */}
      <Link
        to="/comic/capitulo8"
        className="flecha flecha-izquierda"
      >
        <FaChevronLeft />
      </Link>

      {/* RECUADRO DEL CÓMIC */}
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
        to="/comic/capitulo10"
        className="flecha flecha-derecha"
      >
        <FaChevronRight />
      </Link>

    </div>
  );
};