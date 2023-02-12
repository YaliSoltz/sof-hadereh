import React, { useContext, useState } from "react";
import { LectureContext } from "../../context/lecture";
import { UserContext } from "../../context/user";
import whatsApp from "../../images/whatsApp.png";
import email from "../../images/email.png";
import phone from "../../images/phone.png";

const Lecture = () => {
  const { lectures, deleteLecture, changeLecture } = useContext(LectureContext);
  const { user } = useContext(UserContext);

  // funcion that change title/content or delete
  const edit = (id, key, value) => {
    let text;
    if (key === "title") text = "הכניסי כותרת חדשה";
    else if (key === "content") text = "הכניסי תוכן חדש";
    value = prompt(text, value);
    if (value) changeLecture(id, { [key]: value });
    console.log(value);
  };
  const whatsappUrl =
    "https://api.whatsapp.com/send?phone=972543997375&text=היי%20יה-לי,%20אני%20מתעניין%20בהרצאת%20כותרת%20והייתי%20שמח%20לשמוע%20עוד%20פרטים.";
  const emailUrl =
    "mailto:yali.soltz11@gmail.com?subject=כותרת&body=היי%20יה-לי,%20אני%20מתעניין%20בהרצאת%20כותרת%20והייתי%20שמח%20לשמוע%20עוד%20פרטים.";

  return (
    <div className="lecture-container">
      {lectures.map((lecture, index) => (
        <div
          key={index}
          className="card"
          style={{
            backgroundImage: `url(${lecture.imgUrl.url})`,
          }}
        >
          {user.role === "admin" && (
            <select
              className="editor"
              defaultValue=""
              onChange={(e) => {
                switch (e.target.value) {
                  case "title":
                    edit(lecture._id, "title", lecture.title);
                    e.target.value = "";
                    break;

                  case "content":
                    edit(lecture._id, "content", lecture.content);
                    e.target.value = "";
                    break;

                  case "delete":
                    deleteLecture(lecture._id);
                    e.target.value = "";
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
          <div className="card-content">
            <h2 className="card-title">{lecture.title}</h2>
            <div className="card-body">
              <div>
                {lecture.content.split(".").map((word, index) => (
                  <p key={index}>{word + "."}</p>
                ))}
              </div>
            </div>
            <div className="order">
              <span className="btn">להזמנה</span>
              <a
                className="icon"
                href="tel:+972543997375"
                dir="ltr"
                style={{ backgroundImage: `url(${phone})` }}
              ></a>
              <a
                className="icon"
                href={emailUrl.replace("כותרת", lecture.title)}
                style={{ backgroundImage: `url(${email})` }}
              ></a>
              <a
                className="icon"
                href={whatsappUrl.replace("כותרת", lecture.title)}
                target="_blank"
                style={{ backgroundImage: `url(${whatsApp})` }}
              ></a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Lecture;
