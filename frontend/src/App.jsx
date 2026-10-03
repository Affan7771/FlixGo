import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import NotFound404 from './pages/NotFound404'
import Help from './pages/Help'
import Pricing from './pages/Pricing'

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/help" element={<Help />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="*" element={<NotFound404 />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App