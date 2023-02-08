
import React, { useState } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { ContactUsContext } from "../context/contactUs";
import Validation from "./validation";

const ContactUs = () => {
  const { contactUs, addNewContactUs, deleteContactUs } =
    useContext(ContactUsContext);

  const [newContactUs, setNewContactUs] = useState({                     // new ContactUs object
    name:'',
    phoneNumber:'',
    email:'',
    subject:'',
    content:'',
  }); 
    const [errors, setErrors] = useState({});
  // function handleChange(e){
  //   setNewContactUs({...newContactUs,[e.target.name]:e.target.value})
  //   setNewContactUs({...newContactUs,[e.target.phoneNumber]:e.target.value})
  //   setNewContactUs({...newContactUs,[e.target.email]:e.target.value})
  //   setNewContactUs({...newContactUs,[e.target.subject]:e.target.value})
  //   setNewContactUs({...newContactUs,[e.target.content]:e.target.value})
  // }

  
  
  // function that add new ContactUs and reset the form
  const handleSubmit = async (e) => {
    e.preventDefault();
   setErrors(Validation(newContactUs));
    addNewContactUs(newContactUs); // add newContactUs to database
    console.log(newContactUs)
    document.getElementById("form").reset(); // reset the form
    
  };
  // useEffect(() => {
  //   if(Object.keys(errors).length===0 &&)
  //   alert('נשלח בהצלחה')
    
  // }, [errors]);
  return (
      <div className="form m-3">
        <h1> נשמח לשמוע ממך</h1>
        <form
          id="form"
          onSubmit={(e) => {
            handleSubmit(e);
          }}
         
        >
          <input
            type="text"
            className="form-control mb-3"
            placeholder="שם:"
            // required
            name="name"
            value={newContactUs.name}
            onChange={(e) =>
              setNewContactUs({...newContactUs,name:e.target.value})
            }

          />
          {errors.name && <p> {errors.name}</p> } 
          <br/>
          <input
          
            id="phone"
            type="number"
            className="form-control mb-3"
            placeholder="טלפון:"
            minLength={10}
            // required
            name="phoneNumber"
            value={newContactUs.phoneNumber}
            onChange={(e) =>
              setNewContactUs({...newContactUs,phoneNumber:e.target.value})            }
          />
           {errors.phoneNumber && <p> {errors.phoneNumber}</p> } 
          <br/>
          <input
            type="email"
            className="form-control mb-3"
            placeholder="אימייל:"
            // required
            name="email"
            value={newContactUs.email}
            onChange={(e) =>
              setNewContactUs({...newContactUs,email:e.target.value})            }
          />
          {errors.email && <p> {errors.email}</p> } 
          <br/>
          <input
            type="text"
            className="form-control mb-3"
            placeholder="נושא:"
            // required
            name="subject"
            value={newContactUs.subject}
            onChange={(e) =>
              setNewContactUs({...newContactUs,subject:e.target.value})            }
          />
          {errors.subject && <p> {errors.subject}</p> } 
          <br/>
          <input
            type="text"
            className="form-control mb-3"
            placeholder="תוכן:"
            // required
            name="content"
            value={newContactUs.content}
            onChange={(e) =>
              setNewContactUs({...newContactUs,content:e.target.value})            }
          /> 
          <br/> 
          {errors.content && <p> {errors.content}</p> } 
          <button type="submit" className="btn btn-primary m-2">
            הוספה
          </button>
          

          <button type="reset" className="btn btn-secondary m-2">
            מחיקה
          </button>
         <alert> </alert>

        </form>
      </div>
    
  );
};

export default ContactUs;
