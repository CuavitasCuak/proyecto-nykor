import React from 'react';

export const SobreAndrea = () => {
  return (
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

        {/* TEXTO */}
        <div
          style={{
            flex: "1",
            minWidth: "320px",
          }}
        >

          <p
            style={{
              color: "#8A8A8A",
              letterSpacing: "0.4rem",
              textTransform: "uppercase",
              marginBottom: "1.5rem",
            }}
          >
            Sobre Andrea
          </p>

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
            La mente
            <br />
            detrás de Nykor.
          </h2>

          <p
            style={{
              color: "#8A8A8A",
              fontSize: "1.2rem",
              lineHeight: "2.2rem",
              maxWidth: "600px",
            }}
          >
            Andrea Marín es la creadora de Nykor, un universo
            narrativo inspirado en el miedo, la pérdida y las
            consecuencias del poder humano.

            A través de una estética oscura y cinematográfica,
            busca construir historias capaces de transmitir emociones
            reales, mezclando ilustración, narrativa y crítica social
            en un mismo mundo.

            Inspirada por el cine, los webtoons y la ciencia ficción
            psicológica, Andrea desarrolla personajes complejos y
            escenarios intensos que reflejan los conflictos humanos
            desde una visión más emocional y artística.
          </p>
        </div>

        {/* FOTO */}
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
            alt="Andrea"
            style={{
              width: "30rem",
              height: "30rem",
              objectFit: "cover",
              objectPosition: "top",
              borderRadius: "50%",
              filter: "grayscale(100%)",
              position: "relative",
              zIndex: "2",
            }}
          />
        </div>

      </div>
    </section>
  );
};