import { useState } from "react";

function Producto({ src, precio, nombre }) {
  let [hover, setHover] = useState(false);

  return (
    <div
      style={{ position: "relative", width: "230px", cursor: "pointer" }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img src={src} style={{ width: "230px", display: "block", borderRadius: "6px" }} />

      {hover && (
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.7)", color: "#fff", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", borderRadius: "6px" }}>
          <p style={{ margin: "0 0 10px 0", fontSize: "14px", textAlign: "center" }}>
            {precio}<br />{nombre}
          </p>
          <button style={{ background: "#A01519", border: "none", padding: "6px 14px", color: "#fff", fontSize: "13px", borderRadius: "4px", cursor: "pointer" }}>
            Agregar a 🛒
          </button>
        </div>
      )}
    </div>
  );
}

export function Compra() {
  return (
    <>
      <div style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 40px", boxSizing: "border-box" }}></div>

      <div style={{ width: "100%", display: "flex", justifyContent: "flex-start", alignItems: "center", padding: "10px 40px", gap: "10px", boxSizing: "border-box" }}>
        <img src="/carro.png" style={{ width: "2rem" }} />
        <p style={{ margin: 0, fontSize: "14px", fontWeight: "bold" }}>Carro de compras</p>
      </div>

      <p style={{ textAlign: "center", marginTop: "20px", fontSize: "14px", width: "90%", maxWidth: "600px", marginLeft: "auto", marginRight: "auto" }}>
        Aquí encontrarás productos que materializan nuestra historia.<br />
        Cada artículo fue creado para habitar entre la realidad y lo simbólico.
      </p>

      <div style={{ display: "flex", justifyContent: "center", gap: "70px", marginTop: "40px", flexWrap: "wrap" }}>
        <Producto src="/sueter.png" precio="$ 120.000 COP" nombre="Buzo Visumbrio" />
        <Producto src="/mug.png" precio="$ 35.000 COP" nombre="Taza Visumbrio" />
      </div>

      <div style={{ display: "flex", justifyContent: "center", gap: "60px", flexWrap: "wrap", marginTop: "50px" }}>
        <Producto src="/agenda.png" precio="$ 50.000 COP" nombre="Agenda Visumbrio" />
        <Producto src="/tote.png" precio="$ 40.000 COP" nombre="Tote Bag Visumbrio" />
      </div>
    </>
  );
}
