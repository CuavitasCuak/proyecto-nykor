import { Link } from "react-router-dom"


export const ComicMenu = () => {
  return (
    <div style={wrap}>

      <h1 style={{ color: "#fff", marginBottom: "2rem" }}>
        COMIC
      </h1>

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
  background: "#050505",
  minHeight: "100vh",
  padding: "3rem"
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
  background: "#111",
  color: "#fff",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textDecoration: "none",
  borderRadius: "1rem",
  flexShrink: 0
}