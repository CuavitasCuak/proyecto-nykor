import React from 'react';

export const QuienesSomos = () => {
  return (
    <section
      id="nosotros"
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

        {/* IMAGEN */}
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
            src="/public/creador.jpeg"
            alt="Nosotros"
            style={{
              width: "75%",
              maxWidth: "500px",
              borderRadius: "2rem",
              objectFit: "cover",
              position: "relative",
              filter: "grayscale(100%)",
              zIndex: "2",
            }}
          />
        </div>

        {/* TEXTO */}
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
            Sobre Nykor
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
            Más que
            <br />
            un cómic.
          </h2>

          {/* TEXTO */}
          <p
            style={{
              color: "#8A8A8A",
              fontSize: "1.2rem",
              lineHeight: "2.2rem",
              maxWidth: "600px",
            }}
          >
            Andrea Marín es la creadora de Nykor, un universo narrativo inspirado en el miedo, la pérdida y las consecuencias del poder humano.
            A través de una estética oscura y cinematográfica, busca construir historias capaces de transmitir emociones reales, mezclando ilustración, narrativa y crítica social en un mismo mundo.
            Inspirada por el cine, los webtoons y la ciencia ficción psicológica.
          </p>
        </div>
      </div>
    </section>
  );
};