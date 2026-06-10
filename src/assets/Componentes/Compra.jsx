import React, { useState } from "react";

export const Compra = () => {
  const [hoverIndex, setHoverIndex] = useState(null);

  const productos = [
    {
      id: 1,
      nombre: "Libro",
      precio: "$40.000",
      img: "/libro.png",
    },
    {
      id: 2,
      nombre: "Sticker",
      precio: "$1.000",
      img: "/stiker.png",
    },
    {
      id: 3,
      nombre: "Personaje 3d",
      precio: "$80.000",
      video: "/3d.mp4", // 👈 video desde public
    },
  ];

  return (
    <section
      id="tienda"
      style={{
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "#050505",
        color: "#ffffff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: "80px",
        paddingBottom: "60px",
      }}
    >
      <div
        style={{
          width: "90%",
          maxWidth: "1200px",
          display: "flex",
          justifyContent: "center",
          gap: "60px",
          flexWrap: "wrap",
        }}
      >
        {productos.map((producto, index) => (
          <div
            key={producto.id}
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
            style={{
              width: "250px",
              backgroundColor: "#111",
              padding: "20px",
              borderRadius: "12px",
              textAlign: "center",
              position: "relative",
              transition: "transform 0.3s ease",
              transform: hoverIndex === index ? "scale(1.08)" : "scale(1)",
              cursor: "pointer",
              overflow: "hidden",
            }}
          >
            {/* MEDIA (IMG O VIDEO) */}
            {producto.video ? (
              <video
                src={producto.video}
                autoPlay
                muted
                loop
                playsInline
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "contain",
                  marginBottom: "15px",
                  boxShadow: "0 10px 25px rgba(0,0,0,0.4)",
                  borderRadius: "8px",
                }}
              />
            ) : (
              <img
                src={producto.img}
                alt={producto.nombre}
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "contain",
                  marginBottom: "15px",
                  boxShadow: "0 10px 25px rgba(0,0,0,0.4)",
                }}
              />
            )}

            <h3>{producto.nombre}</h3>
            <p>{producto.precio}</p>

            {/* OVERLAY HOVER */}
            {hoverIndex === index && (
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  backgroundColor: "rgba(0,0,0,0.85)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "15px",
                  textAlign: "center",
                  borderRadius: "12px",
                }}
              >
                <p style={{ fontSize: "14px", lineHeight: "1.4" }}>
                  Venta del artículo únicamente por redes sociales.
                  <br />
                  Esta tienda es una simulación para presentación.
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};