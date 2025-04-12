import React, { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from './pages/About'
import Contect from './pages/Contect'
import Home from './pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <React.StrictMode>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />}>
            <Route path='a' element={<Contect />} /> {/* nested route inside /about */}
          </Route>
          <Route path='/contect' element={<Contect />} />
        </Routes>
      </Router>
    </React.StrictMode>
  )
}

export default App
