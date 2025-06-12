import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar'
import Hero from './components/hero'
import Dashboard from './components/dashboard'
import Framer from './components/framer'
import Feature1 from './components/feature1'
import Feature2 from './components/feature2'

function App() {
   

  return (
    <>
       <Navbar />
       <Hero />
       <Dashboard  />
       <Framer />
       <Feature1 />
       <Feature2 />
    </>
  )
}

export default App
