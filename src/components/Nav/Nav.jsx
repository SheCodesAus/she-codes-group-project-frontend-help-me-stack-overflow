// Imports
import React from "react";
import { Link } from "react-router-dom";

//styles
import "./Nav.css";

function Nav() {
    return (
        <nav className="navbar">
            <div className="left-nav">
                <Link to="/">Home</Link>
                {/* <Link to="/program">Program</Link> */}
                <Link to="/reports">Sponsor reports</Link>
            </div>
            <button className="login-btn">Login</button>
        </nav>
    );
}

export default Nav;