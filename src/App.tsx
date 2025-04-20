import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import Footer from './components/Footer'

function App() {

  return (
    <React.StrictMode>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />}>
            <Route path='a' element={<Home />} /> {/* nested route inside /about */}
          </Route>
          <Route path='/contect' element={<Home />} />
        </Routes>
      </Router>
      <Footer />
    </React.StrictMode>
  )
}

export default App
