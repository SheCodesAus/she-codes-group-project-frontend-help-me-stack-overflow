// import React from "react";

// function HomePage() {
//     return <h1> This is the Home Page </h1>
// }

// export default HomePage

import React, {useState, useEffect} from "react";

import {Link} from "react-router-dom";

// Components
import ProjectCard from "../components/ProgramCard/ProgramCard";

//styles
import "./HomePage.css";

// Data
// import { allProjects } from "../data";


function ProgramListPage() {
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
    

    <div className="project-section-wrapper">
      <div className="project-section" >
        <div className="section-header">
            <h2>Program List</h2>
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

    

    </main>
    
  );
}

export default ProgramListPage;