
import React from "react";
import { Link } from "react-router-dom";

//styles
import "./ProgramCard.css";

function ProjectCard(props) {
    const { projectData } = props;
  return (
  
        <div className="project-card">
        <Link to={`/programs/${projectData.id}`}>
            
            <img src={projectData.image} alt="the project"/>
            <div className="student-section">
         
              <div className="card-content">
                <h3>{projectData.title}</h3>
                <div className="location">{projectData.location}</div>
                <p>Course description:</p>
                <div className="description"> {projectData.description}</div>
              </div>
            </div>
        </Link>
        </div>
  );
}

export default ProjectCard;