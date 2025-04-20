import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import Download from './pages/Download'
import Docs from './pages/Docs'

function App() {

  return (
    <React.StrictMode>
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />}></Route>
          <Route path='/docs' element={<Docs />}></Route>
          <Route path='/download' element={<Download />} />
        </Routes>
        <Footer />
      </Router>
    </React.StrictMode>
  )
}

export default App
