import './App.css';
import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './Component/Home'
import SignIn from './Component/SignIn'
import SignUp from './Component/SignUp'
import ForgotPassword from './Component/Forgotpassword';

import './App.css'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={< Home />} />
        {/* <Route path="navbar" element={<Navbar />} /> */}
        <Route path="signin" element={< SignIn />} />
        <Route path="signup" element={< SignUp />} />
        <Route path="forgotpassword" element={< ForgotPassword />} />
        

      </Routes>
    </BrowserRouter>

  )
}

