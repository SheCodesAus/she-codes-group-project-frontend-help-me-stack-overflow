
import React, {useState, useEffect} from "react";

import {Link} from "react-router-dom";

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
            <h2>Reports</h2>
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