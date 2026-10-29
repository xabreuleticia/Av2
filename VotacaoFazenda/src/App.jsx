import dadosJson from './data/participantes.js'
import { useState } from 'react'
import './App.css'
import './components/Header.jsx'

function App() {
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/votacao" element={<Votacao />} />
      <Route path="/resultado" element={<Resultado />} />
    </Routes>
  </BrowserRouter>
}

export default App
