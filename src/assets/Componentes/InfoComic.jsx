import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

export const InfoComic = () => {
  const contenedorRef = useRef(null);
  const imagenRef = useRef(null);
  const textoRef = useRef(null);
  const tituloRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      contenedorRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1 }
    )
      .fromTo(
        tituloRef.current,
        { y: -40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 }
      )
      .fromTo(
        imagenRef.current,
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.9 },
        "-=0.4"
      )
      .fromTo(
        textoRef.current,
        { x: 60, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.9 },
        "-=0.6"
      );
  }, []);

  return (
    <section
      ref={contenedorRef}
      style={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #050505, #0d0d0d)",
        color: "white",
        padding: "5vh",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "5vh",
          maxWidth: "1400px",
          width: "100%",
          flexWrap: "wrap",
        }}
      >
        {/* Video */}
        <div
          ref={imagenRef}
          style={{
            flex: 1.2,
            textAlign: "center",
            minWidth: "500px",
          }}
        >
          <video
            src="/teaser.mp4"
            controls
            preload="metadata"
            playsInline
            style={{
              width: "100%",
              maxWidth: "700px",
              borderRadius: "2vh",
              boxShadow: "0 2vh 6vh rgba(0,0,0,0.6)",
            }}
          />
        </div>

        {/* Texto */}
        <div
          style={{
            flex: 1,
            minWidth: "350px",
          }}
        >
          <h1
            ref={tituloRef}
            style={{
              fontSize: "5vh",
              marginBottom: "3vh",
              letterSpacing: "0.2vh",
            }}
          >
            El Silencio de Orien
          </h1>

          <p
            ref={textoRef}
            style={{
              fontSize: "2.2vh",
              lineHeight: "3.5vh",
              color: "#d1d1d1",
            }}
          >
            El Silencio de Orien es un cómic literario interactivo ambientado en
            el planeta ficticio de Lumara, donde la humanidad enfrenta las
            consecuencias de haber liberado una especie creada artificialmente
            conocida como los Drekxon. En medio del colapso del mundo, dos
            jóvenes, Emilia Kamizi y Kian Prescott, se encuentran en la
            supervivencia y deben aprender a confiar el uno en el otro mientras
            luchan por mantenerse con vida en un entorno devastado.
          </p>
        </div>
      </div>
    </section>
  );
};