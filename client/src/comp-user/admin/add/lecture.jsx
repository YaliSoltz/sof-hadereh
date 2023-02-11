import React, { useContext, useState } from "react";
import { LectureContext } from "../../../context/lecture";

const Lecture = () => {
  const { addNewLecture } = useContext(LectureContext);

  const [newLecture, setNewLecture] = useState({}); // new lecture object

  // function that add new lecture and reset the form
  const handleSubmit = async (e) => {
    e.preventDefault();

    addNewLecture(newLecture); // add newLecture to database
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
      setNewLecture({ ...newLecture, imgUrl: reader.result });
    };
  };

  return (
    <div>
        <h2>הוספת הרצאה חדשה</h2>
      <form
        id="form"
        className="sharing-form"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <input
          name="name"
          type="text"
          onChange={(e) =>
            setNewLecture({ ...newLecture, title: e.target.value })
          }
          placeholder="כותרת:"
        />

        <input
          type="file"
          className="img-upload"
          name="img-upload"
          required
          onChange={(e) => setImgUrl(e)}
        />

        <textarea
          placeholder="תוכן:"
          required
          onChange={(e) =>
            setNewLecture({ ...newLecture, content: e.target.value })
          }
        />
        <div>
          <button type="submit" className="send">
            הוספה
          </button>
        </div>
      </form>
    </div>
  );
};

export default Lecture;
