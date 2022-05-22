
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
                <div className="info-card-wrapper">
                  <div className="card1-wrapper">
                    <div className="total">{reportData.total_attendance}</div>
                    <div className="card-text-label">Total attendance</div>
                    
                  </div>

                  <div className="card2-wrapper">
                    <div className="total">{reportData.transition_to_tech}</div>
                    <div className="card-text-label">Transition to tech</div>
                    
                  </div>

                  <div className="card3-wrapper">
                    <div className="total">{reportData.alumni_to_mentor}</div>
                    <div className="card-text-label">Alumni to mentor</div>
                    
                  </div>

                  <div className="card4-wrapper">
                    <div className="card-text-label">Coding languages:</div>
                    <div className="card-text-sml">{reportData.coding_languages}</div>
                  </div>
                </div>
             
               
                <div className="card-text-sml"> {reportData.program_date}</div>
                
              </div>
            </div>
        </Link>
        </div>
  );
}

export default ReportCard;