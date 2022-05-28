import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Styles
import "./App.css";

//components
import Nav from "./components/Nav/Nav";

//pages 
import HomePage from "./pages/HomePage";
import ProgramPage from "./pages/ProgramPage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />   
          <Route path="/programs/:id" element={<ProgramPage />} />    
          <Route path="/login" element ={<LoginPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
