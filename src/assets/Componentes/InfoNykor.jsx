import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { SobreAndrea } from './SobreAndrea';

export const InfoNykor = () => {

  const [mostrarAndrea, setMostrarAndrea] = useState(false);

  const textoRef = useRef(null);
  const logoRef = useRef(null);
  const botonRef = useRef(null);

  useEffect(() => {

    const ctx = gsap.context(() => {

      const tl = gsap.timeline();

      // Entrada logo
      tl.from(logoRef.current, {
        scale: 0.7,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
      });

      // Entrada texto
      tl.from(textoRef.current.children, {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
      }, "-=0.6");

    });

    return () => ctx.revert();

  }, []);

  const abrirAndrea = () => {
    gsap.to(botonRef.current, {
      scale: 0.92,
      duration: 0.15,
      yoyo: true,
      repeat: 1,
      ease: "power2.out",
      onComplete: () => {
        setMostrarAndrea(true);
      }
    });
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
            <div
              style={{
                width: "25rem",
                height: "25rem",
                backgroundColor: "rgba(255,255,255,0.06)",
                borderRadius: "50%",
                filter: "blur(80px)",
                position: "absolute",
              }}
            />

            <img
              ref={logoRef}
              src="/logo-nykor-blanco.png"
              alt="Nykor Logo"
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
                marginBottom: "1.5rem",
              }}
            >
              ¿Qué es Nykor?
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
              Inteligencia
              <br />
              entre sombras.
            </h2>

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
              con la noche y la esencia interior. “Ny” representa la oscuridad,
              el misterio y lo desconocido, mientras que “Kor” hace referencia
              al núcleo, la mente y la esencia detrás de cada historia.

              Juntos forman una identidad inspirada en mundos sombríos,
              emociones humanas y narrativas construidas desde las sombras.

              El zorro fue elegido como símbolo principal por representar
              astucia, estrategia e inteligencia, conectando con la esencia
              de Nykor.
            </p>

            <button
              ref={botonRef}
              onClick={abrirAndrea}
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