// import React from "react";

// function HomePage() {
//     return <h1> This is the Home Page </h1>
// }

// export default HomePage

import React, {useState, useEffect} from "react";
import cupcakes from "./image/cupcakes.jpeg";
import ladies from "./image/ladies.jpeg";
import Purple from "./image/Purple.png";
import together from "./image/together.jpeg";

import {Link} from "react-router-dom";

// Components
import ProjectCard from "../components/ProgramCard/ProgramCard";

//styles
import "./HomePage.css";

// Data
// import { allProjects } from "../data";


function HomePage() {
//States
  const [projectList, setProjectList] = useState([]);

// Action & Helpers
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}programs`)
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        setProjectList(data);
      });
  }, []);

  return (
    <main>
    

    <div className="hero-banner-wrapper" >
        <div className="hero-banner">
                <div className="hero-banner-text">
                    <h1>Learn</h1>
                    <div className="rectangle"></div>
                    <p>We run three types of programs ranging from one day through to six month programs teaching technical skills.</p>
                    <div className="spacer1"></div>
                    <Link to="/projects/create" className="primary-button">Sign up today</Link>
                    
                </div>
                <img className="hero-image" width="px" src={ ladies } alt="bannerimg" />
            </div>
    </div>

    <div className="intro-section-wrapper" >
      <div className="intro-section">
        <div className="intro-text">
         <h1>A world of opportunity for everybody</h1>
         <div>
         We teach technical skills, build career pathways and inspire women to code.
         </div>
         
        </div>
        {/* <img className="intro-image" width="px" src={ together } alt="togetherimg" /> */}
      </div>
    </div>
    <div className="intro-img-wrapper">
      <img className="intro-image" width="300px" src={ together } alt="togetherimg" />
    </div>
     

    <div className="project-section-wrapper">
      <div className="project-section" >
        <div className="section-header">
            <h2>View our courses</h2>
        </div>
        <div className="project-list">
        {projectList.map((projectData) => {
          return (
            <ProjectCard
              key={`program-${projectData.id}`}
              projectData={projectData}
            />
          );
        })}
        </div>
      </div>
      
    </div>

    <div className="footer-section-wrapper" style={{ backgroundImage: `url(${Purple})` }} >
      <div className="footer-section">
        <div className="footer-left">
          <h3 className="footer-text">
            Contact us to discover more learning opportunities
          </h3>
          <div>info@shecodes.com.au</div>
            
        </div>
    
        <img className="footer-image" width="px" src={ ladies } alt="footerimg" />
      </div>
    </div>

    

    </main>
    
  );
}

export default HomePage;