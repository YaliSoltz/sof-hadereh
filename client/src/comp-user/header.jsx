import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/User.css";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="Navbar">
      <span className="nav-logo">הסוף הטוב</span>
      <div className={`nav-items ${isOpen && "open"}`}>
        <Link
          to="/about-me"
          className="labelNav"
          onClick={() => window.scrollTo(0, 0)}
        >
          אודות
        </Link>
        <Link
          to="/lectures"
          className="labelNav"
          onClick={() => window.scrollTo(0, 0)}
        >
          הרצאות
        </Link>
        <Link to="/" className="labelNav" onClick={() => window.scrollTo(0, 0)}>
          ייעוץ משפחתי להוספיס בית
        </Link>
        <Link to="/" className="labelNav" onClick={() => window.scrollTo(0, 0)}>
          ביקורי בית פרטיים
        </Link>
        <Link
          to="/articles"
          className="labelNav"
          onClick={() => window.scrollTo(0, 0)}
        >
          מאמרים
        </Link>
        <Link
          to="/readings"
          className="labelNav"
          onClick={() => window.scrollTo(0, 0)}
        >
          המלצות קריאה
        </Link>
        <Link
          to="/sharings"
          className="labelNav"
          onClick={() => window.scrollTo(0, 0)}
        >
          מטופלים משתפים
        </Link>
        <a
          className="labelNav"
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

export default Header;
