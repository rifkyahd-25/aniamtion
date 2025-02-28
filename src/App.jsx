import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { NavBar } from "./components/NavBar";

import { All } from "./components/all";
import { Project } from "./page/Project";
import { Expiriance } from "./page/Expiriance";
import { Footer } from "./components/Footer";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/projects" element={<Project />} />
        <Route path="/all" element={<All />} />
        <Route path="/expirence" element={<Expiriance />} />
        {/* Add other routes as needed */}
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App; // Ensure this is the default export

// import React from "react"
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

// import { NavBar } from "./components/NavBar"
// import { Home } from "./components/Home"
// import { Project } from "./components/Project"
// import { About } from "./components/About"
// import { Whrtido } from "./components/Whrtido"

// function App() {
//   return (
//     <Router>
//       <NavBar/>

//       <Home/>
//       <Project/>
//       <About/>
//       <Whrtido/>
//       <Routes>

//         {/* Add other routes as needed */}
//       </Routes>
//     </Router>
//   )
// }

// export default App  // Ensure this is the default export
