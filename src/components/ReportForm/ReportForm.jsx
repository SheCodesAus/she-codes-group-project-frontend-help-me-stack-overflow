import React, { useState } from "react";

// Imports
import { Link, useNavigate } from "react-router-dom";

function StudentForm(studentData) {
  // State
  const [student, postStudent] = useState(
    studentData.map
  );

  // // Hooks
  const navigate = useNavigate();

  // Actions and Helpers
  const handleChange = (event) => {
    const { id, value } = event.target;
    postStudent((prevStudentData) => ({
      ...prevStudentData,
      [id]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();        
    if (student.name && student.biography && student.contact_email && student.contact_phone && student.contact_email && student.location && student.demographic_gender
      && student.date_created && student.demographic_nationality && student.social_linkedin && student.employment_company && student.employment_position && student.employment_industry
     && student.employment_salary && student.program_attendence && student.coding_languages && student.social_github) 
    {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}student/`,
          {
            method: "post",
            headers: {
              "Content-Type": "application/json",              
            },
            body: JSON.stringify({
              name: student.title, 
              biography: student.biography,
              contact_phone: parseInt(student.contact_phone),
              contact_email: student.contact_email,
              location: student.location,
              demographic_gender: student.demographic_gender,
              date_created: new Date(student.date_created).toISOString(),
              demographic_nationality: student.demographic_nationality,
              social_github: student.social_github,
              social_linkedin: student.social_linkedin,   
              employment_company: student.employment_company,             
              employment_position: student.employment_position,             
              employment_industry: student.employment_industry,             
              employment_salary: parseInt(student.employment_salary),             
              program_attendence: student.program_attendence,           
              coding_languages: student.coding_languages,          
            }),
          }
        );
        const data = await response.json();
        console.log(data)
        // THIS IS HOW YOU NAVIGATE AUTOMATICALLY
        navigate(`/`);
        // navigate(`/`);
      } catch (err) {
        console.log(err);
      }
    }
  };

  const formFields = [
    {
       id: "name",
       label: "Name",
       placeholder: "Enter title",
       type: "text",
    },
    {
        id: "biography",
        label: "Biography",
        placeholder: "Enter description",
        type: "text",
    },
    {
        id: "contact_phone",
        label: "Contact Phone",
        placeholder: "Enter Phone",
        type: "text",
    },
    {
        id: "contact_email",
        label: "Email",
        placeholder: "Enter Email",
        type: "email",
    },
        {
       id: "location",
       label: "Location",
       placeholder: "Enter Location",
       type: "text",
    },
    {
        id: "date_created",
        label: "Date created",
        placeholder: "Enter title",
        type: "date",
    },
    {
        id: "demographic_nationality",
        label: "Nationality",
        placeholder: "Enter Nationality",
        type: "text",
    },
    {
      id: "demographic_gender",
      label: "Gender",
      placeholder: "Enter Gender",
      type: "text",
    },
    {
      id: "social_linkedin",
      label: "Linkedin",
      placeholder: "Enter link",
      type: "url",
    },
    {
      id: "social_github",
      label: "Github",
      placeholder: "Enter link",
      type: "url",
    },
    {
      id: "employment_industry",
      label: "Employment Industry",
      placeholder: "Enter Industry",
      type: "text",
    },
    {
      id: "employment_position",
      label: "Position",
      placeholder: "Enter Position",
      type: "text",
    },
    {
      id: "employment_salary",
      label: "Salary ",
      placeholder: "Enter Salary",
      type: "text",
    },
    {
      id: "program_attendence",
      label: "Programs",
      placeholder: "Enter Programs",
      type: "text",
    },
    {
      id: "coding_languages",
      label: "Coding Languages",
      placeholder: "Enter Languages",
      type: "text",
    },
    ]

    return ( 
        <form>
            {formFields.map((field, key) => {
                return (
                <div key={`${key}-${field.id}`}>
                    <label htmlFor={field.id}>
                        {field.label}
                    </label>
                    <input
                        type={field.type}
                        id={field.id}
                        placeholder={field.placeholder}
                        onChange={handleChange}
                    />
                </div>
                )
            })}
            <button type="submit" onClick={handleSubmit}>
                Create Student
            </button>
            <button><Link to="/admin">Admin</Link></button>
            
        </form>
    )
}

export default StudentForm;