import React, { useState } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { ContactUsContext } from "../context/contactUs";
import Validation from "./validation";

const ContactUs = () => {
  const { addNewContactUs } = useContext(ContactUsContext);

  const [newContactUs, setNewContactUs] = useState({ // new ContactUs object
    name: "",
    phoneNumber: "",
    email: "",
    subject: "",
    content: "",
  });

  const [errors, setErrors] = useState({});

  // function that add new ContactUs and reset the form
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors(Validation(newContactUs));
    if(Object.keys(errors).length>0) return
    document.getElementsByName("name")[0].style.border = "2px solid red";
    // addNewContactUs(newContactUs); // add newContactUs to database
    document.getElementById("form").reset(); // reset the form
    console.log(newContactUs);
  };

  // useEffect(() => {
  //   if(Object.keys(errors).length===0 &&)
  //   alert('נשלח בהצלחה')

  // }, [errors]);

  return (
    <div className="contact-box">
      <h2> נשמח לשמוע ממך</h2>
      <form
        id="form"
        onSubmit={(e) => { 
          handleSubmit(e);
        }}
      >
        <div className="input-wrapper">
          <input
            type="text"
            className="field"
            placeholder="שם:"
            // required
            name="name"
            value={newContactUs.name}
            onChange={(e) =>
              setNewContactUs({ ...newContactUs, name: e.target.value })
            }
          />
          {errors.name && <span className="error"> {errors.name}</span>}
        </div>

        <div className="input-wrapper">
          <input
            id="phone"
            type="number"
            className="field"
            placeholder="טלפון:"
            minLength={10}
            // required
            name="phoneNumber"
            value={newContactUs.phoneNumber}
            onChange={(e) =>
              setNewContactUs({
                ...newContactUs,
                phoneNumber: e.target.value,
              })
            }
          />
          {errors.phoneNumber && (
            <span className="error"> {errors.phoneNumber}</span>
          )}
        </div>

        <div className="input-wrapper">
          <input
            type="email"
            className="field"
            placeholder="אימייל:"
            // required
            name="email"
            value={newContactUs.email}
            onChange={(e) =>
              setNewContactUs({ ...newContactUs, email: e.target.value })
            }
          />
          {errors.email && <span className="error"> {errors.email}</span>}
        </div>

        <div className="input-wrapper">
          <input
            type="text"
            className="field"
            placeholder="נושא:"
            // required
            name="subject"
            value={newContactUs.subject}
            onChange={(e) =>
              setNewContactUs({ ...newContactUs, subject: e.target.value })
            }
          />
          {errors.subject && <span className="error"> {errors.subject}</span>}
        </div>

        <div className="input-wrapper">
          <input
            type="text"
            className="field"
            placeholder="תוכן:"
            // required
            name="content"
            value={newContactUs.content}
            onChange={(e) =>
              setNewContactUs({ ...newContactUs, content: e.target.value })
            }
          />
          {errors.content && <span className="error"> {errors.content}</span>}
        </div>
        <button className="send" type="submit">
          שליחת הודעה
        </button>
      </form>
    
        <p className="credit-text">אפיון, עיצוב ובניה ע"י דן וולפר ויה-לי סולץ</p>
        
    </div>
  );
};

export default ContactUs;
