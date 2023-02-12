import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/user";

const AdminNavBar = () => {
  const { setToken, user } = useContext(UserContext);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("x-auth-token");
    setToken();
    navigate("/");
  };

  return (
    <div>
      <div className="admin-navBar">
        <a className="active"  onClick={() => window.scrollTo(0, 0)}>היי {user.name}</a>

        <Link to="/קצת-עליי" onClick={() => window.scrollTo(0, 0)}>
          קצת עליי
        </Link>
        <Link to="/הרצאות" onClick={() => window.scrollTo(0, 0)}>
          הרצאות
        </Link>
        {/* <Link to="/" onClick={() => window.scrollTo(0, 0)}>
          ייעוץ משפחתי להוספיס בית
        </Link>
        <Link to="/" onClick={() => window.scrollTo(0, 0)}>
          ביקורי בית פרטיים
        </Link> */}
        <Link to="/מאמרים" onClick={() => window.scrollTo(0, 0)}>
          מאמרים
        </Link>
        <Link to="/המלצות-קריאה" onClick={() => window.scrollTo(0, 0)}>
          המלצות קריאה
        </Link>
        <Link to="/מטופלים-משתפים" onClick={() => window.scrollTo(0, 0)}>
          מטופלים משתפים
        </Link>
        <Link to="/add" onClick={() => window.scrollTo(0, 0)}>
          הוספה
        </Link>
        <Link to="/contact-us" onClick={() => window.scrollTo(0, 0)}>
          הודעות חדשות
        </Link>
        <Link to="/personal-sharing" onClick={() => window.scrollTo(0, 0)}>
          שיתופים חדשים
        </Link>
        <button onClick={() => logout()}>התנתקות</button>
      </div>
    </div>
  );
};

export default AdminNavBar;
