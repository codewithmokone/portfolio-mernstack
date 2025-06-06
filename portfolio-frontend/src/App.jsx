import { useState } from 'react'
import './App.css'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'

function App() {

  return (
    <div className='flex flex-col min-h-screen bg-white'>
      <Header />
      <main>
        <Hero />
      </main>
      <Footer />
    </div>
  )
}

export default App
