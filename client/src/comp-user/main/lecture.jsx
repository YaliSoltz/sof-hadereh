import React, { useContext, useState } from "react";
import { LectureContext } from "../../context/lecture";
import { UserContext } from "../../context/user";

const Lecture = () => {
  const { lectures, deleteLecture, changeLecture } = useContext(LectureContext);
  const { user } = useContext(UserContext);

  const [open, setOpen] = useState(false);
  const [id, setId] = useState(); // selected lecture id
  const [key, setKey] = useState(); // selected lecture key
  const [value, setValue] = useState(); // selected lecture value

  // funcion that show the edit modal and declare id + key + value
  const openEdit = (id, key, value) => {
    setId(id);
    setKey(key);
    setValue(value);
    console.log(value);
    setOpen(true);
  };

  const whatsappUrl =
    "https://api.whatsapp.com/send?phone=972543997375&text=היי%20יה-לי,%20אני%20מתעניין%20בהרצאת%20כותרת%20והייתי%20שמח%20לשמוע%20עוד%20פרטים.";
  const emailUrl =
    "mailto:yali.soltz11@gmail.com?subject=כותרת&body=היי%20יה-לי,%20אני%20מתעניין%20בהרצאת%20כותרת%20והייתי%20שמח%20לשמוע%20עוד%20פרטים.";

  return (
    <div className="lecture-container">
      <div className="edit-modal" hidden={!open}>
        <div className="edit-modal-content">
          <textarea
            id="textarea"
            value={value}
            cols="50"
            rows="15"
            onChange={(e) => setValue(e.target.value)}
          ></textarea>

          <button onClick={() => setOpen(false)}>ביטול</button>
          <button
            onClick={() => {
              changeLecture(id, {
                [key]: value,
              });
              setOpen(false);
            }}
          >
            אישור
          </button>
        </div>
      </div>
      {lectures.map((lecture, index) => (
        <div className="lecture-card" key={index}>
          {user.role === "admin" && (
            <select
              className="editor"
              defaultValue=""
              onChange={(e) => {
                switch (e.target.value) {
                  case "title":
                    openEdit(lecture._id, "title", lecture.title);
                    break;

                  case "content":
                    openEdit(lecture._id, "content", lecture.content);
                    break;

                  case "delete":
                    deleteLecture(lecture._id);
                    break;

                  default:
                    break;
                }
              }}
            >
              <option value="" hidden>
                עריכה
              </option>
              <option value="title">שינוי כותרת</option>
              <option value="content">שינוי תוכן</option>
              <option value="delete">מחיקה</option>
            </select>
          )}
          <img
            className="lecture-card-img"
            src={lecture.imgUrl.url}
            alt="ERR"
          />
          <h3 className="lecture-card-title">{lecture.title}</h3>
          <div className="lecture-card-content">
            <div>
              {lecture.content.split(".").map((word, index) => (
                <p key={index}>{word + "."}</p>
              ))}
            </div>
          </div>
          <div className="lecture-order">
            <h4>להזמנה</h4>
            <a
              className="icon"
              href={whatsappUrl.replace("כותרת", lecture.title)}
              target="_blank"
            >
              ווצאפ
            </a>

            <a className="icon" href={emailUrl.replace("כותרת", lecture.title)}>
              אימייל
            </a>

            <a className="icon" href="tel:+972543997375" dir="ltr">
              טלפון
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Lecture;
