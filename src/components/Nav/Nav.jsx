// Imports
import React from "react";
import { Link, useNavigate } from "react-router-dom";

//styles
import "./Nav.css";

function Nav() {

     // Hooks
     const navigate = useNavigate();

     // Actions and Helpers
     const navigateToLogin = () => {
         navigate("/login")
     }
 
     const handleSignOut = () => {
         window.localStorage.removeItem("token")
         navigateToLogin()
     }
 
     const checkUser = () => {
         const isUserLoggedIn = !!window.localStorage.getItem("token");
         // console.log("isUserLoggedIn", isUserLoggedIn)
 
         return isUserLoggedIn
             ? <a href="logout" onClick={handleSignOut} className="button">Log out</a>
             : <a href="login" onClick={navigateToLogin} className="button">Log in</a>
     }

    return (
        <nav className="navbar">
            <div className="left-nav">
                <Link to="/">Home</Link>
                {/* <Link to="/program">Program</Link> */}
                <Link to="/reports">Sponsor reports</Link>
            </div>
            <button className="login-btn">{checkUser()}</button>
        </nav>
    );
}

export default Nav;