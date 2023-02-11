import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/User.css";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="Navbar">
      <span className="nav-logo">הסוף הטוב</span>
      <div className={`nav-items ${isOpen && "open"}`}>
        <Link to="/about-me" onClick={() => window.scrollTo(0, 0)}>
          אודות
        </Link>
        <Link to="/lectures" onClick={() => window.scrollTo(0, 0)}>
          הרצאות
        </Link>
        {/* <Link to="/" className="labelNav" onClick={() => window.scrollTo(0, 0)}>
          ייעוץ משפחתי להוספיס בית
        </Link>
        <Link to="/" className="labelNav" onClick={() => window.scrollTo(0, 0)}>
          ביקורי בית פרטיים
        </Link> */}
        <Link to="/articles" onClick={() => window.scrollTo(0, 0)}>
          מאמרים
        </Link>
        <Link to="/readings" onClick={() => window.scrollTo(0, 0)}>
          המלצות קריאה
        </Link>
        <Link to="/sharings" onClick={() => window.scrollTo(0, 0)}>
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

export default Header;
