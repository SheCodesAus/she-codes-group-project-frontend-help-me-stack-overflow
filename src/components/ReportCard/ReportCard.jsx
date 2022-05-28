
import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee,faAnchor,faComputer,faCode} from '@fortawesome/free-solid-svg-icons';


//styles
import "./ReportCard.css";

function ReportCard(props) {
    const { reportData } = props;
  return (
  
        <div className="report-card">
       
        <div to={`/report/${reportData.id}`}>
                
            <div className="report-card">
            
         
              <div className="card-content">
                
                <div className="first-row-wrapper">
                  <h3 className="location">{reportData.location}</h3>
            
                </div>
                
                <div className="info-card-wrapper">

                  <div className="card1-wrapper">
                    <div className="inner-wrapper">
                      <FontAwesomeIcon icon={faCoffee} />
                      <div className="card-text-label">Total attendance</div>
                      <div className="total">{reportData.total_attendance}</div>
                    </div>
                    
                    
                  </div>

                  <div className="card2-wrapper">
                    <div className="inner-wrapper">
                      <FontAwesomeIcon icon={faAnchor} />
                      <div className="card-text-label">Transition to tech</div>
                      <div className="total">{reportData.transition_to_tech}</div>
                    </div>
                    
                    
                  </div>

                  <div className="card3-wrapper">
                    <div className="inner-wrapper">
                      <FontAwesomeIcon icon={faComputer} /> 
                      <div className="card-text-label">Alumni to mentor</div>
                      <div className="total">{reportData.alumni_to_mentor}</div>
                    </div>
                  </div>

                  <div className="card4-wrapper">
                    <div className="inner-wrapper">
                      <FontAwesomeIcon icon={faCode} />
                      <div className="card-text-label">Coding languages:</div>
                      <div className="card-text-sml">{reportData.coding_languages}</div>
                    </div>
                    
                  </div>
                </div>
             
    
              </div>
              {/* <div className="card-text-sml"> {reportData.program_date}</div> */}
            </div>
        </div>
        </div>
  );
}

export default ReportCard;