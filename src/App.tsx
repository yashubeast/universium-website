import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.tsx'
import ScrollToTop from './components/ScrollToTop.tsx'
import Home from './pages/Home.tsx'
import About from './pages/About.tsx'
import Equity from './pages/Equity.tsx'
import Manifesto from './pages/Manifesto.tsx'
import Whitepaper from './pages/Whitepaper.tsx'

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path = "/" element = {<Home />} />
        <Route path = "/about" element = {<About />} />
        <Route path = "/equity" element = {<Equity />} />
        <Route path = "/manifesto" element = {<Manifesto />} />
        <Route path = "/whitepaper" element = {<Whitepaper />} />
      </Routes>
    </>
  )
}

export default App
