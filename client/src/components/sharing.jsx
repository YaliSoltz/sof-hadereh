import React, { useState } from "react";
import { useContext } from "react";
import { SharingContext } from "../context/sharing";

const Sharing = () => {
  const { sharings, addNewSharing, deleteSharing, changeSharing } =
    useContext(SharingContext);

  const [newSharing, setNewSharing] = useState({}); // new sharing object

  // function that add new sharing and reset the form
  const handleSubmit = async (e) => {
    e.preventDefault();

    addNewSharing(newSharing); // add newSharing to database
    document.getElementById("form").reset(); // reset the form
  };

  // function that set the newSharing obj with imgUrl
  const setImgUrl = (e) => {
    const file = e.target.files[0]; // defines file as an object who contain image data
    const reader = new FileReader(); // defines new instance from FileReader class
    reader.readAsDataURL(file); // converts the file to base64

    //func that get the image in base64 and add it to newSharing object
    reader.onloadend = () => {
      console.log(reader.result);
      setNewSharing({ ...newSharing, imgUrl: "reader.result" });
    };
  };

  return (
    <div className="App-header">
      <div style={{ display: "flex" }}>
        {sharings.map((sharing, index) => (
          <div className="card" style={{ width: "18rem" }} key={index}>
            <img src={sharing.imgUrl} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">
                <span>שם: {sharing.name}</span>
                <input
                  type="text"
                  id={"name" + sharing._id}
                  placeholder="שם חדש.."
                />
                <button
                  onClick={() =>
                    changeSharing(sharing._id, {
                      name: document.getElementById("name" + sharing._id).value,
                    })
                  }
                >
                  שינוי שם
                </button>
              </h5>
              <br />

              <h5 className="card-title">
                <span>גיל: {sharing.age}</span>
                <input
                  type="text"
                  id={"age" + sharing._id}
                  placeholder="גיל חדש.."
                />
                <button
                  onClick={() =>
                    changeSharing(sharing._id, {
                      age: document.getElementById("age" + sharing._id).value,
                    })
                  }
                >
                  שינוי גיל
                </button>
              </h5>
              <br />

              <h5 className="card-title">
                <span>עיר: {sharing.city}</span>
                <input
                  type="text"
                  id={"city" + sharing._id}
                  placeholder="שם חדש.."
                />
                <button
                  onClick={() =>
                    changeSharing(sharing._id, {
                      city: document.getElementById("city" + sharing._id).value,
                    })
                  }
                >
                  שינוי עיר
                </button>
              </h5>
              <br />
              <h5 className="card-text">
                <span>תוכן: {sharing.content}</span>
                <input
                  type="text"
                  id={"content" + sharing._id}
                  placeholder="תוכן חדש.."
                />
                <button
                  onClick={() =>
                    changeSharing(sharing._id, {
                      content: document.getElementById("content" + sharing._id)
                        .value,
                    })
                  }
                >
                  שינוי תוכן
                </button>
              </h5>
              <button
                className="btn btn-primary"
                onClick={() => deleteSharing(sharing._id)}
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
              setNewSharing({ ...newSharing, name: e.target.value })
            }
          />
          <input
            type="text"
            className="form-control mb-3"
            placeholder="גיל:"
            required
            onChange={(e) =>
              setNewSharing({ ...newSharing, age: e.target.value })
            }
          />
          <input
            type="text"
            className="form-control mb-3"
            placeholder="עיר:"
            required
            onChange={(e) =>
              setNewSharing({ ...newSharing, city: e.target.value })
            }
          />
          <input
            type="text"
            className="form-control mb-3"
            placeholder="תוכן:"
            required
            onChange={(e) =>
              setNewSharing({ ...newSharing, content: e.target.value })
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

export default Sharing;
