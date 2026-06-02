import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer
      style={{
        width: "100%",
        backgroundColor: "#050505",
        borderTop: "1px solid rgba(255,255,255,0.08)",
        padding: "5rem 0 2rem 0",
      }}
    >
      <div
        style={{
          width: "90%",
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >

        {/* PARTE SUPERIOR */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "4rem",
            flexWrap: "wrap",
            marginBottom: "4rem",
          }}
        >

          {/* IZQUIERDA */}
          <div
            style={{
              flex: "1",
              minWidth: "300px",
            }}
          >

            {/* LOGO */}
            <h2
              style={{
                color: "#FFFFFF",
                fontSize: "3rem",
                fontWeight: "900",
                letterSpacing: "0.3rem",
                marginBottom: "1.5rem",
              }}
            >
              NYKOR
            </h2>

            {/* TEXTO */}
            <p
              style={{
                color: "#8A8A8A",
                lineHeight: "2rem",
                maxWidth: "500px",
                fontSize: "1rem",
              }}
            >
              Historias oscuras, personajes complejos y mundos
              construidos para quienes buscan algo diferente.
              Nykor mezcla narrativa, arte y emoción en un mismo universo.
            </p>
          </div>

          {/* DERECHA */}
          <div
            style={{
              display: "flex",
              gap: "5rem",
              flexWrap: "wrap",
            }}
          >

            {/* NAVEGACION */}
            <div>

              <h3
                style={{
                  color: "#FFFFFF",
                  marginBottom: "1.5rem",
                  fontSize: "1.1rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.1rem",
                }}
              >
                Navegación
              </h3>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                }}
              >

                {/* INICIO */}
                <Link
                  to="/"
                  style={{
                    color: "#8A8A8A",
                    textDecoration: "none",
                  }}
                >
                  Inicio
                </Link>

                {/* COMICS */}
                <Link
                  to="/comic"
                  style={{
                    color: "#8A8A8A",
                    textDecoration: "none",
                  }}
                >
                  Comic
                </Link>

                {/* TIENDA */}
                <Link
                  to="/tienda"
                  style={{
                    color: "#8A8A8A",
                    textDecoration: "none",
                  }}
                >
                  Tienda
                </Link>

              </div>
            </div>

            {/* REDES */}
            <div>

              <h3
                style={{
                  color: "#FFFFFF",
                  marginBottom: "1.5rem",
                  fontSize: "1.1rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.1rem",
                }}
              >
                Contacto
              </h3>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                }}
              >

                {/* INSTAGRAM */}
                <a
                  href="https://www.instagram.com/nykorcomics/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "#8A8A8A",
                    textDecoration: "none",
                    transition: "0.3s",
                  }}
                >
                  Instagram
                </a>

                {/* TIKTOK */}
                <a
                  href="https://www.tiktok.com/@nykorcomics?lang=es-419"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "#8A8A8A",
                    textDecoration: "none",
                    transition: "0.3s",
                  }}
                >
                  TikTok
                </a>

                {/* CORREO */}
                <a
                  href="mailto:infonykor@gmail.com"
                  style={{
                    color: "#8A8A8A",
                    textDecoration: "none",
                    transition: "0.3s",
                  }}
                >
                  infonykor@gmail.com
                </a>

              </div>
            </div>
          </div>
        </div>

        {/* LINEA */}
        <div
          style={{
            width: "100%",
            height: "1px",
            backgroundColor: "rgba(255,255,255,0.08)",
            marginBottom: "2rem",
          }}
        ></div>

        {/* COPYRIGHT */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >

          <p
            style={{
              color: "#666666",
              margin: "0",
            }}
          >
            © 2026 Nykor. Todos los derechos reservados.
          </p>

          <p
            style={{
              color: "#666666",
              margin: "0",
            }}
          >
            Creado por Andrea Marín
          </p>
        </div>
      </div>
    </footer>
  );
};