import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";

//Styles
import "./ProgramPage.css"

// Components



// Data
// import { projectData } from "../data";


function ProgramPage() {
// State
const [projectData, setProjectData] = useState([]);

//Hooks useParams listens to the url, destruct the object, and I can grab the Id value. a path parameter
const {id} = useParams();


  //Action and Helpers

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}programs/${id}`)
    .then((results) => {
    return results.json();
    })
    .then((data) => {
    setProjectData(data);
    });
  }, [id]);

// Loading state
if (!projectData){
  return <h3>Loading project...</h3>;
}
console.log(projectData)
//Normal state
  return (
    <>
      <div className="spacer"></div>

      <div className="pledge-section">
        <h3>Classes:</h3>
        
        <div className="pledge-details">
         
          <div className="pledge-details-text">
              
              <h3>{projectData.title}</h3>
              <p>What you will be studying:</p>
              <h3 className="description">{projectData.description}</h3>
              <div>Created at: {projectData.date_created}</div>
              <img className="project-img" src={projectData.image} alt="the project"/> 
              
            
          </div>
            
        </div>

        
      </div>
     
      <div className="spacer2"></div>
    </>
  );
}

export default ProgramPage;

