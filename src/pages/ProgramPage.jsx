import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";

import together from "./image/together.jpeg";

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
    <div className="intro-section-wrapper" >
      <div className="intro-section">
        <div className="intro-text">
         <h2>Flash</h2>
         <div>{projectData.description}</div>
         
         <div className="detail_wrapper">
            <div className="in_line"> 
              <div className="p_lable">Location:</div>
              <div>{projectData.location}</div>
            </div>

            <div className="in_line">
              <div className="p_lable">Mentor:</div>
              <div>{projectData.mentors}</div>
            </div>

            <div className="in_line">
              <div className="p_lable">Program date:</div>
              <div>{projectData.date_created}</div>
            </div>
         </div>
         
        </div>
        {/* <img className="intro-image" width="px" src={ together } alt="togetherimg" /> */}
      </div>
    </div>

    
    <div className="intro-img-wrapper">
      <img className="intro-image" width="300px" src={ together } alt="togetherimg" />
    </div>

      <div className="spacer"></div>

      <div className="program-section">
      
        
        <div className="program-details">
         
          <div className="program-details-text">
              

              <div className="language_wrapper">
                <h2>Languages you'll be learning:</h2>
                <div>{projectData.coding_languages}</div>
              </div>

             
              <img className="project-img" src={projectData.image} alt="the project"/> 
               
            
          </div>
            
        </div>

        
      </div>
     
      <div className="spacer2"></div>
    </>
  );
}

export default ProgramPage;

