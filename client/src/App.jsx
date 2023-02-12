import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import UserInterface from "./comp-user/User-interface";
import { UserContext } from "./context/user";
import Login from "./login";
import "./css/User.css";
import "./css/Admin.css";
import "./css/Login.css";

const App = () => {
  const { user } = useContext(UserContext);

  return (
    <Routes>
      <Route path="/" element={<UserInterface />} />
      <Route path="/בלוג" element={<UserInterface id={0} />} />
      <Route path="/מטופלים-משתפים" element={<UserInterface id={1} />} />
      <Route path="/הרצאות" element={<UserInterface id={2} />} />
      <Route path="/קצת-עליי" element={<UserInterface id={3} />} />
      <Route path="/המלצות-קריאה" element={<UserInterface id={4} />} />
      <Route path="*" element={<UserInterface id={5} />} />
      {user.role === 'admin' && <Route path="/add" element={<UserInterface id={6} />} />}
      {user.role === 'admin' && <Route path="/contact-us" element={<UserInterface id={7} />} />}
      {user.role === 'admin' && <Route path="/personal-sharing" element={<UserInterface id={8} />} />}

      <Route path="/l1o2g3i4n5" element={<Login />} />
    </Routes>
  );
};

export default App;
