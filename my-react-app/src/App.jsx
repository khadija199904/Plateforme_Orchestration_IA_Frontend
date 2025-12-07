import React from "react";
import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";
import Auth  from "./pages/auth/auth";
import Login from "./components/login";
import './App.css'

function App() {
  

  return (
   <div>
   <BrowserRouter>
   <Routes>
   <Route path="/" element={<Navigate to = "/auth" replace  />} />
   <Route path="/auth" element={<Auth/>} />
   <Route path="/Login" element={<Login/>} />
   </Routes>
   </BrowserRouter>
   </div>
  )
}

export default App
