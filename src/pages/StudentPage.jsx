// import React from "react";

// function HomePage() {
//     return <h1> This is the Home Page </h1>
// }

// export default HomePage

import React, {useState, useEffect} from "react";

import {Link} from "react-router-dom";

// Components
// import ProjectCard from "../components/ProgramCard/ProgramCard";
import studentCard from "../components/StudentCard/StudentCard";

//styles
import "./HomePage.css";

// Data
// import { allProjects } from "../data";


function StudentPage() {
//States
  const [studentList, setStudentList] = useState([]);

// Action & Helpers
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}student`)
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        setStudentList(data);
      });
  }, []);

  return (
    <main>
    

    <div className="project-section-wrapper">
      <div className="project-section" >
        <div className="section-header">
            <h2>Student List</h2>
        </div>
        <div className="project-list">
        {studentList.map((studentData) => {
          return (
            <studentCard
              key={`student-${studentData.id}`}
              projectData={studentData}
            />
          );
        })}
        </div>
      </div>
      
    </div>  

    

    </main>
    
  );
}

export default StudentPage;