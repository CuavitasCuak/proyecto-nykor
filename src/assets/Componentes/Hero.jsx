import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { InfoNykor } from './InfoNykor';

export const Hero = () => {

  const [mostrarInfo, setMostrarInfo] = useState(false);
  const [mostrarArchivos, setMostrarArchivos] = useState(false);

  const textoRef = useRef(null);
  const kianRef = useRef(null);
  const botonInfoRef = useRef(null);

  useEffect(() => {

    const ctx = gsap.context(() => {

      const tl = gsap.timeline();

      tl.from(textoRef.current.children, {
        y: 80,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power4.out",
      });

      tl.from(
        kianRef.current,
        {
          scale: 1.1,
          duration: 1.2,
          ease: "power4.out",
        },
        "-=0.7"
      );

      gsap.to(kianRef.current, {
        y: -18,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

    });

    return () => ctx.revert();

  }, []);

  const abrirInfo = () => {
    gsap.to(botonInfoRef.current, {
      scale: 0.92,
      duration: 0.15,
      yoyo: true,
      repeat: 1,
      ease: "power2.out",
      onComplete: () => {
        setMostrarInfo(true);
      }
    });
  };

  const toggleArchivos = () => {
    setMostrarArchivos((prev) => !prev);
  };

  const itemStyle = {
    display: "flex",
    alignItems: "center",
    gap: "0.8rem",
    padding: "0.9rem 1rem",
    color: "#fff",
    textDecoration: "none",
    borderRadius: "0.7rem",
    borderBottom: "1px solid rgba(255,255,255,0.06)",
    cursor: "pointer",
  };

  const iconStyle = {
    width: "32px",
    height: "32px",
    objectFit: "contain",
    flexShrink: 0,
  };

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
          overflow: "visible",
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
            ref={textoRef}
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
                fontSize: "0.9rem",
                marginBottom: "1.5rem",
              }}
            >
              Universo narrativo cinematográfico
            </p>

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

            <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>

              {/* BOTÓN ARCHIVOS */}
              <div style={{ position: "relative" }}>

                <button
                  onClick={toggleArchivos}
                  style={{
                    backgroundColor: "#FFFFFF",
                    color: "#000",
                    border: "none",
                    padding: "1rem 2.2rem",
                    borderRadius: "1rem",
                    fontWeight: "700",
                    textTransform: "uppercase",
                    letterSpacing: "0.08rem",
                    cursor: "pointer",
                  }}
                >
                  Explorar archivos
                </button>

                {mostrarArchivos && (
                  <div
                    style={{
                      position: "absolute",
                      top: "110%",
                      left: 0,
                      width: "260px",
                      backgroundColor: "#0f0f0f",
                      border: "1px solid rgba(255,255,255,0.08)",
                      borderRadius: "1rem",
                      padding: "0.5rem",
                      zIndex: 9999,
                      boxShadow: "0 20px 50px rgba(0,0,0,0.6)",
                    }}
                  >

                    {/* BOOK */}
                    <a
                      href="/book.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={itemStyle}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.backgroundColor =
                          "rgba(255,255,255,0.05)")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.backgroundColor =
                          "transparent")
                      }
                    >
                      <img src="/book.png" alt="Book" style={iconStyle} />
                      <span>Book</span>
                    </a>

                    {/* MANUAL */}
                    <a
                      href="/guia-manual.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={itemStyle}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.backgroundColor =
                          "rgba(255,255,255,0.05)")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.backgroundColor =
                          "transparent")
                      }
                    >
                      <img src="/manual.png" alt="Manual" style={iconStyle} />
                      <span>Manual de marca</span>
                    </a>

                    {/* REVISTA */}
                    <a
                      href="https://indd.adobe.com/view/5205938d-4e89-4f01-b221-8e19951ab34a"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ ...itemStyle, borderBottom: "none" }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.backgroundColor =
                          "rgba(255,255,255,0.05)")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.backgroundColor =
                          "transparent")
                      }
                    >
                      <img src="/revista.png" alt="Revista" style={iconStyle} />
                      <span>Revista Nykor</span>
                    </a>

                  </div>
                )}

              </div>

              {/* BOTÓN INFO */}
              <button
                ref={botonInfoRef}
                onClick={abrirInfo}
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
              alignItems: "center",
            }}
          >
            <img
              ref={kianRef}
              src="/Kian-inicio.png"
              alt="Personaje"
              style={{
                width: "38rem",
                height: "38rem",
                maxWidth: "100%",
                objectFit: "cover",
                objectPosition: "top",
                borderRadius: "50%",
                userSelect: "none",
                pointerEvents: "none",
                boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
              }}
            />
          </div>

        </div>
      </section>

      {mostrarInfo && <InfoNykor />}
    </>
  );
};