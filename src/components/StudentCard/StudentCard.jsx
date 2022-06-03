
import React from "react";
import { Link } from "react-router-dom";

//styles
import "./StudentCard.css";

function studentCard(props) {
    const { studentData } = props;
  return (
  
        <div className="student-card">
        <Link to={`/student/${studentData.id}`}>            
            
            <div className="student-section">
         
              <div className="card-info">
                <h3>{studentData.name}</h3>
                <div className="location">{studentData.location}</div>
                <p className="title">What you'll learn:</p>
                <div className="description"> {studentData.biography}</div>
              </div>
            </div>
        </Link>
        </div>
  );
}

export default studentCard;