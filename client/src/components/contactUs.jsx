import React, { useState } from "react";
import { useContext } from "react";
import { ContactUsContext } from "../context/contactUs";

const ContactUs = () => {
  const { contactUs, addNewContactUs, deleteContactUs } =
    useContext(ContactUsContext);

  const [newContactUs, setNewContactUs] = useState({}); // new ContactUs object

  // function that add new ContactUs and reset the form
  const handleSubmit = async (e) => {
    e.preventDefault();

    addNewContactUs(newContactUs); // add newContactUs to database
    document.getElementById("form").reset(); // reset the form
  };

  return (
    <div className="App-header">
      <div style={{ display: "flex" }}>
        {contactUs.map((contactUs, index) => (
          <div className="card" style={{ width: "18rem" }} key={index}>
            <div className="card-body">
              <h5 className="card-title">
                <span>שם:{contactUs.name}</span>
              </h5>
              <h5 className="card-title">
                <span>טלפון: {contactUs.phoneNumber}</span>
              </h5>
              <h5 className="card-title">
                <span>אימייל: {contactUs.email}</span>
              </h5>
              <h5 className="card-title">
                <span>נושא: {contactUs.subject}</span>
              </h5>
              <h5 className="card-title">
                <span>תוכן: {contactUs.content}</span>
              </h5>

              <button
                className="btn btn-primary"
                onClick={() => deleteContactUs(contactUs._id)}
              >
                מחיקה
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="form m-3">
        <form
          id="form"
          onSubmit={(e) => {
            handleSubmit(e);
          }}
          style={{ border: "solid black 20px" }}
        >
          <input
            type="text"
            className="form-control mb-3"
            placeholder="שם:"
            required
            onChange={(e) =>
              setNewContactUs({ ...newContactUs, name: e.target.value })
            }
          />
          <input
            type="text"
            className="form-control mb-3"
            placeholder="טלפון:"
            required
            onChange={(e) =>
              setNewContactUs({ ...newContactUs, phoneNumber: e.target.value })
            }
          />
          <input
            type="text"
            className="form-control mb-3"
            placeholder="אימייל:"
            required
            onChange={(e) =>
              setNewContactUs({ ...newContactUs, email: e.target.value })
            }
          />
          <input
            type="text"
            className="form-control mb-3"
            placeholder="נושא:"
            required
            onChange={(e) =>
              setNewContactUs({ ...newContactUs, subject: e.target.value })
            }
          />
          <input
            type="text"
            className="form-control mb-3"
            placeholder="תוכן:"
            required
            onChange={(e) =>
              setNewContactUs({ ...newContactUs, content: e.target.value })
            }
          /> 

          <button type="submit" className="btn btn-primary m-2">
            הוספה
          </button>
          <button type="reset" className="btn btn-secondary m-2">
            מחיקה
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
