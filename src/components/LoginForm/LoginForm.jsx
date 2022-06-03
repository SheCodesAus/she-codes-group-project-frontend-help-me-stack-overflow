import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./LoginForm.css";

 function LoginForm() {
   // State
   const [credentials, setCredentials] = useState({
     username: "",
     password: "",
   });

   // Hooks
   const navigate = useNavigate();

   // Actions and Helpers
   const handleChange = (event) => {
     const { id, value } = event.target;
     setCredentials((prevCredentials) => ({
       ...prevCredentials,
       [id]: value,
     }));
   };

   const handleSubmit = async (event) => {
     event.preventDefault();
     if (credentials.username && credentials.password) {
       try {
         const response = await fetch(
           `${process.env.REACT_APP_API_URL}api-token-auth/`,
           {
             method: "post",
             headers: {
               "Content-Type": "application/json",
             },
             body: JSON.stringify(credentials),
           }
         );
         const data = await response.json();
         console.log("data", data);
         window.localStorage.setItem("token", data.token);
         window.localStorage.setItem("username", credentials.username);
         navigate("/admin");
       } catch (err) {
         console.log(err);
       }
     }
   };

   return (
     <form>
       <div className="login">
         <h1>Login</h1>
         <label htmlFor="username"> Username:</label>
         <input className="text-input"
           type="text"
           id="username"
           placeholder="Enter username"
           onChange={handleChange}
         />
       </div>
       <div className="login">
         <label htmlFor="password">Password:</label>
         <input className="text-input" 
           type="password"
           id="password"
           placeholder="Password"
           onChange={handleChange}
         />
         <br></br>
         <button className="login-button" type="submit" onClick={handleSubmit}>
           Login
         </button>
         <hr/>
                
         <button className="submit-btn" ><Link to="/">Return to Home</Link></button>
         <button className="submit-btn" ><Link to="/admin">Admin</Link></button>

       </div>
     </form>
   );
  
 }

 export default LoginForm; 