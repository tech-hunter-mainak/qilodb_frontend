import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import Download from './pages/Download'
import Docs from './pages/Docs'
import ErrorPage from './pages/ErrorPage'

function App() {
  return (
    <React.StrictMode>
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/docs' element={<Docs />}></Route>
          <Route path='/download' element={<Download />} />
          <Route path='*' element={<ErrorPage statusCode={404} />} />
        </Routes>
        <Footer />
      </Router>
    </React.StrictMode>
  )
}

export default App
