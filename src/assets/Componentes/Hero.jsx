import React, { useState } from 'react';
import { InfoNykor } from './InfoNykor';

export const Hero = () => {

  const [mostrarInfo, setMostrarInfo] = useState(false);

  return (
    <>
    
      <section
        style={{
          width: "100%",
          minHeight: "100vh",
          backgroundColor: "#050505",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "5rem 0",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: "90%",
            maxWidth: "1400px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "4rem",
            flexWrap: "wrap",
          }}
        >

          {/* IZQUIERDA */}
          <div
            style={{
              flex: "1",
              minWidth: "320px",
            }}
          >

            {/* TEXTO PEQUEÑO */}
            <p
              style={{
                color: "#8A8A8A",
                letterSpacing: "0.4rem",
                textTransform: "uppercase",
                fontSize: "0.9rem",
                marginBottom: "1.5rem",
              }}
            >
              Universo narrativo cinematográfico
            </p>

            {/* TITULO */}
            <h1
              style={{
                color: "#FFFFFF",
                fontSize: "6rem",
                fontWeight: "900",
                lineHeight: "5.8rem",
                marginBottom: "2rem",
                textTransform: "uppercase",
              }}
            >
              Historias
              <br />
              nacidas
              <br />
              en la sombra.
            </h1>

            {/* TEXTO */}
            <p
              style={{
                color: "#8A8A8A",
                fontSize: "1.2rem",
                lineHeight: "2rem",
                maxWidth: "550px",
                marginBottom: "3rem",
              }}
            >
              Nykor combina narrativa, ilustración y emoción
              para crear mundos oscuros inspirados en el cine,
              los webtoons y la ciencia ficción psicológica.
            </p>

            {/* BOTONES */}
            <div
              style={{
                display: "flex",
                gap: "1.5rem",
                flexWrap: "wrap",
              }}
            >

              {/* BOTON 1 */}
              <button
                style={{
                  backgroundColor: "#FFFFFF",
                  color: "#000000",
                  border: "none",
                  padding: "1rem 2.2rem",
                  borderRadius: "1rem",
                  fontWeight: "700",
                  textTransform: "uppercase",
                  letterSpacing: "0.08rem",
                  cursor: "pointer",
                }}
              >
                Explorar comics
              </button>

              {/* BOTON 2 */}
              <button
                onClick={() => setMostrarInfo(true)}
                style={{
                  backgroundColor: "transparent",
                  color: "#FFFFFF",
                  border: "1px solid rgba(255,255,255,0.2)",
                  padding: "1rem 2.2rem",
                  borderRadius: "1rem",
                  fontWeight: "700",
                  textTransform: "uppercase",
                  letterSpacing: "0.08rem",
                  cursor: "pointer",
                }}
              >
                Conoce más
              </button>
            </div>
          </div>

          {/* DERECHA */}
          <div
            style={{
              flex: "1",
              minWidth: "320px",
              display: "flex",
              justifyContent: "center",
              position: "relative",
            }}
          >

            {/* GLOW */}
            <div
              style={{
                width: "30rem",
                height: "30rem",
                borderRadius: "50%",
                backgroundColor: "rgba(255,255,255,0.08)",
                position: "absolute",
                filter: "blur(90px)",
              }}
            ></div>

            {/* CIRCULO */}
            <div
              style={{
                width: "35rem",
                height: "35rem",
                borderRadius: "50%",
                border: "2px solid rgba(255,255,255,0.1)",
                position: "absolute",
              }}
            ></div>

            {/* IMAGEN */}
          <img
  src="/public/kian-inicio.png"
  alt="Personaje"
  style={{
    width: "35rem",
    height: "35rem",
    objectFit: "cover",
    objectPosition: "top",
    borderRadius: "50%",
    position: "relative",
    zIndex: "2",
  }}
/>
          </div>
        </div>
      </section>

      {/* INFO NYKOR */}
      {mostrarInfo && <InfoNykor />}
    </>
  );
};