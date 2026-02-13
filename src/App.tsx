import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Index from './pages/Index'
import Login from './pages/Login'

function App() {

  return (
      <BrowserRouter>
    {/* <ScrollToTop /> */}
      <Routes>
         <Route path="/" element={<Index />} />
         <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}


export default App
