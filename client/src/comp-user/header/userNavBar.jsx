import React, { useState } from "react";
import { Link } from "react-router-dom";

const UserNavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [chosenLink, setChosenLink] = useState("");

  return (
    <div className="Navbar">
      <span className="nav-logo" onClick={() => window.scrollTo(0, 0)}>
        הסוף הטוב
      </span>
      <div className={`nav-items ${isOpen && "open"}`}>
        <Link
          to="/קצת-עליי"
          style={{ color: chosenLink === "bio" && "white" }}
          onClick={() => {
            setChosenLink("bio");
            window.scrollTo(0, 0);
          }}
        >
          קצת עליי
        </Link>
        <Link
          to="/הרצאות"
          style={{ color: chosenLink === "lectures" && "white" }}
          onClick={() => {
            setChosenLink("lectures");
            window.scrollTo(0, 0);
          }}
        >
          הרצאות
        </Link>
        {/* <Link to="/" className="labelNav" onClick={() => {setChosenLink('bio') ;window.scrollTo(0, 0)}}>
          ייעוץ משפחתי להוספיס בית
        </Link>
        <Link to="/" className="labelNav" onClick={() => {setChosenLink('bio') ;window.scrollTo(0, 0)}}>
          ביקורי בית פרטיים
        </Link> */}
        <Link
          to="/מאמרים"
          style={{ color: chosenLink === "articles" && "white" }}
          onClick={() => {
            setChosenLink("articles");
            window.scrollTo(0, 0);
          }}
        >
          מאמרים
        </Link>
        <Link
          to="/המלצות-קריאה"
          style={{ color: chosenLink === "readings" && "white" }}
          onClick={() => {
            setChosenLink("readings");
            window.scrollTo(0, 0);
          }}
        >
          המלצות קריאה
        </Link>
        <Link
          to="/מטופלים-משתפים"
          style={{ color: chosenLink === "sharings" && "white" }}
          onClick={() => {
            setChosenLink("sharings");
            window.scrollTo(0, 0);
          }}
        >
          מטופלים משתפים
        </Link>
        <a
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo(0, 100000);
          }}
        >
          יצירת קשר
        </a>
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default UserNavBar;
