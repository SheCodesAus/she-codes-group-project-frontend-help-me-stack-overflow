import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


//Styles
import "./App.css";

//components
import Nav from "./components/Nav/Nav";

//pages 
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Router>
      <div>
        <Nav />

        <Routes>
          <Route path="/" element={<HomePage />} />        
        </Routes>
      </div>
    </Router>
  );
}

export default App;