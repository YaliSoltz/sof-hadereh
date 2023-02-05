import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./context/user";

import "./css/Login.css";
const Login = () => {
  const { setToken } = useContext(UserContext);
  const [user, setUser] = useState({}); // user object with email and passwsord
  const [show, setShow] = useState(false); // invalid email or password
  const navigate = useNavigate();

  // login function that add token to localstorage
  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = "http://localhost:4001/login";
    try {
      const { data } = await axios.post(url, user);
      console.log(data);
      localStorage.setItem("x-auth-token", data);
      setToken(data);
      navigate("/");
    } catch (error) {
      setShow(true);
      console.log(error.message);
    }
  };
  return (
    <div className="login-main">
      <div className="center">
        <h1>כניסת מנהל</h1>
        <form
          id="form"
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <div className="txt_field">
            <input
              type="email"
              required
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
            <label>אימייל</label>
          </div>
          <div className="txt_field">
            <input
              type="password"
              required
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
            <label>סיסמא</label>
          </div>
          <div className="forgot-invalid">
            <span className="forgot-password">שכחת סיסמא?</span>
            <article className="invalid" hidden={!show}>
              {" "}
              סיסמא או אימייל שגויים
            </article>
          </div>
          <input type="submit" value="כניסה" className="login" />
        </form>
      </div>
    </div>
  );
};

export default Login;
