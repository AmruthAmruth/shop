import React from 'react'

import './App.css'
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import Home from './Pages/Home'


function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home/>} />
      </Routes>
    </BrowserRouter>

    </div>
  )
}

export default App
