import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route path="/login" element ={<LoginPage />} />
        </Routes>
      </div>
    </Router>
  );
}


export default App;
