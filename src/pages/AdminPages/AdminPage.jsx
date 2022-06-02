import React from "react";

//component
import AdminDash from "../../components/AdminDashboard/AdminDashboard";

//styles
import "./AdminPage.css"

function AdminPage() {

      

    return <div class="page">
        
    <div className="navbar">    
        <h1>Students </h1>    
        <input type="search" className="create-btn" placeholder="Filter by Title"></input>   
        <button className="create-btn">Create new</button>
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

<div className="box-wrap">
   <div className="navbar">    
        <h1>Programs </h1>    
        <input type="search" className="create-btn" placeholder="Filter by Title"></input>   
        <button className="create-btn">Create new</button>
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
</div>

<div className="box-wrap">
   <div className="navbar">    
        <h1>Reports </h1>    
        <input type="search" className="create-btn" placeholder="Filter by Title"></input>   
        <button className="create-btn">Create new</button>
    </div>

   <table class="layout display responsive-table">
       <thead>
           <tr>
               <th>Reports</th>
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
</div>




   </div>

   
}
    

export default AdminPage;