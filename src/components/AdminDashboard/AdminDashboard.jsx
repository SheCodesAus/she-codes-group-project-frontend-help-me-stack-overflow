import React from "react";
import { Link } from "react-router-dom";

//styles
// import "./AdminDashboard.css";

function AdminDash() {

      

    return <div class="page">

<div>
    <br/>
        <div className="spacer1"></div>
    <hr/> 
</div>
        
    <div className="navbar">    
        <h1>Students </h1>    
        <input type="search" className="create-btn" placeholder="Filter by Title"></input>   
        <button className="create-btn"><Link to="/student/create">Create new</Link></button>        
    </div>

    
  
   <table class="layout display responsive-table">
       <thead>
           <tr>
               <th>Student</th>
               <th colspan="1">Status</th>
               <th colspan="1">Date</th>
               <th colspan="1">Location</th>
               <th colspan="2">Action</th>


           </tr>
       </thead>
       <tbody>
   
           <tr>
               <td class="organisationnumber">Manali <br/>manali@cavamail.com</td>
               <td class="organisationname">Alumni, </td>
               <td class="organisationname">2020</td>
               <td class="organisationname">WA</td>             


               <td class="actions">
                   <a href="?" class="edit-item" title="Edit">Edit</a>
                   <a href="?" class="remove-item" title="Remove">Remove</a>
               </td>
           </tr>   
       </tbody>    
   </table>
   <div className="viewall-wrap">
        <button className="viewall-btn"><Link to="/student">View All</Link></button> 
   </div>

<div>
    <br/>
        <div className="spacer1"></div>
    <hr/> 
</div>

<div className="box-wrap">
   <div className="navbar">    
        <h1>Programs </h1>    
        <input type="search" className="create-btn" placeholder="Filter by Title"></input>   
        <button className="create-btn"><Link to="/program/create">Create new</Link></button>  
    </div>

   <table class="layout display responsive-table">
       <thead>
           <tr>
               <th>Programs</th>
               <th colspan="1">Status</th>
               <th colspan="1">Date</th>
               <th colspan="1">Location</th>
               <th colspan="2">Action</th>


           </tr>
       </thead>
       <tbody>
   
           <tr>
               <td class="organisationnumber">One Day Workshop <br/></td>
               <td class="organisationname">Open </td>
               <td class="organisationname">2020</td>
               <td class="organisationname">WA</td>             


               <td class="actions">
                   <a href="?" class="edit-item" title="Edit">Edit</a>
                   <a href="?" class="remove-item" title="Remove">Remove</a>
               </td>
           </tr>   
       </tbody>
   </table>

   <div className="viewall-wrap">
   <button className="viewall-btn"><Link to="/program">View All</Link></button> 
   </div>
</div>

<div>
    <br/>
        <div className="spacer1"></div>
    <hr/> 
</div>

<div className="box-wrap">
   <div className="navbar">    
        <h1>Reports </h1>    
        <input type="search" className="create-btn" placeholder="Filter by Title"></input>   
        <button className="create-btn"><Link to="/report/create">Create new</Link></button>  
    </div>

   <table class="layout display responsive-table">
       <thead>
           <tr>
               <th colspan="1">Report</th>            
               <th colspan="1">Report Number</th>
               <th colspan="1">Date</th>
               <th colspan="2">Action</th>


           </tr>
       </thead>
       <tbody>
   
           <tr>
               <td class="organisationnumber">Workshops <br/></td>               
               <td class="organisationname">2</td>               
               <td class="organisationname">2020</td>             


               <td class="actions">
                   <a href="?" class="edit-item" title="Edit">Edit</a>
                   <a href="?" class="remove-item" title="Remove">Remove</a>
               </td>
           </tr>   
       </tbody>
   </table>
</div>
    <div className="viewall-wrap">
        <button className="viewall-btn"><Link to="/reports">View All</Link></button> 
   </div>

   </div>

   
}

  export default AdminDash;