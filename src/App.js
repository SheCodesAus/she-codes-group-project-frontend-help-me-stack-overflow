import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


//Styles
import "./App.css";

//components
import Nav from "./components/Nav/Nav";

//pages 
import HomePage from "./pages/HomePage";
import ProgramPage from "./pages/ProgramPage";
import AdminPage from "./pages/AdminPages/AdminPage";

function App() {
  return (
    <Router>
      <div>
        <Nav />

        <Routes>
          <Route path="/" element={<HomePage />} />   
          <Route path="/programs/:id" element={<ProgramPage />} />
          <Route path="/admin" element={<AdminPage />}     />
        </Routes>
      </div>
    </Router>
  );
}

export default App;