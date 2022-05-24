
import React, {useState, useEffect} from "react";

import {Link} from "react-router-dom";
import lady from "./image/lady.webp";

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
                <img className="hero-image" width="200px" src={ lady } alt="bannerimg" />
            </div>
        </div>
            
        </div>
        <div className="spacer1"></div>

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