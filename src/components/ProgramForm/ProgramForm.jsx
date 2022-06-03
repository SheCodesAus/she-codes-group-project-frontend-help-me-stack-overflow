import React, { useState } from "react";

// Imports
import { Link, useNavigate } from "react-router-dom";

import "./ProgramForm.css";


function ProgramForm(programData) {
  // State
  const [program, postProgram] = useState(
    programData.map
  );

  // // Hooks
  const navigate = useNavigate();

  // Actions and Helpers
  const handleChange = (event) => {
    const { id, value } = event.target;
    postProgram((prevProgramData) => ({
      ...prevProgramData,
      [id]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();        
    if (program.location && program.title && program.date_end && 
        program.date_created && program.student_attendees && program.mentors && program.description && program.date_start && program.coding_languages
     && program.image) 
    {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}programs/`,
          {
            method: "post",
            headers: {
              "Content-Type": "application/json",              
            },
            body: JSON.stringify({
              title: program.title,              
              date_created: new Date(program.date_created).toDateString(),
              date_end: new Date(program.date_end).toISOString(),
              date_start: new Date(program.date_start).toISOString(),
              location: program.location,
              coding_languages: program.coding_languages,            
              student_attendees: program.student_attendees,           
              mentors: program.mentors,   
              description: program.description,    
              image: program.image,                   
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
    id: "title",
    label: "Title:",
    placeholder: "Enter Program Title",
    type: "text",
    },

    {
        id: "date_created",
        label: "Date Created:",
        placeholder: "Enter Date",
        type: "date",
    }, 

    {
        id: "date_start",
        label: "Start Date",
        placeholder: "Enter Date",
        type: "date",
    }, 

    {
      id: "date_end",
      label: "End Date:",
      placeholder: "Enter Date",
      type: "Date",
    },


    {
      id: "student_attendees",
      label: "Student Attendees:",
      placeholder: "Enter Students",
      type: "text",
    },
    
    {
        id: "mentors",
        label: "Mentors:",
        placeholder: "Enter Mentors",
        type: "text",
    },


    {
      id: "coding_languages",
      label: "Coding Languages:",
      placeholder: "Enter Languages",
      type: "text",
    },

    {
      id: "image",
      label: "Image:",
      placeholder: "Paste Image Url",
      type: "url",
    },    
    
    ]

    return ( 
        
        <form>
            
          <hr/>
          
          <div className="form-wrap">
            <h1> New Program Form</h1>
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
            <button className="program-btn" type="submit" onClick={handleSubmit}>
                Create Program
            </button> <linebreak/>
            <button className="program-btn"><Link to="/admin">Admin</Link></button>
            </div>
        </form>
    )
}

export default ProgramForm;