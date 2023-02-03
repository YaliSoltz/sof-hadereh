import React, { useState } from "react";
import { useContext } from "react";
import { ConsultationContext } from "../context/consultation";

const Consultation = () => {
  const {
    consultations,
    addNewConsultation,
    deleteConsultation,
    changeConsultation,
  } = useContext(ConsultationContext);

  const [newConsultation, setNewConsultation] = useState({}); // new consultation object

  // function that add new consultation and reset the form
  const handleSubmit = async (e) => {
    e.preventDefault();

    addNewConsultation(newConsultation); // add newConsultation to database
    document.getElementById("form").reset(); // reset the form
  };

  // function that set the newConsultation obj with imgUrl
  const setImgUrl = (e) => {
    const file = e.target.files[0]; // defines file as an object who contain image data
    const reader = new FileReader(); // defines new instance from FileReader class
    reader.readAsDataURL(file); // converts the file to base64

    //func that get the image in base64 and add it to newConsultation object
    reader.onloadend = () => {
      console.log(reader.result);
      setNewConsultation({ ...newConsultation, imgUrl: "reader.result" });
    };
  };

  return (
    <div className="App-header">
      <div style={{ display: "flex" }}>
        {consultations.map((consultation, index) => (
          <div className="card" style={{ width: "18rem" }} key={index}>
            <img src={consultation.imgUrl} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">
                <span>כותרת: {consultation.title}</span>
                <input
                  type="text"
                  id={"title" + consultation._id}
                  placeholder="כותרת חדשה.."
                />
                <button
                  onClick={() =>
                    changeConsultation(consultation._id, {
                      title: document.getElementById("title" + consultation._id)
                        .value,
                    })
                  }
                >
                  שינוי כותרת
                </button>
              </h5>
              <br />
              <h5 className="card-text">
                <span>תוכן: {consultation.content}</span>
                <input
                  type="text"
                  id={"content" + consultation._id}
                  placeholder="תוכן חדש.."
                />
                <button
                  onClick={() =>
                    changeConsultation(consultation._id, {
                      content: document.getElementById(
                        "content" + consultation._id
                      ).value,
                    })
                  }
                >
                  שינוי תוכן
                </button>
              </h5>
              <button
                className="btn btn-primary"
                onClick={() => deleteConsultation(consultation._id)}
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
            placeholder="כותרת:"
            required
            onChange={(e) =>
              setNewConsultation({ ...newConsultation, title: e.target.value })
            }
          />
          <input
            type="text"
            className="form-control mb-3"
            placeholder="תוכן:"
            required
            onChange={(e) =>
              setNewConsultation({
                ...newConsultation,
                content: e.target.value,
              })
            }
          />
          <label
            htmlFor="img-upload"
            className="form-label"
            style={{ color: "white" }}
          >
            העלאת תמונה
          </label>
          <input
            type="file"
            className="form-control mb-3"
            name="img-upload"
            required
            onChange={(e) => setImgUrl(e)}
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

export default Consultation;
