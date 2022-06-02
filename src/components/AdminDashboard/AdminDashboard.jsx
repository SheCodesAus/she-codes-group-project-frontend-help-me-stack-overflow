import React from "react";

//styles
// import "./AdminDash.css";

function AdminDash() {
  <div class="page">
  <h1>A responsive table</h1>
 <table class="layout display responsive-table">
     <thead>
         <tr>
             <th>Number</th>
             <th colspan="2">Name</th>
         </tr>
     </thead>
     <tbody>
 
         <tr>
             <td class="organisationnumber">140406</td>
             <td class="organisationname">Stet clita kasd gubergren, no sea takimata sanctus est</td>
             <td class="actions">
                 <a href="?" class="edit-item" title="Edit">Edit</a>
                 <a href="?" class="remove-item" title="Remove">Remove</a>
             </td>
         </tr>
 
         <tr>
             <td class="organisationnumber">140412</td>
             <td class="organisationname">Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat</td>
             <td class="actions">
                 <a href="?" class="edit-item" title="Edit">Edit</a>
                 <a href="?" class="remove-item" title="Remove">Remove</a>
             </td>
         </tr>
 
         <tr>
             <td class="organisationnumber">140404</td>
             <td class="organisationname">Vel illum dolore eu feugiat nulla facilisis at vero eros</td>
             <td class="actions">
                 <a href="?" class="edit-item" title="Edit">Edit</a>
                 <a href="?" class="remove-item" title="Remove">Remove</a>
             </td>
         </tr>
 
         <tr>
             <td class="organisationnumber">140408</td>
             <td class="organisationname">Iusto odio dignissim qui blandit praesent luptatum zzril delenit</td>
             <td class="actions">
                 <a href="?" class="edit-item" title="Edit">Edit</a>
                 <a href="?" class="remove-item" title="Remove">Remove</a>
             </td>
         </tr>
 
         <tr>
             <td class="organisationnumber">140410</td>
             <td class="organisationname">
                 Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam
             </td>
             <td class="actions">
                 <a href="?" class="edit-item" title="Edit">Edit</a>
                 <a href="?" class="remove-item" title="Remove">Remove</a>
             </td>
         </tr>
 
     </tbody>
 </table>
 </div>
}

  export default AdminDash;