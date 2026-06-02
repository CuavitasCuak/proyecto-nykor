import React from 'react';
import { Link } from 'react-router-dom';

export const ComicDestacado = () => {
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
        }}
      >

        {/* TITULO */}
        <div
          style={{
            marginBottom: "5rem",
          }}
        >

          <p
            style={{
              color: "#8A8A8A",
              letterSpacing: "0.4rem",
              textTransform: "uppercase",
              marginBottom: "1rem",
            }}
          >
            Universo actual
          </p>

          <h2
            style={{
              color: "#FFFFFF",
              fontSize: "5rem",
              fontWeight: "900",
              lineHeight: "5rem",
              textTransform: "uppercase",
            }}
          >
            El silencio
            <br />
            de Orien.
          </h2>
        </div>

        {/* CARD */}
        <div
          style={{
            width: "100%",
            minHeight: "40rem",
            backgroundColor: "#0A0A0A",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "2rem",
            overflow: "hidden",
            display: "flex",
            flexWrap: "wrap",
            position: "relative",
          }}
        >

          {/* GLOW */}
          <div
            style={{
              width: "25rem",
              height: "25rem",
              backgroundColor: "rgba(255,255,255,0.05)",
              borderRadius: "50%",
              filter: "blur(100px)",
              position: "absolute",
              right: "10%",
              top: "10%",
            }}
          ></div>

          {/* IMAGEN */}
          <div
            style={{
              flex: "1",
              minWidth: "320px",
            }}
          >

            {/* AQUI VA EL TEASER */}
            <img
              src="/orien.jpg"
              alt="El silencio de Orien"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>

          {/* TEXTO */}
          <div
            style={{
              flex: "1",
              minWidth: "320px",
              padding: "4rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              position: "relative",
              zIndex: "2",
            }}
          >

            <p
              style={{
                color: "#8A8A8A",
                letterSpacing: "0.3rem",
                textTransform: "uppercase",
                marginBottom: "1.5rem",
              }}
            >
              Comic principal
            </p>

            <h3
              style={{
                color: "#FFFFFF",
                fontSize: "4rem",
                fontWeight: "900",
                lineHeight: "4rem",
                marginBottom: "2rem",
                textTransform: "uppercase",
              }}
            >
              El silencio
              <br />
              de Orien
            </h3>

            <p
              style={{
                color: "#8A8A8A",
                fontSize: "1.15rem",
                lineHeight: "2rem",
                marginBottom: "3rem",
                maxWidth: "600px",
              }}
            >
              El silencio de Orien explora un mundo marcado
              por el miedo, la pérdida y las consecuencias
              del poder humano.
              <h2></h2>
              A través de una narrativa oscura y cinematográfica,
              la historia sigue personajes atrapados en un universo
              donde sobrevivir significa enfrentarse a aquello
              que intentan ocultar.
            </p>

            {/* BOTON */}
            <Link
              to="/comic"
              style={{
                width: "fit-content",
                backgroundColor: "#FFFFFF",
                color: "#000000",
                border: "none",
                padding: "1rem 2.2rem",
                borderRadius: "1rem",
                fontWeight: "700",
                textTransform: "uppercase",
                letterSpacing: "0.08rem",
                cursor: "pointer",
                textDecoration: "none",
                display: "inline-block",
              }}
            >
              Explorar comic
            </Link>

            {/* TEXTO ABAJO */}
            <p
              style={{
                color: "#555555",
                marginTop: "2rem",
                fontSize: "0.95rem",
              }}
            >
              Próximamente más historias del Nykor.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};