import { Routes, Route } from "react-router-dom"
import { Login } from "./assets/Componentes/Login";
import { Home } from "./assets/Componentes/Home"
import { Comic } from "./assets/Componentes/Comic"
import { Tienda } from "./assets/Componentes/Tienda"
import { Prologo } from "./assets/Componentes/Prologo"
import { Capitulo1 } from "./assets/Componentes/Capitulo1"
import { Capitulo2 } from "./assets/Componentes/Capitulo2"
import { Capitulo3 } from "./assets/Componentes/Capitulo3"
import { Capitulo4 } from "./assets/Componentes/Capitulo4"
import { Capitulo5 } from "./assets/Componentes/Capitulo5"
import { Capitulo6 } from "./assets/Componentes/Capitulo6"
import { Capitulo7 } from "./assets/Componentes/Capitulo7"
import { Capitulo8 } from "./assets/Componentes/Capitulo8"
import { Capitulo9 } from "./assets/Componentes/Capitulo9"
import { Capitulo10 } from "./assets/Componentes/Capitulo10"
import { Capitulo11 } from "./assets/Componentes/Capitulo11"
import { Capitulo12 } from "./assets/Componentes/Capitulo12"
import { Capitulo13 } from "./assets/Componentes/Capitulo13"
import { Capitulo14 } from "./assets/Componentes/Capitulo14"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/comic" element={<Comic />} />
      <Route path="/login" element={<Login />} />

      <Route path="/tienda" element={<Tienda />} />

      {/* CAPÍTULOS */}
      <Route path="/comic/Prologo" element={<Prologo />} />
      <Route path="/comic/capitulo1" element={<Capitulo1 />} />
      <Route path="/comic/capitulo2" element={<Capitulo2 />} />
      <Route path="/comic/capitulo3" element={<Capitulo3 />} />
      <Route path="/comic/capitulo4" element={<Capitulo4 />} />
      <Route path="/comic/capitulo5" element={<Capitulo5 />} />
      <Route path="/comic/capitulo6" element={<Capitulo6 />} />
      <Route path="/comic/capitulo7" element={<Capitulo7 />} />
      <Route path="/comic/capitulo8" element={<Capitulo8 />} />
      <Route path="/comic/capitulo9" element={<Capitulo9 />} />
      <Route path="/comic/capitulo10" element={<Capitulo10 />} />
      <Route path="/comic/capitulo11" element={<Capitulo11 />} />
      <Route path="/comic/capitulo12" element={<Capitulo12 />} />
      <Route path="/comic/capitulo13" element={<Capitulo13 />} />
      <Route path="/comic/capitulo14" element={<Capitulo14 />} />
    </Routes>
  )
}

export default App