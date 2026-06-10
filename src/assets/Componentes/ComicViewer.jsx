import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export const ComicViewer = () => {
  const { capitulo } = useParams()
  const [show, setShow] = useState(false)

  useEffect(() => {
    setShow(false)

    const t = setTimeout(() => {
      setShow(true)
    }, 100)

    return () => clearTimeout(t)
  }, [capitulo])

  return (
    <div
      style={{
        background: "#050505",
        minHeight: "100vh",
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",

        opacity: show ? 1 : 0,
        transform: show ? "scale(1)" : "scale(1.03)",
        transition: "all 0.6s ease"
      }}
    >

      <h2>{capitulo}</h2>

      <div
        style={{
          width: "1000px",
          height: "563px",
          background: "#111",
          borderRadius: "1rem",
          marginTop: "2rem"
        }}
      >
        ESCENA AQUÍ (tu Lottie)
      </div>

    </div>
  )
}