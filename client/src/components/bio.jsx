import React, { useState } from "react";
import { useContext } from "react";
import { BioContext } from "../context/bio";

const Bio = () => {
  const { bio, addNewBio, deleteBio, changeBio } = useContext(BioContext);

  const [newBio, setNewBio] = useState({}); // new bio object

  // function that add new bio and reset the form
  const handleSubmit = async (e) => {
    e.preventDefault();

    addNewBio(newBio); // add newBio to database
    document.getElementById("form").reset(); // reset the form
  };

  // function that set the newBio obj with imgUrl
  const setImgUrl = (e) => {
    const file = e.target.files[0]; // defines file as an object who contain image data
    const reader = new FileReader(); // defines new instance from FileReader class
    reader.readAsDataURL(file); // converts the file to base64

    //func that get the image in base64 and add it to newBio object
    reader.onloadend = () => {
      console.log(reader.result);
      setNewBio({ ...newBio, imgUrl: "reader.result" });
    };
  };

  return (
    <div className="App-header">
      <div style={{ display: "flex" }}>
        {bio.map((bio, index) => (
          <div className="card" style={{ width: "18rem" }} key={index}>
            <img src={bio.imgUrl} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">
                <span>כותרת: {bio.title}</span>
                <input
                  type="text"
                  id={"title" + bio._id}
                  placeholder="כותרת חדשה.."
                />
                <button
                  onClick={() =>
                    changeBio(bio._id, {
                      title: document.getElementById("title" + bio._id).value,
                    })
                  }
                >
                  שינוי כותרת
                </button>
              </h5>
              <br />
              <h5 className="card-text">
                <span>תוכן: {bio.content}</span>
                <input
                  type="text"
                  id={"content" + bio._id}
                  placeholder="תוכן חדש.."
                />
                <button
                  onClick={() =>
                    changeBio(bio._id, {
                      content: document.getElementById("content" + bio._id)
                        .value,
                    })
                  }
                >
                  שינוי תוכן
                </button>
              </h5>
              <button
                className="btn btn-primary"
                onClick={() => deleteBio(bio._id)}
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
            onChange={(e) => setNewBio({ ...newBio, title: e.target.value })}
          />
          <input
            type="text"
            className="form-control mb-3"
            placeholder="תוכן:"
            required
            onChange={(e) => setNewBio({ ...newBio, content: e.target.value })}
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

export default Bio;