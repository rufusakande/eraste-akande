// main.jsx - Complete configuration with default translation to English
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './assets/CSS/StylesGenerales.css'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Skills from './Pages/Skills'
import Portfolio from './Pages/Portfolio'
import Training from './Pages/Training'
import Consulting from './Pages/Consulting'
import Solutions from './Pages/Solutions'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Router basename='/eraste-akande'>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/services/training' element={<Training/>} />
            <Route path='/services/consulting' element={<Consulting/>} />
            <Route path='/services/solution' element={<Solutions/>} />
            <Route path='/skills' element={<Skills/>} />
            <Route path='/portfolio' element={<Portfolio/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='*' element={<div>Page not available</div>} />
          </Routes>
      </Router>
  </StrictMode>,
)