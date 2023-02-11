import React, { useContext } from "react";
import { LectureContext } from "../../context/lecture";

const Lecture = () => {
  const { lectures } = useContext(LectureContext);

  const whatsappUrl =
    "https://api.whatsapp.com/send?phone=972543997375&text=היי%20יה-לי,%20אני%20מתעניין%20בהרצאת%20כותרת%20והייתי%20שמח%20לשמוע%20עוד%20פרטים.";
  const emailUrl =
    "mailto:yali.soltz11@gmail.com?subject=כותרת&body=היי%20יה-לי,%20אני%20מתעניין%20בהרצאת%20כותרת%20והייתי%20שמח%20לשמוע%20עוד%20פרטים.";

  return (
    <div className="lecture-container">
      {lectures.map((lecture, index) => (
        <div className="lecture-card" key={index}>
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
