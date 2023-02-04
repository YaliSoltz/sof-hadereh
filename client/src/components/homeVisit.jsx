import React, { useState } from "react";
import { useContext } from "react";
import { HomeVisitContext } from "../context/homeVisit";

const HomeVisit = () => {
  const { homeVisits, addNewHomeVisit, deleteHomeVisit, changeHomeVisit } =
    useContext(HomeVisitContext);

  const [newHomeVisit, setNewHomeVisit] = useState({}); // new homeVisit object

  // function that add new homeVisit and reset the form
  const handleSubmit = async (e) => {
    e.preventDefault();

    addNewHomeVisit(newHomeVisit); // add newHomeVisit to database
    document.getElementById("form").reset(); // reset the form
  };

  // function that set the newHomeVisit obj with imgUrl
  const setImgUrl = (e) => {
    const file = e.target.files[0]; // defines file as an object who contain image data
    const reader = new FileReader(); // defines new instance from FileReader class
    reader.readAsDataURL(file); // converts the file to base64

    //func that get the image in base64 and add it to newHomeVisit object
    reader.onloadend = () => {
      console.log(reader.result);
      setNewHomeVisit({ ...newHomeVisit, imgUrl: "reader.result" });
    };
  };

  return (
    <div className="App-header">
      <div style={{ display: "flex" }}>
        {homeVisits.map((homeVisit, index) => (
          <div className="card" style={{ width: "18rem" }} key={index}>
            <img src={homeVisit.imgUrl} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">
                <span>כותרת: {homeVisit.title}</span>
                <input
                  type="text"
                  id={"title" + homeVisit._id}
                  placeholder="כותרת חדשה.."
                />
                <button
                  onClick={() =>
                    changeHomeVisit(homeVisit._id, {
                      title: document.getElementById("title" + homeVisit._id)
                        .value,
                    })
                  }
                >
                  שינוי כותרת
                </button>
              </h5>
              <br />
              <h5 className="card-text">
                <span>תוכן: {homeVisit.content}</span>
                <input
                  type="text"
                  id={"content" + homeVisit._id}
                  placeholder="תוכן חדש.."
                />
                <button
                  onClick={() =>
                    changeHomeVisit(homeVisit._id, {
                      content: document.getElementById(
                        "content" + homeVisit._id
                      ).value,
                    })
                  }
                >
                  שינוי תוכן
                </button>
              </h5>
              <button
                className="btn btn-primary"
                onClick={() => deleteHomeVisit(homeVisit._id)}
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
              setNewHomeVisit({ ...newHomeVisit, title: e.target.value })
            }
          />
          <input
            type="text"
            className="form-control mb-3"
            placeholder="תוכן:"
            required
            onChange={(e) =>
              setNewHomeVisit({
                ...newHomeVisit,
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

export default HomeVisit;
