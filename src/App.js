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

import LoginPage from "./pages/LoginPage";
import SponsorPage from "./pages/SponsorPage";
import ReportPage from "./pages/ReportPage";


function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />    
          <Route path="/admin" element={<AdminPage />}     />
          <Route path="/login" element ={<LoginPage />} />
          <Route path="/programs/:id" element={<ProgramPage />} /> 
          <Route path="/reports" element={<SponsorPage />} />  
          <Route path="/report/:id" element={<ReportPage />} />  

        </Routes>
      </div>
    </Router>
  );
}

export default App;
