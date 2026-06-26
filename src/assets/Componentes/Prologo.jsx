import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import lottie from "lottie-web/build/player/lottie_light";
import "./Comic.css";

export const Prologo = () => {
  const monstruosRef = useRef(null);
  const puertaRef = useRef(null);
  const doctorRef = useRef(null);

  const aniMonstruos = useRef(null);
  const aniPuerta = useRef(null);

  const [botonVisible, setBotonVisible] = useState(true);

  // ---------------------------
  // MONSTRUOS
  // ---------------------------
  useEffect(() => {
    fetch("/monstruos.json")
      .then((res) => res.json())
      .then((data) => {
        aniMonstruos.current = lottie.loadAnimation({
          container: monstruosRef.current,
          renderer: "svg",
          loop: true,
          autoplay: true,
          animationData: data
        });
      });

    return () => {
      aniMonstruos.current?.destroy();
    };
  }, []);

  // ---------------------------
  // PUERTA (SIN DUPLICAR)
  // ---------------------------
  useEffect(() => {
    let isMounted = true;

    fetch("/puerta.json")
      .then((res) => res.json())
      .then((data) => {
        if (!isMounted || !puertaRef.current) return;

        puertaRef.current.innerHTML = "";
        aniPuerta.current?.destroy();

        aniPuerta.current = lottie.loadAnimation({
          container: puertaRef.current,
          renderer: "svg",
          loop: false,
          autoplay: false,
          animationData: data
        });

        aniPuerta.current.goToAndStop(0, true);
      });

    return () => {
      isMounted = false;
      aniPuerta.current?.destroy();
    };
  }, []);

  // ---------------------------
  // SECUENCIA
  // ---------------------------
  const activarSecuencia = () => {
    setBotonVisible(false);

    if (!aniPuerta.current) return;

    aniPuerta.current.goToAndPlay(0, true);

    const handleComplete = () => {
      // 🔥 CUANDO LA PUERTA TERMINE → MOSTRAR VIDEO DEL DOCTOR
      if (doctorRef.current) {
        doctorRef.current.innerHTML = `
          <video 
            src="/doctor.mp4" 
            autoplay 
            playsinline 
            style="width:100%; height:auto;"
          ></video>
        `;
      }

      aniPuerta.current?.removeEventListener("complete", handleComplete);
    };

    aniPuerta.current.addEventListener("complete", handleComplete);
  };

  return (
    <div className="comic-contenedor">

      {/* HOME */}
      <Link to="/comic" className="boton-home">
        <FaHome />
      </Link>

      {/* ANTERIOR */}
      <Link to="/comic" className="flecha flecha-izquierda">
        <FaChevronLeft />
      </Link>

      <div className="escena-comic">

        {/* FONDO */}
        <div
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            backgroundImage: 'url("/Laboratorio.png")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            top: 0,
            left: 0
          }}
        />

        {/* MONSTRUOS */}
        <div
          ref={monstruosRef}
          style={{
            position: "absolute",
            width: "80%",
            height: "100%",
            zIndex: 2,
            pointerEvents: "none",
            top: 65,
            left: 150
          }}
        />

        {/* PUERTA */}
        <div
          ref={puertaRef}
          style={{
            position: "absolute",
            width: "15%",
            top: "39%",
            left: "45%",
            zIndex: 3,
            pointerEvents: "none"
          }}
        />

        {/* DOCTOR (VIDEO APARECE AQUÍ) */}
        <div
          ref={doctorRef}
          style={{
            position: "absolute",
            width: "100%",
            top: "0%",
            left: "0%",
            zIndex: 4,
            pointerEvents: "none"
          }}
        />

        {/* BOTÓN */}
        {botonVisible && (
          <img
            src="/boton.png"
            alt="boton"
            onClick={activarSecuencia}
            style={{
              position: "absolute",
              width: "120px",
              cursor: "pointer",
              zIndex: 10,
              top: "70%",
              left: "10%"
            }}
          />
        )}

      </div>

      {/* SIGUIENTE */}
      <Link to="/comic/capitulo1" className="flecha flecha-derecha">
        <FaChevronRight />
      </Link>

    </div>
  );
};
