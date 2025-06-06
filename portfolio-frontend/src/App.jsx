import { useState } from 'react'
import './App.css'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Skills } from './components/Skills'

function App() {

  return (
    <div className='flex flex-col min-h-screen bg-white'>
      <Header />
      <main>
        <Hero />
        <Skills />
      </main>
      <Footer />
    </div>
  )
}

export default App
