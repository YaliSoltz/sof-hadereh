import axios from "axios";
import React, { useState } from "react";

const Login = () => {
  const [user, setUser] = useState({}); // user object with email and passwsord

  // login function that add token to localstorage
  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = "http://localhost:4040/login";
    const { data } = await axios.post(url, user);
    console.log(data);
    localStorage.setItem("x-auth-token", data);
  };

  return (
    <div className="App-header">
      <div className="form m-3">
        <form
          id="form"
          onSubmit={(e) => {
            handleSubmit(e);
          }}
          style={{ border: "solid black 20px" }}
        >
          <input
            type="text"
            className="form-control mb-3"
            placeholder="אימייל:"
            required
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
          <input
            type="text"
            className="form-control mb-3"
            placeholder="סיסמא:"
            required
            onChange={(e) =>
              setUser({
                ...user,
                password: e.target.value,
              })
            }
          />

          <button type="submit" className="btn btn-primary m-2">
            הוספה
          </button>
          <button type="reset" className="btn btn-secondary m-2">
            מחיקה
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
