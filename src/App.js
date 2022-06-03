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
import StudentFormPage from "./pages/StudentFormPage";
import ReportFormPage from "./pages/ReportFormPage";
import ProgramFormPage from "./pages/ProgramFormPage";
import ProgramListPage from "./pages/ProgramListPage";


function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />    
          <Route path="/admin" element={<AdminPage />}     />
          <Route path="/login" element ={<LoginPage />} />
          <Route path="/programs" element={<ProgramListPage />} /> 
          <Route path="/programs/:id" element={<ProgramPage />} /> 
          <Route path="/program/create" element={<ProgramFormPage />} />  
          <Route path="/reports" element={<SponsorPage />} />  
          <Route path="/report/:id" element={<ReportPage />} />  
          <Route path="/report/create" element={<ReportFormPage />} />  
          <Route path="/student/create" element={<StudentFormPage />} />  


        </Routes>
      </div>
    </Router>
  );
}

export default App;
