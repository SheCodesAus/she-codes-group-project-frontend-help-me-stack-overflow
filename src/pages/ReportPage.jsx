import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";

//Styles
// import "./ProgramPage.css"

// Components


// Data
// import { projectData } from "../data";


function ReportPage() {
// State
const [reportData, setReportData] = useState([]);

//Hooks useParams listens to the url, destruct the object, and I can grab the Id value. a path parameter
const {id} = useParams();


  //Action and Helpers

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}report/${id}`)
    .then((results) => {
    return results.json();
    })
    .then((data) => {
    setReportData(data);
    });
  }, [id]);

// Loading state
if (!reportData){
  return <h3>Loading project...</h3>;
}
console.log(reportData)
//Normal state
  return (
    <>
      <div className="spacer"></div>

      <div className="program-section">
        <h3>Classes:</h3>
        
        <div className="program-details">
         
          <div className="program-details-text">
              
              
              <p>What you will be studying:</p>
              
            
              <div>Location: {reportData.location}</div>
              
               
            
          </div>
            
        </div>

        
      </div>
     
      <div className="spacer2"></div>
    </>
  );
}

export default ReportPage;

