import React, { useState } from 'react';
import { SobreAndrea } from './SobreAndrea';

export const InfoNykor = () => {

  const [mostrarAndrea, setMostrarAndrea] = useState(false);

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
          padding: "8rem 0",
        }}
      >
        <div
          style={{
            width: "90%",
            maxWidth: "1400px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "5rem",
            flexWrap: "wrap",
          }}
        >

          {/* IZQUIERDA */}
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
                width: "25rem",
                height: "25rem",
                backgroundColor: "rgba(255,255,255,0.06)",
                borderRadius: "50%",
                filter: "blur(80px)",
                position: "absolute",
              }}
            ></div>

            {/* IMAGEN */}
            <img
              src="/public/logo-nykor-blanco.png"
              alt="Zorro"
              style={{
                width: "100%",
                maxWidth: "300px",
                position: "relative",
                zIndex: "2",
              }}
            />
          </div>

          {/* DERECHA */}
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
                marginBottom: "1.5rem",
              }}
            >
              ¿Qué es Nykor?
            </p>

            {/* TITULO */}
            <h2
              style={{
                color: "#FFFFFF",
                fontSize: "5rem",
                fontWeight: "900",
                lineHeight: "5rem",
                marginBottom: "2rem",
                textTransform: "uppercase",
              }}
            >
              Inteligencia
              <br />
              entre sombras.
            </h2>

            {/* TEXTO */}
            <p
              style={{
                color: "#8A8A8A",
                fontSize: "1.2rem",
                lineHeight: "2.2rem",
                maxWidth: "600px",
                marginBottom: "3rem",
              }}
            >
              Nykor representa inteligencia, misterio y adaptación.

              El nombre Nykor nace de la combinación de conceptos relacionados
              con la noche y la esencia interior.
              “Ny” representa la oscuridad, el misterio y lo desconocido, 
              mientras que “Kor” hace referencia al núcleo, la mente y la esencia
              que existe detrás de cada historia.

              
              <h2></h2>
              Juntos forman una identidad inspirada en mundos sombríos, emociones
              humanas y narrativas construidas desde las sombras.

              El zorro fue elegido como símbolo principal de la
              marca por representar astucia, estrategia e inteligencia.
              En muchas culturas, el zorro simboliza la capacidad de
              sobrevivir y adaptarse incluso en los escenarios más
              difíciles, algo que conecta directamente con la esencia
              de Nykor y sus historias.
            </p>

            {/* BOTON */}
            <button
              onClick={() => setMostrarAndrea(true)}
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
              Conoce más
            </button>

          </div>
        </div>
      </section>

      {/* APARECE SOLO AL DAR CLICK */}
      {mostrarAndrea && <SobreAndrea />}
    </>
  );
};