
import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import { NavBar } from "./components/NavBar"
import { Home } from "./components/Home"
import { Project } from "./components/Project"


function App() {
  return (
    <Router>
      <NavBar/>
      
      <Home/>
      <Project/>
      <Routes>
       
        {/* Add other routes as needed */}
      </Routes>
    </Router>
  )
}

export default App  // Ensure this is the default export
