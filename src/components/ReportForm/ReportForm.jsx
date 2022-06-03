import React, { useState } from "react";

// Imports
import { Link, useNavigate } from "react-router-dom";

import "./ReportForm.css";


function ReportForm(reportData) {
  // State
  const [report, postReport] = useState(
    reportData.map
  );

  // // Hooks
  const navigate = useNavigate();

  // Actions and Helpers
  const handleChange = (event) => {
    const { id, value } = event.target;
    postReport((prevReportData) => ({
      ...prevReportData,
      [id]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();        
    if (report.location && report.demographic_gender && report.demographic_nationality && 
        report.total_attendance && report.program_attendance && report.attendee_to_alumni && report.alumni_to_mentor && report.program_date && report.coding_languages
     && report.transition_to_tech && report.transition_to_other_programs  && report.transition_to_other_study) 
    {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}reports/`,
          {
            method: "post",
            headers: {
              "Content-Type": "application/json",              
            },
            body: JSON.stringify({
              location: report.location,             
              demographic_gender: report.demographic_gender,              
              demographic_nationality: report.demographic_nationality,
              total_attendance: parseInt(report.total_attendance),
              program_attendence: report.program_attendence,           
              attendee_to_alumni: parseInt(report.attendee_to_alumni),   
              alumni_to_mentor: parseInt(report.alumni_to_mentor),    
              program_date: new Date(report.program_date).toISOString(),
              coding_languages: report.coding_languages,            
              transition_to_tech: parseInt(report.transition_to_tech),           
              transition_to_other_programs: parseInt(report.transition_to_other_programs),           
              transition_to_other_study: parseInt(report.transition_to_other_study),             
                        
            }),
          }
        );
        const data = await response.json();
        console.log(data)
        // THIS IS HOW YOU NAVIGATE AUTOMATICALLY
        navigate(`/admin`);
        // navigate(`/`);
      } catch (err) {
        console.log(err);
      }
    }
  };

  const formFields = [
    {
      id: "location",
      label: "Location:",
      placeholder: "Enter Location",
      type: "text",
   },

   {
    id: "demographic_gender",
    label: "Gender:",
    placeholder: "Enter Gender",
    type: "text",
    },

    {
      id: "demographic_nationality",
      label: "Nationality:",
      placeholder: "Enter Nationality",
      type: "text",
    },

    {
      id: "total_attendence",
      label: "Total Attendance:",
      placeholder: "Enter amount",
      type: "text",
    },

    {
      id: "program_attendence",
      label: "Program Attendance:",
      placeholder: "Enter Amount",
      type: "text",
    },
    
    {
        id: "attendee_to_alumni",
        label: "Attendee to Alumni:",
        placeholder: "Enter amount",
        type: "text",
    },

    {
      id: "alumni_to_attendee",
      label: "Alumni to Attendee:",
      placeholder: "Enter amount",
      type: "text",
    },
      
    {
        id: "program_date",
        label: "Date created",
        placeholder: "Enter title:",
        type: "date",
    },  

    {
      id: "coding_languages",
      label: "Coding Languages",
      placeholder: "Enter Languages:",
      type: "text",
    },

    {
      id: "transition_to_tech",
      label: "Transitioned to Tech:",
      placeholder: "Enter Amount",
      type: "text",
    },
    {
      id: "transition_to_other_program",
      label: "Transitioned to other Program:",
      placeholder: "Enter Amount",
      type: "text",
    },
    {
      id: "transition_to_other_study",
      label: "Transitioned to other study:",
      placeholder: "Enter Amount",
      type: "text",
    },
    
    
    ]

    return ( 
        <form>
          <hr/>
          <div className="form-wrap">
          <h1> New Report Form </h1>
            {formFields.map((field, key) => {
                return (
                <div key={`${key}-${field.id}`}>
                    <label htmlFor={field.id}>
                        {field.label}
                    </label>
                    <input className="login-button"
                        type={field.type}
                        id={field.id}
                        placeholder={field.placeholder}
                        onChange={handleChange}
                    />
                </div>
                )
            })}
            </div>

            <div className="button-wrap">
            <button className="report-btn" type="submit" onClick={handleSubmit}>
                Create Report
            </button>
            <button className="report-btn"><Link to="/admin">Admin</Link></button>
          </div>
        </form>
    )
}

export default ReportForm;