import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Index from './pages/Index'

function App() {

  return (
      <BrowserRouter>
    {/* <ScrollToTop /> */}
      <Routes>
         <Route path="/" element={<Index />} />
      </Routes>
    </BrowserRouter>
  )
}


export default App
