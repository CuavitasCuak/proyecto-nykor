import { Link } from "react-router-dom"

export const ComicMenu = () => {
  return (
    <div style={wrap}>

      <h1 style={title}>
        El silencio de Orien
      </h1>

      <p style={subtitle}>
        Selecciona un capítulo para comenzar la historia
      </p>

      <div style={carousel}>

        <Link to="/comic/prologo" style={card}>PRÓLOGO</Link>
        <Link to="/comic/capitulo1" style={card}>CAPÍTULO 1</Link>
        <Link to="/comic/capitulo2" style={card}>CAPÍTULO 2</Link>
        <Link to="/comic/capitulo3" style={card}>CAPÍTULO 3</Link>
        <Link to="/comic/capitulo4" style={card}>CAPÍTULO 4</Link>
        <Link to="/comic/capitulo5" style={card}>CAPÍTULO 5</Link>
        <Link to="/comic/capitulo6" style={card}>CAPÍTULO 6</Link>
        <Link to="/comic/capitulo7" style={card}>CAPÍTULO 7</Link>
        <Link to="/comic/capitulo8" style={card}>CAPÍTULO 8</Link>
        <Link to="/comic/capitulo9" style={card}>CAPÍTULO 9</Link>
        <Link to="/comic/capitulo10" style={card}>CAPÍTULO 10</Link>
        <Link to="/comic/capitulo11" style={card}>CAPÍTULO 11</Link>
        <Link to="/comic/capitulo12" style={card}>CAPÍTULO 12</Link>
        <Link to="/comic/capitulo13" style={card}>CAPÍTULO 13</Link>
        <Link to="/comic/capitulo14" style={card}>CAPÍTULO 14</Link>

      </div>

    </div>
  )
}

const wrap = {
  background: "radial-gradient(circle at top, #111 0%, #050505 60%)",
  minHeight: "100vh",
  padding: "3rem",
  color: "#fff",
  fontFamily: "Arial, sans-serif"
}

const title = {
  fontSize: "3rem",
  letterSpacing: "4px",
  textAlign: "center",
  marginBottom: "0.5rem",
  textShadow: "0 0 20px rgba(255,255,255,0.15)"
}

const subtitle = {
  textAlign: "center",
  color: "#aaa",
  marginBottom: "2.5rem"
}

const carousel = {
  display: "flex",
  gap: "2rem",
  overflowX: "auto",
  paddingBottom: "1rem",
  scrollBehavior: "smooth"
}

const card = {
  minWidth: "250px",
  height: "350px",
  background: "linear-gradient(145deg, #1a1a1a, #0d0d0d)",
  color: "#fff",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textDecoration: "none",
  borderRadius: "1.2rem",
  flexShrink: 0,
  fontSize: "1.3rem",
  fontWeight: "bold",
  letterSpacing: "2px",
  boxShadow: "0 10px 30px rgba(0,0,0,0.6)",
  transition: "all 0.3s ease",
  border: "1px solid rgba(255,255,255,0.05)",
  cursor: "pointer"
}

// 👇 efecto hover (inline hack con onMouseEnter/Leave si quieres luego lo mejoramos)