import { useState } from 'react'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Skills } from './components/Skills'
import { Contact } from './components/Contact'
import { About } from './components/About'
import { Projects } from './components/Projects'
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div className='min-h-screen bg-white'>
      <Header />
      <main>
        {/* <Routes>
          <Route to="/home" element={<Hero />} />
        </Routes>
        <Routes>
          <Route to="/home" element={<About />} />
        </Routes>
        <Routes>
          <Route to="/home" element={<Skills />} />
        </Routes>
        <Routes>
          <Route to="/home" element={<Projects />} />
        </Routes>
        <Routes>
          <Route to="/home" element={<Contact />} />
        </Routes> */}
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
