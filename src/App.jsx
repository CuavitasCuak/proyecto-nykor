import { Routes, Route } from 'react-router-dom'

import { Home } from './assets/Componentes/Home'
import { Comic } from './assets/Componentes/Comic'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/comic" element={<Comic />} />
    </Routes>
  )
}

export default App