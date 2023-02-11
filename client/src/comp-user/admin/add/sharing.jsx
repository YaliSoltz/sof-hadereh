import React, { useContext, useState } from "react";

import { SharingContext } from "../../../context/sharing";

const Sharing = () => {
  const { addNewSharing } = useContext(SharingContext);

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
    <div>
      <h2>הוספת שיתוף חדש</h2>
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
            setNewSharing({
              ...newSharing,
              name: e.target.value,
            })
          }
          placeholder="שם: (מוזמן/ת להישאר אנונימי/ת)"
          required
        />

        <input
          name="age"
          type="number"
          placeholder="גיל:"
          min={1}
          required
          onChange={(e) =>
            setNewSharing({
              ...newSharing,
              age: e.target.value,
            })
          }
        />
        <select
          id="status-select"
          name="status"
          required
          defaultValue=""
          onChange={(e) =>
            setNewSharing({
              ...newSharing,
              status: e.target.value,
            })
          }
        >
          <option value="" disabled>
            סטטוס:
          </option>
          <option value="נשוי/נשואה">נשוי/נשואה</option>
          <option value="רווק/ה">רווק/ה</option>
          <option value="גרוש/ה">גרוש/ה</option>
          <option value="אלמן/ה">אלמן/ה</option>
          <option value="ערירי/ת">ערירי/ת</option>
        </select>

        <textarea
          placeholder="תוכן:"
          required
          onChange={(e) =>
            setNewSharing({
              ...newSharing,
              content: e.target.value,
            })
          }
        ></textarea>
        <div>
          <button type="submit" className="send">
            הוספה
          </button>
        </div>
      </form>
    </div>
  );
};

export default Sharing;
