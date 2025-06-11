import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar'
import Hero from './components/hero'
import Dashboard from './components/dashboard'

function App() {
   

  return (
    <>
       <Navbar />
       <Hero />
       <Dashboard  />
    </>
  )
}

export default App
