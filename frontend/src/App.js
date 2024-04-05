import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './Component/Home'
import SignIn from './Component/SignIn'
import SignUp from './Component/SignUp'
import './App.css'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={< Home />} />
        <Route path="signin" element={< SignIn />} />
        <Route path="signup" element={< SignUp />} />
      </Routes>
    </BrowserRouter>

  )
}

