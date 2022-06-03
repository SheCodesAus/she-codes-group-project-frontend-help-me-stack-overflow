
import React, {useState, useEffect} from "react";

import {Link} from "react-router-dom";
import lady from "./image/lady.webp";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee,faAnchor,faComputer,faCode, faSailboat} from '@fortawesome/free-solid-svg-icons';
// Components

import ReportCard from "../components/ReportCard/ReportCard";

//styles
import "./SponsorPage.css";


function SponsorPage() {
//States
  const [reportList, setReportList] = useState([]);

// Action & Helpers
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}reports`)
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        setReportList(data);
      });
  }, []);

  return (
    <main>
  
      <div className="report-section">
        <div className="section-header">
        <div className="hero-banner-wrapper">
        <div className="hero-banner">
                <div className="hero-banner-text">
                    <h1>Reports</h1>
                    <div className="rectangle"></div>
                    <p>Reports for sponsors</p>
                    <div className="spacer1"></div>
                    {/* <Link to="/projects/create" className="primary-button">Sign up today</Link> */}
                    
                </div>
                <img className="hero-image2" width="200px" src={ lady } alt="bannerimg" />
            </div>
        </div>
            
        </div>
        <div className="spacer1"></div>

        <div className="card-coded">
          <div className="card-content">
                  
                  <div className="first-row-wrapper">
                    <h3 className="location">Perth</h3>
              
                  </div>
                  
                  <div className="info-card-wrapper">

                    <div className="card0-wrapper">
                      <div className="inner-wrapper">
                        <FontAwesomeIcon icon={faSailboat} />
                        <div className="card-text-label">Program</div>
                        <div className="total">She Codes Plus</div>
                      </div> 
                    </div>

                    <div className="card1-wrapper">
                      <div className="inner-wrapper">
                        <FontAwesomeIcon icon={faCoffee} />
                        <div className="card-text-label">Total attendance</div>
                        <div className="total">100</div>
                      </div> 
                    </div>

                    <div className="card2-wrapper">
                      <div className="inner-wrapper">
                        <FontAwesomeIcon icon={faAnchor} />
                        <div className="card-text-label">Transition to tech</div>
                        <div className="total">30</div>
                      </div>
                      
                      
                    </div>

                    <div className="card3-wrapper">
                      <div className="inner-wrapper">
                        <FontAwesomeIcon icon={faComputer} /> 
                        <div className="card-text-label">Alumni to mentor</div>
                        <div className="total">50</div>
                      </div>
                    </div>

                    <div className="card4-wrapper">
                      <div className="inner-wrapper">
                        <FontAwesomeIcon icon={faCoffee} />
                        <div className="card-text-label">Transition to other study</div>
                        <div className="total">30</div>
                      </div> 
                    </div>

                    <div className="card5-wrapper">
                      <div className="inner-wrapper">
                        <FontAwesomeIcon icon={faCode} />
                        <div className="card-text-label">Coding languages:</div>
                        <div className="card-text-sml">HTML, CSS, React, Python</div>
                      </div>
                      
                    </div>
                  </div>
              
      
                </div>

      </div>

      <div className="card-coded">
          <div className="card-content">
                  
                  <div className="first-row-wrapper">
                    <h3 className="location">Brisbane</h3>
              
                  </div>
                  
                  <div className="info-card-wrapper">

                    <div className="card0-wrapper">
                      <div className="inner-wrapper">
                        <FontAwesomeIcon icon={faSailboat} />
                        <div className="card-text-label">Program</div>
                        <div className="total">She Codes Plus</div>
                      </div> 
                    </div>

                    <div className="card1-wrapper">
                      <div className="inner-wrapper">
                        <FontAwesomeIcon icon={faCoffee} />
                        <div className="card-text-label">Total attendance</div>
                        <div className="total">50</div>
                      </div> 
                    </div>

                    <div className="card2-wrapper">
                      <div className="inner-wrapper">
                        <FontAwesomeIcon icon={faAnchor} />
                        <div className="card-text-label">Transition to tech</div>
                        <div className="total">20</div>
                      </div>
                      
                      
                    </div>

                    <div className="card3-wrapper">
                      <div className="inner-wrapper">
                        <FontAwesomeIcon icon={faComputer} /> 
                        <div className="card-text-label">Alumni to mentor</div>
                        <div className="total">15</div>
                      </div>
                    </div>

                    <div className="card4-wrapper">
                      <div className="inner-wrapper">
                        <FontAwesomeIcon icon={faCoffee} />
                        <div className="card-text-label">Transition to other study</div>
                        <div className="total">20</div>
                      </div> 
                    </div>

                    <div className="card5-wrapper">
                      <div className="inner-wrapper">
                        <FontAwesomeIcon icon={faCode} />
                        <div className="card-text-label">Coding languages:</div>
                        <div className="card-text-sml">HTML, CSS, React, Python</div>
                      </div>
                      
                    </div>
                  </div>
              
      
                </div>

      </div>

      <div className="card-coded">
          <div className="card-content">
                  
                  <div className="first-row-wrapper">
                    <h3 className="location">Sydney</h3>
              
                  </div>
                  
                  <div className="info-card-wrapper">

                    <div className="card0-wrapper">
                      <div className="inner-wrapper">
                        <FontAwesomeIcon icon={faSailboat} />
                        <div className="card-text-label">Program</div>
                        <div className="total">She Codes Plus</div>
                      </div> 
                    </div>

                    <div className="card1-wrapper">
                      <div className="inner-wrapper">
                        <FontAwesomeIcon icon={faCoffee} />
                        <div className="card-text-label">Total attendance</div>
                        <div className="total">25</div>
                      </div> 
                    </div>

                    <div className="card2-wrapper">
                      <div className="inner-wrapper">
                        <FontAwesomeIcon icon={faAnchor} />
                        <div className="card-text-label">Transition to tech</div>
                        <div className="total">5</div>
                      </div>
                      
                      
                    </div>

                    <div className="card3-wrapper">
                      <div className="inner-wrapper">
                        <FontAwesomeIcon icon={faComputer} /> 
                        <div className="card-text-label">Alumni to mentor</div>
                        <div className="total">10</div>
                      </div>
                    </div>

                    <div className="card4-wrapper">
                      <div className="inner-wrapper">
                        <FontAwesomeIcon icon={faCoffee} />
                        <div className="card-text-label">Transition to other study</div>
                        <div className="total">8</div>
                      </div> 
                    </div>

                    <div className="card5-wrapper">
                      <div className="inner-wrapper">
                        <FontAwesomeIcon icon={faCode} />
                        <div className="card-text-label">Coding languages:</div>
                        <div className="card-text-sml">HTML, CSS, React, Python</div>
                      </div>
                      
                    </div>
                  </div>
              
      
                </div>

      </div>




        <div className="report-list">
        {reportList.map((reportData) => {
            return (
            <ReportCard
                key={`report-${reportData.id}`}
                reportData={reportData}
            />
            );
        })}
        </div>
      </div>
      

    </main>
    
  );
}

export default SponsorPage;