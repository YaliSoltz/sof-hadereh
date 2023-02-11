import React, { useState } from "react";
import { useContext } from "react";
import { ReadingContext } from "../context/reading";

const Reading = () => {
  const { readings, addNewReading, deleteReading, changeReading } =
    useContext(ReadingContext);

  const [newReading, setNewReading] = useState({}); // new reading object

  // function that add new reading and reset the form
  const handleSubmit = async (e) => {
    e.preventDefault();

    addNewReading(newReading); // add newReading to database
    document.getElementById("form").reset(); // reset the form
  };

  // function that set the newLecture obj with imgUrl
  const setImgUrl = (e) => {
    const file = e.target.files[0]; // defines file as an object who contain image data
    const reader = new FileReader(); // defines new instance from FileReader class
    reader.readAsDataURL(file); // converts the file to base64

    //func that get the image in base64 and add it to newLecture object
    reader.onloadend = () => {
      console.log(reader.result);
      setNewReading({ ...newReading, imgUrl: reader.result });
    };
  };

  return (
    <div className="App-header">
      <div style={{ display: "flex" }}>
        {readings.map((reading, index) => (
          <div className="card" style={{ width: "18rem" }} key={index}>
            <img src={reading.imgUrl} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">
                <span>קטגוריה: {reading.category}</span>
                <input
                  type="text"
                  id={"category" + reading._id}
                  placeholder="קטגוריה חדשה.."
                />
                <button
                  onClick={() =>
                    changeReading(reading._id, {
                      category: document.getElementById(
                        "category" + reading._id
                      ).value,
                    })
                  }
                >
                  שינוי קטגוריה
                </button>
              </h5>

              <br />

              <h5 className="card-text">
                <span>תוכן: {reading.name}</span>
                <input
                  type="text"
                  id={"name" + reading._id}
                  placeholder="שם חדש.."
                />
                <button
                  onClick={() =>
                    changeReading(reading._id, {
                      name: document.getElementById("name" + reading._id).value,
                    })
                  }
                >
                  שינוי שם
                </button>
              </h5>

              <h5 className="card-text">
                <span>תוכן: {reading.author}</span>
                <input
                  type="text"
                  id={"author" + reading._id}
                  placeholder="סופר חדש.."
                />
                <button
                  onClick={() =>
                    changeReading(reading._id, {
                      author: document.getElementById("author" + reading._id)
                        .value,
                    })
                  }
                >
                  שינוי סופר
                </button>
              </h5>
              <button
                className="btn btn-primary"
                onClick={() => deleteReading(reading._id)}
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


          <select name="" id=""  required
            onChange={(e) =>
              setNewReading({
                ...newReading,
                category: e.target.value,
              })
            }>
            <option value="ליווי ילדים">ליווי ילדים</option>
            <option value="הגיל השלישי">הגיל השלישי</option>
            <option value="מה קורה ברגע המוות ואחרי">מה קורה במוות ואחרי</option>
            <option value="ספרי השראה">ספרי השראה</option>
          </select>
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

export default Reading;
