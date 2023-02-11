import React, { useContext, useState } from "react";
import { ReadingContext } from "../../../context/reading";

const Reading = () => {
  const { addNewReading } = useContext(ReadingContext);

  const [newReading, setNewReading] = useState({}); // new reading object

  // function that add new reading and reset the form
  const handleSubmit = async (e) => {
    e.preventDefault();

    addNewReading(newReading); // add newReading to database
    document.getElementById("form").reset(); // reset the form
  };

  // function that set the newReading obj with imgUrl
  const setImgUrl = (e) => {
    const file = e.target.files[0]; // defines file as an object who contain image data
    const reader = new FileReader(); // defines new instance from FileReader class
    reader.readAsDataURL(file); // converts the file to base64
    //func that get the image in base64 and add it to newReading object
    reader.onloadend = () => {
      console.log(reader.result);
      setNewReading({ ...newReading, imgUrl: reader.result });
    };
  };

  return (
    <div>
      <h2>המלצת קריאה חדשה</h2>
      <form
        id="form"
        className="sharing-form"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <select
          required
          onChange={(e) =>
            setNewReading({
              ...newReading,
              category: e.target.value,
            })
          }
        >
          <option value="ליווי ילדים">ליווי ילדים</option>
          <option value="הגיל השלישי">הגיל השלישי</option>
          <option value="מה קורה ברגע המוות ואחרי">מה קורה במוות ואחרי</option>
          <option value="ספרי השראה">ספרי השראה</option>
        </select>

        <input
          type="file"
          className="img-upload"
          name="img-upload"
          required
          onChange={(e) => setImgUrl(e)}
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

export default Reading;
