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
    <div className="contact-container">
      <div className="contact-box">
        <div className="left"></div>
        <div className="right">
          <h2> נשמח לשמוע ממך</h2>
          <form
            id="form"
            onSubmit={(e) => {
              handleSubmit(e);
            }}
          >
            <input
              type="text"
              class="field"
              placeholder="שם:"
              // required
              name="name"
              value={newContactUs.name}
              onChange={(e) =>
                setNewContactUs({ ...newContactUs, name: e.target.value })
              }
            />
            {errors.name && <p className="error"> {errors.name}</p>}
            <input
              id="phone"
              type="number"
              class="field"
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
              <p className="error"> {errors.phoneNumber}</p>
            )}
            <input
              type="email"
              class="field"
              placeholder="אימייל:"
              // required
              name="email"
              value={newContactUs.email}
              onChange={(e) =>
                setNewContactUs({ ...newContactUs, email: e.target.value })
              }
            />
            {errors.email && <p className="error"> {errors.email}</p>}
            <input
              type="text"
              class="field"
              placeholder="נושא:"
              // required
              name="subject"
              value={newContactUs.subject}
              onChange={(e) =>
                setNewContactUs({ ...newContactUs, subject: e.target.value })
              }
            />
            {errors.subject && <p className="error"> {errors.subject}</p>}
            <input
              type="text"
              class="field"
              placeholder="תוכן:"
              // required
              name="content"
              value={newContactUs.content}
              onChange={(e) =>
                setNewContactUs({ ...newContactUs, content: e.target.value })
              }
            />

            {errors.content && <p className="error"> {errors.content}</p>}

            <button className="add" type="submit">
              הוספה
            </button>
            <button className="delete" type="reset">
              מחיקה
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
