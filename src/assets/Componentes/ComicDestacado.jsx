import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';

export const ComicDestacado = () => {

  const subRef = useRef(null);
  const titleRef = useRef(null);
  const typeRef = useRef(null);
  const descRef = useRef(null);
  const btnRef = useRef(null);
  const footerRef = useRef(null);

  useEffect(() => {

    const ctx = gsap.context(() => {

      const tl = gsap.timeline({
        repeat: -1,        // 🔁 infinito
        repeatDelay: 3,    // ⏱ pausa entre ciclos (ajústalo)
      });

      // 🔥 estado inicial (evita opacidad rara)
      gsap.set([
        subRef.current,
        titleRef.current,
        typeRef.current,
        descRef.current,
        btnRef.current,
        footerRef.current
      ], {
        opacity: 0,
        y: 25
      });

      // 🎬 animación en secuencia
      tl.to(subRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.6,
      })

      .to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
      }, "-=0.3")

      .to(typeRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.6,
      }, "-=0.4")

      .to(descRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
      }, "-=0.4")

      .to(btnRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.5,
      }, "-=0.3")

      .to(footerRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.5,
      }, "-=0.2");

    });

    return () => ctx.revert();

  }, []);

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
      <div style={{ width: "90%", maxWidth: "1400px" }}>

        {/* TITULO */}
        <div style={{ marginBottom: "5rem" }}>

          <p
            ref={subRef}
            style={{
              color: "#8A8A8A",
              letterSpacing: "0.4rem",
              textTransform: "uppercase",
              marginBottom: "1rem",
              willChange: "transform, opacity",
            }}
          >
            Universo actual
          </p>

          <h2
            ref={titleRef}
            style={{
              color: "#FFFFFF",
              fontSize: "5rem",
              fontWeight: "900",
              lineHeight: "5rem",
              textTransform: "uppercase",
              willChange: "transform, opacity",
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

          {/* IMAGEN */}
          <div style={{ flex: "1", minWidth: "320px" }}>
            <img
              src="/inicio.png"
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
            }}
          >

            <p
              ref={typeRef}
              style={{
                color: "#8A8A8A",
                letterSpacing: "0.3rem",
                textTransform: "uppercase",
                marginBottom: "1.5rem",
                willChange: "transform, opacity",
              }}
            >
              Comic principal
            </p>

            <h3 style={{
              color: "#FFFFFF",
              fontSize: "4rem",
              fontWeight: "900",
              lineHeight: "4rem",
              marginBottom: "2rem",
              textTransform: "uppercase",
            }}>
              El silencio
              <br />
              de Orien
            </h3>

            <p
              ref={descRef}
              style={{
                color: "#8A8A8A",
                fontSize: "1.15rem",
                lineHeight: "2rem",
                marginBottom: "3rem",
                maxWidth: "600px",
                willChange: "transform, opacity",
              }}
            >
              El silencio de Orien explora un mundo marcado por el miedo, la pérdida y las consecuencias del poder humano.
            </p>

            <Link
              ref={btnRef}
              to="/comic"
              style={{
                width: "fit-content",
                backgroundColor: "#FFFFFF",
                color: "#000000",
                padding: "1rem 2.2rem",
                borderRadius: "1rem",
                fontWeight: "700",
                textTransform: "uppercase",
                textDecoration: "none",
                display: "inline-block",
                willChange: "transform, opacity",
              }}
            >
              Explorar comic
            </Link>

            <p
              ref={footerRef}
              style={{
                color: "#555555",
                marginTop: "2rem",
                fontSize: "0.95rem",
                willChange: "transform, opacity",
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