import React, { useState } from "react";
import { useContext } from "react";
import { PersonalSharingContext } from "../context/personalSharing";

const PersonalSharing = () => {
  const { personalSharings, addNewPersonalSharing, deletePersonalSharing } =
    useContext(PersonalSharingContext);

    const [newPersonalSharing, setNewPersonalSharing] = useState({}); // new PersonalSharing object

  // function that add new PersonalSharing and reset the form
  const handleSubmit = async (e) => {
    e.preventDefault();

    addNewPersonalSharing(newPersonalSharing); // add newPersonalSharing to database
    document.getElementById("form").reset(); // reset the form
  };

  return (
    <div className="App-header">
      <div style={{ display: "flex" }}>
        {personalSharings.map((personalSharing, index) => (
          <div className="card" style={{ width: "18rem" }} key={index}>
            <div className="card-body">
              <h5 className="card-title">
                <span>שם:{personalSharing.name}</span>
              </h5>
              <h5 className="card-title">
                <span>גיל: {personalSharing.age}</span>
              </h5>
              <h5 className="card-title">
                <span>עיר: {personalSharing.city}</span>
              </h5>
              <h5 className="card-title">
                <span>תוכן: {personalSharing.content}</span>
              </h5>

              <button
                className="btn btn-primary"
                onClick={() => deletePersonalSharing(personalSharing._id)}
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
            onChange={(e) =>
              setNewPersonalSharing({
                ...newPersonalSharing,
                name: e.target.value,
              })
            }
          />
          <input
            type="text"
            className="form-control mb-3"
            placeholder="גיל:"
            required
            onChange={(e) =>
              setNewPersonalSharing({
                ...newPersonalSharing,
                age: e.target.value,
              })
            }
          />
          <input
            type="text"
            className="form-control mb-3"
            placeholder="עיר:"
            required
            onChange={(e) =>
              setNewPersonalSharing({
                ...newPersonalSharing,
                city: e.target.value,
              })
            }
          />
          <input
            type="text"
            className="form-control mb-3"
            placeholder="תוכן:"
            required
            onChange={(e) =>
              setNewPersonalSharing({
                ...newPersonalSharing,
                content: e.target.value,
              })
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

export default PersonalSharing;
