import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './assets/css/style.scss'

import Nav from './components/nav/nav'
import Home from './page/home/home'
import About from './page/about/about'
import Services from './page/services/services'
import Team from './page/team/team'
import Footer from './components/footer/footer'
import Contact from './page/contact/contact'
import ScrollToTop from './components/scrollToTop'

function App() {

  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
