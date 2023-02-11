import React, { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { ContactUsContext } from './../../context/contactUs';
import "../../css/Admin.css"

const ContactUs=()=>{
const {contactUs,deleteContactUs} = useContext(ContactUsContext);
 const [refresh,setRefresh]=useState(false)

useEffect(() => {
   if (refresh){
    window.location.reload()
   }
  }, [refresh]);

return(
    <div className="main">
<table className="table" >
<thead>
    <tr>
        <th>שם:</th>
        <th>טלפון:</th>
        <th>אימייל:</th>
        <th>נושא:</th>
        <th>תוכן:</th>
    </tr>
</thead>
<tbody>
  
    {contactUs.map((contact,index)=>(
          <tr key={index} >
        <td  >{contact.name}
        </td>
        <td >{contact.phoneNumber}</td>
        <td >{contact.email}</td>
        <td >{contact.subject}</td>
        <td>{contact.content} <button  className="deletecontactUs" onClick={()=>(deleteContactUs(contact._id),setRefresh(true))}>מחיקה </button></td>
        </tr>
))}
    
</tbody>
</table>
</div>
);
};
export default ContactUs

