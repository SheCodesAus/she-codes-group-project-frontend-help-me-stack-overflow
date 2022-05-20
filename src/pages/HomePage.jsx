// import React from "react";

// function HomePage() {
//     return <h1> This is the Home Page </h1>
// }

// export default HomePage

import React, {useState, useEffect} from "react";
import cupcakes from "./image/cupcakes.jpeg";

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
    <div className="hero-banner-wrapper">
        <div className="hero-banner">
                <div className="hero-banner-text">
                    <h1>Learn</h1>
                    <div className="rectangle"></div>
                    <p>We run three types of programs ranging from one day through to six month programs teaching technical skills.</p>
                    <div className="spacer1"></div>
                    <Link to="/projects/create" className="primary-button">Sign up today</Link>
                    
                </div>
                <img className="hero-image" width="px" src={ cupcakes } alt="bannerimg" />
            </div>
    </div>
    


      <div className="project-section">
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
      

    </main>
    
  );
}

export default HomePage;