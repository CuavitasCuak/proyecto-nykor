import React from "react";
import { Link } from "react-router-dom";

export const NavBarComic = () => {
  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{
        width: "100%",
        height: "11rem",
        backgroundColor: "#050505",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div
        className="container-fluid"
        style={{
          width: "90%",
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        {/* LOGO */}
        <div
          className="logo"
          style={{
            width: "8rem",
            display: "flex",
            alignItems: "center",
          }}
        >
          <img
            src="./logo-nykor.png"
            alt="Nykor"
            style={{
              width: "80%",
              objectFit: "contain",
            }}
          />
        </div>

        {/* BOTON RESPONSIVE */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{ backgroundColor: "#FFFFFF" }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* NAV LINKS */}
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarNav"
        >
          <ul
            className="navbar-nav align-items-center"
            style={{ gap: "2.5rem" }}
          >
            {/* INICIO */}
            <li className="nav-item">
              <Link
                to="/"
                className="nav-link"
                style={{
                  color: "rgba(255,255,255,0.65)",
                  fontWeight: "600",
                  fontSize: "1rem",
                  letterSpacing: "0.15rem",
                  textTransform: "uppercase",
                  textDecoration: "none",
                }}
              >
                INICIO
              </Link>
            </li>

            {/* COMIC */}
            <li className="nav-item">
              <Link
                to="/comic"
                className="nav-link"
                style={{
                  color: "#fff",
                  fontWeight: "600",
                  fontSize: "1rem",
                  letterSpacing: "0.15rem",
                  textTransform: "uppercase",
                  borderBottom: "2px solid #FFFFFF",
                  textDecoration: "none",
                }}
              >
                COMIC
              </Link>
            </li>

            {/* TIENDA */}
            <li className="nav-item">
              <Link
                to="/tienda"
                className="nav-link"
                style={{
                  color: "rgba(255,255,255,0.65)",
                  fontWeight: "600",
                  fontSize: "1rem",
                  letterSpacing: "0.15rem",
                  textTransform: "uppercase",
                  textDecoration: "none",
                }}
              >
                TIENDA
              </Link>
            </li>
          </ul>
        </div>

        {/* LOGIN */}
        <div className="d-flex align-items-center">
          <Link
            to="/login"
            style={{ textDecoration: "none" }}
          >
            <div
              style={{
                border: "1px solid rgba(255,255,255,0.25)",
                borderRadius: "0.9rem",
                padding: "0.8rem 1.5rem",
                display: "flex",
                alignItems: "center",
                gap: "0.8rem",
                color: "#FFFFFF",
                cursor: "pointer",
              }}
            >
              {/* ICONO */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6.75a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.118a7.5 7.5 0 0115 0"
                />
              </svg>

              <span
                style={{
                  fontSize: "0.95rem",
                  fontWeight: "600",
                  letterSpacing: "0.08rem",
                  textTransform: "uppercase",
                }}
              >
                Iniciar sesión
              </span>
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};