
import React from "react";
import { Link } from "react-router-dom";

//styles
import "./ReportCard.css";

function ReportCard(props) {
    const { reportData } = props;
  return (
  
        <div className="report-card">
        <Link to={`/report/${reportData.id}`}>
                
            <div className="report-card">
         
              <div className="card-content">
                <div>Reports for</div>
                <h3 className="location">{reportData.location}</h3>
                <p className="title">Total attendance:</p>
                <div>{reportData.total_attendence}</div>
                <div className="program-date"> {reportData.program_date}</div>
              </div>
            </div>
        </Link>
        </div>
  );
}

export default ReportCard;