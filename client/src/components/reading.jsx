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
          <input
            type="text"
            className="form-control mb-3"
            placeholder="קטגוריה:"
            required
            onChange={(e) =>
              setNewReading({
                ...newReading,
                category: e.target.value,
              })
            }
          />
          <input
            type="text"
            className="form-control mb-3"
            placeholder="שם:"
            required
            onChange={(e) =>
              setNewReading({
                ...newReading,
                name: e.target.value,
              })
            }
          />
          <input
            type="text"
            className="form-control mb-3"
            placeholder="סופר:"
            required
            onChange={(e) =>
              setNewReading({
                ...newReading,
                author: e.target.value,
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

export default Reading;
