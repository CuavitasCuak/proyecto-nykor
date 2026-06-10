import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const cardRef = useRef(null);
  const tituloRef = useRef(null);
  const formRef = useRef(null);

  const navigate = useNavigate();

  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      cardRef.current,
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 0.8, ease: "power2.out" }
    )
      .fromTo(
        tituloRef.current,
        { y: -30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        "-=0.3"
      )
      .fromTo(
        formRef.current.children,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.15, duration: 0.5 },
        "-=0.2"
      );
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!usuario || !password) {
      alert("Completa todos los campos");
      return;
    }

    alert(`Bienvenido, ${usuario}`);

    navigate("/");
  };

  return (
    <section
      style={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #050505, #111)",
        color: "white",
      }}
    >
      <div
        ref={cardRef}
        style={{
          width: "40vh",
          padding: "5vh",
          borderRadius: "2vh",
          backgroundColor: "#0d0d0d",
          boxShadow: "0 2vh 6vh rgba(0,0,0,0.6)",
          textAlign: "center",
        }}
      >
        <h2
          ref={tituloRef}
          style={{
            marginBottom: "4vh",
            fontSize: "3.5vh",
            letterSpacing: "0.2vh",
          }}
        >
          Iniciar sesión
        </h2>

        <form ref={formRef} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Usuario"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
            style={{
              width: "100%",
              padding: "1.5vh",
              marginBottom: "2vh",
              borderRadius: "1vh",
              border: "none",
              outline: "none",
            }}
          />

          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              width: "100%",
              padding: "1.5vh",
              marginBottom: "3vh",
              borderRadius: "1vh",
              border: "none",
              outline: "none",
            }}
          />

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "1.5vh",
              borderRadius: "1vh",
              border: "none",
              cursor: "pointer",
              background: "#ffffff",
              color: "#000",
              fontWeight: "bold",
            }}
          >
            Entrar
          </button>
        </form>
      </div>
    </section>
  );
};