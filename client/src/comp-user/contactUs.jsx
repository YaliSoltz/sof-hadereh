import React, { useState } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { ContactUsContext } from "../context/contactUs";
import Validation from "./validation";

const ContactUs = () => {
  const { contactUs, addNewContactUs, deleteContactUs } =
    useContext(ContactUsContext);

  const [newContactUs, setNewContactUs] = useState({
    // new ContactUs object
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
    addNewContactUs(newContactUs); // add newContactUs to database
    console.log(newContactUs);
    document.getElementById("form").reset(); // reset the form
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
        {errors.name && <span className="error"> {errors.name}</span>}

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

        {errors.phoneNumber && (
          <span className="error"> {errors.phoneNumber}</span>
        )}

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

        {errors.email && <span className="error"> {errors.email}</span>}

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

        {errors.subject && <span className="error"> {errors.subject}</span>}

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

        {errors.content && <span className="error"> {errors.content}</span>}

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

        <button className="add" type="submit">
          שליחת הודעה
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
